#!/usr/bin/env node

'use strict';

const { bootstrap } = require('../lib/loader');

bootstrap(process.cwd(), process.argv);
