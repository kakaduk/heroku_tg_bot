var express = require('express');
var token = '690558991:AAEATIOm04wGsvPKWRfv0T6KWQE5YJ6JLg4';
var Bot = require('node-telegram-bot-api');
var bot = new Bot(token, {polling: true});
var app = express();
app.get("/", function(request, response){
    response.send("<h1>Главная страница+</h1>");
    console.log('Web server response %s  %s', req.ip, response.ip);
    //res.json({ version: packageInfo.version });
});
app.get("/telegram/:pageName:pageExt", function(request, response){
    let pageName = request.params["pageName"];
    let pageExt = request.params["pageExt"];
    bot.sendMessage(821965270, pageName + ' ' + pageExt).then(function () {
        // reply sent!
      });
    response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});
app.get("/telegram2/:Id:pageName:pageExt", function(request, response){
  let Id = request.params["Id"];
  let pageName2 = request.params["pageName"];
  let pageExt2 = request.params["pageExt"];
  bot.sendMessage(Id, pageName2 + ' ' + pageExt2).then(function () {
      // reply sent!
    });
  response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});
app.get("/contact", function(request, response){
    response.send("<h1>Контакты</h1>");
});
var port = process.env.PORT ||  80;
var server = app.listen(port, function () {
  var host = server.address().address;
  

  console.log('Web server started at http://%s:%s', host, port);
});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id,'Здорова ,' + msg.from.first_name + '! Че надо?')
});
//require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
//  res.end('')
//})
