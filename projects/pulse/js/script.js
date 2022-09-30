$(document).ready(function(){
    
    $('.navTrigger').click(function(){
        // $('.mobile-menu').toggleClass('hidden');
        $('.mobile-menu').toggleClass('is-active');
        $('body').toggleClass('overflow');
        return false;
    });
})