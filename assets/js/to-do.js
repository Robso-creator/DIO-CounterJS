var insert = document.getElementById("input")
var content = document.getElementById("content")
const ADICIONAR = document.getElementById("ok")



ADICIONAR.addEventListener("click",
    function adicionar(){
     
     if (insert.value != ""){
        var list = document.createElement('p')
        list.id = "listContent"
         var listValue = document.createTextNode(insert.value + ";")
         var inputButton =  document.createElement('input')
         inputButton.type = 'checkbox'
         inputButton.id = 'active'

        list.appendChild(inputButton)
        list.appendChild(listValue)

        content.appendChild(list)


     }
    }
    )

var list1 = document.getElementById("listContent")
const ACTIVE = document.getElementById("active")

