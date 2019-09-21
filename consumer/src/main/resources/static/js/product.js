$(function () {
      info();
      search();
      //页面一加载显示第一页评价信息
    evaluate(1);
    //上一页
    $(".gpprev").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo>1){
            pageNo--;
        }
        evaluate(pageNo);
    });
    //下一页
    $(".gpnext").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo<pageCount){
            pageNo++;
        }
        evaluate(pageNo);
    });

    vipPrice();

});

//搜索跳转
function search() {
    $(".search-btn").click(function () {
        var input=$("#searchInput").val();
        var content = encodeURI(encodeURI(input));
        window.location.href='categoryLists.html?content='+content;
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

//显示商品基本信息
function info() {
    var re =GetRequest();
    $.getJSON("../../Goods/GoodInfoShow",{"gid":re.gid} ,function (json) {
        //主图
        var div="<img width='330.7692308' height='330.7692308' class='j-bpic-b'  src='"+json.goodsDes.mainImg+"' alt='"+json.goodsDes.title+"'/>";
        div+="<a title='"+json.goodsDes.title+"'target='_blank' href='javascript:;'class='pic-l-b'></a>";
        $("div.jqzoom").append(div);
        $("div.fd>img")
            .attr("src", json.goodsDes.mainImg);
        //标题
        var title="<h1>"+json.goodsDes.title+"</h1>";
        title+="<h4 id='prdtitcx'>"+json.goodsDes.subTitle+"</h4>";
        $("div.hgroup").append(title);
        //价格
        $("#prdPrice").html("<em>¥</em><span name='price' style='color: #e3101e;'>"+json.goodsDes.price+"</span>");
        //好评
        var centCount=0;
        var diffCount=0;
        var good=100;
        if(json.count!=0){
            centCount=json.centCount/json.count*100;
            diffCount=json.diffCount/json.count*100;
            good=json.goodCount/json.count*100;
        }

        $("#haocnt").text(good+"%");
        //评价人数
        $("#pincnt").text(json.count);
        //库存
        var stock="有货";
        if(json.goodsDes.stock<5){
            stock="库存紧张";
        }
        $("#stockTxt").text(stock);
        //描述
        $("#showStoretit").text(json.goodsDes.des);
        //商品详情
        var des=" <div class='guigecanshu' title='"+json.goodsDes.title+"'>商品名称:"+json.goodsDes.title+"</div>";
        des+="<div class='guigecanshu'>描述:"+json.goodsDes.des+"</div>";
        $("div.guigecanshu_wrap").append(des);
        //评价
        var evaluate="<div class='sper'><span>"+good+"</span><b>%</b> <em>好评度</em></div>";
        evaluate+="<div class='gmb'> <p>好评<span>("+good+"%)</span><em><b style='width:"+good+"%'></b></em></p>";
        evaluate+="<p>中评<span>("+centCount+"%)</span><em><b style='width:"+centCount+"%'></b></em></p>";
        evaluate+="<p>差评<span>("+diffCount+"%)</span><em><b style='width:"+diffCount+"%'></b></em></p>";
        $(".sor").append(evaluate);
        $("#all").text("全部评价("+json.count+")");
        $("#good").text("好评("+json.goodCount+")");
        $("#cent").text("中评("+json.centCount+")");
        $("#diff").text("差评("+json.diffCount+")");
        $(".c00").text("("+json.count+")");
        //图片
        var img=json.goodsDes.desImg;
        var list=img.split(",");
        var image="";
        for(var i=0;i<list.length-1;i++){
            image+="<p><img src='"+list[i]+"' width='750px' height='584px'></p>";
        }
        image+="<p><br></p>";
        $("#detailHtml").append(image);
        //最近浏览
        var browse=json.browseGoods;
        for(var i=0;i<browse.length;i++){
            var li="<li><div class='img-w'> <a href='product_details.html?gid="+browse[i].id+"' target='_blank' title=''>";
            li+="<img src='"+browse[i].mainImg+"' alt='"+browse[i].title+"'></a></div>";
            li+="<p class='title'><a href='product_details.html?gid="+browse[i].id+"'target='_blank'title='"+browse[i].title+"'><span>"+browse[i].title+"</span></a></p>";
            li+="<p class='yuan colprice fb'>¥<span>"+browse[i].price+"</span></p>";
            li+="<p></p></li>";
            $("#rangedBrowsedProd").append(li);
        }
        //分类
        findCategory(json.goodsDes.title);
    });
}

//显示商品所属的所有分类
function findCategory(name) {
    var re =GetRequest();
    $.getJSON("../../category/findCategoryByGoodsId",{"gid":re.gid} ,function (json) {
         var cname=json.cname.split(">");
         var cid=json.cid.split(">");
         var level=json.clevel.split(">");
        var li="";
         for(var i=0;i<cname.length;i++){
             if(i==0){
                 li+="<li class='linkBold'><a  title='"+cname[i]+"'>"+cname[i]+"</a><i class='icon-crumbs-right'></i></li>";
             }else if(i==1){
                 li+="<li><a title='"+cname[i]+"'>"+cname[i]+"</a><i class='icon-crumbs-right'></i></li>";
             }else{
                 li+="<li><a  href='categoryList.html?cid="+cid[i]+"&level="+level[i]+"' title='"+cname[i]+"'>"+cname[i]+"</a><i class='icon-crumbs-right'></i></li>";
             }
         }
        li+="<li class='active'><a href='javascript:;' gid='"+re.gid+"' title='"+name+"'>"+name+"</a></li>";
        $("#category").append(li);
        //相关分类(根据第二级分类查)
        classification(cid[1]);
        //热销排行榜
        sellWell(cid[3]);
        //相似商品
        besimilarGoods(cname[2]);
    });
}
//获取总页面数
var pageCount=0;
//评价
function evaluate(pageNo){
    var re =GetRequest();
    $.getJSON("../../evaluate/goodsEvaluate",{"gid":re.gid,"pageIndex":pageNo,"pageSize":1} ,function (json) {
         //设置上下页
        $(".gpprev").attr("pageNo",json.pageNo);
        $(".gpnext").attr("pageNo",json.pageNo);
        pageCount=json.pageCount;
        $("#replyListWrap").empty();
        var list=json.list;
        if(list.length>0){
            for(var i=0;i<list.length;i++){
                //转换时间格式
                var dateee = new Date(list[i].evaluate_time).toJSON();
                var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
                //判断星级
                var li="<li class='oh'><div class='reply-left'><div class='reply_avatar'>";
                li+="<img src='"+list[i].user_headimg+"'><span class='reply_avatar_userName'>"+list[i].user_name.substring(0,1)+"***"+list[i].user_name.substring(list[i].user_name.length-1,list[i].user_name.length)+"</span></div>";
                li+=" <p class='profileGrade'><span class='viplevel'>"+list[i].grade_name+"会员</span></p></div>";
                li+="<div class='reply-center'> <div class='reply-center-inner'>  <div class='reply-spots'></div>";
                li+="<span class='detail-star bgiprd'><b style='width: "+list[i].evaluate_star*20+"%;' class='bgiprd'></b> </span>";
                li+=" <div class='shiyongxinde oh'><em class='ca5'>使用心得：</em>"+list[i].evaluate_content+"</div>";
                li+=" <div class='info-time'><a target='_blank' href='#'>"+times+"</a>";
                li+=" <div class='close-arrow'><div class='reply_wrap_sanjiao'></div><div class='reply_wrap_close'>╳</div>";
                li+="</div></div></div><div class='reply-center-inner replylist_list_inner'></div>";
                li+=" <div class='reply-center-inner'></div> <div class='reply-center-inner'></div></div> </li>";
                $("#replyListWrap").append(li);
            }
        }else{
            $("#replyListWrap").append("<li><p class='nocomments-info'>暂无商品评价！</p></li>");
            $("#pageNum").hide();
        }

    });
}

//相关分类
function classification (id) {
    $.getJSON("../../category/findCategoryAndChild",{"parentId":id} ,function (json){
        for(var i=0;i<json.length;i++){
            var a="<a href='categoryList.html?cid="+json[i].cid+"&level="+json[i].clevel+"'  title='"+json[i].name+"' target='_blank'>"+json[i].name+"</a>";
            $("#clearfix").append(a);
        }
    });
}

//热销排行榜
function sellWell(id) {
    $.getJSON("../../Goods/goodsInfoSale",{"cid":id} ,function (json){
          if(json.length>0){
              for(var i=0;i<json.length;i++){
                  var li=" <li><div class='tonglei_sz'>"+i+1+"</div>";
                      li+=" <div class='tonglei_img'><a target='_blank' href='product_details.html?gid="+json[i].id+"' title='"+json[i].title+"'><img src='"+json[i].mainImg+"' width='50' height='50'></a></div>";
                      li+="<div class='tonglei_link'><p class='tonglei_link_name'><a target='_blank' href='product_details.html?gid="+json[i].id+"'>"+json[i].title+"</a></p>";
                     li+="<p class='tonglei_jg'><span class='tonglei_jg_val'>¥"+json[i].price+"</span></p></div></li>";
                     $(".tonglei_ul").append(li);
              }
          }
    });
}

//相似商品
function besimilarGoods(name) {
    $.getJSON("../../Goods/findGoodsNewByCategoryName",{"categoryName":name} ,function (json){
        var re =GetRequest();
        for(var i=0;i<json.length;i++){
            if(re.gid!=json[i].id){
                var li="<li><a  href='product_details.html?gid="+json[i].id+"' target='_blank' title='"+json[i].title+"' maima_param=''>";
                li+="<img  height='130' width='130' src='"+json[i].mainImg+"'></a> <a  href='product_details.html?gid="+json[i].id+"' target='_blank'title='"+json[i].title+"' maima_param=''>";
                li+="<h2>"+json[i].title+"</h2></a><p class='yuan colprice fb'>¥<span>"+json[i].price+"</span></p></li>";
                $("#besimilarGoods").append(li);
            }
        }
    });
}


//显示会员价
function vipPrice() {
    var re=GetRequest();
    if (re.vip!="yes"){
        $("#vip").hide();
    }else{
        $("#vip").show();
        $.getJSON("../../Goods/vipInfo",{"gid":re.gid},function(json){
            $("#huiYuanDJ").text("您享受"+json.grade_name+"会员价");
            var vip_price=json.goods_price-json.Discount_money;
            $(".huiYuanTeJia_text").text("¥"+vip_price+"  ");
            $("#Discount_money").text(json.Discount_money);
            $("#Discount_money").attr("money",json.Discount_money);
        })
    }
}

