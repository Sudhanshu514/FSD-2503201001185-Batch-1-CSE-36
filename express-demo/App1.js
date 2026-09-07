function greet(name,callback) {
    console.log('HEllo'+name);
    callback();
}
function bye(){
    console.log('GoodBye');
}
greet('john',bye);