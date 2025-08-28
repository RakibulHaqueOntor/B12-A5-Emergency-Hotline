
function innerText(id){
  const element = document.getElementById(id);
  const text = element.innerText;
  return text;
}
document.getElementById('call-1').addEventListener('click',function(){
  //  console.log('button clicked')
  const title = innerText('card-1-title');
  const number=innerText('card-1-number');
  const coin = parseInt(innerText('coins'))
  if(coin>=20){
    coinLeft = coin-20;
    document.getElementById('coins').innerText = coinLeft;
  const cart = document.getElementById('right_div')
  const newCart = document.createElement('div');
  newCart.innerHTML=
  `<div class="h-[86px] w-[352px] rounded-[8px] flex justify-between       items-center bg-[#fafafa] mt-[16px]">
        <div>
          <p>${title}</p>
          <p>${number}</p>
        </div>
        <div>
          <p>11:36:58 AM</p>
        </div>
      </div>`;
   cart.appendChild(newCart);   
  }
  
  else{
    alert("you don't have enough coin");
  }
})
document.getElementById('heart').addEventListener('click',function(){
  // console.log('button is clicked')
  const heart = parseInt(innerText('hearts'))
  numberOfHearts = heart+1;
  document.getElementById('hearts').innerText=numberOfHearts;
})
  













