Blockly.Blocks['1740449428188'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449428188",
      "message0": "抱起方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449428188'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 149, 100, 149, 150, 55, 100, 120, 170, 50, 100, 52, 50, 145, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 149, 150, 55, 100, 140, 190, 50, 100, 52, 50, 145, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 95, 55, 125, 100, 140, 190, 50, 100, 105, 145, 75, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 190, 100, 90, 55, 127, 100, 140, 189, 14, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449428188'] = function(block) {
  let code = "base_action.action('抱起方块')\n";
  return code;
}

Blockly.Blocks['1740449437428'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449437428",
      "message0": "抱块向前慢走半步（3）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449437428'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 145, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 125, 95, 110, 90, 145, 189, 13, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 113, 37, 156, 88, 145, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 107, 100, 56, 124, 111, 145, 189, 13, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 95, 54, 123, 113, 145, 189, 13, 107, 97, 133, 83, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449437428'] = function(block) {
  let code = "base_action.action('抱块向前慢走半步（3）')\n";
  return code;
}

Blockly.Blocks['1740449441113'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449441113",
      "message0": "抱块向前慢走一步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449441113'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 145, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 125, 95, 110, 90, 145, 189, 13, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 113, 37, 156, 88, 145, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 107, 100, 56, 124, 111, 145, 189, 13, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 95, 54, 123, 113, 145, 189, 13, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 93, 54, 123, 111, 145, 189, 13, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 88, 71, 45, 107, 90, 145, 189, 13, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 110, 95, 100, 90, 145, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 145, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449441113'] = function(block) {
  let code = "base_action.action('抱块向前慢走一步')\n";
  return code;
}

Blockly.Blocks['1740449473941'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449473941",
      "message0": "抱块小右侧移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449473941'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,100,100,100,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 54, 130, 105, 132, 187, 10, 110, 102, 136, 72, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 94, 93, 54, 130, 100, 132, 187, 10, 106, 107, 146, 70, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 91, 93, 54, 130, 88, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449473941'] = function(block) {
  let code = "base_action.action('抱块小右侧移')\n";
  return code;
}

Blockly.Blocks['1740449482844'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449482844",
      "message0": "抱块右侧移_小幅度",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449482844'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 109, 93, 54, 123, 110, 145, 187, 10, 109, 106, 145, 76, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(60, 10, 190, 90, 93, 54, 124, 100, 145, 187, 10, 105, 115, 159, 72, 111, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 76, 93, 50, 123, 70, 145, 187, 10, 88, 114, 159, 73, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 85, 95, 54, 126, 84, 145, 187, 10, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449482844'] = function(block) {
  let code = "base_action.action('抱块右侧移_小幅度')\n";
  return code;
}

Blockly.Blocks['1740449488025'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449488025",
      "message0": "抱块左侧移_小幅度",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449488025'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 93, 54, 123, 90, 145, 189, 13, 89, 105, 144, 75, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 93, 54, 124, 90, 145, 189, 13, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 95, 93, 54, 124, 105, 145, 189, 13, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 93, 54, 124, 110, 145, 189, 13, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 106, 93, 54, 124, 110, 145, 189, 13, 106, 107, 144, 74, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449488025'] = function(block) {
  let code = "base_action.action('抱块左侧移_小幅度')\n";
  return code;
}

Blockly.Blocks['1740449494796'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449494796",
      "message0": "抱块右转_小幅度",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449494796'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 10, 189, 95, 119, 48, 149, 96, 145, 188, 13, 102, 118, 140, 97, 105, 0, 0, 98)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 95, 118, 55, 149, 92, 145, 189, 13, 105, 121, 145, 91, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 100, 55, 129, 100, 145, 189, 13, 100, 100, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1740449494796'] = function(block) {
  let code = "base_action.action('抱块右转_小幅度')\n";
  return code;
}

Blockly.Blocks['1740449516375'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449516375",
      "message0": "抱块小左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449516375'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 103, 109, 54, 139, 100, 132, 187, 10, 108, 112, 144, 82, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 110, 109, 55, 136, 108, 132, 187, 10, 117, 113, 145, 86, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 96, 102, 55, 130, 106, 132, 187, 10, 101, 112, 145, 82, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 106, 132, 187, 10, 100, 102, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(5)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449516375'] = function(block) {
  let code = "base_action.action('抱块小左转')\n";
  return code;
}

Blockly.Blocks['1740449614279'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449614279",
      "message0": "放下快递",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449614279'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 99, 90, 150, 38, 100, 132, 187, 10, 101, 111, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59, 14, 148, 99, 122, 150, 39, 100, 134, 188, 56, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 122, 150, 39, 100, 130, 176, 57, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 98, 150, 40, 100, 130, 176, 57, 100, 105, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449614279'] = function(block) {
  let code = "base_action.action('放下快递')\n";
  return code;
}

Blockly.Blocks['1740449817547'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449817547",
      "message0": "向前走半步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449817547'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 88, 103, 35, 158, 87, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449817547'] = function(block) {
  let code = "base_action.action('向前走半步')\n";
  return code;
}

Blockly.Blocks['1740449821342'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449821342",
      "message0": "小幅度右侧移（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449821342'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449821342'] = function(block) {
  let code = "base_action.action('小幅度右侧移（2）')\n";
  return code;
}

Blockly.Blocks['1740449825169'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449825169",
      "message0": "小幅度右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449825169'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 97, 120, 170, 115, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 76, 120, 170, 115, 104, 98, 145, 70, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 100, 98, 65, 119, 85, 120, 170, 100, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449825169'] = function(block) {
  let code = "base_action.action('小幅度右转')\n";
  return code;
}

Blockly.Blocks['1740449828838'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449828838",
      "message0": "小幅度左侧移（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449828838'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449828838'] = function(block) {
  let code = "base_action.action('小幅度左侧移（2）')\n";
  return code;
}

Blockly.Blocks['1740449832063'] = {
  init: function() {
    this.jsonInit({
      "type": "1740449832063",
      "message0": "小幅度左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1740449832063'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 85, 95, 109, 54, 139, 95, 120, 170, 85, 101, 112, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 85, 110, 109, 55, 136, 108, 120, 170, 85, 117, 113, 145, 86, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 85, 96, 102, 55, 130, 106, 120, 170, 85, 101, 112, 145, 82, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 106, 120, 170, 100, 100, 102, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1740449832063'] = function(block) {
  let code = "base_action.action('小幅度左转')\n";
  return code;
}

