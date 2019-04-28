const chai = require('chai'),
    sinon = require('sinon'),
    httpMocks = require('node-mocks-http');
const expect = chai.expect;
var weatherController = require('../../controllers/weatherController'),
    weatherService = require("../../services/weatherService");

let req, res, data, stub, stubForecast;
describe('Test weatherController.js', () => {
    context('Test getWeatherByCityName', () => {
        before(() => {
            console.log("========before");
            req = httpMocks.createRequest();
            req.query = { city: 'london' };
            res = httpMocks.createResponse();
            data = {
                cityName: req.query.city
            };
        });
        after(() => {
            console.log("========after");
            req, res, data = null;
        });
        beforeEach(() => {
            console.log("=====beforeEach");
            stubForecast = sinon.stub(weatherService, 'getForecastByCityName');
            stub = sinon.stub(weatherService, 'getWeatherByCityName');
        });
        afterEach(() => {
            console.log("afterEach");
            stub.restore();
            stubForecast.restore();
        });

        it('should call service method getWeatherByCityName', async () => {
            await weatherController.getWeatherByCityName(req, res);
            expect(stub.calledOnce).to.be.true;
            expect(stub.calledWith(data)).to.be.ok; //sinon-chai

        });

        it('should call service method getForecastByCityName', async () => {
            await weatherController.getForecastByCityName(req, res);
            expect(stubForecast.calledOnce).to.be.true;
            expect(stubForecast.calledWith(data)).to.be.ok;
        });
    });
});