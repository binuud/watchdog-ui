# Maintainer Binu Udayakumar <binu@dronasys.com>

# import config.
# You can change the default config with `make cnf="config_special.env" build`
# use build_staging.env for staging server (local too)

# Optional environmental variables
cnf ?= local.env
REPO=dronasys-com
AWS_ECR ?= 
APP ?= watchdog-ui
APP_DEV=watchdog-ui-dev

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
	docker build --build-arg BUILD_VER=$(BUILD_VER) -t $(REPO)/$(APP_DEV) -f deployment/local/compose/ui-dev.dockerfile .
	@echo "====================> Successfully build container: $(REPO)/$(APP_DEV) ."

run-shell: ## run mock server
	docker run -it -v "$(shell pwd)/app:/app" $(REPO)/$(APP_DEV) bash

run: ## run angular dev server
	docker stop $(APP_DEV); docker rm $(APP_DEV);docker run  --name $(APP_DEV) -p "4200:4200" -v "$(shell pwd)/app:/app" $(REPO)/$(APP_DEV) start

npm-install: ## to install node modules for project
	docker stop $(APP_DEV); docker rm $(APP_DEV);docker run  --name $(APP_DEV) -p "4200:4200" -v "$(shell pwd)/app:/app" $(REPO)/$(APP_DEV) install

exec: ## get terminal access to container
	docker exec -it $(APP_DEV) sh

nginx-start: ## start nginx server locally
	docker container start watchdog-nginx 

nginx-create: ## 
	docker stop watchdog-nginx; docker rm watchdog-nginx;docker run -p "12080:80"  --name watchdog-nginx -v $(shell pwd)/deployment/local/compose/nginx.conf:/etc/nginx/conf.d/default.conf:ro -d nginx	

compose-dev-up: ## docker compose up - watchdog backend, and frontend in dev mode
	echo "Access via http://localhost:9080/home"
	cd deployment/local/compose && docker compose -f docker-dev-compose.yaml up