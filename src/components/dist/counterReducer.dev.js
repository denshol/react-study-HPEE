"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
}

var _default = countReducer;
exports["default"] = _default;