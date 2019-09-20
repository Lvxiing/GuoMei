$(function () {

});

//查询已经完成的订单
function findOrdersByUserId() {
    $.getJSON("../../Orders/findOrdersByUserId",{"pageIndex":1,"pageSize":1000,"days":"null","status":5,"ono":"null"},function (json) {
        var list=json.list;
        if(list.length==0){
            noData();
        }else{
            for(var i=0;i<list.length;i++){
                findOrdersDetail(list[i].order_id,list[i].order_time,list[i].order_no);
            }
        }
    });
}

//根据订单号查询已经完成的订单详情信息
function findOrdersDetail(order_id,time) {
    $.getJSON("../../Orders/findOrdersDetail",{"oid":order_id},function (data) {
        //转换时间格式
        var dateee = new Date(time).toJSON();
        var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
         for(var i=0;i<data.length;i++){
             var tbody="<tbody><tr class='un_appraise'><td width='10%' class='text_center'><div class='pos_re'>";
             tbody+="<a href='product_details.html?gid="+data[i].gid+"'title='"+data[i].title+"' target='_blank'> <img width='50px' height='50px' src='"+data[i].img+"' title='"+data[i].title+"'></a> </div> </td>";
             tbody+="<td width='50%' class='appraise_over'>"+data[i].title+"</td>";
             tbody+="<td width='20%' class='text_center' style='border-left:1px solid #ccc;border-right:1px solid #ccc;' rowspan='1'>";
             tbody+="<div class='pos_re'><span><a href='javascript:void(0);'id='appraise_btn' class='appraise_blue appraise_btn'>评价晒单<br></a></span><span class='appraise_down'></span></div></td>";
             tbody+="";
         }
        //
        // <td width="20%" class="text_center" rowspan="1">
        //     <div>配送编号：2839137287</div>
        // <div>2019-08-30 10:12</div>
        // </td>
        // </tr>
        // <!--点击评价晒单,下方显示评价框-->
        // <tr class="yellow appArea" style="display: none;">
        //     <td colspan="4" style="border-bottom:1px solid #f3dbb6;border-top:1px solid #f3dbb6;">
        //     <div class="border_arrows"></div>
        //     <div class="appraise_area">
        //     <div class="appraise_info">
        //     <dl class="appraise_grade">
        //     <dt><span class="gotta">*</span>评分：</dt>
        // <dd class="score_choose">
        //     <div class="score_star"></div>
        //     <div class="score_star"></div>
        //     <div class="score_star"></div>
        //     <div class="score_star"></div>
        //     <div class="score_star"></div>
        //     <span class="appraise_gray score_title">非常喜欢</span></dd>
        // <dt><span class="gotta">&nbsp;</span>买家印象：</dt>
        // <dd class="clearfix" style="padding-bottom:25px;">
        //     <div class="label_card" id="j-recoPoints" style="padding-bottom:1px;"></div>
        //     <div class="clearfix label_content" style="position:relative;">
        //     <div class="label_custom"><a href="javascript:void(0);" class="label_icon"></a> <input type="text" class="recocontent_input" id="j-recocontent-input" autocomplete="off">
        //     <input id="h-recocontent-input" class="h-recocontent-input" name="/com/gome/commerce/catalog/ProductCommentFormHandler.recocontent" value="" type="hidden"><input name="_D:/com/gome/commerce/catalog/ProductCommentFormHandler.recocontent" value=" " type="hidden"> <i class="custom_btn">提交</i></div>
        // <span id="rec-info" class="custom_explain">自定义推荐每条<span>不超过7个</span>中文字符</span>
        // </div>
        // <div style="overflow:hidden;"><span class="rec-error" style="height:18px;line-height:18px;margin:7px 0 0;"></span>
        //     </div>
        //     </dd>
        //     <dt><span class="gotta">*</span>使用心得：</dt>
        // <dd class="clearfix">
        //     <div class="long_area"><input name="_" value=" " type="hidden"><textarea id="j-eva-textarea" name="textarea" class="textarea textarea-info ctextarea-info"></textarea>
        //     <div class="explain_bottom">
        //     <div class="explain_upload_btn" id="explain_upload_btn0"></div>
        //     <div class="explain_upload_phone_btn" id="explain_upload_phone_btn"></div>
        //     <div class="errorTxt"></div>
        //     <span class="uploat_tip uploat_num" style="display:none;"><span class="col5e cur_num">0</span>/5</span>
        // <span class="uploat_tip uploat_limit">本次最多上传5张，单日上传不超过30张</span>
        // <ul class="upload_img" style="display:inline-block"></ul>
        //     <span class="uploat_bottom"></span></div>
        // </div>
        // <span class="textarea_explain appraise_gray">0 / 400</span>
        //     <span class="meidouPrompt" style="float: left;display: block;margin-top: 39px;margin-left: -118px;color: #a5a5a5;">（评论多于10个字，有机会奖励美豆哦~）</span>
        // </dd>
        // <dd class="commit-btnlayer">
        //     <div class="commit_tip">描述一下您的心得呗~</div>
        // <input id="commitbtn" style="display:none" name="" value="提交" type="submit"> <input name="_D:/com/gome/commerce/catalog/ProductCommentFormHandler.createproductcomment" value=" " type="hidden"></dd>
        //     </dl>
        //     </div>
        //     </div>
        //     </td>
        //     </tr>
        //     </tbody>
        //






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