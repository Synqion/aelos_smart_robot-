Blockly.Blocks['1752562916644'] = {
  init: function() {
    this.jsonInit({
      "type": "1752562916644",
      "message0": "一直蹲",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752562916644'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(14)\nMOTOmove19(80,30,100,100,130,130,77,100,120,170,100,100,70,70,123,100,128,71,100)\nMOTOwait()\nDelayMs(500)\n";
  return code;
}

Blockly.Python['1752562916644'] = function(block) {
  let code = "base_action.action('一直蹲')\n";
  return code;
}

