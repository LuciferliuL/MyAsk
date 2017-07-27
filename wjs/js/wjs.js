/**
 * Created by lucif on 2017/6/18.
 */
$(function(){
    var items = $('.carousel-inner .item');
    //屏幕大小改变
    $(window).on('resize',function(){
        var width = $(window).width();
        if (width >= 768){
            $(items).each(function(index,value){
                var item = $(this);
                var imgSrc = item.data('bigImg');
                item.html('<a href="javascript:;" class="pcImg"><img src="'+imgSrc+'"></a>')
            })
        }else{
            $(items).each(function(index,value){
                var item = $(this);
                var itemSrc = item.data('smallImg');
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+itemSrc+'"></a>');
            })
        }
    }).trigger('resize');
})