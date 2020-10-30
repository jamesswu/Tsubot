const _ = require('lodash');

const LOWER_A_CHAR_CODE = 97;

/**
 * Parses a raw board component of the FEN string into a 2d array
 * @param {string} rawBoard - the raw board component string.
 * @return {FENBoard} The parsed board.
 */
function parseFENBoard(rawBoard) {
  return _.map(
      _.split(rawBoard, '/'),
      (row, rowIndex, rawBoard) => _.split(
          // split each char into an element; ie:
          // "   p    " => [" ", " ", " ", "p", " ", " ", " ", " "]
          _.join(
              // join generated spaces and piece letters ;
              // ie: ["   ", "p", "    "] => "   p    "
              _.map(
                  // replace space numbers with space string;
                  // ie: 3p4 => ["   ", "p", "    "]
                  _.split(row, ''),
                  (piece, columnIndex, row) => {
                    const spaceNumber = _.parseInt(piece);
                    if (!_.isNaN(spaceNumber)) {
                      return _.repeat(' ', spaceNumber);
                    } else {
                      return piece;
                    }
                  },
              ),
              '',
          ),
          '',
      ),
  );
}

/**
 * Parses a raw FEN string into a FENBoard object.
 * @param {string} rawBoard - the raw board string.
 * @return {FENBoard} The parsed FENBoard.
 */
function parseFEN(rawBoard) {
  return {
    board: parseFENBoard(rawBoard),
    turn: null, // TODO: Parse these
    castling: null,
    enpassant: null,
    halfmoveClock: null,
    fullmoveNumber: null,
  };
}

/**
 * Returns the 2D array coordinates of the piece specified
 * by letter, number.
 * @param {string} letter - the letter component of the chess position.
 * @param {number} number - the number component of the chess position.
 * @return {Coordinate} The (row, column) tuple.
 */
function getFENBoardCoords(letter, number) {
  return {
    row: 8 - number,
    column: letter.charCodeAt(0) - LOWER_A_CHAR_CODE,
  };
}

/**
 * Returns the piece located at the specified chess position.
 * @param {FENBoard} FENBoard - the FENBoard object.
 * @param {string} letter - the letter component of the chess position.
 * @param {number} number - the number component of the chess position.
 * @return {string} The chess piece.
 */
function getFENBoardAt(FENBoard, letter, number) {
  const coords = getFENBoardCoords(letter, number);
  const board = FENBoard.board;
  return board[coords.row][coords.column];
}

/**
 * Assumes the piece at initial position is a pawn and returns
 * whether this is valid move.
 * @param {FENBoard} FENBoard - the FENBoard object.
 * @param {string} initialLetter - the letter component of the initial
 * chess position.
 * @param {number} initialNumber - the number component of the initial
 * chess position.
 * @param {string} finalLetter - the letter component of the final
 * chess position.
 * @param {number} finalNumber - the number component of the final
 * chess position.
 * @return {boolean} Whether the move is valid.
 */
function canFENBoardMovePawn( // eslint-disable-line
    FENBoard,
    initialLetter,
    initialNumber,
    finalLetter,
    finalNumber,
) {
  return false; // for you to do
}

/**
 * Returns whether a specified move from initial position to final
 * position is valid or not.
 * @param {FENBoard} FENBoard - the FENBoard object.
 * @param {string} initialLetter - the letter component of the initial
 * chess position.
 * @param {number} initialNumber - the number component of the initial
 * chess position.
 * @param {string} finalLetter - the letter component of the final
 * chess position.
 * @param {number} finalNumber - the number component of the final
 * chess position.
 * @return {boolean} Whether the move is valid.
 */
function isValidFENBoardMove(
    FENBoard,
    initialLetter,
    initialNumber,
    finalLetter,
    finalNumber,
) {
  let piece = getFENBoardAt(FENBoard, initialLetter, initialNumber);
  const isWhite = piece !== _.toLower(piece); // eslint-disable-line

  piece = _.toLower(piece);
  switch (piece) {
    case 'p':
      // if the pawn can move to designated position;
      // FENBoardMove(...)
      break;
    case 'n': // knight case
      // if it seems legit, call
      // FENBoardMove(...)
      break;
    default:
      break;
  }
  return FENBoard;
}

/**
 * Moves the piece at a specified initial position to a specified
 * final position,
 * overriding what was there.
 * Does NOT do any error checking (you can wipe same color'd pieces).
 * @param {FENBoard} FENBoard - the FENBoard object.
 * @param {string} initialLetter - the letter component of the initial
 * chess position.
 * @param {number} initialNumber - the number component of the initial
 * chess position.
 * @param {string} finalLetter - the letter component of the final
 * chess position.
 * @param {number} finalNumber - the number component of the final
 * chess position.
 */
function doFENBoardRawMove(
    FENBoard,
    initialLetter,
    initialNumber,
    finalLetter,
    finalNumber,
) {
  const coords = getFENBoardCoords(letter, number); // eslint-disable-line
  const board = FENBoard.board; // eslint-disable-line
  // for you to do
}

/**
 * Assumes the piece is a king, and performs the castle maneuvre.
 * Does NOT do any error checking (this can screw up the board state).
 * @param {FENBoard} FENBoard - the FENBoard object.
 * @param {string} initialLetter - the letter component of the initial
 * chess position.
 * @param {number} initialNumber - the number component of the initial
 * chess position.
 * @param {string} finalLetter - the letter component of the final
 * chess position.
 * @param {number} finalNumber - the number component of the final
 * chess position.
 */
function doFENBoardCastle(
    FENBoard,
    initialLetter,
    initialNumber,
    finalLetter,
    finalNumber,
) {
  // for you to do (LATER)
}

/**
 * Assumes the piece is a pawn, and performs the en passant maneuvre.
 * Does NOT do any error checking (this can screw up the board state).
 * @param {FENBoard} FENBoard - the FENBoard object.
 * @param {string} initialLetter - the letter component of the initial
 * chess position.
 * @param {number} initialNumber - the number component of the initial
 * chess position.
 * @param {string} finalLetter - the letter component of the final
 * chess position.
 * @param {number} finalNumber - the number component of the final
 * chess position.
 */
function doFENBoardEnPassant(
    FENBoard,
    initialLetter,
    initialNumber,
    finalLetter,
    finalNumber,
) {
  // for you to do (LATER)
}


module.exports = {
  parseFEN,
  getFENBoardAt,
  isValidFENBoardMove,
  doFENBoardRawMove,
  doFENBoardCastle,
  doFENBoardEnPassant,
};
