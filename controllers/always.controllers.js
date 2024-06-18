import { alwaysModel } from "../models/always.models.js"


const getStudents = async (req, res) => {
    try {
        const musicos = await alwaysModel.all()
        return res.json(musicos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

const consultaone = async (req, res) => {
    try {
        const { rut } = req.params
        const musicos = await alwaysModel.one(rut)
        return res.json(musicos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}

const deleteMusicos = async (req, res) => {
    try {
        const { rut } = req.params
        const musicos = await alwaysModel.remove(rut)
        return res.json(musicos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}

const postMusicos = async (req, res) => {
    try {
        const { rut, nombre, curso, nivel } = req.body
        const newdatos = { rut, nombre, curso, nivel }
        const datos = await alwaysModel.create(newdatos)
        return res.json(datos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

const putMusicos = async (req, res) => {
    try {
        const { nombre, curso, nivel } = req.body
        const { rut } = req.params
        const newdatos = { nombre, curso, nivel }
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