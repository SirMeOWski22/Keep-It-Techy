document.addEventListener('DOMContentLoaded', () => {
  const createPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          const errorData = await response.json();
          alert('Failed to create post: ' + errorData.message);
        }
      } catch (err) {
        alert('Failed to create post: ' + err.message);
      }
    } else {
      alert('Title and content cannot be empty');
    }
  };

  const createPostForm = document.querySelector('#create-post-form');
  if (createPostForm) {
    createPostForm.addEventListener('submit', createPostFormHandler);
  }
});
