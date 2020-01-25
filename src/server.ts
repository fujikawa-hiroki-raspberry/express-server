import * as Express from 'express';
import { listeningPort } from './const';

const app = Express();

// サーバ開始時にログ出力
app.listen(listeningPort, () => {
    const serverStartTime = new Date().toLocaleString();

    // tslint:disable-next-line: no-console
    console.log(`${serverStartTime}: Start Server ${listeningPort}`);
});

// アクセスログ出力
app.use('*', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const message = `${req.host}(${req.hostname}) baseUrl:${req.baseUrl}`;
    const time = new Date().toLocaleString();
    // tslint:disable-next-line: no-console
    console.log(`${time}: ${message}`);
    next();
});

app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    return res.json({ message: 'Hello World.' });
});

export default app;
