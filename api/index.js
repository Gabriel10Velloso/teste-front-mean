let app = require('./config/express');

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node executando na porta ', app.get('port'));
});