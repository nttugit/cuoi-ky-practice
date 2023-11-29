import knex from 'knex';

export default knex({
    client: 'mysql2',
    // notes: chỉnh sửa các thông tin db ở đây
    connection: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '',
        database: 'ads_management_practice',
    },
    // cơ chế connection pooling giúp db
    // không bị chết do có quá nhiều kết nối
    pool: { min: 0, max: 10 },
});
