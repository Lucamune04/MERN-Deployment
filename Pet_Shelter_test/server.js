const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

require('./server/config/mongoose.config');

const productRoutes = require('./server/routes/pet.route');
productRoutes(app);

app.listen(8000, () => console.log('listening now!'));