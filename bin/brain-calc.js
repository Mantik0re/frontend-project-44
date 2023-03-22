#!/usr/bin/env node

import introduceUser from '../src/cli.js';
import playGame from '../src/index.js';
import checkingNumber from '../src/games/calcgames.js';


let userName = introduceUser();

playGame(userName, checkingNumber);
