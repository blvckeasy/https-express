# HTTPS server with Express.js
In this project you will learn how to build an https server.

# Usage

Clone this repository.
```bash
$ git clone https://github.com/blvckeasy/https-server
```

Download all the packages in the package.json file. 
```bash
$ npm install
```

create a folder and enter it inside
```bash
$ mkdir cert

$ cd ./cert
```

and download openssl [here.](https://www.openssl.org/source/)

```bash
$ openssl genrsa -out key.pem

$ openssl req -new -key key.pem -out csr.pem

$ openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

change directory back
```bash
$ cd ../
```

If you are in production, run the app as follows.
```bash
$ npm start
```

if in development, run as follows.
```bash
$ npm run dev
```

# Author
[Telegram](https://t.me/blvckeasy)

[LinkedIn](https://www.linkedin.com/in/islom-abdurahmonov-992928230/)