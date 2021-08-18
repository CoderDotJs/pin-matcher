document.querySelector('.generate-btn').addEventListener('click', function(){
    document.getElementById('pin-display').value = getPin();
})

document.querySelector('.submit-btn').addEventListener('click', function(){
    pinMatch();
})

//get pin function
function getPin(){
    const pin =  Math.round(Math.random() * 10000);
    const randomPin = pin + '';
    if(randomPin.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

const notifyPass = document.querySelectorAll('.notify')[1];
const notifyFail = document.querySelectorAll('.notify')[0];
const buttons = document.querySelectorAll('.button');
const pinDisplay = document.getElementById('pinDisplay');
notifyPass.style.display = 'none';
notifyFail.style.display = 'none'; 

for(let btn of buttons){
    btn.addEventListener('click',function(event){
        if(event.target.innerText == 'C'){
            pinDisplay.value = '';
            notifyPass.style.display = 'none';
            notifyFail.style.display = 'none'; 
        }
        else if(event.target.innerText == '<'){
            pinDisplay.value = pinDisplay.value.slice(0,-1);
            notifyPass.style.display = 'none';
            notifyFail.style.display = 'none'; 
        }
        else{
            pinDisplay.value += event.target.innerText;
        }
    })
}

function pinMatch(){
    const randomPin = document.getElementById('pin-display').value;
    const pinDisplay = document.getElementById('pinDisplay').value;

    if(randomPin == pinDisplay){
        notifyPass.style.display = 'block';
        notifyFail.style.display = 'none'; 
    }
    else{
        notifyFail.style.display = 'block';
        notifyPass.style.display = 'none'; 
    }
    
}