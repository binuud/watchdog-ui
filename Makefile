# Maintainer Binu Udayakumar <binu@dronasys.com>

# import config.
# You can change the default config with `make cnf="config_special.env" build`
# use build_staging.env for staging server (local too)

# Optional environmental variables
cnf ?= local.env
REPO=dronasys-com
AWS_ECR ?= 
APP ?= watchdog-ui

BUILD_VER ?= a1.0.0

DOCKER_HUB_TAG ?= a1.0.0

include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


build-dev: ## Build the react developer container
	@echo "====================> Building Angular Container"
	docker build --build-arg BUILD_VER=$(BUILD_VER) -t $(REPO)/$(APP) -f ui-dev.dockerfile .
	@echo "====================> Successfully build container: $(REPO)/$(APP) ."

run-shell: ## run mock server
	docker run -it -v "$(shell pwd)/app:/app" $(REPO)/$(APP) bash

run: ## run angular dev server
	docker stop $(APP); docker rm $(APP);docker run  --name $(APP) -p "4200:4200" -v "$(shell pwd)/app:/app" $(REPO)/$(APP) start


exec: ## get terminal access to container
	docker exec -it $(APP) sh

nginx-start: ## start nginx server locally
	docker container start watchdog-nginx 

nginx-create: ## 
	docker stop watchdog-nginx; docker rm watchdog-nginx;docker run -p "12080:80"  --name watchdog-nginx -v $(shell pwd)/deployment/local/nginx.conf:/etc/nginx/conf.d/default.conf:ro -d nginx	