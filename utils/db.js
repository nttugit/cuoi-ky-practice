import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();
console.log('MySQL Database is running on port ' + process.env.DB_PORT);
export default knex({
    client: 'mysql2',
    // notes: chỉnh sửa các thông tin db ở đây
    connection: {
        host: '127.0.0.1',
        port: process.env.DB_PORT || '3306',
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '123456',
        database: 'ads_management_practice',
    },
    // cơ chế connection pooling giúp db
    // không bị chết do có quá nhiều kết nối
    pool: { min: 0, max: 10 },
});
