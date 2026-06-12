Blockly.Blocks['Stand_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Stand_up',
      message0: '%{BKY_STAND_UP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Stand_up'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Stand_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['STAND_UP'] + "')\n";
  return code;
}

