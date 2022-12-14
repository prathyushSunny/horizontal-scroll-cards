$(document).ready(function(){
    const heightVal = 300;
    const horizontalParent = $('.horizontal-parent');
    const horizontalParentStartPosition = horizontalParent[0].offsetTop;
    const horizontalParentEndPosition = horizontalParentStartPosition + (horizontalParentStartPosition * Math.floor(heightVal/100));
    const horizontalParentHeight = horizontalParentEndPosition - horizontalParentStartPosition;

    $(document).on('scroll', function(){
        const scrollPosition = Math.floor(window.scrollY);
        const windowWidth = window.innerWidth;
        const isDesktop = windowWidth >= 500;
        const cardsContainer = $('.horizontal-absolute-child');
        if (scrollPosition >= horizontalParentStartPosition && scrollPosition < horizontalParentEndPosition) {
            const percentage = isDesktop ?
                 (((scrollPosition - horizontalParentStartPosition) / horizontalParentHeight) * 100)
                 :
                 (((scrollPosition - horizontalParentStartPosition) / horizontalParentHeight) * 120)
            isDesktop ? 
                cardsContainer.css('transform', `translateX(${10 - percentage}%)`)
                :
                cardsContainer.css('transform', `translateX(-${percentage}%)`)
        };
    })
});