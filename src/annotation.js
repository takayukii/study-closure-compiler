// /** @const */ var MY_BEER = 'stout';
//
// MY_BEER = '1';
//
// /**
//  * My namespace's favorite kind of beer.
//  * @const {string}
//  */
// mynamespace.MY_BEER = 'stout';
//
// mynamespace.MY_BEER = '2';
//
// /** @define {boolean} */
// var debug = true;
//
// debug = false; // WARNING occurs, @define force var to be const..
// debug = 'true';

// /**
//  * @param a {number}
//  * @param b {number}
//  * @returns {number}
//  */
// function foo(a, b) {
//   return a - b + 1;
// }
//
// foo('aaa', 'bbb');

// /**
//  * @param {{firstName: string, lastName: string}} props
//  * @returns {string}
//  */
// function func1 (props) {
//   return `${props.firstName} ${props.lastName}`;
// }
//
// func1({
//   firstName: 'first_name 1',
//   familyName: 'family_name 1',
// });

// /**
//  * @type {{firstName: string, lastName: string}}
//  */
// var obj1 = {
//   firstName: 'first_name 1',
//   familyName: 'family_name 1',
// };

// /**
//  * @typedef {{
//  *  firstName: string,
//  *  lastName: (string|undefined)
//  * }}
//  */
// var People;
//
// /**
//  * @type {People}
//  */
// var obj2 = {
//   firstName: 'first_name 1',
//   familyName: 'family_name 1',
// };
//
// // https://github.com/google/closure-compiler/issues/126
// // (string|undefined) means optional in typedef

import {People} from './types';

/**
 * @type {People}
 */
var obj2 = {
  familyName: 'family_name 1',
};
