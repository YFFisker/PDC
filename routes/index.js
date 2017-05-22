module.exports = function (app) {
    app.get('/', function (req, res, next) {
        console.log("=======");
        res.render('index');
    });
};
