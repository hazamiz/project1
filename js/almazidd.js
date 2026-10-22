let girlsCategories = [

  { name: "فساتين راقية",  link: "women.html" },
  { name: "تشكيلة بيجامات",  link: "pajama.html" },
  { name: "طقومة و ترانشكوتات",link: "sete.html" },
  { name: "احذية و حقائب",  link: "heha.html" },
  { name: "اكسسوارات",link: "acses.html" },





];

// 2. إمساك الحاوية من الـ DOM
let container = document.querySelector("#girls-categories-container");
let cardsHTML = "";

// 3. بناء الكروت بـ Loop
for (let i = 0; i < girlsCategories.length; i++) {
  cardsHTML += `
    <div class="cat-card">

    
    <h3>${girlsCategories[i].name}</h3>
    <a href="${girlsCategories[i].link}" class="details-btn">عرض التفاصيل</a>
    </div>
    `;
}

// 4. حقن العناصر بالصفحة
container.innerHTML = cardsHTML;