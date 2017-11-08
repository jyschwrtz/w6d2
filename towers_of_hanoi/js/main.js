const Game = require('./game.js');
const View = require('./hanoi-view.js');

$( () => {
  const rootEl = $('.hanoi');
  const game = new Game();
  new View(game, rootEl);
});
