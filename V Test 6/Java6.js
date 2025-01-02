const checkbox = document.querySelector("#open");
checkbox.addEventListener('click', function () {
    setTimeout(redirect, 1200);
});

function redirect(){
    window.location.href = "Redirect.html";
}
