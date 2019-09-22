$(function () {
    //查询用户订单的待付款待收货总记录数
    total();
    //查询近三个月的订单
    findOrdersByUserId();
});

//查询用户订单的待付款待收货总记录数
function total() {
    $.getJSON("../../Orders/findTotal",function (json) {
        $("#orders li").eq(0).find("span").text(json[0].num1);
        $("#orders li").eq(1).find("span").text(json[0].num2);
    });
    $.getJSON("../../evaluate/evaluateInfo",{"evaluate_state":0,"pageIndex":0,"pageSize":0},function (data) {
        $("#orders li").eq(2).find("span").text(data.length);
    });
}

//查询近三个月的订单
function findOrdersByUserId() {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":1,"pageSize":100,"days":90},function (json) {
        var list=json.list;
        if(list.length==0){
            noData();
        }else{
            for(var i=0;i<list.length;i++){
                findOrdersDetail(list[i].order_no,list[i].order_id,);
            }
        }
    });
}
//生成唯一的uuid
function guid() {

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {

        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);

        return v.toString(16);

    });

}

//根据订单号查询订单详情信息
function findOrdersDetail(order_no,order_id) {
    $.getJSON("../../Orders/findOrdersDetail",{"oid":order_id},function (data) {
        for(var i=0;i<1;i++){
            var dl="<dl class='order-list'> <dt> <a href='product_details.html?gid="+data[i].gid+"' target='_blank'>  <img src='"+data[i].img+"' alt='"+data[i].title+"' width='80' height='80'></a> ";
            dl+="</dt> <dd> <ul> <li>订单编号："+order_no+"</li> <li>共"+data[i].num+"件商品</li><li class='order-money'>¥"+data[i].goods_price+"</li> </ul>   ";
            dl+="<div class='datails-btn' style='position:relative;'><a href='gm-orederList.html?oid="+data[0].oid+"&ono="+guid()+order_no+"' target='_blank' style='margin-top:10px;'>查看更多订单信息</a> </div> </dd> </dl>";
            $(".homeLeft-order").append(dl);
        }
    });
}


//无数据显示
function noData() {
   var p="<p class='myGome-empty-order'>您还没有订单记录，快<a target='_blank' href='index.html'>去逛逛</a>吧</p>";
}

//足迹
function foot() {
    
}