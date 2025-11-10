let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");
function gfg(n) {
    remove();
    for (let i = 0; i<n;i++){
        if (n==1) cls = "uno";
        else if (n==2) cls="dos";
        else if (n==3) cls="tres";
        else if (n==4) cls="cuatro";
        else if (n==5) cls="cinco";
        stars[i].className="star"+cls;
    }
    output.innerText="La calificación es: "+ n + "/5";

}
function remove(){
    let i=0;
    while (i<5){
        stars[i].className="star";
        i++;
    }
}