/** @const */ var MY_BEER = 'stout';

MY_BEER = '1';

/**
 * My namespace's favorite kind of beer.
 * @const {string}
 */
mynamespace.MY_BEER = 'stout';

mynamespace.MY_BEER = '2';

/** @define {boolean} */
var debug = true;

debug = false; // WARNING occurs, @define force var to be const..
debug = 'true';

