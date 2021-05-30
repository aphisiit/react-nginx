FROM bitnami/nginx:latest

COPY build/ /app
COPY infrastructure/nginx-server.conf /opt/bitnami/nginx/conf/server_blocks
RUN ls -lah /app

EXPOSE 8090