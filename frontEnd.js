const showResumeButton = document.getElementById("showResumeButton");
const pdfViewer = document.getElementById("pdfViewer");
const pdfContainer = document.getElementById("pdfContainer");
const showAboutMeButton = document.getElementById("showAboutMeButton");
const aboutMeContainer = document.getElementById("aboutMeContainer");

showAboutMeButton.addEventListener("click", function() {
    if (aboutMeContainer.style.display === "none" || aboutMeContainer.style.display === "") {
        aboutMeContainer.style.display = "block";
    } else {
        aboutMeContainer.style.display = "none";
    }    
});

showResumeButton.addEventListener("click", function() { 
    pdfViewer.src = "SoftwareEngineerResumeWeb.pdf";
    pdfContainer.style.display = "block";
});
