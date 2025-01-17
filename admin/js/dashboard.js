const userData = localStorage.getItem('user');
console.log(userData);

document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is logged in

    if (userData) {
        const parsedData = JSON.parse(userData);
        // Display user data in dashboard
        document.getElementById('userName').textContent = `User: ${parsedData.email}`;
        document.getElementById('lastLogin').textContent = `Last Login: ${parsedData.lastLogin}`;
        document.getElementById('status').textContent = `Status: Logged In`;
    } else {
        window.location.href = 'index.html'; // Redirect to login if not logged in
    }

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function () {
        localStorage.removeItem('user');
        window.location.href = 'index.html'; // Redirect to login page
    });
});


windows.onload = function () {
    if (userData) {
        window.location ='admin/index.html';
    }
}














