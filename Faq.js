function open(){
    let content = document.querySelector('answer');
    if(content.classList.contains('isBlock')){
        content.classList.remove('isBlock');
    }else{
        content.classList.add('isBlock');
    }
}

