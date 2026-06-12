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

