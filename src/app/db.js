export const ssh = require('mysql-ssh');

export function db(){
    const connect = ssh.connect(
        {
            host: '###.###.###.###',
            user: '#########',
            password: '#########'
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

