import chai from "chai";
import chaiHttp from "chai-http";
const server = "http://localhost:8000/api";

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe("Users", () => {
  describe("/GET users", () => {
    it("it should GET all the users", (done) => {
      chai
        .request(server)
        .get("/user")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
    const email = "guduru@gmail.com";
    it("it should GET user with that particular emailId", (done) => {
      chai
        .request(server)
        .get(`/user?email=${email}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.user.should.be.a("object");
          res.body.user.email.should.equal(email);
          done();
        });
    });
  });
  describe("/POST user", () => {
    const user = {
      userName: "chet678",
      fullName: "Guduru",
      password: "Test@123",
      email: "chet678@gmail.com",
    };
    it("If any required field is missing user should not get posted.", (done) => {
      chai
        .request(server)
        .post("/user")
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

describe("Products", () => {
  describe("/GET products", () => {
    it("it should GET all th products", (done) => {
      chai
        .request(server)
        .get("/product")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.products.should.be.a("array");
          done();
        });
    });
  });
  describe("/POST user", () => {
    const product = {
      productName: "My Name",
      price: 3000,
      discount: 30,
      quantity: 53,
    };
    it("If any required field is missing user should not get posted.", (done) => {
      chai
        .request(server)
        .post("/product")
        .send(product)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
