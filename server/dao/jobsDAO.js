import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
let jobs;

export default class JobsDAO {
  static async injectDB(conn) {
    if (jobs) {
      return;
    }
    try {
      jobs = await conn.db(process.env.JOBLISTINGS_PORTAL_NS).collection("jobs");
    } catch (e) {
      console.error(
        `Unable to establish a connection handle in jobsDAO: ${e}`,
      );
    }
  }

  static async getJobs({
    filters = null,
    page = 0,
    jobsPerPage = 20,
  } = {}) {
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

    let cursor;

    try {
      cursor = await jobs.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { jobsList: [], totalNumJobs: 0 };
    }

    const displayCursor = cursor.limit(jobsPerPage).skip(jobsPerPage * page);

    try {
      const jobsList = await displayCursor.toArray();
      const totalNumJobs = await jobs.countDocuments(query);

      return { jobsList, totalNumJobs };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents: ${e}`,
      );
      return { jobsList: [], totalNumJobs: 0 };
    }
  }

  static async getJobsByID(id) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "companies",
            localField: "company",
            let: {
              id: "$id",
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$id", "$$id"],
                  },
                },
              },
              {
                $sort: {
                  date: -1,
                },
              },
            ],
            as: "resume",
          },
        },
      ];
      return await jobs.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getJobsByID: ${e}`);
      throw e;
    }
  }

  static async getRemote() {
    let remote = [];
    try {
      remote = await jobs.distinct("remote");
      return remote;
    } catch (e) {
      console.error(`Something went wrong in getRemote: ${e}`);
      return remote;
    }
  }
}
