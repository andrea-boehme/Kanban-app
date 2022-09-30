/*
 * This function is to load the array "allSignedUser" that contains all users
 * 
 */
async function init() {
    await loadAllSignIns(); // necessary to use "signedUser"
}


function signIn() {
    window.location.href = "./register.html";
}


function backToLogin() {
    window.location.href = "./login.html";
}


async function login() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');   
    let user = allSignedUser.find(u => u.name === username.value && u.password === password.value);
    if (user) {
        console.log('user found');
        window.location.href = "./index.html";
    } else {
        let msgBox = document.getElementById('msgBox');
        msgBox.innerHTML = "Wrong username/password or you are not yet registered. Please click on link below to "
        msgBox.innerHTML += '<i><u>"Create account" <i><u>';
    }
    username.value = '';
    password.value = '';
}

async function signInBackend() {
    let username = document.getElementById('username').value; 
    let password = document.getElementById('password').value; 

    let signedUser = {
        'name': username,
        'password': password
    }
    console.log(signedUser);
    allSignedUser.push(signedUser);
    await saveToBackendSignUps();
    let msgBox = document.getElementById('msgBox');
    msgBox.innerHTML = "Successfully signed in. You will be redirected to login...";
    setTimeout(function(){ window.location.href = "./login.html" }, 5000);
    //let msgBox = document.getElementById('msgBox');
   // msgBox.innerHTML = 'sucessfully registered'; 
    /*
    const urlParams = new URLSearchParams(window.location.search); // query parameter; text in URL created after clic "register"
    const msg = urlParams.get('msg');
    console.log(msg);
    let msgBoxSignIn = document.getElementById('msgBoxSignIn');
    if (msg) {
        console.log(msg);
        msgBoxSignIn.innerHTML = msg; // if query parameter was generated (register done), then display message 
    } else {
        console.log('no');
        msgBoxSignIn.classList.add("d-none"); //display: none
    }
    */
}

function getID(id) {
    return document.getElementById(id);
}

function showPassword() {
    let password = getID("password");
    if (password.type === "password") {
        password.type = "text";
       // getID('eye').src = 'img/notshow.png'
    } else {
        password.type = "password";
       // getID('eye').src = 'img/eye.png'
    }
}


/**
 * This function is to proceed with login as guest without username and password
 * 
 */
 function loginGuest() {
    window.location.href = "./index.html";
}