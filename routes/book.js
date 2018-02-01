const express = require('express');
   const router = express.Router();
    const mongoose = require('mongoose');
   const Book = require('../model/book');

router.get('/',(req,res) => { 
//    Book.find().then(books => res.json({ books:books}))
   Book.find(function(err, books) {
       if(err)
       res.send(err)
       res.json({books:books});
   })
});

//create a new book record
router.post('/', (req,res) => {
    // var newBook = new Book( {
    //     name: "12 little brother"
    // });

    // newBook.save(function(err){
    //     if(err) return handleError(err);
    // }
    //)

    Book.create({
        name: "11 little brother"
    }, function(err, book) {
        if(err) 
        res.send(err);

        //get and return al the books after newly created record
        Book.find(function(err,books) {
            if(err)
            res.send(err)
            res.json(books);
        }) ;
    });
})


module.exports = router;