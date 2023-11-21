const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPASS,
    port: process.env.DBPORT
})

// Database access credentials

async function selectCredentials( username ){
    try {
        console.log(username , 'is querying for credentials...')
        const response = await pool.query(`SELECT * FROM get_credentials( $1 )`, [ username ]);

        if (response.rows[0].password){
            console.log('Accepted')
            return response.rows[0];
        }
        console.log('Rejected')
        return false
    } catch (e) {
        console.log('Error querying for credentials for ', username)
        console.log(e)
        return false;
    }
}

async function selectUserData( uuid ){
    try{
        const response = await pool.query(`SELECT * FROM get_userdata($1)`, [ uuid ]);
        console.log(response.rows[0])
        if (response.rows[0].name){
            return response.rows[0]
        }
        return  false
    }catch (e) {
        console.log('Error while selecting user data')
        console.log(e)
        return undefined
    }
}

async function insertUser({rut, name, lastname_1, lastname_2, birth_date, password,
                              region, city, street, number, description, status }, hash){
    try{
        const response = await pool.query(`SELECT register_user( 
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 
        )`, [rut, name, lastname_1, lastname_2, birth_date, password, hash,
            region, city, street, number, description, status]);
        if (response){
            return response.rows[0]
        }
        return false

    }catch (e) {
        console.log('Error while register user')
        console.log(e)
        return undefined
    }
}
module.exports = {
    selectCredentials,
    selectUserData,
    insertUser

}