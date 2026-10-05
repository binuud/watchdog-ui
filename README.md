# watchdog-ui
Dashboard for watchdog, this is the angular UI. The ui is packaged and served along with the backed. 
[Click here for WatchDog Project](https://github.com/binuud/watchdog)

* [UI Description](/docs/UI-HELP.md)

## Developer mode

Build the angular/cli-with-chrome-headless docker image from the below project
https://github.com/binuud/containers

The node modules required for this project are not checked in to the git repository. Only the meta data is checked in. So you have to run npm-install to download all the required node modules.
Build the node image, and use the below command to mount the repo and install the required node modules. This has to be done only for the first time you run this project. You can exec in to the docker shell, and install other modules as required.
```
## open a shell into the angular docker container,
## mounts the angular project in the container
make run-angular-shell 

## install the node modules
npm install
```

To start the angular ui in dev mode
```
make run
```

To run the UI, with the mock server. Below command starts the json-server to run a mock-server, this takes data from mocks/db.json.
It also starts the UI in mock mode.
* change proxy.mock.conf.json - to add new api endpoints
* change mocks/db.json - to add new data
```
make run-mock
```

To start the project in developer mode.
```
make compose-dev-up 
```

Access frontend using the following address

http://localhost:9080/home

This will start the watchdog backend service with config from ./deployment/local/compose/domains-config.yaml.
The frontend will be in developer mode, allowing user to edit the angular project and see live results.

## Credits

| For             | License     | Repo                                    | 
| :---            |    :----    |          :---                           |
| Angular         | MIT         | https://angular.dev                     |
| Bootstrap       | MIT         | https://getbootstrap.com/               |

