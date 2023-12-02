let button=document.getElementsByTagName('button')
let box=document.getElementById('result')
for(i=0;i<button.length;i++){
    button[i].onclick=function(){
        let input=this.innerText;
        updateDisplay(input);
    }
}


function updateDisplay(input){
    let currentDisplay=box.innerText;
    if(currentDisplay=='0'){
        if(input!="C" && input!="DEL" && input!="="){
            box.innerText=""
            box.innerText+=input
        }
    }
    else{
        if(input=="DEL"){
            box.innerText=currentDisplay.substring(0,currentDisplay.length-1)
            if(box.innerText==""){
                box.innerText="0"
            }
        }
        if(input=="C"){
            box.innerText="0"
        }
        if(input!="C" && input!="DEL" && input!="="){
            box.innerText+=input
        }
        if(input=="="){
            let display=box.innerText
            box.innerText=eval(display)
        }
    }
}
