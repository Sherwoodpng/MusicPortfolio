import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "Zach",
    lastName: "Sherwood",
    age: 32
  }
]

//all routes in here are starting with /users
router.get('/', (req, res) => {
  console.log(users);
  console.log("test");
  res.send('Hellosdfsdfsdf');
}); 

export default router;