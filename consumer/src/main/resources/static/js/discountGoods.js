$(function () {
    var pageSize=8;
    //拿到需要的值和显示优惠卷
    value();
    //页面加载事件
    searchGoods(1,pageSize);
    //按综合,销量,新品查询
    var sort=0;
    $("#filter-order-box li").click(function () {
        sort=$(this).attr("data-sort");
        $(this).addClass("cur").siblings().removeClass("cur");
        if(sort==0){  //查询全部
            searchGoods(1,pageSize);
        }else if(sort==2){  //按新品
            searc2(sort,1,pageSize);
        }else if(sort==1){   //按销量
            searc1(sort,1,pageSize);
        }
    });
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
    //价格点击
    $("#sort-price").toggle(
        function () {
            $(this).addClass("price-up").removeClass("price-down");
            sort=4;   //高价查询
            searc3(sort,1,pageSize);
        },
        function () {
            $(this).addClass("price-down").removeClass("price-up");
            sort=3;   //低价查询
            searc3(sort,1,pageSize);
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
            searc4(sort,1,price,pageSize);

        }else if(lowPrice!=""){
            price=lowPrice;
            searc4(sort,1,price,pageSize);
        }
        $("#fc-lowPrice").val("");
        $("#fc-highPrice").val("");
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

    //下角上下分页
    $(".prev").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo>1){
            pageNo--;
            if(sort==0){  //查询全部
                searchGoods(pageNo,pageSize);
            }else if(sort==1){//按新品
                searc2(sort,pageNo,pageSize);
            }else if(sort==2||sort==3){  //按价格
                searc3(sort,pageNo,pageSize);
            }else if(sort==4){   //按销量
                searc1(sort,pageNo,pageSize);
            }
            else{//按区间查
                searc4(pageNo,price,pageSize);
            }
        }

    });

    $(".next").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo<pageCount){
            pageNo++;
            if(sort==0){  //查询全部
                searchGoods(pageNo,pageSize);
            }else if(sort==1){//按新品
                searc2(sort,pageNo,pageSize);
            }else if(sort==2||sort==3){  //按价格
                searc3(sort,pageNo,pageSize);
            }else if(sort==4){   //按销量
                searc1(sort,pageNo,pageSize);
            }
            else{//按区间查
                searc4(pageNo,price,pageSize);
            }
        }
    });
    //到几页去
    $("#sure").click(function () {
        var pageNo=$("#pNum").val();
        if(pageNo>0){
            if(sort==0){  //查询全部
                searchGoods(pageNo,pageSize);
            }else if(sort==1){//按新品
                searc2(sort,pageNo,pageSize);
            }else if(sort==2||sort==3){  //按价格
                searc3(sort,pageNo,pageSize);
            }else if(sort==4){   //按销量
                searc1(sort,pageNo,pageSize);
            }
            else{//按区间查
                searc4(pageNo,price,pageSize);
            }
        }
    });

});

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
//拿到值
var cid;
var level;
function value() {
    var re=GetRequest();
    $.ajax({
        url:"../../coupon/findCouponQuanInfo",
        type:"get",
        async:false,    //改为同步请求赋值于群居变量
        data:{"cid":re.cid},
        success:function (json) {
             cid=json.category_id;
             level=json.category_level;
            var dateee = new Date(json.start_time).toJSON();
            var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
            var dateee2 = new Date(json.end_time).toJSON();
            var times2= new Date(+new Date(dateee2) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
             var div="<div  id='blueTicket'><div class='use_blue_ticket' id='blue_tickets'><p class='title'>"+json.coupon_name+"</p>";
                 div+="<p class='price'><b class='tip'>¥</b> <i class='priceNo'>"+json.coupon_money+"</i><b class='pricelast'>.00</b></p>";
                div+=" <p class='useterm'><span class='limitspan'>线上专享</span>满"+json.full_money+"可用</p>";
                div+="<p class='time'><span>"+times.substring(0,10)+"</span> - <span>"+times2.substring(0,10)+"</span></p></div> </div>";
                $(".yingxiaoquan").append(div);


        }
    });
}


//显示
function searchGoods(pageIndex,pageSize) {
    $.getJSON("../../category/categoryGoodsShow",{"norank":"yes","pageIndex":pageIndex,"pageSize":pageSize,"cid":cid,"level":level}, function (json) {
        $("#searchTotalNumber").text(json.page.totalCount);
        xunhuan(6,json);
    });
}


//按销量查询(暂时保留)
function searc1(bs,pageno,pageSize) {
    $.getJSON("../../category/categoryGoodsShow",{"norank":"yes","pageIndex":pageno,"pageSize":pageSize,"cid":cid,"level":level,"bs":bs}, function (json) {
        $("#searchTotalNumber").text(json.page.totalCount);
        xunhuan(bs,json);
    });
}

//按新品查
function searc2(bs,pageno,pageSize) {
    $.getJSON("../../category/categoryGoodsShow",{"norank":"yes","pageIndex":pageno,"pageSize":pageSize,"cid":cid,"level":level,"bs":bs}, function (json) {
        $("#searchTotalNumber").text(json.page.totalCount);
        xunhuan(bs,json);
    });
}
//按价格查
function searc3(bs,pageno,pageSize) {
    $.getJSON("../../category/categoryGoodsShow",{"norank":"yes","pageIndex":pageno,"pageSize":pageSize,"cid":cid,"level":level,"bs":bs}, function (json) {
        $("#searchTotalNumber").text(json.page.totalCount);
        xunhuan(bs,json);
    });
}

//按区间查
function searc4(bs,pageno,price,pageSize) {
    $.getJSON("../../category/categoryGoodsShow",{"norank":"yes","pageIndex":pageno,"pageSize":pageSize,"cid":cid,"level":level,"price":price}, function (json) {
        $("#searchTotalNumber").text(json.page.totalCount);
        xunhuan(bs,json);
    });
}

var pageCount=0;
//公共方法(循环生产li)
function xunhuan(bs,json) {
    $("#product-box").empty();
    var lists=json.page.list;
    if(bs==1){   //判断是否是按销量查询(属性名不一致)
        for(var i=0;i<lists.length;i++){
            var li="<li class='product-item' already='true'>  <input class='productInfo' type='hidden'> <ul class='arbitrage clearfix'></ul>";
            li+="<div class='item-tab-warp'><p class='item-pic'>";
            li+="<span name='goodsId' style='display: none;'>"+lists[i].goods_id+"</span><a class='emcodeItem item-link' rel='nofollow'  href='product_details.html?gid="+lists[i].goods_id+"' track='产品列表图片' target='_blank' title='"+lists[i].goods_title+"'>";
            li+="<img src='"+lists[i].goods_main_img+"'alt='"+lists[i].goods_title+"' width='210px' height='210px'></a></p>";
            li+=" <p class='item-price'><span class='price'>￥<span name='price'>"+lists[i].goods_price+"</span></span></p>";
            li+="<p class='item-name'> <a rel='nofollow' class='emcodeItem item-link' track='产品列表名称'href='product_details.html?gid="+lists[i].goods_id+"' target='_blank'title='"+lists[i].goods_title+"'>"+lists[i].goods_title+"</a></p>";
            li+="<p class='item-option clearfix'>";
            li+="</p>";
            li+="<p class='item-shop'></p></div> </li>";
            $("#product-box").append(li);
        }
    }else{
        for(var i=0;i<lists.length;i++){
            var li="<li class='product-item' already='true'>  <input class='productInfo' type='hidden'> <ul class='arbitrage clearfix'></ul>";
            li+="<div class='item-tab-warp'><p class='item-pic'>";
            li+="<span name='goodsId' style='display: none;'>"+lists[i].id+"</span><a class='emcodeItem item-link' rel='nofollow'  href='product_details.html?gid="+lists[i].id+"' track='产品列表图片' target='_blank' title='"+lists[i].title+"'>";
            li+="<img src='"+lists[i].mainImg+"'alt='"+lists[i].title+"' width='210px' height='210px'></a></p>";
            li+=" <p class='item-price'><span class='price'>￥<span name='price'>"+lists[i].price+"</span></span></p>";
            li+="<p class='item-name'> <a rel='nofollow' class='emcodeItem item-link' track='产品列表名称'href='product_details.html?gid="+lists[i].id+"' target='_blank'title='"+lists[i].title+"'>"+lists[i].title+"</a></p>";
            li+="<p class='item-option clearfix'>";
            li+="</p>";
            li+="<p class='item-shop'></p></div> </li>";
            $("#product-box").append(li);
        }
    }
    //显示当前页码和总页面
     pageCount=json.page.pageCount;
    var pageNo=json.page.pageNo;
    $("#min-pager-number").text(pageNo+"/"+pageCount);
    $(".prev").attr("pageNo",pageNo);
    $(".next").attr("pageNo",pageNo);
    $("#pNum").val(pageNo);
    if(pageCount==pageNo){
        $("#mp-next").addClass("mp-disable");
        $("#mp-prev").removeClass("mp-disable");
        $(".next").addClass("disable");
        $(".prev").removeClass("disable");
    }
    if(pageNo==1){
        $("#mp-next").removeClass("mp-disable");
        $("#mp-prev").addClass("mp-disable");
        $(".prev").addClass("disable");
        $(".next").removeClass("disable");
    }
    if(pageCount==1){
        $("#mp-next").addClass("mp-disable");
        $("#mp-prev").addClass("mp-disable");
        $(".prev").addClass("disable");
        $(".next").addClass("disable");
    }



}