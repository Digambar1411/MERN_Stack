const addBtn = document.querySelector('#btn-add');
const wishlistBtn = document.querySelector('#btn-wishlist');
const addTwiceBtn = document.querySelector('#btn-add-twice');
const resultEl = document.querySelector('#result');

let bagItem = 0;

const addItem = (item)=>{
  console.log('item', item);
  bagItem+=item;
  resultEl.textContent = `your cart has ${bagItem} items.`
}

const moveToWishlist = ()=>{
if(bagItem>=1){
  bagItem-=1;
  resultEl.textContent = `your cart has ${bagItem} items.`
}else{
  alert(`your cart is empty please add item to bag`);
}
}

const initialDisplay =()=>{
  resultEl.textContent = `your cart has ${bagItem} items.`
}

addBtn.addEventListener('click',()=>addItem(1));
addTwiceBtn.addEventListener('click',()=>addItem(2));
wishlistBtn.addEventListener('click',()=>moveToWishlist());

initialDisplay();