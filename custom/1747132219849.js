Blockly.Blocks['1747132219849'] = {
  init: function() {
    this.jsonInit({
      "type": "1747132219849",
      "message0": "抱块小幅度左转2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747132219849'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,130,96,132,187,10,101,117,145,82,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,96,97,55,130,103,132,187,10,101,117,145,82,107,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747132219849'] = function(block) {
  let code = "base_action.action('抱块小幅度左转2')\n";
  return code;
}

