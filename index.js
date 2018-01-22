const express = require('express')
const app = express()
const bodyparser = require('body-parser')

/*
const DialogflowApp = require('actions-on-google').DialogflowApp; // Google Assistant helper library
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  if (request.body.result) {
    processV1Request(request, response);
  } else if (request.body.queryResult) {
    processV2Request(request, response);
  } else {
    console.log('Invalid Request');
    return response.status(400).end('Invalid Webhook Request (expecting v1 or v2 webhook request)');
  }
});
function processV1Request (request, response) {
let action = request.body.result.action;
  let parameters = request.body.result.parameters; 
  let inputContexts = request.body.result.contexts; 
  let requestSource = (request.body.originalRequest) ? request.body.originalRequest.source : undefined;

  const actionHandlers = {
    // The default welcome intent has been matched, welcome the user (https://dialogflow.com/docs/events#default_welcome_intent)
    'input.welcome': () => {
      // Use the Actions on Google lib to respond to Google requests; for other requests use JSON
      if (requestSource === googleAssistantRequest) {
        sendGoogleResponse('Hello, Welcome to my Dialogflow agent!'); // Send simple response to user
      } else {
        sendResponse('Hello, Welcome to my Dialogflow agent!'); // Send simple response to user
      }
    },
    // The default fallback intent has been matched, try to recover (https://dialogflow.com/docs/intents#fallback_intents)
    'input.unknown': () => {
      // Use the Actions on Google lib to respond to Google requests; for other requests use JSON
      if (requestSource === googleAssistantRequest) {
        sendGoogleResponse('I\'m having trouble, can you try that again?'); // Send simple response to user
      } else {
        sendResponse('I\'m having trouble, can you try that again?'); // Send simple response to user
      }
    },
    'movie.tamil':() => {
        if (requestSource === googleAssistantRequest) {
        sendGoogleResponse('Your tickets for '+inputContexts[0].parameters.movie+'on'+inputContexts[0].parameters.date+ ' at '+ inputContexts[0].parameters.cinema+'has been booked successfully'+
        'Ticket Details '+inputContexts[0].parameters.row +' 1- '+(0+inputContexts[0].parameters.tickets)); // Send simple response to user
      } else {
	sendResponse('Result'+(inputContexts[0].parameters.data1 + inputContexts[0].parameters.data1));
      }
    },
    'movie.telugu':() => {
        if (requestSource === googleAssistantRequest) {
        sendGoogleResponse('Your tickets for '+inputContexts[0].parameters.movie+'on'+inputContexts[0].parameters.date+ ' at '+ inputContexts[0].parameters.cinema+'has been booked successfully'+
        'Ticket Details '+inputContexts[0].parameters.row +' 1- '+(0+inputContexts[0].parameters.tickets)); // Send simple response to user
      } else {
        sendResponse('Your tickets for '+inputContexts[0].parameters.movie+' on '+inputContexts[0].parameters.date+ ' at '+ inputContexts[0].parameters.cinema+' has been booked successfully.'+
        'Ticket Details '+inputContexts[0].parameters.row +' 1 - '+(0+inputContexts[0].parameters.tickets)); // Send simple response to user
      }
    },
    // Default handler for unknown or undefined actions
    'default': () => {
      // Use the Actions on Google lib to respond to Google requests; for other requests use JSON
      if (requestSource === googleAssistantRequest) {
        let responseToUser = {
          //googleRichResponse: googleRichResponse, // Optional, uncomment to enable
          //googleOutputContexts: ['weather', 2, { ['city']: 'rome' }], // Optional, uncomment to enable
          speech: 'This message is from Dialogflow\'s Cloud Functions for Firebase editor!', // spoken response
          text: 'This is from Dialogflow\'s Cloud Functions for Firebase editor! :-)' // displayed response
        };
        sendGoogleResponse(responseToUser);
      } else {
        let responseToUser = {
          //data: richResponsesV1, // Optional, uncomment to enable
          //outputContexts: [{'name': 'weather', 'lifespan': 2, 'parameters': {'city': 'Rome'}}], // Optional, uncomment to enable
          speech: 'This message is from Dialogflow\'s Cloud Functions for Firebase editor!', // spoken response
          text: 'This is from Dialogflow\'s Cloud Functions for Firebase editor! :-)' // displayed response
        };
        sendResponse(responseToUser);
      }
    }
  };
  function sendGoogleResponse (responseToUser) {
    if (typeof responseToUser === 'string') {
      app.ask(responseToUser); // Google Assistant response
    } else {
      // If speech or displayText is defined use it to respond
      let googleResponse = app.buildRichResponse().addSimpleResponse({
        speech: responseToUser.speech || responseToUser.displayText,
        displayText: responseToUser.displayText || responseToUser.speech
      });
      // Optional: Overwrite previous response with rich response
      if (responseToUser.googleRichResponse) {
        googleResponse = responseToUser.googleRichResponse;
      }
      // Optional: add contexts (https://dialogflow.com/docs/contexts)
      if (responseToUser.googleOutputContexts) {
        app.setContext(...responseToUser.googleOutputContexts);
      }
      console.log('Response to Dialogflow (AoG): ' + JSON.stringify(googleResponse));
      app.ask(googleResponse); // Send response to Dialogflow and Google Assistant
    }
  }
  // Function to send correctly formatted responses to Dialogflow which are then sent to the user
  function sendResponse (responseToUser) {
    // if the response is a string send it as a response to the user
    if (typeof responseToUser === 'string') {
      let responseJson = {};
      responseJson.speech = responseToUser; // spoken response
      responseJson.displayText = responseToUser; // displayed response
      response.json(responseJson); // Send response to Dialogflow
    } else {
      // If the response to the user includes rich responses or contexts send them to Dialogflow
      let responseJson = {};
      // If speech or displayText is defined, use it to respond (if one isn't defined use the other's value)
      responseJson.speech = responseToUser.speech || responseToUser.displayText;
      responseJson.displayText = responseToUser.displayText || responseToUser.speech;
      // Optional: add rich messages for integrations (https://dialogflow.com/docs/rich-messages)
      responseJson.data = responseToUser.data;
      // Optional: add contexts (https://dialogflow.com/docs/contexts)
      responseJson.contextOut = responseToUser.outputContexts;
      console.log('Response to Dialogflow: ' + JSON.stringify(responseJson));
      response.json(responseJson); // Send response to Dialogflow
    }
  }
}
}
  */
app.use(bodyparser.json());
app.post('/add', (req, res) => { 
var result = req.body.data1+req.body.data2;
res.send('Addition :'+result);
console.log(req.body)
});
app.post('/divide', (req, res) => { 
var result = req.body.data1/req.body.data2;
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({
    "speech": "Hello",
    "displayText": result,
    "data": {"result": result},
    "source": "dialogflow"
}));
console.log(req.body)
});

app.get('/multiply/', (req, res) => { 
var result = req.query.data1*req.query.data2;
res.send('Product :'+result);
console.log(req.query)
});



app.get('/hi', (req, res) => res.send('Hello There!'))
app.get('/', (req, res) => res.send('Hello...!'))





app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))