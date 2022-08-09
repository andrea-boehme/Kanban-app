let backlog = [];


/**
 * This function is to load the array "allTasks" that contains all tasks added in add-task sheet
 * 
 */
async function initBacklog() {
    await loadTasks();
    checkStatus();
}


/**
 * This function is to filter the tasks in array "allTasks" and address them the status "backlog"
 * 
 */
function checkStatus() {
    if (allTasks.length != 0) {
        backlog = allTasks.filter((task) => task.status == "backlog");
    }
    updateBacklog();
}


/**
 * This function is to generate the tasks in array "allTasks" and show them in backlog sheet
 * 
 * * @param {Object[]} backlog - an array with all objects with status backlog
 */
function updateBacklog() {
    let backlogTasks = document.getElementById('backlogTasks');
    if (backlog.length == 0) {
        backlogTasks.innerHTML = ``;
    } else {
        backlogTasks.innerHTML = ``;
        for (i = 0; i < backlog.length; i++) {
            let color = colors(backlog);
            backlogTasks.innerHTML +=

                `<tr id="task${i}" class="table-content">
                    <td class='${color}'>${backlog[i]['title']}</th>
                    <td>${backlog[i]['description']}</th>
                    <td>${backlog[i]['category']}</th>
                    <td>${backlog[i]['assigned']}</th>
                    <td><button onclick="addTaskToTodo(${backlog[i]['id']})">Add to Board</button>
                        <button onclick="deleteTaskFromJson(${backlog[i]['id']})">Delete</button></td>
                </tr>
            `;    
        }
    }
}


/**
 * This function is to address colors to the tasks according to their urgency
 * 
 * @param {Object[]} backlog - an array with all objects with status backlog
 */
function colors(backlog) {
    if (backlog[i]['urgency'] == 'Normal') {
        color = 'green';
    } else if (backlog[i]['urgency'] == 'High') {
        color = 'yellow';
    } else if (backlog[i]['urgency'] == 'Very high') {
        color = 'red';
    } else {
        color = 'green';
    };
    return color;
}


/**
 * This function is to move the task from "backlog" sheet to "board" sheet
 * 
 * @param {number} id - unique identification number granted for each task created and pushed into array "allTasks"
 */
async function addTaskToTodo(id) {
    document.getElementById('backlogTasks').innerHTML = ``;
    for (i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['id'] == id) {
            allTasks[i]['status'] = 'toDo';
        }
    }
    await save();
    checkStatus();
}


/**
 * This function is to delete the task definitively from "backlog" and consequently from Array "allTasks"
 * 
 */
async function deleteTaskFromJson(id) {
    document.getElementById('backlogTasks').innerHTML = ``;
        for (i = 0; i < allTasks.length; i++) {
            if (allTasks[i]['id'] == id) {
                allTasks.splice(i, 1);
            }
        };
    await save();
    checkStatus();
} 
