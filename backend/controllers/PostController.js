import Resume from '../resume.js'

class ResumeController {
    async createResume(req, res) {
        try {
            const resume = await Resume.create(req.body)
            res.send(resume)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getResumes(req, res) {
        try {
            const {count, page} = req.query
            const resumes = await Resume.find().skip((count*page)-page).limit(page)
            let totalCount = await Resume.find().count()
            console.log(totalCount)
            res.send({resumes,totalCount})
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getResumeById(req, res) {
        try {
            let resume = await Resume.findById(req.params.id)
            res.send(resume)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default new ResumeController()
