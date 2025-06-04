const products=[
    {id:1, name:"laptop",price:750,rating:4.5,category:"electronics"},
    {id:2, name:"phone",price:500,rating:4.7,category:"electronics"},
    {id:3, name:"tablet",price:600,rating:4.3,category:"electronics"},
    {id:4, name:"monitor",price:300,rating:4.2,category:"accessories"},
    {id:5, name:"keyboard",price:50,rating:4.0,category:"accessories"},
    {id:6, name:"mouse",price:25,rating:3.9,category:"accessories"},
    {id:7, name:"smartwatch",price:200,rating:4.4,category:"wearables"}
]
//current filter or sort
let currentCategory="all"
let currentSort=''

//DOM element
const productGrid=document.getElementById("productGrid")
const psortSelect=document.getElementById("sortSelect")
const categoryButtons=document.querySelectorAll(".category-btn")

function renderProducts(list){
    productGrid.innerHTML='';

    if(list.length===0){
        productGrid.innerHTML="<p>no products found</p>"
        return;
    }
    list.forEach(prod=>{
        const card=document.createElement("div");
        card.className="product-card";

        card.innerHTML=
        `<div class="product-name">${prod.name}</div>
        <div class="product-category">${prod.category}</div>
        <div class="product-price">${prod.price}</div>
        <div class="product-rating">${prod.rating}</div>
        <div class="product-stock">${prod.stock}</div>`;

        productGrid.appendChild(card);
    })
}
function applyFilters(){
let filtered =[...products];
if (currentCategory!="All"){
    filtered=filtered.filter(prod=>prod.category===currentCategory)
}

switch(currentSort){
    case'priceAsc':
    filtered.sort((a,b)=>a.price-b.price);
    break;
    case'priceDesc':
    filtered.sort((a,b)=>b.price-a.price);
    break;
    case'nameAsc':
    filtered.sort((a,b)=>a.name.localeCompare(b.name));
    break;
    case'nameAsc':
    filtered.sort((a,b)=>b.name.localeCompare(a.name));
    break;
    case'ratingAsc':
    filtered.sort((a,b)=>a.rating-b.rating);
    break;
    case'ratingDesc':
    filtered.sort((a,b)=>b.rating-a.rating);
    break;
    case'stockAsc':
    filtered.sort((a,b)=>a.stock-b.stock);
    break;
    case'stockAsc':
    filtered.sort((a,b)=>b.stock-a.stock);
    break;
}

renderProducts(filtered);
}

sortSelect.addEventListener("change",(e)=>{
    currentSort=e.target.value;
    applyFilters();
})
applyFilters();