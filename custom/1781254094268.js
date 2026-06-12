Blockly.Blocks['1781254094268'] = {
  init: function() {
    this.jsonInit({
      "type": "1781254094268",
      "message0": "holdBoxRotateRight",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781254094268'] = function(block) {
  let code = "MOTOrigid16(60,10,190,65,65,65,65,65,140,190,10,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60,10,190,95,123,55,154,95,140,190,10,105,137,145,106,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(24)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781254094268'] = function(block) {
  let code = "base_action.action('holdBoxRotateRight')\n";
  return code;
}

