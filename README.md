This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## To run docker locally
install docker in system and In the project directory, you can run:

### `docker build -t imagename .`
it Builds the docker image locally with imagename

### `docker run -p 3000:3000 imagename`
it runs the docker image and executed npm start command to execute project in 3000 port.after this open browser and enter url
localhost:3000 . (edited) 