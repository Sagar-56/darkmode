const cityUrl= "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

function loadCoupon(){
    document.getElementById('coupon').style.visibility ='visible';
}
function closeCoupon(){
    document.getElementById('coupon').style.visibility ='hidden';
}

//////////////////////////////////////////////////
function getCity(){
    fetch(cityUrl)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let  element = document.createElement('option')
            let text = document.createTextNode(item.state)
            element.appendChild(text)
            element.value = item.state_id;
            document.getElementById('city').appendChild(element)
        })
    })
}
const getRest = () =>{
const cityId = document.getElementById('city').value;
const rest = document.getElementById('restaurant')
// while(rest.length > 0){
//     rest.remove(0)
// }
  fetch('${restUrl}${cityId}')
  .then((res) => res.json())
  .then((data) => {
       data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(`${item.restaurant_name}|${item.address}`)
        element.appendChild(text)
        rest.appendChild(element)
    })
})
}
////////////////////////////////////////////////
const ValidateFname = () =>{
    let fName = document.getElementById('fName').value;
    let fDiv = document.getElementById('fDiv');
    let fOut = document.getElementById('fOut');
    if(fName.trim().length == 0){
        fOut.innerHTML = "Please Enter First Name";
        fDiv.classList.add('has-error');
    }else{
        fOut.innerHTML=""
        fDiv.classList.remove('has-error');
        fDiv.classList.add('has-success');
    }
}

const ValidateLname = () =>{
     let lName = document.getElementById('lName').value;
     let lDiv = document.getElementById('lDiv');
     let lOut = document.getElementById('lOut');
     if(lName.trim().length == 0){
         lOut.innerHTML = "Please Enter Last Name";
         lDiv.classList.add('has-error');
     }else{
         lOut.innerHTML =""
         lDiv.classList.remove('has-error');
         lDiv.classList.add('has-success');
     }

}

const ValidateEmail = () =>{
    let First = document.getElementById('email').value;
    let second = document.getElementById('ediv');
    let eout = document.getElementById('eout');
    if(First.trim().length == 0){
        eout.innerHTML = "Please Enter Email";
        second.classList.add('has-error');
    }else{
        eout.innerHTML = ""
        second.classList.remove('has-error');
        second.classList.add('has-success');

    }
}

const ValidatePassword = () =>{
   let a=document.getElementById('psw').value;
   let b=document.getElementById('psdiv');
   let out = document.getElementById('psout');
   if(a.trim().length == 0){
       out.innerHTML= "Please Enter Password";
       b.classList.add('has-error')
   }else{
       out.innerHTML=""
       b.classList.remove('has-error');
       b.classList.add('has-success');
   }
}

const ValidateNum = () =>{
    let x=document.getElementById('phn').value;
    let y=document.getElementById('pndiv');
    let out=document.getElementById('pnout');
    if(x.trim().length == 0){
        out.innerHTML="Please Enter Phone No.";
        y.classList.add('has-error');
    }else{
        out.innerHTML="";
        y.classList.remove('has-error');
        y.classList.add('has-success');

    }
}


