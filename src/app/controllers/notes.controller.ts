import express, { Request, Response } from "express"
import Note from "../models/notes.models"

export const notesRoutes = express.Router()
// ------ post data -------
notesRoutes.post('/create-note', async (req: Request, res: Response) => {

    const body = req.body

    // ------- approch - 1 --------
    // const myNote = new Note({
    //     title:"Learing Express",
    //     tags: {
    //         label: "database"
    //     }
    // })
    // await myNote.save()

    // ------- approch - 2 -------
    const note = await Note.create(body)
    
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})

// ----- get all notes -----
notesRoutes.get('/', async (req: Request, res: Response) => {
    const notes = await Note.find()
    res.status(201).json({
        success: true,
        message: "Got all notes",
        notes
    })
})

// ------ get single note ------
notesRoutes.get('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const note = await Note.findById(noteId)
    res.status(201).json({
        success: true,
        message: "Got all notes",
        note
    })
})

// ------ update note -----
notesRoutes.patch('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedBody, {new: true})
    // const note = await Note.updateOne({_id: noteId}, updatedBody, {new: true})
    
    res.status(201).json({
    success: true,
    message: "Note updated successfully",
    note
    })
})

// ------- delte note -------
notesRoutes.delete('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const note = await Note.findByIdAndDelete(noteId)
    // const note = await Note.deleteOne({_id: noteId});
    
    res.status(201).json({
    success: true,
    message: "Deleting successful",
    note
    })
})

