const { where } = require('sequelize');
const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the respository layer")
            throw error;
        }
    }
    async deleteCity(cityId) {
        try {
            const city = await City.destroy({ where: { id: cityId } });
            return true;
        } catch (error) {
            console.log("Something went wrong in the respository layer")
            throw error;
        }
    }
    async getCity(cityId) {
        try {
            const city = await City.findOne({ where: { id: cityId } });
            // const city = await City.findBykPk(cityId);     // find by primary key 
            return city;
        } catch (error) {
            console.log("Something went wrong in the respository layer")
            throw error;
        }
    }
    async updateCity({ id, name }) {
        try {
            const city = await City.findByPk(id);
            city.name = name
            await city.save()
            // const city = await City.findBykPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the respository layer")
            throw error;
        }
    }
}

module.exports = new CityRepository();