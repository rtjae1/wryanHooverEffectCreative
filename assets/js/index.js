$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
        $('body').toggleClass('night')
    })
})