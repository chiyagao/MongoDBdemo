//连接数据库

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test_db');

mongoose.connection.once('open',function (db) {
    console.log('数据库连接成功！',db);
}).on('error',function (error) {
    console.log('连接失败: ',error);
});