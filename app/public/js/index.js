//main js
$(function () {
    autoSiderNav();
    $(".change-language").click(function () {
        if($(this).html() == "EN"){
            document.cookie="locale=zh-CN";
        }else{
            document.cookie="locale=en-US";
        }
        window.location.reload();
    })
});

function autoSiderNav() {
    if($.trim($(".aside-left-nav").html()).length != 0){
        return true;
    }
    var currentParentId = '';
    var nodes = {};
    var child = {};
    var count = $(".content-container").find("h2,h3").length;
    $(".content-container").find("h2,h3").each(function(i,t){
        var tag = $(this).get(0).tagName.toLowerCase();
        //获取id
        let title = $(this).html();
        let result = title.match(/（([\w\W]*)）/);
        let id = null;
        if(result){
            id = result[1].toLowerCase().replace(/( )/g,'-').replace(/\//g,'');
        }else{
            id = title.toLowerCase().replace(/( )/g,'-').replace(/\//g,'');
        }
        if(!id){
            return true;
        }else if(id.length > 15){
            title = title.replace(/(（[\w\W]*）)/g,'');
        }
        //add anchor
        $(this).attr('id',id);
        $(this).addClass("anchor-fix");

        if(tag == 'h2'){
            if(currentParentId){
                nodes[currentParentId]['child'] = child;
                child = {};
            }
            currentParentId = id;
            nodes[currentParentId] = {
                'name':title
            };
        }else if(tag == 'h3'){
            child[id] = title;
        }
        if(count-1 == i && nodes[currentParentId]){
            nodes[currentParentId]['child'] = child;
        }
        $(this).attr("id",id);
    });
    if(nodes){
        var html = '';
        for(name in nodes){
            var item = nodes[name];
            html += '<dt><a href="#' + name +'">'+ nodes[name].name +'</a></dt><dd>';
            if(item.child){
                html +='<ul>';
                for (index in item.child){
                    html += '<li><a href="#' + index +'">'+ item.child[index] +'</a></li>';
                }
                html +='</ul>';
            }
            html += '</dd>'
        }
        $(".aside-left-nav").html(html);
    }
}