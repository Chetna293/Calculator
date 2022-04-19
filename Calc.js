function calc(opt){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out;
    if(opt == 'Add'){
        out = `Sum of Number is ${Number(a)+Number(b)}`
    }else if(opt == 'Sub'){
        out = `Sub of Number is ${Number(a)-Number(b)}`
    }else if(opt == 'Mul'){
        out = `Mul of Number is ${Number(a)*Number(b)}`
    }else if(opt == 'Div'){
        out = `Div of Number is ${Number(a)/Number(b)}`
    }else{
        out = `Mod of Number is ${Number(a)%Number(b)}`
    }
    document.getElementsByClassName("output")[0].innerText = out

    
}

/*function add(){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out= Number(a)+Number(b)
    document.getElementsByClassName("output")[0].innerText = `Sum of Number is ${out}`
}
function sub(){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out= Number(a)-Number(b)
    document.getElementsByClassName("output")[0].innerText = `Sub of Number is ${out}`
}*/