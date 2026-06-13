import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *
import time
import math

leju_variable_isOnPos = None
leju_variable_lableNum = None
leju_variable_colorx = None
leju_variable_remoteCtrl = None
leju_variable_sensor1 = None
leju_variable_colory = None
leju_variable_ArtagA = None
leju_variable_ArtagX = None
leju_variable_ArtagY = None
leju_variable_dt = None
leju_variable_ut = None

"""移动到目标地点
"""
def leju_function_moveToTarget():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    leju_variable_isOnPos = 0

"""颜色识别移动方块
"""
def leju_function_MoveBlockbyColor():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    while True:
        if colour_port.have_color('chest', 11, 212, 99, 16, 255, 223):
            leju_variable_colorx = colour_port.get_central_coordinate('chest', 11, 212, 99, 16, 255, 223)[0]
            leju_variable_colory = colour_port.get_central_coordinate('chest', 11, 212, 99, 16, 255, 223)[0]
        else:
            if leju_variable_colorx > 360:
                base_action.action('向左平移1步')
            else:
                if leju_variable_colorx > 360:
                    base_action.action('向右平移1步')
                else:
                    if leju_variable_colory < 360:
                        base_action.action('向前慢走1步')
                    else:
                        base_action.action('拿捏latest')
                        break
    while True:
        leju_variable_lableNum = artag_port.tag_id('chest')
        if leju_variable_lableNum == 7:
            leju_variable_ArtagA = (artag_port.get_specifies_tag(7, 'chest')[2]) + 90
            leju_variable_ArtagX = artag_port.get_specifies_tag(7, 'chest')[0]
            leju_variable_ArtagY = artag_port.get_specifies_tag(7, 'chest')[1]
            if leju_variable_ArtagA > 13:
                base_action.action('抱块小幅度左转2')
            else:
                if leju_variable_ArtagA < (-13):
                    base_action.action('抱块小幅度右转2')
                else:
                    if leju_variable_ArtagY > 0.05:
                        base_action.action('holdBoxMoveLeft')
                    else:
                        if leju_variable_ArtagY < (-0.04):
                            base_action.action('holdBoxMoveRight')
                        else:
                            if leju_variable_ArtagX > 0.09:
                                base_action.action('holdBoxMoveFront（2）')
                            else:
                                base_action.action('拿捏latest')
                                while True:
                                    leju_variable_lableNum = artag_port.tag_id('chest')
                                    if leju_variable_lableNum == 8:
                                        leju_variable_ArtagA = (artag_port.get_specifies_tag(8, 'chest')[2]) + 90
                                        leju_variable_ArtagX = artag_port.get_specifies_tag(8, 'chest')[0]
                                        leju_variable_ArtagY = artag_port.get_specifies_tag(8, 'chest')[1]
                                        if leju_variable_ArtagA > 13:
                                            base_action.action('holdBoxRotateLeft（2）')
                                        else:
                                            if leju_variable_ArtagA < (-13):
                                                base_action.action('holdBoxRotateRight（2）')
                                            else:
                                                if leju_variable_ArtagY > 0.05:
                                                    base_action.action('holdBoxMoveLeft')
                                                else:
                                                    if leju_variable_ArtagY < (-0.04):
                                                        base_action.action('holdBoxMoveRight')
                                                    else:
                                                        if leju_variable_ArtagX > 0.09:
                                                            base_action.action('holdBoxMoveFront（2）')
                                                        else:
                                                            base_action.action('放下箱子')
                                                            break
                                    else:
                                        base_action.action('holdBoxMoveBack')
                                break
    while True:
        leju_variable_lableNum = artag_port.tag_id('chest')
        if leju_variable_lableNum == 6:
            leju_variable_ArtagA = (artag_port.get_specifies_tag(6, 'chest')[2]) + 90
            leju_variable_ArtagX = artag_port.get_specifies_tag(6, 'chest')[0]
            leju_variable_ArtagY = artag_port.get_specifies_tag(6, 'chest')[1]
            if leju_variable_ArtagA > 13:
                base_action.action('holdBoxRotateLeft（2）')
            else:
                if leju_variable_ArtagA < (-13):
                    base_action.action('holdBoxRotateRight（2）')
                else:
                    if leju_variable_ArtagY > 0.05:
                        base_action.action('holdBoxMoveLeft')
                    else:
                        if leju_variable_ArtagY < (-0.04):
                            base_action.action('holdBoxMoveRight')
                        else:
                            if leju_variable_ArtagX > 0.09:
                                base_action.action('holdBoxMoveFront（2）')
                            else:
                                base_action.action('放下箱子')
                                break
        else:
            base_action.action('holdBoxMoveBack')

"""手柄移动控制
"""
def leju_function_HMC():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    while True:
        leju_variable_remoteCtrl = get_key.key()
        if leju_variable_remoteCtrl == 193:
            base_action.action('holdBoxMoveFront（2）')
        if leju_variable_remoteCtrl == 196:
            base_action.action('holdBoxMoveLeft')
        if leju_variable_remoteCtrl == 195:
            base_action.action('holdBoxMoveBack')
        if leju_variable_remoteCtrl == 194:
            base_action.action('holdBoxMoveRight')
        if leju_variable_remoteCtrl == 245:
            base_action.action('holdBoxRotateLeft')
        if leju_variable_remoteCtrl == 246:
            base_action.action('holdBoxRotateRight（2）')
        if leju_variable_remoteCtrl == 197:
            pass
        if leju_variable_remoteCtrl == 198:
            pass
        if leju_variable_remoteCtrl == 199:
            base_action.action('拿捏latest')
        if leju_variable_remoteCtrl == 200:
            pass

"""手柄控制
"""
def leju_function_StickCotrol():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    while True:
        leju_variable_remoteCtrl = get_key.key()
        if leju_variable_remoteCtrl == 193:
            music.music_play('科目三')
            base_action.action('科目三')
            base_action.action('拿捏latest')

"""传感检测物体是否经过
"""
def leju_function_SensingDetction():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    while True:
        leju_variable_sensor1 = sensor_port.get_gpio(1)
        if leju_variable_sensor1 > 80:
            music.music_play('前方有物体经过')
            base_action.action('站立')
            for i in range(5):
                sensor_port.set_output(1, 0)
                time.sleep(0.2)
                sensor_port.set_output(1, 1)
                time.sleep(0.2)
        else:
            base_action.action('向前慢走1步')
        break

"""温度检测语音输出
"""
def leju_function_TempDetection():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    while True:
        leju_variable_sensor1 = sensor_port.get_gpio(1)
        leju_variable_remoteCtrl = get_key.key()
        if leju_variable_remoteCtrl == 245:
            music.music_play('当前温度为')
            time.sleep(0.4)
            leju_variable_dt = math.floor(leju_variable_sensor1 % 10)
            leju_variable_ut = math.floor(leju_variable_sensor1 / 10)
            if leju_variable_dt == 0:
                pass
            else:
                if leju_variable_dt == 1:
                    music.music_play('10')
                else:
                    if leju_variable_dt == 2:
                        music.music_play('2')
                    else:
                        if leju_variable_dt == 3:
                            music.music_play('3')
                        else:
                            if leju_variable_dt == 4:
                                music.music_play('4')
                            else:
                                if leju_variable_dt == 5:
                                    music.music_play('5')
                                else:
                                    if leju_variable_dt == 6:
                                        music.music_play('6')
                                    else:
                                        if leju_variable_dt == 7:
                                            music.music_play('7')
                                        else:
                                            if leju_variable_dt == 8:
                                                music.music_play('8')
                                            else:
                                                while leju_variable_dt == 9:
                                                    music.music_play('9')
            time.sleep(0.4)
            music.music_play('10')
            time.sleep(0.4)
            if leju_variable_ut == 0:
                if leju_variable_dt == 0:
                    music.music_play('0')
            else:
                if leju_variable_ut == 1:
                    music.music_play('1')
                else:
                    if leju_variable_ut == 2:
                        music.music_play('2')
                    else:
                        if leju_variable_ut == 3:
                            music.music_play('3')
                        else:
                            if leju_variable_ut == 4:
                                music.music_play('4')
                            else:
                                if leju_variable_ut == 5:
                                    music.music_play('5')
                                else:
                                    if leju_variable_ut == 6:
                                        music.music_play('6')
                                    else:
                                        if leju_variable_ut == 7:
                                            music.music_play('7')
                                        else:
                                            if leju_variable_ut == 8:
                                                music.music_play('8')
                                            else:
                                                if leju_variable_ut == 9:
                                                    music.music_play('9')
            time.sleep(0.4)
            music.music_play('度')

"""识别标签移动方块
"""
def leju_function_MoveBlockbyTag():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
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
                                while True:
                                    leju_variable_lableNum = artag_port.tag_id('chest')
                                    if leju_variable_lableNum == 8:
                                        leju_variable_ArtagA = (artag_port.get_specifies_tag(8, 'chest')[2]) + 90
                                        leju_variable_ArtagX = artag_port.get_specifies_tag(8, 'chest')[0]
                                        leju_variable_ArtagY = artag_port.get_specifies_tag(8, 'chest')[1]
                                        if leju_variable_ArtagA > 13:
                                            base_action.action('holdBoxRotateLeft（2）')
                                        else:
                                            if leju_variable_ArtagA < (-13):
                                                base_action.action('holdBoxRotateRight（2）')
                                            else:
                                                if leju_variable_ArtagY > 0.05:
                                                    base_action.action('holdBoxMoveLeft')
                                                else:
                                                    if leju_variable_ArtagY < (-0.04):
                                                        base_action.action('holdBoxMoveRight')
                                                    else:
                                                        if leju_variable_ArtagX > 0.09:
                                                            base_action.action('holdBoxMoveFront（2）')
                                                        else:
                                                            base_action.action('放下箱子')
                                                            break
                                    else:
                                        base_action.action('holdBoxMoveBack')
                                break



def main():
    nodes.node_initial()
    try:


        leju_function_HMC()

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
