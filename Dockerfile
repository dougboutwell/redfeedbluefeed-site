FROM nginx:alpine
MAINTAINER Doug Boutwell "doug@dougboutwell.com"

COPY ./build /usr/share/nginx/html
EXPOSE 80
