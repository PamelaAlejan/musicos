import { pool } from "../database/connection.js"

const all = async () => {
    const { rows } = await pool.query("SELECT * FROM musicos;")
    return rows
}

const one = async (rut) => {
    const querySQL = 'SELECT * FROM musicos WHERE rut=$1 RETURNING *;'
    const { rows } = await pool.query(querySQL, [rut])
    return rows
}

const remove = async (rut) => {
    const querySQL = 'DELETE FROM musicos WHERE rut=$1 RETURNING *;'
    const { rows } = await pool.query(querySQL, [rut])
    return rows
}

const create = async (datos) => {
    const querySQL = 'INSERT INTO musicos (rut, nombre, curso, nivel)VALUES($1,$2,$3,$4)RETURNING *'
    const { rows } = await pool.query(querySQL, [datos.rut, datos.nombre, datos.curso, datos.nivel])
    return rows
}

const update = async (nuevo) => {
    const querySQL = 'UPDATE musicos SET nombre= $1, curso= $2, nivel= $3 WHERE rut= $4 RETURNING *;'
    const { rows } = await pool.query(querySQL, [nuevo.nombre, nuevo.curso, nuevo.nivel])
    return rows
}

export const alwaysModel = {
    all,
    remove,
    create,
    update,
    one
}