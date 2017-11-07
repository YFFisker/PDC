
var request = require('request');


function getHeader() {
    return {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json; charset=UTF-8"
    };
}
module.exports = function (app) {
    app.get('/pdc', function (req, res, next) {
        console.log("=======");
        res.render('index');
    });

    app.get('/services', function (req, res, next) {

        console.log("+++++++++++++++++++++++++");


        request({url:"http://localhost:8090/restful/api/v1/testget/xxxx"},function(error,response,body){
            console.log(body);

        });

        var header = getHeader();
        var option = {
            url: 'http://localhost:8090/restful/api/v1/testpost',
            method: "POST",
            json: true,
            headers: header,
            body: {username:'1',password:'pwd'}
        };

        request(option,function(error,response,body){
            console.log(body);
        });
    });
};
