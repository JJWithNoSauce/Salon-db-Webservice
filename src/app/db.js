export const ssh = require('mysql-ssh');

export const db = ssh.connect(
    {
        host: '10.147.18.158',
        user: 'mmn',
        password: '@Zx12345'
    },
    {
        host: 'localhost',
        user: 'mmn',
        password: '12345',
        database: 'salondb_kku'
    }
)