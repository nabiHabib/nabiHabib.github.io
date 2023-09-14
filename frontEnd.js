const showResumeButton = document.getElementById("showResumeButton");
const pdfViewer = document.getElementById("pdfViewer");
const pdfContainer = document.getElementById("pdfContainer");

showResumeButton.addEventListener("click", function() { 
    pdfViewer.src = "https://github.com/nabiHabib/nabiHabib.github.io/blob/main/Software%20Engineer%20Resume%20(Web).pdf";
    pdfContainer.style.display = "block";
});
