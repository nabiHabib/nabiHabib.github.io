const showResumeButton = document.getElementById("showResumeButton");
const pdfViewer = document.getElementById("pdfViewer");
const pdfContainer = document.getElementById("pdfContainer");

showResumeButton.addEventListener("click", function() { 
    pdfViewer.src = "SoftwareEngineerResumeWeb.pdf";
    pdfContainer.style.display = "block";
});
