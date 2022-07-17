// alert ()
const shedA=document.getElementById("shedA")
const shedB=document.getElementById("shedB")
const shedC=document.getElementById("shedC")
const shedD=document.getElementById("shedD")
const output=document.querySelector(".output")
const daily=document.querySelector(".daily")
const weekly=document.querySelector(".weekly")
const monthly=document.querySelector(".monthly")
const price=45


const submit=document.getElementById("button")
function incomeOverTime(sellingPrice,time,litres){
    return sellingPrice*time*litres
}
submit.addEventListener("click",function(){
    let total=parseInt (shedA.value) + parseInt (shedB.value) + parseInt (shedC.value) + parseInt (shedD.value)

    let pa=document.createElement("p")
    pa.innerHTML=`Your production in Shed A is ${shedA.value} litres per day`
    
    let pb=document.createElement("p")
    pb.innerHTML=`Your production in Shed B is ${shedB.value} litres per day`

    let pc=document.createElement("p")
    pc.innerHTML=`Your production in Shed C is ${shedC.value} litres per day`

    let pd=document.createElement("p")
    pd.innerHTML=`Your production in Shed D is ${shedD.value} litres per day`
    
    daily.appendChild(pa)
    daily.appendChild(pb)
    daily.appendChild(pc)
    daily.appendChild(pd)

    let pw=document.createElement("p")
    pw.innerHTML=`Your weekly income is ${incomeOverTime(price,7,total)} Kshs`

    weekly.appendChild(pw)

    let py=document.createElement("p")
    py.innerHTML=`Your yearly income is ${incomeOverTime(price,366,total)} Kshs`

    weekly.appendChild(py)
    
    let months={
        "January":31,"February":29,"March":31,"April":30,"May":31,"June":30,"August":31,"September":31,"October":30,"November":30,"December":31
    }
    for (const key in months) {
       let pmonthly=document.createElement("p")
       pmonthly.innerHTML=`Your income for ${key} is ${incomeOverTime(price,months[key],total)} Kshs`

       monthly.appendChild(pmonthly)



    }
    


})
