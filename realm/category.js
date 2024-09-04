exports = async function(payload, response) {

    const collection = context.services.get("mongodb-atlas").db("sample_jobs").collection("jobs");
    const type = await collection.distinct("type");
    
    return type;
  };
