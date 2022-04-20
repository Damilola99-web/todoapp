// creating todo by typing in the input 
document.querySelector('#name').addEventListener('keypress', (e)=> {
    if (e.key == 'Enter') {
        if (e.target.value == '') {
            alert('You entered an invalid todo')
        } else {
            let todo = ''
            let todoself = ` 
            <div class="eachTodo dark">
                <button><img src="images/icon-check.svg" alt=""></button>
                <h3>${e.target.value}</h3>
                <img src="images/icon-cross.svg" alt="">
            </div>
            `;
            todo = todoself;
            document.querySelector('.checkTodo').innerHTML += todo;
            e.target.value = '';
    
            if (document.querySelector('img.light').classList.contains('none')) {
                // console.log('first')
                let each = document.querySelectorAll('.eachTodo')
                for (const todoo of each) {
                    todoo.classList.remove('dark')
                    
                }
            }
            setTimeout(() => {
                for (const buttons of doneButtons) {
                    buttons.addEventListener('click', (e)=> {
                        e.currentTarget.classList.toggle('styling');
                        e.currentTarget.parentElement.classList.toggle('eachTodo');
                        e.currentTarget.parentElement.classList.toggle('doneTodo');
                        
                        
            
                    })
                }
            }, 1000);
        }
    }
    
    
});

// theme toggler light
document.querySelector('.light').addEventListener('click', ()=> {
    document.querySelector('img.light').classList.toggle('none')
    document.querySelector('img.darkimg').classList.toggle('none')
    document.querySelector('input').classList.toggle('dark')
    document.querySelector('.todosummary').classList.toggle('dark')
    document.querySelector('.belowmobile').classList.toggle('dark')
    let each = document.querySelectorAll('.eachTodo')
    for (const todoo of each) {
        todoo.classList.remove('dark')
        
    }
    let eachdone = document.querySelectorAll('.doneTodo')
    for (const todoo of eachdone) {
        todoo.classList.remove('dark')
        
    }
    // document.querySelector('img').style.backgroundColor = 'transparent'
    document.querySelector('.main').classList.add('lightbacc')
    document.querySelector('.todoAndTheme h1').style.color = 'white'
    // document.body.classList.toggle('dark')
    document.querySelector('.main').style.backgroundColor = 'white'
    document.body.style.backgroundColor = 'white'
});

// theme toggler dark
document.querySelector('img.darkimg').addEventListener('click', ()=> {
    document.querySelector('img.light').classList.toggle('none')
    document.querySelector('img.darkimg').classList.toggle('none')
    document.querySelector('.main').style.backgroundColor = 'hsl(235, 21%, 11%)'
    document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
    document.querySelector('input').classList.toggle('dark')
    document.querySelector('.todosummary').classList.toggle('dark')
    document.querySelector('.belowmobile').classList.toggle('dark')
    let each = document.querySelectorAll('.eachTodo')
    for (const todoo of each) {
        todoo.classList.add('dark')
    }
    let eachdone = document.querySelectorAll('.doneTodo')
    for (const todoo of eachdone) {
        todoo.classList.add('dark')
    }
    // document.querySelector('img').style.backgroundColor = 'transparent'
    document.querySelector('.main').classList.remove('lightbacc')
    document.querySelector('.todoAndTheme h1').style.color = 'white'
    // document.body.classList.toggle('dark')
});

// showing the number of completed
let length = '';
setInterval(() => {
    const eachlength = [document.querySelectorAll('.eachTodo').length]
    length = eachlength[0];
    document.querySelector('.keeptrack').innerHTML = `${length} items(s) left`
}, 1000);

let below = document.createElement('div')
below.innerHTML +=  `<h3 class = 'keeptrack'></h3>`;
below.innerHTML +=  `<div class = 'filter'><h3 class = 'all blue'>All</h3><h3 class = 'active'>Active</h3><h3 class = 'completed'>Completed</h3></div>`;
below.innerHTML +=  `<h3 class = 'clearcomp'>Clear Completed</h3> `;
below.classList.add('todosummary');
below.classList.add('dark');   
document.querySelector('.todo').append(below);

// removing todo by pressing a button 
setInterval(() => {
    let deleteButton = document.querySelectorAll('img[src="images/icon-cross.svg"]')
    for (const buttons of deleteButton) {
        buttons.addEventListener('click', (e)=> {
            e.currentTarget.parentElement.remove()
        })
    }
}, 1000);

// styling done todos 
let doneButtons = null
setInterval(() => {
    doneButtons = document.querySelectorAll('.eachTodo button')
    
}, 500);
setTimeout(() => {
    for (const buttons of doneButtons) {
        buttons.addEventListener('click', (e)=> {
            e.currentTarget.classList.toggle('styling');
            e.currentTarget.parentElement.classList.toggle('eachTodo');
            e.currentTarget.parentElement.classList.toggle('doneTodo');
            
            

        })
    }
}, 1000);

// clearing completed
document.querySelector('.clearcomp').addEventListener('click', ()=> {
        let deleteButton = document.querySelectorAll('.doneTodo')
        for (const buttons of deleteButton) {
            buttons.remove()
        }
})
document.querySelector('.active').addEventListener('click', ()=> {
    document.querySelector('.active').classList.add('blue')
    document.querySelector('.all').classList.remove('blue')
    document.querySelector('.completed').classList.remove('blue')
    let addButton = document.querySelectorAll('.eachTodo')
    for (const buttons of addButton) {
        buttons.style.display = 'flex'
    }
        let deleteButton = document.querySelectorAll('.doneTodo')
        for (const buttons of deleteButton) {
            buttons.style.display = 'none'
        }
})
document.querySelector('.activemobile').addEventListener('click', ()=> {
    document.querySelector('.activemobile').classList.add('blue')
    document.querySelector('.allmobile').classList.remove('blue')
    document.querySelector('.completedmobile').classList.remove('blue')
    let addButton = document.querySelectorAll('.eachTodo')
    for (const buttons of addButton) {
        buttons.style.display = 'flex'
    }
        let deleteButton = document.querySelectorAll('.doneTodo')
        for (const buttons of deleteButton) {
            buttons.style.display = 'none'
        }
})
document.querySelector('.completed').addEventListener('click', ()=> {
    document.querySelector('.active').classList.remove('blue')
    document.querySelector('.all').classList.remove('blue')
    document.querySelector('.completed').classList.add('blue')
        let deleteButton = document.querySelectorAll('.eachTodo')
        for (const buttons of deleteButton) {
            buttons.style.display = 'none'
        }
        let addButton = document.querySelectorAll('.doneTodo')
        for (const buttons of addButton) {
            buttons.style.display = 'flex'
        }
})
document.querySelector('.completedmobile').addEventListener('click', ()=> {
    document.querySelector('.activemobile').classList.remove('blue')
    document.querySelector('.allmobile').classList.remove('blue')
    document.querySelector('.completedmobile').classList.add('blue')
        let deleteButton = document.querySelectorAll('.eachTodo')
        for (const buttons of deleteButton) {
            buttons.style.display = 'none'
        }
        let addButton = document.querySelectorAll('.doneTodo')
        for (const buttons of addButton) {
            buttons.style.display = 'flex'
        }
})
document.querySelector('.all').addEventListener('click', ()=> {
    document.querySelector('.active').classList.remove('blue')
    document.querySelector('.all').classList.add('blue')
    document.querySelector('.completed').classList.remove('blue')
        let deleteButto = document.querySelectorAll('.doneTodo')
        for (const buttons of deleteButto) {
            buttons.style.display = 'flex'
        }
        let deleteButton = document.querySelectorAll('.eachTodo')
        for (const buttons of deleteButton) {
            buttons.style.display = 'flex'
        }
})
document.querySelector('.allmobile').addEventListener('click', ()=> {
    document.querySelector('.activemobile').classList.remove('blue')
    document.querySelector('.allmobile').classList.add('blue')
    document.querySelector('.completedmobile').classList.remove('blue')
        let deleteButto = document.querySelectorAll('.doneTodo')
        for (const buttons of deleteButto) {
            buttons.style.display = 'flex'
        }
        let deleteButton = document.querySelectorAll('.eachTodo')
        for (const buttons of deleteButton) {
            buttons.style.display = 'flex'
        }
})







