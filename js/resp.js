burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');
rightnav = document.querySelector('.rightnav');


burger.addEventListener('click', () => {

    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})



function savedata(){
    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var text = document.getElementById('text');
    var a,b;

    a = new Date();
    b = a.toString();

    var client = {
        name: name.value,
        number: number.value,
        email:email.value,
        text:text.value,
        date: b
    }

    firebase.database().ref('client/deails').push(client);
    console.log(client.date);
}


function cleardata() {


    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var text = document.getElementById('text');

    name.value = '';
    number.value='';
    email.value='';
    text.value='';
     
  

    
}







