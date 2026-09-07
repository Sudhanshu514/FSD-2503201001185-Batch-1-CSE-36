const form = document.getElementById("enrollmentForm");

form.addEventListener("submit", function(e){

    // Name
    let name = document.getElementById("name").value.trim();

    if(name.length < 3){
        alert("Name must contain at least 3 characters.");
        e.preventDefault();
        return;
    }

    // Father's Name
    let father = document.getElementById("fatherName").value.trim();

    if(father.length < 3){
        alert("Father's Name is invalid.");
        e.preventDefault();
        return;
    }

    // Admission Number
    let admission = document.getElementById("admissionNo").value.trim();

    if(admission.length < 5){
        alert("Enter valid Admission Number.");
        e.preventDefault();
        return;
    }

    // Date of Birth
    let dob = document.getElementById("dob").value;

    if(dob == ""){
        alert("Please select Date of Birth.");
        e.preventDefault();
        return;
    }

    // Branch
    let branch = document.querySelector('input[name="userBranch"]:checked');

    if(branch == null){
        alert("Please Select Branch.");
        e.preventDefault();
        return;
    }

    // Section
    let section = document.getElementById("section").value.trim();

    if(section == ""){
        alert("Please Enter Section.");
        e.preventDefault();
        return;
    }

    // Gender
    let gender = document.querySelector('input[name="gender"]:checked');

    if(gender == null){
        alert("Please Select Gender.");
        e.preventDefault();
        return;
    }

    // Mobile Number
    let mobile = document.getElementById("mobile").value;

    if(!/^[6-9]\d{9}$/.test(mobile)){
        alert("Enter Valid 10 Digit Mobile Number.");
        e.preventDefault();
        return;
    }

    // Email
    let email = document.getElementById("email").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Enter Valid Email Address.");
        e.preventDefault();
        return;
    }

    // Aadhaar
    let aadhaar = document.getElementById("aadhaar").value;

    if(!/^\d{12}$/.test(aadhaar)){
        alert("Aadhaar Number must contain exactly 12 digits.");
        e.preventDefault();
        return;
    }

    // Candidate Photo
    let photo = document.getElementById("photo");

    if(photo.files.length == 0){
        alert("Please Upload Candidate Photo.");
        e.preventDefault();
        return;
    }

    // Signature
    let sign = document.getElementById("sign");

    if(sign.files.length == 0){
        alert("Please Upload Signature.");
        e.preventDefault();
        return;
    }

    // Aadhaar File
    let aadhaarFile = document.getElementById("aadhaarFile");

    if(aadhaarFile.files.length == 0){
        alert("Please Upload Aadhaar File.");
        e.preventDefault();
        return;
    }

    // Declaration
    let agree = document.getElementById("agree");

    if(!agree.checked){
        alert("Please Accept the Declaration.");
        e.preventDefault();
        return;
    }

    alert("Enrollment Form Submitted Successfully.");
});