 /*        start Play           */

 let MyText = 'Hello In XO Game';
 let text = document.getElementsByClassName('text')[0];
 let massega = document.getElementsByClassName('Massege')[0];
 let i = 0;

 function Print() {
     text.innerHTML = MyText.slice(0, i);
     i++;
 }

 let Set = setInterval(function() {
     Print()
 }, 100);
 if (i > MyText.length) {
     clearInterval(Set);
 }

 let str = document.getElementById('start');
 let body = document.getElementsByTagName('body')[0];

 function play(id) {
     str.style.display = 'flex';
     body.style.background = '#545050';
     document.getElementById(id).style.display = 'none';
     text.style.display = 'none';
 }




 /*      Input        */
 let inp1 = document.getElementsByClassName('inp')[0],
     inp2 = document.getElementsByClassName('inp')[1];
 //  inp1.setAttribute('placeholder', 'Player 1');
 //  inp2.setAttribute('placeholder', 'Player 2');


 /*        cansel Play           */

 function cns(id) {
     str.style.display = 'none';
     body.style.removeProperty('background');
     document.getElementById('btn').style.display = 'flex';
     text.style.display = 'block';
     massega.innerHTML = '';
     inp1.value = '';
     inp2.value = '';

     function Print() {
         text.innerHTML = MyText.slice(0, i);
         i++;
     }

     let Set = setInterval(function() {
         Print()
     }, 100);
     if (i > MyText.length) {
         i = 0;
         clearInterval(Set);
     }
 }

 console.log(inp2.value);

 /*       Go          */

 let Player = [];

 function Go(id) {

     if (inp2.value == '' || inp1.value == '' || inp1.value == inp2.value) {
         massega.innerHTML = 'error in the name';
     } else {
         str.style.display = 'none';
         let Game = document.getElementsByClassName('Game')[0];
         Player[0] = inp1.value;
         Player[1] = inp2.value;
         Player[2] = 'No Winner';
         Game.style.display = 'flex';
     }
 }

 /*      onfucs            */
 function Fuc(id) {
     let x = document.getElementById(id);
     massega.innerHTML = '';
 }


 /*      Game         */
 let head = document.querySelector('.head');


 let term = 'X';

 let arry = [];
 let Check = false;

 function Game(id) {
     let Box = document.getElementById(id);

     if (Box.innerHTML === '' && term === 'X') {
         Box.innerHTML = 'X';
         term = 'O';
         head.innerHTML = Player[1];
     } else if (Box.innerHTML === '' && term === 'O') {
         Box.innerHTML = 'O';
         term = 'X';
         head.innerHTML = Player[0];
     }

     Check = false;
     for (let i = 1; i < 10; i++) {
         if (document.getElementById('item' + i).innerHTML === '') {
             Check = true;
             break;
         }
     }
     Winner();


 };




 function Winner() {
     for (let i = 1; i < 10; i++) {
         arry[i] = document.getElementById('item' + i).innerHTML;
     }


     if (arry[1] == arry[2] && arry[2] == arry[3] && arry[1] != '') {
         TheEnd(1, 2, 3);
         Check = true;
     } else if (arry[4] == arry[5] && arry[5] == arry[6] && arry[5] != '') {
         TheEnd(4, 5, 6);
         Check = true;
     } else if (arry[7] == arry[8] && arry[8] == arry[9] && arry[7] != '') {
         TheEnd(7, 8, 9);
         Check = true;
     } else if (arry[1] == arry[4] && arry[4] == arry[7] && arry[1] != '') {
         TheEnd(1, 4, 7);
         Check = true;
     } else if (arry[2] == arry[5] && arry[5] == arry[8] && arry[5] != '') {
         TheEnd(2, 5, 8);
         Check = true;
     } else if (arry[3] == arry[6] && arry[6] == arry[9] && arry[3] != '') {
         TheEnd(3, 6, 9);
         Check = true;
     } else if (arry[1] == arry[5] && arry[5] == arry[9] && arry[1] != '') {
         TheEnd(1, 5, 9);
         Check = true;
     } else if (arry[3] == arry[5] && arry[5] == arry[7] && arry[3] != '') {
         TheEnd(3, 5, 7);
         Check = true;
     } else {
         if (Check === false) {
             head.innerHTML = Player[2];
             console.log('Done');
             setInterval(function() { head.innerHTML += '.' }, 1000);
             setTimeout(function() { location.reload(); }, 4000);
         }
     }


 };


 function TheEnd(num1, num2, num3) {
     head.innerHTML = `${arry[1]} Winner`;
     document.getElementById('item' + num1).style.background = 'red';
     document.getElementById('item' + num2).style.background = 'red';
     document.getElementById('item' + num3).style.background = 'red';
     if (head.innerHTML === ' X') {
         head.innerHTML = Player[1] + ' Winner';
     } else {
         head.innerHTML = Player[0] + ' Winner';
     }


     setInterval(function() {
         head.innerHTML += '.';

     }, 1000);
     //  console.log(i);
     //  if (i == 3) {
     //      clearInterval(yy);
     //  }
     setTimeout(function() { location.reload(); }, 4000);

 }