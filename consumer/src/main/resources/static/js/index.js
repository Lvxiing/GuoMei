$(function () {
    lunbo();
    function lunbo() {
        $("ul.focus_box").empty();
        $.getJSON("../../index/mainImagesData", function (json) {
            for (var i = 0; i < json.length; i++) {
                var li;
                if (i!= 0) {
                    li = "<li style='display: none; background:" + json[i].bcolor + ";'><a href='#' target='_blank'><img class='lazyloading'  src='http://47.101.130.148:88/images/" + json[i].folder + "/" + json[i].imageName + "'alt='' title='' width='100' height='100'></a></li>";
                }else{
                    li = "<li style='display: block; background:" + json[i].bcolor + ";'><a href='#' target='_blank'><img class='lazyloading'  src='http://47.101.130.148:88/images/" + json[i].folder + "/" + json[i].imageName + "'alt='' title='' width='100' height='100'></a></li>";
                }
                $("ul.focus_box").append(li);
            }
            for (var i = 0; i < json.length; i++) {
                var  li ;
                if (i == 0) {
                    li = "<li class='cur' data-index='"+i+"'><a></a></li>";
                } else {
                    li = "<li data-index='"+i+"'><a></a></li>";
                }
                $("#ol").append(li);
            }

        });
    }

});