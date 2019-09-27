$(function () {
    var pageSize = 1;
    var status=5;
    findOrdersByUserId(1, pageSize, "null", status, "null");
    var order_no="null";
    var days =90;  //默认三个月
    //按订单号查询
    $("#searchBtn").click(function () {
        order_no=$("#searchText").val();
        if(order_no==""){
            order_no="null";
            findOrdersByUserId(1,pageSize,days,status,order_no);
        }else{
            findOrdersByUserId(1,pageSize,days,status,order_no);
        }
    });

    //按下单时间查
    $(".applyTime").bind("change",function () {
        var ono=$("#searchText").val();
       var month= $(this).val();
        days=month;
        if(ono==""){
            order_no="null";
        }
        findOrdersByUserId(1,pageSize,days,status,order_no);
    });

   //上下页
    $(".prev").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo>1){
            pageNo--;
        }
        findOrdersByUserId(pageNo,pageSize,days,status,order_no);
    });
    $(".next").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo<pageCount){
            pageNo++;
        }
        findOrdersByUserId(pageNo,pageSize,days,status,order_no);
    });
});

//查询所有订单
function findOrdersByUserId(pageIndex,pageSize,days,status,ono) {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":pageIndex,"pageSize":pageSize,"days":days,"status":status,"ono":ono},function (json) {
        $("#tables table").empty();
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
        tr=" <table  style='width: 164%;margin-top: 5px'><tbody><tr class='item-info'> <td style='width:40%;padding-left:10px;' class='orderTd1_11926392274'>";
        tr+=" <input type='checkbox' class='orderNumcheck' disabled='' > <span class='ico-qiang ' ordertype='2'title='普通订单'>普</span> ";
        tr+="<span class='order-time'>"+times+"</span> ";
        tr+="<span class='order-number'>订单编号：<a target='_blank' title='"+order_no+"' href='gm-orederList.html?oid="+data[0].oid+"&ono="+guid()+order_no+"'>"+order_nos+"..</a></span></td>";
        tr+="<td style='width:20%; text-align:right;padding-right:35px;'></td>";
        tr+="<td style='width:10%;'></td> <td style='width:10%;'></td>";
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
            trr+="<p class='big-same-collocation marg-top-10'> <i class='collocation-icon'></i><span   onclick=\"location.href='myRefundDetail.html?&ono="+guid()+order_no+"&gid="+data[j].gid+"'\">申请</span></p></div></td>";
            trr+="<td class='pd-lft-10' style='border-right:none;width:20%;'> <div class='order-list-num'>x<span>"+data[j].num+"</span></div> </td></tr>";
        }
        trr+="</tbody>";
        tr+=trr;
        tr+="</table></div></td>";
        //右侧信息(支付方式)
        tr+="<td style='width:10%;text-align:center;padding:0 10px;border-bottom: 1px solid #e6e6e6;'><p class='payAmount' style='margin-top:10px;'>";
        tr+="<em class='dollar-sign'>￥</em><span style='font-family:Arial;'>"+order_total+"</span></p>";
        tr+=" <p class='pay-method' style='margin:10px 0;'>在线支付</p></td>";
        tr+="<td style='width:10%;text-align:center;border-bottom: 1px solid #e6e6e6;'><p class='status'>已完成</p>";
        tr+="<p class='car-logistics'></p> <div class='pop logistics' style='position:absolute'></div>";
        tr+="</td>";
        //右侧信息(用户)
        tr+="<td style='width:10%;color:#888;padding-left:15px;border-bottom: 1px solid #e6e6e6;' class='name_11926392274' num='"+num+"'>";
        tr+="<div class='customer-receiver clearfix' orderid='11926392274' shipid=''><i class='order-list-consignee'></i><span class='receive-name'>"+userName+"</span>";
        tr+="<div class='pop consignee' style='left: 736px; z-index: 13; display: none;' id='info-"+num+"'><h4>收货人信息</h4>";
        tr+="<p class='grayfont'>"+userName+"<span class='mobile'>"+phone+"</span></p><h4>配送地址</h4>";
        tr+="<p class='grayfont'>"+provinceAddress+"</p></div> </div> </td>";
        tr+="</tr></tbody></table>";
        $("#tables").append(tr);
    });
}


//无数据显示
function noData() {
    var tbody = "<tbody > <tr> <td colspan = '10'> <div class= 'noResult'><div class= 'noResultText'> <span> 暂无退 / 换货记录 </span></div >";
        tbody+="<div class= 'noResultContent' > <div style='width: 600px;height: 295px;background: url(../image/returnGoodProcess.jpg) no-repeat; '></div></div></div></td></tr></tbody>";
    $("#tables").append(tbody);
    $(".prev").hide();
    $(".next").hide();
}


//生成唯一的uuid
function guid() {

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {

        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);

        return v.toString(16);

    });

}