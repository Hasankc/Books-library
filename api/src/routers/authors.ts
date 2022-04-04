import express  from "express";

import {
    findAll,
    findId,
    creatAuthor,
    updateAuthor,
    deleteAuthor,
    
} from '../controllers/authors'

const router = express.Router()

//Routes
router.post('/', creatAuthor)
router.get('/', findAll)
router.get('/:authorId', findId)
router.put('/:authorId', updateAuthor)
router.delete('/:authorId', deleteAuthor)

export default router
