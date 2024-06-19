import { pool } from "../database/connection.js"

// CONSULTA VARIOS(5)
const all = async () => {
    const { rows } = await pool.query("SELECT * FROM musicos LIMIT 20;")
    return rows
}
// CONSULTA UNO
const one = async ({ rut, nombre, curso, nivel }) => {
    const querySQL = {
        text: 'SELECT * FROM musicos WHERE rut= $1',
        values: [rut]
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
}
// ELIMINA UNO
const remove = async ({ rut, nombre, curso, nivel }) => {
    const querySQL = {
        text: 'DELETE FROM musicos WHERE rut= $1',
        values: [rut]
    }
    const { rows } = await pool.query(querySQL)
    return rows
}
//CREA UNO
const create = async ({ rut, nombre, curso, nivel }) => {
    const querySQL = {
        text: 'INSERT INTO musicos VALUES($1,$2,$3,$4) RETURNING *',
        values: [nombre, curso, nivel, rut],
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
}
//MODIFICA UNO
const update = async ({ nombre, curso, nivel, rut }) => {
    const querySQL = {
        text: 'UPDATE musicos SET nombre = $1, curso = $2, nivel = $3 WHERE rut= $4 RETURNING *;',
        values: [nombre, curso, nivel, rut]
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]

}

export const alwaysModel = {
    all,
    remove,
    create,
    update,
    one
}