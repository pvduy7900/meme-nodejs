const fs = require('fs')
const path = require('path')

const pathToOriginal = path.join(__dirname, '../data.json') //
const pathMeme = path.join(__dirname, '../memes.json')

const loadOriginals = () => {
    try {
        const buffer = fs.readFileSync(pathToOriginal)
        const string = buffer.toString()
        return JSON.parse(string)
    } catch (err) {
        return []
    }
}

const loadMemmes = () =>{
    try{
        const buffer = fs.readFileSync(pathMeme)
        const string = buffer.toString()
        return JSON.parse(string)
    }catch(err){
        return []
    }
}

const saveOriginals = data =>{
    fs.writeFileSync(pathToOriginal, JSON.stringify(data))
}
const saveMemes = data =>{
    fs.writeFileSync(pathMeme, JSON.stringify(data))
}

module.exports = {loadMemmes,loadOriginals,saveOriginals,saveMemes}


