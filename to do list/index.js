let todoul=document.getElementById("todo-ul");
let input=document.getElementById("input-type");
let addbtn=document.getElementById("btn");



addbtn.addEventListener("click",addtask);
input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        addtask();
    }
});

function addtask(){
 
        let newinput=input.value;
    
        if(newinput!==""){
    
        let newtodo=document.createElement("li");
        newtodo.innerText=newinput;
        let deletebtn=document.createElement("button");
        deletebtn.innerText="X";
        deletebtn.classList.add("deletetodoo");
        deletebtn.addEventListener("click",function(){
            newtodo.remove();
    
        });
        newtodo.appendChild(deletebtn);
        todoul.appendChild(newtodo);
        input.value="";
    
        }
    
   
    
}

