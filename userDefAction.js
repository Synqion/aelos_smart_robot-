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

Blockly.Blocks['1781313790614'] = {
  init: function() {
    this.jsonInit({
      "type": "1781313790614",
      "message0": "释怀",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781313790614'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 举起\nMOTOsetspeed(14)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 拿捏\nMOTOsetspeed(14)\nMOTOmove19(60,10,150,100,130,150,50,100,140,190,50,100,70,50,150,100,0,0,100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 伸手\nMOTOsetspeed(14)\nMOTOmove19(80,30,150,100,130,150,50,100,120,170,50,100,70,50,150,100,0,0,100)\nMOTOwait()\nDelayMs(500)\n";
  return code;
}

Blockly.Python['1781313790614'] = function(block) {
  let code = "base_action.action('释怀')\n";
  return code;
}

