Blockly.Blocks['Front_Hug'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_Hug',
      message0: '%{BKY_FRONT_HUG}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_Hug'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(70, 90, 190, 100, 93, 55, 124, 100, 110, 110, 10, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(31, 38, 169, 100, 93, 55, 124, 100, 180, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(18, 38, 169, 100, 93, 55, 124, 100, 190, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(31, 38, 169, 100, 93, 55, 124, 100, 180, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(18, 38, 169, 100, 93, 55, 124, 100, 190, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(31, 38, 169, 100, 93, 55, 124, 100, 180, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(18, 38, 169, 100, 93, 55, 124, 100, 190, 158, 14, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(90, 30, 130, 100, 90, 55, 124, 100, 110, 170, 70, 100, 110, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_Hug'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_HUG'] + "')\n";
  return code;
}

