/**
 * This function is to include the navigation bar in all sheets of the Kanban
 * 
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

/**
 * This function is used to add a simple backend for the tasks
 * smallestBackendEver
 */
setURL('https://andrea-boehme.developerakademie.net/kanban-app/smallest_backend_ever');


/**
 * This function is used to save tasks and updates  as string
 *
 */
function save() {
    backend.setItem('allTasks', JSON.stringify(allTasks));
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
