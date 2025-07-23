FROM node:24-alpine
WORKDIR /app
RUN apk update && apk add bash
RUN npm install -g @angular/cli
EXPOSE 4200
#COPY . .
#RUN npm i
## when using ng cli to create a new angular, node project
#CMD [ "/bin/bash", "-c", "--", "while true; do sleep 30; done;"]
ENTRYPOINT ["npm"]