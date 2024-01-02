
//dev.to embedding
fetch('https://dev.to/api/articles/akachianabanti/building-a-secure-api-with-fastapi-postgresql-and-hanko-authentication-3pei')
    .then(response => response.json())
    .then(data => {
        var blogPostElement = document.getElementById('blog-post');

        var blogLink = document.createElement('a');
        blogLink.target = "_blank";
        blogLink.rel = "noopener noreferrer"
        blogLink.href = data.url
        var titleElement = document.createElement('h2');

        titleElement.textContent = data.title;

        blogLink.appendChild(titleElement);
        
        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = data.description;
        
        var imageElement = document.createElement('img');
        imageElement.src = data.cover_image;

        var BlogTextElement = document.createElement('div');
        BlogTextElement.classList.add('blog-text');
        BlogTextElement.appendChild(blogLink);
        BlogTextElement.appendChild(descriptionElement);

        blogPostElement.appendChild(imageElement);
        blogPostElement.appendChild(BlogTextElement);
        
    });

