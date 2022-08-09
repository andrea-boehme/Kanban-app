let toDo = [];
let inProgress = [];
let testing = [];
let done = [];
let currentDraggedElement;


/**
 * This function is to load the array "allTasks" that contains all tasks added in add-task sheet
 * 
 */
async function initBoard() {
    await loadTasks();
    filterTasks();
}


/**
 * This function is to filter tasks by status to be placed in the according board column
 * 
 */
function filterTasks() {
    toDo = allTasks.filter(t => t['status'] == 'toDo');
    inProgress = allTasks.filter(t => t['status'] == 'inProgress');
    testing = allTasks.filter(t => t['status'] == 'testing');
    done = allTasks.filter(t => t['status'] == 'done');
    updateBoard();
}


/**
 * This function is to render the tasks in according to the status and update the board sheet
 * 
 */
function updateBoard() {
    document.getElementById('toDo').innerHTML = ``;
    for (let i = 0; i < toDo.length; i++) {
        const element = toDo[i];
        element['id'] = allTasks.indexOf(element);
        document.getElementById('toDo').innerHTML += generateTaskHTML(element);
    }

    document.getElementById('inProgress').innerHTML = ``;
    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        element['id'] = allTasks.indexOf(element);
        document.getElementById('inProgress').innerHTML += generateTaskHTML(element);
    }

    document.getElementById('testing').innerHTML = ``;
    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        element['id'] = allTasks.indexOf(element);
        document.getElementById('testing').innerHTML += generateTaskHTML(element);
    }

    document.getElementById('done').innerHTML = ``;
    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        element['id'] = allTasks.indexOf(element);
        document.getElementById('done').innerHTML += generateTaskHTML(element);
    }
}


/**
 * This function is to generate each task in the board sheet as HTML
 * 
 * @param {Object[]} element - each task that was generated to the array according to its status
 */
function generateTaskHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="tasks">
                    <div class="task-items"><b>${element['title']}</b></div>
                    <div class="task-items">${element['category']}</div>
                    <div class="task-items">${element['assigned']}</div>
                    <div class="task-items">${element['dueDate']}</div>   
                    <div class= "icons">
                        <img id="delete-icon" onclick="deleteTask(${element['id']})" src="../assets/img/delete.jpg" class="delete-icon">
                        <img id="openTask" onclick="editTask(${element['id']})" src="../assets/img/edit.jpg" class="edit-icon">
                    </div>
            </div>`;
}


/**
 * This function is to identify the task to be dragged with an "id"
 * 
 * @param {number} id - unique identification number granted for each task created and pushed into array "allTasks"
 */
function startDragging(id) {
    currentDraggedElement = id;
}


/**
 * This function is to allow the task to be an draggable item
 * 
 * @param {Object[]} ev - draggable task that should also be droppable
 */
function allowDrop(ev) {
    ev.preventDefault();
}


/**
 * This function is to move the dragged task and change its status according to the column it is dragged to
 * 
 * @param {string} status - status of task in the kanban-process
 */
function moveTo(status) {
    allTasks[currentDraggedElement]['status'] = status;
    save();
    filterTasks();
}


/**
 * This function is to delete the task definitively from Array "allTasks" and save changes
 * 
 * @param {number} id - unique identification number granted for each task created and pushed into array "allTasks"
 */
function deleteTask(id) {
    for (i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['id'] == id) {
            allTasks.splice(i, 1);
        }
    }
    save();
    filterTasks();
    // loadTasks();
}


/**
 * This function is to edit the data from the selected task
 * 
 * @param {number} id - unique identification number granted for each task created and pushed into array "allTasks"
 */
function editTask(id) {
    let index = allTasks.findIndex(t => t.id == id);
    document.getElementById('board-container').innerHTML += `
                        <div id="changeText" class="changeText">
                         
                            <div class="inputfields">
                                <div class="white-text">Title: 
                                    <input minlength="2" maxlength="25" id="Title_${allTasks[index]['title']}" type="text">
                                </div>
                                <div class="white-text">Category:
                                    <select class="input" id="Category_${allTasks[index]['category']}">
                                        <option hidden></option>
                                        <option>Marketing</option>
                                        <option>Development</option>
                                        <option>Design</option>
                                    </select>
                                </div>
                                <div class="white-text">Decription:
                                    <textarea style="resize: none;" cols="28" rows="8" id="Description_${allTasks[index]['description']}" type="text">
                                    </textarea>
                                </div>
                                <div class="white-text">Due Date:
                                    <input type="date" name="Date" id="DueDate_${allTasks[index]['dueDate']}">
                                </div>
                                <div class="white-text">Urgency:
                                    <select class="input" id="Urgency_${allTasks[index]['urgency']}">
                                        <option hidden></option>
                                        <option>Normal</option>
                                        <option>High</option>
                                        <option>Very high</option>
                                    </select>
                                </div>
                                <div class="white-text">Assigned to:
                                    <select class="input" id="AssignedTo_${allTasks[index]['assigned']}">
                                        <option hidden></option>
                                        <option>Max</option>
                                        <option>Will</option>
                                        <option>Anna</option>
                                        <option>Lucy</option>
                                    </select>
                                </div>

                                <button class="change-button" onclick="changeInput(${index})">Change</button>
                                <button class="close-button" onclick="closeOpenTask()">Cancel</button> 
                            </div>
                     
                        </div>
                    `;
    document.getElementById(`Title_${allTasks[index]['title']}`).value = allTasks[index]['title'];
    document.getElementById(`Category_${allTasks[index]['category']}`).value = allTasks[index]['category'];
    document.getElementById(`Description_${allTasks[index]['description']}`).value = allTasks[index]['description'];
    document.getElementById(`DueDate_${allTasks[index]['dueDate']}`).value = allTasks[index]['dueDate'];
    document.getElementById(`Urgency_${allTasks[index]['urgency']}`).value = allTasks[index]['urgency'];
    document.getElementById(`AssignedTo_${allTasks[index]['assigned']}`).value = allTasks[index]['assigned'];
}


/**
 * This function is to change the data in the Array "allTasks" according to the changes made in editTask function
 * 
 */
function changeInput(index) {

    let toEditTask = allTasks[index];
    let title = document.getElementById(`Title_${allTasks[index]['title']}`).value;
    let category = document.getElementById(`Category_${allTasks[index]['category']}`).value;
    let description = document.getElementById(`Description_${allTasks[index]['description']}`).value;
    let dueDate = document.getElementById(`DueDate_${allTasks[index]['dueDate']}`).value;
    let urgency = document.getElementById(`Urgency_${allTasks[index]['urgency']}`).value;
    let assigned = document.getElementById(`AssignedTo_${allTasks[index]['assigned']}`).value;

    toEditTask.title = title.length > 0 ? title : toEditTask.title;
    toEditTask.category = category.length > 0 ? category : toEditTask.category;
    toEditTask.description = description.length > 0 ? description : toEditTask.description;
    toEditTask.dueDate = dueDate.length > 0 ? dueDate : toEditTask.dueDate;
    toEditTask.urgency = urgency.length > 0 ? urgency : toEditTask.urgency;
    toEditTask.assigned = assigned.length > 0 ? assigned : toEditTask.assigned;

    save();
    filterTasks();
    document.getElementById('changeText').remove();
}


/**
 * This function is to close the window and cancel changes for the selected task
 * 
 */
function closeOpenTask() {
    document.getElementById('changeText').remove();
}

