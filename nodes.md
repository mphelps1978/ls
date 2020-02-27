# Workflow:

- create/clone repo
- add .gitignore
- add package.json
- update test script to use jest
- add 'jest' config to package.json
- add server and start scripts
- set up file/directory structure


# Features:

- list of cohorts
- add a cohort
- list cohorts students
- list of students
- add a student
- list of students cohorts


|Feature                 |Method      |URL|
|:------                 |:-----|     :--|
|List cohorts            |GET         |/api/cohorts|
|Add a cohort            |POST        |/api/cohorts|
|View cohorts students   |GET         |/api/cohorts/:id/students|
|List students           |GET         |/api/students|
|Add student             |POST        |/api/students|
|View students's cohorts |GET         |/spi/students/id:/cohorts


# Cohorts

- id
- name
- start date


# Students

- id
- name

# testing

- functions: invoke the function with optional arguments => check return
- endpoints: make a request with optional arguments => check response