const fs = require('fs');

fs.writeFile("student.txt", "Hello world", (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }

});