// 1. مصفوفة الأقسام الرجالية
let menCategories = [
  { name: "بيجامات", link: "men-pajamas.html" },
  { name: "قمصان",  link: "shirts.html" },
  { name: "بناطلين",  link: "pants.html" },
  { name: "طقومة",  link: "takem.html" },
  { name: "أحذية", link: "men-shoes.html" },
  { name: "كنزات",  link: "sweaters.html" }
];

// 2. إمساك الحاوية من الـ DOM
let container = document.querySelector("#men-categories-container");
let cardsHTML = "";

// 3. بناء الكروت بـ Loop
for (let i = 0; i < menCategories.length; i++) {
  cardsHTML += `
    <div class="cat-card">
    
      <h3>${menCategories[i].name}</h3>
      <a href="${menCategories[i].link}" class="details-btn">عرض التفاصيل</a>
    </div>
  `;
}

// 4. حقن العناصر بالصفحة
container.innerHTML = cardsHTML;