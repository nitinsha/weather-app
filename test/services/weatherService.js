const sinon = require('sinon'),
    request = require('request-promise'),
    chai = require('chai');
const expect = chai.expect;
var weatherService = require('../../services/weatherService');
let getStub, data, options, optionsForecast;
describe('weatherService', () => {
    context('#getWeatherByCityName()', () => {
        before(() => {
            console.log("==========before");
            data = {
                cityName: 'London'
            };
            options = {
                method: 'GET',
                uri: 'https://api.openweathermap.org/data/2.5/weather?q=' + data.cityName + '&appid=798283f8003f79b00814beac0ed2f2e8',
                json: true
            };
            optionsForecast = {
                method: 'GET',
                uri: 'https://api.openweathermap.org/data/2.5/forecast?q=' + data.cityName + '&appid=798283f8003f79b00814beac0ed2f2e8',
                json: true
            };
        });
        after(() => {
            console.log("======after");
            getStub, data, options, optionsForecast = null;
        });
        beforeEach(() => {
            console.log("====beforeEach");
            getStub = sinon.stub(request, 'get');
        });
        afterEach(() => {
            console.log("====afterEach");
            getStub.restore();
        });

        it('should call current weather service', async () => {
            await weatherService.getWeatherByCityName(data);
            expect(getStub.calledOnce).to.be.true;
            expect(getStub.calledWith(options)).to.be.ok;
        })

        it('should call weatherForecast service', async () => {
            await weatherService.getForecastByCityName(data);
            expect(getStub.calledOnce).to.be.true;
            expect(getStub.calledWith(optionsForecast)).to.be.ok;
        })
    })
})