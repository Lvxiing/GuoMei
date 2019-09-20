$(function () {
    display();
    info();
    userInfo();
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

//显示基本信息
function display () {
     var ono=GetRequest().ono;
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":1,"pageSize":3,"order_no":ono},function(json){
        var list=json.list;
        //显示金额
        $("#price").html("<em>¥</em>"+list[0].order_total+"");
        switch (parseInt(list[0].order_status)) {
            case 1:
                $("#status").text("商品未付款");
                $(".rpt").text("您的商品未付款，请您确认付款。");
                $(".steps li:eq(0)").addClass("cur").find("span").addClass("going");
                break;
            case 2:
                $("#status").text("商品出库中");
                $(".rpt").text("您的商品出库中,请耐心等待。");
                $(".steps li:eq(0)").addClass("cur").find("span").addClass("ready");
                $(".steps li:eq(1)").addClass("cur").find("span").addClass("going");
                break;
            case 3:
                $("#status").text("商品出库成功");
                $(".rpt").text("您的商品出库成功,请耐心等待。");
                $(".steps li:eq(0)").addClass("cur").find("span").addClass("ready");
                $(".steps li:eq(1)").addClass("cur").find("span").addClass("ready");
                $(".steps li:eq(2)").addClass("cur");
                break;
            case 4:
                $("#status").text("商品待确认");
                $(".rpt").text("您的商品已送达,请确认收货。");
                $(".t").show();
                $(".steps li:eq(0)").addClass("cur").find("span").addClass("ready");
                $(".steps li:eq(1)").addClass("cur").find("span").addClass("ready");
                $(".steps li:eq(2)").addClass("cur").find("span").addClass("going");
                break;
            case 5:
                $("#status").text("订单已完成");
                $(".rpt").text("您的订单已完成,可申请退货退款。");
                $(".steps li:eq(0)").addClass("cur").find("span").addClass("ready");
                $(".steps li:eq(1)").addClass("cur").find("span").addClass("ready");
                $(".steps li:eq(2)").addClass("cur").find("span").addClass("ready");
                break;
            case 6:
                $("#status").text("订单已退货");
                $(".rpt").text("您的订单已退货,欢迎下次购买。");
                break;
            default:
                statu="已取消";
                break;
        }
        //显示订单编号
        $("#orderId").text(list[0].order_no);
        //转换时间格式
        var dateee = new Date(list[0].pay_date).toJSON();
        var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        var dateee = new Date(list[0].order_time).toJSON();
        var order_time= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        //显示右侧上部分信息
        var li="<li class='pt10'> 在线支付</li>";
        li+="<li>支付时间："+times+"</li><li>订单创建时间："+order_time+"</li><li>订单总额：<em>¥</em> "+list[0].order_total+"</li>";
        li+="<li class='bd-top'><strong class='bold'>应付金额：</strong> <span class='red-bold'><em>¥</em>"+list[0].order_total+"</span></li>";
        $(".cont-r-body ul").append(li);

    });

}


//显示商品清单
function info() {
    var re=GetRequest();
    $.getJSON("../../Orders/findOrdersDetail",{"oid":re.oid},function (json) {
         for(var i=0;i<json.length;i++){
             var li="<li class='list clearfix gome-list'><dl class='nProduct-tj' pid='A0006508839'>";
                 li+="<dd class='tjFirst clearfix'><div class='pCol-img'>";
                 li+="<a title='"+json[i].title+"' href='product_details.html?gid="+json[i].gid+"'> <img src='"+json[i].img+"' alt='"+json[i].title+"' > </a> </div>";
                 li+=" <div class='pCol-name'><p><a class='nBlue' title='"+json[i].title+"' href='product_details.html?gid="+json[i].gid+"'>"+json[i].title+"</a>";
                 li+=" </p><div style='font-family:宋体;font-size:12px;padding-top:13px; margin-top:-10px;'>";
                 li+="<div class='deliveryFlag clearfix'><span class='shopingIcon shopingIcon1'></span> ";
                 li+="<span class='fl' style='color:#a5a5a5; margin-left:10px;'>普通快递</span>";
                 li+="<span class='fl' style='color:#a5a5a5;'></span></div><div class='phoneNumber clearfix'></div></div></div>";
                 li+="<div class='pCol-price vAlignC'><em>¥</em>"+json[i].goods_price+"</div><div class='pCol-nums vAlignC'>"+json[i].num+"</div>";
                 li+="<div class='pCol-total vAlignC'><em>¥</em>"+json[i].goods_price*json[i].num+"</div>";
                 li+="<div class='pCol-opreating vAlignC' style='float:left;'><a class='saleAgain' style='margin-top:18px;' href='product_details.html?gid="+json[i].gid+"'>再次购买</a></div> </dd> </dl> </li>";
                $(".nProductLists").append(li);
         }
    });
}


//显示右侧下部分用户收货信息
function userInfo() {
    var re=GetRequest();
    $.getJSON("../../Orders/findAddressByOrder",{"oid":re.oid},function (json) {
         $("#userName").text(json.address_name);
         var phone1=json.user_phone.substring(0,3);
         var phone2=json.user_phone.substring(json.user_phone.length-4,json.user_phone.length);
         $("#phone").text(phone1+"****"+phone2);
         $("#email").text(json.user_email);
         $("#address").text(json.address_detail);
    });
}