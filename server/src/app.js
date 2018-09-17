const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongo = require("mongodb");
const assert = require("assert");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.Router());
app.set("view engine", "jade");

const url = "mongodb://localhost:27017";

//To get data from the collection create:
app.get("/get-data", function(req, res, next) {
  var resultArray = [];
  mongo.connect(
    url,
    function(err, client) {
      assert.equal(null, err);
      var db = client.db("raf-test");
      var cursor = db.collection("raf-test-collection").find();
      cursor.forEach(
        function(doc, err) {
          assert.equal(null, err);
          resultArray.push(doc);
        },
        function() {
          client.close();
          console.log(resultArray);
          res.send({
            result: resultArray
          });
        }
      );
    }
  );
});

app.get("/insert", function(req, res, next) {
  var item_to_insert = {
    "test-text": "My second mongoDB record",
    "test-number": 321
  };
  mongo.connect(
    url,
    function(err, client) {
      assert.equal(null, err);
      var db = client.db("raf-test");
      db.collection("raf-test-collection").insertOne(item_to_insert, function(
        err,
        result
      ) {
        assert.equal(null, err);
        client.close();
      });
    }
  );
  // on response redirect to the homepage for example
  res.send({
    message: "Record inserted succesfully"
  });
});

// get user
app.post("/get-user", function(req, res, next) {
  //console.info(req);
  var my_query = {};
  my_query.email = 'gomulius@gmail.com';
  var resultArray = [];
  mongo.connect(
    url,
    function(err, client) {
      assert.equal(null, err);
      var db = client.db("raf-test");
      var cursor = db
        .collection("users")
        .find(my_query)
        .toArray(function(err, resultArray) {
          if (err) throw err;
          //console.log(resultArray);
          client.close();
          res.send({
            result: resultArray
          });
        });
    }
  );
});

app.listen(process.env.PORT || 8081);
