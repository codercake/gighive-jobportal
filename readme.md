#GigHive

GigHive is a feature-rich job portal designed to connect job seekers with potential employers. Built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack, GigHive provides advanced search functionality, user-friendly dashboards, real-time notifications, and secure authentication to enhance the job hunting experience.

Features

Job Seekers

Browse job listings with advanced search filters.

Create and update personalized profiles.

Upload and manage resumes.

Get real-time notifications for application status and job updates.

Employers

Post job vacancies and edit listings.

Search and filter candidate profiles.

Manage applications and communicate with applicants.

General

Secure authentication for all users with password hashing (bcrypt) and token-based authentication (jsonwebtoken).

Mobile-first, responsive design for seamless usability across devices.

Personalized dashboards tailored for job seekers and employers.

Project Structure

GigHive/
├── server/
│   ├── api/
│   │   ├── job.controller.js
│   │   ├── resume.controller.js
│   ├── dao/
│   │   ├── jobsDAO.js
│   │   ├── resumeDAO.js
│   ├── model/
│   │   ├── jobSchema.js
│   │   ├── userSchema.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── jobRoutes.js
│   ├── auth.controller.js
│   ├── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── services/
├── .env
├── README.md

Prerequisites

Ensure you have the following installed on your machine:

Node.js

MongoDB

Git

Installation

Clone the Repository

$ git clone https://github.com/itmruser1/GigHive.git
$ cd GigHive

Server Setup

Navigate to the server directory:

$ cd server

Install dependencies:

$ npm install

Create a .env file and add the following environment variables:

RESTREVIEWS_DB_URI=<MongoDB Connection String>
RESTREVIEWS_NS=joblisting_portal
JWT_SECRET=<Your JWT Secret>

Start the server:

$ npm start

Client Setup

Navigate to the client directory:

$ cd ../client

Install dependencies:

$ npm install

Start the client:

$ npm start

License

This project is licensed under the MIT License. See the LICENSE file for details.

MIT License

Copyright (c) 2024 itmruser1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

