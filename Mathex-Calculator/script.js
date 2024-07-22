document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
  });
  
  document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const query = document.getElementById('searchInput').value;
      if (query) {
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
      }
    }
  });
  