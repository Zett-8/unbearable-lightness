FROM ubuntu

WORKDIR /app

COPY . /app

RUN npm install --global yarn

RUN yarn install

RUN yarn build
