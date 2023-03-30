#!/usr/bin/env node
/* eslint-disable import/extensions */

import introduceUser from '../src/cli.js';
import playGame from '../src/index.js';
import checkingNumber from '../src/games/calcgames.js';

const userName = introduceUser();

playGame(userName, checkingNumber);
