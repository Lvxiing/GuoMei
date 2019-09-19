$(function () {
    //定义页面显示数量
    var pageSize=1;
    //查询所有订单
    findOrdersByUserId(1,pageSize);
     //标识是否是按月份分页(默认0不按查询全部)
     var monthIdentifier=0;
      //按月份查询
      var days =90;  //默认三个月
    $("#sel_choos ul li").click(function () {
        monthIdentifier=1;
        var text=$(this).find("a").text();
        if(text=="近一个月的订单"){
            days=30;
        }else if(text=="近二个月的订单"){
            days=60;
        }
        $("#order").text(text);
        $("#sel_choos ul").hide();
        findOrders2(1,pageSize,days);
    });

    //按订单号查
    $("#js-search-btn").click(function () {
        var order_no=$("#all_order_search").val();
        findOrders1(1,pageSize,order_no);
    });


    //订单状态的选中
    var status=0;
    $("#all-status ul li").click(function () {
        var text=$(this).find("a").text();
        status=$(this).find("a").attr("val");
        if(status==0){  //查询全部
            findOrdersByUserId(1,pageSize);
        }else{
            findOrders3(1,pageSize,parseInt(status));
        }
        $("#status").text(text);
        $("#all-status ul").hide();
    });
    //头上待付款与待发货的点击查询事件
    $("#waitPay_lh").click(function () {
        status=$(this).attr("tval");
        findOrders3(1,pageSize,parseInt(status));
    });
    $("#waitConfirm_lh").click(function () {
        status=$(this).attr("tval");
        findOrders3(1,pageSize,parseInt(status));
    });
    //上下页
    $(".prev").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo>1){
            pageNo--;
        }
        if(monthIdentifier==0){   //查询全部
            findOrdersByUserId(pageNo,pageSize);
        }else{   //按月份查询
            findOrders2(pageNo,pageSize,days);
        }

        if(status==0){   //查询全部
            findOrdersByUserId(pageNo,pageSize);
        }else{  //按状态查询
            findOrders2(pageNo,pageSize,status);
        }
    });

    $(".next").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo<pageCount){
            pageNo++;
        }
        if(monthIdentifier==0){   //查询全部
            findOrdersByUserId(pageNo,pageSize);
        }else{   //按月份查询
            findOrders2(pageNo,pageSize,days);
        }
        if(status==0){   //查询全部
            findOrdersByUserId(pageNo,pageSize);
        }else{   //按状态查询
            findOrders2(pageNo,pageSize,status);
        }
    });



});
var pageCount=0;
//查询所有订单
function findOrdersByUserId(pageIndex,pageSize) {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":pageIndex,"pageSize":pageSize},function (json) {
        $(".orderContent").empty();
        if(json.pageNo==1){
            $(".prev").addClass("disable");
        }else{
            $(".prev").removeClass("disable");
        }
        if(json.pageNo==json.pageCount){
            $(".next").addClass("disable");
        }else{
            $(".next").removeClass("disable");
        }
        if(json.pageCount==1){
            $(".prev").addClass("disable");
            $(".next").addClass("disable");
        }
        pageCount=json.pageCount;
        $(".prev").attr("pageNo",json.pageNo);
        $(".next").attr("pageNo",json.pageNo);
        var list=json.list;
        if(list.length==0){
            noData();
        }else{
              var sta1=0;
             var sta2=0;
            var sta3=0;
            for(var i=0;i<list.length;i++){
                if(list[i].order_status==1){  //待付款
                    sta1++;
                }else if(list[i].order_status==4){  //待收货
                    sta2++;
                }else if(list[i].order_status==5){   //已完成
                    sta3++;
                }
                findOrdersDetail(list[i].order_id,list[i].order_time,list[i].order_no,list[i].order_status,list[i].order_total);
            }
            $("#num1").text(sta1);
            $("#num2").text(sta2);
            $("#num3").text(sta3);
        }
    });
}

//根据订单号查询订单详情信息
function findOrdersDetail(order_id,time,order_no,status,order_total) {
    $.getJSON("../../Orders/findOrdersDetail",{"oid":order_id},function (data) {
        //转换时间格式
        var dateee = new Date(time).toJSON();
        var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        //头部信息
        var tr="";
        tr=" <table class='order-list-cont'><tbody><tr class='item-info'> <td style='width:40%;padding-left:10px;' class='orderTd1_11926392274'>";
        tr+=" <input type='checkbox' class='orderNumcheck' disabled='' > <span class='ico-qiang ' ordertype='2'title='普通订单'>普</span> ";
        tr+="<span class='order-time'>"+times+"</span> ";
        tr+="<span class='order-number'>订单编号：<a target='_blank' href='gm-orederList.html'>"+order_no+"</a></span></td>";
        tr+="<td style='width:20%; text-align:right;padding-right:35px;'></td>";
        tr+="<td style='width:10%;'></td> <td style='width:10%;'></td><td style='width:10%;'></td>";
        tr+="<td style='width:10%;padding-left:15px;' class='orderIcon_11926392274'>";
        tr+="<div class='order-del-gift'><span class='order-tbody-giftBox dn' >礼物盒子</span> <span class='order-delete-btn dn' orderid='11926392274'>删除</span></div>";
        tr+="</td></tr> </tbody>";
        //左侧信息
        tr+="<tbody class='list-row' ><tr><td colspan='2' style='width:60%;border-right:1px solid #e6e6e6;'>";
        tr+="<div class='no-isSeparate' style='width:100%;' id='orderId_11957667233'>";
        tr+="<table style='width:100%;'> ";
        var trr="<tbody>";
        for(var j=0;j<data.length;j++){
            trr+="<tr class='tr-listProInfo ' orderid='11957667233'>";
            trr+="<td class='pd-lft-10 pd-bottom-10'style='width:40%; border-right:none;'><div class='marg-top-10 order-list-proImg' pid='A0006561232'sid='pop8012773624'>";
            trr+="<a target='_blank' href='product_details.html?gid="+data[j].gid+"'itemtype='0'><img src='"+data[j].img+"'style='width:50px;height:50px;'></a></div>";
            trr+="<div class='pd-lft-10 order-list-proName'><a class='order-list-proName-font' target='_blank 'href='product_details.html?gid="+data[j].gid+"'style='display:block;'>"+data[j].title+"</a>";
            trr+="<p class='big-same-collocation marg-top-10'> <i class='collocation-icon'></i><span onclick=\"location.href='categoryList.html?cid="+data[j].category_id+"&level=4'\">找相似</span></p></div></td>";
            trr+="<td class='pd-lft-10' style='border-right:none;width:20%;'> <div class='order-list-num'>x<span>"+data[j].num+"</span></div> </td></tr>";
        }

        trr+="</tbody>";
        tr+=trr;
        tr+="</table></div></td>";
        //右侧信息(支付方式)
        tr+="<td style='width:10%;text-align:center;padding:0 10px;'><p class='payAmount' style='margin-top:10px;'>";
        tr+="<em class='dollar-sign'>￥</em><span style='font-family:Arial;'>"+order_total+"</span></p>";
        tr+=" <p class='pay-method' style='margin:10px 0;'>在线支付</p></td>";
        //右侧信息(状态)

        var  statu;
        switch (status) {
            case 1:
                statu="商品未付款";
                break;
            case 2:
                statu="商品出库中";
                break;
            case 3:
                statu="商品出库成功";
                break;
            case 4:
                statu="确认收货";
                break;
            case 5:
                statu="已完成";
                break;
            case 6:
                statu="已退货";
                break;
            default:
                statu="已取消";
                break;
        }
        tr+="<td style='width:10%;text-align:center;'><p class='status'>"+statu+"</p>";
        tr+="<p class='car-logistics'></p> <div class='pop logistics' style='position:absolute'></div>";
        tr+="<p class='pd-top-10'><a class='order-list-btn02 v-o' target='_blank' href='gm-orederList.html' title='查看订单' style='color:#006699;'>查看订单</a></p></td>";
        //右侧信息(用户)
        tr+="<td style='width:10%;color:#888;padding-left:15px;' class='name_11926392274'>";
        tr+="<div class='customer-receiver clearfix' orderid='11926392274' shipid=''><i class='order-list-consignee'></i><span class='receive-name'>吕星</span>";
        tr+="<div class='pop consignee' style='left: 736px; top: 490px; z-index: 13; display: none;'><h4>收货人信息</h4>";
        tr+="<p class='grayfont'>吕星<span class='mobile'>176****0790</span></p><h4>配送地址</h4>";
        tr+="<p class='grayfont'>湖南省长沙市开福区望麓园街道蔡锷北路司马里 38号</p></div> </div> </td>";
        //右侧信息
        tr+="<td style='width:10%;'>";
        tr+=" <div class='button_11926392274' style='padding-bottom:10px;' ordertype='2' orderid='11926392274'>";
        tr+="<a class='modify v-o' style='display:block;' target='_blank' href='car.html' title='再次购买' buttontype=''>再次购买</a> ";
        tr+="<a class='modify v-o' style='display:block;' title='取消订单' buttontype='1'>取消订单</a></div></td>";

        tr+="</tr></tbody></table>";
        $(".orderContent").append(tr);
    });
}

//按订单号查询
function findOrders1(pageIndex,pageSize,ono) {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":pageIndex,"pageSize":pageSize,"ono":ono},function (json) {
        $(".orderContent").empty();
        var list=json.list;
        if(list.length==0){
            noData();
        }else{
            for(var i=0;i<list.length;i++){
                findOrdersDetail(list[i].order_id,list[i].order_time,list[i].order_no,list[i].order_status,list[i].order_total);
            }
        }
    });
}
//按月份查
function findOrders2(pageIndex,pageSize,days) {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":pageIndex,"pageSize":pageSize,"days":days},function (json) {
        $(".orderContent").empty();
        if(json.pageNo==1){
            $(".prev").addClass("disable");
        }else{
            $(".prev").removeClass("disable");
        }
        if(json.pageNo==json.pageCount){
            $(".next").addClass("disable");
        }else{
            $(".next").removeClass("disable");
        }
        if(json.pageCount==1){
            $(".prev").addClass("disable");
            $(".next").addClass("disable");
        }
        pageCount=json.pageCount;
        $(".prev").attr("pageNo",json.pageNo);
        $(".next").attr("pageNo",json.pageNo);
        var list=json.list;
        if(list.length==0){
            noData();
        }else{
            for(var i=0;i<list.length;i++){
                findOrdersDetail(list[i].order_id,list[i].order_time,list[i].order_no,list[i].order_status,list[i].order_total);
            }
        }
    });
}

//按状态查
function findOrders3(pageIndex,pageSize,status) {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":pageIndex,"pageSize":pageSize,"status":status},function (json) {
        $(".orderContent").empty();
        if(json.pageNo==1){
            $(".prev").addClass("disable");
        }else{
            $(".prev").removeClass("disable");
        }
        if(json.pageNo==json.pageCount){
            $(".next").addClass("disable");
        }else{
            $(".next").removeClass("disable");
        }
        if(json.pageCount==1){
            $(".prev").addClass("disable");
            $(".next").addClass("disable");
        }
        pageCount=json.pageCount;
        $(".prev").attr("pageNo",json.pageNo);
        $(".next").attr("pageNo",json.pageNo);
        var list=json.list;
        if(list.length==0){
            noData();
        }else{
            for(var i=0;i<list.length;i++){
                findOrdersDetail(list[i].order_id,list[i].order_time,list[i].order_no,list[i].order_status,list[i].order_total);
            }
        }

    });
}

//无数据显示
function noData() {
    var data="<table style='width:100%;'><tbody><tr><td class='no-order' colspan='6'> <div class='no-order-til clearfix'><i></i> ";
          data+="<span style='float:left;'> <p class='no-order-words'>您还没有订单哦~<br>给自己定个小目标，先下一单！</p>";
           data+="<p class='no-order-btn'><a style='margin-left:-180px;' href='index.html' target='_blank'>去首页逛逛</a></p></td></tr></tbody></table>";
           $(".orderContent").append(data);
}