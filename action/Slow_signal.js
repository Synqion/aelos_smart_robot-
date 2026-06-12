Blockly.Blocks['Slow_signal'] = {
  init: function () {
    this.jsonInit({
      type: 'Slow_signal',
      message0: '%{BKY_SLOW_SIGNAL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Slow_signal'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 107, 162, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 100, 100, 93, 57, 125, 101, 107, 169, 59, 101, 107, 145, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 107, 162, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 100, 100, 93, 57, 125, 101, 107, 169, 59, 101, 107, 145, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Slow_signal'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SLOW_SIGNAL'] + "')\n";
  return code;
}

