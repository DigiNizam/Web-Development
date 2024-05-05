function login(username, password) {
    const storedUsername = 'user';
    const storedPassword = 'password';

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        showLoggedInUser();
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');

    showLoggedOutUser();
}

function checkUserLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (isLoggedIn) {
        showLoggedInUser();
    } else {
        showLoggedOutUser();
    }
}


function showLoggedInUser() {
    const loggedInUser = localStorage.getItem('username');

    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('welcomeMessage').classList.remove('hidden');
    document.getElementById('loggedInUser').innerText = loggedInUser;
}


function showLoggedOutUser() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('welcomeMessage').classList.add('hidden');
}

document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
});

document.getElementById('logoutBtn').addEventListener('click', function () {
    logout();
});

window.addEventListener('load', function () {
    checkUserLoginStatus();
});
