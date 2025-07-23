# Architecture

The UI renders data from the backend.
All states are maintained by the backend.

The UI interfaces with the backend using RestAPI, 

Backend Rest API 

[OpenApiSpec] (../app/src/app/gen/v1/watchdog/openapi.json)

UI uses a stateless service to query the backend. 
watchdog-ui/app/src/app/core/services/domain-service.ts

### Folder

Angular project is under the /app folder in this project

* app Angular project
    * components - All Angular components
    * core - All Services, and other core files
    * gen - auto generated interfaces, api files
    * pages - standalone pages
* docs Documnetation folder
* deployment - deployment files for local and production as applicable
