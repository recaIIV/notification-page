//alert('fine')

//MAKING A CONNECTION
let profile = document.querySelectorAll('.show');
let emoj = document.querySelectorAll('i');
let unread = document.getElementsByClassName('read')[0];
let marked = document.getElementsByClassName('mark')[0];
let comment = document.querySelectorAll('.comment');

//UNREAD MESSAGE TOGGLE.  //you could also use loop through...
let click = 0;
unread.addEventListener('click',()=>{
    click++;
    profile[0].classList.toggle('marked'); 
    profile[1].classList.toggle('marked'); 
    profile[2].classList.toggle('marked'); 
    if(click % 2 == 0){
        marked.innerHTML = 3;
        comment[0].firstElementChild.appendChild(emoj[0]);
        comment[1].firstElementChild.appendChild(emoj[1]);
        comment[2].firstElementChild.appendChild(emoj[2]);
    }else{
        marked.innerHTML = 0;
        comment[0].firstElementChild.removeChild(emoj[0]);
        comment[1].firstElementChild.removeChild(emoj[1]);
        comment[2].firstElementChild.removeChild(emoj[2]);
    }  
})