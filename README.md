# FieldSync-SPA
This is my submission for the Fullstack coding test!!!

# Run Instructions

Clone the repository:

```bash
    git clone https://github.com/yourusername/FieldSync-SPA.git
```

```bash
    cd FieldSync-SPA
```

# installing/updating NPM

make sure you have node installed with 

```bash
    npm -v
```

If your node is out of date ( you'll might suspect this because random stuff will break or not compile ) 
run this 

# on linux
```bash
    npm install -g npm@11.2.0
```
# on windows

```bash
    npm install -g npm-windows-upgrade
```

then (running powershell as admin)

```bash 
    npm-windows-upgrade
```

if you don't have node installed, you can either install it at https://nodejs.org/en


# building frontend

# first

```bash
    cd frontend
```

you need to install node modules, you can do this with
```bash 
    npm install 
```

it's going to yell at you, this is parially because create react app loves depreciated stuff

you need to install yarn, you can do with 

on both windows and linux

# run yarn build in the frontend directory
    ```bash
    yarn start
    ```
you should be good to go now for the frontend!

# run the backend
open a new terminal and navigate to the backend directory

this is either   

    ```bash
    cd backend
    ```
or

    ```bash
    cd ../backend
    ```
depending on where the new terminal starts you out,

once you are in the folder

# make sure you have docker!

Docker can be installed at https://www.docker.com/products/docker-desktop/ for windows, 

on linux you can install it by following the instructions here
https://docs.docker.com/engine/install/ubuntu/

verify you have docker installed with 

```bash
    docker -v
```

you should get a version number returned if docker is correctly installed

# command to run both database and backend

run 

```bash 
    docker compose up -d
```

note, you may have to run this command multiple times if something buggy happens with your ports and the database doesn't set up right

to run docker compose in detached mode, removing the -d will put you in the terminal of the container instead of yours

# stopping the docker container

run 

```bash 
    docker compose down -v
```

to uninitiate the docker container, the -v argument will restart the database

you can also do 

```bash
    docker compose build
``` 

to recompile the container

# ports

The frontend uses http://localhost:3000/, this is where you'll be able to see the app in the browser

the backend uses 3001, and the postgres database uses 5432


# design desicions

this part is completely optional to read,
I'm just going to explain really quick some things I kept in mind as I worked on this.

# frontEnd, some seperation between view and model and composition

I tried to make a lot of components on the front composable, that and the combination of trying to seperate components which viewed things from components which changed things means there are a lot of files here.

Because of this, It's pretty heavily organized, and I hope that I've made the folder names self explainatory enough

As the app grows, the amount of new files per component will slow drastically as a lot of the pieces can be reused, (like fetchbutton being used to implement downloadbutton). I would say this is scalable.

one thing I would probably change in a larger app for frontEnd is styling. A lot of the styling is written directly in classes and used right now because I was playing with it a bit. I would probably switch to tailwind or a more hands-off styling library because styling started to get annoying.

another thing I would absolutely change is the build strategy. I figured that createReactApp would work well because it used to be very supported, But instead it became a versioning headache. This is less of an issue on something like linux or mac where it's easier to mess with your node version a lot, but in a bigger project I would probably use something really simple like vite or a really flushed out framework like nextJS

# backend, controller service repository

On the backEnd I tried to use an architecture which seperated the request processing into 3 stages, 

the controller intercepts the request and is attached to the express router

the service is called by the controller and is responsible for calling the repository In this program, the service layer wasn't very useful and could definitely have been left out. I still included it because as the program gets bigger, it might be usefull to abstract some behavior in the service

something that comes to mind is if you have a repository being accessed that's really high latency so you would get the most out of it by buffering a large number of requests and sending them in bulk to the repository, this is behavior that's a lot easier with an extra layer.

the Repository manages the postGres database. For managing the database, I used an ORM so that I didn't have to regex out some ugly PSQL. this keeps the code more readable, but It does kind of spread out the behavior of the repository, making it harder to follow, because of this I've added more comments that seem kind of self explainatory around those pars so it's easier to follow.

All in all, I think the backend is really extendable and scalable. new services, controllers, and repositories could be added and passed into eachother. making something like an abstract version of each of these (or implementing dependency injection) would be the next step in accomplishing this.
