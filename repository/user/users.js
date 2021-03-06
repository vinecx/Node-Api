require('dotenv').config();

const database = require("../connection/conn");
const { ObjectId } = require("mongodb");
 
async function getAll() {
    const db = await database.connect();
    return db.collection("Users").find().toArray();
}
 
async function getByID(id) {
    const db = await database.connect();
    return db.collection("Users").findOne({ _id: ObjectId(id) });
}
async function insertDocument(params) {
    const db = await database.connect();
    return db.collection("Users").insertOne(params)
}
async function DeleteByID(id) {
    const db = await database.connect();
    return db.collection("Users").deleteOne({_id: new ObjectId(id)})
}

async function DeleteAll() {
    const db = await database.connect();
    return db.collection("Users").remove()
}

async function Login(user, pwd) {
    const db = await database.connect();
    return db.collection("Login").findOne({ $and: [{userName: `${user}`}, {password: `${pwd}`}]})
}

async function disconnect() {
    return database.disconnect();
}
 
module.exports = { getAll, getByID, insertDocument,disconnect, DeleteAll, DeleteByID, Login }