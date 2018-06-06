$('.status li').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('shadow');
});