
// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(envent){
    event?.preventDefault();
 
    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experiecne') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const RollElement = document.getElementById('rollnumber') as HTMLInputElement;
    const QtrElement = document.getElementById('quarter') as HTMLInputElement;
 

    const usernameElement = document.getElementById(
        'username' 
)as HTMLInputElement;

if(nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement && RollElement && QtrElement && usernameElement)
    {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;
        const rollNumer = RollElement.value;
        const qtr = QtrElement.value;
        const username = usernameElement.value;
        const uniquepath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`
 
     //create resume output
 const resumeOutput = `
 <h2>Resume</h2>
 <p><strong>Name:</strong> ${name}</p>
 <p><strong>Email:</strong> ${email} </p>
 <p><strong>Name:</strong> ${phone}</p>
 <p><strong>Rollnumber:</strong> ${rollNumer} </p>
 <p><strong>Quarter:</strong> ${qtr}</p>
 
 <h3>Education</h3>
 <p>${education}</p>
 
 <h3>Expereince</h3>
 <p>${experience}</p>
 
 <h3>Skills</h3>
 <p>${skills}</p>
 `;

 const downloadLinkk = document.createElement('a')
downloadLinkk.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLinkk.download = uniquepath;
downloadLinkk.textContent = 'Download your Resume';
 
 const resumeOutputElement = document.getElementById('resumeOutput')
 if(resumeOutputElement){
 resumeOutputElement.innerHTML = resumeOutput
 resumeOutputElement.appendChild(downloadLinkk)
 }else{
     console.error('the resume output are missing')
 }
 }else{
     console.error('one or more output are missing')
 
 }
 
 
 })
