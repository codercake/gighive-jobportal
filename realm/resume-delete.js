exports = async function(payload, response) {
  
    const resume = context.services.get("mongodb-atlas").db("sample_jobs").collection("resume");
    const deleteResponse = await resume.deleteOne({
      _id: BSON.ObjectId(payload.query.id)
    })
  
    return deleteResponse
      
  };
