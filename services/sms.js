/*
@deploy
@title Example SMS send
*/

module.exports = function(req, res, next){
  this.request({
        uri     : '@host/api/exec/master/sms.js'
      , method  : 'POST'
      , json    : {
          'to' : '+14251234567',
          'body' : 'Hi from TaskMill'
        }
    })
    .pipe(res);
};