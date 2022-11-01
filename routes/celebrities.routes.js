const express = require('express')
const Celebrity = require('../models/Celebrity.model')
const router = express.Router()


router.get('/new', (req, res, next) => {
    res.render('newcelebrity', { celebrity: '', occupation: '', catchPhrase: ''})

})

router.post('/', async (req, res) => {
    try {
        await Celebrity.create({
            celebrity: req.body.celebrity,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase.split(''),
        })
        res.redirect('/celebrities')
    } catch (error) {
        console.log(error)
    }
})
router.get('/celebritiesId', async (req, res) => {
    console.log(req.params.celebritiesId)
    const celebrities = await celebrity.findById(req.params.celebrityId)

    res.render('celebrity', {celebrity})
})

router.get('/update/:celebrityId', async (req, res) => {
    console.log(req.body)
    await celebrity.findByIdAndUpdate(req.params.celebrityId, { ...req.body, name: req.body.name.split('') })
    res.redirect(`/celebrity/${req.params.celebrityId}`)
})

router.get('/delete/:celebrityId', async (req, res) => {
    try {
        await Celebrity.findByIdAndDelete(req.params.celebrityId)
        res.redirect('/celebrities')
      } catch (error) {
        console.log(error)
      }
    })

    module.exports = router
