//requirements
var button = document.getElementsByTagName("button")[0];
var inp = document.getElementsByTagName("input")[0];
var ull = document.querySelector("ul");

function length(){
    return inp.value.length;
}

//transform
function biggerInput(n){
    inp.style.transform = n;
    return inp.style.transform;
};

function createElement(){
    var li = document.createElement("li");
    var div = document.createElement("div");
    var butt2 = document.createElement("button")
    div.classList.add("wrapper");
    ull.appendChild(div);
    div.append(li,butt2);
    li.classList.add("taskclass");
    li.appendChild(document.createTextNode(inp.value));
    inp.value ="";
    butt2.classList.add("delClass");
    butt2.innerText = 'Del';
}

//For click
function  addListAfterClick(){
    biggerInput("none");
    //createElement is used to create the element here coo!    
    if(length()>0){
        createElement();
    }
};

//keypress
function addListAfterKeypress(event){
   biggerInput("scale(2)");
    if(length() >0 && event.keyCode === 13){
        biggerInput("none");
        createElement();
}};

function deleteListElement(element){
    if(element.target.className === "delClass"){
        //for making perfect animation delay
      element.target.parentElement.remove();
       
    } 
}

function ULClick(element){ 
    //element -> mouseevent
    deleteListElement(element);

}



var a = ull.addEventListener("click",ULClick);

button.addEventListener("click",addListAfterClick);

inp.addEventListener("keypress",addListAfterKeypress);
