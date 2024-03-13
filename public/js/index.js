window.addEventListener("load", function(){
    const a = document.querySelectorAll("a")
    const main = document.querySelector(".container");
    const p = document.querySelectorAll("p");
    const h2 = document.querySelector("h2");

    const userName = window.prompt("Ingrese su nombre")
    if (!userName) {
        h2.innerText += "Invitado"
    }else{
        h2.innerText += userName
    }

    h2.style.textTransform= "uppercase"

    a.forEach(element => {
        element.style.color="#E51B3E"
    });

    const confirmed = window.confirm("¿Desea colocar un fondo de pantalla?")
    console.log("confirmed: ",confirmed)
    if (confirmed) {
        document.querySelector("body").classList.add("fondo")
    }
    let num = 0
    p.forEach(element =>{
        num += 1
        if (num % 2 == 0) {
            element.classList.add("destacadoPar")
        }else{
            element.classList.add("destacadoImpar")
        }
        console.log("num: ",num);
    })
   

    main.style.display="block"
})  