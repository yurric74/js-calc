// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('calc', {
    // вказуємо назвуконтейнера
    name: 'calc',
    //вказуємо назву компонентів
    component: [],
    //вказуємо назву сторінки
    title: 'Calc',
    //...сюди можна далі продовжувати додавати потрібні технічні данні, які будуть використовуватись в layout

    //вказуємо данні
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})
// ================================================================
//
//експортуємо глобальний роутер
module.exports = router
