import  sqlite3  from "sqlite3";
import {dirname} from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const DATABASE_SCHEMA = [
    {
        entidade: "Tabela Alunos Criada",
        query: `CREATE TABLE IF NOT EXISTS "ALUNOS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "nomeCompleto" text,
            "serie" varchar(12)
        )`
    },
    {
        entidade:"Tabela Provas Criada",
        query: `CREATE TABLE IF NOT EXISTS "PROVAS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "materia" numeric,
            "notaMaxima" numeric,
            "data" text
        )`,
    },

    {
        entidade:"Tabela Boletim Criada",
        query: `CREATE TABLE IF NOT EXISTS "BOLETIM" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "id_aluno" int NOT NULL,
            "id_prova" int NOT NULL,
            "nota" real NOT NULL,
            FOREIGN KEY(id_aluno) REFERENCES ALUNOS(id)
            ON UPDATE CASCADE
            ON DELETE CASCADE,
            FOREIGN KEY(id_prova) REFERENCES AVALIACOES(id)
            ON UPDATE CASCADE
            ON DELETE CASCADE
        )`
    }
];

const Population = [
    {
        entidade: "Tabela Alunos Populada",
        query: `INSERT INTO ALUNOS (nomeCompleto, serie)
        VALUES
            ("Guilherme Cordeiro", "1ºC"),
            ("André Back", "1ºA");`
    },
    {
        entidade:"Tabela Provas Populada",
        query: `INSERT INTO PROVAS (materia, notaMaxima, data)
        VALUES
            ("Matematica", "10", "2022/09/20"),
            ("Quimica", "5", "2022/05/15"),
            ("Fisica", "10", "2022/09/25");`
    },
    {
        entidade:"Tabela Boletim Populada",
        query: `INSERT INTO BOLETIM (id_aluno, id_prova, nota)
        VALUES
            ("1", "1", "9"),
            ("2", "1", "4"),
            ("1", "2", "4"),
            ("2", "2", "5"),
            ("1", "3", "8"),
            ("2", "3", "10");`
    }
]

function criaTabelas(...query){
    query.forEach((query)=>{
        db.all(query.query, (error)=>{
            if (error) {
                console.log(error.message);
            } else {
                console.log(query.entidade);
            }
        });
    });
}

db.serialize(()=>{
    criaTabelas(...DATABASE_SCHEMA);
    criaTabelas(...Population)
})