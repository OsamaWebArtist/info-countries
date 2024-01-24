/*function manipulateDOM() {
    let darkMode = false;
    let element = document.querySelector('.dark-light-mode');
    let theHead = document.querySelector('.head')
    let theBody = document.querySelector('.bodyweb')
    element.onclick = function () {
        darkMode = !darkMode;

        if (darkMode) {
            document.body.style.backgroundColor = "hsl(207, 26%, 17%)";

            theHead.classList.add("head-darkmode")
            theHead.classList.remove("head-lightmode")

            theBody.classList.add("body-darkmode")

        }else {
            document.body.style.backgroundColor = "hsl(0, 0%, 95%)";

            theHead.classList.remove("head-darkmode")
            theHead.classList.add("head-lightmode")


            theBody.classList.remove("body-darkmode")
        }
    }

    
}

window.addEventListener('DOMContentLoaded', manipulateDOM);*/