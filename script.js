// create html elements using dom
document.body.innerHTML=
`<nav class="nav-container">
<h1>Ice and Fire API<h1></nav>
<div id="container" class="main-container"></div>`

// logic to get
async function getData(){
    try{
        let response = await fetch("https://www.anapioficeandfire.com/api/books")
        let data = await response.json()
        // console.log(data)
        container.innerHTML=""

        // display function
        var count = 0; 
        await data.forEach((dataObj)=>{
           display(dataObj, count++)
           display(dataObj, count++)
           display(dataObj, count++)
           display(dataObj, count++)
           display(dataObj, count++)

        })
        
        // character function
        var count1=0
        await data.forEach((dataObj)=>{
            charName(dataObj, count1++)
            charName(dataObj, count1++)
            charName(dataObj, count1++)
            charName(dataObj, count1++)
            charName(dataObj, count1++)

         })

       
    }catch(error) {
        (error)=>console.log(error);
    }
};
getData()

// diaplay called 10 times to create 10 books containers
const display = (obj, id)=>{
    container.innerHTML +=`
    <div id="childContainer+${id}" class="child-container">
    <p>Name: ${obj.name}</p>
    <p>ISBN: ${obj.isbn}</p>
    <p>pages: ${obj.numberOfPages}</p>
    <p>Authors: ${obj.authors}</p>
    <p>Publisher: ${obj.publisher}</p>
    <p>Released: ${obj.released}</p>
    </div>
    `
}

// characters function called 10 times to add characters to each book
function charName(obj, id1,){
    var charArray = obj.characters.slice(11,16)
    // console.log(charArray)
    for(let i=0;i<charArray.length;i++){
        // console.log(charArray[i])
        fetch(charArray[i])
            .then((res)=>res.json())
            .then((data)=> {
                document.getElementById("childContainer+"+id1).innerHTML += 
                `<p id="character">Character: ${data.name}</p>`
                // console.log(data.name)
            })
            .catch((error)=>console.log(error))
    }
}