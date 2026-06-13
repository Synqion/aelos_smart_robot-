Blockly.Blocks['1781313790614'] = {
  init: function() {
    this.jsonInit({
      "type": "1781313790614",
      "message0": "释怀",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781313790614'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 举起\nMOTOsetspeed(14)\nMOTOmove19(60,10,190,100,93,55,124,100,140,190,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 拿捏\nMOTOsetspeed(14)\nMOTOmove19(60,10,150,100,130,150,50,100,140,190,50,100,70,50,150,100,0,0,100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 伸手\nMOTOsetspeed(14)\nMOTOmove19(80,30,150,100,130,150,50,100,120,170,50,100,70,50,150,100,0,0,100)\nMOTOwait()\nDelayMs(500)\n";
  return code;
}

Blockly.Python['1781313790614'] = function(block) {
  let code = "base_action.action('释怀')\n";
  return code;
}

