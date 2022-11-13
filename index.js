$(document).ready(function(){
    const heightVal = 300;
    const horizontalParent = $('.horizontal-parent');
    const horizontalParentStartPosition = horizontalParent[0].offsetTop;
    const horizontalParentEndPosition = horizontalParentStartPosition + (horizontalParentStartPosition * Math.floor(heightVal/100));
    const horizontalParentHeight = horizontalParentEndPosition - horizontalParentStartPosition;
    console.log(horizontalParentStartPosition, horizontalParentEndPosition, horizontalParentHeight);

    $(document).on('scroll', function(){
        const scrollPosition = Math.floor(window.scrollY);
        if (scrollPosition >= horizontalParentStartPosition && scrollPosition < horizontalParentEndPosition - horizontalParentStartPosition) {
            // console.log(scrollPosition - horizontalParentStartPosition, horizontalParentHeight);
            const percentage = (((scrollPosition - horizontalParentStartPosition) / horizontalParentHeight) * 100);
            if (percentage <= 50) $('.horizontal-absolute-child').css('transform', `translateX(-${percentage}%)`);
        };
    })
});