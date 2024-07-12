let lastBlog = JSON.parse(localStorage.getItem('blog'));
function renderBlog(blog) {
    const title = document.createElement('h2');
    const content = document.createElement('p');
    const name = document.createElement('h3');
    const hr = document.createElement('hr');
    const box = document.createElement('div');
    if (blog !== null) {
        document.body.appendChild(box);
        box.setAttribute('style', ' width:100%; height: 100px; margin-bottom: 10px;margin-left: 20px;');
        box.setAttribute('class', "box");
        box.appendChild(title);
        title.textContent = blog.title;
        title.setAttribute('style', 'width:100%; border: 1px; text-align:left;font-size:30px;');
        box.appendChild(hr);
        box.appendChild(content);
        content.textContent = blog.content;
        content.setAttribute('style', 'margin-left: 20px; width:100%; text-align:left;');
        box.appendChild(name);
        name.textContent = `Posted by ${blog.name}`;
        name.setAttribute('style', 'width:50%; text-align:left; font-size:12px;');

    }
}

for (const blog of lastBlog) {
        renderBlog(blog);
    }
