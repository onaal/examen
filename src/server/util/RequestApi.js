'use strict';

const ApiRequest = {};

ApiRequest.get = (url ='', onSucess = (data) => {}, contentype) => {
    return ApiRequest.CoreRequest({
        method : 'GET',
        url : url,
        success : onSucess,
        contentType:contentype,
    })
}


ApiRequest.CoreRequest = config =>{
    try{
        fetch(config.url, {
            headers: new Headers({
                'Authorization': 'Bearer ',
                'Content-Type': config.contentType,
                body: JSON.stringify(config.datas || null)
            }),
            method: config.method,
        }).then( res =>res.json())
        .then( json => {
            return config.success(json)
        })
        .catch(error => {
            console.log(error)
        })
    } catch(e) {
        console.log(e);
    }
};

module.exports = ApiRequest;