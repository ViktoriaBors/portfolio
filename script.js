/*Toggle menu on mobile*/
let toggleBtn = document.querySelector(".navbar-toggler")

let links = document.querySelector("#navbar")

toggleBtn.addEventListener("click", function (){
    if(links.classList.contains("hidden")){
        links.classList.remove("hidden")
    } else {
        links.classList.add("hidden")
    }
})

/*Accordion - educaiton*/
let headers = document.querySelectorAll(".accordion-header")

let accordionBody = document.querySelectorAll(".accordion-collapse")

for(let i = 0; i < headers.length; i++){
    headers[i].addEventListener("click", function(){
        if(headers[i].nextElementSibling.classList.contains("hidden")){
            headers[i].nextElementSibling.classList.remove("hidden")
        } else{
            headers[i].nextElementSibling.classList.add("hidden")
        }
    })
}
