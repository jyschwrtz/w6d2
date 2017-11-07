
class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul').on("click", 'li', (e) => {
      let $li = $(e.target);
      if($li.attr('class') === 'clicked') {
        alert('Invalid move!');
      } else {
        this.makeMove($li);
      }
      this.checkWinner();
    });
  }

  checkWinner() {
    if (this.game.isOver()) {
      if (this.game.winner()) {
        console.log(`${this.game.currentPlayer} has won!`);
        $(`li:contains(${this.game.winner()})`).css('background', 'white');
        $(`li:contains(${this.game.winner()})`).css('color', 'red');
        $(`li:contains(${this.game.currentPlayer})`).css('background', 'green');
        $(`li:contains(${this.game.currentPlayer})`).css('color', 'white');
      } else {
        console.log('NO ONE WINS!');


      }
    }
  }

  makeMove($square) {
    let pos = $square.data("pos");
    this.game.playMove(pos);
    $square.removeClass("unclicked");
    $square.addClass("clicked");
    $square.text(this.game.currentPlayer);
  }

  setupBoard() {
    let $ul = $('<ul></ul>');
    $ul.addClass('board');

    for(var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $li = $('<li></li>');
        $li.addClass('unclicked');
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }

    console.log($ul);

    this.$el.append($ul);
  }
}





module.exports = View;
