# Xendit Backend Test

[![GitHub Actions Build](https://github.com/rafiandria23/xendit-backend-test/actions/workflows/ci.yaml/badge.svg)](https://github.com/rafiandria23/xendit-backend-test/actions/workflows/ci.yaml)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=coverage)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_xendit-backend-test&metric=bugs)](https://sonarcloud.io/summary/new_code?id=rafiandria23_xendit-backend-test)

## Xendit Coding Exercise

The goal of these exercises are to assess your proficiency in software engineering that is related to the daily work that we do at Xendit. Please follow the instructions below to complete the assessment.

## Setup

1. Fork this repository to your own github profile
2. Ensure `node (>=12)` and `npm` are installed
3. Run `yarn`
4. Run `yarn test`
5. Run `yarn start`
6. Hit the server to test health `curl localhost:8010/health` and expect a `200` response

## Tasks

Below will be your set of tasks to accomplish. Please work on each of these tasks in order. Success criteria will be defined clearly for each task

1. [Documentation](#documentation)
2. [Implement Tooling](#implement-tooling)
3. [Implement Pagination](#implement-pagination)
4. [Refactoring](#refactoring)
5. [Security](#security)
6. [Load Testing](#load-testing)

### Documentation

Please deliver documentation of the server that clearly explains the goals of this project and clarifies the API request and response that is expected.
Feel free to use any open source documentation tools such as OpenAPI / Swagger.

#### Success Criteria

1. A pull request against `master` of your fork with a clear description of the change and purpose and merge it
2. **[BONUS]** Create an easy way to deploy and view the documentation in a web format and include instructions to do so

### Implement Tooling

Please implement the following tooling:

1. `eslint` - for linting
2. `nyc` - for code coverage
3. `pre-push` - for git pre push hook running tests
4. `winston` - for logging

#### Success Criteria

1. Create a pull request against `master` of your fork with the new tooling and merge it
   1. `eslint` should have an opinionated format
   2. `nyc` should aim for test coverage of `80%` across lines, statements, and branches
   3. `pre-push` should run the tests before allowing pushing using `git`
   4. `winston` should be used to replace console logs and all errors should be logged as well. Logs should go to disk.
2. Ensure that tooling is connected to `yarn test`
3. Ensure that tests covers possible positive and negative scenarios
4. Create a separate pull request against `master` of your fork with the linter fixes and merge it
5. Create a separate pull request against `master` of your fork to increase code coverage to acceptable thresholds and merge it
6. **[BONUS]** Add integration to CI such as Travis or Circle
7. **[BONUS]** Add Typescript support

### Implement Pagination

Please implement pagination to retrieve pages of the resource `rides`.

1. Create a pull request against `master` with your changes to the `GET /rides` endpoint to support pagination including:
   1. Code changes
   2. Tests
   3. Documentation
2. Merge the pull request

### Refactoring

Please implement the following refactors of the code:

1. Convert callback style code to use `async/await`
2. Reduce complexity at top level control flow logic and move logic down and test independently
3. **[BONUS]** Split between functional and imperative function and test independently

#### Success Criteria

1. A pull request against `master` of your fork for each of the refactors above with:
   1. Code changes
   2. Tests covering positive and negative scenarios

### Security

Please implement the following security controls for your system:

1. Ensure the system is not vulnerable to [SQL injection](https://www.owasp.org/index.php/SQL_Injection)
2. **[BONUS]** Implement an additional security improvement of your choice

#### Success Criteria

1. A pull request against `master` of your fork with:
   1. Changes to the code
   2. Tests ensuring the vulnerability is addressed

### Load Testing

Please implement load testing to ensure your service can handle a high amount of traffic

#### Success Criteria

1. Implement load testing using `artillery`
   1. Create a PR against `master` of your fork including artillery
   2. Ensure that load testing is able to be run using `yarn test:load`. You can consider using a tool like `forever` to spin up a daemon and kill it after the load test has completed.
   3. Test all endpoints under at least `100 rps` for `30s` and ensure that `p99` is under `50ms`
