Blockly.Blocks['1781338290362'] = {
  init: function() {
    this.jsonInit({
      "type": "1781338290362",
      "message0": "holdBoxRotateLeft（3）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781338290362'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,10,190,65,65,65,65,65,140,190,10,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60, 10, 190, 95, 63, 55, 94, 95, 140, 190, 10, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781338290362'] = function(block) {
  let code = "base_action.action('holdBoxRotateLeft（3）')\n";
  return code;
}

