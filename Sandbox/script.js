let lockIcon = document.querySelector(".fa-lock");
let inner = document.querySelector(".inner");
let password = document.querySelector("#myPass");
let state = false;
let text, validIcons, invalidIcons;

password.addEventListener('click', function(){
    document.querySelector(".validator").classList.add('show-validator');
})

function toggle(){
    myFunction();
    if(state){
        function displayPass(){
            document.getElementById("myPass").setAttribute("type", "password");
        }
        setTimeout(displayPass, 80);

        lockIcon.classList.remove("color-change");
        inner.classList.remove("inner-hover");
        state = false;
    }
}