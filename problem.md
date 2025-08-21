Project Statement: Cloud-Hosted Developer Portfolio with CI/CD

Objective:
To design and deploy a personal developer portfolio website hosted on AWS, demonstrating end-to-end Cloud and DevOps practices including Dockerization, CI/CD automation, and cloud resource management.

Description:
This project aims to create a full-stack portfolio application that showcases my skills, projects, and resume, while also serving as a live demonstration of my cloud and DevOps expertise.

The system will consist of:

Frontend: A responsive web interface (HTML, CSS, JavaScript) with sections for profile, skills, projects, achievements, and contact.

Backend (optional): A Node.js/Flask API to handle dynamic content such as a contact form (storing data in MongoDB/MySQL).

Cloud Hosting:

Static frontend on AWS S3 (static website hosting) or served through Nginx on EC2 (Docker container).

Backend/API containerized with Docker and deployed on AWS EC2.

Assets (images, resume PDF) stored in S3 with versioning enabled.

CI/CD Pipeline: GitHub Actions pipeline integrated with AWS:

On code push → build Docker image → push updates to EC2 instance automatically.

IAM & Security: Setup restricted IAM roles for deployment and secure environment variables.

Monitoring & Logging: AWS CloudWatch for logs and basic uptime monitoring.

Tech Stack:

Frontend: HTML, CSS, JavaScript

Backend: Node.js/Express OR Flask

Cloud: AWS (EC2, S3, IAM, CloudWatch, CLI)

DevOps: Docker, GitHub Actions (CI/CD)

Database (optional): MongoDB/MySQL

Expected Outcome:
A live, cloud-hosted developer portfolio accessible via a public AWS endpoint that demonstrates both software development and cloud deployment skills. This will serve as a professional project to showcase on LinkedIn and during placement interviews.
