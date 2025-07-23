# watchdog-ui
Dashboard for watchdog

## Developer mode

The node modules required for this project are not checked in to the git repository. Only the meta data is checked in. So you have to run npm-install to download all the required node modules.
Build the node image, and use the below command to mount the repo and install the required node modules. This has to be done only for the first time you run this project. You can exec in to the docker shell, and install other modules as required.
```
make build-dev
make npm-install
```

To start the project in developer mode.
```
make compose-dev-up 
```

Access frontend using the following address

http://localhost:9080/home

This will start the watchdog backend service with config from ./deployment/local/compose/domains-config.yaml.
The frontend will be in developer mode, allowing user to edit the angular project and see live results.

