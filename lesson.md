## Brief

### Preparation

Ensure that the [repository](https://github.com/su-ntu-ctp/Flask-Docker-App) for assignment is accessible.

### Lesson Overview

This lesson starts the learners on the subject of containerization, which would be used throughout the entire DevOps module. The actual implementation of containerization in real world scenarios can be complex. In this lesson, we aim to get learners up to speed by understanding simple concepts about containerization and being able to launch it locally in their laptop.

---
## Self Studies Check-in

**Q1: What are containers?**

A - Containers are virtual machines.

B - Containers are operating systems.

C - Containers are packages of softwares that makes up an operating environment.

D - All of the above.


**Q2: Which of the following about Docker is false?**

A - The Dockerfile describes how a container image should be created.

B - The Dockerfile is able to launch an instance of container without creating images.

C - Docker Hub is a repository of docker images

D - Docker container is compatible with deployment orchestration tools like Kubernetes.


**Q3: Which of the following does not describe the benefits of containerization?**

A - Separation of responsibility 

B - Workload portability

C - Application Isolation

D - Self healing

---

> Take a pause before entering part 1 to ensure learners have understood what containerization is? Learners who are more knowledgeable are encouraged to share their thoughts.

## Part 1 - Activity: Exploring the use case of Containerization.

Arrange learners into groups to perform research based on this [reference link](https://www.techtarget.com/searchitoperations/tip/6-use-cases-for-Docker-containers-and-when-to-pass) and complete the following table.

|#|Question|Answer|
|-|---------------------|----------------------------------------------|
|1|What are the six use cases?|input here|
|2|When not to use containerization?|input here|
|3|Do you agree with the author in when not to use containerization?|input here|

---

## Part 2 - Create Dockerfile

A sample React Application is included in this repository [here](./sample-app/). Follow the respective steps to create a `Dockerfile` where you will use to create an image and run the image as container locally.

Step 1: Create `Dockerfile` file within the `sample-app` folder.

Step 2: Fill the file content with the following:

```dockerfile
FROM node:16-alpine

WORKDIR /app

ENV PORT=3000

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]
```

Step 3: Create `.dockerignore` file and add `node_modules` to the content.

To understand the syntax of the Dockerfile, see this reference [link](https://docs.docker.com/engine/reference/builder/).

Here is a quick summary.

|Keyword|Purpose|
|-------|-------|
|`FROM`|The FROM instruction initializes a new build stage and sets the Base Image for subsequent instructions.|
|`WORKDIR`|The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it.|
|`ENV`|The ENV instruction sets the environment variable <key> to the value <value>.|
|`COPY`|The COPY instruction copies new files or directories.|
|`RUN`|The RUN instruction will execute any commands in a new layer on top of the current image and commit the results.|
|`CMD`|There can only be one CMD instruction in a Dockerfile. If you list more than one CMD then only the last CMD will take effect. The main purpose of a CMD is to provide defaults for an executing container. |

---

## Part 3 - Create Image and Run Container

We will use the CLI to build an image and run it as container. In summary, these are the commands we would touch on.

|Commands|Description|
|-|-|
|`docker image ls`| List all images that are being created|
|`docker image rm <image id>`| Remove specific image by ID|
|`docker build <options>`| Build an image from the Dockerfile.|
|`docker ps`| List all running container|
|`docker stop <container id>`| Stop a running container|
|`docker rm <container id>`|Remove a container|

Follow these steps to create an image and launch the container:

Step 1: Launch the Terminal/Powershell

Step 2: `CD` to the `sample-app` directory

Step 3: Run `docker build -t "mysampleapp" .` to build an image with the repository name `mysampleapp`

Step 4: Run `docker image ls` to list all images. You should see a table with `IMAGE ID` as one of the column. You will need that to run image as container in the next step.

Step 5: Run `docker run -d -p 3000:3000 <image id>` to start the container

Step 6: Navigate to [http://localhost:3000](http://localhost:3000) to view the sample app.

> The `-p 3000:3000` option refers to binding the host's port `3000` to the container's port `3000`. If the command is modified to `3001:3000` you are binding host's port `3001` to container's port `3000`. And the react app URL has to be changed to port `3001`.

END
