const Button  = document.querySelector('#Button')
isOn = false;

Button.addEventListener("click",() => {
    if(!isOn)
    {
    document.getElementById("Content").style.display = "block";
    isOn = true;
    }
    else
    {
        document.getElementById("Content").style.display = "none";
        isOn = false;
    }
});