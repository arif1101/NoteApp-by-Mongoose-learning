import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
import { notesRoutes } from './app/controllers/notes.controller';
import { userRoutes } from './app/controllers/user.controller';

const app: Application = express();
app.use(express.json())

app.use("/notes", notesRoutes)
app.use("/user", userRoutes)


app.get('/', (req: Request, res: Response)=> {
    res.send("welcome to Note notesRoutes")
})

export default app;