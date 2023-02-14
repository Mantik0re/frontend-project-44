#!/usr/bin/env node

import welcomeMessage from '../src/cli.js';
import playGame from '../src/index.js';
import checkingNumber from '../src/games/evengame.js';


let username = welcomeMessage();
playGame(username, checkingNumber);
