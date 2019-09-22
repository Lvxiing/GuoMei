$(function () {
    //定义每页数量
    var pageSize=2;
    browse();
    findParentCategory();
    search();
    searchGoods(1,pageSize);
    var _t = getQueryString("content"); //获取地址栏参数
    var content = decodeURI(_t); //只需要转一次码
    //设置当前搜索的内容标题
     $(".nFont14").text(content);
     $("#searchInput").val(content);
    //按综合,销量,新品查询
    var sort=0;
    $("#filter-order-box li").click(function () {
        sort=$(this).attr("data-sort");
        $(this).addClass("cur").siblings().removeClass("cur");
        if(sort==0){  //查询全部
            searchGoods(1,pageSize);
        }else if(sort==2){  //按新品
             sort=1;
            searc2(1,1,pageSize);
        }else if(sort==1){   //按销量
            sort=4;
            searc1(sort,1,pageSize);
        }
    });
    //价格点击
    $("#sort-price").toggle(
        function () {
            $(this).addClass("price-up").removeClass("price-down");
            sort=2;   //高价查询
            searc3(2,1,pageSize);
        },
        function () {
            $(this).addClass("price-down").removeClass("price-up");
            sort=3;   //低价查询
            searc3(3,1,pageSize);
        }
    );
    //价格区间
    $(".priceRange-input").click(function () {
        $("#filter").addClass("filter-priceRange-click");
    });
    //离开价格区间ul隐藏
    $("#filter").hover(
        function () {},
        function () {$(this).removeClass("filter-priceRange-click");}
    );
    //价格区间清除
    $("#fc-btn-cancel").click(
        function () {
            $("#fc-lowPrice").val("");
            $("#fc-highPrice").val("");
        }
    );
    //价格区间的查询
    var price;
    $("#fc-btn-ok").click(function () {
        var lowPrice =$("#fc-lowPrice").val();
        var highPrice =$("#fc-highPrice").val();
        sort=5;    //标识为区间查询(用于上下分页)
        if(lowPrice!=""&&highPrice!=""){   //判断区间(两个都不为空按条件查,低价不为空按递减查,其他不调用区间查询方法)
            price=lowPrice+"-"+highPrice;
            searc4(1,price,pageSize);
        }else if(lowPrice!=""){
            price=lowPrice;
            searc4(1,price,pageSize);
        }
        //点击确认隐藏
        $("#filter").removeClass("filter-priceRange-click")
    });

    //上下分页
    $("#mp-prev").click(function () {
        var number=$("#min-pager-number").text().split("/");
        if(number[0]>1){
            var num=parseInt(number[0])-1;
            if(sort==0){  //查询全部
                searchGoods(num,pageSize);
            }else if(sort==1){//按新品
                searc2(sort,num,pageSize);
            }else if(sort==2||sort==3){  //按价格
                searc3(sort,num,pageSize);
            }else if(sort==4){   //按销量
                searc1(sort,num,pageSize);
            }
            else{//按区间查
                searc4(num,price,pageSize);
            }

        }
    });

    $("#mp-next").click(function () {
        var number=$("#min-pager-number").text().split("/");
        if(number[0]<number[1]){
            var num=parseInt(number[0])+1;
            if(sort==0){  //查询全部
                searchGoods(num,pageSize);
            }else if(sort==1){  //按新品
                searc2(sort,num,pageSize);
            }else if(sort==2||sort==3){  //按价格
                searc3(sort,num,pageSize);
            }else if(sort==4){
                searc1(sort,num,pageSize); //按销量
            }
            else{  //按区间查
                searc4(num,price,pageSize);
            }

        }

    });
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
    $.getJSON("../../category/findCategoryAndChild", {"parentId": cid}, function (json) {
        var div = "<div class='fullcategory' style='display: none;' id='cid-" + cid + "'><div class='fullcategory-left'>";
        div += " <div class='fullcategory-title'>";
        var divs = "";
        for (var i = 0; i < json.length; i++) {
            div += "<a href='#' title='" + json[i].name + "'>" + json[i].name + "<i></i></a>";
            divs += "<div class='fullcategory-content' style='width: 769px;'><ul class='fullcategory-list' style='width: 769px;'>  <div class='title' style='margin-top: -8px;_margin: -8px 0;'>" + json[i].name + "</div> <div class='list' style='width: 700px;'>";
            var list = json[i].categoryChildren;
            var divss = "";
            for (var j = 0; j < list.length; j++) {
                divss += "<a href='categoryList.html?cid=" + list[j].cid + "&level=" + list[j].clevel + "' target='_blank' class='hot'  title='" + list[j].name + "'>" + list[j].name + "</a>";
                var lists = json[i].categoryChildren[j].categoryChildren;
                for (var k = 0; k < lists.length; k++) {
                    divss += "<a href='categoryList.html?cid=" + lists[k].cid + "&level=" + lists[k].clevel + "' target='_blank'  title='" + lists[k].name + "'>" + lists[k].name + "</a>";
                }
                divs += divss;
            }
            divs += "</div></ul></div>";
        }
        div += "</div>";
        div += "<div class='fullcategory-content-box' id='fullcategory-content-box'style='width: 769px;'>";
        div += divs;
        div += "</div></div></div>";
        $("#loading1-sync").append(div);
    });
}

//显示
function searchGoods(pageIndex,pageSize) {
    var _t = getQueryString("content"); //获取地址栏参数
    var content = decodeURI(_t); //只需要转一次码
    $.getJSON("../../Goods/showAll",{"pageIndex":pageIndex,"pageSize":pageSize,"keywords":content}, function (json) {
        $("#searchTotalNumber").text(json.totalCount);
        xunhuan(json);
    });
}

//按销量查询(暂时保留)
function searc1(bs,pageno,pageSize) {
    var _t = getQueryString("content"); //获取地址栏参数
    var content = decodeURI(_t); //只需要转一次码
    $.getJSON("../../Goods/showAll",{"pageIndex":pageno,"pageSize":pageSize,"keywords":content,"bs":bs}, function (json) {
        //循环显示商品
        xunhuan(json);
    });
}

//按新品查
function searc2(bs,pageno,pageSize) {
    var _t = getQueryString("content"); //获取地址栏参数
    var content = decodeURI(_t); //只需要转一次码
    $.getJSON("../../Goods/showAll",{"pageIndex":pageno,"pageSize":pageSize,"keywords":content,"bs":bs}, function (json) {
        //循环显示商品
        xunhuan(json);
    });
}
//按价格查
function searc3(bs,pageno,pageSize) {
    var _t = getQueryString("content"); //获取地址栏参数
    var content = decodeURI(_t); //只需要转一次码
    $.getJSON("../../Goods/showAll",{"pageIndex":pageno,"pageSize":pageSize,"keywords":content,"bs":bs}, function (json) {
        //循环显示商品
        xunhuan(json);
    });
}

//按区间查
function searc4(pageno,price,pageSize) {
    var _t = getQueryString("content"); //获取地址栏参数
    var content = decodeURI(_t); //只需要转一次码
    $.getJSON("../../Goods/showAll",{"pageIndex":pageno,"pageSize":pageSize,"keywords":content,"price":price}, function (json) {
        //循环显示商品
        xunhuan(json);
    });
}


//公共方法(循环生产li)
function xunhuan(json) {
    $("#product-box").empty();
    var lists=json.list;
    for(var i=0;i<lists.length;i++){
        // alert(lists[i].title);
        var li="<li class='product-item'> <ul class='arbitrage clearfix'></ul> ";
        li+="<div class='item-tab-warp'>";
        li+="<p class='item-pic'><a class='emcodeItem item-link' target='_blank' track='产品列表图片' href='product_details.html?gid="+lists[i].id+"'>";
        li+="<img src='"+lists[i].img+"' width='210px' height='210px'></a></p> <div class='item-price-info'> <div class='item-price'>";
        li+="<span class='price asynPrice'>¥"+lists[i].price+"</span></div></div>";
        li+="<p class='item-name'> <a class='emcodeItem item-link' href='product_details.html?gid="+lists[i].id+"'>"+lists[i].title+"</a></p>";
        li+=" <p class='item-option clearfix' style='margin-left: 53px;'> <span class='add-collection'><i class='icon'></i></span>";
        li+=" <span class='add-cart addTo-cart'><i class='icon'></i></span> </p> </div> </li>";
        $("#product-box").append(li);
    }

    //显示当前页码和总页面
    var pageCount=json.pageCount;
    var pageNo=json.pageNo;
    $("#min-pager-number").text(pageNo+"/"+pageCount);
    if(pageCount==pageNo){
        $("#mp-next").addClass("mp-disable");
        $("#mp-prev").removeClass("mp-disable");
    }
    if(pageNo==1){
        $("#mp-next").removeClass("mp-disable");
        $("#mp-prev").addClass("mp-disable");
    }
    if(pageCount==1){
        $("#mp-next").addClass("mp-disable");
        $("#mp-prev").addClass("mp-disable");
    }

}


//截取地址栏参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}



//搜索跳转
function search() {
    $(".search-btn").click(function () {
        var input=$("#searchInput").val();
        var content = encodeURI(encodeURI(input));
        window.location.href='categoryLists.html?content='+content;
    });
}


//最近浏览
function browse() {
    $.getJSON("../../Goods/findBrowseGoods",function (json) {
        if(json.msg=="success"){
            var list=json.list;
            for(var i=0;i<list.length;i++){
                var li="<li class='active'><p class='num num1'>"+i+1+"</p>";
                li+="<p class='pname'><a class='bigD_item' href='product_details.html?gid="+list[i].id+"' target='_blank'>"+list[i].title+"</a></p>";
                li+="<div class='pdetail'><p class='pic'><a class='bigD_item'  href='product_details.html?gid="+list[i].id+"' target='_blank'><img  src='"+list[i].mainImg+"'></a></p>";
                li+="<p class='name'><a class='bigD_item'  href='product_details.html?gid="+list[i].id+"' target='_blank'>"+list[i].title+"</a></p>";
                li+="<p class='price'><em>¥<span>"+list[i].price+"</span></em></p></div> </li>";
                $("#bigD_weekTop").append(li);
            }
        }
    });
}