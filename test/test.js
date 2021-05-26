var expect = require("chai").expect;
var request = require("request");

describe("Change the value of counter", function () {
    describe("Add a number to the counter", function () {
        const url = "http://localhost:3333/api/add/2";
        it("Adds a given number to the counter", function (done) {
            request(url, function (error, response, body) {
                expect(JSON.parse(response.body)).to.deep.equal({ success: true });
                done();
            });
        });
    });

    describe("show the counter", function () {
        const url = "http://localhost:3333/api/show";
        it("shows the counter value", function (done) {
            request(url, function (error, response, body) {
                expect(JSON.parse(response.body)).to.have.property("counter");
                done();
            });
        });
    });

    describe("reset the counter", function () {
        const url = "http://localhost:3333/api/reset";
        it("shows the counter value", function (done) {
            request(url, function (error, response, body) {
                expect(JSON.parse(response.body)).to.deep.equal({ success: true });
                done();
            });
        });
    });
});