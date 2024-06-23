const btnAdd = document.getElementById('btnAdd');
const notification = document.getElementById('aviso');
const notificationTxt = document.getElementById('notification-txt');
const txt = document.getElementById('txtTask');
notification.style.display = 'flex';
notificationTxt.innerText = "Bem-Vindo(a)!..."

let Ilist = [];
let cont=0;
function add(){
    if(txt.value == ''){
        notification.style.display = 'flex';
        notificationTxt.innerText = "Escreva uma tarefa!..."
        let intervalo = setTimeout(()=>{
            notification.style.display = 'none';
        },2500);
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
                  </li>`;
    });
    document.getElementById('container-task').innerHTML = newLi;
    window.localStorage.setItem("lista",JSON.stringify(Ilist));

}

function checked(index){
    Ilist[index].check = !Ilist[index].check;
    if( Ilist[index].check  == true){
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

const carregarTarefas = ()=>{
    const tarefasCarregadas = localStorage.getItem("lista");
    if(tarefasCarregadas){
        Ilist = JSON.parse(tarefasCarregadas);
        criarTask();
    }
 
}
document.addEventListener("keydown", (evt)=>{
    let key = evt.key;
    if(key == "Enter"){
        add();
    }
});

btnAdd.addEventListener('click' ,add);
window.addEventListener("load",carregarTarefas);
