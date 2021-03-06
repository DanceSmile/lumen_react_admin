var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
 "users|1000" :[{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        "username": '@cname()',
        "age|12-28" :23 ,
        "sex|1":[
            '男',
            "女",
            "人妖"
        ],
        "home":'@county(true)',
        "color" : '@color',
        "photo":'https://unsplash.it/400/800/?random='+"@cname()",
        "descript":'@cparagraph',
        "created_at" :'@datetime',
        "updated_at" :'@datetime',
        'key|+1': 1,
        
 }]
    
})


export default data