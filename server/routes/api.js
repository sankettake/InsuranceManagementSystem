const express = require("express")
const router = express.Router()
const Policy = require("../models/policy")
const ToDo = require('../models/toDo')
const Request = require('../models/request')
const Note = require('../models/note')
const User = require('../models/user')

router.use((req,res,next) => {
    console.log("Time: ",Date.now())
    next()
})

const getPolicies = async (req,res,next) => {
  const policies = await Policy.find()
  res.send(policies)
}

const getPolicy = async (req,res,next) => {
  const policy = await Policy.findById(req.params.id)
  res.send(policies)
}

const postPolicy = async (req,res,next) => {
  const policy = new Policy(req.body);
  try {
      await policy.save();
      res.send(policy);
    } catch (error) {
      res.status(500).send(error);
    }
}

const deletePolicy = async (req, res, next) =>{
  try {
    const data = await Policy.findByIdAndDelete(req.params.id)
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}


router.get('/policy', getPolicies)
router.get('/policy:id', getPolicy)
router.post('/policy', postPolicy)
router.delete('/policy/:id', deletePolicy)


const getTodos = async (req,res,next) => {
  const toDos = await ToDo.find()
  res.send(toDos)
}

const getToDo = async (req,res,next) => {
  const toDo = await ToDo.findById(req.params.id)
  res.send(toDo)
}

const postToDo = async (req,res,next) => {
  const toDo = new ToDo(req.body);
  try {
      await toDo.save();
      res.send(toDo);
    } catch (error) {
      res.status(500).send(error);
    }
}

const deleteToDo = async (req, res, next) =>{
  try {
    const data = await ToDo.findByIdAndDelete(req.params.id)
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}


router.get('/todo', getTodos)
router.get('/todo:id', getToDo)
router.post('/todo', postToDo)
router.delete('/todo/:id', deleteToDo)

const getNotes = async (req,res,next) => {
  const notes = await Note.find()
  res.send(notes)
}

const getNote = async (req,res,next) => {
  const note = await Note.findById(req.params.id)
  res.send(note)
}

const postNote = async (req,res,next) => {
  const note = new Note(req.body);
  try {
      await note.save();
      res.send(note);
    } catch (error) {
      res.status(500).send(error);
    }
}

const deleteNote = async (req, res, next) =>{
  try {
    const data = await Note.findByIdAndDelete(req.params.id)
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}


router.get('/notes', getNotes)
router.get('/note:id', getNote)
router.post('/note', postNote)
router.delete('/note/:id', deleteNote)

const getUsers = async (req,res,next) => {
  const users = await User.find()
  res.send(users)
}

const getUser = async (req,res,next) => {
  const user = await User.findById(req.params.id)
  res.send(user)
}

const postUser = async (req,res,next) => {
  const user = new User(req.body);
  try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
}

const deleteUser = async (req, res, next) =>{
  try {
    const data = await User.findByIdAndDelete(req.params.id)
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

router.get('/users', getUsers)
router.get('/user:id', getUser)
router.post('/user', postUser)
router.delete('/user/:id', deleteUser)


const getRequests = async (req,res,next) => {
  const requests = await Request.find()
  res.send(requests)
}

const getRequest = async (req,res,next) => {
  const request = await Request.findById(req.params.id)
  res.send(request)
}

const postRequest = async (req,res,next) => {
  const request = new Request(req.body);
  try {
      await request.save();
      res.send(request);
    } catch (error) {
      res.status(500).send(error);
    }
}

const deleteRequest = async (req, res, next) =>{
  try {
    const data = await Request.findByIdAndDelete(req.params.id)
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}


router.get('/request', getRequests)
router.get('/request:id', getRequest)
router.post('/request', postRequest)
router.delete('/request/:id', deleteRequest)


module.exports = router