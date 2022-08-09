/**
 * This function is to login the app user
 * 
 */
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'User' & password == '1234') {
        document.location.href = "https://andrea-boehme.developerakademie.net/kanban-app/views/index.html";
    } else {
        alert("login failed")
    }
}


/**
 * This function is to proceed with login as guest without username and password
 * 
 */
function loginGuest() {
    document.location.href = "https://andrea-boehme.developerakademie.net/kanban-app/views/index.html";
}