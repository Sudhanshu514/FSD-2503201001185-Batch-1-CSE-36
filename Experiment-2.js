const fs=require('fs');
//create a file
fs.writeFile('student.txt','Hello world ',function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Successfully File created");
    }

});
// Reading a file content
fs.readFile("student.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("file");
        console.log(data);
    }
});

// update data 
fs.appendFile("student.txt","this is a updated file",(err)=>{
    if(err)
    {
        console.log("err");
    }
    else
    {
        console.log("file Successfully updated");
    }
});

// Delete a file
fs.unlink("student.txt",(err)=>{
    if (err) throw err
    else
    {
        console.log("file successfully deleted");
    }
});