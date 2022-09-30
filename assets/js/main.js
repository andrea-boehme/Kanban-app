/**
 * This function is used to add a simple backend for the tasks
 * smallestBackendEver
 */
 setURL('https://andrea-boehme.developerakademie.net/kanban-app/smallest_backend_ever');


 /**
  * This function is used to save tasks and updates  as string
  *
  */
 async function save() {
     await backend.setItem('allTasks', JSON.stringify(allTasks));
     // window.location.href = 'index.html';
 }
 
 
 /**
  * This function is used to get and load tasks saved in "allTasks" and "backlog" as arrays
  *
  */
 async function loadTasks() {
    await downloadFromServer();
     allTasks = JSON.parse(backend.getItem('allTasks')) || [];
     backlog = JSON.parse(backend.getItem('backlog')) || [];
 };

 /**
 * Saves array "allSignedUser" to backend
 */
async function saveToBackendSignUps() {
    await backend.setItem('allSignedUser', JSON.stringify(allSignedUser));
}

/**
 * Loads array "allSignedUser" from backend
 */
 async function loadAllSignIns() {
    await downloadFromServer();
    allSignedUser = JSON.parse(backend.getItem('allSignedUser')) || [];
    console.log(allSignedUser);
}

function logOut() {
    window.location.href = "./login.html";
}
