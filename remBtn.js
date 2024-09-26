let input=document.getElementById("input")
let btn=document.getElementById("btn")
let main=document.getElementById("main")
btn.addEventListener("click",function(){
    let div=document.createElement("div")
    div.id="nextdiv"
    div.innerText=input.value

    let button=document.createElement("button")
    button.innerText="remove"
    button.id="remove"
    button.addEventListener("click",function(){
        div.remove()
    })
    let edit=document.createElement("button")
    edit.innerText="edit"
    edit.id="edit"
    
    edit.addEventListener("click",function(){
          div.contentEditable=true
          div.focus()
    })
    main.appendChild(div)
    main.appendChild(edit)
    main.appendChild(button)
})

 