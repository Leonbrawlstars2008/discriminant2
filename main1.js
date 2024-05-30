let a=document.getElementById('input1')
let b=document.getElementById('input2')
let c=document.getElementById('input3')
let disc =document.getElementById('discriminant')
let result=document.getElementById('result')
let btnCalc=document.getElementById('btnCalc')


function calculationDisc(inp1, inp2, inp3){
    const num1=Number(inp1.value)
    const num2=Number(inp2.value)
    const num3=Number(inp3.value)
    const dis =b.value **2-4*a.value*c.value

    disc.textContent=dis

    if (dis>0){
        const x1 =(-b.value+Math.sqrt(dis))  / (2*a.value)
        const x2 =(-b.value-Math.sqrt(dis))  / (2*a.value)
        result.textContent= `x1=${x1} x2=${x2}`
    }
    else if (dis===0){
        const x=-(b.value/(2*a.value))
        result.textContent= `x=${x}`
    }
    else if (dis<0){
        result.textContent=`Решений нету`
    }
    else {
        result.textContent=`Введите числа`

    }

}
   btnCalc.addEventListener("click",function(){
    calculationDisc(a,b,c)
    
 })
//  const a1=document.getElementById('input1')
//  a1.setAttribute('style','color:black;background-color:black;')

a.style.cssText=`background:black; color:red;`
b.style.cssText=`background:red; color:orange;`
c.style.cssText=`background:green; color:blue;`
result.style.cssText=`background:pink; color:purple;`
