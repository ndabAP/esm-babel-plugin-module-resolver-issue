import app from './router'

const { PORT = 5000 } = process.env
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
