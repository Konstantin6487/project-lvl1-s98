#!/usr/bin/env node
import userName from '..';

console.log("Welcome to the Brain Games!\n");
setTimeout(() => console.log('\nHello, ' + userName() + '!'), 1000);
