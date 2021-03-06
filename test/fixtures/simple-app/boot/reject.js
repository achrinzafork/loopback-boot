// Copyright IBM Corp. 2017,2019. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const Promise = require('bluebird');

module.exports = function(app) {
  if (process.rejectPromise) {
    return Promise.reject(new Error('reject'));
  }
};
