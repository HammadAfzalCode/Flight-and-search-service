const { CityService } = require('../services/index');

const create = async (req, res) => {
    try {
        const city = await CityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create a city",
            err: error
        })
    }
}
const destroy = async (req, res) => {
    const { id } = req.params
    try {
        const city = await CityService.deleteCity(id)
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete a city",
            err: error
        })
    }
}
const update = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    try {
        const city = await CityService.updateCity({ id, name })
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to update a city",
            err: error
        })
    }
}
const get = async (req, res) => {
    const { id } = req.params
    try {
        const city = await CityService.getCity(id)
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully get a city",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to get a city",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}