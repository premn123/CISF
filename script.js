function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  }
  
  function searchPDFs() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const pdfLists = document.querySelectorAll('.pdf-list li');
  
    pdfLists.forEach(li => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(input) ? '' : 'none';
    });
  }
  