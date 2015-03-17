$(document).ready(function(){
    // Hide all DIVs wrapped within .carousel
    $('.carousel div').hide();
    /**
     * Show first slide
     * If you want to display another child, just replace
     * :first-child by :nth-child(n) where n is an integer
     */
    $('.carousel div:first-child').show();
    // Hide previous button if we're on the first slide
    if( $('.carousel div:visible').is(':first-child') ) {
        $('.btn-prev').hide();
    }
    // Listen button clicks
    $('.btn-dir').click(function(){
        // Hide next button on the last slide
        if( $('.carousel div:visible').next().is(':last-child') ) {
            $('.btn-next').hide();
        }
        // If button next is clicked display next slide
        if( $(this).attr('class') == 'btn-dir btn-next' ) {
            if( $('.carousel div:visible').next().length > 0 ) {
                $('.btn-prev').show();
                $('.carousel div:visible').toggle().next().toggle();
            }
        }
        // If button prev is clicked display previous slide
        if( $(this).attr('class') == 'btn-dir btn-prev' ) {
            if( $('.carousel div:visible').prev().length > 0 ) {
                $('.btn-next').show();
                $('.carousel div:visible').toggle().prev().toggle();
            }
            // If we reached the first slide, hide prev button
            if( $('.carousel div:visible').is(':first-child') ) {
                $('.btn-prev').hide();
            }
        }
    });
});