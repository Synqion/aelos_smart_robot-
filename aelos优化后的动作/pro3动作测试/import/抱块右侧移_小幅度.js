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

