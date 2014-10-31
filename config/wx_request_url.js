/**
 * 微信接口的所有请求URL
 * Created by zp on 14-10-29.
 */



module.exports = {
    access_token_url : 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET',
    media_file_upload : 'http://file.api.weixin.qq.com/cgi-bin/media/upload?access_token=ACCESS_TOKEN&type=TYPE',
    media_file_download : 'http://file.api.weixin.qq.com/cgi-bin/media/get?access_token=ACCESS_TOKEN&media_id=MEDIA_ID',
    group_create : 'https://api.weixin.qq.com/cgi-bin/groups/create?access_token=ACCESS_TOKEN',
    group_query_all : 'https://api.weixin.qq.com/cgi-bin/groups/get?access_token=ACCESS_TOKEN',
    group_query_user : 'https://api.weixin.qq.com/cgi-bin/groups/getid?access_token=ACCESS_TOKEN',
    group_modify : 'https://api.weixin.qq.com/cgi-bin/groups/update?access_token=ACCESS_TOKEN',
    group_move : 'https://api.weixin.qq.com/cgi-bin/groups/members/update?access_token=ACCESS_TOKEN',
    device_remark : 'https://api.weixin.qq.com/cgi-bin/user/info/updateremark?access_token=ACCESS_TOKEN',
    user_get_base_info : 'https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN',
    follower_list : 'https://api.weixin.qq.com/cgi-bin/user/get?access_token=ACCESS_TOKEN&next_openid=NEXT_OPENID',
    oauth_user_info : 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect',
    menu_create : 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=ACCESS_TOKEN',
    menu_get : 'https://api.weixin.qq.com/cgi-bin/menu/get?access_token=ACCESS_TOKEN',
    menu_delete : 'https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=ACCESS_TOKEN',
    qrcode_create : 'https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=TOKEN',
    ticket_qrcode : 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=TICKET',
    shorturl : 'https://api.weixin.qq.com/cgi-bin/shorturl?access_token=ACCESS_TOKEN'
}
