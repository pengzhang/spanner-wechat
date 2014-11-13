/**
 * 图片文件上传
 * Created by zp on 14-11-12.
 */

$(document).ready(function () {

    $("#uploadpic").click(function () {
        var num = $('#pic_num').val();
        uploadFile('pic'+num);
    })

});


function uploadFile(file){
    $('#' + file).click();
//    document.getElementById(file).click();
    var num = $('#pic_num').val();
    var new_num = parseInt(num)+1;
    $('#pic_show' + num).after('<img id="pic_show'+new_num+'" name="pic_show'+new_num+'" width="150" height="150" style="display: none;" >');
    $('#pic'+num).after('<input type="file" name="pic'+new_num+'" id="pic'+new_num+'" onchange=\"readURL(this, \'pic_show'+new_num+'\')\" style="display: none;">');
    $('#pic_num').val(new_num);

    return false;

};

function readURL(input, fileName) {
    var filevalue = input.value;
//    var extend = filevalue.substring(filevalue.lastIndexOf(".")+1);
//
//    if(extend==""){
//    }else{
//
//        if(!(extend=="png"||extend=="jpg" || extend=="gif")){
//            alert("请上传后缀名为png或jpg或gif的文件!");
//            var nf = obj.clonenode(true);
//            nf.value='';
//            obj.parentnode.replacechild(nf, obj);
//            return false;
//        }
//    }

    if (input.files && input.files[0]) {

        var reader = new FileReader();
        reader.onload = function (e) {

            $('#'+fileName)
                .attr('src', e.target.result);

            $('#'+fileName).show();
            $('#'+fileName).attr('style','');
        };
        reader.readAsDataURL(input.files[0]);

    }
}
