document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const requestBody = {
        email: email,
        password: password,
    };

    try {
        const response = await fetch('http://localhost/robohost-bck/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        if (response.ok && data.status === 'success') {
            // Store user data in localStorage
            const user = {
                email: email,
                lastLogin: new Date().toLocaleString(), // Store the last login time
            };
            localStorage.setItem('user', JSON.stringify(user));

            // Redirect to dashboard
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page
        } else {
            document.getElementById('message').innerHTML = `<p style="color: red;">${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error during login:', error);
        document.getElementById('message').innerHTML = `<p style="color: red;">An error occurred. Please try again later.</p>`;
    }
});
