function searchArticles() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const articles = document.getElementsByClassName("article");

  for (let i = 0; i < articles.length; i++) {
    const title = articles[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
    if (title.includes(input)) {
      articles[i].style.display = "block";
    } else {
      articles[i].style.display = "none";
    }
  }
}
