// Get all the input elements from the form
var form = document.getElementById('resumeform');
var resumeoutputelement = document.getElementById('resume-output');
//   handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var phoneInput = document.getElementById('phone').value;
    var educationInput = document.getElementById('education').value;
    var skillsInput = document.getElementById('skills').value;
    var experienceInput = document.getElementById('experience').value;
    //crate resume output
    var resumeHTML = "\n<h2>Personal Information</h2>\n<p><b>Name:</b>".concat(nameInput, "</p>\n<p><b>Email:</b>").concat(emailInput, "</p>\n<p><b>Phone:</b>").concat(phoneInput, "</p>\n<h3>Education</h3>\n<p>").concat(educationInput, "</p>\n<h3>Experience</h3>\n<p>").concat(experienceInput, "</p>\n<h3>Skills</h3>\n<p>").concat(skillsInput, "</p>\n");
    var resumeoutputelement = document.getElementById('resume-output');
    if (resumeoutputelement) {
        resumeoutputelement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume output elements are missing");
    }
});
