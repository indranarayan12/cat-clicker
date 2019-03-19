const catImg = document.querySelector('img');
console.log('got it');
catImg.addEventListener('click',function(){
    const pTag = document.querySelector('p');
    var x = pTag.textContent;
    pTag.textContent = x+1;
});
