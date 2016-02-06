# Mondedie-chat

Node.js chat application using Express, Socket.io, Redis and Mithril.

[![dependency](https://img.shields.io/david/mondediefr/mondedie-chat.svg?label=Dependencies)](https://github.com/mondediefr/mondedie-chat/blob/master/package.json#L8)

## Features

- Real-time communication via socket or long-polling
- Using flarum API
- Responsive design
- Private messages
- List of connected users
- Auto-complete usernames, commands and smileys
- Kick/ban
- markdown syntax (with GitHub Flavored Markdown + syntax Highlighting)
- Emoji
- Desktop notifications
- AFK mode
- Poke @user with notification
- Roll dices (+ one special roll)
- User typing hint
- Messages deletion
- Managing network issues
- Work with Chrome, Firefox, IE11/Edge, Opera, Safari
- Smart chatbot (IQ 157)

## Screenshot

![screenshot](http://i.imgur.com/SvOP3ix.png "screenshot")
![screenshot responsive](http://i.imgur.com/yjd28Ud.png "screenshot responsive")

## Heroku deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

---

## Authentication method

### Authentication request

The application sends a HTTP POST request to the API endpoint specified in *AUTH_API_ENDPOINT* environment variable.

#### Request body

- **login** (*String*) : Account username
- **password** (*String*) : Account password

#### Request scheme example

`AUTH_API_ENDPOINT=http://domain.tld/api/auth`

```
POST /api/auth HTTP/1.1
Host: domain.tld
Content-type: application/x-www-form-urlencoded

login=username&password=password
```

### Authentication output structure example

Your auth API endpoint **MUST** return this type of json structure :

```json
{
  "data": {
    "id": "4",
    "attributes": {
      "username": "Hardware",
      "avatarUrl": "http://......."
    }
  },
  "included": {
    "attributes": {
      "nameSingular": "Administrator",
      "namePlural": "Administrators",
      "color": "#7cc359"
    }
  }
}
```

With HTTP status code of **200** when user is successfully authenticated or **403** otherwise.

### Properties

- `data.id` : User ID
- `data.attributes.username` : User name
- `data.attributes.avatarUrl` : User avatar URL
- `data.included.attributes.namePlural` : Group name
- `data.included.attributes.color` : Group color

---

## Vagrant installation

### Requirements:

- [chef-dk](https://downloads.chef.io/chef-dk/)
- [virtualbox](https://www.virtualbox.org/wiki/Downloads)
- [vagrant](https://www.vagrantup.com/downloads.html)

### Vagrant plugins :

```
vagrant plugin install vagrant-berkshelf
vagrant plugin install vagrant-hostmanager
```

### installation

```bash
vagrant up # for installation
vagrant halt # stop vagrant
vagrant up --provision # restart vagrant
```

Open app : `http://mondedie-chat.dev`

---

## Manual installation

### Requirements:

* Node.js
* NPM
* Redis

Clone the project and install dependencies :
```
git clone https://github.com/mondediefr/mondedie-chat.git
cd mondedie-chat

npm install -g bower gulp pm2
npm install

gulp
```

Create .env file in project root with this content :

```
ENV=development
COOKIES_SECRET=xxxxxxxxxxx
SESSION_SECRET=yyyyyyyyyyy
AUTH_API_ENDPOINT=http://domain.tld/api/auth
```

Start application :

```
pm2 start --node-args="--harmony" --name mondedie-chat app.js
```

Open app : http://127.0.0.1:5000/

---

## Developement installation

### Requirements:

* heroku toolbelt : https://toolbelt.heroku.com/
* Node.js
* NPM
* Redis

Clone the project and install dependencies :
```
git clone https://github.com/mondediefr/mondedie-chat.git
cd mondedie-chat

npm install -g bower gulp nodemon
npm install

gulp
```

Create .env file in project root with this content :

```
ENV=development
COOKIES_SECRET=xxxxxxxxxxx
SESSION_SECRET=yyyyyyyyyyy
AUTH_API_ENDPOINT=http://domain.tld/api/auth
```

Create Procfile_dev file in project root with this content :

```
web: nodemon --delay 1 --exec "node --harmony" app.js
worker: gulp watch
```

Start application :

```
foreman start -f Procfile_dev
```

Open app : http://127.0.0.1:5000/

---

## Docker installation

### Build image
```
docker build -t mondedie/chat github.com/mondediefr/mondedie-chat.git
```

### Image usage

#### Ports
* 5000

#### Environment
* ENV=production
* COOKIES_SECRET=xxxxxxxxxxx
* SESSION_SECRET=yyyyyyyyyyy
* AUTH_API_ENDPOINT=http://domain.tld/api/auth
* REDIS_URL=redis://localhost:6379

### Run container
```
docker run -d \
  -p 5000:5000 \
  -e COOKIES_SECRET=xxxxxxxxxxx \
  -e SESSION_SECRET=yyyyyyyyyyyy \
  -e AUTH_API_ENDPOINT=http://domain.tld/api/auth.php \
  -e ENV=production \
  -e REDIS_URL=redis://redis:6379 \
  --link redis:redis \
  mondedie/chat
```

### Run full stack

We have created a docker-compose.yml for example with 3 containers :

* chat
* nginx : reverse-proxy mode
* redis

Create a new vhost with this content :

```nginx
# /docker/nginx/sites-enabled/chat.conf

server {

  listen 80;
  server_name chat.domain.tld;

  location / {
    proxy_pass http://chat:5000;
    # For websockets handshake to establish the upgraded connection
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }

}
```

Run !

```
docker-compose up -d
```

## Roadmap

- Ignore a user
- Private rooms
- Unit tests + coverage
- Build an API
- Increase chatbot IQ

## Contribute

- Fork this repository
- Create a new feature branch for a new functionality or bugfix
- Commit your changes
- Push your code and open a new pull request
- Use [issues](https://github.com/mondediefr/mondedie-chat/issues) for any questions

## Support

https://github.com/mondediefr/mondedie-chat/issues

## License

Apache License Version 2.0

## Contact

- [contact@mondedie.fr](mailto:contact@mondedie.fr)
- [https://twitter.com/mondediefr](https://twitter.com/mondediefr)
