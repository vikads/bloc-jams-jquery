//create class Helper
class Helper {
  //add a method to the Helper class called playPauseAndUpdate that takes one parametr, song
  playPauseAndUpdate(song) {

    player.playPause(song);
    if ( song !== undefined ) {
      $('#time-control .total-time').text( song.duration );
    };

  }

}

//and then instantiate that class as a variable called helper.
const helper = new Helper();
