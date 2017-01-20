//  Combine all available reducers to a single root reducer.

import { combineReducers } from 'redux';

const reducers = {};
const combined = combineReducers(reducers);
module.exports = combined;
