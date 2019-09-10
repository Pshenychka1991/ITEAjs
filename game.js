for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += "<button class='block'></button>";
}

 var step = 0;
document.getElementById('game').onclick = function(event) {
        if (event.target.className == 'block') {
        if (step%2==0){
            event.target.innerHTML = 'X';
        }
            else {
                event.target.innerHTML = 'O';
                }
                step++;
                Winn();
        }
    }
	const again = document.getElementById ("btnAgain");

    function Winn() {
        var allblock = document.getElementsByClassName('block');
if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X') 
	alert("Перемогли X!");
 if (allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X') 
	alert("Перемогли X!");
if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') 
	alert("Перемогли X!");
if (allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') 
	alert("Перемогли X!");
if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') 
	alert("Перемогли X!");
if (allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') 
	alert("Перемогли X!");
if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') 
	alert("Перемогли X!");
if (allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') 
	alert("Перемогли X!");

if (allblock[0].innerHTML=='O' && allblock[1].innerHTML=='O' && allblock[2].innerHTML=='O') 
	alert("Перемогли O!");
 if (allblock[3].innerHTML=='O' && allblock[4].innerHTML=='O' && allblock[5].innerHTML=='O') 
	alert("Перемогли O!");
if (allblock[6].innerHTML=='O' && allblock[7].innerHTML=='O' && allblock[8].innerHTML=='O') 
	alert("Перемогли O!");
if (allblock[0].innerHTML=='O' && allblock[3].innerHTML=='O' && allblock[6].innerHTML=='O') 
	alert("Перемогли O!");
if (allblock[1].innerHTML=='O' && allblock[4].innerHTML=='O' && allblock[7].innerHTML=='O') 
	alert("Перемогли O!");
if (allblock[2].innerHTML=='O' && allblock[5].innerHTML=='O' && allblock[8].innerHTML=='O') 
	alert("Перемогли O!");
if (allblock[0].innerHTML=='O' && allblock[4].innerHTML=='O' && allblock[8].innerHTML=='O') 
	alert("Перемогли O!");
if (allblock[2].innerHTML=='O' && allblock[4].innerHTML=='O' && allblock[6].innerHTML=='O') 
	alert("Перемогли O!");
    }

 again.addEventListener('click', ()=> {
        location.reload()
    });