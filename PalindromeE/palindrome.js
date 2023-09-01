let x=0;
let digits="";
let iterator=x
if(x===0){
    console.log("Number is palindrome");
}else{
    while(iterator>=1){
        let temp=Math.floor(iterator%10);
        digits+=temp
        iterator=Math.floor(iterator/10)
    }
    if(x==parseInt(digits)){
        console.log("Number is palindrome");
    }else{
        console.log("Number is not palindrome");
    }
}

