let today = new Date();
let time = ('0' + today.getHours()).slice(-2) + ':' + ('0' + today.getMinutes()).slice(-2);
let date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

let allTasks = [];
let users = ['1.jpg', '2.jpg', '3.jpg', '4.jpeg'];
let userNames = ['Max', 'Will', 'Anna', 'Lucy'];


/**
 * This function is to add new tasks to Kanban. Press the button and the task with the inserted data will be saved in the Array "allTasks"
 * 
 */
async function addTask() {
    let title = document.getElementById('title').value;
    let category = document.getElementById('category').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let urgency = document.getElementById('urgency').value;
    let assigned = document.getElementById('assigned').value;
    let status = 'backlog';

    let task = {
        'id': new Date().getTime(),
        'status': status,
        'title': title,
        'category': category,
        'description': description,
        'createdTime': time,
        'createdDate': date,
        'dueDate': dueDate,
        'urgency': urgency,
        'assigned': assigned
    }

    allTasks.push(task);

    await save();
    clearInput();
    saveConfirmation();
}


/**
 * This function is to clear inputfields so new task can be added
 * 
 */
function clearInput() {
    title.value = '';
    category.value = '';
    description.value = '';
    document.getElementById('dueDate').value = '';
    urgency.value = '';
    assigned.value = '';
    document.getElementById('userImg').src = "../assets/img/profile.png";
}


/**
 * This function is to show a confirmation message to the user that new task is save in backlog
 * 
 */
function saveConfirmation() {
    document.getElementById('save-confirmation').innerHTML = `
                    <div class="confirmation">
                        Task successfully created in backlog!
                    </div>`;
    setTimeout(() => {
        document.getElementById('save-confirmation').innerHTML = `<div class="hide-task"></div>`;
    }, 3000);
}

/**
 * This function is to show users image according to user selected (assigned to) 
 * 
 */
function changeUser() {
    let user = document.getElementById('assigned').value;
    let userImg = document.getElementById('userImg');
    if (user == 'Max') {
        userImg.src = "../assets/img/1.jpg";
    }
    if (user == 'Will') {
        userImg.src = "../assets/img/2.jpg";
    }
    if (user == 'Anna') {
        userImg.src = "../assets/img/3.jpg";
    }
    if (user == 'Lucy') {
        userImg.src = "../assets/img/4.jpeg";
    }
}
