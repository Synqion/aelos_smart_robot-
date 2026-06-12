import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *

leju_variable_isOnPos = None
leju_variable_lableNum = None
leju_variable_remoteCtrl = None
leju_variable_ArtagA = None
leju_variable_ArtagX = None
leju_variable_ArtagY = None

"""移动到目标地点
"""
def leju_function_moveToTarget():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_remoteCtrl, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY
    leju_variable_isOnPos = 0

"""描述该功能...
"""
def leju_function__E5_81_9A_E7_82_B9_E4_BB_80_E4_B9_88():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_remoteCtrl, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY
    pass



def main():
    nodes.node_initial()
    try:


        while True:
            leju_variable_lableNum = artag_port.tag_id('chest')
            if leju_variable_lableNum == 7:
                leju_variable_ArtagA = (artag_port.get_specifies_tag(7, 'chest')[2]) + 90
                leju_variable_ArtagX = artag_port.get_specifies_tag(7, 'chest')[0]
                leju_variable_ArtagY = artag_port.get_specifies_tag(7, 'chest')[1]
                if leju_variable_ArtagA > 13:
                    base_action.action('向左转动1步')
                else:
                    if leju_variable_ArtagA < (-13):
                        base_action.action('向右转动1步')
                    else:
                        if leju_variable_ArtagY > 0.05:
                            base_action.action('向左平移1步')
                        else:
                            if leju_variable_ArtagY < (-0.04):
                                base_action.action('向右平移1步')
                            else:
                                if leju_variable_ArtagX > 0.09:
                                    base_action.action('向前慢走1步')
                                else:
                                    base_action.action('拿捏latest')
                                    while leju_variable_lableNum != 8:
                                        base_action.action('holdBoxMoveBack')
                                        leju_variable_lableNum = artag_port.tag_id('chest')
                                    leju_variable_ArtagA = (artag_port.get_specifies_tag(8, 'chest')[2]) + 90
                                    leju_variable_ArtagX = artag_port.get_specifies_tag(8, 'chest')[0]
                                    leju_variable_ArtagY = artag_port.get_specifies_tag(8, 'chest')[1]
                                    if leju_variable_ArtagA > 13:
                                        base_action.action('holdBoxRotateLeft')
                                    else:
                                        if leju_variable_ArtagA < (-13):
                                            base_action.action('holdBoxRotateRight')
                                        else:
                                            if leju_variable_ArtagY > 0.05:
                                                base_action.action('holdBoxMoveLeft')
                                            else:
                                                if leju_variable_ArtagY < (-0.04):
                                                    base_action.action('holdBoxMoveRight')
                                                else:
                                                    if leju_variable_ArtagX > 0.09:
                                                        base_action.action('holdBoxMoveFront')
                                                    else:
                                                        base_action.action('敬军礼')

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
