
function filterProducts(category) {
    const products = document.querySelectorAll(".product");

    products.forEach(item => {
        if (category === "all") {
            item.classList.remove("hide");
        } else {
            if (item.dataset.category === category) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        }
    });
}
