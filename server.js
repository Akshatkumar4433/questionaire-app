import express from "express";


const app = express();


//Build a question type data structure
//Which react app will request from server.js
//Lets think about questions 

//random questions from internet
//lets add answer key-value to array
const questionsArray = [
    {
        id: 1,
        prompt: 'Best selling Video Game of All time',
        options: ['gta V', 'Last of US', 'Call of Duty Black Ops', 'CSGO'],
        answer: 'gta V'
    }, 
    {
        id: 2,
        prompt: 'What is the loudest animal on Earth',
        options: ['The sperm Whale', 'Tiger', 'Lion', 'The great white Shark'],
        answer: 'The sperm Whale'
    },
    {
        id: 3,
        prompt: 'Which is the softest mental',
        options: ['Iron', 'Sodium', 'Copper', 'Aluminium'],
        answer: 'Sodium'
    }

]

//Now lets think should react app request whole questionsArray
//or just one question
//sending all questions at once is best solution

app.get('/questions', (request, response) => {
    response.send(questionsArray);
})


app.listen(8000, () => {
    console.log('app is listening at port 8000')
})


