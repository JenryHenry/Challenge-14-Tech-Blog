const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  // add variable to store the currently logged in user                         !!!!!!! >>>>>>>>>>>

  if (title && content) {
    const response = await fetch('/api/blogposts/', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};

document.querySelector('.blog-form').addEventListener('submit', newBlogHandler);
