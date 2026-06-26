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

