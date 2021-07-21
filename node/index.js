const express = require("express")
const app = express()
const port = 3000
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
}

const mysql = require("mysql")
const connection = mysql.createConnection(config)

const sql = `insert into people (name) values ("Thyago Tavares")`
connection.query(sql)

const rows = connection.query('SELECT * FROM people')

people = ""

connection.query(
    'SELECT * FROM people', 
    (err, rows) => {
    if (err) throw err

    people += "<ul>"

    rows.forEach(row => {
        //console.log(`Id: ${row.id} - Name:  ${row.name}`)
        people += "<li>" + row.name + "</li>"
    });

    people += "</ul>"

})

connection.end()

app.get("/", (req, res) => {
    res.send("<h1>Full Cycle</h1><div id='container'>" + people + "</div>")
})

app.listen(port, ()=> {
    console.log("Rodando na porta: " + port)
})