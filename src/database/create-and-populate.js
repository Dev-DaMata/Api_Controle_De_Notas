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
            "nome" text,
            "sobrenome" text,
            "serie" varchar(12)
        )`
    },
    {
        entidade:"Tabela Provas Criada",
        query: `CREATE TABLE IF NOT EXISTS "PROVAS" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "materia" numeric,
            "notaMaxima" numeric,
            "numProva" text
        )`,
    },

    {
        entidade:"Tabela Boletim Criada",
        query: `CREATE TABLE IF NOT EXISTS "BOLETIM" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "id_aluno" int NOT NULL,
            "id_prova" int NOT NULL,
            "materia" text NOT NULL,
            "nota" real NOT NULL,
            FOREIGN KEY(id_aluno) REFERENCES ALUNOS(id)
            ON UPDATE CASCADE
            ON DELETE CASCADE,
            FOREIGN KEY(id_prova) REFERENCES PROVAS(id)
            ON UPDATE CASCADE
            ON DELETE CASCADE,
            FOREIGN KEY(materia) REFERENCES PROVAS(materia)
            ON UPDATE CASCADE
            ON DELETE CASCADE
        )`
    }
];

const Population = [
    {
        entidade: "Tabela Alunos Populada",
        query: `INSERT INTO ALUNOS (nome, sobrenome, serie)
        VALUES
            ("Guilherme", "Cordeiro", "1ºC"),
            ("André", "Back", "1ºA");`
    },
    {
        entidade:"Tabela Provas Populada",
        query: `INSERT INTO PROVAS (materia, notaMaxima, numProva )
        VALUES
            ("Matematica", "10", "P1"),
            ("Quimica", "5", "P2"),
            ("Fisica", "10", "P1");`
    },
    {
        entidade:"Tabela Boletim Populada",
        query: `INSERT INTO BOLETIM (id_aluno,  id_prova, materia, nota)
        VALUES
            ("1",  "1", "Matematica", "9"),
            ("2",  "1", "Matematica", "4"),
            ("1",  "2", "Quimica", "4"),
            ("2",  "2", "Quimica", "5"),
            ("1",  "3", "Fisica", "8"),
            ("2",  "3", "Fisica", "10");`
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