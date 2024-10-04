// FAQ accordion 
$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});



// male female toggle button
$(document).ready(function () {
    $("#female-box").click(function(){
        $("#tick-f").removeClass('d-none');
        $("#tick-m").addClass('d-none');
      });
      
      $("#male-box").click(function(){
        $("#tick-m").removeClass('d-none');
        $("#tick-f").addClass('d-none');
      });
});


// caraousel scroll 
$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
  
