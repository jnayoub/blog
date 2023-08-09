//GET
fetch('http://localhost:3000/comments/get', {
  method: 'GET',
})
  .then(response => response.json())
  .then(data => {
    console.log('Fetched comments:', data);
    // Process the fetched comments here
  })
  .catch(error => {
    console.error('Error fetching comments:', error);
  });

//ADD
const newComment = {
    postId: "testid",
    name: "John",
    content: "This is a new comment."
  };
  
  // Make a POST request to add a new comment
  fetch('http://localhost:3000/comments/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(response => response.json())
  .then(data => {
    console.log('New comment added:', data);
  })
  .catch(error => {
    console.error('Error adding comment:', error);
  });
  


//DELETE
const commentID = '64cfa0a18b2bb47980a0d0a2'; // Replace with your actual comment ID

fetch('http://localhost:3000/comments/delete', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ commentID }) // Send comment ID in the request body
})
  .then(response => response.json())
  .then(data => {
    console.log('Deleted comment:', data);
  })
  .catch(error => {
    console.error('Error deleting comment:', error);
  });


