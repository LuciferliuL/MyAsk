/**
 * Created by lucif on 2017/6/18.
 */
$(function(){
    var item = document.getElementsByTagName('item');
    $(window).on("resize",function(){
        var width = $(window).width();
        for(var i = 0;i < item.length;i ++){
            if (width > 768){
                item[i].innerHTML = '<img src="image/slide_0'+i+'_2000x410.jpg" alt="...">';
            }
        }
    })
})