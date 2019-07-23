let rootNode = document.getElementById('root');
let getId = x => document.getElementById(x);
let addForm = document.forms['addForm'];
addForm.addButton.disabled = true;
addForm.textField.addEventListener('click', function () {
    getId('addButton').disabled = false;
})
addForm.textField.addEventListener('blur', function () {
    if (this.value === '') {
        getId('addButton').disabled = true;
    } else if (this.value !== '') {
        getId('addButton').disabled = false;
    }
})

let count = 0
addForm.addButton.addEventListener('click', function () {
    count++
    let maxCount = 10;
    let checkBox = document.createElement('i');
    checkBox.className = 'material-icons';
    checkBox.innerHTML = 'check_box_outline_blank';
    let edit = document.createElement('i');
    edit.className = 'material-icons';
    edit.innerHTML = 'edit';
    let del = document.createElement('i');
    del.className = 'material-icons';
    del.innerHTML = 'delete';
    let div = document.createElement('div');
    div.className = 'task';
    div.draggable = true;
    let taskText = addForm.textField.value;
    let text = document.createElement('p');
    text.innerHTML = taskText;
    text.className = 'taskText';
    addForm.textField.value = '';
    addForm.addButton.disabled = true;
    let textfield = document.createElement('span');
    textfield.appendChild(text);
    textfield.appendChild(edit);

    div.appendChild(checkBox);
    div.appendChild(textfield);
    div.appendChild(del);
    getId('listOfTasks').appendChild(div)
    checkBox.onclick = function () {
        this.innerHTML = 'check_box'
    }
    del.onclick = function () {
        let label = div.parentNode;
        label.removeChild(div);
        count--
        getId('fullList').innerHTML = ''
        addForm.textField.disabled = false;
    }
    edit.onclick = function () {
        let editTxt = document.createElement('input');
        editTxt.placeholder = 'Add text'
        editTxt.type = 'text'
        let save = document.createElement('i');
        save.className = 'material-icons';
        save.innerHTML = 'save';
        let editField = document.createElement('span');
        editField.id = 'edit';
        editField.appendChild(editTxt);
        editField.appendChild(save);
        div.appendChild(editField);

        save.onclick = function () {
            text.innerHTML = editTxt.value;
            editTxt.value = '';
            editField.style.display = 'none';
        }
    }

    if (count === maxCount) {
        getId('fullList').innerHTML = 'Maximum item per list are created'
        addForm.textField.disabled = true;
    }
})

let val = null

getId('listOfTasks').addEventListener('dragstart', function (move) {
    val = move.target;
});

getId('listOfTasks').addEventListener('dragover', function (move) {
    if (move.target.className === 'task') {
        move.preventDefault();
    }
});

getId('listOfTasks').addEventListener('drop', function (move) {
    if (move.target.className === 'task') {
        move.preventDefault();
        getId('listOfTasks').insertBefore(val, move.target);
    }
});
