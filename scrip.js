

const boton = document.querySelector(".boton")
 boton.addEventListener("click", pasar)
 function pasar() {
    todo.style.display = "none"
 }

 let todo = document.querySelector(".todo")
 todo.style.display = "flex"

 let segundo = document.querySelector(".segunda")
segundo.style.display = "flex"