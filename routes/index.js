var express = require('express');
var router = express.Router();
const upload = require("../utils/upload")
const { loadOriginals, saveOriginals } = require("../utils/data")



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload", (req, res, next) => {

    upload(req, res, function (err) {
      if (err) {
        return res.render("index", { error: err.message });
      }
      if (!req.file) {
        return res.send("not oke");
      }
      
      const originals = loadOriginals();
      originals.push({ filename: req.file.filename })
      saveOriginals(originals)
console.log("original day",originals)
      //erveything went file
     
      return res.render("original", {images : originals, path : "/images/originals/"})

    })
  })

  // router.get('/upload',(req,res,next)=>{
  //   let originals = loadOriginals()
  //   return res.render("original",{images : originals, path : "/images/originals/"})
  // })



module.exports = router;
