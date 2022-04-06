const input = `Faerun to Norrath = 129
Faerun to Tristram = 58
Faerun to AlphaCentauri = 13
Faerun to Arbre = 24
Faerun to Snowdin = 60
Faerun to Tambi = 71
Faerun to Straylight = 67
Norrath to Tristram = 142
Norrath to AlphaCentauri = 15
Norrath to Arbre = 135
Norrath to Snowdin = 75
Norrath to Tambi = 82
Norrath to Straylight = 54
Tristram to AlphaCentauri = 118
Tristram to Arbre = 122
Tristram to Snowdin = 103
Tristram to Tambi = 49
Tristram to Straylight = 97
AlphaCentauri to Arbre = 116
AlphaCentauri to Snowdin = 12
AlphaCentauri to Tambi = 18
AlphaCentauri to Straylight = 91
Arbre to Snowdin = 129
Arbre to Tambi = 53
Arbre to Straylight = 40
Snowdin to Tambi = 15
Snowdin to Straylight = 99
Tambi to Straylight = 70`

const INPUT = input.split('\n');
const DIRECTION_REGEX = /(\w+) to (\w+) = (\d+)/;

// Takes input and builds map of all possible distances between two points
const buildDistanceMap = input => {
  const map = new Map();

  input.forEach(direction => {
    const parsed = direction.match(DIRECTION_REGEX);
    map.set(`${parsed[1]} -> ${parsed[2]}`, +parsed[3]);
    map.set(`${parsed[2]} -> ${parsed[1]}`, +parsed[3]);
  });

  return map;
};

// Takes input and builds unique set of all places that need to be visited
const buildPlacesSet = input => {
  const places = new Set();

  input.forEach(direction => {
    const parsed = direction.match(DIRECTION_REGEX);
    places.add(parsed[1]).add(parsed[2]);
  });

  return places;
};

// Takes array of items and builds array with all possible permutations
const permute = input => {
  const array = Array.from(input);
  const permute = (res, item, key, arr) => {
    return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(perm => [item].concat(perm)) || item);
  };

  return array.reduce(permute, []);
};

const distances = buildDistanceMap(INPUT);
const places = buildPlacesSet(INPUT);
const allPossibleRoutes = permute(places);

// @ts-ignore
const allPossibleDistances = allPossibleRoutes.reduce((acc, route) => {
  let total = 0;

  for (let i = 0; i < route.length; i++) {
    if (route[i + 1] === undefined) break;

    total += distances.get(`${route[i]} -> ${route[i + 1]}`);
  }

  return acc.concat([total]);
}, []);

const result = Math.min.apply(Math, allPossibleDistances);

console.log(result);


// PART 2

const longest = Math.max.apply(Math, allPossibleDistances);

console.log(longest);