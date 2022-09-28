function menuHighlight(menu) {
    if (menu == 'board') {
        document.getElementById('board').classList.add('active');
    } else {
        document.getElementById('board').classList.remove('active');
    }
    if (menu == 'backlog') {
        document.getElementById('backlog').classList.add('active');
    } else {
        document.getElementById('backlog').classList.remove('active');
    }
    if (menu == 'add-task') {
        document.getElementById('add-task').classList.add('active');
    } else {
        document.getElementById('add-task').classList.remove('active');
    }
    if (menu == 'help') {
        document.getElementById('help').classList.add('active');
    } else {
        document.getElementById('help').classList.remove('active');
    }
    if (menu == 'imprint') {
        document.getElementById('imprint').classList.add('active');
    } else {
        document.getElementById('imprint').classList.remove('active');
    }
    if (menu == 'legal') {
        document.getElementById('legal').classList.add('active');
    } else {
        document.getElementById('legal').classList.remove('active');
    }
}