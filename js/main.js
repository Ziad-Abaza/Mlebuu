// ============================================
// Function Purposes:

// 1. toggleSidebar: Toggles the visibility of the sidebar when called.
// 2. displayArticleByTitle: Displays a single article based on the title passed through the URL.
// 3. getArticleTitleFromURL: Extracts the title from the URL.
// 4. add more functions...

// ============================================

// Function to toggle the sidebar visibility
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Article data from JSON file
let articlesData;

// Fetching article data from JSON file
fetch('files/article.json')
    .then(response => response.json())
    .then(data => {
        // Storing the article data after retrieving it from the file
        articlesData = data;

        // Displaying the article using the title found in the URL
        displayArticleByTitle(getArticleTitleFromURL());
    });

// Function to display a single article based on the title passed through the URL
function displayArticleByTitle(title) {
    const articlesContainer = document.getElementById("articles-CC");
    const article = articlesData.articles.find(article => article.title === title);

    if (article) {
        // Creating the article element and filling it with content
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <h2 class="article-title">${article.title}</h2>
            <div class="article-item" style="max-width: 750px !important; width: 80%; margin: 20px auto;">
                <img src="${article.image}" alt="${article.title}" id='show-img-article'>
                <h4 class='article-date' style='padding: 0 10px'> ${article.date}</h4>
                <h4 class='article-author'  style='padding: 0 10px'><strong>By:</strong> ${article.author}</h4>
            </div>
            <p style='width: 80%; margin: 30px auto;'>${article.content}</p>
        `;
        articlesContainer.appendChild(articleElement);
    } else {
        // If the article is not found
        const notFoundElement = document.createElement("p");
        notFoundElement.textContent = "لم يتم العثور على المقال المطلوب.";
        articlesContainer.appendChild(notFoundElement);
    }
}

// Extracting the title from the URL
function getArticleTitleFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}
