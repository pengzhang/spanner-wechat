/**
 * Created by zp on 14-11-13.
 */

$(document).ready(function () {

    $("#ok_btn").click(function () {
        if ($("#lng_name").val() == null || $("#lng_name").val() == "") {
            alert("请填写名称")
            return false;
        }
        if ($("#district").val() == null || $("#district").val() == "") {
            alert("请填写地区,,获取点击定位")
            return false;
        }
        if ($("#address").val() == null || $("#address").val() == "" ) {
            alert("请填写详细地址,获取点击定位")
            return false;
        }
        if ($("#coords").val() == null || $("#coords").val() == "") {
            alert("请填写坐标,获取点击定位")
            return false;
        }
        if ($("#mobile").val() == null || $("#mobile").val() == "") {
            alert("请填写手机号")
            return false;
        }
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($("#mobile").val()))) {
            alert("不是完整的11位手机号或者正确的手机号前七位");
            return false;
        }
        if (parseInt($("#pic_num").val())==0) {
            alert("请上传图片")
            return false;
        }
        if (parseInt($("#pic_num").val())>2) {
            alert("目前支持一张")
            return false;
        }
    })

});
