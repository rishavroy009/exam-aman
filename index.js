const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
const arr = req.body.data;
console.log(arr);

const userId = "aman_fangeria_24022004";
const emailId = "aman0148.be21@chitkara.edu.in"
const rollNumber= 2110990148;

const alphabetsArr = arr.filter(ch => /[a-zA-Z]/.test(ch)).map(ch => ch.toUpperCase());
const oddNums = arr.filter(item => /^\d+$/.test(item)).filter(item => item % 2 !== 0);
const evenNums = arr.filter(item => /^\d+$/.test(item)).filter(item => item % 2 === 0);



const resp = {
    is_success: true,
    user_id: userId,
    email: emailId,
    roll_number: rollNumber, 
    odd_numbers: oddNums, 
    even_numbers: evenNums,
    alphabets: alphabetsArr
};

res.json(resp);
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
