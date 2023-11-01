export function simple_assembler(program) {
  const result = {};
  let currentInstructionIdx = 0;

  function executeAction(instruction) {
    const [action, register, value] = instruction.split(' ');

    switch (action) {
      case 'mov': {
        if (Number.isSafeInteger(+value)) {
          result[register] = +value;
        } else if (value in result) {
          result[register] = result[value];
        }
        break;
      }
      case 'inc': {
        if (register in result) {
          result[register]++;
        }
        break;
      }
      case 'dec': {
        if (register in result) {
          result[register]--;
        }
        break;
      }
      case 'jnz': {
        const jnzIdx = Number.isSafeInteger(+value)
          ? currentInstructionIdx + +value
          : currentInstructionIdx + result[value];
          if (result[register] !== 0) {
            currentInstructionIdx = jnzIdx - 1;
          }
        break;
      }
      default: {
        break;
      }
    }
  }

  while (currentInstructionIdx < program.length) {
    executeAction(program[currentInstructionIdx]);
    currentInstructionIdx++;
  }

  return result;
}