document.getElementById('addContentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userData = localStorage.getItem('user');

    if (!userData) {
        return false;
    }
    // Get form data
   // Create a FormData object to handle both text and file data
   var formData = new FormData();
    
   // Append form data (text fields)
   formData.append('icon', document.getElementById('icon').value);
   formData.append('display_description', document.getElementById('display_description').value);
   formData.append('description', document.getElementById('description').value);
   formData.append('title', document.getElementById('title').value);
   formData.append('category', document.getElementById('category').value);
   
   // Append image files
   formData.append('img', document.getElementById('img').files[0]); // Primary image
   formData.append('image', document.getElementById('image').files[0]); // Additional image
   


    // Send the data to the backend API
    fetch('http://localhost/robohost-bck/api/add-content.php', {
     
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('message').innerHTML = '<p style="color: green;">Content added successfully!</p>';
        } else {
            document.getElementById('message').innerHTML = '<p style="color: red;">Error adding content. Please try again.</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerHTML = '<p style="color: red;">An error occurred. Please try again later.</p>';
    });
});
