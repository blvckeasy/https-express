import Https from 'https';
import Express from 'express';
import Fs from 'fs';
import Path from 'path';
import morgan from 'morgan';

const app = Express()

app.use(morgan('tiny'))
app.use("/", (req, res, next) => {
    res.send("okay its working")
})

const sslServer = Https.createServer(
    {
        key: Fs.readFileSync(Path.join(process.cwd(), 'cert', 'key.pem')),
        cert: Fs.readFileSync(Path.join(process.cwd(), 'cert', 'cert.pem')),
    }, 
    app
)


sslServer.listen(3443, () => console.log("server is running at 3443 port"))