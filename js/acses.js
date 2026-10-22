

// 1. إنشاء مصفوفة (Array) تحتوي على بيانات الفساتين
let dresses = [
  { name: " ساعة موديل 1", price: "23$", img: "images/اكسسوار9.jpg" },
  { name: "ساعة موديل 2", price: "20$", img: "images/اكسسوار2.jpg" },
  { name: "حلق موديل 1", price: "19.5$", img: "images/اكسسوار3.jpg" },
  { name: "حلق موديل 2", price: "35$", img: "images/اكسسوار4.jpg" },
    { name: "سوارة موديل 1", price: "55$", img: "images/اكسسوار5.jpg" },
    { name: "سوارة موديل 2", price: "55$", img: "images/اكسسوار6.jpg" },
    { name: "سوارة موديل 3", price: "55$", img: "images/اكسسوار7.jpg" },
    { name: "نضارة شمسية", price: "57$", img: "images/اكسسوار8.jpg" },
    { name: "ساعة موديل 3", price: "55$", img: "images/اكسسوار1.jpg" },
    { name: "طوق سلسال لون ثابت", price: "57$", img: "images/اكسسوار10.jpg" },
    { name: "مجموعة خولتم", price: "55$", img: "images/اكسسوار11.jpg" },
    { name: "خاتم لوت ثابت", price: "57$", img: "images/اكسسوار12.jpg" },


];

// 2. إمساك الحاوية الرئيسية من الـ HTML باستخدام querySelector
let container = document.querySelector("#dresses-container");

// 3. متغيّر لتجميع الأكواد النصية للكروت
let cardsHTML = "";

// 4. استخدام الـ Loop للمرور على كل فستان وإنشاء كود الـ HTML الخاص به
for (let i = 0; i < dresses.length; i++) {
    cardsHTML += `
 <div class="card" style="height:368px;">

 <img src="${dresses[i].img}" alt="${dresses[i].name}" style="height:200px;">
<h2>${dresses[i].name}</h2>
<p>السعر: <strong>${dresses[i].price}</strong></p>

 <div class="d-one"; style="display:flex;justify-content:space-between; align-items:center; margin-bottom:8px; color:#eee; font-size:13px;">
  
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