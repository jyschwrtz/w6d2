const Game = require('./game.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    let $ul = $('<ul></ul>');
    $ul.addClass("towers");

    for (var i = 0; i < 3; i++) {
      let $li = $('<li></li>');
      // $li.data('pos', i);
      $li.addClass(`tower${i}`);
      $ul.append($li);
    }
    this.$el.append($ul);
  }

  render() {
    this.game.towers.forEach( (tower, idx) => {

      let $li = $(`.tower${idx}`);
      tower.forEach( disc => {
        let $disc = $('<div></div>');
        $disc.css("width", disc * 125);
        $li.prepend($disc);
      });
    });
  }

  clickTower() {

  }

}

module.exports = View;
