const http  = require('http');
const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/friends') {
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
      id: 1,
      name: 'Sir Isaac Newton'
    }));
  } else if (req.url === '/mars') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<body>');
    res.write('<p>Hi</p>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
})

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`)
})