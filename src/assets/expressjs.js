let http = require('http');
let fs = require('fs');
let connect = require('connect');
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

let app = express();
let server = app.listen(8081, function () {
    console.log(server.address().address);
});

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

app.use(cors());
app.use(bodyParser.json());

app.get('/', getHeros);
app.post('/', postHeros);


function getHeros(req, resp) {
    console.log('get request');
    resp.setHeader('Context-Type', 'application/json');
    resp.send(JSON.stringify(heros));
}

function postHeros(req, resp) {
    console.log('post');
    console.log('heros', req.body);
    if (req.body.action === 'add') {
        heros.push({
            id: heros.length > 0 ? (heros[heros.length - 1].id + 1) : 10,
            name: req.body.data.name
        })
    } else if (req.body.action === 'update') {
        for (let i = 0; i < heros.length; i++) {
            if (heros[i].id === req.body.data.id) {
                heros[i].name = req.body.data.name;
                break;
            }
        }

    } else if (req.body.action === 'del') {
        console.log(req.body.data.id);
        for (let i = 0; i < heros.length; i++) {
            if (heros[i].id === req.body.data.id) {
                heros.splice(i, 1);
                break;
            }
        }
        console.log(heros);
    }

    resp.setHeader('Context-Type', 'application/json');
    resp.send({
        msg: "succ"
    });
}

let heros = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' }
]