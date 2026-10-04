# Maintainer Binu Udayakumar <binu@dronasys.com>

# import config.
# You can change the default config with `make cnf="config_special.env" build`
# use build_staging.env for staging server (local too)

# Optional environmental variables
cnf ?= .local.env
REPO=dronasys-com
AWS_ECR ?= 
APP ?= watchdog-ui
APP_DEV=watchdog-ui-dev

BUILD_VER ?= a1.0.0
DOCKER_HUB_TAG ?= a1.0.0

## for building angular image
## clone project https://github.com/binuud/containers
ANGULAR_CLI_DEV=angular-cli-headless-chrome

include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help



run: ## run angular dev server
	echo "Access using http://binuud.loc:4200/home"
	docker run --rm -it --name $(APP) -p 4200:4200  -v ./app:/app $(REPO)/$(ANGULAR_CLI_DEV)  npm run start

run-mock: ## run angular dev server with mocj json db
	echo "Access using http://binuud.loc:4200/home"
	docker run --rm -it --name $(APP) -p 4200:4200 -p 3000:3000 -v ./app:/app $(REPO)/$(ANGULAR_CLI_DEV)  npm run start:mock

run-json-server: ## run json-server in existing container
	docker exec -it $(APP) npm run start:json-server

run-angular-shell: ## run angular npm container shell, for running npm install, and  angular commangs
	docker run --rm -it -v ./app:/app $(REPO)/$(ANGULAR_CLI_DEV) bash

exec: ## get terminal access to container
	docker exec -it $(APP) bash

nginx-start: ## start nginx server locally
	docker container start watchdog-nginx 

nginx-create: ## 
	docker stop watchdog-nginx; docker rm watchdog-nginx;docker run -p "12080:80"  --name watchdog-nginx -v $(shell pwd)/deployment/local/compose/nginx.conf:/etc/nginx/conf.d/default.conf:ro -d nginx	

compose-dev-up: ## docker compose up - watchdog backend, and frontend in dev mode
	echo "Access via http://localhost:9080/home"
	cd deployment/local/compose && docker compose -f docker-dev-compose.yaml up

copy-generated-proto-service: ## copy generated files from watchdog proto
	cp -R ../watchdog/gen/web/ app/src/app/gen/