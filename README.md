# Metric-Imperial Converter

## Overview

The Metric/Imperial Converter is a web application that allows for easy and accurate conversions between Metric and Imperial units. The application employs a Node.js and Express backend for server-side operations, AJAX call for API endpoints, RESTful API for handling conversion request, and Mocha and Chai for comprehensive unit and functional testing.

## Features

- Conversion between Metric and Imperial units
- Dynamically generated, user-friendly interface
- Robust functional and unit testing
- RESTful API for handling conversion requests

## Technical Details
The Metric/Imperial Converter follows the Model-View-Controller (MVC) architecture.

- **Controller**: The controller handles the conversion logic. When a request comes in, the controller translates the data into the appropriate units and sends the results back to the client.
- **View**: The view layer of the application is HTML page.
- **Model**: The model is not explicitly used in this application as the conversions are stateless and do not require data storage.
- **Routes**: The api.js file in the routes directory handles all the API requests. It parses the input from the requests, passes the data to the controller for processing, and then sends the response back to the client.
- **Tests**: Unit and functional tests are written using Mocha and Chai. These tests are used to ensure that both individual units of code (unit testing) and the overall functionality of the application (functional testing) are working as expected.

## Gettin Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**

```bash
git clone https://github.com/your_username/metric-imperial-converter.git
```
2. **Navigation to the project directory**

```bash
cd metric-imperial-converter
```

3. **Install the dependencies**

```bash
npm install
```

4. **Start the application**

```bash
npm start
```

The application should now be running at **`http://localhost:3000`**.

## Running the Tests

To execute the unit and functional tests, use the following command:

```bash
npm test
```

## Deployment

The Metric/Imperial Converter is deployed on Heroku and can be accessed at [Link](https://dashboard.heroku.com/apps/desolate-coast-03705);

## License

This project is licensed under the MIT License. Full license text is available on [MIT License](https://opensource.org/licenses/MIT).






