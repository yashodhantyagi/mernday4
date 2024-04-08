{const res=
document.querySelector('div');
console.log(res);
res.remove()
const c = document.querySelector('p:nth-of-type(2)');
res.remove(c);}
function getInfo(e){
    console.log(e);

    const d=document.querySelector("div");
    
   
    d.prepend("my name is yashodhan tyagi");
    e.target.class='abc';
    e.target.style.backgroundColor='green';
    e.target.style.color='red';
    e.target.style.position='';
}
