let mongoose = require( 'mongoose' );

let db = 'mongodb://localhost/familias';
//let dbPer = 'mongodb://localhost/personas';

mongoose.connect(db);
//mongoose.connect(dbPer);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + db);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

let close = () => mongoose.connection.close()

exports.close = close;
