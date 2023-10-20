// viewer.js
const params = new URLSearchParams(window.location.search);
const pdfFileName = params.get("pdf");
if (pdfFileName) {
    const pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.src = `assets/${pdfFileName}`;
}