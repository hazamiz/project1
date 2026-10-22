

// 1. إنشاء مصفوفة (Array) تحتوي على بيانات الفساتين
let dresses = [
  { name: " سيت مريح كلاسيكي للدوام و الجامعة", price: "23$", img: "images/سيت5.jpg" },
  { name: "سيت كلاسيكي للمناسبات الراقية", price: "20$", img: "images/سيت1.jpg" },
  { name: "سيت عملي مريح و مناسب للمقابلات", price: "19.5$", img: "images/سيت3.jpg" },
  { name: "سيت كلاسيكي عملي مريح موديل واحد", price: "35$", img: "images/سيت2.jpg" },
    { name: "ترانشكوت طول وسط مقاس واحد", price: "55$", img: "images/ترانشكوت1.jpg" },
    { name: "ترانشكوت فصير عملي موديل1", price: "55$", img: "images/ترانشكوت2.jpg" },
    { name: "ترانشكوت قصير عملي موديل2", price: "55$", img: "images/ترانشكوت3.jpg" },
    { name: "ترانشكوت طويل مريح و عملي", price: "57$", img: "images/ترانشكوت4.jpg" },


];

// 2. إمساك الحاوية الرئيسية من الـ HTML باستخدام querySelector
let container = document.querySelector("#dresses-container");

// 3. متغيّر لتجميع الأكواد النصية للكروت
let cardsHTML = "";

// 4. استخدام الـ Loop للمرور على كل فستان وإنشاء كود الـ HTML الخاص به
for (let i = 0; i < dresses.length; i++) {
    cardsHTML += `
 <div class="card">

 <img src="${dresses[i].img}" alt="${dresses[i].name}">
<h2>${dresses[i].name}</h2>
<p>السعر: <strong>${dresses[i].price}</strong></p>

 <div class="d-one"; style="display:flex;justify-content:space-between; align-items:center; margin-bottom:8px; color:#eee; font-size:13px;">
       <label>اختر المقاس : </label>
       <select class=:"size-select" style="margin-left:7px;margin-top:3.5px;width:90px;background-color:rgba(0,0,0,0.6); color:#fff; border:1px solid #d4af37; border-radius:5px;psdding:3px 8px;">
      
       <option value="">xs</option>
       <option value="xs">s</option>
       <option value="xs">m</option>
       <option value="xs">l</option>
     <option value="xs">xl</option>
       <option value="xs">xxl</option>
      
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
