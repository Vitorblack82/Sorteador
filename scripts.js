function generateNumber() {

    const um =Math.ceil(document.querySelector(".input-1").value)
    const dois = Math.floor(document.querySelector(".input-2").value)

    const result=  Math.floor(Math.random() * (dois - um) + um);

alert(result)

    
}



