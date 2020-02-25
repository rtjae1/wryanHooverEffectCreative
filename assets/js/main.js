function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.color = "#444444";
    document.getElementById("myNav").style.background = "#ffdd67";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
        $('body').toggleClass('night')
    })
})