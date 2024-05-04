const btnAdd = document.getElementById('btnAdd');
const notification = document.getElementById('aviso');
const notificationTxt = document.getElementById('notification-txt');
notification.style.display = 'flex';
notificationTxt.innerText = "Bem-Vindo(a)!..."

let Ilist = [];
let cont=0;
function add(){
    const txt = document.getElementById('txtTask');
    if(txt.value == ''){
        notification.style.display = 'flex';
        notificationTxt.innerText = "Escreva uma tarefa!..."
    }else{
        Ilist.push({
           task: txt.value,
           check: false
        });
        criarTask();
        txt.value = '';
        notification.style.display = 'none';
    }
}

function criarTask(){
 
    let newLi ='';
    Ilist.forEach((item , index) => {
        newLi += `<li class="task"">
                    <p class="${item.check && "done"}" onclick="checked(${index})">
                     ${item.task} 
                     </p><button onclick="del(${index})">
                    </button>
                  </li>`
    });
    document.getElementById('container-task').innerHTML = newLi;
}
function checked(index){
    Ilist[index].check = !Ilist[index].check;
    if(  Ilist[index].check  == true){
        cont++;
    }
    contador(cont);
    criarTask();
}

function del(index){
    Ilist.splice(index, 1);
    criarTask();
}



function limpar(){
    Ilist.splice(0, Ilist.length);
    criarTask();
}

function contador(value){
    document.getElementById('cont').innerText = `Tarefas Concludias: ${value}`
}


btnAdd.addEventListener('click' ,add);