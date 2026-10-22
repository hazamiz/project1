

// 1. إنشاء مصفوفة (Array) تحتوي على بيانات الفساتين
let dresses = [
  { name: "فستان قصيرابيض منقط عصري", price: "30$", img: "images/فستان ابيض منقط.jpg" },
  { name: "فستان خمري سادة ساتان", price: "32$", img: "images/فستان خمري سادة وسط.jpg" },
  { name: "فستان كحلي سادة طويل شيفون", price: "45$", img: "images/فستان كحلي سادة طويل.jpg" },
  { name: "فستان اصفر طويل شيفون", price: "43,5$", img: "images/فستان اصفر طويل سادة.jpg" },
  { name: "فستان سهرة يناسب الاطلالات الفاخرة", price: "75$", img: "images/فستان خمري سهرة.jpg" },
  { name: "فستان سهرة بقصة عصرية ملفتة", price: "82$", img: "images/فستان كحلي سهرة.jpg" },
  { name: "فستان ذهبي يليق بالاطلالات الملكية", price: "61$", img: "images/فستان سهرة دهبي.jpg" },
  { name: "فستان بني من تيب الاميرات", price: "110$", img: "images/فستان بني سهرة.jpg" },
  { name: " ما بين الساتان و الدانتيل ل يليق بنعومتك", price: "110$", img: "images/فستان اسود تقيل.jpg" },
  { name: "فستان الشبفون بقصة الفخامة", price: "110$", img: "images/فستان خمري تقيل.jpg" },
  { name: "فستان الدلوعات لون اصفر", price: "110$", img: "images/فستان اصفر تقيل.jpg" },
  { name: "فستان الدلوعات لون وردي فاتح", price: "110$", img: "images/فستان زهري تقيل.jpg" },

];

// 2. إمساك الحاوية الرئيسية من الـ HTML باستخدام querySelector
let container = document.querySelector("#dresses-container");

// 3. متغيّر لتجميع الأكواد النصية للكروت
let cardsHTML = "";

// 4. استخدام الـ Loop للمرور على كل فستان وإنشاء كود الـ HTML الخاص به
for (let i = 0; i < dresses.length; i++) {

  // let sizeOptions = "";
  // for (let j = 0; j< dresses[i].size.length; i++) {
  //   sizeOptions += `<option value= "${dresses[i].size[i]}"<${dresses[i].size[j]}</option>`;
  // }


  cardsHTML += `
    <div class="card" style="position:relative ; background-color:rgb(41, 1, 34) ;  border: 1px solid #d4af37; padding: 10px; margin: 20px 44px 20px 10px; display: inline-block; width:200px; height :470px; border-radius:12px;text-align:center;">

    <img src="${dresses[i].img}" alt="${dresses[i].name}" style="width: 180px;height:270px; border:1.5px solid black; border-radius:5px;">
      <h2 style= "font-size:16px; margin:12px 0 8px;color:#fff;">${dresses[i].name}</h2>
      <p style="position:absolute; top:66px; right:11.7px; transform:translateY(-50%); background-color:rgb(28,0,24);color:#d4af37; padding: 5px 10px ; border-radius:10px; font-weight:bold;font-size:10px; border:1px solid rgba(212 , 175  55 , 0.6 ); box-shadow;0 2px 5px rgba(0,0,0,0.5);">السعر: <strong>${dresses[i].price}</strong></p>

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















// // مصفوفة لتخزين المنتجات المضافة
// let cart = [];

// // دالة تحديث شكل السلة والمجموع
// function updateCartUI() {
//     let cartItemsList = document.getElementById("cart-items-list");
//     let totalPriceElement = document.getElementById("total-price");
    
//     if (cart.length === 0) {
//         cartItemsList.innerHTML = `<p class="embty-msg">السلة فارغة حاليا .. اضيفي بعض القطع المميزة</p>`;
//         totalPriceElement.innerText = "0\$";
//         return;
//     }

//     let cartHTML = "";
//     let total = 0;

//     cart.forEach((item, index) => {
//         let cleanPrice = parseFloat(item.price.replace('\$', '').replace(',', '.'));
//         let itemTotal = cleanPrice * item.qty;
//         total += itemTotal;

//         cartHTML += `
//             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid rgba(212,175,55,0.3); padding-bottom: 8px;">
//                 <img src="${item.img}" style="width: 40px; height: 50px; border-radius: 4px;">
//                 <span style="color: #fff; font-size: 12px; width: 35%;">${item.name}</span>
//                 <span style="color: #d4af37; font-size: 12px;">المقاس: ${item.size}</span>
//                 <span style="color: #fff; font-size: 12px;">العدد: ${item.qty}</span>
//                 <button onclick="removeFromCart(${index})" style="background: #a91e1e; color: white; border: none; padding: 3px 8px; border-radius: 4px; cursor: pointer;">حذف</button>
//             </div>
//         `;
//     });

//     cartItemsList.innerHTML = cartHTML;
//     totalPriceElement.innerText = total.toFixed(2) + "\$";
// }

// // دالة حذف منتج من السلة
// function removeFromCart(index) {
//     cart.splice(index, 1);
//     updateCartUI();
// }

// // تفعيل زر "أضف للسلة" لكل كارت فستان
// document.addEventListener("click", function(event) {
//     if (event.target && event.target.classList.contains("add-to-cart-btn")) {
//         let name = event.target.getAttribute("data-name");
//         let price = event.target.getAttribute("data-price");
//         let img = event.target.getAttribute("data-img");
        
//         let card = event.target.closest(".card");
//         let size = card.querySelector("select").value;
//         let qty = parseInt(card.querySelector(".qty-input").value);

//         cart.push({ name, price, img, size, qty });
//         updateCartUI();
        
//         alert("تمت إضافة الفستان إلى السلة بنجاح!");
//     }
// });










document.addEventListener("DOMContentLoaded", function() {
    let cart = [];

    // 1. التأكد من وجود زر الفتح، وإذا لم يوجد، نقوم بإنشائه تلقائياً لكي يظهر لك فوراً
    let openCartBtn = document.getElementById('open-cart-btn');
    if (!openCartBtn) {
        openCartBtn = document.createElement('button');
        openCartBtn.id = 'open-cart-btn';
        openCartBtn.innerText = '🛒 سلة التسوق';
        openCartBtn.style.cssText = 'position: fixed; top: 20px; left: 20px; z-index: 9999; background: #d4af37; color: #1a0017; padding: 10px 15px; border-radius: 8px; border: none; font-weight: bold; cursor: pointer;';
        document.body.appendChild(openCartBtn);
    }

    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartOverlay = document.getElementById('cart-overlay');

    // 2. أحداث الفتح والإغلاق
    if (openCartBtn && cartModal) {
        openCartBtn.addEventListener('click', () => {
            cartModal.classList.add('active');
        });
    }

    if (closeCartBtn && cartModal) {
        closeCartBtn.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    if (cartOverlay && cartModal) {
        cartOverlay.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    // 3. دالة تحديث السلة
    function updateCartUI() {
        let cartItemsList = document.getElementById("cart-items-list");
        let totalPriceElement = document.getElementById("total-price");
        
        if (!cartItemsList || !totalPriceElement) return;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `<p class="embty-msg">السلة فارغة حاليا .. اضيفي بعض القطع المميزة</p>`;
            totalPriceElement.innerText = "0\$";
            return;
        }

        let cartHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let cleanPrice = parseFloat(item.price.replace('\$', '').replace(',', '.')) || 0;
            let itemTotal = cleanPrice * item.qty;
            total += itemTotal;

            cartHTML += `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid rgba(212,175,55,0.3); padding-bottom: 8px;">
                    <img src="${item.img}" style="width: 40px; height: 50px; border-radius: 4px;">
                    <span style="color: #fff; font-size: 12px; width: 35%;">${item.name}</span>
                    <span style="color: #d4af37; font-size: 12px;">المقاس: ${item.size}</span>
                    <span style="color: #fff; font-size: 12px;">العدد: ${item.qty}</span>
                    <button onclick="window.removeFromCartJS(${index})" style="background: #a91e1e; color: white; border: none; padding: 3px 8px; border-radius: 4px; cursor: pointer;">حذف</button>
                </div>
            `;
        });

        cartItemsList.innerHTML = cartHTML;
        totalPriceElement.innerText = total.toFixed(2) + "\$";
    }

    // دالة الحذف العامة
    window.removeFromCartJS = function(index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    // 4. إضافة المنتجات للسلة عند الضغط على الزر
    document.addEventListener("click", function(event) {
        if (event.target && event.target.classList.contains("add-to-cart-btn")) {
            let name = event.target.getAttribute("data-name");
            let price = event.target.getAttribute("data-price");
            let img = event.target.getAttribute("data-img");
            
            let card = event.target.closest(".card");
            let size = card.querySelector("select") ? card.querySelector("select").value : "غير محدد";
            let qty = card.querySelector(".qty-input") ? parseInt(card.querySelector(".qty-input").value) : 1;

            cart.push({ name, price, img, size, qty });
            updateCartUI();
            
            alert("تمت إضافة الفستان إلى السلة بنجاح!");
        }
    });
});