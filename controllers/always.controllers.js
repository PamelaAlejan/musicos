import { alwaysModel } from "../models/always.models.js"

//CONSULTA VARIOS (5)
const getStudents = async (req, res) => {
    try {
        const musicos = await alwaysModel.all()
        return res.json(musicos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}
//CONSULTA UNO
const consultaone = async (req, res) => {
    try {
        // const { rut } = req.params
        const musicos = await alwaysModel.one(req.params)
        if (!musicos) return res.status(404).json({ ok: false, msg: "no se encontro el rut" })
        return res.json(musicos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}

// ELIMINA UNO
const deleteMusicos = async (req, res) => {
    try {
        // const { rut } = req.params
        const musicos = await alwaysModel.remove(req.params)
        return res.json(musicos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}
// CREA UNO
const postMusicos = async (req, res) => {
    try {
        const { rut, nombre, curso, nivel } = req.body
        const newdatos = { rut, nombre, curso, nivel }
        const datos = await alwaysModel.create(newdatos)
        return res.status(201).json(datos)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}
// MODIFICA UNO
const putMusicos = async (req, res) => {
    try {
        const { nombre, curso, nivel } = req.body
        const { rut } = req.params
        const newdatos = { nombre, curso, nivel, rut }
        const nuevo = await alwaysModel.update(newdatos)
        return res.json(nuevo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}

export const alwaysController = {
    getStudents,
    postMusicos,
    putMusicos,
    deleteMusicos,
    consultaone
}