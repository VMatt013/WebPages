var Pages = [
    "Allatok",
    "Betegsegek",
    "Dinoszauruszok",
    "Fenntarthatosag"
]


function Btn(Name){
    var node = document.createElement("a");
    node.innerHTML = Name;
    node.setAttribute("class","button");
    node.setAttribute("href",Name+'/index.html');
    document.getElementById("Main").appendChild(node);
  }


for (i=0;i < Pages.length; i++)
{
    Btn(Pages[i]);
}