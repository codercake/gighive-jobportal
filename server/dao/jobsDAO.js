import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
let jobs;

export default class JobsDAO {
    static async injectDB(conn) {
        if (jobs) return;
        try {
            jobs = await conn.db(process.env.RESTREVIEWS_NS).collection("jobs");
        } catch (e) {
            const errorMessage =
                process.env.NODE_ENV === "production"
                    ? "Unable to connect to the database."
                    : `Unable to establish a collection handle in jobsDAO: ${e}`;
            console.error(errorMessage);
        }
    }
    
    static async getJobs({ filters = null, page = 0, jobsPerPage = 20 } = {}) {
        const jobsPerPageInt = Number.isInteger(jobsPerPage) && jobsPerPage > 0 ? jobsPerPage : 20;
        const pageInt = Number.isInteger(page) && page >= 0 ? page : 0;

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
            const cursor = await jobs
                .find(query)
                .limit(jobsPerPageInt)
                .skip(jobsPerPageInt * pageInt);

            const jobsList = await cursor.toArray();
            const totalNumJobs = await jobs.countDocuments(query);

            return { jobsList, totalNumJobs };
        } catch (e) {
            const errorMessage =
                process.env.NODE_ENV === "production"
                    ? "Unable to fetch jobs."
                    : `Unable to fetch jobs: ${e}`;
            console.error(errorMessage);
            return { jobsList: [], totalNumJobs: 0 };
        }
    }

    // Improved error handling in getJobByID
    static async getJobByID(id) {
        try {
            const pipeline = [
                { $match: { _id: new ObjectId(id) } },
                {
                    $lookup: {
                        from: "companies",
                        localField: "company",
                        as: "company_details",
                    },
                },
            ];
            return await jobs.aggregate(pipeline).next();
        } catch (e) {
            const errorMessage =
                process.env.NODE_ENV === "production"
                    ? "Error fetching job details."
                    : `Something went wrong in getJobByID: ${e}`;
            console.error(errorMessage);
            throw e;
        }
    }

    // Improved error handling in getRemote
    static async getRemote() {
        try {
            return await jobs.distinct("remote");
        } catch (e) {
            const errorMessage =
                process.env.NODE_ENV === "production"
                    ? "Error fetching remote jobs."
                    : `Something went wrong in getRemote: ${e}`;
            console.error(errorMessage);
            return [];
        }
    }
}
