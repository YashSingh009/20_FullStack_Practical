let a = document.querySelector(".todo-input");
var todoButton=document.querySelector(".todo-button");
var todolist=document.querySelector(".todo-list");





todoButton.onclick = create;

function create(e){
    e.preventDefault();
    var newdiv=document.createElement("div");
    newdiv.classList.add("todos");


    var newLi=document.createElement("li");
    newLi.classList.add("todo-item");
    if(a.value!==""){
        newLi.innerHTML = a.value;
        newdiv.appendChild(newLi);

        var checkbtn=document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML='<i class="fa fa-check"></i>';
        newdiv.appendChild(checkbtn);


        var deletebtn=document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML='<i class="fa fa-trash"></i>';
        newdiv.appendChild(deletebtn);

        todolist.appendChild(newdiv);
        a.value="";
    }
    else {
        alert("Input field cannot be blank");
    }
    
}

todolist.addEventListener("click",checkdel);


function checkdel(e){
    var item= e.target;
    var parent=item.parentNode;
    if(item.classList[0]==="delete-btn"){
        
        parent.remove();
    }
    if(item.classList[0]==="check-btn"){
        parent.classList.toggle("tick");

    }
}