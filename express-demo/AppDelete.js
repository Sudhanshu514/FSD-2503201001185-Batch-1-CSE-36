const fs = require('fs');

fs.unlink("student.txt", (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("File deleted");
    }

});