#!/usr/bin/env node

import welcomeMessage from '../src/cli.js';
import playGame from '../src/index.js';
import checkingNumber from '../src/games/progressiongames.js';


let username = welcomeMessage();
playGame(username, checkingNumber);
