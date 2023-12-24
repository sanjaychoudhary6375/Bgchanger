const boxs = document.querySelectorAll(".box");
// console.log(boxs)
const body = document.querySelector("body");
// console.log(body)

boxs.forEach((id) =>{
    id.addEventListener("click",(e)=>{
        if (e.target.id == "gray") {
            body.style.backgroundColor = "gray";
        }

        if (e.target.id == "blue") {
            body.style.backgroundColor = "pink";
        }

        if (e.target.id == "green") {
            body.style.backgroundColor = "darkred";
        }

        if (e.target.id == "white") {
            body.style.backgroundColor = "darkblue";
        }
    })
})

