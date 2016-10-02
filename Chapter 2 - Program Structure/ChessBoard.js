// function chessBoard() {
//   for (var i = 0; i < 4; i++ ){
//     console.log("# # # #  \n");
//     console.log("  # # # #\n");
//   }
// }
//
// chessBoard();

function chessBoard(size) {

  var lengthA = " ";
  var lengthB = " ";
  var x = 0;

  for (var i = 0; i < size; i++) {
    lengthA = lengthA + "# ";
    lengthB = lengthB + " #";
  }

  lengthA = lengthA + "\n";
  lengthB = lengthB + "\n";

  for (var i = 0; i < size; i++) {
    if (x == 0) {
      console.log(lengthA)
      x = x + 1;
    }
    else {
      console.log(lengthB);
      x = x - 1;
    }
  }
}

chessBoard(8);
chessBoard(4);
chessBoard(3);
chessBoard(17);
