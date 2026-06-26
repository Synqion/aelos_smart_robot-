Blockly.Blocks['1752148083236'] = {
  init: function() {
    this.jsonInit({
      "type": "1752148083236",
      "message0": "抱块小幅度左转3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752148083236'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,96,97,55,126,96,132,187,10,101,123,145,81,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,96,97,55,130,105,132,187,10,101,117,145,82,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,88,55,124,105,132,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1752148083236'] = function(block) {
  let code = "base_action.action('抱块小幅度左转3')\n";
  return code;
}

