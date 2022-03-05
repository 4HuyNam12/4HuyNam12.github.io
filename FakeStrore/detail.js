$(function() {
    const templateEl = document.querySelector(".template-product").content;
    const $productList = $(".product");
    let URL = localStorage.getItem("1");
    fetch(URL)
        .then((res) => res.json())
        .then((json) => {
            const $product = $(templateEl).clone();
            $product.find(".image").attr("src", json.image);
            $product.find(".title").text(json.title).css("font-weight", "bolder");
            $product
                .find(".price")
                .text("Price : " + json.price + " $")
                .css("font-weight", "bolder");
            $product
                .find(".description")
                .text(json.description)
                .css("font-weight", "bolder");
            $product
                .find(".category")
                .text("Category : " + json.category)
                .css("font-weight", "bolder");
            $product
                .find(".rating")
                .text("Rating : " + json.rating.rate)
                .css("font-weight", "bolder");
            $product.appendTo($productList);
        });
    localStorage.clear();
});