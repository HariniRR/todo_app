const text=document.getElementById('iptask');
const addbutton=document.getElementById('button');
const listele=document.getElementById('ulist');
//eventlisterners
function buttonClick(){
let inputTask=text.value.trim();
if(inputTask!=""){
    var list=document.createElement("li");
    list.textContent=inputTask;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    list.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        list.remove();
    });
    listele.appendChild(list);
    text.value="";

}
}
