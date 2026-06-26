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

