let input, button, viewTask, error, newElement, tab, remouveTask;

input = document.querySelector("#input");
// input.value = "Bienvenue"
button = document.querySelector('#button');
viewTask = document.querySelector('#ViewTask');

tab = [Add_Task,];

button.addEventListener('click', Add_Task);
function Add_Task() {
  if (input.value != "") {
    // for( let i = 0; i <  )
    newElement = document.createElement("li");
    viewTask.split;
    viewTask.appendChild(newElement);
    newElement.innerHTML = input.value 
    input.value = ""
    Remouve_Task()
    console.log(tab);
    tab.push[viewTask]

    // console.log(input.value);
  }
  else {
    error = document.querySelector("#error");
    error.innerHTML = "<span style='font-weight: bold; color: white '>Veillez définir votre tâche</span>"
    input.value = ""
  }
}
function Remouve_Task() {
  remouveTask = document.createElement("button");
  remouveTask.innerHTML = "<span style= 'color : red'> X </span>"
  newElement.append(remouveTask)
  console.log(remouveTask.button);
  // viewTask.forEach(newElement.split.append(remouveTask));
  remouveTask.addEventListener("click", function(event){
    let e= event.target;
    
    console.log(viewTask)
// viewTask(this).remouveChild(remouveTask(this))
  })

}
// function viewTask(){

// }
function saveData() {
  localStorage.setItem(tab.target)
}
function getData() {
  localStorage.getItem(tab.taget)
}