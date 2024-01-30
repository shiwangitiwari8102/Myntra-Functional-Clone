let bagItems;
onload();
function onload(){
 let bagItemsStr=localStorage.getItem('bagItems');
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];

  displayItemsOnHomePage();
  displayBagIcon();
 
}

function addToBag(itemID){
  bagItems.push(itemID);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}
function displayBagIcon(){
  let bagItemCountElement= document.querySelector('.bag-item-count');

  if(bagItems.length>0){
    bagItemCountElement.style.visibility ='visible';
    bagItemCountElement.innerText= bagItems.length;
  }
  else{
    bagItemCountElement.style.visibility ='hidden';
  }

 
}

function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement) return;
let innerHtml='';
items.forEach(item =>{
 innerHtml+=`<div class="item-container">
 <img  class="item-image" src="${item.image}" alt="item image">
 <div class="rating">${item.rating.stars}⭐| ${item.rating.count}</div>
 <div class="comapny-name">${item.company}</div>
 <div class="item-name">${item.item_name}</div>
 <div class="price">
   <span class="current-price">Rs ${item.current_price}</span>
   <span class="original-price">Rs ${item.original_price}</span>
   <span class="discount">(${item.discount_percentage}%off)</span>
 </div>
 <button class="btn-add-bag" onclick ="addToBag(${item.id})">Add to Bag</button>
</div>`
});


itemsContainerElement.innerHTML=innerHtml;
}























































//  let item ={
//   item_image:'images/1.jpg',
//   rating:{
//     stars:4.5,
//     noOfReview:1400,
//   },
//   company_name:'Carlton London',
//   item_name:'Rhodium-Plated CZ Floral Studs',
//   current_price:606,
//   original_price:1045,
//   discount:42,
// }

//  <div class="item-container">
//    <img  class="item-image" src="${item.item_image}" alt="item image">
//    <div class="rating">${item.rating.stars}⭐| ${item.rating.noOfReview}</div>
//    <div class="comapny-name">${item.company_name}</div>
//    <div class="item-name">${item.item_name}</div>
//    <div class="price">
//      <span class="current-price">Rs ${item.current_price}</span>
//      <span class="original-price">Rs ${item.original_price}</span>
//      <span class="discount">(${item.discount}%off)</span>
//    </div>
//    <button class="btn-add-bag">Add to Bag</button>
//  </div>