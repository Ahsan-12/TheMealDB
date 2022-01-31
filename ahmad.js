function requestEndPoint(endPointURL,loopController,imageKey,titleKey,insertId,htmlChef) {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
      const dataX = JSON.parse(xhr.responseText);
      var key = Object.keys(dataX)[0];
      var objectList = dataX[key];
      getListData(objectList,loopController,imageKey,titleKey,insertId,htmlChef);
    };
    xhr.send();
  }
  
  function getListData(data,loopController,imageKey,titleKey,insertId,htmlChef) {
     
    for (let i = 0; i < loopController; i++) {
      var title = data[i][titleKey];
      var img = data[i][imageKey];
      htmlChef(title, img,insertId);
    }
  }
  
  requestEndPoint("latest.json",8,"latest","tag","mealss",generateCell);
  requestEndPoint("pi.json",4,"piTag","name","Ingredients",generateCell);
  requestEndPoint("rm.json",8,"piTag","name","random",generateCell);
  requestEndPoint("ri.json",4,"piImg","name","randIng",generateCell);
  
  
  function generateCell(title, img,insertId) {

    let template = document.querySelector('#template').content.cloneNode(true);
    template.querySelector("img").setAttribute("src",img);
    
    template.querySelector("a").textContent=title;
    
    document.querySelector(`#${insertId}`).append(template);
  }
  
  function bindingData(arry,insertId) {
  
      for(let i in arry) {
          var title = arry[i].Name;
          var img = arry[i].Image;
          generateCell(title,img,insertId);
          
  
      }
    }