const { Router } = require('express');
const router = Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const json_books = fs.readFileSync('./books.json', 'utf-8');
let books = JSON.parse(json_books);

const json_equipos = fs.readFileSync('./data/equipos.json');
let equipos = JSON.parse(json_equipos);

router.get('/', (req, res) => {
    res.render('home_index', {
        layout: 'index',
        data: {
            equipos,
            books
        }
    });
});

router.get('/new-entry', (req, res) => {
    res.render('home_new-entry', {
        layout: 'new-entry',
    });
});

router.post('/new-entry', (req, res) => {
    const {title, author, image, description} = req.body;
    if (!title || !author || !image || !description) {
        res.status(400).send('Entries must have a title and description');
        return;
    }

    let newBook = {
        id: uuidv4(),
        title,
        author,
        image,
        description
    };

    books.push(newBook);

    const json_books = JSON.stringify(books)
    fs.writeFileSync('./books.json', json_books, 'utf-8');

    res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
    books = books.filter(book => book.id != req.params.id);
    const json_books = JSON.stringify(books)
    fs.writeFileSync('./books.json', json_books, 'utf-8');
    res.redirect('/');
});

module.exports = router;