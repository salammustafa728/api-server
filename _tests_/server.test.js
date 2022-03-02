const server = require("../src/server");
const supertest = require("supertest");
const { db } = require("../src/models/index");
const request = supertest(server.app);
let id;
describe("test API server ", () => {
  it("testing /", async () => {
    const response = await request.get("/");
    expect(response.text).toEqual("Home");
    expect(response.status).toEqual(200);
  });
  it("test bad route", async () => {
    const response = await request.get("/badroute");
    expect(response.status).toEqual(404);
  });
  it("test bad method", async () => {
    const response = await request.put("/");
    expect(response.status).toEqual(404);
  });
});
beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});
//DB tests
// test cloths routes
describe("test API server for cloths route ", () => {
 
  it('testing all clothes',async()=>{
    const response = await request.get('/cloths')
    expect(response.status).toEqual(200)
})
it ('post new clothes', async () => {
    const response = await request.post('/cloths').send({
      clothsName: "nametest",
      clothsInfo : "Infotest"
    });
    expect(response.status).toEqual(201);
    id = response.body.id
});
    
it ('testing cloths get by id',async()=>{
   const response = await request.get(`/cloths/${id}`)
   expect(response.status).toEqual(200);
})


it ('update clothes', async () => {
const response = await request.put(`/cloths/${id}`).send({
  clothsName: "test",
  clothsInfo : "test"
})
expect(response.status).toEqual(201);
})
it ('delete by id',async()=>{
const response = await request.delete(`/cloths/${id}`)
expect(response.status).toEqual(204)

})
});

// test food route

describe("test API server for food route", () => {
 
  it('testing all foodInfo',async()=>{
    const response = await request.get('/food')
    expect(response.status).toEqual(200)
})
it ('post new foodInfo', async () => {
    const response = await request.post('/food').send({
      foodName: "nametest",
      foodInfo : "Infotest"
    });
    expect(response.status).toEqual(201);
    id = response.body.id
});
    
it ('testing foodInfo get by id',async()=>{
   const response = await request.get(`/food/${id}`)
   expect(response.status).toEqual(200);
})


it ('update foodInfo', async () => {
const response = await request.put(`/food/${id}`).send({
  foodName: "test",
  foodInfo : "test"
})
expect(response.status).toEqual(201);
})
it ('delete by id',async()=>{
const response = await request.delete(`/food/${id}`)
expect(response.status).toEqual(204)

})
});
