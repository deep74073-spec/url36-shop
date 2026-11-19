const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const empty = document.getElementById("emptyMessage");

let selectedCategory = "All";

function renderProducts() {
  const query = search.value.toLowerCase().trim();

  const filtered = products.filter(product => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch =
      (product.name + " " + product.category + " " + product.description)
      .toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-visual" aria-hidden="true">${product.icon}</div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${product.amazonUrl
          ? `<a class="product-link ready" href="${product.amazonUrl}" target="_blank" rel="sponsored nofollow noopener">View on Amazon ↗</a>`
          : `<span class="product-link">Product link coming soon</span>`
        }
      </div>
    </article>
  `).join("");

  empty.hidden = filtered.length !== 0;
}

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".category.active")?.classList.remove("active");
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderProducts();
  });
});

search.addEventListener("input", renderProducts);
renderProducts();
