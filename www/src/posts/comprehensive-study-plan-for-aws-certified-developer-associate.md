
Here’s my study plan for the **AWS Certified Developer – Associate (DVA-C02)** certification.

---

### **📅 Month 1: Core AWS Services + Development Foundations**

**Goal:** Build foundational knowledge and get hands-on with AWS services critical to development.

#### **Week 1: AWS Fundamentals + CI/CD Overview**

* IAM: users, roles, policies, least privilege
* AWS CLI, SDK (Boto3), and IAM auth methods
* Intro to CI/CD: CodeCommit, CodeBuild, CodeDeploy, CodePipeline
* Hands-on: Create IAM roles and policies, connect SDK

#### **Week 2: Compute & Serverless (Lambda, EC2, Elastic Beanstalk)**

* Lambda: triggers, event sources, permissions, layers
* EC2 basics, Elastic Beanstalk overview
* Packaging and deploying Lambda with AWS SAM/CloudFormation
* Hands-on: Create Lambda with API Gateway trigger, write test events

#### **Week 3: Storage & Databases**

* S3: storage tiers, lifecycle rules, presigned URLs
* DynamoDB: partition keys, GSIs, LSIs, consistency
* RDS & Aurora basics, ElastiCache, MemoryDB
* Hands-on: CRUD apps with DynamoDB, serialize/deserialize data

#### **Week 4: Messaging & Event-Driven Architecture**

* SQS, SNS, EventBridge, Step Functions basics
* Fan-out patterns, DLQs, retries, exponential backoff
* Hands-on: Publish to SNS > SQS > Lambda, handle errors

---

### **📅 Month 2: Security + Deployment + CI/CD Mastery**

**Goal:** Learn how to build secure, testable, and deployable apps using AWS tooling.

#### **Week 5: Authentication & Authorization**

* Cognito (user vs. identity pools), SAML, OIDC
* IAM vs. resource-based policies
* JWTs, AWS STS, role assumption
* Hands-on: Secure a Lambda/API with Cognito

#### **Week 6: Encryption & Secrets**

* Encryption at rest/in transit, AWS KMS keys
* Client-side vs. server-side encryption
* Secrets Manager vs. SSM Parameter Store
* Hands-on: Use KMS to encrypt Lambda env vars, retrieve secrets

#### **Week 7: CI/CD Workflows**

* CodePipeline, GitHub integration
* Lambda deployment options, blue/green/canary
* AWS SAM/CloudFormation templates
* Hands-on: Build CI/CD pipeline to deploy Lambda + API Gateway

#### **Week 8: Testing and IaC**

* Unit/integration testing in Lambda (SAM local)
* API Gateway mock integrations
* IaC: CloudFormation vs. AWS CDK vs. SAM
* Hands-on: Test locally, deploy with SAM, rollback strategies

---

### **📅 Month 3: Troubleshooting, Optimization, and Practice**

**Goal:** Strengthen observability, fix/debug patterns, and prepare for the real exam.

#### **Week 9: Observability & Monitoring**

* CloudWatch Logs & Metrics, X-Ray tracing
* Insights, structured logging, service maps
* Hands-on: Add logs, custom metrics, and trace Lambda flows

#### **Week 10: Application Optimization**

* Caching strategies (ElastiCache, Dynamo TTL, lazy loading)
* Memory and concurrency tuning for Lambda
* Performance profiling, DLQs
* Hands-on: Tune Lambda for performance, implement caching

#### **Week 11: Full Practice Tests + Review**

* Take 2 full-length practice exams
* Review weak areas per domain
* Revisit failed topics: encryption, IAM policies, event patterns

#### **Week 12: Final Sprint**

* Retake quizzes on weak domains
* Rebuild mini projects:

  * Serverless web app (API Gateway + Lambda + DynamoDB)
  * S3 file processor with SNS + Lambda + Step Functions
* Flashcards or summary notes

---

### **📌 Study Resources**

* 📘 [AWS Skill Builder – Developer Associate Learning Plan](https://explore.skillbuilder.aws/)
* 🧪 Practice Exams: Whizlabs, Tutorials Dojo
* 🔧 Hands-on Labs: AWS Free Tier, qwiklabs, Cloud Academy
* 📝 Notes: Markdown or Obsidian for revision

---

