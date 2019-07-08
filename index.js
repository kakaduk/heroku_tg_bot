var express = require('express');
var token = '690558991:AAEATIOm04wGsvPKWRfv0T6KWQE5YJ6JLg4';
var Bot = require('node-telegram-bot-api');
var bot = new Bot(token, { polling: true });

var app = express();
app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
    console.log('Web server response %s  %s', req.ip, response.ip);
    //res.json({ version: packageInfo.version });
});
app.get("/telegram/:pageName:pageExt", function(request, response){
    let pageName = request.params["pageName"];
    let pageExt = request.params["pageExt"];
    bot.sendMessage(821965270, 'Hello ' + pageName + '!' + pageExt).then(function () {
        // reply sent!
      });
    response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});
app.get("/contact", function(request, response){
    response.send("<h1>Контакты</h1>");
});
var port = 80;
var server = app.listen(port, function () {
  var host = server.address().address;
  

  console.log('Web server started at http://%s:%s', host, port);
});

module.exports = function (bot) {
  app.post('/' + bot.token, function (req, res) {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
