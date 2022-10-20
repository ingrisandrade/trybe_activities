# FROM nginx:1.21-alpine AS primeiro-estagio
# WORKDIR /site

# COPY config.toml config.toml
# COPY index.html /site/layouts/index.html
# COPY _index.md /site/content/_index.md

# RUN apk add hugo
# RUN hugo --minify --gc
# RUN mv /site/public/* /usr/share/nginx/html

# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Building Docker images in multiple stages:

# Primeiro estágio
FROM alpine:3.14 AS first-stage
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21 AS second-stage
COPY --from=first-stage /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
