

// 1. إنشاء مصفوفة (Array) تحتوي على بيانات الفساتين
let dresses = [
//   { name: " شنتة كلاسيك خمرية ", price: "23$", img: "images/حقيبة 1.jpg" },
//   { name: "شنتة كلاسيك بيضاء ", price: "20$", img: "images/حقيبة2.jpg" },
//   { name: "شنتة كلاسيك جلد النمر", price: "19.5$", img: "images/حقيبة3.jpg" },
//   { name: "شنتة كلاسيك بنية اللون", price: "35$", img: "images/حقيبة4.jpg" },
    { name: "حذاء كعب وسط جلد خمري", price: "55$", img: "images/حذاء1.jpg" },
    { name: "حذاء كعب وسط دانتيل ابيض", price: "55$", img: "images/حذاء2.jpg" },
    { name: "جزمة عالية جلد بنية اللون كعب عالي", price: "55$", img: "images/حذاء3.jpg" },
    { name: "جزمة متوسطة العلو جلد سوداء", price: "57$", img: "images/حذاء4.jpg" },


];
let dresses1 = [
  { name: " شنتة كلاسيك خمرية ", price: "23$", img: "images/حقيبة 1.jpg" },
  { name: "شنتة كلاسيك بيضاء ", price: "20$", img: "images/حقيبة2.jpg" },
  { name: "شنتة كلاسيك جلد النمر", price: "19.5$", img: "images/حقيبة3.jpg" },
  { name: "شنتة كلاسيك بنية اللون", price: "35$", img: "images/حقيبة4.jpg" },

];





// 2. إمساك الحاوية الرئيسية من الـ HTML باستخدام querySelector
let container = document.querySelector("#dresses-container");


// 3. متغيّر لتجميع الأكواد النصية للكروت
let cardsHTML = "";

// 4. استخدام الـ Loop للمرور على كل فستان وإنشاء كود الـ HTML الخاص به
for (let i = 0; i < dresses1.length; i++) {
    cardsHTML += `
 <div class="card" style="height:440px">

 <img src="${dresses[i].img}" alt="${dresses[i].name}" style="height:220px;">
<h2>${dresses[i].name}</h2>
<p>السعر: <strong>${dresses[i].price}</strong></p>

 <div class="d-one"; style="display:flex;justify-content:space-between; align-items:center; margin-bottom:8px; color:#eee; font-size:13px;">
       <label>اختر المقاس : </label>
       <select class=:"size-select" style="margin-left:7px;margin-top:3.5px;width:90px;background-color:rgba(0,0,0,0.6); color:#fff; border:1px solid #d4af37; border-radius:5px;psdding:3px 8px;">
      
       <option value="">36</option>
       <option value="xs">37</option>
       <option value="xs">38</option>
       <option value="xs">39</option>
     <option value="xs">40</option>
      
      
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


for (let i = 0; i < dresses1.length; i++) {
    cardsHTML += `
 <div class="card" style="height:350px">

 <img src="${dresses1[i].img}" alt="${dresses1[i].name}" style="height:180px;">
<h2>${dresses1[i].name}</h2>
<p>السعر: <strong>${dresses1[i].price}</strong></p>


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