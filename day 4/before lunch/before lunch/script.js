{let a = new String("hello");
let b= "hello";
if(a==b){
    console.log("yes");

}
else{
    console.log("no");
}
}{
const obj={
    name:'yashodhan',
    lastname:'tyagi',
}

console.log(obj);
document.write(obj);
}
{
    const obj={
        name:'yashodhan',
        lastname:'tyagi',
    }
    obj.age=20;
    console.log(obj);
}
{
    let arr=[1,2,3,4];
    arr=[2,3,4,5];
    console.log(arr);
}
{
    let arr=[1,2,3,4];
    arr[1]=20;
    arr[10]=19;
    arr.push(10);
    arr.pop();
    arr.pop();
    console.log(arr);
    console.log(typeof(arr));
}
{{let arr=[1,2,3,4];
    arr=[2,3,4,5];
    console.log((arr));
    const obj={
        name:'yashodhan',
        lastname:'tyagi',
    }
    obj.age=20;
    console.log(Array.isArray(obj));
    console.log(Array.isArray(arr));
}}{
check =function(){
const obj={
    name:'yashodhan'
}
const arr=[1,2,3]
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
}
}
{
    function checkIfArray(x){
        if(Array.isArray(x)){
            console.log("not object");
        }
        else if(typeof(x)=="object"){
            console.log("object");
        }
        else{
            console.log("not object");
        }
    }
    checkIfArray([]);
}
{
    const arr=['name',2,true];
    const obj={
        'name':"yashodhan",age:20,
    };
    for(let i=0;i<2;i++){
        console.log( arr[i]);
    }console.log(obj);
    for(let i of arr){
        console.log(i);
    }
    for(let i in obj){
        console.log(i);
    }

}
{
    window.console.log(window)
    window.console.log(innerHeight)
    console.log(innerWidth)
}
{
    console.log(window.document)
    console.log(window)
    console.log(console)
    console.dir(window)
}
// { const res=
//     document.getElementByTagName('ht1')
//     console.log(res)
// }
{const res=
    document.getElementById("ht1");
    console.log(res)

}
{
    const res=
    document.querySelectorAll('ht1');
    res['innerhtml']="hello,world!";
    console.log(res)

}
{const res=
    document.getElementsByTagName("div");
    res[0].innerText="hello world!"
    console.log(res)
}
{
    const ne =document.createElement("h3");
    // console.log(ne);
    ne.innerText="dynamic text";
    document.body.appendChild(ne);
}
{
    const ne =document.createElement("h3");
    // console.log(ne);
    ne.innerText="dynamic text";
    const firstdiv=document.getElementsByTagName("div");
    firstdiv[0].appendChild(ne); 
    firstdiv[0].removeChild(ne);
}
{
    const ne =document.createElement("t3");
    // console.log(ne);
    ne.innerText="dynamic text";
    const firstdiv=document.getElementsByTagName("p");
    firstdiv[0].appendChild(ne); 
    firstdiv[0].remove(ne);
}