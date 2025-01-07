const axisMap = {
  'R': 'RL', 'L': 'RL',
  'B': 'BF', 'F': 'BF',
  'U': 'UD', 'D': 'UD'
};

function checkAxis(moves) {
  const axes = moves.map(move => axisMap[move[0]]);
  return axes.every(axis => axis === axes[0]);
}

export function generateScramble(minLength = 22, maxLength = 26) {
  const moves = ['R', 'L', 'B', 'F', 'U', 'D'];
  const mods = ['', '\'', '2'];

  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  const res = [`${moves[Math.floor(Math.random() * moves.length)]}${mods[Math.floor(Math.random() * mods.length)]}`];

  while (res.length < length) {
    const allowedMoves = moves.filter(move => move !== res[res.length - 1][0]);
    const move = allowedMoves[Math.floor(Math.random() * allowedMoves.length)];
    const mod = mods[Math.floor(Math.random() * mods.length)];
    const lastMoves = res.slice(-2).concat([move]);

    if (res.length >= 2 && res[res.length - 2][0] === move && checkAxis(lastMoves)) {
      continue;
    }

    res.push(`${move}${mod}`);
  }

  return res.join(' ');
}
