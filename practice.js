function getData(userUrl)
{
    const xmlObj= new XMLHttpRequest();
    xmlObj.open("Get",userUrl);
    xmlObj.onload=function (){
        const parseArray= JSON.parse(xmlObj.responseText);
        const arrayName=Object.keys(parseArray)[0];
        const newData=parseArray[arrayName];
        // console.log(newData);
        var title,img;
         for(let i in newData){
            // imgTitle=Object.keys(newData)[i];
            img=newData[Object.keys(newData)[i]];
            console.log(img);
            // titTitle=Object.keys(newData)[i+1];
            title=newData[Object.keys(newData)[i+1]];
            console.log(title);
         }
        
         document.getElementById("mealss").innerHTML+=generateCell(img,title);
         function generateCell(title,img) {
            return `<div style="margin:0 0 10px 0;" class="col-lg-3" >
              <a href=""><img class="img-style" src="${img}"width="95%"></a>
              <a href="" style="color:#d57d1f; font-size:25px">${title}</a>
               </div>`;
          }
          
          
    };
    xmlObj.send();
}
getData("latest.json");