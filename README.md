# chaben-serve

## 创建数据库
1. 先在MySql创建一个chaben的库
2. 修改database里面的config文件下的mysql登录账号和密码
```json
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "chaben",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
3. 执行创建表指令
```
npx sequelize db:migrate
```