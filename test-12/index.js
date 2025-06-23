let express = require('express')
let salon = express()
let PORT = 3000

let cars = [
  { id: 1, model: 'Toyota Camry', owner: 'Айбек' },
  { id: 2, model: 'Hyundai Sonata', owner: 'Аружан' },
  { id: 3, model: 'Kia Sportage', owner: 'Нұржан' }
];


salon.use(express.json())
salon.get('/cars', (req, res) => {
  let { model, owner, sort } = req.query;
  let result = [...cars];

  if (model) {
    result = result.filter(cars => cars.model.toLowerCase().includes(model.toLowerCase()));
  }

  if (owner) {
    result = result.filter(cars => cars.owner === owner);
  }


  res.json(result);
});

salon.post('/cars',(req,res)=>{
    let {login, email, password} = req.body
    if(login && email && password){
        res.json({
            message: "User recieved!",
            login,
            email,
            password
        })
    }else{
        
    }
})


salon.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})