$(function () {
    findParentCategory();
    search();
    //--------------------悬浮商品分类特效-------------------------
    $("#lisnav li").live("hover",this,
        function () {
            $(this).addClass("bgw").siblings().removeClass("bgw");
            $("#subnav").show();
            var index = $(this).attr("cid");
            $("#cid-" +index).show().siblings().hide();
            // $("#loading1-sync>div").eq(index);
        }
    );
    //分类框失去焦点事件
    $("#navBox,#subnav").hover(
        function () {
        },
        function () {
            $("#subnav").hide();
            $("#lisnav li").removeClass("bgw");
        }
    );
});

//显示商品一级
function findParentCategory() {
    $.getJSON("../../category/findParentCategory?pid=0", function (json) {
        for (var i = 0; i < json.length; i++) {
            category(json[i].cid);
            var li = "<li class='first edit-mode nav-item' data-index='" + i + "' cid='" + json[i].cid + "'> <h3>"
            li += " <a href='javascript:;' target='_blank' >" + json[i].name + "</a>";
            li += " </h3></li>";
            $("#lisnav").append(li);
        }

    })
}

//根据分类编号查询子分类
function category(cid) {
    $.getJSON("../../category/findCategoryAndChild",{"parentId":cid}, function (json) {
        var div="<div class='fullcategory' style='display: none;' id='cid-"+cid+"'><div class='fullcategory-left'>";
        div+=" <div class='fullcategory-title'>";
        var divs="";
        for(var i=0;i<json.length;i++){
            div+="<a href='#' title='"+json[i].name+"'>"+json[i].name+"<i></i></a>";
            divs+="<div class='fullcategory-content' style='width: 769px;'><ul class='fullcategory-list' style='width: 769px;'>  <div class='title' style='margin-top: -8px;_margin: -8px 0;'>"+json[i].name+"</div> <div class='list' style='width: 700px;'>";
            var list=json[i].categoryChildren;
            var divss="";
            for(var j=0;j<list.length;j++){
                divss+="<a href='categoryList.html?cid="+list[j].cid+"&level="+list[j].clevel+"' target='_blank' class='hot'  title='"+list[j].name+"'>"+list[j].name+"</a>";
                var lists=json[i].categoryChildren[j].categoryChildren;
                for(var k=0;k<lists.length;k++){
                    divss+="<a href='categoryList.html?cid="+lists[k].cid+"&level="+lists[k].clevel+"' target='_blank'  title='"+lists[k].name+"'>"+lists[k].name+"</a>";
                }
                divs+=divss;
            }
            divs+="</div></ul></div>";
        }
        div+="</div>";
        div+="<div class='fullcategory-content-box' id='fullcategory-content-box'style='width: 769px;'>";
        div+=divs;
        div+="</div></div></div>";
        $("#loading1-sync").append(div);
    });
}

//搜索跳转
function search() {
    $(".search-btn").click(function () {
        var input=$("#searchInput").val();
        var content = encodeURI(encodeURI(input));
        window.location.href='categoryLists.html?content='+content;
    });
}