export const ssh = require('mysql-ssh');

export function db(){
    const connect = ssh.connect(
        {
            host: '10.147.18.158',
            user: 'mmn',
            password: '@Zx12345'
        },
        {
            host: 'localhost',
            user: 'salonagent5',
            password: 'salondb5',
            database: 'salondb_kku'
        }
    )
    return connect;
}

