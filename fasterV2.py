import time
import cv2
import threading
import numpy as np
import rospy
import math
from functools import wraps
import sys

from image_Tag_converter import ImgConverter
from image_Tag_converter import TagConverter

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import *


# ============= 全局变量定义 =============
Chest_img = None
ChestOrg = None
marker = None
chest_circle_x = None
chest_circle_y = None
Debug = 0

# ============= 状态机全局变量 =============
ID = 0          # 当前状态ID
step = 1        # 运动阶段 (1: 正向, 2: 反向)
level = "start_box"  # 箱子状态

# 颜色范围
color_range = {
    'green': [(38, 92, 91), (87, 255, 255)],
    'orange': [(10, 150, 120), (30, 255, 255)]
}


# ******************************************动作函数***********************************************
def Box_Down(n, delay=0.15):
    for i in range(0, n):
        base_action.action("PutCubeDown")
        time.sleep(delay)


def Box_Back(n, delay=0.15):
    for i in range(0, n):
        base_action.action("BoxBack1Run2")
        time.sleep(delay)


def Box_Back1(n, delay=0.15):
    for i in range(0, n):
        base_action.action("BoxBack2-1")
        time.sleep(delay)


def Back2(n, delay=0.15):
    for i in range(0, n):
        base_action.action("Back2Run")
        time.sleep(delay)


def Back1(n, delay=0.15):
    for i in range(0, n):
        base_action.action("Back1Run")
        time.sleep(delay)


def go_fast(n, delay=0.15):
    for i in range(0, n):
        base_action.action("Forwalk01")
        time.sleep(delay)


def go_fast1(n, delay=0.15):
    for i in range(0, n):
        base_action.action("FastForward1s")
        time.sleep(delay)


def go_fast2(n, delay=0.15):
    for i in range(0, n):
        base_action.action("FastForward2s")
        time.sleep(delay)


def go_fast3(n, delay=0.15):
    for i in range(0, n):
        base_action.action("FastForward3s")
        time.sleep(delay)


def box_go(n, delay=0.25):
    for i in range(0, n):
        base_action.action("BoxForward02")
        time.sleep(delay)


def box_go1(n, delay=0.25):
    for i in range(0, n):
        base_action.action("抱块向前1")
        time.sleep(delay)


def box_go2(n, delay=0.25):
    for i in range(0, n):
        base_action.action("抱块向前2")
        time.sleep(delay)


def box_go3(n, delay=0.25):
    for i in range(0, n):
        base_action.action("抱块向前3")
        time.sleep(delay)


def L_move1(n, delay=0.15):
    for i in range(0, n):
        base_action.action("Left02move")
        print('左移1.5cm')
        time.sleep(delay)


def L_move2(n, delay=0.15):
    for i in range(0, n):
        base_action.action('move_left')
        time.sleep(delay)


def BoxL_move1(n, delay=0.25):
    for i in range(0, n):
        base_action.action("BoxLeft1")
        time.sleep(delay)


def BoxL_move2(n, delay=0.25):
    for i in range(0, n):
        base_action.action('Box_move_left')
        time.sleep(delay)


def R_move1(n, delay=0.15):
    for i in range(0, n):
        base_action.action("Right02move")
        time.sleep(delay)


def R_move2(n, delay=0.15):
    for i in range(0, n):
        base_action.action('move_right')
        time.sleep(delay)


def BoxR_move1(n, delay=0.25):
    for i in range(0, n):
        base_action.action("抱块右侧移3")
        time.sleep(delay)


def BoxR_move2(n, delay=0.25):
    for i in range(0, n):
        base_action.action('抱块右侧移3')
        time.sleep(delay)


def L_turn1(n, delay=0.15):
    for i in range(0, n):
        base_action.action("turn003L")
        time.sleep(delay)


def L_turn2(n, delay=0.15):
    for i in range(0, n):
        base_action.action("LeftTurn1s")
        time.sleep(delay)


def BoxL_turn1(n, delay=0.25):
    for i in range(0, n):
        base_action.action("抱块小幅度左转4")
        time.sleep(delay)


def BoxL_turn2(n, delay=0.25):
    for i in range(0, n):
        base_action.action("BoxLeftTurn1s")
        time.sleep(delay)


def R_turn1(n, delay=0.15):
    for i in range(0, n):
        base_action.action("turn003R")
        time.sleep(delay)


def R_turn2(n, delay=0.15):
    for i in range(0, n):
        base_action.action("RightTurn1s")
        time.sleep(delay)


def BoxR_turn1(n, delay=0.25):
    for i in range(0, n):
        base_action.action("抱块小幅度右转3")
        time.sleep(delay)


def BoxR_turn2(n, delay=0.25):
    for i in range(0, n):
        base_action.action("BoxRightTurn1s")
        time.sleep(delay)


# 获取图像
def get_img():
    global Chest_img, ChestOrg
    image_reader_chest = ImgConverter()
    while True:
        ret, ChestOrg = image_reader_chest.chest_image()
        time.sleep(0.2)
        if ChestOrg is not None:
            Chest_img = ChestOrg
            time.sleep(0.03)
        else:
            time.sleep(0.2)
            print("暂时未获取到图像")


th2 = threading.Thread(target=get_img)
th2.setDaemon(True)
th2.start()


# 查找方块
def find_box(img, color_name):
    global chest_circle_x, chest_circle_y
    if Chest_img is None:
        print('等待获取图像中...')
        time.sleep(0.2)
    else:
        box_img = img
        box_img_bgr = cv2.cvtColor(box_img, cv2.COLOR_RGB2BGR)
        box_img_hsv = cv2.cvtColor(box_img, cv2.COLOR_BGR2HSV)
        box_img = cv2.GaussianBlur(box_img_hsv, (3, 3), 0)
        box_img_mask = cv2.inRange(box_img, color_range[color_name][0], color_range[color_name][1])
        box_img_closed = cv2.erode(box_img_mask, None, iterations=2)
        box_img_opened = cv2.dilate(box_img_mask, np.ones((4, 4), np.uint8), iterations=2)
        (contours, hierarchy) = cv2.findContours(box_img_opened, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        if len(contours) != 0:
            area = []
            for cn in contours:
                contour_area = math.fabs(cv2.contourArea(cn))
                area.append(contour_area)
            max_index = np.argmax(area)
            (chest_circle_x, chest_circle_y), chest_radius = cv2.minEnclosingCircle(contours[max_index])
            cv2.circle(img, (int(chest_circle_x), int(chest_circle_y)), int(chest_radius), (0, 0, 255))
            print('A', 'x=', chest_circle_x, 'y=', chest_circle_y)

            if Debug:
                cv2.imshow("Box", img)
                cv2.waitKey(2000)
        else:
            print('正在寻找目标')


# 搬箱子
def goto_box():
    global level, ID  # ✅ 使用全局变量
    
    if chest_circle_x is None:
        print('等待中获取坐标中...')
        time.sleep(0.2)
    else:
        if chest_circle_x < 280:
            print("正在左侧移 ", chest_circle_x)
            base_action.action("Left3move")
            time.sleep(0.3)
        elif chest_circle_x < 300:
            print("正在左侧移 ", chest_circle_x)
            base_action.action("Left02move")
            time.sleep(0.3)
        elif chest_circle_x > 360:
            print("正在右侧移 ", chest_circle_x)
            base_action.action("Right3move")
            time.sleep(0.3)
        elif chest_circle_x > 340:
            print("正在右侧移 ", chest_circle_x)
            base_action.action("Right02move")
            time.sleep(0.3)
        else:
            if chest_circle_y < 320:
                print("前进", chest_circle_y)
                base_action.action("FastForward1s")
                time.sleep(0.3)
            else:
                print("开始抱箱子")
                base_action.action("Forwalk01")
                base_action.action("Forwalk01")
                base_action.action("GrabCubeV3")
                base_action.action("LiftCubeUp")
                level = "end_box"  # ✅ 修改全局变量


# 手柄控制
def leju_function_HMC():
    global ID, step, level  # ✅ 声明全局变量
    
    while True:
        leju_variable_remoteCtrl = get_key.key()
        
        # 手动控制
        if leju_variable_remoteCtrl == 193:  # 1
            box_go1(1)
        if leju_variable_remoteCtrl == 196:  # 2
            BoxL_move2(1)
        if leju_variable_remoteCtrl == 195:  # 3
            Box_Back(1)
        if leju_variable_remoteCtrl == 194:  # 4
            BoxR_move1(1)
        if leju_variable_remoteCtrl == 245:  # LT
            BoxL_turn2(1)
        if leju_variable_remoteCtrl == 246:  # RT
            BoxR_turn2(1)
        if leju_variable_remoteCtrl == 197:
            Box_Down(1)
        if leju_variable_remoteCtrl == 198:
            pass
        if leju_variable_remoteCtrl == 199:  # A
            base_action.action("GrabCubeV3")
            base_action.action("LiftCubeUp")
        if leju_variable_remoteCtrl == 200:  # B - 启动自动
            print("🚀 启动自动模式")
            # 重置状态
            ID = 0
            step = 1
            level = "start_box"
            auto_move()  # 直接调用


# tag对正
def turn_to_tag(dis_x, dis_y, theta, x_offset=0, y_offset=0, theta_offset=0,
                x_threshold=0.08, y_threshold=0.05, theta_threshold=8):
    global marker, step  # ✅ 声明使用全局变量
    
    # ✅ 检查 marker 有效性
    if marker is None or len(marker) == 0:
        print("⚠️ turn_to_tag: marker 为空")
        return False
    
    is_turn_done = False
    x_error = dis_x - x_offset
    y_error = dis_y - y_offset
    theta_error = theta - theta_offset
    print("ID:", marker[0], "dis_x:", dis_x, "dis_y:", dis_y, "theta:", theta, "theta_offset", theta_offset)
    print("x_error:", x_error, "y_error:", y_error, "theta_error:", theta_error)

    # 使用全局 step
    if step == 1:
        if (x_error < x_threshold - 0.08):
            print("后退", x_error, " < ", x_threshold - 0.08)
            Box_Back(1)
        elif (theta_error + theta_threshold > 40):
            print("1左转身", theta_error, " > ", 14 + theta_threshold)
            BoxL_turn2(1)
        elif (theta_error - theta_threshold < -40):
            print("1右转身", theta_error, " < ", -14 - theta_threshold)
            BoxR_turn2(1)
        elif (y_error > y_threshold + 0.08):
            print("1左移动", y_error, " > ", y_threshold)
            BoxL_move2(1)
        elif (y_error < -y_threshold - 0.08):
            print("1右移动 ", y_error, " < ", -y_threshold)
            BoxR_move2(1)
        elif (x_error > x_threshold + 0.25):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.15)
            box_go2(2)
        elif (x_error > x_threshold + 0.15):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.1)
            box_go2(1)
        elif (theta_error > theta_threshold + 2):
            print("2左转 ", theta_error, " > ", theta_threshold)
            BoxL_turn1(1)
        elif (theta_error < -theta_threshold - 2):
            print("2右转 ", theta_error, " < ", theta_threshold)
            BoxR_turn1(1)
        elif (y_error > y_threshold + 0.02):
            print("1左移动", y_error, " > ", y_threshold)
            BoxL_move1(2)
        elif (y_error < -y_threshold - 0.02):
            print("1右移动 ", y_error, " < ", -y_threshold)
            BoxR_move1(2)
        elif (x_error > x_threshold + 0.15):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.1)
            box_go1(2)
        elif (x_error > x_threshold + 0.08):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.06)
            box_go(2)
        else:
            is_turn_done = True

    elif step == 2:
        if (theta_error + theta_threshold > 40):
            print("1左转身", theta_error, " > ", 14 + theta_threshold)
            L_turn2(1)
        elif (theta_error - theta_threshold < -40):
            print("1右转身", theta_error, " < ", -14 - theta_threshold)
            R_turn2(1)
        elif (y_error > y_threshold + 0.08):
            print("1左移动", y_error, " > ", y_threshold)
            L_move2(1)
        elif (y_error < -y_threshold - 0.08):
            print("1右移动 ", y_error, " < ", -y_threshold)
            R_move2(1)
        elif (x_error > x_threshold + 0.25):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.15)
            go_fast2(2)
        elif (x_error > x_threshold + 0.15):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.1)
            go_fast2(1)
        elif (theta_error > theta_threshold + 2):
            print("2左转 ", theta_error, " > ", theta_threshold)
            L_turn1(1)
        elif (theta_error < -theta_threshold - 2):
            print("2右转 ", theta_error, " < ", theta_threshold)
            R_turn1(1)
        elif (y_error > y_threshold + 0.02):
            print("1左移动", y_error, " > ", y_threshold)
            L_move1(2)
        elif (y_error < -y_threshold - 0.02):
            print("1右移动 ", y_error, " < ", -y_threshold)
            R_move1(2)
        elif (x_error > x_threshold + 0.15):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.1)
            go_fast1(2)
        elif (x_error > x_threshold + 0.08):
            print("向前靠近标签", x_error, " > ", x_threshold + 0.06)
            go_fast(2)
        else:
            is_turn_done = True

    return is_turn_done
# 空载移动 (go_fast, L_move, R_move, turn)	0.3s	0.15s
# 抱箱移动 (box_go, BoxL_move, BoxR_move, BoxL_turn, BoxR_turn)	0.5s	0.25s
# 放下/后退 (Box_Down, Box_Back, Back)	0.3s	0.15s

# ============= 自动搬主循环 =============
def auto_move():
    global ID, step, level, marker  # ✅ 声明所有需要的全局变量
    
    print("🔄 自动搬运开始")
    Tag = TagConverter()
    time.sleep(0.3)
    
    # ✅ 使用全局变量，不需要重新赋值
    # ID, step, level 已经在 leju_function_HMC 中重置
    
    # 测试
    # ID = 3  # 直接设置为3
    # step = 1
    # level = "start_moving"  # 设置为移动中状态

    time.sleep(3)
    while ChestOrg is None:
        print('等待图像...')
        time.sleep(0.05)

    print('自动模式启动')
    go_fast2(2)

    while not rospy.is_shutdown():
        if ID == 0:  # 搬箱子
            if level == "start_box":
                find_box(Chest_img, 'orange')
                goto_box()
                time.sleep(0.05)
            elif level == "end_box":
                if step == 1:
                    box_go2(4)
                    BoxR_turn2(2)
                elif step == 2:
                    BoxR_turn2(4)
                    step = 2  # ✅ 修改全局变量
                ID += 1  # ✅ 修改全局变量
                
        else:  # 标签追踪
            marker = Tag.get_nearest_marker()
            
            # ✅ 检查 marker 是否为 None
            if marker is None:
                print("无tag (None)")
                # 执行转向策略
                if (ID == 1 and level == "end_box"):
                    print("右转")
                    BoxR_turn2(2, 0.5)
                elif (ID == 1 and level == "start_moving") or ID == 2 or ID == 3 or ID == 4 or (ID == 5 and step == 1):
                    print("右转")
                    BoxR_turn2(2, 0.5)
                elif (ID == 5 and step == 2 and level == "start_moving"):
                    print("右转")
                    R_turn2(2)
                elif (ID == 6) or (ID == 7) or (ID == 5 and step == 2 and level == "reverse_moving"):
                    print("后退")
                    Back2(2)
                continue  # ✅ 跳过本次循环
                
            elif len(marker) == 0:
                print("无tag (空)")
                continue
                
            else:
                print(marker[0], marker[1], marker[2], marker[3])
                robot_tag_x = marker[1]
                robot_tag_y = marker[2]
                tag_yaw = marker[3] + 90

                if step == 1:
                    if marker[0] == 1:
                        if ID == 1:
                            level = "start_moving"
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.08, 0.0, 2)
                            if result == True:
                                print('一号码对正完毕，前进对正二号码')
                                ID += 1
                                box_go2(4)
                        else:
                            print("前进")
                            box_go2(3)

                    elif marker[0] == 2:
                        if ID == 2:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12, 0.0, 0)
                            if result == True:
                                print('二号码对正完毕，右侧移对正三号码')
                                ID += 1
                                BoxR_move2(4)
                        else:
                            print("右移")
                            BoxR_move2(2)

                    elif marker[0] == 3:
                        if ID == 3:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12, 0.11, 0,
                             0.10, 0.8, 3)  # 距离50cm容忍，角度3度严格
                            if result == True:
                                print('三号码对正完毕，右侧移对正四号码')
                                ID += 1
                                BoxR_move2(2)
                                BoxR_move1(1)
                                box_go3(4)
                        else:
                            print("右移")
                            BoxR_move2(2)

                    elif marker[0] == 4:
                        if ID == 4:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12, -0.1, 0,
                             0.08, 0.06, 3)
                            if result == True:
                                print('四号码对正完毕，左移对正五号码')
                                ID += 1
                                BoxL_move2(4)
                        else:
                            print("左移")
                            BoxL_move2(2)

                    elif marker[0] == 5:
                        if ID == 5:
                            # 宽松
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12, 0.0, 0,
                             0.15, 0.10, 15)
                            if result == True:
                                print('五号码对正完毕，前进至大本营并放下海绵块')
                                box_go2(4)
                                Box_Down(2)
                                R_turn2(4)
                                step = 2  # ✅ 修改全局变量

                elif step == 2:
                    if marker[0] == 5:
                        result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.08, 0.0, 180)
                        level = "reverse_moving"
                        if result == True:
                            print('五号码对正完毕,直行对正6号')
                            ID += 1
                            go_fast2(2)
                            go_fast1(3)
                    elif marker[0] == 6:
                        if ID == 6:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.05, -0.1, 0)
                            if result == True:
                                print('六号码对正完毕，左侧移对正七号码')
                                ID += 1
                                L_move2(5)
                                go_fast2(3)
                                go_fast1(2)
                    elif marker[0] == 7:
                        if ID == 7:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.06, 0.10, 0)
                            if result == True:
                                print('七号码对正完毕，右侧移反向对正一号码')
                                R_move2(6)
                    elif marker[0] == 1:
                        result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.1, 0.0, 180)
                        if result == True:
                            print('一号码对正完毕，前进抓取海绵块')
                            go_fast2(3)
                            ID = 0
                            level = "start_box"

            time.sleep(0.05)

    print("🛑 自动搬运结束")


if __name__ == '__main__':
    rospy.init_node('image_listener')
    leju_function_HMC()