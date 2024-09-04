exports = async function(payload, response) {

    const {jobsPerPage = 20, page = 0} = payload.query;
  
    let query = {};
    if (payload.query.type) {
      query = { $text: { $search: payload.query.type } }
    } else if (payload.query.hybrid) {
      query = { "onsite.hybrid": { $eq: payload.query.hybrid } }
    } else if (payload.query.name) {
      query = { $text: { $search: payload.query.name } }
    }
      
    const collection = context.services.get("mongodb-atlas").db("sample_jobs").collection("jobs");
    let jobsList = await collection.find(query).skip(page*jobsPerPagesPerPage).limit(jobsPerPage).toArray()
  
    jobsList.forEach(job => {
      job._id = job._id.toString();
    });
  
    const responseData = {
      jobs: jobsLists,
      page: page.toString(),
      filters: {},
      entries_per_page: jobsPerPage.toString(),
      total_results: jobsList.length.toString(),
    };
    
    return responseData;
  };
