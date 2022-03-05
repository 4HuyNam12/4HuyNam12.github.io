$(function() {
    $("body").removeClass("preloading");
    $(".loader").delay(1000).fadeOut("fast");
    let URL = "https://fakestoreapi.com/products/";
    let currentID = "";
    render(URL);
    window.history.pushState(null, "alo", "./detail.html");
    window.history.pushState(null, null, "./index.html");
    setTimeout(() => {
        $(".image-product").on("click", function(e) {
            let id = e.target.id;
            let currentURL = URL + id;
            localStorage.setItem(1, currentURL);
            window.open("./detail.html");
        });
    }, 1000);
});

function render(url) {
    const templateEl = document.querySelector(".template-product").content;
    const $listProduct = $(".list-product");

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            $.each(json, function(index, product) {
                const $product = $(templateEl).clone();
                $product.find(".image-product").attr("src", product.image);
                $product
                    .find(".title")
                    .text(product.title)
                    .css("font-weight", "bolder");
                $product
                    .find(".price")
                    .text("Price : " + product.price + " $")
                    .css("font-weight", "bolder");
                $product.find("#id").attr("id", product.id);
                $product.appendTo($listProduct);
            });
        });
}