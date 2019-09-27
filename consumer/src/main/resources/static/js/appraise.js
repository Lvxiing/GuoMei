$(function () {

    findNoComment();
    findHaveComment(1,pageSize);
    //上下页
    $(".prev").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo>1){
            pageNo--;
        }
        findHaveComment(pageNo,pageSize);
    });

    $(".next").click(function () {
        var pageNo=$(this).attr("pageNo");
        if(pageNo<pageCount){
            pageNo++;
        }
        findHaveComment(pageNo,pageSize);
    });
    //到几页去
    $("#sure").click(function () {
        var pageNo=$("#pNum").val();
        if(pageNo>0){
            findHaveComment(pageNo,pageSize);
        }
    });
});
var pageSize=2;
//获取总页面数
var pageCount=0;
//查询用户未评价信息
function findNoComment() {
    $.getJSON("../../evaluate/evaluateInfo",{"evaluate_state":0,"pageIndex":0,"pageSize":0},function (data) {
        $("#table").empty();
        if(data.length>0){
            for(var i=0;i<data.length;i++){
                //转换时间格式
                var dateee = new Date(data[i].pay_date).toJSON();
                var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
                var tbody="<tbody><tr class='un_appraise'><td width='10%' class='text_center'><div class='pos_re'>";
                tbody+="<a href='product_details.html?gid="+data[i].goods_id+"'title='"+data[i].goods_title+"' target='_blank'> <img width='50px' height='50px' src='"+data[i].goods_main_img+"' title='"+data[i].goods_title+"'></a> </div> </td>";
                tbody+="<td width='50%' class='appraise_over'>"+data[i].goods_title+"</td>";
                tbody+="<td width='20%' class='text_center' style='border-left:1px solid #ccc;border-right:1px solid #ccc;' rowspan='1'>";
                tbody+="<div class='pos_re'><span><a href='javascript:void(0);'id='appraise_btn' class='appraise_blue appraise_btn' evaluate='"+i+"'>评价晒单<br></a></span><span class='appraise_down'></span></div></td>";
                tbody+="<td width='20%' class='text_center' rowspan='1'> <div>订单编号："+data[i].order_no+"</div> <div>"+times+"</div> </td></tr>";
                //点击评价晒单,下方显示评价框
                tbody+="<tr class='yellow appArea' id='evaluate-"+i+"' style='display: none;'> <td colspan='4' style='border-bottom:1px solid #f3dbb6;border-top:1px solid #f3dbb6;'>";
                tbody+="<div class='border_arrows'></div><div class='appraise_area'><div class='appraise_info'><dl class='appraise_grade'> <dt><span class='gotta'>*</span>评分：</dt>";
                //星级
                tbody+="<dd class='score_choose'> <div class='score_star' num='1'></div> <div class='score_star'num='2'></div>";
                tbody+="<div class='score_star' num='3'></div><div class='score_star'num='4'></div><div class='score_star' num='5'></div><span class='appraise_gray score_title'>非常好</span></dd>";
                //使用心得
                tbody+="<dt><span class='gotta'>*</span>使用心得：</dt> <dd class='clearfix'>";
                tbody+=" <div class='long_area'><input name='_' value=' ' type='hidden'><textarea id='j-eva-textarea' name='textareas' class='textarea textarea-info ctextarea-info'></textarea></div>";
                tbody+="<span class='textarea_explain appraise_gray'>0 / 400</span>";
                tbody+="<span class='meidouPrompt' style='float: left;display: block;margin-top: 39px;margin-left: -118px;color: #a5a5a5;'>（评价晒单说出您的看法哦~）</span></dd>";
                //提交
                tbody+="<dd class='commit-btnlayer'><div class='commit_tip'>描述一下您的心得呗~</div>";
                tbody+="<input  style='display:block' name='evaluate' type='button' onclick='evaluates("+i+")' value='提交' id='"+data[i].evaluate_id+"/"+data[i].goods_id+"/"+data[i].order_no+"'> <input type='hidden'></dd>";
                tbody+="</dl> </div> </div> </td> </tr> </tbody>";
                $("#table").append(tbody);
            }
        }else{
            noData(1);
        }
    });
}

//查询用户评价信息
function findHaveComment(pageIndex,pageSize){
    $.getJSON("../../evaluate/evaluateInfo",{"evaluate_state":1,"pageIndex":pageIndex,"pageSize":pageSize},function (data) {
        $("#table2").empty();
        var list=data.list;
        if(data.pageNo==1){
            $(".prev").addClass("disable");
        }else{
            $(".prev").removeClass("disable");
        }
        if(data.pageNo==data.pageCount){
            $(".next").addClass("disable");
        }else{
            $(".next").removeClass("disable");
        }
        if(data.pageCount==1){
            $(".prev").addClass("disable");
            $(".next").addClass("disable");
        }
        pageCount=data.pageCount;
        $(".prev").attr("pageNo",data.pageNo);
        $(".next").attr("pageNo",data.pageNo);
        $("#pNum").val(data.pageNo);
        //判断是否有数据
        if(list.length>0){
            for(var i=0;i<list.length;i++){
                //基本详情
                var tbody="<tbody><tr class='appraise'> <td width='20%' class='text_center' style='padding-right:30px;'>";
                //星级判断
                tbody+="<div class='already_score clearfix'>";
                for(var j=0;j<5;j++){
                    if(j<list[i].evaluate_star){
                        tbody+="<div class='score_star'></div>";
                    }else{
                        tbody+="<div class='gray_star'></div>";
                    }
                }
                tbody+="</div></td><td class='already_content appraise_cc'><div style='margin-left:70px'>";
                tbody+="<span class='appraise_5e already_name'>"+list[i].evaluate_content+"</span>";
                //转换时间格式
                var dateee = new Date(list[i].evaluate_time).toJSON();
                var times= new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
                tbody+="<span class='padl35'>"+times+"</span></div></td><td width='20%' class='text_center'>";
                tbody+="<div class='pos_re'><a href='product_details.html?gid="+list[i].goods_id+"' title='"+list[i].goods_title+"'><img width='50px' height='50px' src='"+list[i].goods_main_img+"' title='"+list[i].goods_title+"'></a></div></td>";
                tbody+="<td width='20%' class='text_center already_operate'> &nbsp;<div>";
                tbody+="<a href='javascript:void(0);' ordertype='0' class='already_again padl50' addevaluate='"+i+"'>追加评论</a></div></td></tr>";
                //追加评论
                tbody+="<tr style='display: none' class='yellow addArea' id='addevaluate-"+i+"'><td colspan='4' style='border-bottom:1px solid #f3dbb6;border-top:1px solid #f3dbb6;'>";
                tbody+="<div class='again_arrows'></div><div class='again_area'><textarea name='textarea' class='again_info ctextarea-info'></textarea>";
                tbody+="<div class='again_grade'> <div class='commit-btnlayer clearfix'><div class='addcommit_tip'>描述一下您的心得呗~</div>";
                tbody+=" <a id='"+list[i].goods_id+"/"+list[i].user_id+"/"+list[i].evaluate_star+"/"+list[i].order_id+"/"+list[i].order_no+"'  name='addevaluate' class='btn-light' href='javascript:;'  style='margin-left:120px;margin-top: 10px;' onclick='addEvaluates("+i+")'>提交</a>";
                tbody+="<span class='btn_tip'></span> <span style='float:right;text-align:right;' class='textarea_explain appraise_gray'>0 / 400</span>";
                tbody+="</div></div></div></div></td></tr></tbody>";
                $("#table2").append(tbody);
            }
        }else{
            noData(2);
        }

    });
}
//无数据显示
function noData(table) {
    if(table==1){
        var tbody="<tbody><tr><td colspan='4'><div class='no_unlist'>暂无待评价商品，去<a class='blue' href='index.html' target='_blank'>逛逛</a>吧</div></td></tr></tbody>";
        $("#table").append(tbody);
    }else{
        var tbody="<tbody><tr><td colspan='4'><div class='no_unlist'>您还未发表评价</div></td></tr></tbody>";
        $("#table2").append(tbody);
    }

}

//评论晒单(相当于修改)
function evaluates(id) {
    //获取点亮星级
    var  len=$(".score_choose .score_star").length;
    if(len==0){
        len=1;
    }
    var evaluate_content=document.getElementsByName("textareas")[id].value;
    var sid=document.getElementsByName("evaluate");
    var evaluate_id=sid[id].id;
    var val=evaluate_id.split("/");
    if(evaluate_content!=""){
        $.getJSON("../../evaluate/updateEvaluate",{"evaluate_content":evaluate_content,"evaluate_star":len,"evaluate_id":val[0],"order_no":val[2],"goods_id":val[1]},function (json) {
            if(json.abc=="true"){   //评论成功
                findNoComment();
                findHaveComment(1,pageSize);
            }else{
                alert("评价失败");
            }
        });
    }else{
        alert("评价内容不能为空");
    }
}

//追加评论
function addEvaluates(id) {
    var sid=document.getElementsByName("addevaluate");
    var textarea=document.getElementsByName("textarea")[id].value;
    //拿到id值
    var str= sid[id].id;
    //截取
    var val=str.split("/");
    var gid=val[0];
    var uid=val[1];
    var start=val[2];
    var oid=val[3];
    var order_no=val[4];
    if(textarea!=""){
        $.getJSON("../../evaluate/addEvaluate",{"evaluate_content":textarea,"evaluate_star":start,"user_id":uid,"goods_id":gid,"order_id":oid,"order_no":order_no},function (json) {
            if(json.abc=="true"){   //追加成功
                findHaveComment(1,pageSize);
            }else{
                alert("评价失败");
            }
        });
    }else{
        alert("评价内容不能为空");
    }
}