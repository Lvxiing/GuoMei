$(function () {
    //定义页面显示数量
    var pageSize=2;
    var days =90;  //默认三个月
    var order_no="null";
    var status="null";
    //会员首页跳转过来
    var re=GetRequest();
      //按月份查询
    $("#sel_choos ul li").click(function () {
        var ono=$("#all_order_search").val();
        if(ono==""){
            order_no="null";
        }
        var text=$(this).find("a").text();
        if(text=="近一个月的订单"){
            days=30;
        }else if(text=="近二个月的订单"){
            days=60;
        }
        $("#order").text(text);
        $("#sel_choos ul").hide();
        findOrdersByUserId(1,pageSize,days,status,order_no);

    });

    //按订单号查
    $("#js-search-btn").click(function () {
         order_no=$("#all_order_search").val();
         if(order_no==""){
             order_no="null";
             findOrdersByUserId(1,pageSize,days,status,order_no);
         }else{
             findOrdersByUserId(1,pageSize,days,status,order_no);
         }
    });


    //订单状态的选中
    $("#all-status ul li").click(function () {
        var text=$(this).find("a").text();
        status=$(this).find("a").attr("val");
        var ono=$("#all_order_search").val();
        if(ono==""){
            order_no="null";
        }
        if(status==0){  //查询全部
            status="null";
            findOrdersByUserId(1,pageSize,days,status,order_no);
        }else{
            findOrdersByUserId(1,pageSize,days,status,order_no);
        }
        $("#status").text(text);
        $("#all-status ul").hide();
    });
    //头上待付款与待发货的点击查询事件
    $("#waitPay_lh").click(function () {
        var sta=$(this).attr("tval");
        findOrdersByUserId(1,pageSize,"null",sta,"null");
    });
    $("#waitConfirm_lh").click(function () {
        var sta=$(this).attr("tval");
        findOrdersByUserId(1,pageSize,"null",sta,"null");
    });
    //上下页
    $(".prev").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo>1){
            pageNo--;
        }
        //判断
        if(re.Identification==1) {  //待付款
            findOrdersByUserId(pageNo,pageSize,"null",1,"null");
        }else if(re.Identification==2){
            findOrdersByUserId(pageNo,pageSize,"null",4,"null");
        }else{
            findOrdersByUserId(pageNo,pageSize,days,status,order_no);
        }


    });

    $(".next").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo<pageCount){
            pageNo++;
        }
        if(re.Identification==1) {  //待付款
            findOrdersByUserId(pageNo,pageSize,"null",1,"null");
        }else if(re.Identification==2){
            findOrdersByUserId(pageNo,pageSize,"null",4,"null");
        }else{
            findOrdersByUserId(pageNo,pageSize,days,status,order_no);
        }
    });


     if(re.Identification==1){  //待付款
         $("#waitPay_lh").addClass("active_on");
         findOrdersByUserId(1,pageSize,"null",1,"null");
     }else if(re.Identification==2){  //待收货
         $("#waitConfirm_lh").addClass("active_on");
         findOrdersByUserId(1,pageSize,"null",4,"null");
     }else{
         //判断是否是按条件跳转过来的不是加载全部
         findOrdersByUserId(1,pageSize,days,status,order_no);
     }
    total();
    //取消订单
    $("#cancel").live("click",this,function () {
        //获取订单编号
        var orderId=$(this).attr("orderId");
        //获取订单状态
        var status=$(this).attr("status");
        $.getJSON("../../Orders/deleteOrders",{"orderId":orderId,"status":status},function (json) {
                findOrdersByUserId(1,pageSize,days,"null","null");
        });
    });
});


//获取总页面数
var pageCount=0;
//查询用户订单的待付款待收货总记录数
function total() {
    $.getJSON("../../Orders/findTotal",function (json) {
        $("#num1").text(json[0].num1);
        $("#num2").text(json[0].num2);
    });
    $.getJSON("../../evaluate/evaluateInfo",{"evaluate_state":0,"pageIndex":0,"pageSize":0},function (data) {
        $("#num3").text(data.length);
    });
}

// var timers;
//生成唯一的uuid
function guid() {

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {

        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);

        return v.toString(16);

    });

}

//查询所有订单
function findOrdersByUserId(pageIndex,pageSize,days,status,ono) {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":pageIndex,"pageSize":pageSize,"days":days,"status":status,"ono":ono},function (json) {
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
                userInfo(list[i].user_id,list[i].address_id,list[i].order_id,list[i].order_time,list[i].order_no,list[i].order_status,list[i].order_total,i);

            }
        }
    });
}

//查询用户相关信息
function userInfo(uid,aid,order_id,time,order_no,status,order_total,num) {
    $.ajax({
        type:"get",
        url:"../../myGuoMei/showAddress",
        data:{"userid":uid,"aid":aid},
        dataType:"json",
        success:function (json) {
            var userName=json[0].userName;
            var phone=json[0].phone;
            var provinceAddress=json[0].provinceAddress.provinceName+json[0].provinceAddress.districtName+json[0].provinceAddress.streetName+json[0].address;
            findOrdersDetail(order_id,time,order_no,status,order_total,num,userName,phone,provinceAddress);
        }
    });
}

//根据订单号查询订单详情信息
function findOrdersDetail(order_id,time,order_no,status,order_total,num,userName,phone,provinceAddress) {
    $.getJSON("../../Orders/findOrdersDetail",{"oid":order_id},function (data) {
        var order_nos=order_no.substring(0,12);
               //转换时间格式
        var dateee = new Date(time).toJSON();
        var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');

        //头部信息(标题信息)
        var tr="";
        tr=" <table class='order-list-cont'><tbody><tr class='item-info'> <td style='width:40%;padding-left:10px;' class='orderTd1_11926392274'>";
        tr+=" <input type='checkbox' class='orderNumcheck' disabled='' > <span class='ico-qiang ' ordertype='2'title='普通订单'>普</span> ";
        tr+="<span class='order-time'>"+times+"</span> ";
        tr+="<span class='order-number'>订单编号：<a target='_blank' title='"+order_no+"' href='gm-orederList.html?oid="+data[0].oid+"&ono="+guid()+order_no+"'>"+order_nos+"..</a></span></td>";
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
                statu="商品待发货";
                break;
            case 3:
                statu="商品发货成功";
                break;
            case 4:
                statu="商品待收货";
                break;
            case 5:
                statu="已完成";
                break;
            case 6:
                statu="已退货";
                break;
            case 7:
                statu="门店自提";
                break;
            default:
                statu="已取消";
                break;
        }

        tr+="<td style='width:10%;text-align:center;'>";
        if(status==7){
            tr+="<a class='status' href='amap.html' target='_blank'>"+statu+"</a>";
        }else{
            tr+="<p class='status'>"+statu+"</p>";
        }
        tr+="<p class='car-logistics'></p> <div class='pop logistics' style='position:absolute'></div>";
        tr+="<p class='pd-top-10'><a class='order-list-btn02 v-o' target='_blank' href='gm-orederList.html?oid="+order_id+"' title='查看订单' style='color:#006699;'>查看订单</a></p></td>";
        //右侧信息(用户)
        tr+="<td style='width:10%;color:#888;padding-left:15px;' class='name_11926392274' id='num"+num+"' num='"+num+"'>";
        tr+="<div class='customer-receiver clearfix' orderid='11926392274' shipid=''><i class='order-list-consignee'></i><span class='receive-name'>"+userName+"</span>";
        tr+="<div class='pop consignee' style='left: 736px; z-index: 13; display: none;' id='info-"+num+"'><h4>收货人信息</h4>";
        tr+="<p class='grayfont'>"+userName+"<span class='mobile'>"+phone+"</span></p><h4>配送地址</h4>";
        tr+="<p class='grayfont'>"+provinceAddress+"</p></div> </div> </td>";
        //右侧信息
        //判断是否为未付款订单
        tr+="<td style='width:10%;'>";
        tr+=" <div class='button_11926392274' style='padding-bottom:10px;' ordertype='2' orderid='11926392274'>";
        tr+="<a class='modify v-o' style='display:block;' target='_blank' href='index.html' title='再次购买' buttontype=''>再次购买</a> ";
        tr+="<a class='modify v-o' style='display:block;' title='取消订单' buttontype='1' id='cancel' orderId='"+order_id+"' status='"+status+"'>取消订单</a></div></td>";


        //
        // if(status==1){
        //      tr+="<td style='width:10%;'> <div class='cut-down' style='width:100px;'>";
        //      tr+="<span class='time green-time'  time='"+times+"' id='countdown' name='greentime' style='margin-right:0; margin-left:11px; font-size:12px;vertical-align:middle;'></span>  ";
        //      tr+="<a href='javascript:;' class='time-ico g-time-ico' expiretime='2019-09-25 14:18:58'></a> </div>";
        //      tr+="<div> <a class='pay-btn' href=''title='付款'>付款</a></div>";
        //      tr+="<div class='button_11966078327' style='padding-bottom:10px;'><a class=modify v-o style=display:block;'title='取消订单' buttontype='1'>取消订单</a><a class='modify v-o' style='display:block;' target='_blank' href='' title='修改订单' buttontype='1'>修改订单</a>";
        //       tr+="<a class='modify v-o' style='display:block;' target='_blank' href='' title='再次购买' buttontype='1'>再次购买</a></div></td>";
        // }else{
        //     tr+="<td style='width:10%;'>";
        //     tr+=" <div class='button_11926392274' style='padding-bottom:10px;' ordertype='2' orderid='11926392274'>";
        //     tr+="<a class='modify v-o' style='display:block;' target='_blank' href='car.html' title='再次购买' buttontype=''>再次购买</a> ";
        //     tr+="<a class='modify v-o' style='display:block;' title='取消订单' buttontype='1'>取消订单</a></div></td>";
        //
        // }
        tr+="</tr></tbody></table>";
        $(".orderContent").append(tr);
    });
}



//无数据显示
function noData() {
    var data="<table style='width:100%;'><tbody><tr><td class='no-order' colspan='6'> <div class='no-order-til clearfix'><i></i> ";
          data+="<span style='float:left;'> <p class='no-order-words'>您还没有订单哦~<br>给自己定个小目标，先下一单！</p>";
           data+="<p class='no-order-btn'><a style='margin-left:-180px;' href='index.html' target='_blank'>去首页逛逛</a></p></td></tr></tbody></table>";
           $(".orderContent").append(data);
          $(".prev").addClass("disable");
           $(".next").addClass("disable");
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



