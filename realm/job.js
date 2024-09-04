// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const id = payload.query.id || ""
  
    const jobs = context.services.get("mongodb-atlas").db("sample_jobs").collection("jobs");
  
    const pipeline = [
      {
          $match: {
              _id: BSON.ObjectId(id),
          },
      },
            {
                $lookup: {
                    from: "resume",
                    let: {
                        id: "$_id",
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$job_id", "$$id"],
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
            {
                $addFields: {
                    reviews: "$resume",
                },
            },
        ]
        
        jobs = await jobs.aggregate(pipeline).next()
        jobs._id = jobs._id.toString()
        
        jobs.resume.forEach(resume => {
          resume.date = new Date(resume.date).toString()
          resume._id = resume._id.toString();
        });
    return job
  };
