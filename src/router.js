import app from './app'
import user from '@routes/hello-world.route'

app.use('/', user)

export default app
