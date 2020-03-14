var express = require("express");
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.listen(3001, () => {
 console.log("Server running on port 3001");
});



const filterNilai = (n, data) => {
  i = 0,
  l = data.length;
  while (i < l) {
    if (data[i] % 2 === 0) {
      data.push(data.splice(i, 1)[0]);
        l--;
        continue;
    }
    i++;
  }
  
  data.sort(function(a,b){ return b-a; });
  //return data;
  let nilai;
    data.forEach((item, i) => {
      if (i+1 == n) {
        nilai = item;
      }
    });
  return nilai;
};

const filterEmployee = (employes, n) => {
  var data = []
  for(var i in employes) {
      if(employes[i].employe_id == n) {
          var supervisor = filterEmployee(employes, employes[i].supervisor_id)

          if(supervisor.length) {
            employes[i].supervisor = supervisor
          }
          data.push(employes[i])
      }
  }
  return data
}

// Nomor 1
app.post('/nilai/', (req, res, next) => {
  const n = req.body.id; //2
  const data = req.body.data; // [17, 9, 15, 4, 1, 11];
  // const n = 4;
  // const data = [17, 9, 15, 4, 1, 11];
  const getNilai = filterNilai(n,data)
  console.log(getNilai);
  return res.status(201).json({status: 'ok', data: getNilai });
});


// Nomor 2
app.post('/employee', (req, res, next) => {
  const n = req.body.id; //11
  const employes =  req.body.employes;
  var getEmployee = filterEmployee(employes,n);
  console.log(getEmployee);
  return res.status(201).json({status: 'ok', data: getEmployee });
});
