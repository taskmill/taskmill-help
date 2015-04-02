/*
@deploy
@output
{
  "content-type" : "application/json"
}
*/

module.exports = function(req, res, next) {
  res.send(req.headers);
};