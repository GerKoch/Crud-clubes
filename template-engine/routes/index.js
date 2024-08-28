const { Router } = require('express');
const router = Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const json_equipos = fs.readFileSync('./data/equipos.json');
let equipos = JSON.parse(json_equipos);


router.get('/', (req, res) => {
    res.render('home_index', {
        layout: 'index',
        data: {
            equipos,
        }
    });
});

router.get('/new-team', (req, res) => {
    res.render('home_new-team', {
        layout: 'new-team',
    });
});

router.post('/new-team', (req, res) => {
    const { name, area, crestUrl, clubColors } = req.body;
    if (!name || !area || !crestUrl || !clubColors) {
        res.status(400).send('Entrie must a team name and country');
        return;
    }

    let newEquipos = {
        id: uuidv4(),
        area: { area },
        name,
        crestUrl,
        clubColors
    };

    equipos.push(newEquipos);

    const json_equipos = JSON.stringify(equipos)
    fs.writeFileSync('./data/equipos.json', json_equipos, 'utf-8');
    res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
    equipos = equipos.filter(equipo => equipo.id != req.params.id);
    const json_equipos = JSON.stringify(equipos)
    fs.writeFileSync('./data/equipos.json', json_equipos, 'utf-8');
    res.redirect('/');
});



router.get('/team57', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/ARS.json');
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-57', {
        layout: 'team-57',
        data: {
            equipo,
        }
    });
});



router.get('/')

module.exports = router;