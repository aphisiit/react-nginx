# ReactJS - Nginx

### Run app
```shell 
yarn start
```

### Build project
```shell
yarn build
```

### Build docker images
```shell
 docker build -t test-nginx .  
 ```

 ### Run containers
 ```shell
 docker run -p 8090:8090 --name react-nginx -d test-nginx:latest
```


### More detail about docker images 
https://hub.docker.com/r/bitnami/nginx