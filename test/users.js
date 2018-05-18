let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let models = require('../models/index');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => {
    models.User.destroy({ where: {} }, (err) => {
      done();
    }).then(function () {
      done();
    });
  });
  describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });


  describe('/GET/:id users specific user info', () => {
    it('it should GET specific user info', (done) => {
      var UserInfo = models.User.build({ firstName: 'narayan', lastName: 'sharma', 'email': 'ab@gmail.com' })
        .save()
        .then(function (results) {
          chai.request(server)
            .get('/api/users/'+results.id)
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
     });
    });
  });


  /*
  * Test the /POST route
  */
  describe('/POST users store user information ', () => {
      it('it should not POST a users without pages field', (done) => {
        let users = { firstName: 'narayan', lastName: 'sharma', 'email': 'ab@gmail.com' }      
        chai.request(server)
            .post('/users')
            .send(users)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });
    });
});