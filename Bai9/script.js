let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const $slides = $(".mySlides");
    const $dots = $(".demo");
    const $captionText = $("#caption");
    if (n > $slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = $slides.length;
    }
    $.each($slides, function(index, value) {
        $(value).css("display", "none");
    });
    $.each($dots, function(index, value) {
        $(value).removeClass("active");
    });

    $(($dots).get(slideIndex - 1)).addClass("active");
    $(($slides).get(slideIndex - 1)).css("display", "block");
    let dot = $($dots.get(slideIndex - 1)).attr("alt");
    $captionText.text(dot);
}