$(document).ready(function(){
    const heightVal = 300;
    const horizontalParent = $('.horizontal-parent');
    const horizontalParentStartPosition = horizontalParent[0].offsetTop;
    const horizontalParentEndPosition = horizontalParentStartPosition + (horizontalParentStartPosition * Math.floor(heightVal/100));
    const horizontalParentHeight = horizontalParentEndPosition - horizontalParentStartPosition;

    $(document).on('scroll', function(){
        const scrollPosition = Math.floor(window.scrollY);
        if (scrollPosition >= horizontalParentStartPosition && scrollPosition < horizontalParentEndPosition - horizontalParentStartPosition) {
            const percentage = (((scrollPosition - horizontalParentStartPosition) / horizontalParentHeight) * 100);
            if (percentage <= 70) $('.horizontal-absolute-child').css('transform', `translateX(-${percentage}%)`);
        };
    })
});