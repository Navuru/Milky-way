// alert ()
const shedA=document.getElementById("shedA")
const shedB=document.getElementById("shedB")
const shedC=document.getElementById("shedC")
const shedD=document.getElementById("shedD")
const output=document.querySelector(".output")

const submit=document.getElementById("button")
function incomeOverTime(sellingPrice,time,litres){
    return sellingPrice*time*litres
}
submit.addEventListener("click",function(){
    let total=shedA.value + shedB.value + shedC.value + shedD.value

    let pa=document.createElement("p")
    pa.innerHTML=`Your production in Shed A is ${shedA} litres per day`
    
    let pb=document.createElement("p")
    pb.innerHTML=`Your production in Shed B is ${shedB} litres per day`

    let pc=document.createElement("p")
    pc.innerHTML=`Your production in Shed C is ${shedC} litres per day`

    let pd=document.createElement("p")
    pd.innerHTML=`Your production in Shed D is ${shedD} litres per day`
    


})
