$(function () {
    $.getJSON("../../Goods/findBrowseGoods",function (json) {
        if(json.msg=="success") {
            var list = json.list;
            for (var i = 0; i <list.length; i++) {
               var li="<li class='footprint-lis  ' style='border-color: rgb(234, 234, 234);'><span class='footprint-close' ></span><dl>";
                   li+=" <dt><a href='product_details.html?gid="+list[i].id+"' title='"+list[i].title+"' target='_blank'> <img src='"+list[i].mainImg+"'> </a></dt>";
                   li+=" <dd><a href='product_details.html?gid="+list[i].id+"' title='' target='_blank'><h5>"+list[i].title+"</h5></a>";
                    li+="<p class='footprint-details'><span class='footprint-price'>¥5799.00</span> ";
                   li+="<span  class='footprint-similar'>看相似</span></p></dd></dl> </li>";
                   $(".footprint-uls").append(li);

            }
        }
     });
});