const PI = 3.14159;

const sphereVolume = function (radius) {
  vol = (4 / 3) * PI * (radius * radius * radius);
  return vol;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  vol = (1 / 3) * PI * (radius * radius) * height;
  return vol;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  vol = height * width * depth;
  return vol;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  tvol = 0;
  for (let i = 0; i < solids.length; i++) {
    switch (solids[i].type) {
      case 'sphere':
        tvol = tvol + sphereVolume(solids[i].radius);
        break;
      case 'cone':
        tvol = tvol + coneVolume(solids[i].radius, solids[i].height);
        break;
      case 'prism':
        tvol =
          tvol +
          prismVolume(solids[i].height, solids[i].width, solids[i].depth);
        break;
      default:
        break;
    }
  }
  return tvol;
};

const largeSphere = {
  type: 'sphere',
  radius: 40,
};

const smallSphere = {
  type: 'sphere',
  radius: 10,
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
