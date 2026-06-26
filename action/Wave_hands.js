Blockly.Blocks['Wave_hands'] = {
  init: function () {
    this.jsonInit({
      type: 'Wave_hands',
      message0: '%{BKY_WAVE_HANDS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Wave_hands'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(125, 175, 100, 100, 93, 55, 124, 99, 75, 25, 105, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(136)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 120, 100, 93, 55, 124, 99, 75, 25, 135, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(130)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 100, 100, 93, 55, 124, 100, 85, 25, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(136)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 65, 100, 93, 55, 124, 100, 85, 25, 80, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(110)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 100, 100, 93, 55, 124, 100, 85, 25, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(161)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 120, 100, 93, 55, 124, 99, 75, 25, 135, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(130)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 100, 100, 93, 55, 124, 100, 85, 25, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(136)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 65, 100, 93, 55, 124, 100, 85, 25, 80, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(110)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 100, 100, 93, 55, 124, 100, 85, 25, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(161)',
    'MOTOsetspeed(35)',
    'MOTOmove16(120, 175, 100, 100, 93, 55, 124, 100, 85, 25, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Wave_hands'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['WAVE_HANDS'] + "')\n";
  return code;
}

