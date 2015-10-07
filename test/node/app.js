/*
var thinky = require('thinky')({
  db: "test",
  host: "localhost",
  port: 8015,
  path: "/",
  wsProtocols: ["binary"],
  secure: false
})
*/
var thinky = require('thinky')({
  //host: "localhost",
  port: 8015,
  //path: "/",
  //wsProtocols: ["binary"],
})
var type = thinky.type
var pd = console.log.bind(console)

var User = thinky.createModel("User", {
  id: type.string(),
  name: type.string()
})
User.get("1").pluck("name").then(function(user) {
  pd(user)
})
/*
User.filter({}).then(function(users) {
  pd(users)
})
*/
/*
User.getAll().then(function(users) {
  pd(users)
})
*/
