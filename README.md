# SinarMas Test Logic
Run The Server :
```markdown
npm install
node app.js
```

### Postman
```markdown
https://www.getpostman.com/collections/262a8131800e8a86dc0e
```

### Get Nilai by ID Nilai
Endpoint : http://localhost:3001/nilai

Set your payload:
```markdown
{
	"id": 3,
	"data": [17, 9, 15, 4, 1, 11]
}
```

### Get Employee Parent by ID
Endpoint : http://localhost:3001/employee

Set your payload :
```markdown
{
"id":40,
"employes": [{
    "employe_id" : 2,
    "supervisor_id" : 11,
    "name": "Jojon"
  },{
    "employe_id" : 11,
    "supervisor_id" : 0,
    "name": "Gogon"
  },{
    "employe_id" : 40,
    "supervisor_id" : 2,
    "name": "Tarzan"
  },{
    "employe_id" : 5,
    "supervisor_id" : 0,
    "name": "Gepeng"
  },{
    "employe_id" : 61,
    "supervisor_id" : 0,
    "name": "Juju"
  },{
    "employe_id" : 17,
    "supervisor_id" : 61,
    "name": "Paul"
  }]
}
```
