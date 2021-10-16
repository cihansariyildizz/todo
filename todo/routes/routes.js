import express, { request } from 'express';

import { signup, login, isAuth } from '../controllers/auth.js';
import { findData ,todoRead,todoPost, todoDelete} from '../controllers/data.js';
import user from '../models/user.js';


const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);
router.get('/todo/:id', todoRead);
router.post('/post/:id', todoPost);
router.get('/private', isAuth);
router.delete('/delete/:id', todoDelete);
router.get('/user/:id', findData);


router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;