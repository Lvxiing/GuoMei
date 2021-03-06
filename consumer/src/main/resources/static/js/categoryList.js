$(function () {
    findParentCategory();
    categoryGoodsShow();
    search();
     //按综合,销量,新品查询
    var sort=0;
    $("#filter-order-box li").click(function () {
         sort=$(this).attr("data-sort");
        $(this).addClass("cur").siblings().removeClass("cur");
        if(sort==0){  //查询全部
            searc5(sort,1);
        }else if(sort==1){//按销量
            searc1(sort,1);
        }else if(sort==2){  //按新品
            searc2(sort,1);
        }
    });
    //价格点击
    $("#sort-price").toggle(
        function () {
            $(this).addClass("price-up").removeClass("price-down");
            sort=4;
            searc3(4,1);
        },
        function () {
            $(this).addClass("price-down").removeClass("price-up");
              sort=3;
            searc3(3,1);
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
            searc4(sort,1,price);
        }else if(lowPrice!=""){
            price=lowPrice;
            searc4(sort,1,price);
        }
    });

    //上下分页
    $("#mp-prev").click(function () {
        var number=$("#min-pager-number").text().split("/");
        if(number[0]>1){
            var num=parseInt(number[0])-1;
            if(sort==0){  //查询全部
                searc5(sort,num);
            }else if(sort==1){//按销量
                searc1(sort,num);
            }else if(sort==2){  //按新品
                searc2(sort,num);
            }else if(sort==3||sort==4){  //按价格
                searc3(sort,num);
            }else{//按区间查
                searc4(sort,num,price);
            }

        }
    });

    $("#mp-next").click(function () {
        var number=$("#min-pager-number").text().split("/");
        if(number[0]<number[1]){
            var num=parseInt(number[0])+1;
            if(sort==0){  //查询全部
                searc5(sort,num);
            }else if(sort==1){//按销量
                searc1(sort,num);
            }else if(sort==2){  //按新品
                searc2(sort,num);
            }else if(sort==3||sort==4){  //按价格
                searc3(sort,num);
            }else{  //按区间查
                searc4(sort,num,price);
            }

        }

    });
















});
//定义每页数量
   var pageSize=12;
//显示商品一级
function findParentCategory() {
    $.getJSON("../../category/findParentCategory?pid=0", function (json) {
        for(var i=0;i<json.length;i++){
            category(json[i].cid);
            var li="<li class='first edit-mode nav-item' data-index='"+i+"' cid='"+json[i].cid+"'> <h3>"
            li+=" <a href='javascript:;' target='_blank' >"+json[i].name+"</a>";
            li+=" </h3></li>";
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

//显示分类级别
function classification(name) {
    var re=GetRequest();
    $.getJSON("../../category/findCategoryParent",{"cid":re.cid}, function (json) {
        var cname=json.cname.split(">");
        var cid=json.cid.split(">");
        var div="<div class='nSearch-crumb clearfix' id='parent'><span id='category-first' class='nSearch-crumb-tit-category'>"+cname[0]+"</span>";
        for(var i=1;i<cname.length;i++){
            div+="<dl class='nSearch-crumb-category' id='category-second'><dt class='category-name'>"+cname[i]+"</dt>";
            div+="<dd class='category-box clearfix' id='category-box-second'></dd></dl>";
        }
        div+="</div><div class='nSearchWarp nSearch-crumb-category-results'> <span class='nFont14'><b class='nHeigh'>"+name+"</b></span></div>";
        $("#category").append(div);
    });
}
//获取url中"?"符后的字串
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

//页面一加载显示数据
function categoryGoodsShow() {
    var re=GetRequest();
    $.getJSON("../../category/categoryGoodsShow",{"cid":re.cid,"level":re.level,"pageIndex":1,"pageSize":pageSize}, function (json) {
        classification(json.categoryInfo.name);
        //循环显示商品
        var lists=json.page.list;
        for(var i=0;i<lists.length;i++){
            var li="<li class='product-item'> <ul class='arbitrage clearfix'></ul> ";
            li+="<div class='item-tab-warp'>";
            li+="<p class='item-pic'><span name='goodsId' style='display: none;'>"+lists[i].id+"</span><a class='emcodeItem item-link' target='_blank' track='产品列表图片' href='product_details.html?gid="+lists[i].id+"'title='"+lists[i].title+"'>";
            li+="<img src='"+lists[i].mainImg+"' alt='"+lists[i].title+"' width='210px' height='210px'></a></p> <div class='item-price-info'> <div class='item-price'>";
            li+="<span class='price asynPrice'>¥<span name='price'>"+lists[i].price+"</span></span></div></div>";
            li+="<p class='item-name'> <a class='emcodeItem item-link' href='product_details.html?gid="+lists[i].id+"' title='"+lists[i].title+"'>"+lists[i].title+"</a></p>";
            li+=" <p class='item-option clearfix' style='margin-left: 53px;'> <span class='add-collection' name='toCollection'><i class='icon'></i></span>";
            li+=" <span class='add-cart addTo-cart' name='toCart' ><i class='icon'></i></span> </p> </div> </li>";
            $("#product-box").append(li);
        }

        //热销榜
        var list=json.salaRanking;
        for(var i=0;i<list.length;i++){
            var li="<li class='active'><p class='num num1'>"+(i+1)+"</p>";
            li+="<p class='pname'><a class='bigD_item' href='product_details.html?gid="+list[i].id+"' target='_blank'>"+list[i].title+"</a></p>";
            li+="<div class='pdetail'><p class='pic'><a class='bigD_item'  href='product_details.html?gid="+list[i].id+"' target='_blank'><img  src='"+list[i].mainImg+"'></a></p>";
            li+="<p class='name'><a class='bigD_item'  href='product_details.html?gid="+list[i].id+"' target='_blank'>"+list[i].title+"</a></p>";
            li+="<p class='price'><em>¥<span>"+list[i].price+"</span></em></p></div> </li>";
            $("#bigD_weekTop").append(li);
        }
        //显示当前页码和总页面
        var pageCount=json.page.pageCount;
        var pageNo=json.page.pageNo;
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
        //分类
        var id;
        if(json.categoryInfo.clevel==3){
            id=json.categoryInfo.cid;
        }else if(json.categoryInfo.clevel==4){
            id=json.categoryInfo.parentId;
        }
        $.getJSON("../../category/findCategoryAndChild",{"parentId":id}, function (json) {
            for(var i=0;i<json.length;i++){
                var li="<li><a class='facet' href='categoryList.html?cid="+json[i].cid+"&level="+json[i].clevel+"' facetsid='2hbF'><i></i>"+json[i].name+"</a></li>";
                $("#clearfix").append(li);
            }
        });

    });
}

//按销量查询
function searc1(bs,pageno) {
    var re=GetRequest();
    $.getJSON("../../category/categoryGoodsShow",{"cid":re.cid,"level":re.level,"pageIndex":pageno,"pageSize":pageSize,"bs":bs}, function (json) {
        //显示当前页码和总页面
        var pageCount=json.page.pageCount;
        var pageNo=json.page.pageNo;
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
        //循环显示商品
        xunhuan(json,bs);
    });
}
//按新品查
function searc2(bs,pageno) {
    var re=GetRequest();
    $.getJSON("../../category/categoryGoodsShow",{"cid":re.cid,"level":re.level,"pageIndex":pageno,"pageSize":pageSize,"bs":bs}, function (json) {
        //显示当前页码和总页面
        var pageCount=json.page.pageCount;
        var pageNo=json.page.pageNo;
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
        //循环显示商品
        xunhuan(json,bs);
    });
}
//按价格查
function searc3(bs,pageno) {
    var re=GetRequest();
    $.getJSON("../../category/categoryGoodsShow",{"cid":re.cid,"level":re.level,"pageIndex":pageno,"pageSize":pageSize,"bs":bs}, function (json) {
        //显示当前页码和总页面
        var pageCount=json.page.pageCount;
        var pageNo=json.page.pageNo;
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
        //循环显示商品
        xunhuan(json,bs);
    });
}

//按区间查
function searc4(sort,pageno,price) {
    var re=GetRequest();
    $.getJSON("../../category/categoryGoodsShow",{"cid":re.cid,"level":re.level,"pageIndex":pageno,"pageSize":pageSize,"price":price}, function (json) {
        //显示当前页码和总页面
        var pageCount=json.page.pageCount;
        var pageNo=json.page.pageNo;
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
        //循环显示商品
        xunhuan(json,sort);
    });
}
//查询全部
function searc5(bs,pageno) {
    var re=GetRequest();
    $.getJSON("../../category/categoryGoodsShow",{"cid":re.cid,"level":re.level,"pageIndex":pageno,"pageSize":pageSize}, function (json) {
        //显示当前页码和总页面
        var pageCount=json.page.pageCount;
        var pageNo=json.page.pageNo;
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
        //循环显示商品
        xunhuan(json,bs);
    });
}

//公共方法
function xunhuan(json,bs) {
    $("#product-box").empty();
    var lists=json.page.list;
    if(bs==1){   //判断是否是按销量查询(属性名不一致)
        for(var i=0;i<lists.length;i++){
            var li="<li class='product-item'> <ul class='arbitrage clearfix'></ul> ";
            li+="<div class='item-tab-warp'>";
            li+="<p class='item-pic'><a class='emcodeItem item-link' target='_blank' track='产品列表图片' href='product_details.html?gid="+lists[i].goods_id+"'title='"+lists[i].goods_title+"'>";
            li+="<img src='"+lists[i].goods_main_img+"' alt='"+lists[i].goods_title+"' width='210px' height='210px'></a></p> <div class='item-price-info'> <div class='item-price'>";
            li+="<span class='price asynPrice'>¥"+lists[i].goods_price+"</span></div></div>";
            li+="<p class='item-name'> <a class='emcodeItem item-link' href='product_details.html?gid="+lists[i].id+"' title='"+lists[i].goods_title+"'>"+lists[i].goods_title+"</a></p>";
            li+=" <p class='item-option clearfix' style='margin-left: 53px;'> <span class='add-collection'><i class='icon'></i></span>";
            li+=" <span class='add-cart addTo-cart'><i class='icon'></i></span> </p> </div> </li>";
            $("#product-box").append(li);
        }
    }else{
        for(var i=0;i<lists.length;i++){
            var li="<li class='product-item'> <ul class='arbitrage clearfix'></ul> ";
            li+="<div class='item-tab-warp'>";
            li+="<p class='item-pic'><a class='emcodeItem item-link' target='_blank' track='产品列表图片' href='product_details.html?gid="+lists[i].id+"'title='"+lists[i].title+"'>";
            li+="<img src='"+lists[i].mainImg+"' alt='"+lists[i].title+"' width='210px' height='210px'></a></p> <div class='item-price-info'> <div class='item-price'>";
            li+="<span class='price asynPrice'>¥"+lists[i].price+"</span></div></div>";
            li+="<p class='item-name'> <a class='emcodeItem item-link' href='product_details.html?gid="+lists[i].id+"' title='"+lists[i].title+"'>"+lists[i].title+"</a></p>";
            li+=" <p class='item-option clearfix' style='margin-left: 53px;'> <span class='add-collection'><i class='icon'></i></span>";
            li+=" <span class='add-cart addTo-cart'><i class='icon'></i></span> </p> </div> </li>";
            $("#product-box").append(li);
        }
    }

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
