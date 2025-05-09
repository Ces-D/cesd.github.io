Here’s my study plan for the **AWS Certified Developer – Associate (DVA-C02)** certification.

---

Here's a **detailed 12-week (3-month) week-by-week study guide** for the AWS Certified Developer – Associate (DVA-C02) certification. This guide is structured to progressively build your knowledge across the exam’s core domains, with clear weekly goals and end-of-week expectations.

---

## 🗓️ Week 1: Introduction to AWS & Exam Overview

**Topics:**

- Understand AWS global infrastructure
- Explore the DVA-C02 exam guide and domains
- Overview of IAM, EC2, S3, and CLI tools

**Activities:**

- Create an AWS Free Tier account
- Familiarize with AWS Console and documentation
- Watch official AWS exam overview video

**Expected by Week’s End:**

- Understand the exam structure and key services
- Successfully use the AWS CLI to create and list S3 buckets
- Read IAM basics and create a user with permissions

| Day         | Focus                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mon**     | Read the [DVA-C02 Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf); understand exam domains |
| **Tue**     | Create AWS Free Tier account; explore AWS Console & Services (EC2, S3, Lambda)                                                                                                  |
| **Wed**     | Install & configure AWS CLI; list S3 buckets and use basic CLI commands                                                                                                         |
| **Thu**     | Read IAM Overview: users, roles, policies, groups                                                                                                                               |
| **Fri**     | Create IAM users and roles; attach custom and managed policies                                                                                                                  |
| **Sat/Sun** | **Rest or review**: Skim FAQs for EC2, S3, IAM                                                                                                                                  |

---

## 🗓️ Week 2: IAM, Authentication, and Authorization

**Topics:**

- IAM Users, Roles, Policies, and Groups
- Resource-based vs identity-based policies
- Temporary credentials (STS)

**Activities:**

- Create IAM roles and policies in practice
- Write custom JSON policies
- Learn about Cognito (basic overview)

**Expected by Week’s End:**

- Confidently write and apply IAM policies
- Understand authentication/authorization flow in AWS
- Complete IAM-focused labs or quizzes

| Day         | Focus                                                              |
| ----------- | ------------------------------------------------------------------ |
| **Mon**     | Identity-based vs resource-based policies; test inline and managed |
| **Tue**     | Practice writing JSON policies with conditions and actions         |
| **Wed**     | Learn AWS STS, temporary credentials, IAM role chaining            |
| **Thu**     | Introduction to Cognito: identity pools vs user pools              |
| **Fri**     | Quiz yourself: IAM scenario questions (e.g., ACG, Tutorials Dojo)  |
| **Sat/Sun** | **Rest** or rewatch IAM-specific AWS re\:Invent sessions           |

---

## 🗓️ Week 3: Compute: Lambda, EC2, and Elastic Beanstalk

**Topics:**

- AWS Lambda core concepts
- EC2 instance roles and setup
- Overview of Elastic Beanstalk (deployment options)

**Activities:**

- Write and deploy a simple Lambda function
- Launch EC2, SSH into it, and install a simple app
- Deploy a sample app with Elastic Beanstalk

**Expected by Week’s End:**

- Understand when to use Lambda vs EC2
- Know how to configure execution roles and policies
- Complete a hands-on lab for Lambda or Beanstalk

| Day         | Focus                                                                |
| ----------- | -------------------------------------------------------------------- |
| **Mon**     | Read Lambda docs, create a basic function in the Console             |
| **Tue**     | Set environment variables and IAM roles for Lambda                   |
| **Wed**     | Launch an EC2 instance, SSH into it, install a Node.js or Python app |
| **Thu**     | Deploy app with Elastic Beanstalk, explore deployment types          |
| **Fri**     | Compare compute services: when to use Lambda vs EC2 vs Beanstalk     |
| **Sat/Sun** | **Rest** or complete AWS Skill Builder Lambda module                 |

---

## 🗓️ Week 4: API Gateway & Application Integration

**Topics:**

- REST APIs and WebSocket APIs in API Gateway
- Integration with Lambda and VPC links
- Error handling, throttling, and usage plans

**Activities:**

- Create an API Gateway endpoint triggering a Lambda
- Add input validation and throttling
- Read about Cognito integration with API Gateway

**Expected by Week’s End:**

- Build a RESTful API with API Gateway + Lambda
- Understand stages, deployments, and throttling

| Day         | Focus                                                      |
| ----------- | ---------------------------------------------------------- |
| **Mon**     | Create a REST API with API Gateway linked to Lambda        |
| **Tue**     | Add query parameters, validation, and response mapping     |
| **Wed**     | Secure API with API Keys or IAM; read about usage plans    |
| **Thu**     | Study WebSocket APIs and when to use them                  |
| **Fri**     | Practice: Build a mini CRUD API using Lambda + API Gateway |
| **Sat/Sun** | **Rest** or review API Gateway FAQs and pricing page       |

---

## 🗓️ Week 5: Storage: S3, DynamoDB, and EFS

**Topics:**

- S3: lifecycle policies, versioning, encryption
- DynamoDB: partition keys, indexes, capacity modes
- Brief: EFS and when to use it

**Activities:**

- Upload/download S3 files via CLI
- Create a DynamoDB table and perform CRUD via SDK
- Explore DynamoDB Streams and TTL

**Expected by Week’s End:**

- Understand S3 vs EFS vs DynamoDB use cases
- Write basic DynamoDB queries using the AWS SDK
- Know how to secure S3 buckets (ACLs, bucket policies)

| Day         | Focus                                                    |
| ----------- | -------------------------------------------------------- |
| **Mon**     | Explore S3 lifecycle, versioning, and bucket policies    |
| **Tue**     | Practice S3 CLI commands: upload, download, permissions  |
| **Wed**     | Intro to DynamoDB: create table, insert and query items  |
| **Thu**     | DynamoDB indexes, capacity modes, and TTL; scan vs query |
| **Fri**     | Compare S3 vs DynamoDB vs EFS use cases and limitations  |
| **Sat/Sun** | **Rest** or test yourself with DynamoDB quizzes          |

---

## 🗓️ Week 6: Asynchronous Patterns (SNS, SQS, EventBridge)

**Topics:**

- Message queues vs pub/sub
- SQS Standard vs FIFO
- SNS topics and fanout architecture
- EventBridge for event-driven architecture

**Activities:**

- Create SQS queues, send/receive messages
- Configure SNS + Lambda fanout
- Setup EventBridge rule triggering a Lambda

**Expected by Week’s End:**

- Be confident in choosing SNS vs SQS vs EventBridge
- Build a basic event-driven pipeline

| Day         | Focus                                                         |
| ----------- | ------------------------------------------------------------- |
| **Mon**     | SQS: create queues, send/receive messages using SDK           |
| **Tue**     | FIFO queues, deduplication, visibility timeout settings       |
| **Wed**     | SNS: create a topic, subscribe Lambda, explore fanout pattern |
| **Thu**     | Use EventBridge to trigger Lambda based on service events     |
| **Fri**     | Build a mini pipeline with S3 → EventBridge → Lambda          |
| **Sat/Sun** | **Rest** or review EventBridge and messaging FAQs             |

---

## 🗓️ Week 7: CI/CD on AWS

**Topics:**

- AWS CodeCommit, CodeBuild, CodePipeline
- Deploy with Elastic Beanstalk and Lambda
- Integration with GitHub and Bitbucket

**Activities:**

- Create a sample CodePipeline from GitHub to Lambda
- Use CodeBuild to run tests and package your app

**Expected by Week’s End:**

- Understand CI/CD workflows in AWS
- Deploy a simple app using automated pipeline

| Day         | Focus                                                    |
| ----------- | -------------------------------------------------------- |
| **Mon**     | CodeCommit: Create a repo, push sample app               |
| **Tue**     | CodeBuild: Buildspec.yml, environment variables          |
| **Wed**     | CodePipeline: automate deployment of Lambda or Beanstalk |
| **Thu**     | Integrate CodePipeline with GitHub                       |
| **Fri**     | Review CI/CD best practices, permissions, and rollback   |
| **Sat/Sun** | **Rest** or watch CodePipeline deep dive (AWS YouTube)   |

---

## 🗓️ Week 8: Monitoring & Debugging

**Topics:**

- CloudWatch Logs, Metrics, Dashboards
- X-Ray for tracing
- Alarms and custom metrics

**Activities:**

- Create alarms for Lambda and EC2
- Enable X-Ray for a sample Lambda function
- Set retention policies for logs

**Expected by Week’s End:**

- Use logs and metrics to troubleshoot effectively
- Understand how to instrument an app for X-Ray

| Day         | Focus                                                 |
| ----------- | ----------------------------------------------------- |
| **Mon**     | CloudWatch Logs: create log groups, use filters       |
| **Tue**     | Metrics: create dashboards, custom metrics            |
| **Wed**     | CloudWatch Alarms and notifications with SNS          |
| **Thu**     | X-Ray: enable tracing for Lambda and analyze segments |
| **Fri**     | Monitor EC2, Lambda, API Gateway performance data     |
| **Sat/Sun** | **Rest** or complete CloudWatch labs on SkillBuilder  |

---

## 🗓️ Week 9: Security & Encryption

**Topics:**

- KMS (Key Management Service)
- Secrets Manager vs Parameter Store
- Encryption at rest and in transit

**Activities:**

- Encrypt an S3 bucket using KMS
- Store a secret in Secrets Manager and access it from Lambda
- Review compliance-related services like AWS Shield, WAF, and GuardDuty

**Expected by Week’s End:**

- Apply encryption and secret management best practices
- Understand the difference between symmetric/asymmetric keys in KMS

| Day         | Focus                                                      |
| ----------- | ---------------------------------------------------------- |
| **Mon**     | KMS: create CMKs, encrypt/decrypt files with CLI           |
| **Tue**     | Parameter Store and Secrets Manager: differences and usage |
| **Wed**     | Use Secrets Manager with Lambda securely                   |
| **Thu**     | Learn about Shield, GuardDuty, and WAF                     |
| **Fri**     | Practice encryption in S3 and DynamoDB                     |
| **Sat/Sun** | **Rest** or review KMS/Secrets whitepapers                 |

---

## 🗓️ Week 10: Application Troubleshooting & Resiliency

**Topics:**

- Retry mechanisms, exponential backoff
- Circuit breaker, bulkhead patterns
- Dead Letter Queues (DLQ)

**Activities:**

- Set up DLQ for a Lambda function
- Build a retry mechanism into your app
- Review logs from failed invocations

**Expected by Week’s End:**

- Design and implement fault-tolerant apps
- Know how to debug and recover from failures

| Day         | Focus                                                   |
| ----------- | ------------------------------------------------------- |
| **Mon**     | Learn retry logic and exponential backoff patterns      |
| **Tue**     | Understand DLQs and Lambda error handling config        |
| **Wed**     | Implement DLQ for a Lambda using SQS                    |
| **Thu**     | Study circuit breaker and bulkhead patterns             |
| **Fri**     | Review best practices for handling timeouts and retries |
| **Sat/Sun** | **Rest** or simulate failure scenarios in test apps     |

---

## 🗓️ Week 11: Practice Exams + Weak Area Review

**Topics:**

- Full exam simulation
- Review questions by domain (Dev, CI/CD, Security, Monitoring)

**Activities:**

- Take 1–2 full practice exams (e.g., Tutorials Dojo, Whizlabs)
- Analyze incorrect answers and reinforce weak topics

**Expected by Week’s End:**

- Score 80%+ consistently on practice exams
- Refine time management and question reading strategy

| Day         | Focus                                                   |
| ----------- | ------------------------------------------------------- |
| **Mon**     | Take a full-length practice exam (e.g., Tutorials Dojo) |
| **Tue**     | Review all missed questions, identify weak topics       |
| **Wed**     | Focused review on weak topics with hands-on refreshers  |
| **Thu**     | Take domain-specific mini quizzes                       |
| **Fri**     | Second full-length exam and compare improvement         |
| **Sat/Sun** | **Rest** or light review via flashcards or app          |

---

## 🗓️ Week 12: Final Review + Exam Prep

**Topics:**

- Whitepapers and FAQs for S3, Lambda, DynamoDB, and API Gateway
- Mental review and flashcards

**Activities:**

- Review AWS documentation of core services
- Final mock exam (timed)
- Prepare logistics for exam day (Pearson VUE setup or testing center)

**Expected by Week’s End:**

- Be fully confident and prepared
- Rest well, and take the exam!

| Day         | Focus                                             |
| ----------- | ------------------------------------------------- |
| **Mon**     | Read S3, Lambda, DynamoDB, and API Gateway FAQs   |
| **Tue**     | Revisit exam guide, understand each task area     |
| **Wed**     | Take a final timed mock exam                      |
| **Thu**     | Create a study sheet of key CLI commands & limits |
| **Fri**     | Prepare test environment/logistics for exam day   |
| **Sat/Sun** | **Rest**, **hydrate**, and **test day!** 🎯       |

---

### **📌 Study Resources**

- 📘 [AWS Skill Builder – Developer Associate Learning Plan](https://explore.skillbuilder.aws/)
- 🧪 Practice Exams: Whizlabs, Tutorials Dojo
- 🔧 Hands-on Labs: AWS Free Tier, qwiklabs, Cloud Academy
- 📝 Notes: Markdown or Obsidian for revision

---
