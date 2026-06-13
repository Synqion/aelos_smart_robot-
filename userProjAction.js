Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat',
      message0: '%{BKY_SQUAT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat'] = function (block) {
  const code = [
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 130, 130, 77, 100, 120, 170, 100, 100, 70, 70, 123, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT'] + "')\n";
  return code;
}

Blockly.Blocks['Salute_two'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_two',
      message0: '%{BKY_SALUTE_TWO}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_two'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 47, 49, 103, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_two'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_TWO'] + "')\n";
  return code;
}

Blockly.Blocks['aelos_while'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_while',
      message0: '%{BKY_AELOS_WHILE} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_while'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const do_code = Blockly.Lua.statementToCode(block, 'do') || '  pass\n';

  const code = `while (${condition})\ndo\n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_while'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `while ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['Split_goal'] = {
  init: function () {
    this.jsonInit({
      type: 'Split_goal',
      message0: '%{BKY_SPLIT_GOAL}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Split_goal'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 20, 128, 133, 59, 65, 100, 100, 100, 180, 72, 67, 141, 135)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(101, 100, 101, 20, 80, 32, 135, 65, 99, 100, 99, 180, 120, 168, 65, 135)',
    'MOTOwait()',
    'DelayMs(600)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 20, 128, 133, 59, 65, 100, 100, 100, 180, 72, 67, 141, 135)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(103, 39, 113, 74, 125, 139, 62, 74, 97, 161, 87, 126, 75, 61, 138, 126)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 125, 135, 67, 100, 115, 150, 70, 100, 75, 65, 134, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 98, 108, 143, 44, 103, 118, 166, 99, 103, 97, 59, 160, 103)',
    'MOTOwait()',
    'DelayMs(250)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Split_goal'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPLIT_GOAL'] + "')\n";
  return code;
}

Blockly.Blocks['age_stage'] = {
  init: function () {
    this.jsonInit({
      type: 'age_stage',
      message0: '%{BKY_VISUAL_AGE_STAGE_TITLE_1}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        faceTimeOptions,
        { type: 'field_dropdown', name: 'ages', options: faceAgeOptions() },
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['age_stage'] = function (block) {
  const code = 'false';
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['age_stage'] = function (block) {
  const camera = block.getFieldValue('camera');
  const ages = block.getFieldValue('ages');
  const time = block.getFieldValue('time');
  const code = `face_detect.face_age_detect(${time}, ${ages}, '${camera}')`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['remote_control'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control',
      message0: '%{BKY_GAMEPAD} %1 %{BKY_GAMEPAD_VAR} %2',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'input_value',
          name: 'variable',
          check: 'Variable',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control'] = function(block) {
  const variable = Blockly.Lua.valueToCode(block, "variable", Blockly.Lua.ORDER_NONE);
  let code = "";
  if(variable) {
    code = `${variable} = HKEY()\n`;
  } else {
    code = `HKEY()\n`;
  }
  return code;
}

Blockly.Python['remote_control'] = function (block) {
  const variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  const code = variable ? `${variable} = get_key.key()\n` : `get_key.key()\n`;
  return code;
}

Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const do_code = Blockly.Lua.statementToCode(block, 'do');

  const code = `if ${condition} then \n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'input_1',
          check: ['Number', 'Variable', 'Remote_type'],
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'input_value',
          name: 'input_2',
          check: ['Number', 'Variable', 'Remote_type'],
        },
      ],
      inputsInline: true,
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '~=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Lua.valueToCode(block, 'input_1', Blockly.Lua.ORDER_ATOMIC);
  const input_2 = Blockly.Lua.valueToCode(block, 'input_2', Blockly.Lua.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'false';
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '!=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Python.valueToCode(block, 'input_1', Blockly.Python.ORDER_ATOMIC);
  const input_2 = Blockly.Python.valueToCode(block, 'input_2', Blockly.Python.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'False';
  }

  return [code, Blockly.Python.ORDER_NONE];
}

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

Blockly.Blocks['remote_control_button'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control_button',
      message0: '%{BKY_REMOTE_CONTROL_BUTTON_REMOTE}， %1 ，%{BKY_REMOTE_CONTROL_BUTTON_KEY} %2',
      args0: [
        { type: 'field_dropdown', name: 'mode', options: remoteControlMode() },
        { type: 'field_dropdown', name: 'key', options: remoteControlKey },
      ],
      output: 'Remote_type',
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control_button'] = function(block) {
  const mode = block.getFieldValue("mode");
  const key = block.getFieldValue("key");
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['remote_control_button'] = function (block) {
  const mode = block.getFieldValue('mode');
  const key = block.getFieldValue('key');
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC];
}

Blockly.Blocks['Sit'] = {
  init: function () {
    this.jsonInit({
      type: 'Sit',
      message0: '%{BKY_SIT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Sit'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 31, 100, 100, 95, 130, 60, 100, 121, 171, 100, 100, 105, 70, 140, 100)',
    'MOTOwait()',
    'DelayMs(3500)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Sit'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SIT'] + "')\n";
  return code;
}

Blockly.Blocks['Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Bow',
      message0: '%{BKY_BOW}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(18)',
    'MOTOmove16(80, 30, 100, 100, 150, 75, 130, 100, 120, 170, 100, 100, 50, 125, 70, 100)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BOW'] + "')\n";
  return code;
}

Blockly.Blocks['music'] = {
  init: function () {
    this.jsonInit({
      type: 'music',
      message0: '%{BKY_AELOS_MUSIC} %1',
      args0: [
        {
          type: 'field_input',
          name: 'music_name',
          text: '%{BKY_DEFAULT_MUSIC_INPUT}',
          spellcheck: false,
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['music'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;
    
  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return code;
}

Blockly.Python['music'] = function (block) {
  const music_name = block.getFieldValue('music_name');
  let code = `music.music_play(None)\n`;

  if (music_name && music_name !== Blockly.Msg['DEFAULT_MUSIC_INPUT']) {
    code = `music.music_play('${music_name}')\n`;
  }

  return code;
}

Blockly.Blocks['1781227678384'] = {
  init: function() {
    this.jsonInit({
      "type": "1781227678384",
      "message0": "科目三",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781227678384'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(2000)\nMOTOsetspeed(30)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 91, 91, 31, 103, 107, 106, 144, 76, 104, 0, 0, 98)\nMOTOwait()\nDelayMs(300)\n\n\n-- 红尘\nMOTOsetspeed(20)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 87, 186, 160, 33, 107, 106, 144, 76, 108, 0, 0, 98)\nMOTOwait()\nDelayMs(500)\n\n\n-- 俱往矣\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 110, 109, 75, 117, 111, 92, 98, 97, 114, 95, 112, 87, 115, 0, 0, 177)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 苍天\nMOTOsetspeed(15)\nMOTOmove19(107, 99, 99, 88, 92, 76, 110, 88, 120, 170, 100, 94, 101, 129, 85, 89, 0, 0, 34)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 对月\nMOTOsetspeed(15)\nMOTOmove19(89, 100, 188, 100, 93, 55, 124, 100, 112, 105, 14, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 寂寥\nMOTOsetspeed(15)\nMOTOmove19(40, 23, 187, 100, 154, 96, 121, 100, 164, 174, 14, 100, 46, 104, 76, 100, 0, 0, 167)\nMOTOwait()\nDelayMs(1400)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 128, 94, 93, 55, 124, 93, 119, 170, 69, 107, 107, 145, 76, 106, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(36)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 枕1\nMOTOsetspeed(34)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(34)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 浓烈\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 只身1\nMOTOsetspeed(10)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 看惯2\nMOTOsetspeed(10)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(12)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 这成败\nMOTOsetspeed(50)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 江湖一笑\nMOTOsetspeed(40)\nMOTOmove19(89, 50, 188, 84, 93, 55, 124, 62, 52, 41, 95, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 63, 189, 100, 93, 55, 124, 100, 37, 67, 98, 117, 107, 145, 76, 135, 0, 0, 135)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 84, 93, 55, 124, 62, 25, 94, 102, 99, 107, 145, 76, 96, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 100, 93, 55, 124, 100, 25, 94, 102, 117, 107, 145, 76, 135, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(160, 143, 101, 84, 93, 55, 124, 62, 109, 154, 11, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 123, 102, 100, 93, 55, 124, 100, 111, 140, 10, 117, 107, 145, 76, 135, 0, 0, 62)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 84, 93, 55, 124, 62, 110, 112, 11, 99, 107, 145, 76, 96, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 100, 93, 55, 124, 100, 110, 112, 11, 117, 107, 145, 76, 135, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 寂寥第一段结束\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1间奏\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(36)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 枕1\nMOTOsetspeed(34)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(34)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 浓烈\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 只身1\nMOTOsetspeed(12)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 看惯2\nMOTOsetspeed(12)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(12)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 这成败\nMOTOsetspeed(50)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 江湖一笑\nMOTOsetspeed(40)\nMOTOmove19(89, 50, 188, 84, 93, 55, 124, 62, 52, 41, 95, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 63, 189, 100, 93, 55, 124, 100, 37, 67, 98, 117, 107, 145, 76, 135, 0, 0, 135)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 84, 93, 55, 124, 62, 25, 94, 102, 99, 107, 145, 76, 96, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 100, 93, 55, 124, 100, 25, 94, 102, 117, 107, 145, 76, 135, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(160, 143, 101, 84, 93, 55, 124, 62, 109, 154, 11, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 123, 102, 100, 93, 55, 124, 100, 111, 140, 10, 117, 107, 145, 76, 135, 0, 0, 62)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 84, 93, 55, 124, 62, 110, 112, 11, 99, 107, 145, 76, 96, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 100, 93, 55, 124, 100, 110, 112, 11, 117, 107, 145, 76, 135, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 第二段结束\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(350)\nMOTOsetspeed(30)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 91, 91, 31, 103, 107, 106, 144, 76, 104, 0, 0, 98)\nMOTOwait()\nDelayMs(300)\n\n\n-- 红尘\nMOTOsetspeed(20)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 87, 186, 160, 33, 107, 106, 144, 76, 108, 0, 0, 98)\nMOTOwait()\nDelayMs(500)\n\n\n-- 俱往矣\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 110, 109, 75, 117, 111, 92, 98, 97, 114, 95, 112, 87, 115, 0, 0, 177)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 苍天\nMOTOsetspeed(15)\nMOTOmove19(107, 99, 99, 88, 92, 76, 110, 88, 120, 170, 100, 94, 101, 129, 85, 89, 0, 0, 34)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 对月\nMOTOsetspeed(15)\nMOTOmove19(89, 100, 188, 100, 93, 55, 124, 100, 112, 105, 14, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 寂寥\nMOTOsetspeed(15)\nMOTOmove19(40, 23, 187, 100, 154, 96, 121, 100, 164, 174, 14, 100, 46, 104, 76, 100, 0, 0, 167)\nMOTOwait()\nDelayMs(1800)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781227678384'] = function(block) {
  let code = "base_action.action('科目三')\n";
  return code;
}

Blockly.Blocks['1781227717574'] = {
  init: function() {
    this.jsonInit({
      "type": "1781227717574",
      "message0": "少年中国说",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781227717574'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(84, 38, 100, 100, 93, 55, 124, 100, 83, 30, 102, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(167, 144, 99, 100, 93, 55, 124, 100, 32, 61, 99, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(86, 106, 99, 100, 93, 55, 124, 100, 25, 76, 99, 100, 107, 145, 76, 100, 0, 0, 159)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(50)\nMOTOmove19(87, 36, 99, 100, 93, 55, 124, 100, 106, 167, 103, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(2000)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(84, 38, 100, 100, 93, 55, 124, 100, 83, 30, 102, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(167, 144, 99, 100, 93, 55, 124, 100, 32, 61, 99, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(86, 106, 99, 100, 93, 55, 124, 100, 25, 76, 99, 100, 107, 145, 76, 100, 0, 0, 159)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(50)\nMOTOmove19(87, 36, 99, 100, 93, 55, 124, 100, 106, 167, 103, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(2000)\n\n\n-- 红日\nMOTOsetspeed(15)\nMOTOmove19(87, 36, 98, 100, 93, 55, 124, 100, 105, 34, 100, 100, 107, 145, 76, 100, 0, 0, 57)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(15)\nMOTOmove19(87, 163, 99, 100, 93, 55, 124, 100, 105, 34, 100, 100, 107, 145, 76, 100, 0, 0, 167)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(15)\nMOTOmove19(143, 163, 99, 100, 130, 150, 62, 100, 58, 34, 100, 100, 70, 50, 140, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1500)\nMOTOsetspeed(15)\nMOTOmove19(81, 21, 188, 95, 93, 55, 124, 95, 118, 169, 99, 104, 107, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(1200)\nMOTOsetspeed(15)\nMOTOmove19(81, 18, 187, 87, 93, 55, 124, 87, 118, 183, 13, 117, 106, 145, 76, 116, 0, 0, 100)\nMOTOwait()\nDelayMs(1200)\n\n\n-- 乳虎啸谷\nMOTOsetspeed(15)\nMOTOmove19(82, 100, 187, 95, 93, 55, 124, 95, 119, 183, 13, 104, 107, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(15)\nMOTOmove19(82, 100, 187, 100, 93, 55, 124, 100, 118, 100, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(35)\nMOTOmove19(22, 39, 187, 100, 93, 55, 124, 100, 178, 161, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 100, 93, 55, 124, 100, 100, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(35)\nMOTOmove19(50, 185, 100, 100, 116, 111, 90, 100, 150, 15, 100, 100, 84, 88, 110, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 百兽争狂\nMOTOsetspeed(35)\nMOTOmove19(120, 180, 100, 100, 93, 55, 124, 100, 74, 22, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1500)\nMOTOsetspeed(50)\nMOTOmove19(100, 100, 100, 100, 93, 55, 124, 100, 100, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(120, 180, 100, 100, 93, 55, 124, 100, 74, 22, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 106, 96, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(92, 101, 99, 100, 93, 55, 124, 100, 106, 96, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(11)\nMOTOmove19(80, 40, 100, 90, 91, 48, 129, 88, 120, 160, 100, 92, 107, 146, 76, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(90, 40, 100, 86, 95, 60, 120, 85, 110, 160, 100, 98, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(90, 70, 100, 84, 94, 54, 126, 80, 110, 130, 100, 98, 102, 137, 81, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100, 100, 100, 97, 93, 55, 124, 98, 100, 100, 100, 103, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(100, 100, 100, 97, 93, 55, 124, 98, 100, 100, 100, 103, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(101, 100, 18, 101, 106, 81, 108, 108, 99, 101, 16, 107, 106, 145, 76, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(101, 100, 187, 93, 94, 55, 124, 86, 99, 101, 190, 99, 94, 119, 92, 92, 0, 0, 100)\nMOTOwait()\n\n\n-- 顶脊梁\nMOTOsetspeed(21)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(120, 62, 98, 91, 100, 57, 127, 101, 41, 105, 98, 108, 122, 178, 64, 120, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 85, 118, 94, 103, 102, 41, 47, 118, 108, 121, 175, 59, 123, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(250)\n\n\n-- 今朝为我少年郎\nMOTOsetspeed(30)\nMOTOmove19(79, 29, 190, 100, 94, 55, 123, 100, 119, 170, 100, 100, 105, 144, 76, 99, 0, 0, 98)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 101, 190, 91, 101, 72, 115, 90, 118, 162, 100, 107, 92, 126, 81, 108, 0, 0, 158)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 101, 190, 91, 101, 72, 115, 90, 189, 162, 17, 107, 92, 126, 81, 108, 0, 0, 158)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 64, 36, 101, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 敢问天地\nMOTOsetspeed(30)\nMOTOmove19(100, 167, 98, 100, 93, 55, 124, 100, 98, 34, 98, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45, 24, 143, 86, 94, 55, 122, 85, 155, 171, 56, 117, 105, 143, 78, 113, 0, 0, 99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(81, 97, 190, 86, 94, 55, 122, 85, 100, 107, 10, 117, 105, 143, 78, 113, 0, 0, 99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(10, 54, 185, 100, 93, 55, 124, 100, 190, 152, 16, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(125, 84, 20, 100, 93, 55, 124, 100, 100, 98, 186, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 不负年少\nMOTOsetspeed(30)\nMOTOmove19(156, 148, 99, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(2000)\n\n\n-- 不负年少\nMOTOsetspeed(30)\nMOTOmove19(156, 148, 99, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(84, 38, 100, 100, 93, 55, 124, 100, 83, 30, 102, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(167, 144, 99, 100, 93, 55, 124, 100, 32, 61, 99, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(50)\nMOTOmove19(86, 106, 99, 100, 93, 55, 124, 100, 25, 76, 99, 100, 107, 145, 76, 100, 0, 0, 159)\nMOTOwait()\nDelayMs(800)\n\n\n-- 少年志\nMOTOsetspeed(50)\nMOTOmove19(39, 25, 186, 100, 93, 55, 124, 100, 157, 183, 17, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(50)\nMOTOmove19(87, 36, 99, 100, 93, 55, 124, 100, 106, 167, 103, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(2000)\n\n\n-- 干将\nMOTOsetspeed(15)\nMOTOmove19(87, 36, 98, 100, 93, 55, 124, 100, 105, 34, 100, 100, 107, 145, 76, 100, 0, 0, 57)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(15)\nMOTOmove19(87, 163, 99, 100, 93, 55, 124, 100, 105, 34, 100, 100, 107, 145, 76, 100, 0, 0, 167)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(15)\nMOTOmove19(143, 163, 99, 100, 130, 150, 62, 100, 58, 34, 100, 100, 70, 50, 140, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1500)\nMOTOsetspeed(15)\nMOTOmove19(81, 21, 188, 95, 93, 55, 124, 95, 118, 169, 99, 104, 107, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(1200)\nMOTOsetspeed(15)\nMOTOmove19(81, 18, 187, 87, 93, 55, 124, 87, 118, 183, 13, 117, 106, 145, 76, 116, 0, 0, 100)\nMOTOwait()\nDelayMs(1200)\n\n\n-- 前途似海\nMOTOsetspeed(15)\nMOTOmove19(82, 100, 187, 95, 93, 55, 124, 95, 119, 183, 13, 104, 107, 145, 76, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(15)\nMOTOmove19(82, 100, 187, 100, 93, 55, 124, 100, 118, 100, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(35)\nMOTOmove19(22, 39, 187, 100, 93, 55, 124, 100, 178, 161, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(35)\nMOTOmove19(100, 100, 100, 100, 93, 55, 124, 100, 100, 100, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(35)\nMOTOmove19(50, 185, 100, 100, 116, 111, 90, 100, 150, 15, 100, 100, 84, 88, 110, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 百兽争狂\nMOTOsetspeed(35)\nMOTOmove19(120, 180, 100, 100, 93, 55, 124, 100, 74, 22, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 106, 96, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(92, 101, 99, 100, 93, 55, 124, 100, 106, 96, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(11)\nMOTOmove19(80, 40, 100, 90, 91, 48, 129, 88, 120, 160, 100, 92, 107, 146, 76, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(90, 40, 100, 86, 95, 60, 120, 85, 110, 160, 100, 98, 107, 146, 76, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(90, 70, 100, 84, 94, 54, 126, 80, 110, 130, 100, 98, 102, 137, 81, 92, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(100, 100, 100, 97, 93, 55, 124, 98, 100, 100, 100, 103, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(100, 100, 100, 97, 93, 55, 124, 98, 100, 100, 100, 103, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(101, 100, 18, 101, 106, 81, 108, 108, 99, 101, 16, 107, 106, 145, 76, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(101, 100, 187, 93, 94, 55, 124, 86, 99, 101, 190, 99, 94, 119, 92, 92, 0, 0, 100)\nMOTOwait()\n\n\n-- 顶脊梁\nMOTOsetspeed(21)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(120, 62, 98, 91, 100, 57, 127, 101, 41, 105, 98, 108, 122, 178, 64, 120, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 85, 118, 94, 103, 102, 41, 47, 118, 108, 121, 175, 59, 123, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(250)\n\n\n-- 今朝为我少年郎\nMOTOsetspeed(30)\nMOTOmove19(79, 29, 190, 100, 94, 55, 123, 100, 119, 170, 100, 100, 105, 144, 76, 99, 0, 0, 98)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 101, 190, 91, 101, 72, 115, 90, 118, 162, 100, 107, 92, 126, 81, 108, 0, 0, 158)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 101, 190, 91, 101, 72, 115, 90, 189, 162, 17, 107, 92, 126, 81, 108, 0, 0, 158)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 64, 36, 101, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 敢问天地\nMOTOsetspeed(30)\nMOTOmove19(100, 167, 98, 100, 93, 55, 124, 100, 98, 34, 98, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(45, 24, 143, 86, 94, 55, 122, 85, 155, 171, 56, 117, 105, 143, 78, 113, 0, 0, 99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(81, 97, 190, 86, 94, 55, 122, 85, 100, 107, 10, 117, 105, 143, 78, 113, 0, 0, 99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(10, 54, 185, 100, 93, 55, 124, 100, 190, 152, 16, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(125, 84, 20, 100, 93, 55, 124, 100, 100, 98, 186, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 不负年少\nMOTOsetspeed(30)\nMOTOmove19(156, 148, 99, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(2000)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781227717574'] = function(block) {
  let code = "base_action.action('少年中国说')\n";
  return code;
}

Blockly.Blocks['color_discrimination'] = {
  init: function () {
    this.jsonInit({
      type: 'color_discrimination',
      message0: '%1 %{BKY_CAMERA} %{BKY_VISUAL_COLOR_DETECTED} %2',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_dropdown', name: 'color', options: colorOptions() },
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_discrimination'] = function (block) {
  const code = 'false';
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['color_discrimination'] = function (block) {
  const color = block.getFieldValue('color');
  const camera = block.getFieldValue('camera');
  const code = generateHsvCode(HAVE_COLOR, camera, hsvMap[color]);
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['color_rgbhsv_position'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_position',
      message0:
        '%1 %{BKY_CAMERA} %2 %{BKY_COLOR_RGBHSV_POSITION_TITLE_1} %3 %4 %{BKY_COLOR_RGBHSV_POSITION_TITLE_2} %5 Hmin: %6 ~Hmax: %7 %8 Smin :  %9 ~Smax :  %10 %11 Vmin : %12 ~Vmax: %13',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'input_dummy' },
        { type: 'field_dropdown', name: 'rect', options: rectOptions() },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_rgbhsv_position'] = function(block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['color_rgbhsv_position'] = function (block) {
  const camera = block.getFieldValue('camera');
  const rect = block.getFieldValue('rect');
  const hmin = block.getFieldValue('hmin');
  const hmax = block.getFieldValue('hmax');
  const smin = block.getFieldValue('smin');
  const smax = block.getFieldValue('smax');
  const vmin = block.getFieldValue('vmin');
  const vmax = block.getFieldValue('vmax');
  const code = generateHsvCode(GET_FRAME, camera, { hmin, hmax, smin, smax, vmin, vmax }, rect);
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['read_distance'] = {
  init: function () {
    this.jsonInit({
      type: 'read_distance',
      message0: '%{BKY_READ_DISTANCE_TITLE_5}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        artagIdOptions,
        {
          type: 'field_dropdown',
          name: 'axis',
          options: [
            ['X', artagOptions.x.lable],
            ['Y', artagOptions.y.lable],
          ],
        },
      ],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['read_distance'] = function(block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['read_distance'] = function (block) {
  const camera = block.getFieldValue('camera');
  const number = block.getFieldValue('number');
  const axis = block.getFieldValue('axis');
  const code = `${GET_SPECIFIES_TAG}(${number}, '${camera}')[${artagOptions[axis].value}]`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['identify_label_number'] = {
  init: function () {
    this.jsonInit({
      type: 'identify_label_number',
      message0: '%1 %{BKY_CAMERA}%{BKY_IDENTIFY_LABEL_NUMBER} %2',
      args0: [{ type: 'field_dropdown', name: 'camera', options: cameraOptions() }, artagIdOptions],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['identify_label_number'] = function (block) {
  const code = 'false';
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['identify_label_number'] = function (block) {
  const camera = block.getFieldValue('camera');
  const number = block.getFieldValue('number');
  const code = `${GET_SPECIFIES_TAG}(${number}, '${camera}')[${artagOptions.x.value}] != 1000`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['read_yaw_angle'] = {
  init: function () {
    this.jsonInit({
      type: 'read_yaw_angle',
      message0: '%{BKY_READ_YAW_ANGLE_3}',
      args0: [{ type: 'field_dropdown', name: 'camera', options: cameraOptions() }, artagIdOptions],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['read_yaw_angle'] = function(block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['read_yaw_angle'] = function (block) {
  const camera = block.getFieldValue('camera');
  const number = block.getFieldValue('number');
  const code = `${GET_SPECIFIES_TAG}(${number}, '${camera}')[${artagOptions.yaw.value}]`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['read_label_id'] = {
  init: function () {
    this.jsonInit({
      type: 'read_label_id',
      message0: '%1 %{BKY_CAMERA}%{BKY_READ_LABEL_ID}',
      args0: [{ type: 'field_dropdown', name: 'camera', options: cameraOptions() }],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['read_label_id'] = function (block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['read_label_id'] = function (block) {
  const camera = block.getFieldValue('camera');
  const code = `${TAG_ID}('${camera}')`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['aelos_if_else'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if_else',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2 %{BKY_AELOS_ELSE} %3',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'if_do',
        },
        {
          type: 'input_statement',
          name: 'else_do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if_else'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const if_do = Blockly.Lua.statementToCode(block, 'if_do');
  const else_do = Blockly.Lua.statementToCode(block, 'else_do');

  const code = `if ${condition} then \n${if_do} \nHKEY()\nelse \n${else_do}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if_else'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const if_do = Blockly.Python.statementToCode(block, 'if_do') || Blockly.Python.PASS;
  const else_do = Blockly.Python.statementToCode(block, 'else_do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${if_do}else:\n${else_do}`;
  return code;
}

Blockly.Blocks['Turn_left_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Turn_left_1_step',
      message0: '%{BKY_TURN_LEFT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Turn_left_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 115, 95, 63, 55, 94, 95, 120, 170, 115, 105, 77, 145, 46, 105)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Turn_left_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TURN_LEFT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['Hands_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Hands_up',
      message0: '%{BKY_HANDS_UP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hands_up'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 185, 100, 76, 27, 142, 100, 120, 170, 15, 100, 124, 173, 58, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(50, 20, 140, 100, 88, 55, 123, 100, 150, 180, 60, 100, 114, 145, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(35)',
    'MOTOmove16(50, 20, 140, 100, 76, 27, 141, 100, 150, 180, 60, 100, 124, 173, 60, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(130, 170, 60, 100, 76, 27, 142, 100, 70, 30, 140, 100, 124, 173, 61, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(42)',
    'MOTOmove16(130, 170, 60, 100, 86, 55, 124, 100, 70, 30, 140, 100, 114, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 30, 130, 100, 90, 55, 124, 100, 110, 170, 70, 100, 110, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hands_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HANDS_UP'] + "')\n";
  return code;
}

Blockly.Blocks['Turn_right_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Turn_right_1_step',
      message0: '%{BKY_TURN_RIGHT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Turn_right_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 85, 95, 123, 55, 154, 95, 120, 170, 85, 105, 137, 145, 106, 105)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Turn_right_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TURN_RIGHT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['Pan_left_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_left_1_step',
      message0: '%{BKY_PAN_LEFT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pan_left_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pan_left_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['PAN_LEFT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['Pan_right_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_right_1_step',
      message0: '%{BKY_PAN_RIGHT_1_STEP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pan_right_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pan_right_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['PAN_RIGHT_1_STEP'] + "')\n";
  return code;
}

Blockly.Blocks['Take_a_slow_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_forward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_FORWARD'] + "')\n";
  return code;
}

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

Blockly.Blocks['loop'] = {
  init: function () {
    this.jsonInit({
      type: 'loop',
      message0: '%{BKY_EXIT_LOOP_TEXT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      tooltip: '',
      helpUrl: '',
      extensions: ['controls_flow_in_loop_check'],
    });
  }
};

Blockly.Lua['loop'] = function(block) {
  let code = 'break\n';
  return code;
}

Blockly.Python['loop'] = function (block) {
  const code = 'break\n';
  return code;
}

Blockly.Blocks['Take_a_slow_step_backward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_backward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_BACKWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_backward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 90, 95, 84, 90, 120, 165, 90, 94, 107, 146, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 88, 71, 53, 105, 85, 120, 165, 110, 93, 100, 144, 79, 91)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 114, 87, 163, 42, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 106, 95, 53, 122, 113, 120, 165, 90, 114, 110, 105, 114, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 121, 109, 120, 165, 90, 112, 129, 147, 95, 115)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 158, 90, 120, 165, 90, 94, 107, 147, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_backward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_BACKWARD'] + "')\n";
  return code;
}

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

Blockly.Blocks['Right_hand_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_hand_up',
      message0: '%{BKY_RIGHT_HAND_UP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Right_hand_up'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 40, 100, 90, 91, 48, 129, 76, 120, 160, 100, 98, 107, 146, 76, 92)',
    'MOTOwait()',
    'MOTOsetspeed(46)',
    'MOTOmove16(40, 43, 141, 90, 101, 71, 112, 69, 44, 86, 100, 98, 107, 146, 76, 92)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(35)',
    'MOTOmove16(40, 43, 141, 96, 93, 56, 124, 96, 170, 138, 100, 106, 107, 146, 76, 104)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(28, 21, 181, 93, 108, 67, 132, 92, 121, 170, 100, 103, 118, 135, 100, 106)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 43, 100, 100, 93, 56, 124, 100, 120, 170, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(81, 31, 100, 100, 93, 56, 124, 100, 121, 170, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Right_hand_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['RIGHT_HAND_UP'] + "')\n";
  return code;
}

Blockly.Blocks['Left_hand_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_hand_up',
      message0: '%{BKY_LEFT_HAND_UP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_hand_up'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 40, 100, 102, 93, 54, 124, 107, 120, 160, 100, 110, 109, 152, 71, 118)',
    'MOTOwait()',
    'MOTOsetspeed(46)',
    'MOTOmove16(156, 114, 100, 102, 93, 54, 128, 108, 160, 157, 59, 111, 99, 132, 83, 121)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(35)',
    'MOTOmove16(30, 62, 100, 94, 93, 54, 124, 96, 160, 157, 59, 104, 107, 144, 76, 104)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(79, 30, 100, 97, 82, 65, 100, 94, 170, 179, 19, 107, 92, 133, 68, 108)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 56, 124, 100, 120, 157, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(81, 31, 100, 100, 93, 56, 124, 100, 121, 170, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_hand_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_HAND_UP'] + "')\n";
  return code;
}

Blockly.Blocks['1781247925217'] = {
  init: function() {
    this.jsonInit({
      "type": "1781247925217",
      "message0": "拿捏latest",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781247925217'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 蹲\nMOTOsetspeed(14)\nMOTOmove19(80, 30, 100, 100, 130, 150, 50, 100, 120, 170, 100, 100, 70, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 伸手\nMOTOsetspeed(14)\nMOTOmove19(80, 30, 150, 100, 130, 150, 50, 100, 120, 170, 50, 100, 70, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 拿捏\nMOTOsetspeed(14)\nMOTOmove19(60, 10, 150, 100, 130, 150, 50, 100, 140, 190, 50, 100, 70, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 举起\nMOTOsetspeed(14)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n";
  return code;
}

Blockly.Python['1781247925217'] = function(block) {
  let code = "base_action.action('拿捏latest')\n";
  return code;
}

Blockly.Blocks['1781252629840'] = {
  init: function() {
    this.jsonInit({
      "type": "1781252629840",
      "message0": "hMoveLeft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781252629840'] = function(block) {
  let code = "MOTOrigid16(30,10,190,45,65,65,65,65,30,190,10,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(80,10,190,100,93,55,124,100,120,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,10,190,85,85,95,85,85,20,190,10,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(80,10,190,90,93,54,124,90,120,190,10,110,107,146,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80,10,190,95,93,54,124,105,120,190,10,106,107,146,76,115,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,10,190,85,85,95,85,85,20,190,10,85,55,55,55,85)\nMOTOsetspeed(20)\nMOTOmove19(80,10,190,106,93,54,124,110,120,190,10,115,107,146,76,115,0,0,100)\nMOTOwait()\nMOTOrigid16(20,10,190,85,55,55,55,85,20,190,10,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,10,190,100,93,55,124,100,120,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781252629840'] = function(block) {
  let code = "base_action.action('hMoveLeft')\n";
  return code;
}

Blockly.Blocks['1781252706320'] = {
  init: function() {
    this.jsonInit({
      "type": "1781252706320",
      "message0": "hMoveRight",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781252706320'] = function(block) {
  let code = "MOTOrigid16(30,10,190,45,65,65,65,65,30,190,10,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(80,10,190,100,93,55,124,100,120,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,10,190,85,85,95,85,85,20,190,10,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(80,10,190,90,93,54,124,100,120,190,10,110,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80,10,190,94,93,54,124,85,120,190,10,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,10,190,85,55,55,55,85,20,190,10,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(80,10,190,85,93,54,124,85,120,190,10,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOrigid16(20,10,190,85,55,55,55,85,20,190,10,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(80,10,190,100,93,55,124,100,120,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781252706320'] = function(block) {
  let code = "base_action.action('hMoveRight')\n";
  return code;
}

Blockly.Blocks['1781252901123'] = {
  init: function() {
    this.jsonInit({
      "type": "1781252901123",
      "message0": "holdBoxMoveLeft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781252901123'] = function(block) {
  let code = "MOTOrigid16(60,10,190,45,65,65,65,65,140,190,10,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,85,95,85,85,140,190,10,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,90,93,54,124,90,140,190,10,110,107,146,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,95,93,54,124,105,140,190,10,106,107,146,76,115,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(60,10,190,85,85,95,85,85,140,190,10,85,55,55,55,85)\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,106,93,54,124,110,140,190,10,115,107,146,76,115,0,0,100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,55,55,55,85,140,190,10,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781252901123'] = function(block) {
  let code = "base_action.action('holdBoxMoveLeft')\n";
  return code;
}

Blockly.Blocks['1781252969006'] = {
  init: function() {
    this.jsonInit({
      "type": "1781252969006",
      "message0": "holdBoxMoveRight",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781252969006'] = function(block) {
  let code = "MOTOrigid16(60,10,190,45,65,65,65,65,140,190,10,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,85,95,85,85,140,190,10,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,90,93,54,124,100,140,190,10,110,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,94,93,54,124,85,140,190,10,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(60,10,190,85,55,55,55,85,140,190,10,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,85,93,54,124,85,140,190,10,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,55,55,55,85,140,190,10,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781252969006'] = function(block) {
  let code = "base_action.action('holdBoxMoveRight')\n";
  return code;
}

Blockly.Blocks['1781253079288'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253079288",
      "message0": "holdBoxMoveBack",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253079288'] = function(block) {
  let code = "MOTOrigid16(60,10,190,65,75,80,75,65,140,190,10,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,90,91,48,129,88,140,190,10,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,86,90,95,84,90,140,190,10,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,88,71,53,105,85,140,190,10,93,100,144,79,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,106,93,53,124,111,140,190,10,114,87,163,42,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,106,95,53,122,113,140,190,10,114,110,105,114,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,107,100,56,121,109,140,190,10,112,129,147,95,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,86,113,37,158,90,140,190,10,94,107,147,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,86,110,95,100,90,140,190,10,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,90,91,48,129,88,140,190,10,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253079288'] = function(block) {
  let code = "base_action.action('holdBoxMoveBack')\n";
  return code;
}

Blockly.Blocks['Take_a_quick_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_forward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1781253167637'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253167637",
      "message0": "holdBoxMoveFront",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253167637'] = function(block) {
  let code = "MOTOrigid16(60,10,190,65,75,80,75,65,140,190,10,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,90,91,48,129,88,140,190,10,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,86,125,95,110,90,140,190,10,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,86,113,37,156,88,140,190,10,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,107,100,56,124,111,140,190,10,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,106,95,54,123,113,140,190,10,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,106,93,54,123,111,140,190,10,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,88,71,45,107,90,140,190,10,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,86,110,95,100,90,140,190,10,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,90,91,48,129,88,140,190,10,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253167637'] = function(block) {
  let code = "base_action.action('holdBoxMoveFront')\n";
  return code;
}

Blockly.Blocks['1781253994639'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253994639",
      "message0": "holdBoxRotateLeft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253994639'] = function(block) {
  let code = "MOTOrigid16(60,10,130,65,65,65,65,65,140,190,10,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,130,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60,10,130,95,63,55,94,95,140,190,10,105,77,145,46,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60,10,130,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,130,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253994639'] = function(block) {
  let code = "base_action.action('holdBoxRotateLeft')\n";
  return code;
}

Blockly.Blocks['1781254094268'] = {
  init: function() {
    this.jsonInit({
      "type": "1781254094268",
      "message0": "holdBoxRotateRight",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781254094268'] = function(block) {
  let code = "MOTOrigid16(60,10,190,65,65,65,65,65,140,190,10,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60,10,190,95,123,55,154,95,140,190,10,105,137,145,106,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781254094268'] = function(block) {
  let code = "base_action.action('holdBoxRotateRight')\n";
  return code;
}

Blockly.Blocks['color_rgbhsv_discrimiation'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_discrimiation',
      message0:
        '%1 %{BKY_CAMERA} %{BKY_VISUAL_COLOR_RGBHSV_DISCRI_TITLE_1} %2 %{BKY_VISUAL_COLOR_RGBHSV_DISCRI_TITLE_2} %3 Hmin: %4 ~Hmax: %5 %6 Smin :  %7 ~Smax :  %8 %9 Vmin : %10 ~Vmax: %11',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_rgbhsv_discrimiation'] = function (block) {
  const code = 'false';
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['color_rgbhsv_discrimiation'] = function (block) {
  const camera = block.getFieldValue('camera');
  const hmin = block.getFieldValue('hmin');
  const hmax = block.getFieldValue('hmax');
  const smin = block.getFieldValue('smin');
  const smax = block.getFieldValue('smax');
  const vmin = block.getFieldValue('vmin');
  const vmax = block.getFieldValue('vmax');
  const code = generateHsvCode(HAVE_COLOR, camera, { hmin, hmax, smin, smax, vmin, vmax });
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['color_rgbhsv_central_coordinate'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_central_coordinate',
      message0:
        '%1 %{BKY_CAMERA} %2 %{BKY_COLOR_RGBHSV_DISCRIMIATION_TITLE_1} %3 %4 %{BKY_COLOR_RGBHSV_DISCRIMIATION_TITLE_2} %5 Hmin: %6 ~Hmax: %7 %8 Smin :  %9 ~Smax :  %10 %11 Vmin : %12 ~Vmax: %13',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'input_dummy' },
        {
          type: 'field_dropdown',
          name: 'axis',
          options: [
            ['X%{BKY_COORDINATES}', '0'],
            ['Y%{BKY_COORDINATES}', '1'],
          ],
        },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_rgbhsv_central_coordinate'] = function (block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['color_rgbhsv_central_coordinate'] = function (block) {
  const camera = block.getFieldValue('camera');
  const axis = block.getFieldValue('axis');
  const hmin = block.getFieldValue('hmin');
  const hmax = block.getFieldValue('hmax');
  const smin = block.getFieldValue('smin');
  const smax = block.getFieldValue('smax');
  const vmin = block.getFieldValue('vmin');
  const vmax = block.getFieldValue('vmax');
  const hsvCode = generateHsvCode(GET_CENTRAL_COORDINATE, camera, {
    hmin,
    hmax,
    smin,
    smax,
    vmin,
    vmax,
  });
  const code = `${hsvCode}[${axis}]`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['1781253479229'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253479229",
      "message0": "holdBoxMoveFront（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253479229'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,10,190,65,75,80,75,65,140,190,10,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 140, 190, 10, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 125, 95, 110, 90, 140, 190, 10, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 113, 37, 156, 88, 140, 190, 10, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 107, 100, 56, 124, 111, 140, 190, 10, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 106, 95, 54, 123, 113, 140, 190, 10, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 106, 93, 54, 123, 111, 140, 190, 10, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 88, 71, 45, 107, 90, 140, 190, 10, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 110, 95, 100, 90, 140, 190, 10, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 140, 190, 10, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253479229'] = function(block) {
  let code = "base_action.action('holdBoxMoveFront（2）')\n";
  return code;
}

Blockly.Blocks['1781253475813'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253475813",
      "message0": "holdBoxMoveBack",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253475813'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,10,190,65,75,80,75,65,140,190,10,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 140, 190, 10, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 90, 95, 84, 90, 140, 190, 10, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 88, 71, 53, 105, 85, 140, 190, 10, 93, 100, 144, 79, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 106, 93, 53, 124, 111, 140, 190, 10, 114, 87, 163, 42, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 106, 95, 53, 122, 113, 140, 190, 10, 114, 110, 105, 114, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 107, 100, 56, 121, 109, 140, 190, 10, 112, 129, 147, 95, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 86, 113, 37, 158, 90, 140, 190, 10, 94, 107, 147, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 110, 95, 100, 90, 140, 190, 10, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 140, 190, 10, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253475813'] = function(block) {
  let code = "base_action.action('holdBoxMoveBack')\n";
  return code;
}

Blockly.Blocks['1781316824397'] = {
  init: function() {
    this.jsonInit({
      "type": "1781316824397",
      "message0": "抱块小幅度左转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781316824397'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 96, 132, 187, 10, 101, 117, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 103, 132, 187, 10, 101, 117, 145, 82, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 107, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781316824397'] = function(block) {
  let code = "base_action.action('抱块小幅度左转2')\n";
  return code;
}

Blockly.Blocks['1781316828756'] = {
  init: function() {
    this.jsonInit({
      "type": "1781316828756",
      "message0": "抱块小幅度右转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781316828756'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 99, 88, 55, 118, 97, 132, 187, 10, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(13)\nMOTOmove19(60, 15, 190, 99, 88, 55, 118, 76, 132, 187, 10, 104, 98, 145, 70, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 100, 98, 65, 119, 85, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 98, 92, 52, 124, 93, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1781316828756'] = function(block) {
  let code = "base_action.action('抱块小幅度右转2')\n";
  return code;
}

Blockly.Blocks['1781316860271'] = {
  init: function() {
    this.jsonInit({
      "type": "1781316860271",
      "message0": "有块小左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781316860271'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 90, 98, 64, 128, 90, 132, 187, 10, 95, 107, 146, 72, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 95, 93, 54, 128, 90, 132, 187, 10, 105, 107, 146, 72, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 109, 107, 146, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 94, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781316860271'] = function(block) {
  let code = "base_action.action('有块小左移')\n";
  return code;
}

Blockly.Blocks['1781253481934'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253481934",
      "message0": "holdBoxMoveLeft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253481934'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,10,190,45,65,65,65,65,140,190,10,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,85,95,85,85,140,190,10,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 90, 93, 54, 124, 90, 140, 190, 10, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 95, 93, 54, 124, 105, 140, 190, 10, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(60,10,190,85,85,95,85,85,140,190,10,85,55,55,55,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 93, 54, 124, 110, 140, 190, 10, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,55,55,55,85,140,190,10,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253481934'] = function(block) {
  let code = "base_action.action('holdBoxMoveLeft')\n";
  return code;
}

Blockly.Blocks['1781253484648'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253484648",
      "message0": "holdBoxMoveRight",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253484648'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,10,190,45,65,65,65,65,140,190,10,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,85,95,85,85,140,190,10,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 90, 93, 54, 124, 100, 140, 190, 10, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 94, 93, 54, 124, 85, 140, 190, 10, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(60,10,190,85,55,55,55,85,140,190,10,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 85, 93, 54, 124, 85, 140, 190, 10, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(60,10,190,85,55,55,55,85,140,190,10,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253484648'] = function(block) {
  let code = "base_action.action('holdBoxMoveRight')\n";
  return code;
}

Blockly.Blocks['1781317743168'] = {
  init: function() {
    this.jsonInit({
      "type": "1781317743168",
      "message0": "放下箱子",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781317743168'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 99, 90, 150, 38, 100, 132, 187, 10, 101, 111, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59, 14, 148, 99, 122, 150, 39, 100, 134, 188, 56, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 122, 150, 39, 100, 130, 176, 57, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 98, 150, 40, 100, 130, 176, 57, 100, 105, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781317743168'] = function(block) {
  let code = "base_action.action('放下箱子')\n";
  return code;
}

