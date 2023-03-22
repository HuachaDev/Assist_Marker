
const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));


app.use('/attendance', require('./services/attendance'));

app.listen(app.get('port'), () => {
     console.log('Server is in port', app.get('port'));
});





