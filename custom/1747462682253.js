Blockly.Blocks['1747462682253'] = {
  init: function() {
    this.jsonInit({
      "type": "1747462682253",
      "message0": "抱块右侧移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747462682253'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(60,15,190,90,93,54,129,100,132,187,10,115,88,110,90,110,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60,15,190,80,84,40,137,70,132,187,10,105,107,147,74,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,97,93,54,129,95,132,187,10,100,107,146,71,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,95,132,187,10,100,107,145,71,105,128,71,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(60,15,190,100,93,55,129,100,132,187,10,100,107,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747462682253'] = function(block) {
  let code = "base_action.action('抱块右侧移')\n";
  return code;
}

