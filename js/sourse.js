const item = document.querySelector('.item'); //Находим карточку по имени класса
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart) // что происходит когда начинается передвижения элемента
item.addEventListener('dragend', dragend) //  что происходит когда кончается передвижения элемента

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover) // элемент находится над placeholder, куда мы можем его поместить
    placeholder.addEventListener('dragenter', dragenter) // заходим на территорию конкретного placeholder
    placeholder.addEventListener('dragleave', dragleave) // перетащили элемент, но вышли с территории placeholder
    placeholder.addEventListener('drop', dragdrop) // Отпустили элемент
}

function dragstart(event){
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event){
    event.target.className = 'item';
}


function dragover(event){
   event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('hovered')
}

function dragleave(event){
    event.target.classList.remove('hovered')
}

function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
}