const path = require("path");


module.exports = function (app){

    app.get("/",function(){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};