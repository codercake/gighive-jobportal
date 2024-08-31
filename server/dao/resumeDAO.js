import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let resume

export default class ResumeDAO {
  static async injectDB(conn) {
    if (resume) {
      return
    }
    try {
      resume = await conn.db(process.env.JOBLISTINGS_PORTAL_NS).collection("resume")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addResume(jobId, user, resume, date) {
    try {
      const reviewDoc = { name: user.name,
          user_id: user._id,
          date: date,
          text: resume,
          job_id: ObjectId(jobId), }

      return await resume.insertOne(reviewDoc)
    } catch (e) {
      console.error(`Unable to post resume: ${e}`)
      return { error: e }
    }
  }

  static async updateResume(resumeId, userId, text, date) {
    try {
      const updateResponse = await resume.updateOne(
        { user_id: userId, _id: ObjectId(resumeId)},
        { $set: { text: text, date: date  } },
      )

      return updateResponse
    } catch (e) {
      console.error(`Unable to update resume: ${e}`)
      return { error: e }
    }
  }

  static async deleteResume(resumeId, userId) {

    try {
      const deleteResponse = await resume.deleteOne({
        _id: ObjectId(resumeId),
        user_id: userId,
      })

      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete resume: ${e}`)
      return { error: e }
    }
  }

}