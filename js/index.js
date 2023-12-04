function flipCard(element){
    if(element.children[0].style.transform == "rotateY(-180deg)"){
        element.children[0].style.transform =  "rotateY(0deg)"
        element.children[0].children[1].children[3].children[0].style.display = "none"
    }else  {
        element.children[0].style.transform =  "rotateY(-180deg)"  
        front = window.getComputedStyle(element.children[0].children[0].children[0]) 
        element.children[0].children[1].style.borderLeftColor= front.getPropertyValue("border-top-color");
        element.children[0].children[1].style.borderRightColor=front.getPropertyValue("border-top-color");
        element.children[0].children[1].style.borderTopColor= front.getPropertyValue("border-left-color");
        element.children[0].children[1].style.borderBottomColor=front.getPropertyValue("border-left-color");
        element.children[0].children[1].children[3].children[0].style.display = "inline"
}
}