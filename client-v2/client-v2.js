const WebSocket = require('ws');
var prompt = require('prompt');

// const ws = new WebSocket('ws://localhost:8889');
const ws = new WebSocket('ws://104.196.54.87:443');

var clientName = '';

function beginPromptForGuess() {

    var numberSchema = {
        properties: {
            number: {
                description: 'Please guess an integer between 1 and 20',
                pattern: /^\d+$/,
                message: 'please enter an integer.',
                required: true
            }
        }
    };
    if (prompt.stopped || !prompt.started) {
        prompt.get(numberSchema, function (err, result) {
            if (result) {
              ws.send(JSON.stringify({ name: clientName, guess: result.number }));
            }
        })
    }
}

ws.on('open', function open() {

    setTimeout(function () {
        console.log('Hey, let\'s play a game!');

        var nameSchema = {
            properties: {
                name: {
                    description: 'First, what is your name?',
                    pattern: /^[a-zA-Z\s\-]+$/,
                    message: 'Name must be only letters, spaces, or dashes',
                    required: true
                }
            }
        };

        prompt.get(nameSchema, function (err, result) {
            if (result) {
                clientName = result.name;
                console.log('Hi there, ' + result.name + '!');
                console.log('Let\'s play!');
                beginPromptForGuess();
            }
        });
    }, 500);

});

ws.on('message', function incoming(data, flags) {
    var obj = JSON.parse(data);
    console.log('Server says: ' + obj.response);

    if (obj.prompt) {
        beginPromptForGuess();
    }
});
