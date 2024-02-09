const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const respond = (request ,response, object, contentType) =>{
    response.writeHead(200, {'Content-Type':contentType});

    response.write(content);
    response.end();
}