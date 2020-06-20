const mongoose = require('mongoose');

    mongoose.connect('mongodb+srv://apidb:admin@cluster0.ezvme.mongodb.net/apiexpressdb?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.Promise = global.Promise;

    mongoose.set('useFindAndModify', false);

module.exports = mongoose;