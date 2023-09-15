const showResumeButton = document.getElementById("showResumeButton");
const pdfViewer = document.getElementById("pdfViewer");
const pdfContainer = document.getElementById("pdfContainer");
const showAboutMeButton = document.getElementById("showAboutMeButton");
const aboutMeContainer = document.getElementById("aboutMeContainer");

showAboutMeButton.addEventListener("click", function() {
    if (aboutMeContainer.style.display === "none" || aboutMeContainer.style.display === "") {
        aboutMeContainer.style.display = "block";
        pdfContainer.style.display = "none";
    } else {
        aboutMeContainer.style.display = "none";
    }    
});

showResumeButton.addEventListener("click", function() { 
    if (pdfContainer.style.display === "none" || pdfContainer.style.display === "") {
        pdfContainer.style.display = "block";
        aboutMeContainer.style.display = "none"; // Hide the about me section
    } else {
        pdfContainer.style.display = "none"; // Hide the resume section
    }
    pdfViewer.src = "SoftwareEngineerResumeWeb.pdf";
});
