
const chakram = require('chakram');

const { expect } = require('chakram');

describe('Reset DB', () => {
  
      before(() => {
        let response = chakram.post("http://localhost:3000/reset");
        expect(response).to.have.status(200);
        let getresponse = chakram.get("http://localhost:3000/todos/")
        expect(getresponse).to.comprise.of.json({});
        return chakram.wait();
    });

    describe('positive test 1', () => {

        it("create task and check response status", () => {
            let task = {
                "text": "todo",
                "completed": false,
                "id": 1,
              };
            let response = chakram.post("http://localhost:3000/todos", task);
            expect(response).to.have.status(201);
            return chakram.wait();
        })  

        it("check data", () =>{  
            let response = chakram.get("http://localhost:3000/todos/1")
            expect(response).to.have.json({
                "text": "todo",
                "completed": false,
                "id": 1
              });
            return chakram.wait();
            })
  
        })  
})
