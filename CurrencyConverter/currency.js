const url='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'
const btn=document.querySelector("form button")
const dropdowns=document.querySelectorAll('.dropdown select');
const fromCurr=document.querySelector('.from select');
const toCurr=document.querySelector('.to select');
const msg=document.querySelector('.msg');

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name=="from" && currCode=="USD")
        {
            newOption.selected="selected"
        }
        else if(select.name=="to" && currCode=="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener('click',async (evt)=>{
    evt.preventDefault();
    //no page refresh aur no extra window changes
    //only work is by us.
    document.getElementById('paraamount').innerText="Result";
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==""|amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    const newurl=`${url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response= await fetch(newurl);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()]
    let finalAmt=rate*amtVal;
    document.querySelector(".amount input").value=finalAmt;
    msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
})
