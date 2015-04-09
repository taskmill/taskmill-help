/*
@deploy
@title Example Email send
*/

module.exports = function(req, res, next){
  this.request({
        uri     : '@host/api/blob/master/email.js'
      , method  : 'POST'
      , json    : {
          to      : 'hello@taskmill.io'
        , from    : 'hello@taskmill.io'
        , subject : 'Hello from email.js'
        , text    : 'Hola'
      }
    })
    .pipe(res);
};