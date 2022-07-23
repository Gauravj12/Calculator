valueButton=(e)=>{
    calculatorform.screen.value+=e.value;
}

Clear=()=>{
    calculatorform.screen.value=null;
}

calculate=()=>{
    calculatorform.screen.value=eval(calculatorform.screen.value);
}