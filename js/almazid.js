// 1. مصفوفة الأقسام النسائية
let womenCategories = [
  { name: "فساتين راقية",  link: "women.html" },
  { name: "تشكيلة بيجامات",  link: "pajama.html" },
  { name: "طقومة و ترانشكوتات",link: "sete.html" },
  { name: "احذية و حقائب",  link: "heha.html" },
  { name: "اكسسوارات",link: "acses.html" },
   { name: "",  link: "makeup.html" },
   { name: "لانجري",link: "makeup.html" },
   { name: "حجابات و شالات",  link: "makeup.htmlheha" },
 { name: "حجابات و شالات",  link: "makeup.html" },
 ];

// 2. إمساك الحاوية من الـ DOM
let container = document.querySelector("#categories-container");
let cardsHTML = "";

// 3. بناء الكروت بـ Loop
for (let i = 0; i < womenCategories.length; i++) {
  cardsHTML += `
    <div class="cat-card">
     
      <h3>${womenCategories[i].name}</h3>
      <a href="${womenCategories[i].link}" class="details-btn">عرض التفاصيل</a>
    </div>
  `;
}

// 4. حقن العناصر بالصفحة
container.innerHTML = cardsHTML;