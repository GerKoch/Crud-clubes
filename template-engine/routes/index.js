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

router.get('/team58', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/AST.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-58', {
        layout: 'team-58', 
        data: {
            equipo,
        } 
    });
});

router.get('/team61', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/CHE.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-61', {
        layout: 'team-61', 
        data: {
            equipo,
        } 
    });
});

router.get('/team62', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/EVE.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-62', {
        layout: 'team-62',
        data: {
            equipo,
        }
    });
});

router.get('/team64', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/LIV.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-64', {
        layout: 'team-64',
        data: {
            equipo,
        }
    });
});

router.get('/team65', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/MCI.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-65', {
        layout: 'team-65',
        data: {
            equipo,
        }
    });
});

router.get('/team66', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/MUN.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-66', {
        layout: 'team-66',
        data: {
            equipo,
        }
    });
});

router.get('/team67', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/NEW.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-67', {
        layout: 'team-67',
        data: {
            equipo,
        }
    });
});

router.get('/team68', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/NOR.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-68', {
        layout: 'team-68',
        data: {
            equipo,
        }
    });
});

router.get('/team73', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/TOT.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-73', {
        layout: 'team-73',
        data: {
            equipo,
        }
    });
});

router.get('/team76', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/WOL.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-76', {
        layout: 'team-76',
        data: {
            equipo,
        }
    });
});

router.get('/team328', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/BUR.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-328', {
        layout: 'team-328',
        data: {
            equipo,
        }
    });
});

router.get('/team338', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/LEI.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-338', {
        layout: 'team-338',
        data: {
            equipo,
        }
    });
});

router.get('/team340', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/SOU.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-340', {
        layout: 'team-340',
        data: {
            equipo,
        }
    });
});

router.get('/team346', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/WAT.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-346', {
        layout: 'team-346',
        data: {
            equipo,
        }
    });
});

router.get('/team354', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/CRY.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-354', {
        layout: 'team-354',
        data: {
            equipo,
        }
    });
});

router.get('/team356', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/SHE.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-356', {
        layout: 'team-356',
        data: {
            equipo,
        }
    });
});

router.get('/team397', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/BHA.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-397', {
        layout: 'team-397',
        data: {
            equipo,
        }
    });
});

router.get('/team563', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/WHU.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-563', {
        layout: 'team-563',
        data: {
            equipo,
        }
    });
});

router.get('/team1044', (req, res) => {
    const json_equipo = fs.readFileSync('./data/equipos/BOU.json')
    let equipo = JSON.parse(json_equipo);
    res.render('home_team-1044', {
        layout: 'team-1044',
        data: {
            equipo,
        }
    });
});

router.get('/')

module.exports = router;