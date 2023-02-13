let list = document.getElementById("list");
let next = document.getElementById("nextPage")
let prev = document.getElementById("prevPage")
var pageNumber = 1

document.getElementById("pageNumber").innerHTML = `<h1>Page NO:${pageNumber}</h1>`

function showData(page){
  
    fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    .then((res)=>res.json())
    .then((data)=>{
        list.innerHTML = ""
        data.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element.title
            list.appendChild(li)
        });
    })
    
}

document.getElementById("nextPage").addEventListener("click",()=>{
        pageNumber++
        document.getElementById("pageNumber").innerHTML = `<h1>Page NO:${pageNumber}</h1>`
    showData(pageNumber)
})
document.getElementById("prevPage").addEventListener("click",()=>{
    if(pageNumber>1){
        pageNumber--
    }
      
        document.getElementById("pageNumber").innerHTML = `<h1>Page NO:${pageNumber}</h1>`
        showData(pageNumber)
})

