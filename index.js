document.getElementById("latest-meal").addEventListener("load",getLm());
function getLm(){
    const xhr = new XMLHttpRequest();
        xhr.open("Get","latest.json");
        xhr.onload = function () {

        const data =JSON.parse(xhr.responseText);
        const data1=data.eat;
        console.log(data1);
    var outPut=''; 
    for(let i in data1){
    outPut+=`  
    <div class="col-lg-3 ">
    <img src="${data1[i].latest}" width="95%">
    <p>${data1[i].tag}</p>
    
    </div>`;
 
    }
    document.getElementById("mealss").innerHTML = outPut;
}

    xhr.send();
}

document.getElementById("Popular-Ingredients").addEventListener("load",getPi());
function getPi(){
    const xmlReq=new XMLHttpRequest();
    xmlReq.open("Get","pi.json");
    xmlReq.onload=function(){
        const data=JSON.parse(xmlReq.responseText);
        const data1=data.meat;
        var disPlay="";
        for(let i in data1)
        {
            disPlay+=`<div class="col-lg-3 ">
                 <img id="image" src="${data1[i].piTag}" width="95%">
                 <p>${data1[i].name}</p>
                 </div>`;
        }
        document.getElementById("Ingredients").innerHTML=disPlay;
    }
    xmlReq.send();
}

document.getElementById("random-meals").addEventListener("load",getRm());
function getRm(){
    const xmlReq=new XMLHttpRequest();
    xmlReq.open("Get","rm.json");
    xmlReq.onload=function(){
        const data=JSON.parse(xmlReq.responseText);
        const data1=data.meat;
        var disPlay="";
        for(let i in data1)
        {
            disPlay+=`<div class="col-lg-3 ">
                 <img id="image" src="${data1[i].piTag}" width="95%">
                 <p>${data1[i].name}</p>
                 </div>`;
        }
        document.getElementById("random").innerHTML=disPlay;
    }
    xmlReq.send();
}


document.getElementById("random-Ingredients").addEventListener("load",getRi());
function getRi(){
    const xmlReq=new XMLHttpRequest();
    xmlReq.open("Get","ri.json");
    xmlReq.onload=function(){
        const data=JSON.parse(xmlReq.responseText);
        const data1=data.riList;
        var disPlay="";
        for(let i in data1)
        {
            disPlay+=`<div class="col-lg-3 ">
                 <img id="image" src="${data1[i].piImg}" width="95%">
                 <p>${data1[i].name}</p>
                 </div>`;
        }
        document.getElementById("randIng").innerHTML=disPlay;
    }
    xmlReq.send();
}






// document.getElementById("latest-meal").addEventListener("load",getData());
// function getData(){
//     const xhr = new XMLHttpRequest();
//         xhr.open("Get","https://www.themealdb.com/api/json/v1/1/search.php?f=a");
//         xhr.onload = function () {
//         const data =JSON.parse(xhr.responseText);
//         const data1=data.meals;
//     var outPut=''; 
//     for(let i in data1){
//     outPut+=`  
//     <div class="col-lg-3 ">
//     <img id="image" src="${data1[i].strMealThumb}" width="95%">
//     ${data1[i].strMeal}
//     </div>`;
 
//     }
//     document.getElementById("mealss").innerHTML = outPut;
//     };

//     xhr.send();
// }

// document.getElementById("Popular-Ingredients").addEventListener("load",getPi());
// function getPi(){
//     const xhr = new XMLHttpRequest();
//         xhr.open("Get","https://www.themealdb.com/api/json/v1/1/list.php?c=list");
//         xhr.onload = function () {

//         const data =JSON.parse(xhr.responseText);
//         const data1=data.meals;
//     var outPut=''; 
//     for(let i in data1){
//     outPut+=`  
//     <div class="col-lg-3 ">
//     <img id="image" src="${data1[i].strMealThumb}" width="95%">
//     ${data1[i].strMeal}
//     </div>`;
 
//     }
//     document.getElementById("Ingredients").innerHTML = outPut;
//     };

//     xhr.send();
// }