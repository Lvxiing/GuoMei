function getQueryString(e) {
    var i = window.location.search;
    var a = new RegExp("(^|)" + e + "=([^&]*)(&|$)", "gi").exec(i), d;
    if (d = a) {
        return d[2]
    }
    return ""
}

function compareGotoShopcart(e, i, a) {
    if (e == "" || i == "") {
        alert("商品暂时不能加入购物车!");
        return
    }
    var d = {pid: e, sid: i, pcount: "1", type: "0", _r: (new Date).getTime()},
        o = "//cart" + cookieDomain + "/home/api/cart/addToCart";
    if (cardType == "ZSTK" || cardType == "ZDZK") {
        g.login(function () {
            var e = "//card" + cookieDomain + "?skuType=" + cardType + "&productId=" + d.pid + "&skuId=" + d.sid + "&count=" + d.pcount;
            $.createProgress({Jump: true, openJump: false, url: e})
        });
        return false
    }
    if (a > 1) {
        d.type = 16
    }

    function s() {
        $.createProgress({
            Jump: false, url: o, data: d, callback: function (e) {
                if (e.success) {
                    window.location.href = "//cart" + cookieDomain;
                    window.GomeSa && GomeSa.track("AddCart", {quantity: 1, sku_id: i})
                } else {
                    alert(e.errMsg)
                }
            }
        })
    }

    if (window.navigator.userAgent.indexOf("IE 6") > 0) {
        g$("json3", "/js/g/unit/json3.js", function () {
            s()
        })
    } else {
        s()
    }
}
