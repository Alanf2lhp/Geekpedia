function searchArticles() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const articles = document.querySelectorAll('.article');

  articles.forEach(article => {
    const title = article.querySelector('h3').textContent.toLowerCase();
    const description = article.querySelector('p').textContent.toLowerCase();

    if (title.includes(filter) || description.includes(filter)) {
      article.style.display = '';  // mostra o artigo
    } else {
      article.style.display = 'none';  // esconde o artigo
    }
  });
}
