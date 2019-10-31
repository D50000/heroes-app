
# heroes-app
Hahow recruit project, develop repository.

## Project resource
### Online Production version:  
The **master branch** of the React build version.  
https://d50000.github.io/heroes-app/#/heroes  


## App Framework
![](https://github.com/D50000/heroes-app/blob/master/structure.png)


### Develop version:
1. Download the **develop-demo** branch.
2. Install node.js (for running modules and tools)
3. `npm install` to install the project.
4. `npm start` for start the local server.
5. `ctrl + c` for stop the server.


## Library Import
- React ( use by react app )
- react-dom ( use by react app )
- react-router-dom ( for the router controller )
- react-scripts ( for react code )
- react-transition-group ( for the animation CSS )
- Bootstrap ( CSS framework )

- @babel/core ( translate the code for jest )
- @babel/plugin-proposal-class-properties ( translate the code for jest )
- @babel/preset-env ( translate the code for jest )
- @babel/preset-react ( translate the code for jest )
- @testing-library/react ( test case function for Event and DOM  )
- babel-jest ( use by jest )
- jest ( test case library )


## Comment Discipline
- For more readable.
- For more efficiently to understand the function.
- Avoid the future me forget it.


## Issues / Obstacle
- “gh-pages” for online Demo need to use ‘hashrouter’ in the router, local version need to browserrouter. 
- Jest run the test case. (not yet)
~~- jest auto deploy to github server. (done)~~


## Feature
### Press secret key *B* for Batman mode.
Press **B** at the path **/heroes** and it will turn to *Batman* mode.  
You can find *Joker* also.
![](https://github.com/D50000/heroes-app/blob/master/pressB.png)


### Auto run build to github server by Travis CI.
When commit to the **master** branch **Travis** will auto build and deploy to the github server.
![](https://github.com/D50000/heroes-app/blob/master/travis.png)
