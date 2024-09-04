exports = async function(payload, response) {

    if (payload.body) {
        const body =  EJSON.parse(payload.body.text());
        const resume = context.services.get("mongodb-atlas").db("sample_jobs").collection("resume");
        const date = new Date()
    
        const updateResponse = await resume.updateOne(
          { user_id: body.user_id, _id: BSON.ObjectId(body.resume)},
          { $set: { text: body.text, date: date  } },
        )
  
        return updateResponse
      }
  
    return  {};
  };
