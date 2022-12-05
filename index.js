function TurnOn() {
    document.getElementById('img1').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
}
function TurnOff() {
    document.getElementById('img1').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
}

let bulbStatus = false;
function TurnOnOff(){
    if(bulbStatus){
        document.getElementById('img2').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
        bulbStatus = false;
    }else{
        document.getElementById('img2').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
        bulbStatus = true;
    }
}