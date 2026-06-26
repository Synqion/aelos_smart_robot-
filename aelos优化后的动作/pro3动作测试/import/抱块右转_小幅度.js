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

