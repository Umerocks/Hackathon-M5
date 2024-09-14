var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (envent) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    //type assertion/ get form element..
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experiecne');
    var skillsElement = document.getElementById('skills');
    var RollElement = document.getElementById('rollnumber');
    var QtrElement = document.getElementById('quarter');
    var usernameElement = document.getElementById('username');
    //check if all element are presnt..
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement && RollElement && QtrElement && usernameElement) {
        // Get valye from form
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var rollNumer = RollElement.value;
        var qtr = QtrElement.value;
        var username = usernameElement.value;
        var uniquepath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //create resume html content
        var resumeOutput = "\n <h2>Resume</h2>\n <p><strong>Name:</strong> ".concat(name_1, "</p>\n <p><strong>Email:</strong> ").concat(email, " </p>\n <p><strong>Name:</strong> ").concat(phone, "</p>\n <p><strong>Rollnumber:</strong> ").concat(rollNumer, " </p>\n <p><strong>Quarter:</strong> ").concat(qtr, "</p>\n \n <h3>Education</h3>\n <p>").concat(education, "</p>\n \n <h3>Expereince</h3>\n <p>").concat(experience, "</p>\n \n <h3>Skills</h3>\n <p>").concat(skills, "</p>\n ");
        // Dispaly the resume in the output container..
        // const downloadLinkk = document.createElement('a')
        // downloadLinkk.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
        // downloadLinkk.download = uniquepath;
        // downloadLinkk.textContent = 'Download your Resume';
        // Dispaly the resume in the output container..
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            // create container for buttons..
            var buttonsContainer = document.createComment("div");
            buttonsContainer.id = "buttonContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            // Add Download PDF button
            var downloadButtton = document.createElement("button");
            downloadButtton.textContent = " DOwnload as PDF";
            downloadButtton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButtton);
            // Add Shareable link button
            var shareableLinkButton = document.createAttribute("button");
            shareableLinkButton.textContent = "Copy Shareable link";
            shareableLinkButton.addEventListener("click", function () {
                try {
                    var shareableLinkButton_1 = "https://resumeBaig.com/resumes/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                    // Use clipboard API to copy the shareable link
                    yield navigator.clipboard.writeText(shareableLinkButton_1);
                    alert("Sahreabel link copied to clipboard");
                }
                catch (err) {
                    console.error("Faild to copy link", err);
                    alert("Faild to copy link to clipbaord please try again");
                }
            });
            buttonsContainer.appendChild(shareableLinkButton);
        }
        else {
            console.error("Resume output not found");
        }
    }
});
