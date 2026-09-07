const EventEmitter=require("events");
const user = new EventEmitter();

user.on ("login",(username)=>{
    console.log(username + " has logged in ..");
});
user.on ("login",(username)=>{
    console.log( "welcome " + username + "!");
});
user.on ("logout",(username)=>{
    console.log(username + " has logged out ..");
});
user.emit("login","sudhanshu");
user.emit("logout","sudhanshu");