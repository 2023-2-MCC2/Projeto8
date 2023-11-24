
require('dotenv').config();
const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"BUBI1996",
    database:"SiteFecap"
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const Nome = req.body.Nome;
    const CodigoP = req.body.CodigoP;
    const Tel = req.body.Tel
    const Endereco = req.body.Endereco
    const Email = req.body.Email;
    const Senha = req.body.Senha;


    db.query("SELECT * FROM usuario WHERE Email = ?", [Email], 
    (err, result) => {
        if (err) {
            res.send(err);
        }
        if (Nome && CodigoP && Tel && Endereco && Email && Senha) { 
            db.query("INSERT INTO usuario (Nome, CodigoP, Tel, Endereco, Email, Senha) VALUES (?, ?, ?, ?, ?, ?)"
                
                 [Nome, CodigoP, Tel, Endereco, Email, Senha], 
                 (err, result) => {
                    if (err) {
                    console.error("Erro ao inserir no banco de dados:", err);
                    res.status(500).send("Erro interno no servidor");
                    return;
                            }

                res.send("Cadastrado");
            });
        }
            else{
                res.status(400).send("Parâmetros ausentes ou inválidos");
            }
    });
});

app.post("/login", (req,res) => {
    const Email = req.body.Email;
    const Senha = req.body.Senha;

    db.query("SELECT * FROM usuario WHERE Email = ? AND Senha = ?", [Email,Senha], (err,result) => {
        if(err){
            req.send(err);
        }
        if(result.length > 0){
            res.send("login efetuado")
        }else{
            res.send("Usuário não cadastrado")
        }
    }) 
})

app.listen(3001, () => {
    console.log(" server running in door 3001")});