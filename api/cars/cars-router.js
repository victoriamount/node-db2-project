const express = require('express')
const Cars = require('./cars-model')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const data = await Cars.get()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await Cars.insert(req.body)
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router