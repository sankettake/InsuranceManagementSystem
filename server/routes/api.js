const express = require("express")
const router = express.Router()
const Policy = require("../models/policy")
const ToDo = require('../models/toDo')
const db = require("../connection")

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

module.exports = router