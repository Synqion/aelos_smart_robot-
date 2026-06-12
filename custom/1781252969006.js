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

