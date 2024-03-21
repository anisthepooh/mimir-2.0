# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Purpose of the project
This project is about creating a system to help interpret cannabis test results. 
The systems builds upon a mathmatical model for chronic cannabis use(Schwilke et al., 2011).

## File structure 
The structure of the files are as follows: 
![File structure](/src/assets/File-structure.png "Structure of the files")

App.js - Is the main file which renders the rest of the components.


Model.js - Consists of the systems logic and is where the mathmatical model is implemented.


Input.js - Is the input component of the system where dates and test values can be entered.


Datapoints.js - Consistes of the individual datapoints and displays them for the user. 


Datapoint.js -  It gives the default layout of the datapoint. 


Result.js - Is where the textual results gets displayed. 


Chart.js - Is the component containing the chart view. 


Print.js - is the print button. 


Navbar.js - Is the component of the navigationbar. 

