
function generateResume(event) {
    event.preventDefault();

    let fullName = document.querySelector("#inputName").value;
    let Profession = document.querySelector("#inputProf").value;
    let eMail = document.querySelector("#inputEmail").value;
    let phoneNo = document.querySelector("#inputPh").value;
    let linkedIn = document.querySelector("#inputLink").value;
    let gitHub = document.querySelector("#inputGit").value;
    let introductionPara = document.querySelector("#inputProfile").value;
    let postOne = document.querySelector("#inputExp1").value;
    let postOneDuration = document.querySelector("#inputDur1").value;
    let postOneworkOne = document.querySelector("#one-inputW1").value;
    let postOneworkTwo = document.querySelector("#one-inputW2").value;
    let postOneworkThree = document.querySelector("#one-inputW3").value;
    let postTwo = document.querySelector("#inputExp2").value;
    let postTwoDuration = document.querySelector("#inputDur2").value; 
    let postTwoworkOne = document.querySelector("#two-inputW1").value;
    let postTwoworkTwo = document.querySelector("#two-inputW2").value;
    let postTwoworkThree = document.querySelector("#two-inputW3").value;
    let education = document.querySelector("#inputEdu").value;
    let yearOfCompletion = document.querySelector("#inputTime").value;
    let universityName = document.querySelector("#inputUni").value;
    let skillsList = document.querySelector("#inputSkill").value;

    let resumeContainer = document.querySelector(".resume-container");
    let inputContainer = document.querySelector(".input-container");
  

    resumeContainer.style.display = "block";

    let html = `<form class="info">
            <h1 class="title">${fullName}</h1>
            <p class="infoDet"><span class="post">${Profession}</span></p>
            <p class="infoDet">E-mail: <span class="email">${eMail}</span></p>
            <p class="infoDet">Phone: <span class="phone">${phoneNo}</span></p>
            <p class="infoDet">LinkedIn: <a style="text-decoration: none; color: purple;" target="_blank" href="${linkedIn}">${linkedIn}</a></p>
            <p class="infoDet">GitHub: <a style="text-decoration: none; color: purple;" target="_blank" href="${gitHub}">${gitHub}</a></p>
            <div class="details">
                <h2>Profile</h2>
                <p class="pDet">${introductionPara}</p>
                <h2>Experience</h2>
                <h1 class="job1">${postOne}</h1>
                <p class="time-period1">${postOneDuration}</p>
                <ul>
                    <li class="job1-work1">${postOneworkOne}</li>
                    <li class="job1-work2">${postOneworkTwo}</li>
                    <li class="job1-work3">${postOneworkThree}</li>
                </ul>
                <h1 class="job2">${postTwo}</h1>
                <p class="time-period2">${postTwoDuration}</p>
                <ul>
                    <li class="job2-work1">${postTwoworkOne}</li>
                    <li class="job2-work2">${postTwoworkTwo}</li>
                    <li style="margin-bottom: 20px;" class="job2-work3">${postTwoworkThree}</li>
                </ul>
                <h2>Education</h2>
                <p class="pDet">${education}</p>
                <p class="pDet">${universityName}</p>
                <p class="pDet">${yearOfCompletion}</p>
                <h2>Skills</h2>
                <p class="skill">${skillsList}</p>
            </div>
        </form>
`;

    resumeContainer.innerHTML = html;
    inputContainer.style.display = "none"; 

    let generateAnother = document.createElement("button");
    generateAnother.innerText = "Generate Another Resume";
    generateAnother.classList.add("another");
    generateAnother.style.display = "block";

    resumeContainer.appendChild(generateAnother);

    generateAnother.addEventListener("click", function () {
        inputContainer.style.display = "block";
        resumeContainer.style.display = "none"; 
        document.querySelector(".input-container form").reset(); 
    });

    let downloadPDF = document.createElement("button");
    downloadPDF.innerText = "Download as PDF";
    downloadPDF.classList.add("pdf");
    downloadPDF.style.display="block";
    resumeContainer.appendChild(downloadPDF);

 

  
    downloadPDF.addEventListener("click", function () {
        let form=document.querySelector(".email-form");
        let emailForm = document.createElement("div");
    emailForm.classList.add("email-form");

   


   

       

        /*resumeContainer.style.display="none";*/
        generateAnother.style.display = "none";
        downloadPDF.style.display = "none";
    
       
        const options = {
            margin: [0.8, 0, 0, 0],       
            filename: `${fullName}_Resume.pdf`, 
            image: { type: 'png', quality: 0.98 }, 
            html2canvas: { scale: 3 },          
            jsPDF: { unit: 'in', format: [10.5, 13], orientation: 'portrait' }
        };
    
        html2pdf().from(resumeContainer).set(options).save().then(() => {
            
            generateAnother.style.display = "block";
            downloadPDF.style.display = "block";
        });
    });

    
    
   
}    




document.querySelector(".submit").addEventListener("click", generateResume);

