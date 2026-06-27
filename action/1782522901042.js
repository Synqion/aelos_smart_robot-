Blockly.Blocks['1782522901042'] = {
  init: function() {
    this.jsonInit({
      "type": "1782522901042",
      "message0": "GrabCubeCustom",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1782522901042'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 蹲\nMOTOsetspeed(14)\nMOTOmove19(80, 30, 100, 100, 130, 150, 50, 100, 120, 170, 100, 100, 70, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 伸手\nMOTOsetspeed(14)\nMOTOmove19(80, 30, 150, 100, 130, 150, 50, 100, 120, 170, 50, 100, 70, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 拿捏\nMOTOsetspeed(14)\nMOTOmove19(60, 10, 150, 100, 130, 150, 50, 100, 140, 190, 50, 100, 70, 50, 150, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 举起\nMOTOsetspeed(14)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n";
  return code;
}

Blockly.Python['1782522901042'] = function(block) {
  let code = "base_action.action('GrabCubeCustom')\n";
  return code;
}

