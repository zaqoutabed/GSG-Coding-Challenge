
const getHTMLProducts = (products) =>
  products
    .map((p) => `
            <div class="product">
                <div class="top"><span class="badge">${p.category}</span></div>
                <div class="body" style="background-image: url('${p.thumbnail}');"></div>
                <div class="footer"><span>${p.title}</span></div>
            </div>
            `)
    .join("");

const filtersProducts = (category) =>
  category ? AllProducts.filter((p) => p.category == category) : AllProducts;

const renderProducts = (products) => {
  const app = document.getElementById("products-list");
  app.innerHTML = getHTMLProducts(products);
};

const applyFilters = (filter) => {
  const filterdProducts = filtersProducts(filter);
  renderProducts(filterdProducts);
};

const renderFilters = () => {
  const filters = document.getElementById("filters");
  const categories = [...new Set(AllProducts.map((p) => p.category))];
  filters.innerHTML = `<lable for="select-filters">Filter Products</lable>: <select id="select-filters"><option selected value="">All</option>${categories.map(
    (category) => `<option value="${category}">${category}</option>`
  )}</select>`;
};

const bindEvents = () => {
  const select = document.getElementById("select-filters");
  select.onchange = (ev) => {
    applyFilters(ev.target.value)
  };
};
(function () {
  renderProducts(AllProducts);
  renderFilters();
  bindEvents();
})();
