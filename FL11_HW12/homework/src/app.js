const rootNode = document.getElementById('root');

let getId = x => document.getElementById(x);

const storageKey = 'items'
let items = JSON.parse(localStorage.getItem(storageKey))

const hashMainPage = '';
const hashAddPage = '#/add';
const hashModifyPage = '#/modify/';

const chromeExist = -1;
const time = 2000;

function mainPage(){
    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.setAttribute('id', 'mainPage')
    rootNode.appendChild(div);

    const h1 = document.createElement('h1');
    div.appendChild(h1);

    const h1Text = document.createTextNode('Simple TODO application');
    h1.appendChild(h1Text);

    const button = document.createElement('button');
    button.setAttribute('id', 'addButton');
    button.setAttribute('type', 'button');
    div.appendChild(button);

    const buttonText = document.createTextNode('Add new task');
    button.appendChild(buttonText);

    if (items.length > 0){
        const divTasks = document.createElement('div');
        divTasks.setAttribute('id', 'listOfTasks')
        div.appendChild(divTasks);
         
        let array = [];
        items.forEach( x => {
            array.push(x);
        })    
        array.forEach( x => {
            const divList = document.createElement('div');
            divList.setAttribute('class', 'task');
    
            let text = document.createElement('p');
            text.setAttribute('class', 'taskText');
            let taskText = x.description;
            text.innerHTML = taskText;

            const checkBox = document.createElement('img');
            if (x.isDone){
                checkBox.src = 'assets/img/done-s.png'
                text.setAttribute('class', 'markedText');
            } else {
                checkBox.src = 'assets/img/todo-s.png';
            }
            checkBox.setAttribute('class', 'icon');
            divList.appendChild(checkBox);
            divList.appendChild(text);
    
            const del = document.createElement('img');
            del.src = 'assets/img/remove-s.jpg';
            del.setAttribute('class', 'icon');
            divList.appendChild(del)
            
            div.appendChild(divList)

            checkBox.onclick = function () {
                array.forEach(x => {
                    if(x.description === taskText){
                        x.isDone = !x.isDone;
                    }
                })
                localStorageChanging()
            }
        
            text.onclick = function () {
                array.forEach(x => {
                    if(x.description === taskText && x.isDone){
                        timer('You can\'t edit already done item')
                    } else if (x.description === taskText && !x.isDone){
                        changePages(hashModifyPage, x.id);
                    }
                })
            }

            del.onclick = function () {
                array = array.filter(x => x.description !== taskText)
                let count = 0
                array = array.map(x => {
                    x.id = count;
                    count++;
                    return x
                })
                localStorageChanging()
            }

            function localStorageChanging(){
                localStorage.clear()
                items = array
                localStorage.setItem(storageKey, JSON.stringify(items))
                changePages(hashMainPage);
            }
        
        })
    } else {
        const h2 = document.createElement('h2');
        div.appendChild(h2);

        const h2Text = document.createTextNode('TODO is empty');
        h2.appendChild(h2Text);
    }  
    
    button.addEventListener('click',() => {
        changePages(hashAddPage);
    })

}

mainPage()

function addPage(){
    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.setAttribute('id', 'addPage')
    rootNode.appendChild(div);

    const h1 = document.createElement('h1');
    div.appendChild(h1);

    const h1Text = document.createTextNode('Add task');
    h1.appendChild(h1Text);

    const form = document.createElement('form');
    form.setAttribute('id', 'addForm');
    div.appendChild(form);

    const input = document.createElement('input');
    input.setAttribute('id', 'textField');
    input.setAttribute('type', 'text');
    form.appendChild(input);

    const buttonCancel = document.createElement('button');
    buttonCancel.setAttribute('class', 'cancel');
    buttonCancel.setAttribute('type', 'button');
    form.appendChild(buttonCancel);

    const buttonCancelText = document.createTextNode('Cancel');
    buttonCancel.appendChild(buttonCancelText);

    const buttonSave = document.createElement('button');
    buttonSave.setAttribute('id', 'saveChanges');
    buttonSave.setAttribute('type', 'button');
    form.appendChild(buttonSave);

    const buttonSaveText = document.createTextNode('Save changes');
    buttonSave.appendChild(buttonSaveText);

    buttonCancel.addEventListener('click',() => {
        changePages(hashMainPage);
    })

    buttonSave.addEventListener('click',() => {
        if (input.value.trim() !== ''){
            if (items) {
                if (items.find(x => x.description === input.value)) {
                    input.value = ''
                    timer('You can\'t add already exist item')
                    return;
                }
                items.push({
                    isDone: false, 
                    id: items.length, 
                    description: input.value
                })
            } else {
                items = [{
                    isDone: false, 
                    id: 1, 
                    description: input.value
                }]
            }
    
            localStorage.setItem(storageKey, JSON.stringify(items))
            input.value = ''
        }
        changePages(hashMainPage);
    })
}

function modifyPage(id){
    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.setAttribute('id', 'modifyPage')
    rootNode.appendChild(div);

    const h1 = document.createElement('h1');
    div.appendChild(h1);

    const h1Text = document.createTextNode('Modify task');
    h1.appendChild(h1Text);

    const form = document.createElement('form');
    form.setAttribute('id', 'modifyForm');
    div.appendChild(form);

    const input = document.createElement('input');
    input.setAttribute('id', 'modifyField');
    input.setAttribute('type', 'text');
    form.appendChild(input);

    const buttonCancel = document.createElement('button');
    buttonCancel.setAttribute('class', 'cancel');
    buttonCancel.setAttribute('type', 'button');
    form.appendChild(buttonCancel);

    const buttonCancelText = document.createTextNode('Cancel');
    buttonCancel.appendChild(buttonCancelText);

    const buttonSave = document.createElement('button');
    buttonSave.setAttribute('id', 'saveChangesM');
    buttonSave.setAttribute('type', 'button');
    form.appendChild(buttonSave);

    const buttonSaveText = document.createTextNode('Save changes');
    buttonSave.appendChild(buttonSaveText);

    let array = [];
    items.forEach( x => {
        if(x.id === id) {
            input.setAttribute('value', x.description);
        }
        array.push(x);
    }) 

    buttonCancel.addEventListener('click',() => {
        changePages(hashMainPage);
    })

    buttonSave.addEventListener('click',() => {
        let count = 0;  
        array.forEach(x => {
            if (x.description === input.value){
                timer('You can\'t add already exist item')
            } else {
                count++
            }
        })
        if (count === array.length){
            array = array.map(x => {
                if(x.id === id){
                    x.description = input.value;
                }
                return x
            })
            localStorage.clear()
            items = array
            localStorage.setItem(storageKey, JSON.stringify(items))
            changePages(hashMainPage);
        }
    })
}

function changePages(hash, id){ 
    window.location.hash = hash;
    event.preventDefault();
    if(window.location.hash === hashMainPage){
        mainPage()
    } else if (window.location.hash === hashAddPage){
        addPage()
    } else if (window.location.hash === hashModifyPage){
        window.location.hash += ':'+ id
        modifyPage(id)
    }
}

function timer(innerText) {
    const div = document.createElement('div');
    if(navigator.userAgent.indexOf('Chrome') !== chromeExist ){
        div.setAttribute('class', 'chrome');
    } else {
        div.setAttribute('class', 'alertBox');
    }
    rootNode.appendChild(div);

    const pError = document.createElement('p');
    pError.setAttribute('class', 'boldText');
    div.appendChild(pError);

    const pErrorText = document.createTextNode('Error!');
    pError.appendChild(pErrorText);

    const p = document.createElement('p');
    div.appendChild(p);

    const pText = document.createTextNode(innerText);
    p.appendChild(pText);
    
    setTimeout(function(){ 
        div.style.display = 'none' 
    }, time);

    div.addEventListener('click', function(){ 
        div.style.display = 'none' 
    });
}
