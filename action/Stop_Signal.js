Blockly.Blocks['Stop_Signal'] = {
  init: function () {
    this.jsonInit({
      type: 'Stop_Signal',
      message0: '%{BKY_STOP_SIGNAL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Stop_Signal'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(48)',
    'MOTOmove16(92, 182, 71, 100, 93, 57, 124, 101, 121, 171, 100, 101, 108, 145, 76, 101)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Stop_Signal'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['STOP_SIGNAL'] + "')\n";
  return code;
}

