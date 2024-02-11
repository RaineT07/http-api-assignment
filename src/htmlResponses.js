const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response, types) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  console.log(types);
  response.write(index);
  response.end();
};

const getCSS = (request, response, types) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

module.exports = {
  getIndex,
  getCSS,
};
