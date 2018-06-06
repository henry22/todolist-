var app = $.sammy(function () {

    this.get('#/mytasks.html', function () {
        //your function
    });
    this.get('#/inprogress.html', function () {
        //your function 
    });
    this.get('#/completed.html', function () {
        //your function
    });
});
app.run();

$('.status li').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('shadow');
});