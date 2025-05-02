# AWS Certified Developer Certification (DVA-CO2)

Exam validates a candidates abilities to develop, test, deploy, and debug cloud based applications.
It also validates the users ability to complete:

- develop and optimize applications in AWS
- package and deploy by using continous integration and continous deliver (CI/CD) workflows
- secure application code and data
- identify and resolve application issues

## Content Domain 1: Development with AWS Services (32%)

### Task 1: Develop code for applications hosted on AWS

#### Knowledge

- Architecture patterns (e.g., microservices, serverless, event-driven, monolithic, choreography, orchestration, fanout)
- Idempotency
- Differences between stateful and stateless
- Differences between tightly coupled and loosely coupled components
- Fault tolerant design patterns (e.g., retries with exponential backoff, circuit breaker, bulkhead, dead letter queue)
- Differences between synchronous and asynchronous patterns

#### Skills

- Creating fault-tolerant and resilient applications in a programming languages
- Creating, extending, and maintaining APIs (e.g., response/request transformations, enforcing validation rules, overriding status codes)
- Writing and running unit tests in development environments (e.g., using AWS Serverless Application Model [AWS SAM])
- Writing code to use messaging services
- Writing code that interacts with AWS services by using API and AWS SDKs
- Handling data streaming by using using AWS services

### Task 2: Develop code for AWS lambda

#### Knowledge

- Event source mapping
- Stateless applications
- Unit testing
- Event driven architecture
- Scalability
- The access of private resources in VPCs from Lambda code

#### Skills

- Configuring Lambda functions by defining environment variables and parameters (e.g., memory, timeout, concurrency, runtime, handler, layers, extensions, triggers, destinations)
- Handling event lifecycle and errors by using code (e.g., Lambda destinations, dead letter queues)
- Writing and running test code by using AWS services and tools
- Integrating Lambda functions with AWS services
- Tuning Lambda functions for optimal performance

### Task 3: Use data stores in application development

#### Knowledge

- Relational and non-relational databases
- Create, read, update, and delete (CRUD) operations
- High cardinality partition keys for balanced partition access
- Cloud storage options (e.g., file, object, databases)
- Database consistency models (e.g., strongly consistent, eventual consistency, read-after-write consistency)
- Differences between query and scan operations
- Amazon DynamoDB keys and indexing
- Caching strategies (e.g., write-through, read-through, lazy-loading, TTL)
- Amazon Simple Storage Service [Amazon S3] tiers and lifecycle management
- Differences between ephemeral and persistent data storage patterns

#### Skills

- Serializing and deserializing data to provide persistence to a data store
- Using, managing, and maintaining data stores
- Managing data lifecycles
- Using data caching services

## Content Domain 2: Security (26%)

### Task 1: Implement authentication and/or authorization for applications and AWS services

#### Knowledge

- Identity federation (e.g., Security Assertion Markup Language [SAML], OpenID Connect [OIDC], Amazon Cognito)
- Bearer tokens (e.g., JSON Web Tokens [JWT], Oauth, AWS Security, Token Service [AWS STS])
- The comparison of user pools and identity pools in Amazon Cognito
- Resource based policies, service policies, and principal policies
- Role-based access control (RBAC)
- Application authorization that uses ACLs
- The principle of least privilege
- Differences between AWS managed policies and customer-managed policies
- Identity and access management (IAM)

#### Skills

- Using an identity provider to implement federated access (e.g., Amazon Cognito, AWS Identity and Access Management [IAM])
- Securing applications by using Bearer tokens
- Configuring programmatic access to AWS
- Assuming and IAM role
- Defining permissions for principals

### Task 2: Implement encryption by using AWS services

#### Knowledge

- Encryption at rest and in transit
- Certificate management (e.g., AWS Private Certificate Authority)
- Key protection (e.g., key rotation)
- Differences between client-side encryption and server-side encryption
- Differences between AWS managed and customer managed AWS Key Management (AWS KMS) keys

#### Skills

- Using encrypition keys to encrypt or decrypt data
- Generating certificates and SSH keys for development purposes
- Using encryption across account boundaries
- Enabling and disabling key rotation

### Task 3: Manage sensitive data in application code

#### Knowledge

- Data classification (e.g., personally identifiable information [PII], protected health information [PHI], payment card information [PCI])
- Environment variables
- Secrets management (e.g., AWS Secrets Manager, AWS Systems Manager Parameter Store)
- Secure credential handling

#### Skills

- Encrypting environment variables that contain sensitive data
- Using secret management services to secure sensitive data
- Sanitizing sensitive data

## Content Domain 3: Deployment (24%)

### Task 1: Prepare application artificats to be deployed to AWS

#### Knowledge

- Ways to access application configuration data (e.g., AWS AppConfig, Secrets Manager, Parameter Store)
- Lambda deployment packaging, layers, and configuration options
- Git based version control tools
- Container images

#### Skills

- Managing the dependencies of the code module (e.g., environment variables, configuration files, container images) within the package
- Organizing files and a directory structure application deployment
- Using code repositories in deployment environments
- Applying application requirements for resources (e.g., memory, cores)

### Task 2: Test applications in development environments

#### Knowledge

- Features in AWS services that perform application deployment
- Integration testing that uses mock endpoints
- Lambda versions and aliases

#### Skills

- Testing deployed code by using AWS services and tools
- Performing mock integration for APIs and resolving integrtion dependencies
- Testing application by using development endpoints (e.g., configuring stages in Amazon API Gateway)
- Deploying application stack updates to existing environments (e.g., deploying on AWS SAM template to a different staging environment)

### Task 3: Automate deployment testing

#### Knowledge

- API Gateway stages
- Branches and actions in the continuous integration and continous delivery CI/CD workflow
- Automated software testing (e.g., unit-testing, mock-testing)

#### Skills

- Creating application test events (e.g., JSON payloads for testing Lambda, API Gateway, and AWS SAM resources)
- Deploying API resources to various environments
- Creating application environments that use approved versions for integration testing (e.g., AWS Lambda aliases, container image tags, AWS Amplify branches, AWS Copilot environments)
- Implementing and deploying infrastructure as code (IaC) templates (e.g., AWS SAM templates, AWS CloudFormation templates)
- Managing environments in individual AWS services (e.g., differentiating between development, test, and production in API Gateway)

### Task 4: Deploy code by using AWS CI/CD services

#### Knowledge

- Git based version control tools
- Manual and automated approvals in AWS CodePipeline
- Access application configurations from AWS AppConfig and Secrets Manager
- CI/CD workflows that use AWS services
- Application deployment that uses AWS services and tools (e.g., Cloudformation, AWS Cloud Deployment Kit [AWS CDK], AWS SAM, AWS CodeArtifact, AWS Copilot, Amplify, Lambda)
- Lambda deployment packaging options
- API Gateways stages and custom domains
- Deployment strategies (e.g., canary, blue/green, rolling, in-place)

#### Skills

- Updating existing IaC templates (e.g., AWS SAM templates, CloudFormation templates)
- Managing application environment by using AWS services
- Deploying an application version by using deployment strategies
- Commiting code to a repository to invoke build, test, and deployment actions
- Using orchestrated workflows to deploy code to different envronments
- Performing application rollbacks by using existing deployment strategies
- Using labels and branches for version and release management
- Using existing runtime configurations to create dynamic deployments (e.g., using staging variables from API Gateway in Lambda functions)

## Content Domain 4: Trouble hooting and Optimization (18%)
