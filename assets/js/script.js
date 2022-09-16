const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const togglePassword3 = document.querySelector('#togglePassword3');

const password = document.querySelector('#id_password')
const password2 = document.querySelector('#id_password2')
const password3 = document.querySelector('#id_password3')

togglePassword.addEventListener ('click', function(e){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
    
    console.log ('Ok');
})

togglePassword2.addEventListener ('click', function(e){
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
    
    console.log ('Ok');
})

function hide_answer(){    
    var textarea_txt = document.getElementById('id_password3');
    textarea_txt.style.display = "none";
}

function op(){    
    var textarea_txt = document.getElementById('id_password3');
    
    if (textarea_txt.style.display === "none") {
        textarea_txt.style.display = "block";
    } else {
        textarea_txt.style.display = "none";
    }
}

// var quizModal_showHide_class = document.getElementById('modal_quiz');

// //check if element has a certain class
// if (quizModal_showHide_class.classList.contains('show')){
//     textarea_txt.style.display = "none";
// }

function nav_trigger(){
    var get_body = document.getElementsByTagName('body');
    console.log(get_body);
}
