import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
let jobs;

export default class JobsDAO {
    static async injectDB(conn) {
        if (jobs) return;
        try {
            jobs = await conn.db(process.env.RESTREVIEWS_NS).collection("jobs");
        } catch (e) {
            console.error(`Unable to establish a collection handle in jobsDAO: ${e}`);
        }
    }

    static async getJobs({ filters = null, page = 0, jobsPerPage = 20 } = {}) {
        let query = {};
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters["name"] } };
            } else if ("remote" in filters) {
                query = { "remote": { $eq: filters["remote"] } };
            } else if ("hybrid" in filters) {
                query = { "hybrid.onsite": { $eq: filters["hybrid"] } };
            }
        }

        try {
            const cursor = await jobs.find(query).limit(jobsPerPage).skip(jobsPerPage * page);
            const jobsList = await cursor.toArray();
            const totalNumJobs = await jobs.countDocuments(query);

            return { jobsList, totalNumJobs };
        } catch (e) {
            console.error(`Unable to fetch jobs: ${e}`);
            return { jobsList: [], totalNumJobs: 0 };
        }
    }

    static async getJobByID(id) {
        try {
            const pipeline = [
                { $match: { _id: new ObjectId(id) } },
                {
                    $lookup: {
                        from: "companies",
                        localField: "company",
                        as: "company_details"
                    }
                }
            ];
            return await jobs.aggregate(pipeline).next();
        } catch (e) {
            console.error(`Something went wrong in getJobByID: ${e}`);
            throw e;
        }
    }

    static async getRemote() {
        try {
            return await jobs.distinct("remote");
        } catch (e) {
            console.error(`Something went wrong in getRemote: ${e}`);
            return [];
        }
    }
}
