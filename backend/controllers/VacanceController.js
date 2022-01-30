import Vacance from "../vacance.js"

class VacanceController {
    async create(req, res) {
        try {
            const { skills, vacance, price, description } = req.body
            const vac = await Vacance.create({
                skills,
                vacance,
                price,
                description
            })
            res.send(vac)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async get(req, res) {
        try {
            const { pageSize, page } = req.query
            const vacance = await Vacance.find().skip((pageSize * page) - pageSize).limit(pageSize)
            const totalCount = await Vacance.find().count()
            console.log(`vacance is ${vacance}`)
            res.send({ vacanses: vacance, totalCount })
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default new VacanceController();
