/**
 * Created by zp on 14-10-31.
 */


module.exports= {
     subscribe :[
        {
            title: '我们是卡车帮',
            description: '卡车帮描述:卡车,卡车,卡车,卡车,卡车,卡车',
            picurl: 'http://img3.imgtn.bdimg.com/it/u=2664814809,4210432048&fm=23&gp=0.jpg',
            url: 'http://img3.imgtn.bdimg.com/it/u=2664814809,4210432048&fm=23&gp=0.jpg'
        }
    ],
    menu : {
        "button":[
            {
                "name":"商户注册",
                "sub_button":[
                    {
                        "type":"view",
                        "name":"LNG站",
                        "url":"http://dev.mengcms.cn"
                    },
                    {
                        "type":"click",
                        "name":"维修站",
                        "key":"V1001_GOOD"
                    },
                    {
                        "type":"click",
                        "name":"加油站",
                        "key":"V1001_GOOD"
                    }
                ]
            },
            {
                "name":"卡车帮FM",
                "sub_button":[
                    {
                        "type":"view",
                        "name":"行业新闻",
                        "url":"http://www.soso.com/"
                    },
                    {
                        "type":"click",
                        "name":"司机课堂",
                        "key":"V1001_GOOD"
                    },
                    {
                        "type":"view",
                        "name":"油气配件",
                        "url":"http://www.soso.com/"
                    },
                    {
                        "type":"click",
                        "name":"车型信息",
                        "key":"V1001_GOOD"
                    }
                ]
            },
            {
                "name":"获取卡车帮",
                "sub_button":[
                    {
                        "type":"view",
                        "name":"下载司机端",
                        "url":"http://www.soso.com/"
                    },
                    {
                        "type":"click",
                        "name":"下载商户端",
                        "key":"V1001_GOOD"
                    },
                    {
                        "type":"click",
                        "name":"联系我们",
                        "key":"V1001_GOOD"
                    }
                ]
            }
        ]
    },
    pg:{
        "database":"small",
        "username":"small",
        "password":"small",
        "server":"123.57.44.88"
    },
    soso_map:{
        "key":"C26BZ-OLJWV-KQJPS-ULFNN-7NN4Q-VEBAO"
    }


}