const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPASS,
    port: process.env.DBPORT
})


async function selectRut({ rut }) {
    try{
        const resp = await pool.query(`
            SELECT check_rut($1)
        `, [rut])
        if (resp.rows[0].check_rut){
            return true
        }
        return false
    }catch (e) {
        console.log('Error while checkin rut')
        console.log(e)
        return undefined
    }
}

module.exports = {
    selectRut
}