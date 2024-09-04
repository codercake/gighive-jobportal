exports = async function(payload, response) {

    if (payload.body) {
        const body =  EJSON.parse(payload.body.text());
        const resume = context.services.get("mongodb-atlas").db("sample_jobs").collection("resume");
        
        const resumeDoc = {
            name: body.name,
            user_id: body.user_id,
            date: new Date(),
            text: body.text,
            job_id: BSON.ObjectId(body.job_id)
        };
    
        return await resume.insertOne(resumeDoc);
    }
  
    return  {};
  };