const express = require('express');
const app = express();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.status(200).json({ msg: 'Welcome to the weather API' })
);

// define routes
app.use('/api/weather/:city', require('./routes/api/weather'))


 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
