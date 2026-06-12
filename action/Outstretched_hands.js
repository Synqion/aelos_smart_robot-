Blockly.Blocks['Outstretched_hands'] = {
  init: function () {
    this.jsonInit({
      type: 'Outstretched_hands',
      message0: '%{BKY_OUTSTRETCHED_HANDS}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Outstretched_hands'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(68)',
    'MOTOmove16(76, 11, 190, 100, 93, 55, 124, 99, 124, 189, 10, 100, 107, 145, 76, 101)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(40)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Outstretched_hands'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['OUTSTRETCHED_HANDS'] + "')\n";
  return code;
}

