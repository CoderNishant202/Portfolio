const express = require('express')
const app = express()
const port = process.env.PORT || '8000'
app.use(express.static('website'))
app.listen(port,()=>{
    console.log(`Server is running at https://localhost:${port}`)
})
