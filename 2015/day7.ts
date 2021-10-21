
const day7 = require('./day7_input.ts')

const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENTS_REGEX = /[a-z0-9]+/g;


// PART 1
const WIRES = new Map();

const BITWISE_METHODS = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: a => ~a,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b
};

const parseInstruction = instruction => {
    const command = instruction.match(COMMAND_REGEX);
    const args = instruction.match(ARGUMENTS_REGEX);
    const destination = args.pop();

    return {
        command: command && command[0],
        args: args.map(arg => isNaN(Number(arg)) ? arg : Number(arg)),
        destination: destination
    };
};

const calculateWire = wireName => {
    const wire = WIRES.get(wireName);

    if (typeof wireName === 'number') return wireName;
    if (typeof wire === 'number') return wire;
    if (typeof wire === 'undefined') return undefined;

    if (!wire.command) {
        WIRES.set(wireName, calculateWire(wire.args[0]));
    } else {
        WIRES.set(wireName, BITWISE_METHODS[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])));
    }

    return WIRES.get(wireName);
};

day7.input.split(/\r?\n/).forEach(instruction => {
    const parsedInstruction = parseInstruction(instruction);
    WIRES.set(parsedInstruction.destination, { command: parsedInstruction.command, args: parsedInstruction.args });
});

// console.log(calculateWire('a'));

// PART 2
WIRES.set('b', 3176);

console.log(calculateWire('a'));