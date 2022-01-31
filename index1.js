function getEndPointData(endPointURL, callBackFunction){
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
    
        
        callBackFunction(data);
  
    }
    xhr.send();
  }
 


function generateCell(title,img){
    let dataText=$.get( "template.html", function( data ) {
         
        let result= data.replace("##IMG##",img);
        result=data.replace("##TITLE##",title);
        console.log(result);
        document.getElementById("mealss").innerHTML=result;
      });
      
//   return `<div style="margin:0 0 10px 0;" class="col-lg-3" >
//     <a href=""><img class="img-style" src="${img}"width="95%"></a>
//     <a href="" style="color:#d57d1f; font-size:25px">${title}</a>
//      </div>`;
}
generateCell();

getEndPointData("latest.json", bindingData);
function bindingData(data) {
    
    for(let i in data.eat){
        var img=data.eat[i].latest;
        var title= data.eat[i].tag;
        
        document.getElementById("mealss").innerHTML+=generateCell(title,img);
     
    }
}

getEndPointData("pi.json",bindingData1);
function bindingData1(popularData){
 for(let i in popularData.meat){
    var img=popularData.meat[i].piTag;
    var title = popularData.meat[i].name;
    
    document.getElementById("Ingredients").innerHTML+=generateCell(title,img);
 
 }
}

getEndPointData("rm.json",bindingData2);
function bindingData2(rendomData){
for(let i in rendomData.meat){
    var title=rendomData.meat[i].name;
    var img = rendomData.meat[i].piTag;
    document.getElementById("random").innerHTML+=generateCell(title,img);
 
}
}


getEndPointData("ri.json",bindingData3);
function bindingData3(ingredientsData){
for(let i in ingredientsData.riList){
    var img=ingredientsData.riList[i].piImg;
    var title = ingredientsData.riList[i].name;
    document.getElementById("randIng").innerHTML+=generateCell(title,img);
 
}
}














// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();
// document.getElementById("latest-row").innerHTML+=generateCell();

// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("popular-row").innerHTML+=generateCell();
// document.getElementById("randon-row").innerHTML=getHtml();
// document.getElementById("ingredient-row").innerHTML=getHtml();