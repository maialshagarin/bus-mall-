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
SurveyForBusMall.centerImage = document.getElementById('center-busMall-name');
SurveyForBusMall.rightImage = document.getElementById('right-busMall-image');

SurveyForBusMall.leftName = document.getElementById('left-busMall-name');
SurveyForBusMall.centerName = document.getElementById('center-busMall-name');
SurveyForBusMall.rightName = document.getElementById('right-busMall-name');

SurveyForBusMall.leftObject = null;
SurveyForBusMall.rightObject = null;
SurveyForBusMall.centerobject = null;

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
new SurveyForBusMall('scissors', 'img/scissors');
new SurveyForBusMall('shark', 'img/shark.jpg');
new SurveyForBusMall('sweep', 'img/sweep.jpg');
new SurveyForBusMall('tauntaun', 'img/tauntaun.jpg');
new SurveyForBusMall('unicorn', 'img/unicorn.jpg');
new SurveyForBusMall('usb', 'img/usb.gif');
new SurveyForBusMall('water-can', 'img/water-can.jpg');
new SurveyForBusMall('wine-glass', 'img/wine-glass.jpg');
new SurveyForBusMall('bag', 'img/bag.jpg');
new SurveyForBusMall('banana', 'img/banana.jpg');



function renderNewPhoto() {

    // ensure that previous  not shown on next round
    var forbidden = [SurveyForBusMall.leftObject, SurveyForBusMall.rightObject, SurveyForBusMall.centerobject];

    do {

        SurveyForBusMall.leftObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.leftObject))

    //  don't double up
    forbidden.push(SurveyForBusMall.leftObject);
    do {
        SurveyForBusMall.centerobject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.centerobject))
     forbidden.push(SurveyForBusMall.centerObject);

    do {
        SurveyForBusMall.rightObject = getRandomphoto();

    } while (forbidden.includes(SurveyForBusMall.rightObject));

    SurveyForBusMall.leftObject.shownCtr++;
    SurveyForBusMall.rightObject.shownCtr++;
    SurveyForBusMall.centerobject.shownCtr++;

    var leftPhotoImageElement = SurveyForBusMall.leftImage;
    var rightPhotoImageElement = SurveyForBusMall.rightImage;
    var centerPhotoImageElement = SurveyForBusMall.centerImage;

    centerPhotoImageElement.setAttribute('src', SurveyForBusMall.centerobject.filePath)
    centerPhotoImageElement.setAttribute('src', SurveyForBusMall.centerobject.name)
    leftPhotoImageElement.setAttribute('src', SurveyForBusMall.leftObject.filePath);
    leftPhotoImageElement.setAttribute('alt', SurveyForBusMall.leftObject.name);
    rightPhotoImageElement.setAttribute('src', SurveyForBusMall.rightObject.filePath);
    rightPhotoImageElement.setAttribute('alt', SurveyForBusMall.rightObject.name);

    SurveyForBusMall.leftName.textContent = SurveyForBusMall.leftObject.name;
    SurveyForBusMall.rightName.textContent = SurveyForBusMall.rightObject.name;
    SurveyForBusMall.centerName.textContent = SurveyForBusMall.centerObject.name;

}

function getRandomphoto() {
    var index = Math.floor(Math.random() * SurveyForBusMall.all.length);
    return SurveyForBusMall.all[index];
}

function updateTotals() {

    var tableBody = document.getElementById('report');

    tableBody.innerHTML = '';

    for (var i = 0; i < SurveyForBusMall.all.length; i++) {
        var photo = SurveyForBusMall.all[i];
        var row = addElement('tr', tableBody);
        addElement('td', row, photo.name);
        addElement('td', row, '' + photo.clickCtr);
        addElement('td', row, '' + photo.shownCtr);
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
        updateTotals();

        if (SurveyForBusMall.roundCtr === SurveyForBusMall.roundLimit) {

            alert('No more clicking for you!');

            SurveyForBusMall.container.removeEventListener('click', clickHandler);

        } else {

            renderNewPhoto();
        }
    }
}
SurveyForBusMall.container.addEventListener('click', clickHandler);
updateTotals();

renderNewPhoto();