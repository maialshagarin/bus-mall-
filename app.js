function SurveyForBusMall(name, filePath) {
    this.name = name;
    this.filePath = filePath;
    this.clickCtr = 0;
    this.shownCtr = 0;
    SurveyForBusMall.all.push(this);
}
SurveyForBusMall.roundCtr = 0;
SurveyForBusMall.roundLimit = 25;


SurveyForBusMall.all = [];
SurveyForBusMall.container = document.getElementById('SurveyForBusMall-container');

SurveyForBusMall.leftImage = document.getElementById('left-busMall-image');
SurveyForBusMall.centerImage = document.getElementById('center-busMall-image');
SurveyForBusMall.rightImage = document.getElementById('right-busMall-image');

SurveyForBusMall.leftname = document.getElementById('left-busMall-name');
SurveyForBusMall.centername = document.getElementById('center-busMall-name');
SurveyForBusMall.rightname = document.getElementById('right-busMall-name');

SurveyForBusMall.leftObject = null ;
SurveyForBusMall.centerObject = null ;
SurveyForBusMall.rightObject = null ;


new SurveyForBusMall('bathroom', 'img/bathroom.jpg');
new SurveyForBusMall('boots', 'img/boots.jpg');
new SurveyForBusMall('breakfast', 'img/breakfast.jpg');
new SurveyForBusMall('bubblegum', 'img/bubblegum.jpg');
new SurveyForBusMall('chair', 'img/chair.jpg');
new SurveyForBusMall('cthulhu', 'img/cthulhu.jpg');
new SurveyForBusMall('dog-duck', 'img/dog-duck.jpg');
new SurveyForBusMall('dragon', 'img/dragon.jpg');
new SurveyForBusMall('pen', 'img/pen.jpg');
new SurveyForBusMall('pet-sweep', 'img/pet-sweep.jpg');
new SurveyForBusMall('scissors', 'img/scissors.jpg');
new SurveyForBusMall('shark', 'img/shark.jpg');
new SurveyForBusMall('sweep', 'img/sweep.png');
new SurveyForBusMall('tauntaun', 'img/tauntaun.jpg');
new SurveyForBusMall('unicorn', 'img/unicorn.jpg');
new SurveyForBusMall('usb', 'img/usb.gif');
new SurveyForBusMall('water-can', 'img/water-can.jpg');
new SurveyForBusMall('wine-glass', 'img/wine-glass.jpg');
new SurveyForBusMall('bag', 'img/bag.jpg');
new SurveyForBusMall('banana', 'img/banana.jpg');



function renderNewPhoto() {

    
    var forbidden = [SurveyForBusMall.leftObject, SurveyForBusMall.centerObject  , SurveyForBusMall.rightObject  ];

    do {

        SurveyForBusMall.leftObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.leftObject))


    forbidden.push(SurveyForBusMall.leftObject);
    do {
        SurveyForBusMall.centerObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.centerObject))
     forbidden.push(SurveyForBusMall.centerObject);

    do {
        SurveyForBusMall.rightObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.rightObject));

    SurveyForBusMall.leftObject.shownCtr++;
    SurveyForBusMall.centerObject.shownCtr++;
    SurveyForBusMall.rightObject.shownCtr++;
    
    var leftPhotoImageElement = SurveyForBusMall.leftImage;
    var centerPhotoImageElement = SurveyForBusMall.centerImage;
    var rightPhotoImageElement = SurveyForBusMall.rightImage;
  

    leftPhotoImageElement.setAttribute('src', SurveyForBusMall.leftObject.filePath);
    leftPhotoImageElement.setAttribute('alt', SurveyForBusMall.leftObject.name);

                           

    centerPhotoImageElement.setAttribute('src', SurveyForBusMall.centerObject.filePath);
    centerPhotoImageElement.setAttribute('alt', SurveyForBusMall.centerObject.name);

    rightPhotoImageElement.setAttribute('src', SurveyForBusMall.rightObject.filePath);
    rightPhotoImageElement.setAttribute('alt', SurveyForBusMall.rightObject.name);
 
    SurveyForBusMall.leftname.textContent = SurveyForBusMall.leftObject.name;
    SurveyForBusMall.centername.textContent = SurveyForBusMall.centerObject.name;
    SurveyForBusMall.rightname.textContent = SurveyForBusMall.rightObject.name;
}

function getRandomphoto() {
    var index = Math.floor(Math.random() * SurveyForBusMall.all.length);
    return SurveyForBusMall.all[index];
}

function updateTotals() {

    var update = document.getElementById('report');

    for (var i = 0; i < SurveyForBusMall.all.length; i++) {
        addElement ('p', update, row )
        var photo = SurveyForBusMall.all[i];
        var row = (photo.name +  ' had ' + photo.clickCtr +' votes '+ ' and was shown ' +  photo.shownCtr + ' times ');

    }
}

function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    if (text) {
        element.textContent = text;
    }
    return element;
}

function clickHandler(event) {

    var clickedId = event.target.id;
    var clickedId = event.target.id;
    var productClicked;

    if (clickedId === 'left-busMall-image') {
        productClicked = SurveyForBusMall.leftObject;
    }
    else if (clickedId === 'center-busMall-image') {
        productClicked = SurveyForBusMall.centerObject;

    }
    else if (clickedId === 'right-busMall-image') {
        productClicked = SurveyForBusMall.rightObject;
    } else {
        console.log(clickedId);
    }

    if (productClicked) {
        productClicked.clickCtr++;
        SurveyForBusMall.roundCtr++;
      

        if (SurveyForBusMall.roundCtr === SurveyForBusMall.roundLimit) {

            alert('No more clicking for you!');
            updateTotals();
            renderchart();
            SurveyForBusMall.container.removeEventListener('click', clickHandler);

        } else {

            renderNewPhoto();
        }
    }
}
// function updateItems() {
//     console.log("inside updateItems");
//     var dataString = JSON.stringify(SurveyForBusMall.all);
//     localStorage.setItem('orders', dataString);
//   }
  
//   //get all drinks
//   function getStorage() {
//     console.log("inside getStorage");
//     var data = localStorage.getItem('orders');
//     var newData = JSON.parse(data);
//     if (newData) {
//       for ( var i = 0; i <newData.length; i++) {
//         var rawNewObject = newData[i];
//         new SurveyForBusMall(
//           rawNewObject.name,
//           rawNewObject.filePath,
//           rawNewObject.clickCtr,
//           rawNewObject.shownCtr,
//         );
//       }
//       renderNewPhoto();
      // updateTotals();
    
    // console.log('local Storage Data', ItemsData);
  




/* function updateItem() {
    localStorage.setItem('data', JSON.stringify(SurveyForBusMall.all));
  }
  function getItem() {
    var surveyData = JSON.parse(localStorage.getItem('orders'));
    if (surveyData){
      console.log('user has already saved their own prefs');
      SurveyForBusMall.all = surveyData;
      }    }

       document.getElementById('clear-ls').addEventListener('click',function() {
        
        localStorage.clear();
        alert('you need reload page after that (just reload!)');
       });

        function clearLocalStorage(){
        localStorage.clear();
        SurveyForBusMall.all = [];
     }*/
      
// var clearLsButton = document.getElementById('clear-ls');
// clearLsButton.addEventListener('click', clearLocalStorage());


function  renderchart() {
    var productArray = [];
    var clickArray = [];
    var ShownArray = [];
    for (let i = 0; i < SurveyForBusMall.all.length; i++) {
      var ProductInstent = SurveyForBusMall.all[i];
      productArray.push(ProductInstent.name );
      clickArray.push(ProductInstent.clickCtr);
      ShownArray.push(ProductInstent.shownCtr);
    }
    var ctx = document.getElementById('Chart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: productArray,
         
        datasets: [
          {
            label: 'Votes data',
            backgroundColor: 'black',
            borderColor: 'pink',
            data: clickArray,
          }
          ,
          {
            label: 'Shown data',
            backgroundColor: 'green',
            borderColor: 'white',
            data: ShownArray,
          }
        ],
        options: {
            scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          
        }
      });
   }
  
//    function setData() {
//     var BusString = JSON.stringify(SurveyForBusMall.all)
//     localStorage.setItem('data', JSON.stringify(SurveyForBusMall.all))
//   }
//    function getData() {
//     var BusData = JSON.parse(localStorage.getItem('data'))
//     if (BusData) {
//       SurveyForBusMall.all = BusData;
//     }
  
//     updateTotals();
//   }
  
  
//   Things.container.addEventListener('click', clickHandler);

SurveyForBusMall.container.addEventListener('click', clickHandler);
renderNewPhoto();
// getData();
// getStorage();