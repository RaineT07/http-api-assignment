

const respondJSON = (request, response, status, object) =>{
    response.writeHead(status, {'Content-Type':'application/json'});
    response.write(JSON.stringify(object));
    response.end();
};

const getSuccess = (request, response) => {
    const responseJson = {
        'message': "response successful!",
    };

    return respondJSON(request, response, 200, responseJson);
}

const getBadRequest = (request, response, acceptedTypes)