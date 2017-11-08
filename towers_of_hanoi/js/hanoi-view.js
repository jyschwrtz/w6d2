const Game = require('./game.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
    this.clickTower();
  }

  setupTowers() {
    let $ul = $('<ul></ul>');
    $ul.addClass("towers");

    for (var i = 0; i < 3; i++) {
      let $li = $('<li></li>');
      $li.data('pos', i);
      $li.addClass(`tower${i}`);
      $ul.append($li);
    }
    this.$el.append($ul);
  }

  render() {
    $('div').remove();
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
    $('.towers').one('click', 'li', (event1) => {
      let $towerOne = $(event1.currentTarget);
      console.log($towerOne);
      $towerOne.addClass('selected');
      let pileNumber1 = $towerOne.data('pos');
        $('.towers').one('click', 'li', (event2) => {
          let $towerTwo = $(event2.currentTarget);
          let pileNumber2 = $towerTwo.data('pos');
          this.game.move(pileNumber1, pileNumber2);
          $towerOne.removeClass('selected');
          this.render();
          this.winner();
          this.clickTower();
        });
    });
  }

  winner() {
    if(this.game.isWon()) {
      window.changeColor();
      $('h1').addClass('animated bounceOutLeft');
      $('h1').text('YOU WON!').removeClass('animated bounceOutLeft').addClass('animated bounceInRight').css('text-align', 'center');;
    }
  }
}

module.exports = View;
