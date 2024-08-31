import express from "express";
import cors from "cors";
import jobs from "./api/jobs.route.js";

const app =  express();

const port = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());

app.use("/api/v1/jobs", jobs)
app.use("*", (req, res)=>res.status(404).json({error:"not found"}) )

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});

export default app

