

// 1. إنشاء مصفوفة (Array) تحتوي على بيانات الفساتين
let dresses = [
  { name: "شوز موديل 1", price: "57$", img: "images/sho1.jpg" },
  { name: "شوز موديل 2", price: "20$", img: "images/sho2jpg.jpg" },
  { name: "شوز موديل 3", price: "55$", img: "images/sho3.jpg" },
  { name: "شوز موديل 4", price: "55$", img: "images/sho8.jpg" },
  { name: "شوز موديل 5", price: "19.5$", img: "images/sho4.jpg" },
  { name: "شوز موديل 6", price: "35$", img: "images/sho5.jpg" },
  { name: "شوز موديل 7", price: "55$", img: "images/sho6.jpg" },
  { name: "شوز موديل 8", price: "23$", img: "images/sho7.jpg" },

];

// 2. إمساك الحاوية الرئيسية من الـ HTML باستخدام querySelector
let container = document.querySelector("#dresses-container");

// 3. متغيّر لتجميع الأكواد النصية للكروت
let cardsHTML = "";

// 4. استخدام الـ Loop للمرور على كل فستان وإنشاء كود الـ HTML الخاص به
for (let i = 0; i < dresses.length; i++) {
    cardsHTML += `
 <div class="card" >

 <img src="${dresses[i].img}" alt="${dresses[i].name}" style="height:250px;">
<h2>${dresses[i].name}</h2>
<p>السعر: <strong>${dresses[i].price}</strong></p>

 <div class="d-one"; style="display:flex;justify-content:space-between; align-items:center; margin-bottom:8px; color:#eee; font-size:13px;">
       <label>اختر المقاس : </label>
       <select class=:"size-select" style="margin-left:7px;margin-top:3.5px;width:90px;background-color:rgba(0,0,0,0.6); color:#fff; border:1px solid #d4af37; border-radius:5px;psdding:3px 8px;">
      
       <option value="">40</option>
       <option value="xs">41</option>
       <option value="xs">42</option>
       <option value="xs">43</option>
     <option value="xs">44</option>
       <option value="xs">45</option>
      
      </select>
       </div>

       <div style="display:flex;justify-content:space-between; align-items:center; margin-bottom:8px; color:#eee; font-size:13px;">
       <label>اختر عدد القطع : </label>
       <input type= "number" class="qty-input" value="1" min="1" max="1" style="width:70px;background-color:rgba(0,0,0,0.6); color:#fff; border:1px solid #d4af37; border-radius:5px ; padding;3px ; text-align:center; margin-top : 9px; margin-left : 13px;">
       </div>
       
<button type="button" class="add-to-cart-btn"
 data-name="${dresses[i].name}"
  data-price="${dresses[i].price}"
  data-img="${dresses[i].img}"
   style="margin:15px 0px ;width:100%; background:linear-gradient(135deg, #d4af37, #aa820a); color:#1a0017; border:none; padding:8px; border-radius:20px; font-weight:bold; cursor:pointer;"> أضف للسلة  </button> 
 </div>`;
}
container.innerHTML = cardsHTML;