const http = require('http');

// 创建 HTTP 隧道代理。
const proxy = http.createServer((req, res) => {
    fn(req, res)
});
proxy.on('error', (e) => {
    console.log(e)
})
function fn(reqOrigin, resOrigin) {

    const options = {
        hostname: 'nodejs.cn',
        port: 80,
        path: reqOrigin.url,
        method: reqOrigin.method,
        headers: Object.assign({}, reqOrigin.headers, { host: 'nodejs.cn' })
    };

    const req = http.request(options, (res) => {
        res.pipe(resOrigin)
    });

    req.on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
    });

    reqOrigin.pipe(req)

    // 将数据写入请求主体。
    // req.write(postData);
    // req.end();


}
// 代理正在运行。
proxy.listen(8080, '127.0.0.1', () => {


});
