// 1. مصفوفة الأقسام للبنات
let girlsCategories = [
  { name: "فساتين بناتي", link: "girls-dresses.html" },
  { name: "بيجامات بناتي",  link: "girls-pajamas.html" },
  { name: "طقومة وتنورات",  link: "girls-suits.html" },
  { name: "إكسسوارات وتوك شعر",  link: "girls-accessories.html" },
  { name: "أحذية بناتي",  link: "girls-shoes.html" }
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