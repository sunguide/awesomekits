"use strict";

$(function () {
    $('h1 ,h2, h3').each(function(){
        let title = $(this).html();
        let result = title.match(/（([\w\W]*)）/);
        let id = null;
        if(result){
            id = result[1].toLowerCase().replace(/( )/g,'-').replace(/\//g,'');
        }
        if(id){
            $(this).attr('id',id);
            $(this).addClass("anchor-fix")
        }

    });
});
