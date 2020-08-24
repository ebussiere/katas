//const compassDirection = ['east', 'north', 'west', 'south'];
const blocksAway = function (directions) {
  let northDisplacement = 0;
  let eastDisplacement = 0;
  let heading = 'north';

  const directionsToArray = function (directions) {
    let array = [];
    for (let i = 0; i < directions.length; i++) {
      let directionElement = [];
      if (i % 2 == 0) {
        directionElement.push(directions[i], directions[i + 1]);
        array.push(directionElement);
      }
    }
    return array;
  };

  for (const d of directionsToArray(directions)) {
    switch (heading) {
      case 'east':
        if (d[0] == 'right') {
          northDisplacement = northDisplacement - d[1];
          heading = 'south';
        } else {
          northDisplacement = northDisplacement + d[1];
          heading = 'north';
        }
        break;
      case 'north':
        if (d[0] == 'right') {
          eastDisplacement = eastDisplacement + d[1];
          heading = 'east';
        } else {
          eastDisplacement = eastDisplacement - d[1];
          heading = 'west';
        }
        break;
      case 'south':
        if (d[0] == 'right') {
          eastDisplacement = eastDisplacement - d[1];
          heading = 'west';
        } else {
          eastDisplacement = eastDisplacement + d[1];
          heading = 'east';
        }
        break;
      case 'west':
        if (d[0] == 'right') {
          northDisplacement = northDisplacement + d[1];
          heading = 'north';
        } else {
          northDisplacement = northDisplacement - d[1];
          heading = 'south';
        }
        break;
      default:
        break;
    }
  }
  return {
    east: Math.abs(eastDisplacement),
    north: Math.abs(northDisplacement),
  };
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(
  blocksAway([
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
  ]),
);

console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
