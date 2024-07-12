
const name = document.getElementById('username');
const title = document.getElementById('title');
const content= document.getElementById('content');
const submitButton = document.getElementById('submit');
let blogs = [];

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const blog = {
    name: name.value,
    title: title.value,
    content: content.value.trim(),
  };
  blogs.push(blog);
  localStorage.setItem('blog', JSON.stringify(blogs));

});


