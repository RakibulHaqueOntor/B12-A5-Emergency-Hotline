
function innerText(id){
  const element = document.getElementById(id);
  const text = element.innerText;
  return text;
}
const buttons = document.getElementsByClassName('call_btn')
for(let btn of buttons){
  btn.addEventListener('click',function(){
    // console.log("btn clicked");
    const title = btn.parentNode.parentNode.children[1].children[0].innerText
    const sub_title = btn.parentNode.parentNode.children[1].children[1].innerText
    const phone_number = btn.parentNode.parentNode.children[2].children[0].innerText
    let today = new Date();
    let present_time = today.toLocaleTimeString(); 
    const total_coin = parseInt(btn.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[1].children[0].innerText)
    if(total_coin>=20){
      alert('📞Calling' +" "+ sub_title +" "+ phone_number)
      coinLeft = total_coin-20;
      document.getElementById('coins').innerText = coinLeft;
      console.log(total_coin);
      const cart = document.getElementById('cart_container')
      const newCart = document.createElement('div');
      newCart.innerHTML=
      `<div class="call h-[86px] w-[352px] rounded-[8px] flex justify-between  items-center bg-[#fafafa] mt-[16px]">
            <div>
              <p class="text-[18px] font-medium">${title}</p>
              <p class="text-[18px] text-gray-500">${phone_number}</p>
            </div>
            <div>
              <p class = "text-[18px] font-medium">${present_time}</p>
            </div>
          </div>`;
      cart.appendChild(newCart);  
    }
    else{
      alert("❌তোমার কাছে পর্যাপ্ত কয়েন নেই। ফোন করার জন্য ২০টি কয়েন প্রয়োজন।");
    }
  }
)}
    const clear = document.getElementById('clear_btn') 
    clear.addEventListener('click',function(){
      // console.log("clicked")
    // const newCart = document.createElement('div');
    //   newCart.innerHTML="";
    const cart = document.getElementById('cart_container')
    cart.innerHTML = "";
    
  })
  const copyS = document.getElementsByClassName('copy_btn')
for(let cpy of copyS){
  cpy.addEventListener('click',function(){
    
    const number = cpy.parentNode.parentNode.children[2].children[0].innerText
    navigator.clipboard.writeText(number)
    console.log(number)
    alert("নম্বরটি কপি হয়েছে " + number);
    const total_copy = parseInt(cpy.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[2].children[0].childNodes[0].innerText);
    numberOfCopy = total_copy+1;
    document.getElementById('copy').innerText=numberOfCopy;   
  })
}

const hearts = document.getElementsByClassName('heart')
for(let hrt of hearts){
  hrt.addEventListener('click',function(){
    const total_heart = parseInt(hrt.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].children[0].innerText);
    numberOfHearts = total_heart+1;
    document.getElementById('hearts').innerText=numberOfHearts;   
  })
}

  













