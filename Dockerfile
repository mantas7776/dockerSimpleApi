FROM node:8

WORKDIR /server

COPY . /server
RUN npm install -g yarn
RUN yarn

EXPOSE 3000
CMD [ "yarn", "start" ]