/**
 * 根据浏览器获取坐标信息
 * Created by zp on 14-11-12.
 */
function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            showPosition,//成功回调函数

            getPositionError,//失败回调函数

            {//options参数配置

                enableHighAccuracy: true,//boolean 是否要求高精度的地理信息

                timeout: 2000,

                maximumAge: 36000

            }
        );

    }

    else {  //不支持，就拉倒吧。
    }

}


function getPositionError(error) {

    switch (error.code) {

        case error.TIMEOUT:

            alert("连接超时，请重试");

            break;

        case error.PERMISSION_DENIED:

            alert("您拒绝了使用位置共享服务，查询已取消");

            break;

        case error.POSITION_UNAVAILABLE:

            alert("亲爱的火星网友，非常抱歉，我们暂时无法为您所在的星球提供位置服务");

            break;

    }

}

function showPosition(position) {

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    var opts={

        type:"GET",
        success:function(data){

            var addr = data.split(',')[0];
            var province = data.split(',')[1];
            var city = data.split(',')[2];
            var district = data.split(',')[3];

            $("#district").val(province+city+district);
            $("#coords").val('['+lat+','+lng+']');
            $("#address").val(addr);
        },
        url:"/map-location?location="+lat+","+lng
    }
    $.ajax(opts);

}

$(document).ready(function () {

    $("#get_position").click(function () {
        getLocation()
    })

});