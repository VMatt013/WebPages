const NavOn = document.querySelector('#NavbarOn')
const NavOff = document.querySelector('#NavbarOff')

NavOff.addEventListener("click",() => {
    document.getElementById("NavbarOn").style.display = "inline-block";
    document.getElementById("NavbarOff").style.display = "none";
});

NavOn.addEventListener("click",() => {
    document.getElementById("NavbarOn").style.display = "none";
    document.getElementById("NavbarOff").style.display = "inline-block";
});