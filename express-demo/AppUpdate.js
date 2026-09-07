const fs = require('fs');

fs.appendFile("student.txt", " This is a new content", (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("File updated");
    }

});