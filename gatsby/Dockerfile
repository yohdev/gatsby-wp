FROM node:15-slim
RUN apt update && apt upgrade -y && \
    apt install gcc g++ make python git libc6-dev build-essential libpng-dev \
    libjpeg-dev libvips-dev libvips musl-dev node-gyp pngquant webp -y
# The port gatsby runs on
EXPOSE 8000
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install && yarn cache clean
COPY . .
CMD ["yarn", "cdev"]