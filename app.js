const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('Belated Birthday , MS Dhoni'))

app.listen(port, () => console.log(`Deployed v2 successfully  ${port}!`))
