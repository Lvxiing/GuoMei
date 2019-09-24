$(function () {
    lunbo();
    findParentCategory();
    showNewsTitle();

    //楼层左侧
    floor("#groundKey", 26, "#6294f6","","","","");
    // floor("#secondKey", 9, "#3eb8e9","","","","");
    floor("#threeKey", 1, "#7179ea","","","","");
    floor("#fourKey", 68, "#2cc7b0","","","","");
    // floor("#fiveKey", 94, "#9cc736");
    floor("#sixKey", 103, "#6a8ea0","","","","");
    //楼层小标题
    floorTitle("#groundFloor", 26, "rgb(113, 158, 247)", "#groundFloor_div","");
    secondName();
    floorTitle("#threeFloor", 1, "#7f86ec", "#threeFloor_div","");
    floorTitle("#fourFloor", 68, "#41ccb8;", "#fourFloor_div","");
    fiveName();
    floorTitle("#sixFloor", 103, "#829daa", "#sixFloor_div","");
    //热销排行榜
    hot();
    search();
});

//热销榜
function hot() {
    $.getJSON("../../Goods/indexSaleGoods", function (json) {
        var div = "";
        for (var i = 0; i < json.length; i++) {
            if (i == 0) {
                div += "<div class='star' maima_param='undefined'><a href='product_details.html?gid=" + json[i].goods_id + "' target='_blank' title='" + json[i].goods_title + "'><span></span>";
                div += " <img class='lazyloading' src='" + json[i].goods_main_img + "'  data-lazy-img='done' width='210' height='210'>";
                div += "<p class='star_name'>" + json[i].goods_title + "</p>";
                div += " <p class='star_price'><b>¥</b>" + json[i].goods_price + "</p></a></div>";
                div += "<div class='hot_list'><ul>";
            } else {
                div += "<li maima_param='undefined'>";
                div += "<a href='product_details.html?gid=" + json[i].goods_id + "' target='_blank' title='" + json[i].goods_title + "'>";
                div += "<img class='lazyloading' src='" + json[i].goods_main_img + "'  data-lazy-img='done' width='120' height='120'>";
                div += "<p class='hot_name'>" + json[i].goods_title + "</p><p class='hot_price'><span>¥</span>" + json[i].goods_price + "</p>";
                if (i == 1) {
                    div += "<b>2</b></a></li>";
                } else if (i == 2) {
                    div += "<b>3</b></a></li>";
                } else if (i == 3) {
                    div += "<b>4</b></a></li>";
                } else {
                    div += "<b>5</b></a></li>";
                }
            }
        }
        div += "</ul></div>";
        $("div.hot_m").append(div);
    })
}


//生产小标题下的div
function floorDiv(url, h2, name, key) {
    //判断是否是热卖商品
    var div = "";
    if (key == 0) {
        div = "<div class='main' id='load-"+key+"' style='display: block;'><ul class='main_inner'>";
    } else {
        div = "<div class='main' id='load-"+key+"' style='display: none;'><ul class='main_inner'>";
    }
    $.getJSON(url, {"categoryName": name}, function (json) {
        for (var i = 0; i < json.length; i++) {
            div += " <li><a href='product_details.html?gid=" + json[i].id + "' target='_blank' title='" + json[i].title + "'>";
            div += " <img class='lazyloading'src='" + json[i].mainImg + "'alt='" + json[i].title + "' width='130'height='130'>";
            div += "<p class='p_name'>" + json[i].title + "</p>";
            div += " <p class='p_price' productid='9140133854' sku='1130662358' priceflag='false'>";
            div += " <span>¥</span>" + json[i].price + "</p></a></li>";
        }
        div += "</ul></div>";
        $(h2).append(div);
    });


}

//查询第二楼的电脑整机

function secondName() {
    $.getJSON("../../category/findCategoryAndChild", {"parentId": 22}, function (json) {
        var secondFloorName="";
        var brandName="";
        var cid1="";
        var cid2="";
        for(var i=0;i<json.length;i++){
            secondFloorName+=json[i].name+",";
             cid1+=json[i].cid+",";
            var list=json[i].categoryChildren;
            for(var j=0;j<list.length;j++){
                brandName+=list[j].name+",";
                cid2+=list[j].cid+",";
            }
        }
        floorTitle("#secondFloor", 9, "rgb(80, 191, 236)", "#secondFloor_div",secondFloorName);
        floor("#secondKey", 9, "#3eb8e9",secondFloorName,brandName,cid1,cid2);
    });

}

//查询第五楼(家装建材)
function fiveName() {
    $.getJSON("../../category/findCategoryAndChild", {"parentId": 84}, function (json) {
        var fiveFloorName="";
        var fname="";
        var brandName="";
        var cid1="";
        var cid2="";
        for(var i=0;i<json.length;i++){
            var list=json[i].categoryChildren;
            fname+=json[i].name+",";
            cid1+=json[i].cid+",";
            for(var j=0;j<list.length;j++){
                fiveFloorName+=list[j].name+",";
                cid2+=list[j].cid+",";
            }
        }
        floorTitle("#fiveFloor", 94, " #abce5b", "#fiveFloor_div",fiveFloorName);
        floor("#fiveKey", 94, "#9cc736",fname,fiveFloorName,cid1,cid2);
    });
}

//楼层小标题
function floorTitle(key, id, color, h2,floorName) {
    $.getJSON("../../category/findCategoryAndChild", {"parentId": id}, function (json) {
        var names = "";
        //循环拼接name(categoryName)
        for (var i = 0; i < json.length; i++) {
            var list = json[i].categoryChildren;
            for (var j = 0; j < list.length; j++) {
                names += list[j].name += ",";
            }
        }
        //判断是否是第二楼(循环拼接用于前三)
        if(key=="#secondFloor"){
            names+=floorName;
        }else if(key=="#fiveFloor"){
            names+=floorName;
        }
        names = names.substring(0, names.length - 1);
        //热卖
        floorDiv("../../Goods/findGoodsByCategoryName", h2, names, 0);
        //新品抢先
        floorDiv("../../Goods/findGoodsNewByCategoryName", h2, names, 1);
        //低价
        floorDiv("../../Goods/findGoodsLowPrice", h2, names, 2);
        var li = " <li  class='cur' key='0' name='" + names + "'><a style='background:" + color + ";' href='javascript:void(0);'>精选热卖</a></li>";
        li += " <li key='1' name='" + names + "'><a href='javascript:void(0);'>新品抢先</a> </li>";
        li += "<li key='2' name='" + names + "'><a href='javascript:void(0);'>畅享低价</a> </li>";
        var k = 2;
        //判断是否是第二层或第五层
        if(key=="#secondFloor"){
            var secondNames=floorName.split(",");
            for(var o=0;o<secondNames.length-1;o++){
                k++;
                li += "<li key='" + k + "' name='"+secondNames[o]+"'><a href='javascript:void(0);'>"+secondNames[o]+"</a></li>";
                floorDiv("../../Goods/findGoodsNewByCategoryName", h2, secondNames[o], k);
            }
        }else if(key=="#fiveFloor"){
            var secondNames=floorName.split(",");
            for(var o=0;o<secondNames.length-1;o++){
                k++;
                li += "<li key='" + k+ "' name='"+secondNames[o]+"'><a href='javascript:void(0);'>"+secondNames[o]+"</a></li>";
                floorDiv("../../Goods/findGoodsNewByCategoryName", h2, secondNames[o], k);
            }
        }
        for (var i = 0; i < json.length; i++) {
            var list = json[i].categoryChildren;
            for (var j = 0; j < list.length; j++) {
                k++;
                //判断最长显示数
                if(k<9){
                    var name = list[j].name.substring(0, list[j].name.length - 1);
                    if (list[j].name == "通讯设备") {
                        li += "<li key='" + k + "' name='" + name + "'><a href='javascript:void(0);'>手机</a></li>";
                    } else {
                        li += "<li key='" + k + "' name='" + name + "'><a href='javascript:void(0);'>" + name + "</a> </li>";
                    }
                    //普通商品
                    floorDiv("../../Goods/findGoodsNewByCategoryName", h2, name,k );
                }

            }
        }
        $(key).append(li);
    });

}

//楼层
function floor(key, id, color,floorName,brandName,cid1,cid2) {
    $.getJSON("../../category/findCategoryAndChild", {"parentId": id}, function (json) {
        var channelbg = "<div class='channelbg'> <div class='channel'style='background:" + color + "'>";
        if (id == 68 || id == 94) {
            channelbg += "<ul class='channel_inner'>";
        } else {
            channelbg += "<ul class='channel_inner'> <li class='edit-mode'>";
        }
        var keyword = "<div class='keywords edit-mode'>";
        var ul = "<ul class='w55'>";
        var uls = "<ul class='w62' style='width: 85px'>";
        for (var i = 0; i < json.length; i++) {
            if (id == 68 || id == 94) {
                channelbg += "<li class='edit-mode'><a>" + json[i].name + "</a></li>";
            } else {
                channelbg += " <a>" +json[i].name+ "</a><span>/</span>";
            }
            var list = json[i].categoryChildren;
            for (var j = 0; j < list.length; j++) {
                if (id != 68 && id != 94) {
                    channelbg += "<a href='categoryList.html?cid="+list[j].cid+"&level="+list[j].clevel+"' target='_blank' data-code='1000060863-1'>" + list[j].name + "</a><span>/</span>";
                }
                if (id != 26) {
                    ul += "<li><a href='categoryList.html?cid="+list[j].cid+"&level="+list[j].clevel+"' target='_blank'>" + list[j].name + "</a></li>";
                }
                uls += "<li>";
                var lists = json[i].categoryChildren[j].categoryChildren;
                for (var k = 0; k < lists.length; k++) {
                    if (id == 26) {
                        ul += "<li><a href='categoryList.html?cid="+lists[k].cid+"&level="+lists[k].clevel+"' target='_blank'>" + lists[k].name + "手机</a></li>";
                    } else {
                            uls += "<a href='categoryList.html?cid="+lists[k].cid+"&level="+lists[k].clevel+"' target='_blank'>" + lists[k].name + "</a>  ";
                    }
                }
                uls += "</li>";
            }
        }
        if(id==94){
            var floorNames=floorName.split(",");
            var cids=cid1.split(",");
            for(var p=0;p<floorNames.length-1;p++){
                channelbg += "<li class='edit-mode'><a>" + floorNames[p] + "</a></li>";
            }
        }
        channelbg += "</li></ul></div></div>";
        //判断是否是第二楼

        if(id==9){
            var floorNames=floorName.split(",");
            var cids=cid1.split(",");
            var brandNames=brandName.split(",");
            var cidss=cid2.split(",");
            for(var p=0;p<floorNames.length-1;p++){
                ul += "<li><a href='categoryList.html?cid="+cids[p]+"&level=3' target='_blank'>" + floorNames[p]+ "</a></li>";
            }
            uls+="<li>";
            for(var t=0;t<brandNames.length-1;t++){
                uls += "<a href='categoryList.html?cid="+cidss[t]+"&level=4' target='_blank'>" + brandNames[t]+ "</a>  ";
            }
            uls+="</li>";
        }else if(id==94){
            var brandNames=brandName.split(",");
            var cidss=cid2.split(",");
            for(var t=0;t<brandNames.length-1;t++){
                ul += "<li><a href='categoryList.html?cid="+cidss[t]+"&level=4' target='_blank' data-code='1000060863-1'>" +brandNames[t]+ "</a></li>";
            }

        }
        keyword += ul + "</ul>" + uls + "</ul>";
        channelbg += keyword;
        $(key).append(channelbg);
    });
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

//轮播
function lunbo() {
    $("ul.focus_box").empty();
    $.getJSON("../../index/mainImagesData", function (json) {
        for (var i = 0; i < json.length; i++) {
            var li;
            if (i != 0) {
                li = "<li style='display: none; background:" + json[i].bcolor + ";'><a href='#' target='_blank'><img class='lazyloading'  src='http://47.101.130.148:88/images/" + json[i].folder + "/" + json[i].imageName + "'alt='' title='' width='100' height='100'></a></li>";
            } else {
                li = "<li style='display: block; background:" + json[i].bcolor + ";'><a href='#' target='_blank'><img class='lazyloading'  src='http://47.101.130.148:88/images/" + json[i].folder + "/" + json[i].imageName + "'alt='' title='' width='100' height='100'></a></li>";
            }
            $("ul.focus_box").append(li);
        }
        for (var i = 0; i < json.length; i++) {
            var li;
            if (i == 0) {
                li = "<li class='cur' data-index='" + i + "'><a></a></li>";
            } else {
                li = "<li data-index='" + i + "'><a></a></li>";
            }
            $("#ol").append(li);
        }

    });
}

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

//首页新闻标题显示
function showNewsTitle() {
    $("div.gome_news_content").empty();
    $.getJSON('../../news/findAllNews', function (json) {
        for (var i = 0; i < json.length; i++) {
            var cate = json[i];
            var span = "";
            span += "<span>";
            span += "<a class='gome_news_sort edit-mode' href='gm-indexsever.html' target='_blank' modeltype='2'>公告</a>";
            span += "<a class='gome_news_text  edit-mode' href='news_details.html?id=" + cate.id + "' target='_blank' modeltype='2'>" + cate.title + "</a>";
            span += "</span>";
            if (i < 7) {
                $("div.gome_news_content").append(span);
            }
        }
    })
}


//搜索跳转
function search() {
    $(".search-btn").click(function () {
        var input=$("#searchInput").val();
        if(input==""){
            input="华为";
        }
        var content = encodeURI(encodeURI(input));
        window.location.href='categoryLists.html?content='+content;
    });
}