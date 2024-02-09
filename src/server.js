const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js')
const jsonHandler = require('./JSONResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/' : htmlHandler.getIndex,
    '/style.css' : htmlHandler.getCSS,
    'success' : jsonHandler.getSuccess,
    '/badRequest': jsonHandler.getBadRequest,
    '/unauthorized':jsonHandler.getUnauthorized,
    '/forbidden':jsonHandler.getForbidden,
    '/internal':jsonHandler.GetInternal,
    '/notImplemented':jsonHandler.getNotImplemented,
    'notFound': jsonHandler.getNotFound
};


const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);

    const acceptedTypes = request.headers.accept.split(',');

    const handler =urlStruct[parsedUrl.pathname];
    if(handler) handler(request,response,acceptedTypes, params);
    else urlStruct.notFound(request,response,params);

    
}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});