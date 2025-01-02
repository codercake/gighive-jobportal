# GigHive

**GigHive** is a feature-rich job portal designed to connect job seekers with potential employers. Built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack, GigHive provides advanced search functionality, user-friendly dashboards, real-time notifications, and secure authentication to enhance the job hunting experience.

<img width="1680" alt="Screenshot 2025-01-01 at 19 47 57" src="https://github.com/user-attachments/assets/27d226df-1f4b-4dfc-beaf-2fb7e2f17acd" />

## Features

### Job Seekers
- Browse job listings with advanced search filters.
- Create and update personalized profiles.
- Upload and manage resumes.
- Get real-time notifications for application status and job updates.

### Employers
- Post job vacancies and edit listings.
- Search and filter candidate profiles.
- Manage applications and communicate with applicants.

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Installation

### Clone the Repository
```bash
$ git clone https://github.com/codercake/gighive-jobportal.git
$ cd gighive-jobportal
```

### Server Setup
1. Navigate to the `server` directory:
   ```bash
   $ cd server
   ```
2. Install dependencies:
   ```bash
   $ npm install
   ```
3. Create a `.env` file and add the following environment variables:
   ```env
   RESTREVIEWS_DB_URI=<MongoDB Connection String>
   RESTREVIEWS_NS=joblisting_portal
   ```
4. Start the server:
   ```bash
   $ npm start
   ```

### Client Setup
1. Navigate to the `client` directory:
   ```bash
   $ cd ../client
   ```
2. Install dependencies:
   ```bash
   $ npm install
   ```
3. Start the client:
   ```bash
   $ npm start
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

```text
MIT License

Copyright (c) 2024 codercake

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
```

