const courseProjects = [
  {
    "number": 1,
    "id": "project",
    "title": "开发环境搭建",
    "tasks": [
      {
        "id": "t-p01-intro",
        "kind": "项目导入",
        "title": "自动驾驶系统初探",
        "cases": [
          {
            "id": "c-ai-a",
            "label": "案例 A",
            "title": "AIGC开源项目探索",
            "summary": "学习编程语言就像学习一门外语，仅仅背诵单词和语法是远远不够的，更要看懂真实项目，理解其结构与表达习惯。在正式编写复杂代码之前，先以“探索官”的身份，利用 AIGC 作为向导，去窥探一个真实 C++ 项目的“五脏六腑”，建立对专业软件开发的宏观认知。",
            "knowledge": [
              {
                "id": "k-001",
                "label": "知识点 1",
                "title": "C++就业岗位",
                "summary": "C++既能把计算、数据处理等功能组织为清晰的程序模块，也允许开发者较细致地控制对象的生命周期、内存使用和程序与硬件的交互。它支持面向过程、面向对象与泛型等多种编程方式，常用于对运行效率、响应时间或资源使用有要求的软件。选择C++并不意味着所有程序都必须追求极限性能；在工程中还要同时考虑正确性、可维护性和开发成本。"
              },
              {
                "id": "k-002",
                "label": "知识点 2",
                "title": "C++应用领域",
                "summary": "C++可用于多种软件，但不同领域使用它的理由并不完全相同。以下从三个典型方向说明其用途；同一大型系统也可能同时使用C++和其他语言。"
              },
              {
                "id": "k-003",
                "label": "知识点 3",
                "title": "程序设计语言",
                "summary": "程序设计语言用于准确描述数据、操作和执行规则。程序员把问题分解为计算机能够执行的步骤，再按照语言的语法写成源程序；编译器或其他运行环境根据语义将其转换或执行。与自然语言相比，程序语言更强调形式上的确定性：一个运算符、括号或类型的差异，都可能改变程序的含义。"
              }
            ]
          }
        ],
        "description": "在安装工具、编写代码之前，先观察真实 C++ 项目的目录、构建文件和说明文档，了解一个系统构想最终会以怎样的工程形式落地。在此基础上，再观察自动驾驶汽车如何感知环境、作出决策并执行控制，并从相关岗位、应用领域和语言作用三个方面思考为什么模拟这一过程需要严谨、高效的 C++。"
      },
      {
        "id": "t-p01-b01",
        "kind": "基础任务 1",
        "title": "通信数据解析",
        "cases": [
          {
            "id": "c-001",
            "label": "案例 1",
            "title": "氛围灯颜色解析",
            "summary": "在现代智能汽车中，车载氛围灯已成为提升用户体验的重要配置。工程师通过车载网络发送指令控制氛围灯颜色，这些颜色指令通常使用紧凑的十六进制格式传输。作为一名车载软件工程师，需要正确解析从总线接收到的颜色数据，将其转换为 UI 界面能理解和显示的 0-255 范围十进制数值。",
            "knowledge": [
              {
                "id": "k-004",
                "label": "知识点 4",
                "title": "计算机系统原理",
                "summary": "计算机系统由相互配合的硬件和软件组成。硬件提供运算、存储、输入与输出的物理能力；软件规定这些部件在什么条件下执行什么操作。同一台计算机安装不同的软件，可以承担文本处理、程序编译或数据分析等不同任务。分析程序的运行过程时，应同时看到源代码所在的软件层和实际执行指令的硬件层。"
              },
              {
                "id": "k-005",
                "label": "知识点 5",
                "title": "计算机数据存储",
                "summary": "位（bit）只有0和1两种取值，是描述二进制信息的基本单位。连续的8位构成一个字节（byte），一个字节可表示2^8即256种位组合。文件大小、内存容量通常以字节计量，通信速率则常以每秒传输的位数计量；阅读规格时应注意区分字节符号B与位符号b。"
              },
              {
                "id": "k-006",
                "label": "知识点 6",
                "title": "进制转换与运算",
                "summary": "数字电路便于用两种稳定状态表示0和1，利用逻辑门可以组合出存储、比较及算术运算功能。因此计算机内部以二进制位处理信息。二进制适合机器处理，但长串0和1不便于人工阅读；程序员常用十六进制缩写位模式，并用十进制表达日常数量。"
              }
            ]
          },
          {
            "id": "c-002",
            "label": "案例 2",
            "title": "行车状态码解码",
            "summary": "在车辆的远程诊断和数据记录系统中，为了节约存储空间和网络带宽，车辆状态信息通常打包成紧凑的二进制数据帧发送回数据中心。作为车辆诊断工程师，需要从原始十六进制数据流中精确解码出车辆在某一时刻的关键运行状态。",
            "knowledge": [
              {
                "id": "k-007",
                "label": "知识点 7",
                "title": "信息表示与编码",
                "summary": "二进制位本身没有正负含义。要表示带符号整数，必须约定固定位数和解释规则；同一组位按无符号整数与按有符号整数解释，结果可能不同。以下统一使用8位模式说明，因此00000101可以表示正数5，而负数5需要按照选定编码规则得到另一组位。"
              },
              {
                "id": "k-008",
                "label": "知识点 8",
                "title": "非数值信息表示",
                "summary": "字符也要转换为可存储的数字。字符集规定可表示哪些字符及其编号，编码方式规定怎样把编号写成字节序列；显示时还要有字体把字符绘制出来。因此“一个字符”“一个编码值”和“一个字节”并非同一概念。相同字节若按不同编码解释，就可能显示为不同文字或乱码。"
              }
            ],
            "guideKnowledge": [
              "k-006",
              "k-007",
              "k-008"
            ]
          }
        ],
        "description": "车辆通信数据通常以二进制或十六进制形式传输，颜色、状态码和控制信号都需要经过解析才能转化为可理解的信息。本任务以CAN总线报文为应用背景，通过进制转换、数据存储和信息编码知识，完成典型通信字段的识别、拆分与解释，为后续车辆状态处理奠定数据基础。"
      },
      {
        "id": "t-p01-b02",
        "kind": "基础任务 2",
        "title": "“您好，自动驾驶”应用构建",
        "cases": [
          {
            "id": "c-003",
            "label": "案例 3",
            "title": "欢迎横幅打印",
            "summary": "在真实汽车开发中，中控系统、液晶仪表盘在车辆启动时都会先展示一个启动画面，是用户与车辆智能系统的第一次“握手”。作为初级车载软件工程师，第一个任务就是编写一个启动程序，把抽象的代码思想转化为能被执行、有实际输出的应用程序。",
            "knowledge": [
              {
                "id": "k-009",
                "label": "知识点 9",
                "title": "汇编体系",
                "summary": "C++源程序用函数、类型和表达式描述计算；处理器最终执行的却是与其指令集相符的机器指令。汇编语言用较易读的助记符和符号名称表示这些低层操作，为观察寄存器、数据移动与控制跳转提供窗口。阅读汇编有助于理解高级语言与处理器之间的联系，但编写普通C++程序通常不需要手工编写汇编代码。"
              },
              {
                "id": "k-010",
                "label": "知识点 10",
                "title": "简单项目构建方法",
                "summary": "普通独立C++程序需要入口函数main。程序源文件是文本文件，通常使用.cpp扩展名。以下示例用两行文本输出展示单文件程序的基本结构。"
              }
            ]
          },
          {
            "id": "c-004",
            "label": "案例 4",
            "title": "欢迎信息模块化",
            "summary": "将所有代码都放在 main.cpp 里看似简单，但随着功能增多，文件会变得臃肿、难以维护，团队协作时多名工程师无法同时修改同一文件。专业实践要求模块化——把不同功能的代码拆分到不同文件，让每个文件只负责一件事。",
            "knowledge": [
              {
                "id": "k-011",
                "label": "知识点 11",
                "title": "复杂项目构建方法",
                "summary": "随着功能增多，把所有代码放在一个源文件中会使接口、实现和程序入口混杂，修改及协作都不方便。多文件项目把职责相关的代码放在各自模块中，例如用main.cpp组织启动过程，用status.cpp实现状态数据的整理，用status.h向其他源文件公布可调用的接口。拆分的依据应是职责和依赖关系，而不是机械追求文件数量。"
              }
            ]
          }
        ],
        "description": "完成单个数据解析程序后，需要把源代码组织为能够稳定编译、运行和扩展的工程。本任务以车载终端欢迎应用为载体，从单文件程序逐步过渡到多文件项目，认识编译、链接、头文件与源文件分工，并搭建自动驾驶仿真的基础项目结构。"
      },
      {
        "id": "t-p01-capstone",
        "kind": "项目实战",
        "title": "车载启动画面定制",
        "cases": [
          {
            "id": "c-ext-a1",
            "label": "拓展案例 A1",
            "title": "项目跨平台构建",
            "summary": "在专业软件开发领域，“在我电脑上能跑”是一句禁忌语。一个成功的软件产品必须能在不同操作系统和开发环境中被稳定构建和运行。本案例将“欢迎信息模块”从熟悉的开发环境移植到另外两个专业环境，验证代码的可移植性。",
            "knowledge": [
              {
                "id": "k-012",
                "label": "知识点 12",
                "title": "开发平台",
                "summary": "C++源文件本身只是文本。将其变为可运行的程序，还需要编译器、链接器、构建工具与调试器；编辑器或集成开发环境（IDE）负责组织这些工具的使用。编译器与IDE是不同的软件：安装IDE并不必然意味着已经具备可用的C++工具链，反过来，仅安装编译器也可以在终端完成构建。评价开发平台时，应分别检查编辑能力、工具链支持、项目组织、构建与调试能力，以及目标操作系统。"
              },
              {
                "id": "k-013",
                "label": "知识点 13",
                "title": "IDE配置",
                "summary": "IDE配置可分为影响阅读的界面设置和影响构建结果的项目设置。主题、字体、字号、缩进宽度与自动换行主要改变代码的显示和编辑方式；编译器、语言标准、头文件搜索路径、链接选项和运行参数则参与程序构建或执行。排查构建问题时，应先分清所改动的是哪一类设置，避免把颜色主题或编辑器提示误认为编译器行为。"
              },
              {
                "id": "k-014",
                "label": "知识点 14",
                "title": "项目结构",
                "summary": "项目结构是对源代码、对外接口、构建配置、测试、文档和生成文件的组织约定。文件数量增加后，结构清晰可以减少查找时间，明确模块边界，并让构建工具和协作者知道文件应放在何处。目录名称没有由C++语言规定的唯一标准；应使目录职责稳定、命名一致，并与实际构建配置相符。项目管理器中的逻辑分组和磁盘上的物理目录有时不同，不能只凭IDE视图判断文件真实位置。"
              },
              {
                "id": "k-015",
                "label": "知识点 15",
                "title": "项目管理",
                "summary": "软件项目会经历功能增加、缺陷修复、依赖更新和多人修改。仅靠文件名中的“最终版”或复制整个目录，难以准确回答某次修改由谁完成、为什么修改、哪些文件属于同一版本。版本控制系统保存可追溯的提交历史，支持并行分支与合并。版本控制不能取代备份：未提交的文件、未推送的提交，以及远程仓库本身，都需要按项目的重要程度制定备份方案。"
              }
            ]
          },
          {
            "id": "c-ext-a2",
            "label": "拓展案例 A2",
            "title": "版本信息注入",
            "summary": "专业软件都有版本号，直接写死在代码里每次发布都要手动修改，容易遗忘或改错。更专业的方法是将版本信息从代码中分离，由构建系统统一管理。",
            "knowledge": [
              {
                "id": "k-016",
                "label": "知识点 16",
                "title": "Makefile",
                "summary": "一个多文件程序既要分别编译发生变化的源文件，又要在目标文件更新后重新链接。重复输入完整编译命令容易遗漏文件和参数。Make是依据依赖关系执行构建命令的工具，Makefile是描述这些关系的文本文件。它记录“哪个目标由哪些输入生成”以及“怎样生成”，使相同的构建过程可以重复执行。Make本身不解释C++语法；编译、链接仍由Makefile指定的编译器完成。"
              },
              {
                "id": "k-017",
                "label": "知识点 17",
                "title": "CMake",
                "summary": "CMake是跨平台的构建系统生成与管理工具。开发者在CMakeLists.txt中描述项目、目标及其依赖，CMake根据所选生成器和本机工具链配置构建目录，再由相应的本地构建工具完成实际编译与链接。生成器可以是Unix Makefiles、Ninja或Visual Studio等；它不由操作系统唯一决定。因此，CMake项目能在多种环境中构建，但源代码所用接口、外部依赖和配置仍必须兼容目标平台。"
              }
            ]
          }
        ],
        "description": "当仿真程序进入持续迭代阶段，仅能在本机编译运行已不能满足工程需要。本任务以车载启动画面定制为拓展场景，引入跨平台项目组织、版本信息注入和构建配置管理，使启动界面能够显示可追踪的项目信息，并提升工程在不同环境中的可维护性与可复现性。"
      }
    ],
    "materials": {
      "overview": "本项目以自动驾驶仿真系统的开发准备为背景，围绕“让程序从无到有地运行起来”展开。通过了解C++相关岗位、应用领域和程序设计语言的基本作用，建立自动驾驶系统开发的初步认识；随后完成CAN总线报文解析和仿真基础框架创建，并进一步练习版本管理、跨平台构建和启动画面配置，最终形成可持续扩展的C++工程环境，为后续信息交互、控制逻辑、环境感知、驾驶决策和系统集成奠定基础。",
      "summary": [
        "本项目首先通过项目导入认识了C++的技术定位、应用领域和程序设计语言的作用，建立了自动驾驶仿真系统的初步蓝图，为后续开发做好准备。随后围绕数据解析与工程构建依次完成了任务1和任务2，实现了CAN总线报文解析与仿真基础框架创建，形成项目的起步功能主线。在此基础上，拓展任务A从跨平台构建、版本管理和启动画面配置角度开展进阶实践，进一步提升了工程的规范性与可维护性。",
        "通过项目导入、基础任务和项目实战的结合，最终搭建了自动驾驶仿真项目的开发基础，掌握了从理解C++技术定位、解析车辆数据到构建与管理工程的基本过程，为后续模块开发建立了可持续扩展的工程起点。"
      ]
    }
  },
  {
    "number": 2,
    "id": "project-02",
    "title": "信息交互设计",
    "tasks": [
      {
        "id": "t-p02-intro",
        "kind": "项目导入",
        "title": "车辆交互信息梳理",
        "cases": [
          {
            "id": "c-ai-b",
            "label": "案例 B",
            "title": "AIGC程序功能分析",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p02-b01",
        "kind": "基础任务 1",
        "title": "人机交互实现",
        "cases": [
          {
            "id": "c-005",
            "label": "案例 5",
            "title": "基础交互实现",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-006",
            "label": "案例 6",
            "title": "仪表盘信息输出",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-007",
            "label": "案例 7",
            "title": "启动参数接收",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p02-b02",
        "kind": "基础任务 2",
        "title": "车辆状态展示",
        "cases": [
          {
            "id": "c-008",
            "label": "案例 8",
            "title": "累计里程计算",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-009",
            "label": "案例 9",
            "title": "解锁信号加密",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-010",
            "label": "案例 10",
            "title": "安全带状态提醒",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-011",
            "label": "案例 11",
            "title": "电量衰减模拟",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p02-b03",
        "kind": "基础任务 3",
        "title": "车辆数据计算",
        "cases": [
          {
            "id": "c-012",
            "label": "案例 12",
            "title": "百公里油耗计算",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-013",
            "label": "案例 13",
            "title": "物体坐标更新",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-014",
            "label": "案例 14",
            "title": "平均耗时计算",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p02-capstone",
        "kind": "项目实战",
        "title": "信息交互模块测试",
        "cases": [
          {
            "id": "c-ext-b1",
            "label": "拓展案例 B1",
            "title": "脚本自动化测试",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-ext-b2",
            "label": "拓展案例 B2",
            "title": "批量处理与验证",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "number": 3,
    "id": "project-03",
    "title": "控制逻辑模拟",
    "tasks": [
      {
        "id": "t-p03-intro",
        "kind": "项目导入",
        "title": "仿真运行流程规划",
        "cases": [
          {
            "id": "c-ai-c",
            "label": "案例 C",
            "title": "AIGC算法流程规划",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p03-b01",
        "kind": "基础任务 1",
        "title": "启动流程设计",
        "cases": [
          {
            "id": "c-015",
            "label": "案例 15",
            "title": "启动流程自检",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-016",
            "label": "案例 16",
            "title": "变量作用域理解",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-017",
            "label": "案例 17",
            "title": "消息数量记录",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-018",
            "label": "案例 18",
            "title": "车辆配置共享",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p03-b02",
        "kind": "基础任务 2",
        "title": "驾驶行为选择",
        "cases": [
          {
            "id": "c-019",
            "label": "案例 19",
            "title": "AEB条件判断",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-020",
            "label": "案例 20",
            "title": "驾驶模式推荐",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-021",
            "label": "案例 21",
            "title": "多媒体功能选择",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p03-b03",
        "kind": "基础任务 3",
        "title": "驾驶状态监控",
        "cases": [
          {
            "id": "c-022",
            "label": "案例 22",
            "title": "电池充电模拟",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-023",
            "label": "案例 23",
            "title": "传感器矩阵打印",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-024",
            "label": "案例 24",
            "title": "数据流坏点剔除",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p03-capstone",
        "kind": "项目实战",
        "title": "控制执行模块调试",
        "cases": [
          {
            "id": "c-ext-c1",
            "label": "拓展案例 C1",
            "title": "死循环诊断",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-ext-c2",
            "label": "拓展案例 C2",
            "title": "前提条件断言",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "number": 4,
    "id": "project-04",
    "title": "环境感知开发",
    "tasks": [
      {
        "id": "t-p04-intro",
        "kind": "项目导入",
        "title": "感知数据结构分析",
        "cases": [
          {
            "id": "c-ai-d",
            "label": "案例 D",
            "title": "AIGC数据结构优化",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p04-b01",
        "kind": "基础任务 1",
        "title": "传感器数据采集",
        "cases": [
          {
            "id": "c-025",
            "label": "案例 25",
            "title": "传感器指针校准",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-026",
            "label": "案例 26",
            "title": "雷达点云遍历",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-027",
            "label": "案例 27",
            "title": "VIN安全传递",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-028",
            "label": "案例 28",
            "title": "行车路线动态分配",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p04-b02",
        "kind": "基础任务 2",
        "title": "传感器数据管理",
        "cases": [
          {
            "id": "c-029",
            "label": "案例 29",
            "title": "标定系数存储",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-030",
            "label": "案例 30",
            "title": "传感器网格定义",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-031",
            "label": "案例 31",
            "title": "数组指针理解",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-032",
            "label": "案例 32",
            "title": "C风格指令处理",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-033",
            "label": "案例 33",
            "title": "传感器参数解析",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-034",
            "label": "案例 34",
            "title": "故障码列表管理",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p04-b03",
        "kind": "基础任务 3",
        "title": "场景对象建模",
        "cases": [
          {
            "id": "c-035",
            "label": "案例 35",
            "title": "雷达目标定义",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-036",
            "label": "案例 36",
            "title": "交通参与者建模",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p04-b04",
        "kind": "基础任务 4",
        "title": "障碍物数据解析",
        "cases": [
          {
            "id": "c-037",
            "label": "案例 37",
            "title": "日志文件读取",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-038",
            "label": "案例 38",
            "title": "障碍物信息保存",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p04-capstone",
        "kind": "项目实战",
        "title": "感知融合模块设计",
        "cases": [
          {
            "id": "c-ext-d1",
            "label": "拓展案例 D1",
            "title": "3D坐标变换",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-ext-d2",
            "label": "拓展案例 D2",
            "title": "摄像头图像显示",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "number": 5,
    "id": "project-05",
    "title": "驾驶决策开发",
    "tasks": [
      {
        "id": "t-p05-intro",
        "kind": "项目导入",
        "title": "驾驶决策功能拆分",
        "cases": [
          {
            "id": "c-ai-e",
            "label": "案例 E",
            "title": "AIGC核心功能实现",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p05-b01",
        "kind": "基础任务 1",
        "title": "自适应巡航模块实现",
        "cases": [
          {
            "id": "c-039",
            "label": "案例 39",
            "title": "刹车距离计算",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-040",
            "label": "案例 40",
            "title": "车辆轨迹预测",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-041",
            "label": "案例 41",
            "title": "数据归一化",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-042",
            "label": "案例 42",
            "title": "决策日志打印",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-043",
            "label": "案例 43",
            "title": "速度限制获取",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p05-b02",
        "kind": "基础任务 2",
        "title": "自适应巡航模块优化",
        "cases": [
          {
            "id": "c-044",
            "label": "案例 44",
            "title": "角度弧度转换",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-045",
            "label": "案例 45",
            "title": "内部函数封装",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-046",
            "label": "案例 46",
            "title": "决策动态回调",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p05-b03",
        "kind": "基础任务 3",
        "title": "自适应巡航模块扩展",
        "cases": [
          {
            "id": "c-047",
            "label": "案例 47",
            "title": "日志函数重载",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-048",
            "label": "案例 48",
            "title": "最小距离查找",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p05-capstone",
        "kind": "项目实战",
        "title": "规划决策模块设计",
        "cases": [
          {
            "id": "c-ext-e1",
            "label": "拓展案例 E1",
            "title": "数学库静态编译",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-ext-e2",
            "label": "拓展案例 E2",
            "title": "外部库链接使用",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "number": 6,
    "id": "project-06",
    "title": "车辆对象管理",
    "tasks": [
      {
        "id": "t-p06-intro",
        "kind": "项目导入",
        "title": "车辆对象职责界定",
        "cases": [
          {
            "id": "c-ai-f",
            "label": "案例 F",
            "title": "AIGC错误逻辑纠正",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p06-b01",
        "kind": "基础任务 1",
        "title": "车辆对象设计",
        "cases": [
          {
            "id": "c-049",
            "label": "案例 49",
            "title": "车辆对象设计",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-050",
            "label": "案例 50",
            "title": "车辆启动熄火",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-051",
            "label": "案例 51",
            "title": "车辆对象克隆",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p06-b02",
        "kind": "基础任务 2",
        "title": "功能重载优化",
        "cases": [
          {
            "id": "c-052",
            "label": "案例 52",
            "title": "核心数据封装",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-053",
            "label": "案例 53",
            "title": "this指针链式操作",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-054",
            "label": "案例 54",
            "title": "常量成员引用",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-055",
            "label": "案例 55",
            "title": "诊断后门设置",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-056",
            "label": "案例 56",
            "title": "车辆操作重载",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p06-capstone",
        "kind": "项目实战",
        "title": "车辆对象模块设计",
        "cases": [
          {
            "id": "c-ext-f1",
            "label": "拓展案例 F1",
            "title": "对象智能指针管理",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-ext-f2",
            "label": "拓展案例 F2",
            "title": "数据点内存池设计",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "number": 7,
    "id": "project-07",
    "title": "感知融合优化",
    "tasks": [
      {
        "id": "t-p07-intro",
        "kind": "项目导入",
        "title": "仿真对象关系抽象",
        "cases": [
          {
            "id": "c-ai-g",
            "label": "案例 G",
            "title": "AIGC冗余代码重构",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p07-b01",
        "kind": "基础任务 1",
        "title": "障碍物体系构建",
        "cases": [
          {
            "id": "c-057",
            "label": "案例 57",
            "title": "障碍物基类构建",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-058",
            "label": "案例 58",
            "title": "障碍物属性保护",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-059",
            "label": "案例 59",
            "title": "特殊车辆多继承",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-060",
            "label": "案例 60",
            "title": "摩托车菱形继承",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p07-b02",
        "kind": "基础任务 2",
        "title": "传感器代码复用",
        "cases": [
          {
            "id": "c-061",
            "label": "案例 61",
            "title": "通用接口设置",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-062",
            "label": "案例 62",
            "title": "数据模板化缓存",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p07-capstone",
        "kind": "项目实战",
        "title": "感知融合模块重构",
        "cases": [
          {
            "id": "c-ext-g1",
            "label": "拓展案例 G1",
            "title": "点云处理SIMD优化",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-ext-g2",
            "label": "拓展案例 G2",
            "title": "数据采集多线程实现",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      }
    ]
  },
  {
    "number": 8,
    "id": "project-08",
    "title": "自动驾驶仿真系统实现",
    "tasks": [
      {
        "id": "t-p08-intro",
        "kind": "项目导入",
        "title": "仿真系统模块统筹",
        "cases": [
          {
            "id": "c-ai-h",
            "label": "案例 H",
            "title": "AIGC复杂系统架构",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p08-b01",
        "kind": "基础任务 1",
        "title": "自动驾驶仿真系统后端实现",
        "cases": [
          {
            "id": "c-063",
            "label": "案例 63",
            "title": "车辆地图系统集成",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p08-b02",
        "kind": "基础任务 2",
        "title": "自动驾驶仿真系统前端实现",
        "cases": [
          {
            "id": "c-064",
            "label": "案例 64",
            "title": "命令行进度条刷新",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      },
      {
        "id": "t-p08-capstone",
        "kind": "项目实战",
        "title": "基于SFML库的自动驾驶仿真系统设计",
        "cases": [
          {
            "id": "c-ext-h1",
            "label": "拓展案例 H1",
            "title": "SFML静态场景绘制",
            "knowledge": [],
            "summary": ""
          },
          {
            "id": "c-ext-h2",
            "label": "拓展案例 H2",
            "title": "SFML转向灯动画实现",
            "knowledge": [],
            "summary": ""
          }
        ],
        "description": ""
      }
    ]
  }
];
