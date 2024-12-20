// Get all the input elements from the form
 const form=document.getElementById('resumeform') as HTMLFormElement;
 const resumeoutputelement= document.getElementById('resume-output') as HTMLDivElement;
//   handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); //prevent page reload
const nameInput = (document.getElementById('name') as HTMLInputElement).value
const emailInput = (document.getElementById('email') as HTMLInputElement).value;
const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
const educationInput = (document.getElementById('education') as HTMLTextAreaElement).value;
const skillsInput = (document.getElementById('skills') as HTMLTextAreaElement).value;
const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement).value;


//crate resume output
const resumeHTML = `
<h2>Personal Information</h2>
<p><b>Name:</b>${nameInput}</p>
<p><b>Email:</b>${emailInput}</p>
<p><b>Phone:</b>${phoneInput}</p>
<h3>Education</h3>
<p>${educationInput}</p>
<h3>Experience</h3>
<p>${experienceInput}</p>
<h3>Skills</h3>
<p>${skillsInput}</p>
`;
const resumeoutputelement = document.getElementById('resume-output')
if(resumeoutputelement){
    resumeoutputelement.innerHTML = resumeHTML
    }else{
        console.error("The resume output elements are missing");
    }

})
