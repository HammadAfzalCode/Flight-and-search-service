const { CityRepository } = require('../repositories/index');

class CityService {
    constructor() {
        this.cityRepository = CityRepository;
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer")
            throw error;

        }
    }
    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer")
            throw error;

        }
    }
    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer")
            throw error;

        }
    }
    async updateCity(cityId, name) {
        try {
            const response = await this.cityRepository.updateCity(cityId, name);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer")
            throw error;

        }
    }
}
module.exports = new CityService();