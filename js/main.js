var elForm =document.querySelector('.form')
var elInp =document.querySelector('.inp')
var elBtn =document.querySelector('.btn')
var elTit =document.querySelector('.title')

elBtn.addEventListener('click',function(e){
e.preventDefault();    
if(elInp.value % 3==0){
    elTit.textContent = "3 BO'LINADI"
}else if (elInp.value % 7==0) {
    elTit.textContent = " 7 BO'LINADI"
}else if (elInp.value % 3==0 && elInp.value % 7==0) {
    elTit.textContent = "3 VA 7 BO'LINADI"
}else{
    elTit.textContent = "FAQAT RAQAM YOZING"
}
})

