
function toggleSection(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function searchPDFs() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const pdfLists = document.querySelectorAll('.pdf-list li');

  pdfLists.forEach(li => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(input) ? '' : 'none';
  });
}

