const express = require("express")
const app = express()
const port = 3000
var bodyPaser = require("body-parser")
var friends = ["ironman", "captin", "spiderman", "hulk"]

app.use(bodyPaser.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home")
})

app.post("/addfriends", function(req, res){
    var newFriend = req.body.newfriend
    friends.push(newFriend)
    res.redirect("/friends")
})

app.get("/friends", function(req, res){
    res.render("friends", {friends : friends })
})

app.listen(port, function(){
    console.log("connected!")
})