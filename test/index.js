const request = require('supertest'),
    chai = require('chai'),
    index = require('../index'),
    constants = require('../constants/constants'),
    expect = chai.expect;

describe('index.js', () => {
    context('/weather?cityName=london', () => {
        it('should return current weather for london', (done) => {
            request(index).get('/api/v1/weather/current?city=london')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.message).to.equal(constants.serviceStatus.CITY_WEATHER_FETCHED_SUCCESSFULLY);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.be.not.empty;
                    done();
                });
        });
    });
    context('/weather', () => {
        it('should return error', (done) => {
            request(index).get('/api/v1/weather/current')
                .end((err, res) => {
                    expect(res.status).to.equal(400);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal(constants.controllerStatus.BAD_REQUEST);
                    done();
                });
        })
    })
    context('/forecast?cityName=london', () => {
        it('should return 5 day 3 hour forecast for london', (done) => {
            request(index).get('/api/v1/weather/forecast?city=london')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.message).to.equal(constants.serviceStatus.CITY_FORECAST_FETCHED_SUCCESSFULLY);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.be.not.empty;
                    done();
                });
        })
    })
    context('/forecast', () => {
        it('should return error - Required missing field', (done) => {
            request(index).get('/api/v1/weather/forecast')
                .end((err, res) => {
                    expect(res.status).to.equal(400);
                    expect(res.body).to.be.an('object');
                    expect(res.body.message).to.equal(constants.controllerStatus.BAD_REQUEST);
                    done();
                });
        })
    })
})

