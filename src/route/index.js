// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

//підключіть файли роутів
const test = require('./test')
//підключіть інші  файли роутів, якщо є
//const test2 = require('./test2')
const calc = require('./calc')
//обєднайте файли роутів за потреби
router.use('/', test)
//router.use('/test', test2)
router.use('/calc', calc)
//використовуйте інші файли роутів , якщо є
// ================================================================
//
//експортуємо глобальний роутер
module.exports = router
