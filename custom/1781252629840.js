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

