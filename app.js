let input = document.querySelector("#task");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click",(event)=>{
    console.log(input.value);
    let li = document.createElement("li");
    li.innerText = input.value;
    let del_btn = document.createElement("button");
    del_btn.classList.add("delete");
    del_btn.innerText = "Delete";
    li.appendChild(del_btn);
    ul.appendChild(li);
    input.value = null;
});


//Event Delegation
ul.addEventListener("click",(event)=>{
    console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON")
    {
        event.target.parentElement.remove();
    }
    else
    {
        console.log("Please click delete to remove the task");
    }
    
});

