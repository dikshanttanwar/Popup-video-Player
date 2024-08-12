let body = document.querySelector("body")
let button = document.querySelector("button")

button.addEventListener("click",()=>{
    let div = document.createElement("div")
    let span = document.createElement("span")
    div.classList.add("videoDiv")
    div.innerHTML = `<video controls src="video.mp4"></video>`
    div.appendChild(span)

    body.appendChild(div);
    span.addEventListener("click",()=>{
        div.remove();
    })
})