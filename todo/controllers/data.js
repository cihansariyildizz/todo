import User from '../models/user.js';
import Todo from '../models/todo.js';

const findData = (req, res, next) => {
    // checks if id exists
    User.findOne({
        where: {
         id: req.params.id
        }
       }).then(user => {
        if (!user) {
         return res.status(404).json({error: 'No User'});
        }
        return res.json(user);
       }).catch(err => {
        console.log('error', err);
    });
};

const todoRead = (req, res, next) => {
    // checks if email already exists
    User.findOne({ where : {
        id: req.params.id, 
    }})
    .then(user=>{
        Todo.findAll({ where: {
            userId: user.id
        },
        order: [['updatedAt', 'DESC']]
    }).then(datas=>{ 
            console.log(datas)
            return res.json(datas)
        }).catch(err => {
            console.log('error', err);
        });
    })

};

const todoPost = (req, res, next) => {

    //find user first, and get the user id.
    User.findOne({ where : {
        id: req.params.id, 
    }})    
    .then(user=>{
        try {
            return Todo.create({
                userId: user.id,
                todos: req.body.todos
            }).then(() => {
                res.status(200).json({message: "Todo created"});
            })
        } catch (err) {
            console.log(err);
            res.status(502).json({ message: "error while creating todo" });
        }
    })

};
   
const todoDelete = (req, res, next) => {
    // checks if id exists
    Todo.destroy({
        where: {
         id: req.params.id
        }
       }).then(()=>{
           res.status(200).json({message: "Todo Deleted"})
       }).catch(err => {
        console.log('error', err);
    });
};
export {findData, todoRead, todoPost, todoDelete};