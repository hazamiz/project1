// 1. مصفوفة الأقسام للبنات
let girlsCategories = [
  { name: "بيجامات", link: "pajama2.html" },
  { name: "بناطلين",  link: "jenz.html" },
  { name: "طقومة",  link: "takem.html" },
  { name: "أحذية", link: "shoes.html" },
  { name: "كنزات",  link: "shert.html" }
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