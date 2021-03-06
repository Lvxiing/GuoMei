$(function () {
    //查询用户订单的待付款待收货总记录数
    total();
    //查询近三个月的订单
    findOrdersByUserId();
    //足迹
    foot();
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
            for(var i=0;i<4;i++){
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
            dl+="<div class='datails-btn' style='position:relative;'><a href='gm-orederList.html?oid="+data[0].oid+"&ono="+guid()+order_no+"' target='_blank' style='margin-top:10px;'>查看订单详情</a> </div> </dd> </dl>";
            $(".homeLeft-order").append(dl);
        }
    });
}


//无数据显示
function noData() {
   var p="<p class='myGome-empty-order'>您还没有订单记录，快<a target='_blank' href='index.html'>去逛逛</a>吧</p>";
    $(".homeLeft-order").append(p);
}

//足迹
function foot() {
    $.getJSON("../../Goods/findBrowseGoods",function (json) {
        if(json.msg=="success"){
            var lists=json.list;
            for(var i=0;i<6;i++){
                var li="<li> <div class='myFootprint-img'><a href='product_details.html?gid="+lists[i].id+"' target='_blank'><img src='"+lists[i].mainImg+"' ></a>";
                li+="</div> <p class='myFootprint-areaPrice'>¥"+lists[i].price+"</p> </li>";
                $(".myFootprint-box").append(li);
            }
        }else{
            var li="<p class='empty-coupon'style='text-align:center;margin-top:25px;'> <span>亲，您这里好空荡哟~~~</span> <a href='index.html' style='margin:15px 0 0 90px;'>去逛一逛</a> </p>"


            $(".myFootprint-box").append(li);
        }
    });
}