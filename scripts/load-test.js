'use strict';

const forever = require('forever');

const apiProcess = new forever.Monitor(['npm', 'start']);
const loadTestProcess = new forever.Monitor(['npm', 'run', 'artillery']);

apiProcess.on('start', () => {
  loadTestProcess.start();
});

loadTestProcess.on('exit:code', () => {
  apiProcess.stop();
  loadTestProcess.stop();
});

apiProcess.start();
