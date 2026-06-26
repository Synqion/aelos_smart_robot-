Blockly.Blocks['1680745722093'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745722093",
      "message0": "Left02move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745722093'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 94, 107, 146, 76, 94, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745722093'] = function(block) {
  let code = "base_action.action('Left02move')\n";
  return code;
}

Blockly.Blocks['color_identification_rgbhsv'] = {
  init: function () {
    this.jsonInit({
      type: 'color_identification_rgbhsv',
      message0: '%{BKY_VISUAL_COLOR_RGBHSV_TITLE_1}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_colour', name: 'colour', colour: '#ff0000' },
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
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_identification_rgbhsv'] = function (block) {
  const camera = block.getFieldValue('camera');
  const colour = block.getFieldValue('colour');
  const { hmin, hmax, smin, smax, vmin, vmax } = getHsvRangeParams(block);
  return `-- HSVMarker('${camera}', '${colour}', {${hmin}, ${hmax}, ${smin}, ${smax}, ${vmin}, ${vmax}})\n`;
}

Blockly.Python['color_identification_rgbhsv'] = function (block) {
  const camera = block.getFieldValue('camera');
  const colour = block.getFieldValue('colour');
  const { hmin, hmax, smin, smax, vmin, vmax } = getHsvRangeParams(block);
  return `# HSVMarker('${camera}', '${colour}', {${hmin}, ${hmax}, ${smin}, ${smax}, ${vmin}, ${vmax}})\n`;
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

Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat',
      message0: '%{BKY_SQUAT}',
      previousStatement: null,
      nextStatement: null,
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

Blockly.Blocks['aelos_for'] = {
  init: function() {
    this.jsonInit({
      "type": "aelos_for",
      "message0": "%{BKY_AELOS_LOOP} %1 %{BKY_AELOS_LOOP_TIMES} %2 %{BKY_AELOS_DO} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "times",
          "check": ["Number", "Variable"]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['aelos_for'] = function (block) {
  const times = Blockly.Lua.valueToCode(block, 'times', Blockly.Lua.ORDER_NONE) || '0';
  const do_code = Blockly.Lua.statementToCode(block, 'do');

  const code = `for i = 1,${times},1\ndo\n${do_code}\nHKEY()\nend\n`;

  return code;
}

Blockly.Python['aelos_for'] = function (block) {
  const times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_NONE) || '0';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `for i in range(${times}):\n${do_code}`;

  return code;
}

Blockly.Blocks['sensor'] = {
  init: function () {
    this.jsonInit({
      type: 'sensor',
      message0: '%{BKY_SENSOR} %1 %{BKY_SENSOR_PORT} %2 %{BKY_SENSOR_VAR} %3',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'field_dropdown',
          name: 'port',
          options: portOptions,
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
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['sensor'] = function(block){
  const variable = Blockly.Lua.valueToCode(block, "variable", Blockly.JavaScript.ORDER_NONE);
  const port = block.getFieldValue("port");
  return `${variable} = nil\n`;
}

Blockly.Python['sensor'] = function (block) {
  var port = block.getFieldValue('port');
  var variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  var code = '';
  if (variable) {
    code = `${variable} = sensor_port.get_gpio(${port})\n`;
  } else {
    code = `sensor_port.get_gpio(${port})\n`;
  }

  return code;
}

Blockly.Blocks['io_out'] = {
  init: function () {
    this.jsonInit({
      type: 'io_out',
      message0: '%{BKY_IO_OUTPUT} %1 %{BKY_IO_OUTPUT_PORT} %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'output_value',
          options: [
            ['0', '0'],
            ['1', '1'],
          ],
        },
        {
          type: 'field_dropdown',
          name: 'port',
          options: portOptions,
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['io_out'] = function(block) {
  const output = block.getFieldValue("output_value");
  const port = block.getFieldValue("port");

  return `WriteGpio(${port}, ${output})\n`;
}

Blockly.Python['io_out'] = function (block) {
  var code = '';
  var port = block.getFieldValue('port');
  var output_value = block.getFieldValue('output_value');

  code = `sensor_port.set_output(${port}, ${output_value})\n`;
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

Blockly.Blocks['Pan_left_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_left_1_step',
      message0: '%{BKY_PAN_LEFT_1_STEP}',
      previousStatement: null,
      nextStatement: null,
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

Blockly.Blocks['Turn_left_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Turn_left_1_step',
      message0: '%{BKY_TURN_LEFT_1_STEP}',
      previousStatement: null,
      nextStatement: null,
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

Blockly.Blocks['Right_hand_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Right_hand_up',
      message0: '%{BKY_RIGHT_HAND_UP}',
      previousStatement: null,
      nextStatement: null,
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

Blockly.Blocks['repeat_until'] = {
  init: function () {
    this.jsonInit({
      type: 'repeat_until',
      message0: '%{BKY_REPEAT_UNTIL} %1 %{BKY_ACTION} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'block',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['repeat_until'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE);
  const blockCode = Blockly.Lua.statementToCode(block, 'block', Blockly.Lua.ORDER_NONE);
  const temp_ = blockCode.split('\n');
  let template = [
    'while(true)',
    'do',
    '  if ${template} then',
    '    break',
    '  end',
    ...temp_,
    'end',
    '',
  ];
  let code = template.join('\n').replace('${template}', condition);
  if (!condition) {
    code = '';
  }
  return code;
}

Blockly.Python['repeat_until'] = function (block) {
  const blockCode =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  let do_code = Blockly.Python.statementToCode(block, 'block') || Blockly.Python.PASS;
  return `while not ${blockCode}:\n${do_code}`;
}

Blockly.Blocks['1680745682571'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745682571",
      "message0": "BoxLeft1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745682571'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 90, 98, 64, 128, 90, 132, 187, 10, 95, 107, 146, 72, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 95, 93, 54, 128, 90, 132, 187, 10, 105, 107, 146, 72, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 109, 107, 146, 72, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 94, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745682571'] = function(block) {
  let code = "base_action.action('BoxLeft1')\n";
  return code;
}

Blockly.Blocks['1747131852767'] = {
  init: function() {
    this.jsonInit({
      "type": "1747131852767",
      "message0": "抱块小右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747131852767'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 99, 88, 55, 118, 97, 132, 187, 10, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(13)\nMOTOmove19(60, 15, 190, 99, 88, 55, 118, 76, 132, 187, 10, 104, 98, 145, 70, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 100, 98, 65, 119, 85, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 98, 92, 52, 124, 93, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747131852767'] = function(block) {
  let code = "base_action.action('抱块小右转')\n";
  return code;
}

Blockly.Blocks['1747131964248'] = {
  init: function() {
    this.jsonInit({
      "type": "1747131964248",
      "message0": "抱块小幅度右转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747131964248'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,99,88,55,118,97,132,187,10,104,98,145,70,104,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(13)\nMOTOmove19(60,15,190,99,88,55,118,76,132,187,10,104,98,145,70,93,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(60,15,190,100,98,65,119,85,132,187,10,100,107,145,76,93,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,98,92,52,124,93,132,187,10,100,107,145,76,93,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1747131964248'] = function(block) {
  let code = "base_action.action('抱块小幅度右转2')\n";
  return code;
}

Blockly.Blocks['1747131859680'] = {
  init: function() {
    this.jsonInit({
      "type": "1747131859680",
      "message0": "抱块小左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747131859680'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 103, 109, 54, 139, 100, 132, 187, 10, 108, 112, 144, 82, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 110, 109, 55, 136, 108, 132, 187, 10, 117, 113, 145, 86, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 96, 102, 55, 130, 106, 132, 187, 10, 101, 112, 145, 82, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 106, 132, 187, 10, 100, 102, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(5)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747131859680'] = function(block) {
  let code = "base_action.action('抱块小左转')\n";
  return code;
}

Blockly.Blocks['1680745704642'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745704642",
      "message0": "BoxTurnL1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745704642'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 96, 132, 187, 10, 101, 117, 145, 82, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 103, 132, 187, 10, 101, 117, 145, 82, 107, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 107, 135, 81, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745704642'] = function(block) {
  let code = "base_action.action('BoxTurnL1')\n";
  return code;
}

Blockly.Blocks['1747132219849'] = {
  init: function() {
    this.jsonInit({
      "type": "1747132219849",
      "message0": "抱块小幅度左转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747132219849'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,117,145,82,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,117,145,82,107,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747132219849'] = function(block) {
  let code = "base_action.action('抱块小幅度左转2')\n";
  return code;
}

Blockly.Blocks['1680745688797'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745688797",
      "message0": "BoxLeftTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745688797'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 95, 132, 187, 10, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 93, 132, 187, 10, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745688797'] = function(block) {
  let code = "base_action.action('BoxLeftTurn1s')\n";
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

Blockly.Blocks['1680752266437'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752266437",
      "message0": "BoxForward3s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752266437'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752266437'] = function(block) {
  let code = "base_action.action('BoxForward3s')\n";
  return code;
}

Blockly.Blocks['1680752259809'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752259809",
      "message0": "BoxForward1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752259809'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752259809'] = function(block) {
  let code = "base_action.action('BoxForward1s')\n";
  return code;
}

Blockly.Blocks['1680752248086'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752248086",
      "message0": "BoxForward02",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752248086'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 90, 91, 48, 134, 88, 140, 190, 25, 94, 109, 146, 71, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 121, 37, 161, 88, 140, 190, 25, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 107, 98, 56, 129, 111, 140, 190, 25, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 106, 93, 54, 128, 113, 140, 190, 25, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 100, 93, 55, 124, 100, 140, 190, 25, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752248086'] = function(block) {
  let code = "base_action.action('BoxForward02')\n";
  return code;
}

Blockly.Blocks['1747462641042'] = {
  init: function() {
    this.jsonInit({
      "type": "1747462641042",
      "message0": "1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747462641042'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747462641042'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}

Blockly.Blocks['1747462648861'] = {
  init: function() {
    this.jsonInit({
      "type": "1747462648861",
      "message0": "2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747462648861'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,113,85,115,90,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,114,77,105,85,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747462648861'] = function(block) {
  let code = "base_action.action('2')\n";
  return code;
}

Blockly.Blocks['1747462655468'] = {
  init: function() {
    this.jsonInit({
      "type": "1747462655468",
      "message0": "3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747462655468'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747462655468'] = function(block) {
  let code = "base_action.action('3')\n";
  return code;
}

Blockly.Blocks['1680745663962'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745663962",
      "message0": "Box_move_right",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745663962'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 90, 93, 54, 129, 100, 132, 187, 10, 115, 88, 110, 90, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 80, 84, 40, 137, 70, 132, 187, 10, 105, 107, 147, 74, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 97, 93, 54, 129, 95, 132, 187, 10, 100, 107, 146, 71, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745663962'] = function(block) {
  let code = "base_action.action('Box_move_right')\n";
  return code;
}

Blockly.Blocks['1747462682253'] = {
  init: function() {
    this.jsonInit({
      "type": "1747462682253",
      "message0": "抱块右侧移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747462682253'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,93,54,129,100,132,187,10,115,88,110,90,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,137,70,132,187,10,105,107,147,74,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747462682253'] = function(block) {
  let code = "base_action.action('抱块右侧移')\n";
  return code;
}

Blockly.Blocks['1680753447030'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753447030",
      "message0": "GrabCube",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753447030'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 56, 115, 65, 127, 150, 51, 66, 118, 141, 101, 142, 81, 50, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(88, 73, 116, 57, 142, 150, 48, 66, 119, 126, 83, 143, 60, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 49, 165, 47, 154, 142, 47, 62, 120, 160, 39, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 16, 163, 47, 154, 142, 47, 62, 122, 190, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 47, 154, 142, 47, 62, 136, 186, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 57, 140, 150, 69, 62, 136, 186, 40, 138, 85, 50, 152, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 95, 105, 150, 39, 99, 136, 186, 40, 98, 99, 50, 163, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 97, 96, 150, 39, 99, 136, 186, 40, 99, 107, 50, 163, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 98, 102, 77, 115, 100, 136, 186, 40, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753447030'] = function(block) {
  let code = "base_action.action('GrabCube')\n";
  return code;
}

Blockly.Blocks['1680745711207'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745711207",
      "message0": "BoxTurnR1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745711207'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 99, 83, 55, 118, 97, 132, 187, 10, 104, 103, 145, 70, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 55, 118, 93, 132, 187, 10, 104, 103, 145, 70, 97, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 65, 119, 96, 132, 187, 10, 100, 112, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 112, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745711207'] = function(block) {
  let code = "base_action.action('BoxTurnR1')\n";
  return code;
}

Blockly.Blocks['1748314190686'] = {
  init: function() {
    this.jsonInit({
      "type": "1748314190686",
      "message0": "抱块小幅度右转3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748314190686'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,83,55,118,95,132,187,10,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,104,103,145,70,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,103,102,136,77,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,95,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1748314190686'] = function(block) {
  let code = "base_action.action('抱块小幅度右转3')\n";
  return code;
}

Blockly.Blocks['1748314353458'] = {
  init: function() {
    this.jsonInit({
      "type": "1748314353458",
      "message0": "抱块右侧移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748314353458'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,93,54,129,100,132,187,10,115,83,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,137,70,132,187,10,105,107,147,74,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,87,83,39,136,69,132,187,10,105,107,147,74,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748314353458'] = function(block) {
  let code = "base_action.action('抱块右侧移2')\n";
  return code;
}

Blockly.Blocks['1748334485079'] = {
  init: function() {
    this.jsonInit({
      "type": "1748334485079",
      "message0": "抱块向前1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748334485079'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748334485079'] = function(block) {
  let code = "base_action.action('抱块向前1')\n";
  return code;
}

Blockly.Blocks['1748334504674'] = {
  init: function() {
    this.jsonInit({
      "type": "1748334504674",
      "message0": "抱块向前3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748334504674'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748334504674'] = function(block) {
  let code = "base_action.action('抱块向前3')\n";
  return code;
}

Blockly.Blocks['1680752263368'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752263368",
      "message0": "BoxForward2s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752263368'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752263368'] = function(block) {
  let code = "base_action.action('BoxForward2s')\n";
  return code;
}

Blockly.Blocks['1752146587896'] = {
  init: function() {
    this.jsonInit({
      "type": "1752146587896",
      "message0": "抱块向前2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752146587896'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1752146587896'] = function(block) {
  let code = "base_action.action('抱块向前2')\n";
  return code;
}

Blockly.Blocks['1752148083236'] = {
  init: function() {
    this.jsonInit({
      "type": "1752148083236",
      "message0": "抱块小幅度左转3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752148083236'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,126,96,132,187,10,101,123,145,81,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,96,97,55,130,105,132,187,10,101,117,145,82,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,105,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1752148083236'] = function(block) {
  let code = "base_action.action('抱块小幅度左转3')\n";
  return code;
}

Blockly.Blocks['1752148758694'] = {
  init: function() {
    this.jsonInit({
      "type": "1752148758694",
      "message0": "抱块小幅度左转3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752148758694'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 96, 97, 55, 126, 96, 132, 187, 10, 101, 123, 145, 81, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 105, 132, 187, 10, 101, 117, 145, 82, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 105, 132, 187, 10, 100, 107, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1752148758694'] = function(block) {
  let code = "base_action.action('抱块小幅度左转3')\n";
  return code;
}

Blockly.Blocks['1752148883714'] = {
  init: function() {
    this.jsonInit({
      "type": "1752148883714",
      "message0": "抱块小幅度左转4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752148883714'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,103,109,54,135,100,132,187,10,108,112,144,82,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,110,109,55,136,108,132,187,10,117,113,145,86,122,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,96,102,55,130,106,132,187,10,101,112,145,82,112,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,124,106,132,187,10,100,102,135,81,104,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(5)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752148883714'] = function(block) {
  let code = "base_action.action('抱块小幅度左转4')\n";
  return code;
}

Blockly.Blocks['1752150226420'] = {
  init: function() {
    this.jsonInit({
      "type": "1752150226420",
      "message0": "抱块右侧移3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752150226420'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,93,54,129,100,132,187,10,115,79,110,79,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,137,70,132,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752150226420'] = function(block) {
  let code = "base_action.action('抱块右侧移3')\n";
  return code;
}

Blockly.Blocks['1752562916644'] = {
  init: function() {
    this.jsonInit({
      "type": "1752562916644",
      "message0": "一直蹲",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752562916644'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(14)\nMOTOmove19(80,30,100,100,130,130,77,100,120,170,100,100,70,70,123,100,128,71,100)\nMOTOwait()\nDelayMs(500)\n";
  return code;
}

Blockly.Python['1752562916644'] = function(block) {
  let code = "base_action.action('一直蹲')\n";
  return code;
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

Blockly.Blocks['1761533870581'] = {
  init: function() {
    this.jsonInit({
      "type": "1761533870581",
      "message0": "抱块小幅度右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761533870581'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(45)\nMOTOmove19(60,15,190,99,88,55,123,94,132,187,10,104,98,145,74,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(60,15,190,99,88,55,118,76,132,187,10,104,98,145,70,93,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(60,15,190,100,98,65,119,85,132,187,10,100,107,145,76,93,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,98,92,52,124,93,132,187,10,100,107,145,76,93,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1761533870581'] = function(block) {
  let code = "base_action.action('抱块小幅度右转')\n";
  return code;
}

Blockly.Blocks['1761533920362'] = {
  init: function() {
    this.jsonInit({
      "type": "1761533920362",
      "message0": "抱块小幅度右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761533920362'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 99, 88, 55, 123, 94, 132, 187, 10, 104, 98, 145, 74, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(60, 15, 190, 99, 88, 55, 118, 76, 132, 187, 10, 104, 98, 145, 70, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 100, 98, 65, 119, 85, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 98, 92, 52, 124, 93, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1761533920362'] = function(block) {
  let code = "base_action.action('抱块小幅度右转')\n";
  return code;
}

Blockly.Blocks['1761534066416'] = {
  init: function() {
    this.jsonInit({
      "type": "1761534066416",
      "message0": "正面上高台4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761534066416'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 190, 100, 93, 55, 124, 100, 120, 170, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 190, 100, 153, 55, 124, 100, 120, 170, 10, 100, 46, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 190, 100, 93, 55, 124, 100, 120, 170, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 129, 55, 166, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 101, 84, 150, 41, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 135, 120, 41, 99, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 152, 132, 48, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 152, 132, 48, 100, 120, 170, 30, 99, 122, 50, 127, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 141, 101, 59, 100, 120, 170, 30, 100, 40, 50, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 141, 101, 59, 100, 120, 170, 30, 99, 40, 75, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 155, 132, 40, 100, 120, 170, 30, 99, 40, 75, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 160, 99, 160, 92, 77, 100, 120, 170, 40, 99, 71, 148, 114, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 160, 99, 160, 91, 79, 100, 120, 170, 40, 99, 40, 104, 122, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 37, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761534066416'] = function(block) {
  let code = "base_action.action('正面上高台4')\n";
  return code;
}

Blockly.Blocks['1761534192197'] = {
  init: function() {
    this.jsonInit({
      "type": "1761534192197",
      "message0": "正面上高台5",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761534192197'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,190,100,153,55,124,100,120,170,10,100,46,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,190,100,93,55,124,100,120,170,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,129,55,166,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,101,84,150,41,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,135,120,41,99,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,100,71,145,37,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,100,152,132,48,100,120,170,30,99,122,50,127,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,100,40,50,165,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,141,101,59,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,170,99,155,132,40,100,120,170,30,99,40,75,142,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,92,77,100,120,170,40,99,71,148,114,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,160,99,160,91,79,100,120,170,40,99,40,104,122,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,37,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761534192197'] = function(block) {
  let code = "base_action.action('正面上高台5')\n";
  return code;
}

Blockly.Blocks['1680745673175'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745673175",
      "message0": "BoxBack2-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745673175'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 130, 108, 132, 187, 10, 111, 102, 136, 70, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 105, 93, 55, 134, 107, 132, 187, 10, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 92, 106, 55, 144, 85, 132, 187, 10, 95, 117, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 92, 75, 55, 106, 95, 132, 187, 10, 95, 107, 145, 66, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 105, 83, 55, 124, 107, 132, 187, 10, 108, 94, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745673175'] = function(block) {
  let code = "base_action.action('BoxBack2-1')\n";
  return code;
}

Blockly.Blocks['1680752171445'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752171445",
      "message0": "BoxBack1Run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752171445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 85, 91, 50, 128, 88, 132, 187, 10, 95, 117, 168, 62, 90, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 88, 91, 48, 129, 88, 132, 187, 10, 94, 107, 146, 76, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 86, 90, 95, 84, 90, 132, 187, 10, 94, 107, 146, 78, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 88, 84, 53, 115, 85, 132, 187, 10, 93, 104, 144, 78, 91, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 106, 93, 53, 124, 113, 132, 187, 10, 114, 102, 154, 55, 110, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 106, 93, 53, 129, 113, 132, 187, 10, 114, 95, 105, 100, 110, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 104, 83, 32, 140, 111, 132, 187, 10, 115, 111, 150, 77, 112, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 120, 40, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752171445'] = function(block) {
  let code = "base_action.action('BoxBack1Run')\n";
  return code;
}

Blockly.Blocks['1762592999306'] = {
  init: function() {
    this.jsonInit({
      "type": "1762592999306",
      "message0": "BoxBack1Run2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1762592999306'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,85,91,50,128,88,132,187,10,95,117,168,62,90,120,40,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,88,91,48,129,88,132,187,10,94,107,146,76,87,120,40,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,86,90,95,84,90,132,187,10,94,107,146,78,87,120,40,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,88,84,53,115,85,132,187,10,93,104,144,78,91,120,40,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,106,93,53,124,105,132,187,10,114,102,154,61,115,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,106,93,53,129,111,132,187,10,114,95,105,100,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,104,83,32,140,111,132,187,10,115,111,150,77,112,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,120,40,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1762592999306'] = function(block) {
  let code = "base_action.action('BoxBack1Run2')\n";
  return code;
}

Blockly.Blocks['1763623087996'] = {
  init: function() {
    this.jsonInit({
      "type": "1763623087996",
      "message0": "下蹲举手",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1763623087996'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,26,76,84,100,107,145,76,100,128,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,130,130,77,100,120,170,100,100,70,70,123,100,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(150,100,150,100,130,130,77,100,120,170,100,100,70,70,123,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(50,50,150,100,130,130,77,100,120,170,100,100,70,70,123,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1763623087996'] = function(block) {
  let code = "base_action.action('下蹲举手')\n";
  return code;
}

Blockly.Blocks['1680753423868'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753423868",
      "message0": "Right3move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753423868'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753423868'] = function(block) {
  let code = "base_action.action('Right3move')\n";
  return code;
}

