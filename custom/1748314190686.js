Blockly.Blocks['1748314190686'] = {
  init: function() {
    this.jsonInit({
      "type": "1748314190686",
      "message0": "抱块小幅度右转3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748314190686'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,83,55,118,95,132,187,10,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,104,103,145,70,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,103,102,136,77,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,95,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1748314190686'] = function(block) {
  let code = "base_action.action('抱块小幅度右转3')\n";
  return code;
}

