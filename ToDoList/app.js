//alert("working")
const item = document.querySelector("#item")
const todo = document.querySelector(".todobox")

item.addEventListener("keyup",function(event){
    if(event.key=="Enter" && item.value!=""){
        console.log(item.value)
        create_task(item.value)
        this.value=""
    }
});

function create_task(task){
    const listitem = document.createElement("li")
    listitem.innerHTML =             
                    `${task}
                    <div class="cross">
                        X
                    </div>`
    todo.appendChild(listitem)
    const cross = listitem.querySelector(".cross")
    cross.addEventListener("click",function(e){
        console.log("clicked")
        todo.removeChild(listitem)
});
}

