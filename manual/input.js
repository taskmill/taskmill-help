/*
@deploy
@input
{
  "content-type" : "text/plain"
}
*/

module.exports = function(req, res, next) {
  var type = typeof req.body;
  res.send(type);
};