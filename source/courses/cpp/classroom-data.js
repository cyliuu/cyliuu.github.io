const classroomData = {
  "projects": [
    {
      "id": "project",
      "number": 1,
      "title": "开发环境搭建",
      "groups": [
        {
          "id": "t-p01-intro",
          "title": "自动驾驶系统初探",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-a",
              "caseId": "c-ai-a",
              "label": "案例 A",
              "title": "AIGC开源项目探索",
              "taskId": "t-p01-intro",
              "forms": [
                "检索与核验"
              ],
              "plan": "围绕“找到一个真实、能看懂目录的C++项目”开展检索。保留完整提示词与推荐结果，实际打开仓库核对名称、链接和文件结构；允许网页观察，不把克隆下载当成完成任务的前提，最终用目录截图与填写结果说明判断。",
              "background": [
                {
                  "html": "<p>学习语法之前，先看看一个能实际构建的C++项目怎样组织文件。本案例请AIGC推荐适合初学者的开源项目，再亲自打开GitHub链接核验仓库，观察源码、头文件和构建配置。</p>\n<p>这样先认识完整工程的模样，后面写自己的程序时才知道代码放在哪里、怎样成为可运行的项目。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "程序设计语言的发展与类型"
                },
                {
                  "title": "C++特性与项目应用"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-a-stage-1",
                  "number": 1,
                  "title": "探索开源项目",
                  "leads": [],
                  "html": "<p><strong>任务形式：检索与核验。</strong> 以真实仓库核对AIGC推荐的项目名称和目录。</p>\n<ol>\n<li>打开一款具备联网搜索能力的AIGC工具，如Kimi、Gemini或通义千问。</li>\n<li>向其发送下方完整提示词，保留其中的标题和加粗标记：<blockquote>\n<h2>C++初学者开源项目推荐</h2>\n<p>请为我推荐一个适合<strong>C++初学者</strong>学习的、<strong>结构简单但完整</strong>的开源项目。</p>\n<ul>\n<li><strong>项目类型</strong>：可以是<strong>命令行计算器</strong>或<strong>贪吃蛇小游戏</strong>。</li>\n<li><strong>要求</strong>：请提供真实、可访问的GitHub链接，并简要说明推荐理由。</li>\n</ul>\n</blockquote>\n</li>\n<li><strong>记录结果：</strong> 记录AI推荐的项目名称和GitHub链接；打开该链接，确认项目页面真实存在。若链接无法打开，请AI重新推荐。</li>\n<li><strong>（可选）</strong> 在终端使用 <code>git clone [你得到的链接]</code> 获取代码；也可以在项目页面点击“Code”→“Download ZIP”下载并解压。只在网页浏览项目也可以完成本任务。</li>\n<li><strong>探索项目目录：</strong> 查看项目页面或本地文件夹，尝试猜测或询问AI这些常见目录或文件的作用；项目没有这些名称时，按实际目录观察，并保留目录截图。<ul>\n<li><code>src/</code> 目录的作用是存放：<strong>________</strong>。</li>\n<li><code>include/</code> 目录的作用是存放：<strong>________</strong>。</li>\n<li><code>CMakeLists.txt</code> 文件的作用是：<strong>________</strong>。</li>\n</ul>\n</li>\n</ol>\n<p><strong>本阶段提交：</strong> 项目名称、真实GitHub链接、三个目录作用的填写结果、<code>AI推荐.png</code>（提示词与推荐结果）和 <code>项目目录.png</code>（仓库名称、链接及目录）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p01-b01",
          "title": "通信数据解析",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-001",
              "caseId": "c-001",
              "label": "案例 1",
              "title": "氛围灯颜色解析",
              "taskId": "t-p01-b01",
              "forms": [
                "手算与图解"
              ],
              "plan": "先依据本阶段给出的颜色格式说明标出三个颜色字节，再分别写出十六进制分量的按权展开式与十进制结果。最后借助工具做一次核验，检查数值是否落在0—255，并保留位置图、计算过程与核验依据。",
              "background": [
                {
                  "html": "<p>车载总线传来氛围灯颜色指令 <code>#2F80ED</code>，显示界面却需要红、绿、蓝三个0—255的十进制数。同一项颜色信息，在通信文本和界面数据中使用了不同的表示方式，不能把这串字符直接当作三个可用数值。</p>\n<p>本次拿到的是原始颜色指令，需要先依据实操阶段给出的格式说明找到三个分量，再理解每个分量与字节的关系并完成换算。怎样说明每一步转换的依据，并证明得到的RGB数值正确？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "计算机系统与数据存储"
                },
                {
                  "title": "二进制与十六进制的按权展开"
                }
              ],
              "stages": [
                {
                  "id": "class-c-001-stage-1",
                  "number": 1,
                  "title": "标出颜色字节",
                  "leads": [
                    {
                      "html": "<p>颜色指令常用 <code>#RRGGBB</code> 表示：<code>#</code> 是格式标记，<code>RR</code>、<code>GG</code>、<code>BB</code> 依次对应红、绿、蓝，每项使用两位十六进制数。先据此找出 <code>#2F80ED</code> 的三个分量，再结合数据存储单位理解它们与字节的关系。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：手算与图解。</strong> 根据本阶段给出的格式说明，先识别颜色分量，再画出三个字节的位置。</p>\n<ol>\n<li>根据 <code>#RRGGBB</code> 格式，把 <code>#2F80ED</code> 分成红、绿、蓝三个两位十六进制分量。</li>\n<li>画出连续三个字节的位置，依次放入颜色指令的红、绿、蓝分量。</li>\n<li>标明每个分量的十六进制写法，并说明两位十六进制数与一个字节的关系。</li>\n</ol>\n<p><strong>本阶段提交：</strong> 三字节位置图及各字节对应的颜色分量。</p>\n"
                },
                {
                  "id": "class-c-001-stage-2",
                  "number": 2,
                  "title": "计算RGB数值",
                  "leads": [],
                  "html": "<p><strong>任务形式：手算与图解。</strong> 对三个十六进制分量逐一按权展开。</p>\n<ol>\n<li>对 <code>2F</code>、<code>80</code>、<code>ED</code> 分别按“高位×16＋低位”展开，写清 A—F 中用到的字母代表的数值。</li>\n<li>分别算出三个十进制分量，组成 <code>(R, G, B)</code>，逐项检查是否在0—255之间。</li>\n<li>任选其中一个分量，写出用逆向除16或计算器核验的方法和结果。</li>\n</ol>\n<p><strong>本阶段提交：</strong> 三个分量的按权展开式、RGB计算结果和一次核验过程。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-002",
              "caseId": "c-002",
              "label": "案例 2",
              "title": "行车状态码解码",
              "taskId": "t-p01-b01",
              "forms": [
                "手算与图解"
              ],
              "plan": "先用协议给四个字节分组，分清挡位、模式与车速的长度，再完成数值转换和协议含义的对应。随后比较大端车速与另一设备的小端读数，最终将三项字段合成一份有计算依据的车辆状态报告。",
              "background": [
                {
                  "html": "<p>路试车返回4字节状态码 <code>0x01 0x02 0x00 0x64</code>，诊断人员需要由此报告挡位、驾驶模式和车速。</p>\n<p>仅看四组十六进制数，还不知道每个字段占几字节，也不知道跨字节的车速该怎样组合。本次实操先按通信协议标出字段，后续阶段再按数值表示和字节序完成解码。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "位、字节与大小端"
                },
                {
                  "title": "同一位模式的不同解释——补码与字符编码"
                }
              ],
              "stages": [
                {
                  "id": "class-c-002-stage-1",
                  "number": 1,
                  "title": "划分状态字段",
                  "leads": [],
                  "html": "<p><strong>任务形式：手算与图解。</strong> 先按协议划分四个字节，不急于解出数值。</p>\n<ol>\n<li>按“第1字节为挡位、第2字节为驾驶模式、第3、4字节合起来为车速”给4个字节画框分组。</li>\n<li>写出每个字段占几字节，以及车速字段为何不能只读第4字节。暂不计算挡位、模式和车速的实际值。</li>\n</ol>\n<p><strong>本阶段提交：</strong> 四字节分组结果、各字段长度及车速字段说明。</p>\n"
                },
                {
                  "id": "class-c-002-stage-2",
                  "number": 2,
                  "title": "解出挡位与模式",
                  "leads": [
                    {
                      "html": "<p>保留字段分组图，把分组结果与协议表逐项对照，再检查车速字段的组合过程。另一款设备的读数用于核验字节序变化是否得到正确处理。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：手算与图解。</strong> 先解读挡位和模式，车速留在下一阶段。</p>\n<p>协议约定：挡位值 <code>0:P、1:D、2:R、3:N</code>；模式值 <code>1:经济、2:舒适、3:运动</code>。</p>\n<ol>\n<li>分别把前两个字节转成十进制，写出转换过程。</li>\n<li>对照协议表，写出挡位和驾驶模式；在结果旁注明“数值”与“含义”分别来自哪一步。</li>\n</ol>\n<p><strong>本阶段提交：</strong> 前两字节的转换过程及挡位、驾驶模式结果。</p>\n"
                },
                {
                  "id": "class-c-002-stage-3",
                  "number": 3,
                  "title": "解出车速并比较字节序",
                  "leads": [],
                  "html": "<p><strong>任务形式：手算与图解。</strong> 分别计算大端车速和小端示例，比较字节顺序的影响。</p>\n<p>协议约定本车车速字段使用大端顺序，高位字节在前，单位为 km/h。另有一款小端设备发送车速字节 <code>0x01 0x2C</code>。</p>\n<ol>\n<li>将本车第3、4字节按大端顺序组成一个16位十六进制数，写出按权展开式和十进制车速。</li>\n<li>对小端设备的两个字节分别按“直接按接收顺序当作高低位”和“按小端规则还原数值”计算，写出两种结果。</li>\n<li>比较两种车速，说明如果不知道协议字节序，接收端会出现什么问题。</li>\n<li>将完整4字节状态用一句话写成“挡位、模式、车速”的报告；核对三个字段是否与各自的协议约定一致。</li>\n</ol>\n<p><strong>本阶段提交：</strong> 本车车速计算、小端设备的两种计算、字节序结论和完整状态报告。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p01-b02",
          "title": "“您好，自动驾驶”应用构建",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-003",
              "caseId": "c-003",
              "label": "案例 3",
              "title": "欢迎横幅打印",
              "taskId": "t-p01-b02",
              "forms": [
                "搭建与构建、复制后运行",
                "搭建与构建、测试与对照",
                "测试与对照"
              ],
              "plan": "以完整欢迎横幅源码为起点，先建立个人工作区并确认真实扩展名，再通过命令行编译运行；随后在IDE中运行同一程序并加入个人欢迎语。两种运行方式都要核对完整横幅，保留源码、文件位置和输出的对应记录。",
              "background": [
                {
                  "html": "<p>车辆启动时，中控屏会先给驾驶员一个可识别的欢迎画面。本案例用控制台模拟它：输出星号边框、英文欢迎语和ASCII车辆图案，并把完整程序保存为自己的单文件源码。</p>\n<p>屏幕上的字符要经历什么过程才能由C++文本变成运行结果？先认识处理器与编译过程，再亲自用命令行构建。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "处理器、指令与汇编"
                },
                {
                  "title": "源文件、编译与可执行程序"
                },
                {
                  "title": "IDE中的源文件与编译运行"
                },
                {
                  "title": "命令行与IDE构建过程的对应"
                }
              ],
              "stages": [
                {
                  "id": "class-c-003-stage-1",
                  "number": 1,
                  "title": "建立工作区并复制源码",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 复制完整横幅代码，同时建立个人单文件工作区。</p>\n<ol>\n<li>在课程工作区建立以本人<strong>姓名拼音</strong>命名的文件夹。在Windows文件管理器中打开“显示文件扩展名”，让 <code>.txt</code> 等扩展名可见。</li>\n<li>在该文件夹中右键新建<strong>文本文档</strong>，再把文件名连同 <code>.txt</code> 扩展名一起改成本人<strong>姓名拼音首字母.cpp</strong>；例如张三改为 <code>zs.cpp</code>，确认系统关于更改扩展名的提示，并检查最终名称不是 <code>zs.cpp.txt</code>。</li>\n<li>用记事本或VS Code等文本编辑器打开该文件，复制下方完整代码并粘贴进去，保持原有横幅和车辆图案的语句顺序。</li>\n<li>保存文件，检查文件名、扩展名及代码中的引号、反斜杠和分号。</li>\n<li>分别截取文件夹的完整路径与文件名、文本编辑器中的源码。截图应能看出文件确实保存在自己的工作区内。</li>\n</ol>\n<h5>本阶段代码：欢迎横幅</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\nint main() {\n    std::cout &lt;&lt; &quot;******************************************&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;**                                      **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;** Welcome to the Auto Driving System!  **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;**                                      **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;**       _______                        **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;**      //  | |  \\\\                      **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;** ,----&#39;---| | O |---.                 **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;** &#39;----(O)-----(O)---&#39;                 **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;**                                      **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;******************************************&quot; &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>单文件目录.png</code>（完整路径、姓名拼音文件夹和 <code>.cpp</code> 文件名）及 <code>源码编辑.png</code>（文本编辑器中的源码）。</p>\n"
                },
                {
                  "id": "class-c-003-stage-2",
                  "number": 2,
                  "title": "准备编译器并用命令行运行",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、测试与对照。</strong> 沿用刚保存的源码，完成编译器检查和终端运行。</p>\n<ol>\n<li><strong>检查软件：</strong> Windows先确认Dev C++已安装；未安装时按教师提供的下载来源获取并安装。通过桌面快捷方式的“打开文件所在位置”找到安装目录，再找到其中的 <code>MinGW64/bin</code>。使用其他系统时，确认本机已有可用的C++编译器。</li>\n<li><strong>检查命令：</strong> 打开终端，输入 <code>g++ --version</code>。若Windows提示找不到 <code>g++</code>，在系统设置中打开“环境变量”，把刚找到的 <code>MinGW64/bin</code> 路径加入 <code>Path</code>；关闭并重新打开终端，再检查一次。</li>\n<li><strong>进入源码目录：</strong> 在自己的姓名拼音文件夹中打开终端；Windows可在文件夹地址栏输入 <code>cmd</code> 后回车。确认终端当前目录就是该文件夹，且其中有以本人姓名拼音首字母命名的 <code>.cpp</code> 文件。</li>\n<li><strong>编译和运行：</strong> 源文件名和生成程序名都使用本人姓名拼音首字母。例如张三输入 <code>g++ zs.cpp -o zs</code>；编译成功后，Windows输入 <code>.\\zs.exe</code>，其他系统输入 <code>./zs</code>。其他同学把命令中的 <code>zs</code> 换成自己的缩写。若编译器报告某行错误，按行号检查复制过程中遗漏的字符，修正后重新编译。</li>\n<li>核对完整横幅、英文欢迎语和车辆图案均显示，再截取同时包含编译命令、运行命令和最终输出的终端画面。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">******************************************\n**                                      **\n** Welcome to the Auto Driving System!  **\n**                                      **\n**       _______                        **\n**      //  | |  \\                      **\n** ,----&#39;---| | O |---.                 **\n** &#39;----(O)-----(O)---&#39;                 **\n**                                      **\n******************************************\n</code></pre>\n<p><img src=\"assets/classroom-effects/p01-01.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>终端运行.png</code>（编译命令、运行命令及完整横幅）。</p>\n"
                },
                {
                  "id": "class-c-003-stage-3",
                  "number": 3,
                  "title": "在IDE中打开并运行",
                  "leads": [
                    {
                      "html": "<p>使用命令行运行过的同一份源码，在IDE中复现输出。先对照原横幅，再添加个人欢迎语，并保留两种运行方式的记录。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 沿用第5课时的源码，在IDE中运行并加入个人欢迎语与动态巡航初速。</p>\n<ol>\n<li>打开Dev C++或本机IDE，打开上一课时保存的本人姓名拼音首字母 <code>.cpp</code> 文件，确认编辑区中能看到完整源码，不再重新抄写代码。</li>\n<li>使用IDE的“编译运行”按钮；Dev C++可按 <code>F11</code>。若出现编译错误，根据报错行检查复制内容，修正后重新运行。核对横幅和车辆图案与命令行运行结果一致。</li>\n<li>保留原有英文欢迎语和车辆图案，在横幅外仅新增一行面向本人驾驶的欢迎语：“欢迎驾驶员[姓名]进入自动驾驶系统，初始巡航速度[60+本人学号末一位] km/h”（自己心算填入具体数字，不得改动原横幅的星号与图案行）。再次运行，确认新增文字与原横幅都显示。</li>\n<li>将IDE编辑区与运行结果窗口左右并排，截取一张同屏画面，并在源码中<strong>用红框圈出新增的那一行 <code>std::cout</code> 语句</strong>。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">欢迎驾驶员[本人姓名]进入自动驾驶系统，初始巡航速度[60+学号末一位] km/h\n******************************************\n**                                      **\n** Welcome to the Auto Driving System!  **\n**                                      **\n**       _______                        **\n**      //  | |  \\                      **\n** ,----&#39;---| | O |---.                 **\n** &#39;----(O)-----(O)---&#39;                 **\n**                                      **\n******************************************\n</code></pre>\n<p><img src=\"assets/classroom-effects/p01-02.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>IDE源码与运行.png</code>（左半屏显示文件名、红框圈出的新增语句，右半屏显示完整横幅与含个人巡航速度的欢迎语）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-004",
              "caseId": "c-004",
              "label": "案例 4",
              "title": "欢迎信息模块化",
              "taskId": "t-p01-b02",
              "forms": [
                "搭建与构建、复制后运行",
                "观察与分析",
                "搭建与构建、测试与对照",
                "仿写并运行"
              ],
              "plan": "先把主程序、声明与实现按职责连起来，再分别编译、链接并运行，随后在IDE中复现同一结果。最后参照欢迎模块补出告别模块，检查新增文件、防重复包含与主程序调用，验证工程扩充后原功能仍能运行。",
              "background": [
                {
                  "html": "<p>单文件程序已经能打印欢迎画面，但车辆启动流程继续增加功能时，所有输出语句都放在主程序里会难以维护。本案例把核心欢迎信息拆成主程序、对外声明和具体实现三个文件，运行时仍要显示欢迎语。</p>\n<p>三个文件怎样相互找到对方，为什么分别编译后还要链接？先从文件职责和函数声明认识模块，再亲手构建。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "源文件、头文件与函数声明"
                },
                {
                  "title": "分别编译与链接"
                },
                {
                  "title": "IDE工程配置"
                },
                {
                  "title": "编译错误与链接错误定位"
                }
              ],
              "stages": [
                {
                  "id": "class-c-004-stage-1",
                  "number": 1,
                  "title": "建立欢迎模块",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 三个基础文件直接复制，重点核对声明、实现与调用的关系。</p>\n<ol>\n<li>在上一课建立的姓名拼音文件夹下，以本次课的月日四位数建立子文件夹，例如 <code>1024</code>。本阶段的 <code>main.cpp</code>、<code>greeter.h</code>、<code>greeter.cpp</code> 都放在这个日期文件夹内，不与上一课的单文件源码混放。</li>\n<li>分别新建三个文件并复制下方对应代码。核对 <code>greeter.h</code> 中的 <code>#pragma once</code> 和函数声明、<code>greeter.cpp</code> 中的头文件包含与函数实现、<code>main.cpp</code> 中的头文件包含与函数调用，三个位置的函数名须完全相同。</li>\n<li>保存三个文件，确认扩展名分别为 <code>.cpp</code>、<code>.h</code>、<code>.cpp</code>，并与给定代码核对一致。</li>\n<li>截取文件管理器画面，完整路径中要能看出姓名拼音文件夹、日期子文件夹和三个文件名；再分别截取三个文件的源码编辑界面。</li>\n</ol>\n<h5>本阶段代码：主程序</h5>\n<pre><code class=\"language-cpp\">#include &quot;greeter.h&quot;\n\nint main() {\n    displayWelcomeMessage();\n    return 0;\n}\n</code></pre>\n<h5>本阶段代码：欢迎模块声明</h5>\n<pre><code class=\"language-cpp\">#pragma once\nvoid displayWelcomeMessage();\n</code></pre>\n<h5>本阶段代码：欢迎模块实现</h5>\n<pre><code class=\"language-cpp\">#include &quot;greeter.h&quot;\n#include &lt;iostream&gt;\n\nvoid displayWelcomeMessage() {\n    std::cout &lt;&lt; &quot;******************************************&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;** Welcome to the Auto Driving System!  **&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;******************************************&quot; &lt;&lt; std::endl;\n}\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>文件结构.png</code>（完整路径中能看清个人文件夹、日期子文件夹及三个文件名）和 <code>main源码.png</code>、<code>欢迎声明.png</code>、<code>欢迎实现.png</code>（分别显示三个文件的代码）。</p>\n"
                },
                {
                  "id": "class-c-004-stage-2",
                  "number": 2,
                  "title": "源码与文件名匹配",
                  "leads": [],
                  "html": "<p><strong>任务形式：观察与分析。</strong> 根据刚建立的三个文件，将代码片段与实际文件名连线。</p>\n<ol>\n<li>左侧文件名依次为① <code>greeter.cpp</code>、② <code>main.cpp</code>、③ <code>greeter.h</code>；阅读下方甲、乙、丙三个片段，分别连到保存该片段的文件名。</li>\n<li>对照本人文件夹中的三个文件检查连线，说明哪个文件负责声明、哪个文件负责实现、哪个文件负责调用。把连线结果截成一张图即可，不新建说明文档。</li>\n</ol>\n<h5>本阶段连线片段</h5>\n<pre><code class=\"language-cpp\">甲：#include &quot;greeter.h&quot;\n    int main() { displayWelcomeMessage(); return 0; }\n\n乙：#pragma once\n    void displayWelcomeMessage();\n\n丙：#include &quot;greeter.h&quot;\n    void displayWelcomeMessage() { /* 打印欢迎横幅 */ }\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>模块文件连线.png</code>（三条连线及“声明、实现、调用”标记）。</p>\n"
                },
                {
                  "id": "class-c-004-stage-3",
                  "number": 3,
                  "title": "分别编译并链接",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、测试与对照。</strong> 分别编译两个源文件，再把目标文件链接成程序。</p>\n<ol>\n<li>在日期文件夹中打开终端；Windows可在文件夹地址栏输入 <code>cmd</code> 后回车。确认终端当前目录就是该日期文件夹，且其中有三个源文件。</li>\n<li>输入 <code>g++ -c greeter.cpp -o greeter.o</code>，确认生成 <code>greeter.o</code>；再输入 <code>g++ -c main.cpp -o main.o</code>，确认生成 <code>main.o</code>。观察两次编译各处理了哪个源文件。</li>\n<li>输入 <code>g++ main.o greeter.o -o app</code> 完成链接；Windows输入 <code>.\\app.exe</code>，其他系统输入 <code>./app</code>。若链接失败，先核对两个 <code>.o</code> 是否都参与链接、函数声明和定义是否同名，再修正重试。</li>\n<li>核对原欢迎横幅正确显示；截图要能看清两条编译命令、链接命令和最终运行结果。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">******************************************\n** Welcome to the Auto Driving System!  **\n******************************************\n</code></pre>\n<p><img src=\"assets/classroom-effects/p01-03.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>终端模块运行.png</code>（分别编译、链接命令、生成文件及运行结果）。</p>\n"
                },
                {
                  "id": "class-c-004-stage-4",
                  "number": 4,
                  "title": "在IDE中运行三文件工程",
                  "leads": [
                    {
                      "html": "<p>把已完成联合构建的文件带入IDE，先核对同一输出是否能够复现，再继续扩充个人告别模块；需要同时检查代码与工程配置是否对应。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：搭建与构建、测试与对照。</strong> 同一组三文件放入以本人缩写命名的IDE工程。</p>\n<ol>\n<li>在日期文件夹内新建干净的 <code>ide_project</code> 子文件夹。使用Dev C++时，依次选择“文件→新建→项目→Console Application”，把<strong>项目名称</strong>设为本人姓名拼音首字母，例如张三输入 <code>zs</code>，并将工程文件保存为该子文件夹中的 <code>zs.dev</code>；使用其他IDE时，同样把工程放在此处，并把运行目标名设为本人缩写。</li>\n<li>把上一课时的 <code>main.cpp</code>、<code>greeter.h</code>、<code>greeter.cpp</code> 复制到工程并加入项目文件树。检查 <code>main.cpp</code> 和 <code>greeter.cpp</code> 都参与编译，<code>greeter.h</code> 可在项目中找到。</li>\n<li>点击IDE中的“编译运行”。若提示找不到 <code>displayWelcomeMessage()</code>，检查 <code>greeter.cpp</code> 是否加入工程、函数名是否一致；成功后核对欢迎横幅与命令行结果相同，并检查生成的运行程序是否以本人缩写命名，例如 Windows 下的 <code>zs.exe</code>。若默认输出名称不同，在工程设置中将目标文件名改为本人缩写后重新构建。</li>\n<li>分别截取IDE左侧项目文件树和运行结果窗口。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">******************************************\n** Welcome to the Auto Driving System!  **\n******************************************\n</code></pre>\n<p>核对说明：与命令行运行的同一三文件程序一致。</p>\n<p><img src=\"assets/classroom-effects/p01-04.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>IDE项目结构.png</code>（显示本人缩写的项目名称与三个文件）和 <code>IDE模块运行.png</code>（本人缩写的运行程序及欢迎横幅）。</p>\n"
                },
                {
                  "id": "class-c-004-stage-5",
                  "number": 5,
                  "title": "仿写告别模块",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 以欢迎模块为参照，按给定骨架补全告别模块并加入工程构建。</p>\n<ol>\n<li>在IDE工程目录下新建 <code>goodbye.h</code> 与 <code>goodbye.cpp</code>，复制下方骨架代码，补全其中的两处 <code>// TODO</code>，并按步骤3修改主程序调用（不得改动函数名 <code>displayGoodbyeMessage</code>）。</li>\n<li>在 <code>goodbye.cpp</code> 的 <code>// TODO 2</code> 处输出一行与本人相关的下车提示，格式为：“乘客[本人姓名]，您已到达[本人宿舍号]号站点，本次行程共[10+本人学号末一位] km，再见！”（直接写出计算后的里程数值）。</li>\n<li>在 <code>main.cpp</code> 中包含 <code>goodbye.h</code>，并在欢迎函数调用之后调用 <code>displayGoodbyeMessage()</code>；确认 <code>goodbye.cpp</code> 已加入IDE工程并参与编译。</li>\n<li>编译运行，确认欢迎信息先出现，告别信息后出现。将IDE（展开左侧五文件项目树，分栏显示 <code>goodbye.h</code> 与 <code>goodbye.cpp</code> 编辑区）与运行窗口并排截图，并在 <code>goodbye.h</code> 中<strong>用红框圈出防止头文件重复包含的指令</strong>。</li>\n</ol>\n<h5>本阶段骨架代码：告别模块声明（<code>goodbye.h</code>）</h5>\n<pre><code class=\"language-cpp\">// TODO 1：写入防止头文件重复包含的指令，并声明无参无返回值函数 displayGoodbyeMessage。\n</code></pre>\n<h5>本阶段骨架代码：告别模块实现（<code>goodbye.cpp</code>）</h5>\n<pre><code class=\"language-cpp\">#include &quot;goodbye.h&quot;\n#include &lt;iostream&gt;\n\nvoid displayGoodbyeMessage() {\n    // TODO 2：打印包含本人姓名、宿舍号站点及[10+学号末一位] km里程的下车提示。\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">Welcome to the Auto Driving System!\n乘客[本人姓名]，您已到达[本人宿舍号]号站点，本次行程共[10+学号末一位] km，再见！\n</code></pre>\n<p>核对说明：欢迎横幅先出现，告别语后出现。</p>\n<p><img src=\"assets/classroom-effects/p01-05.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>告别模块实现与运行.png</code>（同屏显示五文件项目树、红框标注的防重复包含指令、<code>goodbye.cpp</code> 实现及含个人里程的运行结果）和 <code>告别调用源码.png</code>（修改后的 <code>main.cpp</code> 与 <code>goodbye.h</code>）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p01-capstone",
          "title": "车载启动画面定制",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-a1",
              "caseId": "c-ext-a1",
              "label": "拓展案例 A1",
              "title": "项目跨平台构建",
              "taskId": "t-p01-capstone",
              "forms": [
                "挖空并补全",
                "搭建与构建、测试与对照"
              ],
              "plan": "沿用三文件欢迎程序，先补全CMake中的目标与源文件关系，判断遗漏实现文件会造成什么影响。再在本机生成、构建并运行目标程序，以最终配置和欢迎输出确认工程完整；不以换用其他系统作为本次完成条件。",
              "background": [
                {
                  "html": "<p>同一组三文件欢迎程序交给使用不同系统和IDE的同学时，大家都需要把主程序和欢迎模块一起构建，最终看到相同的欢迎输出。</p>\n<p>逐人重写编译命令容易漏掉实现文件；本案例为它编写CMake配置，说明哪些源文件组成可执行程序，并先在本机核验构建结果。项目配置怎样把源代码与具体开发工具衔接起来？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "平台差异与CMake项目描述"
                },
                {
                  "title": "项目目录与版本管理入口"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-a1-stage-1",
                  "number": 1,
                  "title": "补全项目配置",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 沿用三文件欢迎程序，只补CMake中的可执行目标声明。</p>\n<ol>\n<li>在个人文件夹下建立本次课的日期文件夹，从上次课的日期文件夹复制欢迎模块的 <code>greeter.h</code>、<code>greeter.cpp</code> 到这里；<code>main.cpp</code> 使用下方三文件欢迎版，避免把上一课的告别模块调用带入本次构建。</li>\n<li>新建 <code>CMakeLists.txt</code>，复制下方配置片段，补全其中的 <code># TODO</code>：使可执行程序同时编译 <code>main.cpp</code> 和 <code>greeter.cpp</code>。</li>\n<li>画出“源文件→目标程序”的关系，并写出为什么只把 <code>main.cpp</code> 加入目标会影响链接。</li>\n</ol>\n<h5>本阶段代码：三文件欢迎版主程序</h5>\n<pre><code class=\"language-cpp\">#include &quot;greeter.h&quot;\n\nint main() {\n    displayWelcomeMessage();\n    return 0;\n}\n</code></pre>\n<h5>本阶段配置片段</h5>\n<pre><code class=\"language-cmake\">cmake_minimum_required(VERSION 3.16)\nproject(welcome_module LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\n# TODO：声明名为 welcome_module 的可执行目标，纳入主程序和欢迎模块的两个 .cpp 文件。\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>CMake配置.png</code>（补全后的 <code>CMakeLists.txt</code> 可执行目标语句）和 <code>构建关系.png</code>（两个源文件与目标程序的关系、遗漏实现文件的影响）。</p>\n"
                },
                {
                  "id": "class-c-ext-a1-stage-2",
                  "number": 2,
                  "title": "生成并运行项目",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、测试与对照。</strong> 使用配置文件生成程序，核对两个源文件均参与构建。</p>\n<ol>\n<li>在项目目录运行 <code>cmake -S . -B build</code>，再运行 <code>cmake --build build</code>；也可在支持CMake的IDE中打开同一目录并构建。</li>\n<li>运行生成的程序，核对欢迎横幅。构建失败时，依据报错检查目标名称、源文件名与文件所在目录，修正后重新构建。</li>\n<li>说明本机所用系统和构建方式；没有第二种操作系统时，不要求模拟另一平台。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">******************************************\n** Welcome to the Auto Driving System!  **\n******************************************\n</code></pre>\n<p>核对说明：欢迎模块的三行横幅完整出现；构建成功。</p>\n<p><img src=\"assets/classroom-effects/p01-06.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>CMake最终配置.png</code>（修正后能成功构建的 <code>CMakeLists.txt</code>）和 <code>构建运行.png</code>（配置/构建命令或IDE构建结果、欢迎横幅）；说明本机系统及构建方式。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-a2",
              "caseId": "c-ext-a2",
              "label": "拓展案例 A2",
              "title": "版本信息注入",
              "taskId": "t-p01-capstone",
              "forms": [
                "复制后运行",
                "挖空并补全"
              ],
              "plan": "先保留未注入版本号时的源码与运行画面，再通过构建配置提供版本信息并重新构建。对照1.0.1与1.0.2两次结果，确认画面确实随配置变化，并能说明版本号由哪个文件提供。",
              "background": [
                {
                  "html": "<p>欢迎程序若发布多个版本，运行画面应让测试人员辨认当前用的是哪一版。把版本号直接写进主程序，每次发布都要改源码，也难核对版本究竟来自哪里。</p>\n<p>本案例先观察没有注入版本号时的输出，再让构建配置提供版本号，比较两次运行结果；这引出编译定义与条件编译的作用。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "构建配置与编译定义"
                },
                {
                  "title": "条件编译与宏转字符串"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-a2-stage-1",
                  "number": 1,
                  "title": "运行未注入版本的程序",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行。</strong> 先运行没有注入版本号的程序，保留对照结果。</p>\n<ol>\n<li>在上一阶段的项目副本中，用下方 <code>main.cpp</code> 替换主程序；欢迎模块两个文件沿用已有版本。将“版本核验员[姓名]”中的占位内容换成本人信息。</li>\n<li>暂不为程序设置 <code>APP_VERSION</code>，先构建并运行。记录屏幕显示的版本提示，指出代码中哪一段分支产生了这条提示。</li>\n<li>保留此时的运行截图，供下一阶段对照。</li>\n</ol>\n<h5>本阶段代码：带版本显示的主程序</h5>\n<pre><code class=\"language-cpp\">// 展示由 CMake 注入的版本信息\n\n#include &quot;greeter.h&quot;\n\n#include &lt;iostream&gt;\n\n// 将未加引号的 APP_VERSION 宏转换为字符串字面量\n#define STRINGIFY_IMPL(value) #value\n#define TOSTRING(value) STRINGIFY_IMPL(value)\n\nint main() {\n    std::cout &lt;&lt; &quot;版本核验员[姓名]&quot; &lt;&lt; std::endl;\n#ifdef APP_VERSION\n    std::cout &lt;&lt; &quot;System Version: &quot; &lt;&lt; TOSTRING(APP_VERSION) &lt;&lt; std::endl;\n#else\n    std::cout &lt;&lt; &quot;Version: Not Defined&quot; &lt;&lt; std::endl;\n#endif\n\n    displayWelcomeMessage();\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p01-07.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>版本主程序.png</code>（本人标识及版本显示分支的源码）和 <code>未注入版本.png</code>（本人标识、版本提示及欢迎横幅）。</p>\n"
                },
                {
                  "id": "class-c-ext-a2-stage-2",
                  "number": 2,
                  "title": "注入并核验版本号",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 只改构建配置注入版本号，C++主程序沿用给定实现。</p>\n<ol>\n<li>在 <code>CMakeLists.txt</code> 的可执行目标声明后，完成下方待补语句，让构建系统为当前目标定义 <code>APP_VERSION=1.0.1</code>。将占位目标名替换成自己配置文件中的真实目标名。</li>\n<li>重新配置、构建并运行，核对输出中出现 <code>System Version: 1.0.1</code>，且欢迎横幅仍正常显示。</li>\n<li>把版本改成 <code>1.0.2</code> 再构建一次，记录输出变化；最后恢复到 <code>1.0.1</code>。指出版本号由哪个文件提供、哪个文件负责打印。</li>\n</ol>\n<h5>本阶段配置片段</h5>\n<pre><code class=\"language-cmake\"># TODO：为实际的可执行目标添加编译定义 APP_VERSION=1.0.1。\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">版本核验员张三\nSystem Version: 1.0.1\nWelcome to the Auto Driving System!\n\n再次构建后：System Version: 1.0.2\n</code></pre>\n<p><img src=\"assets/classroom-effects/p01-08.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>版本配置.png</code>（恢复为1.0.1的 <code>CMakeLists.txt</code>）、<code>版本注入运行.png</code>（本人标识、1.0.1与欢迎输出）、<code>版本变化配置.png</code>（设为1.0.2时的 <code>CMakeLists.txt</code>）和 <code>版本变化.png</code>（本人标识、1.0.2与欢迎输出）；说明版本号由哪个文件提供。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "project-02",
      "number": 2,
      "title": "信息交互设计",
      "groups": [
        {
          "id": "t-p02-intro",
          "title": "车辆交互信息梳理",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-b",
              "caseId": "c-ai-b",
              "label": "案例 B",
              "title": "AIGC程序功能分析",
              "taskId": "t-p02-intro",
              "forms": [
                "检索与核验、观察与分析"
              ],
              "plan": "将原始矩形程序与完整提示词一起提交给AIGC，对照变量、表达式与输出检查注释是否可靠。再从同一份代码中标出三个关键字，区分语言规定的词与自行命名的标识符，保留原程序、AI解释和个人判断的对应证据。",
              "background": [
                {
                  "html": "<p>团队接手一段没有注释的矩形计算程序时，首先要看懂每个量和计算步骤。</p>\n<p>本案例请AIGC为代码补充注释，再核对它如何从变量名推断用途；同一段代码里，<code>int</code> 等词和程序员自取的名字又有什么区别？由此进入关键字与标识符的学习。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "关键字、标识符与命名规则"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-b-stage-1",
                  "number": 1,
                  "title": "AIGC程序功能分析",
                  "leads": [],
                  "html": "<p><strong>任务形式：检索与核验、观察与分析。</strong> 用无注释的矩形程序检验AI对变量和语句的解释。</p>\n<ol>\n<li>将下方完整代码复制给AIGC，并发送提示词：“请为下面这段C++代码添加详细注释。请重点解释每个变量（标识符）的用途，以及关键代码块的逻辑。”</li>\n<li>阅读AI的注释，分别找出 <code>int</code>、<code>double</code>、<code>return</code> 和 <code>rectangle_length</code>、<code>rectangle_width</code>、<code>area</code>。指出哪一组是C++规定的词，哪一组由程序员命名。</li>\n<li>截取能看到原程序、提示词和AI解释关键语句的画面；文字较长可分两张截图。</li>\n</ol>\n<h5>本阶段代码：无注释矩形程序</h5>\n<pre><code class=\"language-cpp\">// 一段没有注释的C++代码片段\n\n#include &lt;iostream&gt;\n\nint main() {\n    double rectangle_length = 10.5;\n    double rectangle_width = 4.0;\n\n    double area = rectangle_length * rectangle_width;\n    double perimeter = 2 * (rectangle_length + rectangle_width);\n\n    std::cout &lt;&lt; &quot;Rectangle Details:&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;Length: &quot; &lt;&lt; rectangle_length &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;Width: &quot; &lt;&lt; rectangle_width &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;Area: &quot; &lt;&lt; area &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;Perimeter: &quot; &lt;&lt; perimeter &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>AI注释分析.png</code>（原程序、提示词、AI对变量与计算语句的注释，并标出三个C++关键字）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p02-b01",
          "title": "人机交互实现",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-005",
              "caseId": "c-005",
              "label": "案例 5",
              "title": "基础交互实现",
              "taskId": "t-p02-b01",
              "forms": [
                "抄写后运行、测试与对照",
                "复制后运行",
                "改写并运行"
              ],
              "plan": "先照代码截图输入姓名输出程序，通过去掉、恢复std::前缀观察编译差异；再运行目的地问答模板，最后改为包含个人姓名与目的地的交互。核对提问、读取、确认语的顺序，展示一次完整输入输出过程。",
              "background": [
                {
                  "html": "<p>车载导航需要向驾驶员提出问题、接收目的地，再把设定结果显示出来；控制台也能完成这段最基本的“对话”。</p>\n<p>在编写完整交互前，先用短程序打印本人姓名，看看输出工具的名称为什么带有 <code>std::</code>。后续阶段再把单向输出接成完整的输入与回显。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "程序中的命名与标准库入口"
                },
                {
                  "title": "标准命名空间、`cout` 与 `cin`"
                }
              ],
              "stages": [
                {
                  "id": "class-c-005-stage-1",
                  "number": 1,
                  "title": "命名空间验证",
                  "leads": [],
                  "html": "<p><strong>任务形式：抄写后运行、测试与对照。</strong> 照白底代码截图输入最短的姓名输出程序，再验证 <code>std::</code> 的作用。</p>\n<ol>\n<li>在本次项目目录新建单文件程序，照下方代码截图逐字输入，将示例姓名改为自己的姓名。注意 <code>#include</code>、双引号、分号和 <code>std::</code>。</li>\n<li>编译运行，确认控制台打印本人姓名。然后临时删掉 <code>cout</code> 前的一处 <code>std::</code>，观察编译结果；恢复前缀后再次运行。</li>\n</ol>\n<h5>本阶段代码截图：打印本人姓名</h5>\n<p><img src=\"assets/classroom-effects/p02-01.png\" alt=\"白底语法着色的姓名输出代码\"></p>\n<p><strong>本阶段提交：</strong> <code>命名空间源码.png</code>（本人姓名及恢复后的 <code>std::cout</code>）、<code>命名空间运行.png</code>（打印本人姓名）和 <code>命名空间验证.png</code>（暂时去掉 <code>std::</code> 后的编译结果）。</p>\n"
                },
                {
                  "id": "class-c-005-stage-2",
                  "number": 2,
                  "title": "模板代码运行",
                  "leads": [
                    {
                      "html": "<p>运行给定的目的地问答模板，观察提示、键盘读取与确认语的先后。后续改写会加入姓名，因此先保留可正常运行的模板及其结果。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：复制后运行。</strong> 复制完整的目的地问答模板，重点观察输入和回显顺序。</p>\n<p>输入说明：本模板的 <code>char[50]</code> 容量按字节计，最多保存49字节输入及1字节字符串结束符；代码注释中的“49个字符”按单字节字符理解。中文可能占多个字节，不能按49个汉字计算。目的地和后续新增的姓名均使用不含空格的短输入，每项不超过49字节，避免长输入越界。</p>\n<ol>\n<li>在个人目录中新建练习副本，复制下方带 <code>using namespace std;</code> 的目的地模板；核对字符数组、输入提示、键盘读取和回显语句，确认本版 <code>cout</code>、<code>cin</code> 不带 <code>std::</code> 前缀。</li>\n<li>编译运行，输入宿舍号或其他不含空格的目的地，确认程序完整显示提问、输入值和导航确认信息。</li>\n</ol>\n<h5>本阶段代码：交互模板</h5>\n<pre><code class=\"language-cpp\">// 读取并回显用户输入\n\n#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    // 定义一个字符数组，可存放最多 49 个字符外加一个结束符\n    char destination[50];\n\n    // 输出提示信息，不用 endl 让输入紧跟在冒号后\n    cout &lt;&lt; &quot;请输入目的地：&quot;;\n\n    // cin 等待用户输入，默认遇到空格或换行停止读取\n    cin &gt;&gt; destination;\n\n    // 回显确认信息\n    cout &lt;&lt; &quot;导航已设置为：&quot; &lt;&lt; destination &lt;&lt; endl;\n\n    return 0;\n}\n</code></pre>\n<h5>本阶段运行效果示例</h5>\n<p><img src=\"assets/classroom-effects/p02-02.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>交互模板源码.png</code>（命名空间声明及输入输出）和 <code>交互模板运行.png</code>（提问、输入和回显）。</p>\n"
                },
                {
                  "id": "class-c-005-stage-3",
                  "number": 3,
                  "title": "交互场景改写",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 沿用已运行的模板，仅在指定位置补充姓名读取与合并回显，不得改动原有 <code>destination</code> 变量。</p>\n<ol>\n<li>参照下方改写骨架，在 <code>cin &gt;&gt; destination;</code> 之后补充两条语句：提示输入姓名并用 <code>cin &gt;&gt;</code> 读入 <code>name</code>（先读目的地，再读姓名）。</li>\n<li>修改最后的 <code>cout</code> 语句，一次性输出同时包含本人姓名、目的地和默认导航编号 <code>[100+本人学号末两位]</code> 的确认语（直接写出编号数值或算式）。</li>\n<li>用本人姓名和一个不含空格的目的地运行，将源码与运行窗口左右并排同屏截图，并在源码上<strong>用红框圈出两条 <code>cin &gt;&gt;</code> 语句</strong>。</li>\n</ol>\n<h5>本阶段改写骨架：双项输入交互</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    char destination[50];\n    char name[50];\n\n    cout &lt;&lt; &quot;请输入目的地：&quot;;\n    cin &gt;&gt; destination;\n\n    // TODO 1：输出“请输入您的姓名：”（不换行），并用 cin 读取到 name。\n\n    // TODO 2：将下一行改写为同时回显 name、destination 及导航编号[100+学号末两位]。\n    cout &lt;&lt; &quot;导航已设置为：&quot; &lt;&lt; destination &lt;&lt; endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">请输入目的地：[输入的目的地]\n请输入您的姓名：[本人姓名]\n欢迎驾驶员[本人姓名]，目的地[输入的目的地]（导航编号[100+学号末两位]）已成功设定！\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-03.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>导航改写源码与运行.png</code>（左半屏显示红框标注的两条输入语句与确认语，右半屏显示本人姓名、目的地及导航编号的完整交互过程）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-006",
              "caseId": "c-006",
              "label": "案例 6",
              "title": "仪表盘信息输出",
              "taskId": "t-p02-b01",
              "forms": [
                "改写并运行"
              ],
              "plan": "从给定整数输出程序改写出包含车速、油量和挡位的仪表信息，加入规定的个人标识。重点核对变量类型与格式位置、油量的一位小数及百分号写法，以源码和同屏输出检查字段是否对应。",
              "background": [
                {
                  "html": "<p>驾驶员看仪表盘时，需要一眼读出车速、剩余油量和挡位，而不是辨认松散的数字。本案例要把个人车速、52.5%和D挡排成一行，并给油量保留一位小数。</p>\n<p>整数、小数、字符和百分号各该怎样写入格式字符串？这引出 <code>printf</code> 的占位符与格式控制。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`printf` 占位符与格式控制"
                }
              ],
              "stages": [
                {
                  "id": "class-c-006-stage-1",
                  "number": 1,
                  "title": "核心代码改写",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 从可运行的整数打印程序开始，按给定变量名补全三项仪表盘格式化输出。</p>\n<ol>\n<li>复制下方起点代码并先运行一次，在源码里找到 <code>%d</code> 对应的变量。</li>\n<li>将 <code>sample_value</code> 改名为 <code>int current_speed = 80 + 本人学号末一位;</code>（写出计算后的整数），并在下方新增 <code>double fuel_level = 52.5;</code>、<code>char current_gear = &#39;D&#39;;</code>。</li>\n<li>将第二条 <code>printf</code> 改写为一次输出测试车编号（本人学号）、车速（整数）、油量（保留一位小数并紧跟 <code>%</code>）和挡位（字符），核对占位符顺序与变量顺序完全对应。</li>\n<li>编译运行，将源码与运行窗口同屏截图，并在源码截图中<strong>用红框圈出在 <code>printf</code> 格式字符串里用来打印百分号 <code>%</code> 的写法</strong>。</li>\n</ol>\n<h5>本阶段起点代码：基础数值打印</h5>\n<pre><code class=\"language-cpp\">#include &lt;cstdio&gt;\n\nint main() {\n    printf(&quot;仪表盘启动\\n&quot;);\n    int sample_value = 88; // 改名为 current_speed，值设为 80 + 本人学号末一位\n    // TODO 1：定义 double 类型的 fuel_level (52.5) 与 char 类型的 current_gear (&#39;D&#39;)。\n    // TODO 2：改写下方 printf，在一行或两行内输出“[本人学号]号测试车”及车速、油量(%)、挡位。\n    printf(&quot;车速: %d km/h\\n&quot;, sample_value);\n    return 0;\n}\n</code></pre>\n<h5>完成后的输出格式示例</h5>\n<pre><code class=\"language-text\">仪表盘启动\n20260001号测试车\n车速: 81 km/h | 油量: 52.5% | 挡位: D\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-04.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>仪表盘源码与运行.png</code>（同屏显示三个变量定义、红框圈出的百分号写法，以及含本人学号、动态车速、52.5%和D挡的运行输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-007",
              "caseId": "c-007",
              "label": "案例 7",
              "title": "启动参数接收",
              "taskId": "t-p02-b01",
              "forms": [
                "复制后运行、测试与对照",
                "扩充并运行、测试与对照"
              ],
              "plan": "先在终端核验经纬度参数的解析与缺参提示，再在IDE中加入海拔参数并更新数量检查。对照启动命令、IDE参数设置和最终三项报告，确认数据由启动配置传入，而不是只在源码中改写显示文字。",
              "background": [
                {
                  "html": "<p>测绘程序每到一个地点都要处理新坐标，若每次都改源码再编译，会把数据和程序混在一起。</p>\n<p>本案例先让程序在终端启动时接收经纬度，报告当前地点，并在参数不足时给出提示；随后在IDE里扩充海拔输入。启动命令后的文字怎样进入 <code>main</code>，又怎样变成可计算的数值？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`argc`、`argv` 与字符串转数值"
                }
              ],
              "stages": [
                {
                  "id": "class-c-007-stage-1",
                  "number": 1,
                  "title": "启动参数解析",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 在终端编译程序，直接在启动命令后输入经纬度。</p>\n<ol>\n<li>在本次日期目录下建立坐标程序子文件夹，新建 <code>location_tracker.cpp</code>，复制下方代码。找到 <code>main(int argc, char* argv[])</code>、参数不足判断、<code>atof</code> 解析和报告语句；在报告开头加入“测绘员[姓名]”。</li>\n<li>在该子文件夹中打开终端，先检查当前目录能看到 <code>location_tracker.cpp</code>。Windows输入 <code>g++ location_tracker.cpp -o location_tracker.exe</code>，其他系统输入 <code>g++ location_tracker.cpp -o location_tracker</code>；若提示找不到源文件，先核对当前目录与文件名。</li>\n<li><strong>本阶段只在终端运行。</strong> Windows输入 <code>.\\location_tracker.exe 121.47 31.23</code>，其他系统输入 <code>./location_tracker 121.47 31.23</code>。核对屏幕上的测绘员姓名、经度121.47、纬度31.23；再不带坐标运行一次，观察参数不足提示。</li>\n<li><strong>Windows中文乱码时：</strong> 先在当前终端输入 <code>chcp 65001</code>，重新运行。若仍乱码，用VS Code的“以编码保存”把个人源码另存为GBK副本，例如 <code>location_tracker_gbk.cpp</code>；在终端输入 <code>chcp 936</code>，再执行 <code>g++ -finput-charset=GBK -fexec-charset=GBK location_tracker_gbk.cpp -o location_tracker_gbk.exe</code>，运行新生成的程序。保留原UTF-8源码，截图以中文正常显示的那次运行结果为准。</li>\n<li>对照启动命令指出程序名、<code>argv[1]</code> 和 <code>argv[2]</code> 各是什么，并说明为什么只给两个坐标值时 <code>argc</code> 仍至少为3。</li>\n</ol>\n<h5>本阶段代码：经纬度输入</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;cstdlib&gt;\n\nint main(int argc, char* argv[]) {\n    if (argc &lt; 3) {\n        std::cout &lt;&lt; &quot;错误：参数不足！&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;用法: ./location_tracker [经度] [纬度]&quot; &lt;&lt; std::endl;\n        return 1;\n    }\n\n    double longitude = atof(argv[1]);\n    double latitude = atof(argv[2]);\n\n    std::cout &lt;&lt; &quot;接收到坐标：经度 &quot; &lt;&lt; longitude &lt;&lt; &quot;, 纬度 &quot; &lt;&lt; latitude &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">测绘员[本人姓名]记录：经度 121.47, 纬度 31.23\n缺参运行：错误：参数不足！\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-05.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>坐标终端源码.png</code>（<code>main</code> 参数、数量判断、经纬度解析及测绘员标识）和 <code>坐标终端运行.png</code>（编译命令、带两个坐标的启动命令及完整结果）；另保留 <code>坐标终端缺参.png</code>（不带参数时的提示）。</p>\n"
                },
                {
                  "id": "class-c-007-stage-2",
                  "number": 2,
                  "title": "多参逻辑拓展",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 在IDE中修改并运行同一坐标程序，让启动配置传入第三个数据。</p>\n<ol>\n<li>在IDE中打开刚才的 <code>location_tracker.cpp</code>，沿用已有的经纬度解析与测绘员报告。增加第三个启动数据“海拔”，用 <code>argv[3]</code> 和 <code>atoi</code> 将它作为整数读取；同步调整参数不足时的判断与用法提示。报告中三项数据的格式为“经度 121.47, 纬度 31.23, 海拔 5m”。</li>\n<li>打开IDE的<strong>程序运行参数</strong>设置，不要把数据写进编译器选项。Dev-C++可在“执行→参数”中填写；CLion可在“运行→编辑配置→程序参数”中填写。只输入三个值 <code>121.47 31.23 5</code>，数值之间用空格分开，不填程序名或 <code>.exe</code>。</li>\n<li>保存设置，在IDE中点击“编译运行”。检查运行窗口显示测绘员姓名和三个坐标数据；若仍提示参数不足，核对IDE选中的运行配置、三个值和更新后的 <code>argc</code> 判断。保留IDE参数设置画面，再截取运行结果。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">测绘员[本人姓名]记录：经度 121.47, 纬度 31.23, 海拔 5m\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-06.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>坐标IDE源码.png</code>（第三个参数、数量判断和三项报告）、<code>坐标IDE参数.png</code>（IDE中填写的三个程序参数）及 <code>坐标IDE运行.png</code>（测绘员姓名、经纬度和海拔 5m）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p02-b02",
          "title": "车辆状态展示",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-008",
              "caseId": "c-008",
              "label": "案例 8",
              "title": "累计里程计算",
              "taskId": "t-p02-b02",
              "forms": [
                "独立写程序、观察与分析",
                "挖空并补全、测试与对照"
              ],
              "plan": "先记录整数乘积的实际输出并与计算器结果比较，再运行接近整型上限的两组里程计算。将类型范围、手算结果与程序表现放在一起核验，分别说明有符号与无符号计算的观察结果，不把某次异常输出当成通用规律。",
              "background": [
                {
                  "html": "<p>汽车仪表盘会把每次行程加到累计里程中，但保存数字的整数类型有容量边界。若原有里程已接近上限，再加1000 km，程序会显示什么？</p>\n<p>本案例将运行有符号与无符号两组计算并核对类型范围，先明确变量能表示多少数。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "变量与整数取值范围"
                },
                {
                  "title": "变量初始化、`auto` 与有符号/无符号整型"
                },
                {
                  "title": "整型容量与数据类型选择"
                }
              ],
              "stages": [
                {
                  "id": "class-c-008-stage-1",
                  "number": 1,
                  "title": "乘积数据计算",
                  "leads": [
                    {
                      "html": "<p>先比较整数乘积与数学计算的结果，再用 <code>2147483600 + 1000</code> 检验接近类型上限时的里程累加，观察有符号、无符号整型的取值范围与运行表现。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：独立写程序、观察与分析。</strong> 按给定数据计算乘积，时间不足时可观察教师运行的同一程序。</p>\n<ol>\n<li>新建一个 <code>.cpp</code> 文件，包含输入输出头文件；声明两个普通的 <code>int</code> 变量，均赋值为56789。</li>\n<li>计算这两个变量的乘积，用 <code>cout</code> 输出结果。若课堂时间不足，可先观察教师运行相同程序，不单独完成这段代码。</li>\n<li>记录程序实际显示的数值，再用计算器求数学上的乘积；比较两者。不要把某个固定的负数当作所有环境都会出现的结果。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">程序实际乘积：[记录本机或教师演示值]\n计算器乘积：56789 × 56789 = 3224990521\n</code></pre>\n<p>核对说明：本例按32位 <code>int</code> 环境观察。56789的平方超出该类型范围；C++有符号整数溢出属于未定义行为，实测仅用于观察，不能据此推断固定结果或环绕规则。</p>\n<p><strong>本阶段提交：</strong> 记录本机或教师演示程序的实际输出数值，以及计算器求得的乘积；本阶段不要求截图。</p>\n"
                },
                {
                  "id": "class-c-008-stage-2",
                  "number": 2,
                  "title": "溢出状态验证",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、测试与对照。</strong> 先运行有符号整型的里程计算，再在TODO处完成无符号整型对照。</p>\n<p>观察说明：本例按32位 <code>int</code> 且 <code>unsigned int</code> 能表示2147484600的环境观察。有符号相加超出范围属于未定义行为，因此整个程序的后续输出也没有可移植保证；目标中的无符号结果表示对应无符号算式的数学对照值，不保证含有符号溢出的完整程序在所有环境中都打印该值。</p>\n<ol>\n<li>复制下方程序，先不补TODO，编译运行已有的 <code>int</code> 里程计算。指出初始里程、单次里程和 <code>std::numeric_limits&lt;int&gt;::max()</code> 的输出。</li>\n<li>参照上方三个变量，在第一处TODO使用 <code>unsigned int</code> 定义初始里程、本次里程及相加后的新里程；在第二处TODO输出无符号整型计算结果。保留原有 <code>int</code> 计算和结果，不用新代码替换它。</li>\n<li>手算 <code>2147483600 + 1000</code>，再运行核对两种整型的实际结果。不同编译环境若显示不同，不以某一个负数作为统一验收值；说明手算结果与哪一组输出相符。</li>\n<li>在输出前增加“里程数据核验员[姓名]”，检查最终画面中同时有类型上限、两组结果和本人标识。</li>\n</ol>\n<h5>本阶段代码：里程边界</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;limits&gt;\n\nint main() {\n    int total_mileage = 2147483600;\n    int trip_distance = 1000;\n    int new_total_mileage = total_mileage + trip_distance;\n\n    std::cout &lt;&lt; &quot;int 类型的最大值是: &quot; &lt;&lt; std::numeric_limits&lt;int&gt;::max() &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;计算后的新里程: &quot; &lt;&lt; new_total_mileage &lt;&lt; &quot; km  &lt;-- 结果出乎意料！&quot; &lt;&lt; std::endl;\n\n    // TODO 1：用 unsigned int 定义同样的初始里程、本次里程和新里程。\n    // TODO 2：输出 unsigned int 计算后的新里程。\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">int 类型的最大值：[本机显示值]\n有符号里程结果：[本机实际值]\n里程数据核验员[本人姓名]\n无符号里程结果：2147484600 km\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-07.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>里程源码.png</code>（有符号与无符号两组计算及核验员标识）和 <code>里程对照运行.png</code>（类型上限、两组结果和本人标识）；附手算的 <code>2147483600 + 1000</code> 结果。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-009",
              "caseId": "c-009",
              "label": "案例 9",
              "title": "解锁信号加密",
              "taskId": "t-p02-b02",
              "forms": [
                "复制后运行、扩充并运行"
              ],
              "plan": "先核对原字符、密钥与加密字符的关系，再补全还原表达式并换用规定的个人密钥。用完整加密、解密输出检查是否回到原指令，同时保留个人标识、密钥与关键算式，说明本次只是在验证字符编码运算。",
              "background": [
                {
                  "html": "<p>遥控钥匙用单个字母发送开锁指令，直接传送原字符容易被截获。本案例先把字符 <code>A</code> 按密钥3变成 <code>D</code>，再由收到的字符还原原指令，核对两次结果。</p>\n<p>字母为何能参与加减运算？先从字符在计算机中的编码学起。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "字符数据与字符编码"
                }
              ],
              "stages": [
                {
                  "id": "class-c-009-stage-1",
                  "number": 1,
                  "title": "加密字符解密",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、扩充并运行。</strong> 保留原有的加密结构，结合本人专属密钥完成加密与逆向还原。</p>\n<ol>\n<li>复制下方程序，将密钥 <code>shift_key</code> 设为你本人的 <code>2 + (学号末一位 % 5)</code>（即 2～6 之间的一个整数）；先心算 <code>&#39;A&#39;</code> 加上该密钥后会变成哪个大写字母。</li>\n<li>在输出加密结果之后，仅新增两行代码：用已生成的 <code>encrypted_command</code> 和 <code>shift_key</code> 逆向算出原字符并存入 <code>char decrypted_command</code>，再打印出来（不得直接写 <code>decrypted_command = &#39;A&#39;</code> 或使用 <code>original_command</code>）。报告开头加入“通信兵[姓名]”标识。</li>\n<li>编译运行，核对加密字符与心算一致且解密回到 <code>&#39;A&#39;</code>；将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出计算 <code>decrypted_command</code> 的那个算术表达式</strong>。</li>\n</ol>\n<h5>本阶段代码：解锁信号加密</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\nint main() {\n    char original_command = &#39;A&#39;;\n    int shift_key = 3; // 改为 2 + (本人学号末一位 % 5)\n\n    char encrypted_command = original_command + shift_key;\n\n    std::cout &lt;&lt; &quot;原始指令: &quot; &lt;&lt; original_command &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;加密密钥: &quot; &lt;&lt; shift_key &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;加密后的指令: &quot; &lt;&lt; encrypted_command &lt;&lt; std::endl;\n\n    // TODO：基于 encrypted_command 与 shift_key 计算 decrypted_command 并输出。\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">通信兵[本人姓名]\n原始指令：A → 密钥：[2+(学号末一位%5)] → 加密指令：[对应字母] → 解密指令：A\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-08.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>指令加解密源码与运行.png</code>（同屏显示红框标注的解密算式、个人密钥 <code>shift_key</code>，以及通信兵标识、加密字符和解密字符A）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-010",
              "caseId": "c-010",
              "label": "案例 10",
              "title": "安全带状态提醒",
              "taskId": "t-p02-b02",
              "forms": [
                "挖空并补全、观察与分析",
                "改写并运行、测试与对照"
              ],
              "plan": "先用两个布尔变量报告引擎和安全带状态，核对true、false与当前警报判断。随后只改变安全带状态，保留前后报告，检查应变化的字段确实变化、未修改的引擎状态保持一致。",
              "background": [
                {
                  "html": "<p>安全带提醒需要同时报告“引擎是否启动”和“安全带是否系好”，这两项状态只有是与否。</p>\n<p>本案例模拟引擎已启动、安全带未系的车辆，用变量保存状态，并让控制台明确打印 <code>true</code>、<code>false</code>，供驾驶员判断是否需要警报。什么数据类型适合保存这种二选一信息？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`bool` 与 `std::boolalpha`"
                },
                {
                  "title": "定长整型与状态数据类型"
                }
              ],
              "stages": [
                {
                  "id": "class-c-010-stage-1",
                  "number": 1,
                  "title": "布尔逻辑判定",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、观察与分析。</strong> 根据“引擎启动、安全带未系”自行补出状态声明与文本显示设置。</p>\n<ol>\n<li>复制下方练习代码，在第一处TODO定义两个 <code>bool</code> 变量：引擎已启动，安全带未系；变量名与后面的输出语句保持一致。</li>\n<li>在第二处TODO设置布尔值以 <code>true</code>、<code>false</code> 文本显示。编译运行，核对屏幕显示的是文字，而不是1与0。</li>\n<li>根据程序打印的安全规则判断当前组合是否需要警报；运行截图中保留两个状态和规则文字，另用一句话写下判断依据。</li>\n</ol>\n<h5>本阶段代码：驾驶安全状态</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\n\nint main() {\n    // TODO 1：根据当前车辆状态，定义并初始化 isEngineOn 与 isSeatbeltFastened。\n\n    // TODO 2：设置 bool 值以 true/false 文本输出。\n    std::cout &lt;&lt; &quot;--- 驾驶安全状态监控 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;引擎是否启动? &quot; &lt;&lt; isEngineOn &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;安全带是否系好? &quot; &lt;&lt; isSeatbeltFastened &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;安全规则：当引擎启动且安全带未系时，需要发出警报。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">引擎状态：true\n安全带状态：false\n</code></pre>\n<p>核对说明：本组状态需要发出警报。</p>\n<p><strong>本阶段提交：</strong> <code>安全状态源码.png</code>（两个 <code>bool</code> 变量及 <code>std::boolalpha</code>）、<code>安全状态运行.png</code>（两个状态的文本显示）和一句当前组合的警报判断。</p>\n"
                },
                {
                  "id": "class-c-010-stage-2",
                  "number": 2,
                  "title": "布尔逻辑判定",
                  "leads": [
                    {
                      "html": "<p>保留初始安全报告，只改变安全带状态。核对新报告中应变化的字段，并确认引擎等未修改状态没有被意外改变。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：改写并运行、测试与对照。</strong> 沿用上一课时的安全状态程序，只改安全带状态与当前报告。</p>\n<ol>\n<li>将 <code>isSeatbeltFastened</code> 改为 <code>true</code>，重新运行，比较本次与上一课时的状态输出。</li>\n<li>在原有规则说明后增加一行针对本次状态的人工判断报告，以“[宿舍号]号车库安全自检”标识这组测试；此处只报告已知状态，不要求编写自动分支判断。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">[本人宿舍号]号车库安全自检\n引擎状态：true\n安全带状态：true\n</code></pre>\n<p>核对说明：与上一阶段的安全带状态形成对照。</p>\n<p><img src=\"assets/classroom-effects/p02-09.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>安全状态对照源码.png</code>（改动的变量与新增报告）及 <code>安全状态对照运行.png</code>（车库标识、两个 <code>true</code> 和当前判断）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-011",
              "caseId": "c-011",
              "label": "案例 11",
              "title": "电量衰减模拟",
              "taskId": "t-p02-b02",
              "forms": [
                "挖空并补全",
                "改写并运行"
              ],
              "plan": "先按给定容量、衰减率与年数运行基准预测，核对乘方表达式及两位小数的显示。再改用新的衰减率和个人年数，保留两次计算条件与输出，确认变化来自模型输入而非仅修改结果文字。",
              "background": [
                {
                  "html": "<p>电动汽车电池的理论容量会逐年按比例衰减，程序要估算一块70.0 kWh电池按年衰减率3.5%使用5年后的剩余容量。</p>\n<p>这里既有小数比例，又要把同一比例连续作用多年；若只用整数，结果会丢失精度。本案例由此引入实型数据、精度和乘方计算。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`float`、`double`、浮点精度与 `pow`"
                }
              ],
              "stages": [
                {
                  "id": "class-c-011-stage-1",
                  "number": 1,
                  "title": "衰减乘方计算",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 按给定容量、年衰减率和年数完成常量与乘方计算。</p>\n<ol>\n<li>复制下方练习代码，在第一处TODO用 <code>const double</code> 定义初始容量70.0 kWh和年衰减率0.035，名称要与后续计算及输出中的变量一致。</li>\n<li>在第二处TODO算出一年后保留的比例；在第三处TODO用 <code>pow</code> 求5年后的剩余容量。检查头文件中已有 <code>&lt;cmath&gt;</code> 与 <code>&lt;iomanip&gt;</code>。</li>\n<li>编译运行，核对初始容量显示为70 kWh，5年后的理论剩余容量为58.58 kWh，剩余容量保留两位小数；截取已补全的常量和计算语句。</li>\n</ol>\n<h5>本阶段代码：电池容量衰减</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\n#include &lt;cmath&gt;\n\nint main() {\n    // TODO 1：定义初始容量 INITIAL_CAPACITY 与年衰减率 ANNUAL_DECAY_RATE，均为 const double。\n    const int YEARS = 5;\n\n    // TODO 2：计算每年保留比例 remaining_factor。\n    // TODO 3：用 pow 计算 final_capacity。\n\n    std::cout &lt;&lt; &quot;初始容量: &quot; &lt;&lt; INITIAL_CAPACITY &lt;&lt; &quot; kWh&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; YEARS &lt;&lt; &quot;年后的理论剩余容量: &quot;\n              &lt;&lt; std::fixed &lt;&lt; std::setprecision(2)\n              &lt;&lt; final_capacity &lt;&lt; &quot; kWh&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">初始容量: 70 kWh\n5年后的理论剩余容量: 58.58 kWh\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-10.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>电池基础源码.png</code>（70.0、0.035、5年与 <code>pow</code>）和 <code>电池基础运行.png</code>（初始容量70 kWh、5年结果58.58 kWh且剩余容量保留两位小数）。</p>\n"
                },
                {
                  "id": "class-c-011-stage-2",
                  "number": 2,
                  "title": "预测数据输出",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 沿用上阶段的乘方计算，改用新电池的衰减率和个人预测年数。</p>\n<ol>\n<li>在个人副本中将年衰减率改为 <code>0.028</code>（即2.8%）、年数 <code>YEARS</code> 改为 <code>8 + (本人学号末一位 % 5)</code>（即 8～12 年之间的一个整数），保留原有乘方计算主体及两位小数输出。</li>\n<li>在输出中加入“电池评估员[姓名]”和年衰减率，先用计算器或心算核对多年衰减后的容量应明显小于70.0 kWh；将源码与运行结果同屏截图，并在源码上<strong>用红框圈出调用 <code>std::pow</code> 的那一个表达式</strong>。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">电池评估员[本人姓名]\n年衰减率：2.8%\n[8+(学号末一位%5)]年后容量：[按70.0×(1-0.028)^YEARS计算的两位小数] kWh\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-11.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>电池预测源码与运行.png</code>（同屏显示0.028、个人年数、红框标注的 <code>pow</code> 表达式，以及评估员标识、2.8%和保留两位小数的最终容量）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p02-b03",
          "title": "车辆数据计算",
          "kind": "基础任务 3",
          "cards": [
            {
              "id": "class-c-012",
              "caseId": "c-012",
              "label": "案例 12",
              "title": "百公里油耗计算",
              "taskId": "t-p02-b03",
              "forms": [
                "手算与图解、挖空并补全、改写并运行"
              ],
              "plan": "先用本人行程数据写出百公里油耗算式，再补全程序中的常量、除法与输出。把手算结果同运行显示对应起来，检查里程、油量、单位及一位小数是否一致，重点确认计算过程没有丢失小数部分。",
              "background": [
                {
                  "html": "<p>行车电脑要把一次行程的行驶里程、消耗燃油换算成驾驶员熟悉的百公里油耗，并保留一位小数。本案例先按“油量÷里程×100”手算，再让程序输出同一结果。</p>\n<p>行程数据会变，公式中的百公里系数却固定；这正好用来区分变量、常量和混合类型算术。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "常量、混合类型、算术与位运算对照"
                }
              ],
              "stages": [
                {
                  "id": "class-c-012-stage-1",
                  "number": 1,
                  "title": "油耗数据计算",
                  "leads": [],
                  "html": "<p><strong>任务形式：手算与图解、挖空并补全、改写并运行。</strong> 根据个人行程数据补出常量与油耗计算，再加入车主报告。</p>\n<ol>\n<li>设本人行驶里程为 <code>400 + 本人学号末两位</code>（km），消耗油量为 <code>35.5</code>（L）。先按 <code>(35.5 ÷ 本人里程) × 100</code> 手算或用计算器求百公里油耗，记下保留一位小数的结果。</li>\n<li>复制下方练习代码，在第一处TODO定义 <code>double fuel_consumed_liters = 35.5</code> 与 <code>int distance_traveled_km = 400 + 本人学号末两位</code>（填入具体整数）；在第二处TODO把百公里系数100.0定义为 <code>const double FACTOR_100</code>。</li>\n<li>在第三处TODO计算 <code>fuel_consumption</code>，并将报告标题改成“车主[学号]的百公里油耗报告”。编译运行，比较程序的一位小数结果与手算值，将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出参与除法的两个变量名</strong>。</li>\n</ol>\n<h5>本阶段代码：百公里油耗</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\n\nint main() {\n    // TODO 1：定义本次消耗油量与行驶距离。\n\n    // TODO 2：定义百公里换算系数 FACTOR_100，类型为 const double。\n\n    // TODO 3：计算百公里油耗 fuel_consumption。\n\n    std::cout &lt;&lt; &quot;--- 百公里油耗计算器 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;行驶里程: &quot; &lt;&lt; distance_traveled_km &lt;&lt; &quot; km&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;消耗油量: &quot; &lt;&lt; fuel_consumed_liters &lt;&lt; &quot; L&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;计算出的百公里油耗为: &quot;\n              &lt;&lt; std::fixed &lt;&lt; std::setprecision(1)\n              &lt;&lt; fuel_consumption &lt;&lt; &quot; L/100km&quot; &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">车主[本人学号]的百公里油耗报告\n行驶里程：[400+学号末两位] km；消耗油量：35.5 L\n百公里油耗：[对应一位小数] L/100km\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-12.png\" alt=\"百公里油耗运行效果\"></p>\n<p><strong>本阶段提交：</strong> 本人里程的百公里油耗计算算式与结果、<code>油耗源码与运行.png</code>（同屏显示常量、红框标注的除法计算式，以及车主学号、个人里程、35.5 L和油耗输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-013",
              "caseId": "c-013",
              "label": "案例 13",
              "title": "物体坐标更新",
              "taskId": "t-p02-b03",
              "forms": [
                "挖空并补全、测试与对照"
              ],
              "plan": "按规定先更新横坐标、再使用新横坐标计算纵坐标，连续运行三次并保留各次结果。随后临时改变括号做对照，将源码表达式与输出并排核对，解释执行顺序为何会影响目标坐标。",
              "background": [
                {
                  "html": "<p>雷达追踪移动目标时，横纵坐标必须按规定顺序更新：先让横坐标加2，再用更新后的横坐标减5得到纵坐标。</p>\n<p>本案例要连续执行三次并逐次报告坐标；如果把两个更新写在一个表达式中，括号和运算先后会不会改变结果？后续阶段用逗号表达式验证。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "赋值、复合赋值与逗号表达式"
                },
                {
                  "title": "逗号运算符、`sizeof`、优先级与结合方向"
                }
              ],
              "stages": [
                {
                  "id": "class-c-013-stage-1",
                  "number": 1,
                  "title": "坐标数据更新",
                  "leads": [
                    {
                      "html": "<p>按给定的“先更新横坐标，再计算纵坐标”规则编写表达式，连续执行三次；通过改变括号的对照试验，观察执行顺序与坐标结果的关系。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：挖空并补全、测试与对照。</strong> 补全三次坐标更新，再比较有括号与无括号的结果。</p>\n<ol>\n<li>复制下方练习代码，保持初始坐标 <code>x=0.0</code>、<code>y=0.0</code>；在三处TODO分别补上同一条更新规则：先让 <code>x</code> 增加2，再用更新后的 <code>x-5</code> 作为 <code>y</code>，用括号将逗号表达式整体作为赋值右侧。</li>\n<li>运行并核对三次坐标：第1次 <code>(2.0, -3.0)</code>、第2次 <code>(4.0, -1.0)</code>、第3次 <code>(6.0, 1.0)</code>。指出每次逗号左侧先改变了哪个变量、右侧给出了哪个值。</li>\n<li>在临时副本中只去掉第1次更新语句的一对括号，运行并记录第1次的 <code>y</code>；与原结果比较。说明赋值运算与逗号运算谁先结合，之后恢复括号。</li>\n<li>在最终副本的输出标题前加入“雷达追踪员[姓名]”，核对三次坐标仍与原版相同。</li>\n</ol>\n<h5>本阶段代码：坐标连续更新</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\n\nint main() {\n    double x = 0.0, y = 0.0;\n    std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(1);\n    std::cout &lt;&lt; &quot;初始状态: x = &quot; &lt;&lt; x &lt;&lt; &quot;, y = &quot; &lt;&lt; y &lt;&lt; std::endl;\n\n    // TODO 1：完成第1次更新；用括号把两个表达式放在一起。\n    std::cout &lt;&lt; &quot;第1次更新后: x = &quot; &lt;&lt; x &lt;&lt; &quot;, y = &quot; &lt;&lt; y &lt;&lt; std::endl;\n\n    // TODO 2：按同样规则完成第2次更新。\n    std::cout &lt;&lt; &quot;第2次更新后: x = &quot; &lt;&lt; x &lt;&lt; &quot;, y = &quot; &lt;&lt; y &lt;&lt; std::endl;\n\n    // TODO 3：按同样规则完成第3次更新。\n    std::cout &lt;&lt; &quot;第3次更新后: x = &quot; &lt;&lt; x &lt;&lt; &quot;, y = &quot; &lt;&lt; y &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">雷达追踪员[本人姓名]\n第1次更新后：x=2.0, y=-3.0\n第2次更新后：x=4.0, y=-1.0\n第3次更新后：x=6.0, y=1.0\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-13.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>坐标源码.png</code>（三次带括号的更新及追踪员标识）、<code>坐标运行.png</code>（三次正确坐标）和 <code>坐标括号对照.png</code>（临时去括号后的第1次结果与一句比较结论）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-014",
              "caseId": "c-014",
              "label": "案例 14",
              "title": "平均耗时计算",
              "taskId": "t-p02-b03",
              "forms": [
                "挖空并补全、测试与对照"
              ],
              "plan": "保留原有错误计算式，再补出在除法前进行显式转换的版本，让两种结果同时显示。结合秒与毫秒的换算核对0 ms和3.0 ms的差异，以关键表达式及运行记录说明精度在哪一步丢失。",
              "background": [
                {
                  "html": "<p>车载主控处理1000个数据包共用3秒，性能报告却要显示“每包平均多少毫秒”。如果先做整数除法再换单位，部分计算结果会先丢失小数。</p>\n<p>本案例保留错误式作对照，再用显式类型转换得到可用于报告的平均耗时；关键是弄清转换发生在除法前还是后。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "隐式转换与 `static_cast`"
                }
              ],
              "stages": [
                {
                  "id": "class-c-014-stage-1",
                  "number": 1,
                  "title": "精度错误纠正",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、测试与对照。</strong> 保留错误计算作参照，只补正确计算的关键语句。</p>\n<ol>\n<li>复制下方练习代码，补全 <code>// TODO</code>：先把总秒数转换为 <code>double</code>，再除以1000个数据包，最后乘1000换算为毫秒。</li>\n<li>运行核对“错误计算结果”为0 ms，“正确计算结果”为3.0 ms；在输出前增加“性能审核员[姓名]”标识，并检查更改没有覆盖错误计算行。</li>\n</ol>\n<h5>本阶段练习代码：平均耗时</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\n\nint main() {\n    int total_seconds = 3;\n    int packets_processed = 1000;\n\n    double avg_time_ms_wrong = (total_seconds / packets_processed) * 1000;\n    std::cout &lt;&lt; &quot;错误计算结果: &quot; &lt;&lt; avg_time_ms_wrong &lt;&lt; &quot; ms&quot; &lt;&lt; std::endl;\n\n    // TODO：先显式转换总秒数，再计算每个数据包的毫秒耗时，保存为 avg_time_ms_correct。\n    std::cout &lt;&lt; &quot;正确计算结果: &quot;\n              &lt;&lt; std::fixed &lt;&lt; std::setprecision(1)\n              &lt;&lt; avg_time_ms_correct &lt;&lt; &quot; ms&quot; &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">性能审核员[本人姓名]\n错误计算结果：0 ms\n正确计算结果：3.0 ms\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-14.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>平均耗时源码.png</code>（错误式、补全后的 <code>static_cast</code> 式及个人标识）和 <code>平均耗时运行.png</code>（0 ms与3.0 ms对照）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p02-capstone",
          "title": "信息交互模块测试",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-b1",
              "caseId": "c-ext-b1",
              "label": "拓展案例 B1",
              "title": "脚本自动化测试",
              "taskId": "t-p02-capstone",
              "forms": [
                "复制后运行、测试与对照",
                "挖空并补全、搭建与构建"
              ],
              "plan": "先亲自完成三组带参数的行程计算，核对每组启动命令与距离，再将编译、失败检查和测试命令整理进脚本。对照手动与脚本两份记录，确认每组输入都真正运行，且失败时不会继续执行旧程序。",
              "background": [
                {
                  "html": "<p>行程计算器能从启动参数接收速度和时间，并输出两者相乘得到的距离。测试人员要连续核验三组输入，手动重复编译、启动容易漏掉一组；本案例先亲自运行三次，再把编译和测试命令交给脚本顺序执行。</p>\n<p>怎样让同一程序在每次运行时收到不同参数，并留下可核对的结果？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "命令脚本、退出状态与程序参数"
                },
                {
                  "title": "编译命令与脚本顺序执行"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-b1-stage-1",
                  "number": 1,
                  "title": "参数程序运行",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 先独立运行行程计算器，再把已确认的命令交给脚本。</p>\n<ol>\n<li>在本次项目目录建立参数测试子文件夹，把下方 <code>travel_calculator.cpp</code> 复制进去，将“行程测试员[姓名]”中的占位内容换成本人信息；在该文件夹打开终端，用 <code>g++ travel_calculator.cpp -o travel_calculator</code> 编译。Windows可生成 <code>travel_calculator.exe</code>。</li>\n<li>手动带参数运行三组数据：速度100 km/h、时间2.5 h；速度80.5 km/h、时间0.5 h；速度0 km/h、时间10 h。核对距离依次为250、40.25、0 km。</li>\n<li>再运行一次不带参数的程序，观察提示。Windows终端可用 <code>travel_calculator.exe</code> 或 <code>./travel_calculator.exe</code>，具体启动写法以所用终端为准。</li>\n</ol>\n<h5>本阶段代码：行程计算器</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;cstdlib&gt;\n\nint main(int argc, char* argv[]) {\n    std::cout &lt;&lt; &quot;行程测试员[姓名]&quot; &lt;&lt; std::endl;\n    if (argc &lt; 3) {\n        std::cout &lt;&lt; &quot;错误：参数不足！&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;用法: &quot; &lt;&lt; argv[0] &lt;&lt; &quot; [速度] [时间]&quot; &lt;&lt; std::endl;\n        return 1;\n    }\n    double speed = std::atof(argv[1]);\n    double time = std::atof(argv[2]);\n    double distance = speed * time;\n    std::cout &lt;&lt; &quot;速度: &quot; &lt;&lt; speed &lt;&lt; &quot; km/h, 时间: &quot; &lt;&lt; time &lt;&lt; &quot; h -&gt; &quot;\n              &lt;&lt; &quot;距离: &quot; &lt;&lt; distance &lt;&lt; &quot; km&quot; &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">行程测试员[本人姓名]\n100 km/h × 2.5 h → 250 km\n80.5 km/h × 0.5 h → 40.25 km\n0 km/h × 10 h → 0 km\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-f5c12cff13b8.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>行程计算源码.png</code>（本人标识、参数检查、解析和距离计算）与 <code>行程手动测试.png</code>（本人标识、三组启动命令及对应距离）；缺参提示可与手动测试合并截图。</p>\n"
                },
                {
                  "id": "class-c-ext-b1-stage-2",
                  "number": 2,
                  "title": "编写批处理脚本",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、搭建与构建。</strong> 让脚本先编译，再运行刚才手测过的三组输入。</p>\n<ol>\n<li>在同一文件夹新建 <code>test.sh</code>，复制下方脚本，补全两处 <code># TODO</code>：第一处编译当前目录的C++程序，第二处依次运行三组速度和时间参数。不要删除已有的编译失败检查。</li>\n<li>在支持Bash的终端运行 <code>bash test.sh</code>；Windows可使用Git Bash。若提示找不到编译器或源文件，检查 <code>g++</code> 是否可用、终端当前目录是否包含 <code>test.sh</code> 与 <code>travel_calculator.cpp</code>。</li>\n<li>核对脚本完整输出：编译提示、三组距离和“自动化执行完成”。比较脚本运行结果与手动运行结果是否一致。</li>\n</ol>\n<h5>本阶段脚本：三组行程测试</h5>\n<pre><code class=\"language-bash\">#!/bin/bash\necho &quot;--- 正在编译行程计算器... ---&quot;\n# TODO：将 travel_calculator.cpp 编译成 travel_calculator。\n\nif [ $? -ne 0 ]; then\n    echo &quot;*** 编译失败！请检查代码和g++环境。 ***&quot;\n    exit 1\nfi\n\necho &quot;--- 开始自动化执行三个测试用例 ---&quot;\n# TODO：依次运行 100 2.5、80.5 0.5、0 10 三组参数。\necho &quot;--- 自动化执行完成 ---&quot;\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">正在编译行程计算器...\n三组测试距离：250 km、40.25 km、0 km\n自动化执行完成\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-15.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>参数脚本.png</code>（补全后的编译命令、失败检查和三组测试命令）及 <code>参数脚本运行.png</code>（三组距离与结束提示）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-b2",
              "caseId": "c-ext-b2",
              "label": "拓展案例 B2",
              "title": "批量处理与验证",
              "taskId": "t-p02-capstone",
              "forms": [
                "复制后运行、测试与对照",
                "挖空并补全、测试与对照"
              ],
              "plan": "先建立验证程序与三行测试数据，用输入重定向核对逐项结果及通过、失败数量；再让脚本完成同一过程。改正一项预期值观察统计变化，最后恢复原始测试数据，保留两次运行与恢复记录，形成可重复验证的测试流程。",
              "background": [
                {
                  "html": "<p>脚本可以替代重复启动，却不一定能够判断每次计算是否正确。测试人员若仍要逐项手动核对结果，用例增加后就容易遗漏；本次把两个加数及预期和放入数据文件，让程序逐行计算并报告PASS或FAIL。</p>\n<p>给定的三组数据中包含一项不符合实际计算的预期值。需要先确认验证程序能够报告这种差异，再由脚本完成编译和文件输入，并观察修正测试数据后统计如何变化，让批量运行进一步成为可重复的结果核验。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "标准输入重定向与文本数据格式"
                },
                {
                  "title": "脚本中的文件输入与结果核验"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-b2-stage-1",
                  "number": 1,
                  "title": "批量文件处理",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 先按给定输入文件手动运行验证器，再检查通过和失败的数量。</p>\n<ol>\n<li>在独立的批量验证子文件夹中，复制下方C++程序并命名为 <code>addition_validator.cpp</code>，将“批量核验员[姓名]”中的占位内容换成本人信息。程序中的读取循环和PASS/FAIL判断沿用给定实现，当前只需找出每行三个数字的读取位置。</li>\n<li>在同一文件夹新建 <code>addition_data.txt</code>，复制下方三行数据。每行依次是加数1、加数2、预期和；第二行故意写了错误的预期结果。</li>\n<li>用 <code>g++ addition_validator.cpp -o addition_validator</code> 编译；在支持输入重定向的终端运行 <code>./addition_validator &lt; addition_data.txt</code>，Windows按终端规则使用可执行文件名。核对三条用例中出现两条PASS、一条FAIL，总计3条。</li>\n</ol>\n<h5>本阶段代码：加法验证器</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\nint main() {\n    std::cout &lt;&lt; &quot;批量核验员[姓名]&quot; &lt;&lt; std::endl;\n    int num1, num2, expected_sum;\n    int test_count = 0, pass_count = 0;\n\n    std::cout &lt;&lt; &quot;--- 开始自动化验证测试 ---&quot; &lt;&lt; std::endl;\n    while (std::cin &gt;&gt; num1 &gt;&gt; num2 &gt;&gt; expected_sum) {\n        test_count++;\n        int actual_sum = num1 + num2;\n        std::cout &lt;&lt; &quot;[用例 &quot; &lt;&lt; test_count &lt;&lt; &quot;]: &quot; &lt;&lt; num1 &lt;&lt; &quot; + &quot; &lt;&lt; num2 &lt;&lt; std::endl;\n        if (actual_sum == expected_sum) {\n            std::cout &lt;&lt; &quot;  - 结果: [PASS]&quot; &lt;&lt; std::endl;\n            pass_count++;\n        } else {\n            std::cout &lt;&lt; &quot;  - 结果: [FAIL]&quot; &lt;&lt; std::endl;\n        }\n    }\n    std::cout &lt;&lt; &quot;总用例数: &quot; &lt;&lt; test_count &lt;&lt; &quot; 通过: &quot; &lt;&lt; pass_count\n              &lt;&lt; &quot; 失败: &quot; &lt;&lt; test_count - pass_count &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<h5>本阶段数据：三组加法用例</h5>\n<pre><code class=\"language-text\">1 2 3\n7 8 20\n0 0 0\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">批量核验员[本人姓名]\n[用例 1] PASS\n[用例 2] FAIL\n[用例 3] PASS\n总用例数: 3 通过: 2 失败: 1\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-13633fbf98f5.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>批量验证源码.png</code>（本人标识、三项输入及PASS/FAIL处理）、<code>批量输入.png</code>（三行测试数据）和 <code>批量手动运行.png</code>（本人标识、输入重定向命令、2通过、1失败）。</p>\n"
                },
                {
                  "id": "class-c-ext-b2-stage-2",
                  "number": 2,
                  "title": "实现自动化验证",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、测试与对照。</strong> 保留原有验证器，使用脚本完成编译和文件重定向。</p>\n<ol>\n<li>在同一文件夹新建 <code>run_validation.sh</code>，复制下方脚本，补全 <code># TODO</code>，让 <code>addition_data.txt</code> 成为验证器的标准输入。用 <code>bash run_validation.sh</code> 运行。</li>\n<li>核对结果仍为“总用例数3、通过2、失败1”。把数据文件第二行的预期和改为15，再运行脚本，核对变为“通过3、失败0”。截取两次结果后，将数据文件恢复为原来的20。</li>\n<li>保留数据文件原始版本，最终能再次得到2通过、1失败。</li>\n</ol>\n<h5>本阶段脚本：批量验证</h5>\n<pre><code class=\"language-bash\">#!/bin/bash\ng++ addition_validator.cpp -o addition_validator\n# TODO：运行验证器，并把 addition_data.txt 的内容作为标准输入。\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">原数据：总用例数: 3 通过: 2 失败: 1\n第二行预期值改为15后：总用例数: 3 通过: 3 失败: 0\n</code></pre>\n<p><img src=\"assets/classroom-effects/p02-16.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>批量脚本.png</code>（编译与输入重定向语句）、<code>批量脚本初次运行.png</code>（2通过、1失败）、<code>批量脚本修正运行.png</code>（3通过、0失败）和 <code>批量输入恢复.png</code>（第二行预期和恢复为20）。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "project-03",
      "number": 3,
      "title": "控制逻辑模拟",
      "groups": [
        {
          "id": "t-p03-intro",
          "title": "仿真运行流程规划",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-c",
              "caseId": "c-ai-c",
              "label": "案例 C",
              "title": "AIGC算法流程规划",
              "taskId": "t-p03-intro",
              "forms": [
                "检索与核验、设计与建模"
              ],
              "plan": "向AIGC提交完整自检需求与提示词，逐项检查流程图是否包含顺序、判断、重复和明确出口。遇到漏项或分支不清时继续追问并保留修改依据，最终交出能与原需求逐条对应的流程图，而不是只保存一张生成图片。",
              "cardCaption": [
                "启动自检流程核验",
                "Mermaid"
              ],
              "background": [
                {
                  "html": "<p>车辆启动自检要逐项检查设备，遇到异常还可能重新检查；如果直接写代码，容易漏掉判断或把步骤排错。</p>\n<p>本案例先请AIGC画出包含顺序、判断和重复的自检流程图，再核对它是否有明确的开始、结束和分支。把流程画清楚，才能理解程序接下来会用到哪些基本结构。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "流程图符号与程序基本结构"
                },
                {
                  "title": "语句与分号"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-c-stage-1",
                  "number": 1,
                  "title": "AIGC算法流程规划",
                  "leads": [],
                  "html": "<p><strong>任务形式：检索与核验、设计与建模。</strong> 让AIGC生成自检流程图，再按本人的需求检查流程是否完整。</p>\n<ol>\n<li>向AIGC发送工单提示词：<strong>“请用Mermaid语法帮我生成一个自动驾驶系统自检的流程图。”</strong> 请它至少包含开始、逐项检查、合格与不合格的判断、重新检查或结束。</li>\n<li>查看生成的Mermaid代码及渲染图；若当前工具不能渲染，可将代码放入支持Mermaid的编辑器查看。检查图中只有一个开始和一个结束，判断节点有“是／否”两条出口。</li>\n<li>在图上标出一处按顺序执行、一处条件判断和一处重复检查；若缺少其中一种结构，继续向AIGC提出修改要求，直到图能表达完整流程。保留本人向AI提出修改要求的画面。</li>\n</ol>\n<p><strong>本阶段提交：</strong> <code>自检流程提示.png</code>（本人提示词与AI生成内容）和 <code>自检流程图.png</code>（渲染图及三种结构标记）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p03-b01",
          "title": "启动流程设计",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-015",
              "caseId": "c-015",
              "label": "案例 15",
              "title": "启动流程自检",
              "taskId": "t-p03-b01",
              "forms": [
                "挖空并补全、扩充并运行"
              ],
              "plan": "按规定顺序改写启动自检输出，将引擎下的两项检查放入内嵌块，再加入规定的姓名标识。对照源码中的分号、花括号与终端中的输出位置，检查执行先后及层级分组是否同时符合要求。",
              "cardCaption": [
                "启动自检的执行顺序",
                "顺序结构"
              ],
              "background": [
                {
                  "html": "<p>车辆启动自检需要按既定先后报告设备状态，第一版程序先实现一条不含分支的正常路径。控制台要按“总起→电池→引擎→刹车→就绪”逐行输出，还要把引擎下的两项子系统检查组织成一组。</p>\n<p>本次给出启动检查的代码起点，需要把语句的执行顺序与花括号中的分组对应起来。屏幕上先后出现的提示能否证明程序按预定流程执行，嵌套代码块又怎样表达这一层级？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "顺序结构与语句块"
                }
              ],
              "stages": [
                {
                  "id": "class-c-015-stage-1",
                  "number": 1,
                  "title": "启动信息逐行输出与内嵌分组",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、扩充并运行。</strong> 给定主程序保留原案例的输出顺序；补全输出后，在引擎检查后加入一个内嵌语句块。</p>\n<ol>\n<li>复制下方练习代码，在五处 <code>// TODO</code> 写入总起信息、电池、引擎、刹车和最终就绪语句。总起信息应写成“驾驶员[姓名]的车辆开始自检”；其余检查文字按目标效果依次输出。</li>\n<li>在引擎检查语句之后新建一对花括号，在块内输出两条缩进的“燃油系统... OK”“点火系统... OK”。块结束后仍继续执行刹车检查和最终就绪语句。</li>\n<li>编译运行，观察各行顺序。截图要同时包含内嵌块源码、完整输出；若顺序与目标不同，检查插入位置。</li>\n</ol>\n<h5>本阶段练习代码：启动自检</h5>\n<pre><code class=\"language-cpp\">// 使用顺序结构模拟车辆启动自检流程\n\n#include &lt;iostream&gt;\n\n// main函数本身就是一个由 &#39;{}&#39; 定义的语句块\nint main() {\n    // 这是一个语句块的开始\n\n    // 程序从这里开始，按顺序执行下面的每一条语句\n\n    // 打印启动信息；分号表示本条语句结束\n    // TODO 1：按要求打印第1项启动信息。\n\n    // 打印电池检查信息\n    // TODO 2：按要求打印第2项启动信息。\n\n    // 打印引擎检查信息\n    // TODO 3：按要求打印第3项启动信息。\n\n    // 打印刹车检查信息\n    // TODO 4：按要求打印第4项启动信息。\n\n    // 打印最终状态信息\n    // TODO 5：按要求打印第5项启动信息。\n\n    // return 语句也是一条独立的语句\n    return 0;\n\n    // 这是一个语句块的结束\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">驾驶员[本人姓名]的车辆开始自检...\n1. 电池电量检查... OK\n2. 引擎系统检查... OK\n   燃油系统... OK\n   点火系统... OK\n3. 刹车系统检查... OK\n系统准备就绪.\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-017a06936570.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>自检源码.png</code>（五处补全及内嵌块）和 <code>自检运行.png</code>（本人标识、五项主流程和两项子系统输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-016",
              "caseId": "c-016",
              "label": "案例 16",
              "title": "变量作用域理解",
              "taskId": "t-p03-b01",
              "forms": [
                "复制后运行、改写并运行"
              ],
              "plan": "先运行内层重新声明同名变量的版本，记录任务前、任务中与任务后的状态；再将内层声明改为对外层变量赋值。并列比较两次输出，说明最终显示值由哪个变量决定，避免只根据变量名称判断状态是否被修改。",
              "cardCaption": [
                "内外层的同名状态",
                "作用域遮蔽"
              ],
              "background": [
                {
                  "html": "<p>车辆主流程保存“正常行驶”状态，临时超车任务也需要一个状态表示“超车中”。两段代码使用相同的变量名，但临时任务结束后，主流程究竟应保留原状态还是显示新的状态，需要根据变量所在的位置判断。</p>\n<p>本次运行两份只有局部写法不同的程序：一份在块内重新声明变量，另一份直接给已有变量赋值。对照任务前、任务中和任务后的输出，哪些状态属于临时任务，哪些改动会留到主流程？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "局部作用域与同名遮蔽"
                }
              ],
              "stages": [
                {
                  "id": "class-c-016-stage-1",
                  "number": 1,
                  "title": "系统状态遮蔽验证",
                  "leads": [
                    {
                      "html": "<p>先运行块内外各有一个同名变量的版本，再把内层声明改成赋值，比较临时任务结束后的显示值。为什么只删去一个类型名，最终状态就可能不同？</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：复制后运行、改写并运行。</strong> 先运行原有同名变量程序，再只删去内层声明中的 <code>int</code> 对照结果。</p>\n<ol>\n<li>复制下方代码，把“状态观察员[姓名]”中的占位内容换成本人信息，并将外层初值设为 <code>int system_status = 1;</code>，内层初值设为 <code>int system_status = 10 + 本人学号末一位;</code>。运行核对主流程、临时任务和任务结束后的状态依次为 <code>1 → [10+学号末一位] → 1</code>。</li>\n<li>在个人副本中仅把内层的 <code>int system_status = ...;</code> 删去 <code>int</code> 改为赋值，再次运行，核对最后状态变为 <code>[10+学号末一位]</code>；在源码顶部用两行注释说明两次差别，并将改写版源码与两次运行结果同屏截取在一张图中（在源码上<strong>用红框圈出内层修改的那一行</strong>）。 注意：删去 <code>int</code> 后，末行仍会打印固定文字“恢复为”“(正常行驶)”，但此时该标签已不符合实际数值；应按 <code>system_status</code> 的值判断结果（最终值为 <code>10 + 本人学号末一位</code>），不能把固定标签作为状态已恢复的证据。</li>\n</ol>\n<h5>本阶段案例代码：变量作用域</h5>\n<pre><code class=\"language-cpp\">// 使用嵌套作用域说明变量遮蔽\n\n#include &lt;iostream&gt;\n\nint main() {\n    std::cout &lt;&lt; &quot;状态观察员[姓名]&quot; &lt;&lt; std::endl;\n    // 在 main 函数的主作用域中定义 system_status\n    int system_status = 1; // 1 代表&quot;正常行驶&quot;\n\n    std::cout &lt;&lt; &quot;[主流程]: 车辆当前状态: &quot; &lt;&lt; system_status &lt;&lt; &quot; (正常行驶)&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;[主流程]: 准备进入临时任务(例如：超车)...&quot; &lt;&lt; std::endl;\n\n    // 使用 {} 创建一个新的内嵌作用域，模拟临时任务\n    {\n        // 在这个新的&quot;领地&quot;里，定义一个同名的新变量（值设为 10 + 本人学号末一位）\n        // 这个变量只在这个花括号内有效，它会&quot;遮蔽&quot;外面的那个 system_status\n        int system_status = 2; // 改为 10 + 本人学号末一位\n\n        // 在内嵌作用域内部打印\n        // 程序会使用&quot;离它最近&quot;的那个 system_status\n        std::cout &lt;&lt; &quot;  [临时任务]: 任务执行中，状态变为: &quot; &lt;&lt; system_status &lt;&lt; &quot; (超车中)&quot; &lt;&lt; std::endl;\n\n    } // 内嵌作用域结束。内部的 system_status 在这里被销毁，&quot;生命结束&quot;\n\n    std::cout &lt;&lt; &quot;[主流程]: 临时任务已完成。&quot; &lt;&lt; std::endl;\n\n    // 在作用域结束后再次打印\n    // 此时，内嵌的那个变量已经不存在了，程序只能看到主作用域中的 system_status\n    std::cout &lt;&lt; &quot;[主流程]: 车辆当前状态恢复为: &quot; &lt;&lt; system_status &lt;&lt; &quot; (正常行驶)&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">原版：主流程 1 → 临时任务 [10+学号末一位] → 回到主流程 1\n删去内层 int 后：主流程 1 → 临时任务 [10+学号末一位] → 回到主流程 [10+学号末一位]\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-28b64a28f686.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>作用域对照核验.png</code>（同屏显示红框标注的内层语句、顶部两行结论注释，以及原版与删去 <code>int</code> 后的两次运行输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-017",
              "caseId": "c-017",
              "label": "案例 17",
              "title": "消息数量记录",
              "taskId": "t-p03-b01",
              "forms": [
                "复制后运行"
              ],
              "plan": "让普通局部与静态局部计数器经历同样的连续调用，逐次记录两列输出。核对计数器在相邻调用之间是否保留数据，以完整调用序列说明初始化、作用域与存储期的区别。",
              "cardCaption": [
                "多次接收的计数对照",
                "静态局部变量"
              ],
              "background": [
                {
                  "html": "<p>车载CAN总线会不断送来消息，诊断程序要累计“消息接收函数已被调用多少次”。若计数器写在函数内部，连续调用五次后它还能记住前一次的值吗？</p>\n<p>本案例让普通局部计数器与静态局部计数器同时记录五次调用，比较两列输出。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "普通局部变量与静态局部变量"
                }
              ],
              "stages": [
                {
                  "id": "class-c-017-stage-1",
                  "number": 1,
                  "title": "消息记录跨次累加",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行。</strong> 使用完整案例代码，观察两种计数器在连续调用中的变化。</p>\n<ol>\n<li>将下方代码复制为个人副本，把“消息记录员[姓名]”中的占位内容换成本人信息；找到普通局部计数器、静态局部计数器，以及 <code>main</code> 中连续五次调用的位置。</li>\n<li>编译并运行，查看五次调用的输出：普通计数器每次显示1，静态计数器依次显示1至5。</li>\n<li>将源码与运行窗口左右同屏截图，并在源码中<strong>用红框圈出使计数器在函数调用之间保留数值的那一个关键字</strong>。</li>\n</ol>\n<h5>本阶段案例代码：消息计数</h5>\n<pre><code class=\"language-cpp\">// 观察静态局部变量的生命周期\n\n#include &lt;iostream&gt;\n\n// 我们将用这个函数来模拟&quot;接收到一条CAN消息&quot;的动作\n// 函数是C++中用于封装功能的代码块，我们将在后续课程中深入学习\n// 现在，请将它看作一个可以被重复呼叫的&quot;小模块&quot;\nvoid receive_can_message() {\n    // 定义一个普通的局部变量作为计数器\n    int normal_message_count = 0;\n    normal_message_count++;\n\n    // 定义一个静态的局部变量作为计数器\n    // static 使局部变量在函数调用之间保持状态\n    // 它告诉编译器：\n    // a) 这个变量的初始化( = 0 )只在程序第一次运行到这里时执行一次\n    // b) 函数结束后，不要销毁这个变量，让它继续&quot;活在&quot;内存里\n    static int static_message_count = 0;\n    static_message_count++;\n\n    std::cout &lt;&lt; &quot;普通计数器: &quot; &lt;&lt; normal_message_count\n              &lt;&lt; &quot;\\t | \\t静态计数器: &quot; &lt;&lt; static_message_count &lt;&lt; std::endl;\n}\n\nint main() {\n    std::cout &lt;&lt; &quot;消息记录员[姓名]&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;模拟连续接收5条CAN总线消息...&quot; &lt;&lt; std::endl;\n\n    // 连续5次调用函数，模拟事件的发生\n    receive_can_message(); // 第1次调用\n    receive_can_message(); // 第2次调用\n    receive_can_message(); // 第3次调用\n    receive_can_message(); // 第4次调用\n    receive_can_message(); // 第5次调用\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-963845489c81.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>消息计数源码与运行.png</code>（同屏显示本人标识、红框圈出的 <code>static</code> 关键字，以及连续五行普通1、静态1至5的运行输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-018",
              "caseId": "c-018",
              "label": "案例 18",
              "title": "车辆配置共享",
              "taskId": "t-p03-b01",
              "forms": [
                "搭建与构建、复制后运行"
              ],
              "plan": "先把配置定义文件与使用它的主程序联合构建，核对ECO模式的读取结果，再临时删除声明观察编译反馈并恢复。结合文件结构与对照记录，说明变量在哪里定义、主程序如何获知它，而不是在两处复制同一份配置。",
              "cardCaption": [
                "驾驶模式的跨文件共享",
                "extern 声明"
              ],
              "background": [
                {
                  "html": "<p>多文件程序可以把驾驶模式配置保存在一处，由主程序读取并报告。现在要让一个源文件定义 <code>ECO</code> 模式，另一个源文件只使用它，而不把配置代码复制进去。</p>\n<p>主程序怎样告知编译器这个变量在别处存在？本案例通过联合编译和一次删除声明的尝试观察跨文件变量的边界。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "跨文件声明与定义"
                }
              ],
              "stages": [
                {
                  "id": "class-c-018-stage-1",
                  "number": 1,
                  "title": "配置变量跨文件读取",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 复制两个源文件并联合编译。</p>\n<ol>\n<li>在本次日期文件夹中新建独立的共享配置子文件夹，分别建立 <code>config.cpp</code> 和 <code>main.cpp</code>；把下方对应代码复制进去。确认配置值仅在 <code>config.cpp</code> 定义一次，而 <code>main.cpp</code> 使用 <code>extern</code> 声明。</li>\n<li>将主程序报告改为“读取到[姓名]车辆的配置模式为ECO”。在该子文件夹打开终端，确认当前目录含两个 <code>.cpp</code> 文件；输入 <code>g++ main.cpp config.cpp -o vehicle_config</code> 编译，Windows运行 <code>.\\vehicle_config.exe</code>，其他系统运行 <code>./vehicle_config</code>。</li>\n<li>核对输出中的本人标识和ECO；临时从 <code>main.cpp</code> 注释掉 <code>extern</code> 声明编译观察报错，再恢复声明重新运行。将两个源码文件与终端（含报错尝试与恢复运行）合并同屏截取，并在截图中<strong>用红框圈出 <code>extern</code> 声明行</strong>。</li>\n</ol>\n<h5>本阶段案例代码：配置文件</h5>\n<pre><code class=\"language-cpp\">// 这个文件专门用来定义项目的全局配置变量\n\n// 定义\n// 在这里，我们为 VEHICLE_MODE 分配了内存并赋予了初始值\n// 一个变量在整个项目中，只能被&quot;定义&quot;一次\nconst char* VEHICLE_MODE = &quot;ECO&quot;;\n\n// 未来可以增加更多配置...\n// const int MAX_SPEED = 120;\n</code></pre>\n<h5>本阶段案例代码：主程序</h5>\n<pre><code class=\"language-cpp\">// 程序主入口，它需要使用在 config.cpp 中定义的配置\n\n#include &lt;iostream&gt;\n\n// 声明\n// extern 声明引用在 config.cpp 中定义的配置变量\n// &quot;请注意，有一个名为 VEHICLE_MODE 的 const char* 变量，\n//  但它不在这里定义，请相信我，链接器会在别的某个地方找到它。&quot;\n// &quot;extern&quot; 声明可以有很多份，分布在需要使用该变量的各个文件中\nextern const char* VEHICLE_MODE;\n\nint main() {\n    std::cout &lt;&lt; &quot;--- 车辆配置共享演示 ---&quot; &lt;&lt; std::endl;\n\n    // 直接使用这个在外部定义的变量\n    // 编译器在编译 main.cpp 时，因为它看到了 extern 声明，所以不会报错\n    // 在最后的链接阶段，链接器会把这里的引用，和 config.cpp 中的定义关联起来\n    std::cout &lt;&lt; &quot;从主程序(main.cpp)读取到当前的驾驶模式为: &quot;\n              &lt;&lt; VEHICLE_MODE &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">--- 车辆配置共享演示 ---\n读取到[本人姓名]车辆的配置模式为ECO\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-8183f3a026bc.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>跨文件配置核验.png</code>（同屏显示 <code>config.cpp</code> 定义、红框标注的 <code>main.cpp</code> 声明，以及终端联合编译命令、删除声明报错与正常ECO输出）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p03-b02",
          "title": "驾驶行为选择",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-019",
              "caseId": "c-019",
              "label": "案例 19",
              "title": "AEB条件判断",
              "taskId": "t-p03-b02",
              "forms": [
                "挖空并补全、测试与对照",
                "扩充并运行、测试与对照"
              ],
              "plan": "先核对距离、车速和主动刹车三项条件的组合，再按任务卡加入雨天场景。每次明确改变了哪个输入、期望触发哪条提示，用正常与边界组合检查新增条件没有破坏原有紧急制动判断。",
              "cardCaption": [
                "紧急制动的触发条件",
                "逻辑与"
              ],
              "background": [
                {
                  "html": "<p>自动紧急制动不能只看前方是否有障碍，还要结合车速和驾驶员有没有主动刹车。</p>\n<p>本案例模拟距离15米、车速50 km/h且未刹车的场景，再改变其中一个状态做对照，检验警告只在三个危险条件同时成立时出现。多个“是或否”怎样组合成一个触发条件？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "关系运算符与逻辑运算符"
                },
                {
                  "title": "条件运算符与单分支 `if`"
                }
              ],
              "stages": [
                {
                  "id": "class-c-019-stage-1",
                  "number": 1,
                  "title": "触发条件组合判断",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、测试与对照。</strong> 给定程序保留状态打印和原有警告文本，只补危险场景与复合条件。</p>\n<ol>\n<li>复制下方练习代码，在第一处 <code>// TODO</code> 分别定义距离15.0米、车速50 km/h和“未踩刹车”的状态；变量名与后续显示语句一致。</li>\n<li>在第二处 <code>// TODO</code> 组成单个 <code>if</code> 条件：距离小于20米、车速大于30 km/h、驾驶员未踩刹车，三个条件必须同时成立。把警告文字改为“[学号]号测试车AEB触发”。</li>\n<li>运行危险场景，再只把刹车状态改为“已踩下”运行一次。核对前者显示警告、后者不显示；恢复原危险场景。在源码注释中说明 <code>&amp;&amp;</code> 左侧为假时右侧是否仍需计算。</li>\n</ol>\n<h5>本阶段练习代码：AEB条件判断</h5>\n<pre><code class=\"language-cpp\">// 使用 关系和逻辑运算符，模拟AEB系统的触发逻辑\n\n#include &lt;iostream&gt;\n#include &lt;iomanip&gt; // 包含 std::boolalpha\n\nint main() {\n    // 定义并初始化车辆状态，模拟危险情况\n    // TODO 1：定义距离、车速和刹车状态。\n\n    // 打印当前车辆状态，便于分析\n    std::cout &lt;&lt; std::boolalpha; // 让bool值显示为true/false\n    std::cout &lt;&lt; &quot;--- AEB 系统状态监测 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;前方障碍物距离: &quot; &lt;&lt; distance_to_obstacle &lt;&lt; &quot; m&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;当前车速: &quot; &lt;&lt; current_speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;驾驶员是否踩刹车? &quot; &lt;&lt; is_brake_pressed &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;--------------------------&quot; &lt;&lt; std::endl;\n\n    // TODO 2：按三项条件判断是否触发。\n    if (/* TODO 2：在此补写复合条件 */) {\n        // 只有在上述复合条件为真时，才会执行这里的代码\n        std::cout &lt;&lt; &quot;!!! 警告: 碰撞风险极高，AEB系统触发 !!!&quot; &lt;&lt; std::endl;\n    }\n\n    std::cout &lt;&lt; &quot;--- 监测结束 ---&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">危险场景：距离15 m，车速50 km/h，未踩刹车 → [本人学号]号测试车AEB触发\n已踩刹车：距离15 m，车速50 km/h → 不再打印AEB触发警告\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-d3347fcb53da.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>AEB条件源码.png</code>（三个状态、复合判断与学号标识）、<code>AEB触发.png</code>（15米、50 km/h、未踩刹车及警告）和 <code>AEB已刹车.png</code>（只改刹车状态后的输出）。</p>\n"
                },
                {
                  "id": "class-c-019-stage-2",
                  "number": 2,
                  "title": "雨天模式动态适配",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 在已完成的AEB程序上增加天气条件，保留原有状态和单个 <code>if</code> 判断结构。</p>\n<ol>\n<li>新增雨天状态 <code>is_raining</code>，让晴天距离阈值保持20米、雨天距离阈值改为30米；速度仍须大于30，驾驶员仍须未踩刹车。只使用一个 <code>if</code>，在条件中组合 <code>&amp;&amp;</code> 与 <code>||</code>，用括号清楚标出晴雨两种距离判断。</li>\n<li>使用距离25米、速度50、未踩刹车分别测试晴天和雨天；再用雨天、已踩刹车测试一次。核对只有“雨天且未踩刹车”一组触发，三次输出均显示天气与状态值。</li>\n<li>将最终代码恢复为雨天测试数据，并在源码顶部用一句注释写明三次测试的触发结果。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">25米／晴天／未踩刹车：无AEB警告\n25米／雨天／未踩刹车：[本人学号]号测试车AEB触发\n25米／雨天／已踩刹车：无AEB警告\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-c57faf9f2fde.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>AEB雨天源码.png</code>（天气变量、一个复合 <code>if</code> 与三组测试结论注释）和 <code>AEB晴雨对照.png</code>（25米下晴天不触发、雨天触发、已刹车不触发的三次运行结果）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-020",
              "caseId": "c-020",
              "label": "案例 20",
              "title": "驾驶模式推荐",
              "taskId": "t-p03-b02",
              "forms": [
                "挖空并补全、测试与对照",
                "扩充并运行"
              ],
              "plan": "先用高速、市区、低速、停车及无效输入核验区间分支，每次只应得到对应建议。再在规定分支内加入校园提示，对照多组输入检查外层区间与内层条件的作用范围，保留能说明判断先后关系的运行记录。",
              "cardCaption": [
                "按车速区间给出建议",
                "多路分支"
              ],
              "background": [
                {
                  "html": "<p>紧急制动处理的是“触发或不触发”，驾驶模式推荐却要从多个结果中选一个。车速超过100、处于60—100、低速行驶、停车或输入无效时，程序应分别给出建议且每次只输出一条。</p>\n<p>本案例将按车速区间组织多级分支，后续阶段再检验分支的先后顺序。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "双分支与多分支选择"
                },
                {
                  "title": "`if–else if–else` 的判断顺序"
                },
                {
                  "title": "嵌套 `if` 与分支归属"
                }
              ],
              "stages": [
                {
                  "id": "class-c-020-stage-1",
                  "number": 1,
                  "title": "速度区间等级划分",
                  "leads": [
                    {
                      "html": "<p>用120、80、15、0和负数分别核验建议是否唯一；基本判断正确后，再在市区分支加入校园提示，检查内部条件是否只影响对应分支。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：挖空并补全、测试与对照。</strong> 保留原案例的输入提示与建议语句，只补各分支的判断条件。</p>\n<ol>\n<li>复制练习代码，在四处 <code>// TODO</code> 分别完成“大于100”“60—100”“1—59”“等于0”的判断；最后的 <code>else</code> 接收负车速。保持从上到下的原有分支顺序。</li>\n<li>在报告标题中加入“驾驶员[姓名]”，依次用输入120、80、15、0、-1运行。每次只应出现一条与该速度匹配的建议或错误提示。</li>\n<li>将五次测试的输入和结果保留在运行截图中；若运行窗口会清空前一次结果，可分别截图后合并为一张清晰画面。</li>\n</ol>\n<h5>本阶段练习代码：驾驶模式推荐</h5>\n<pre><code class=\"language-cpp\">// 使用 if-else if-else 结构处理多区间判断\n\n#include &lt;iostream&gt;\n\nint main() {\n    // 定义变量并获取用户输入\n    int current_speed;\n    std::cout &lt;&lt; &quot;请输入当前车速 (km/h): &quot;;\n    std::cin &gt;&gt; current_speed;\n\n    std::cout &lt;&lt; &quot;--- 驾驶模式推荐 ---&quot; &lt;&lt; std::endl;\n\n    // 使用 if-else if-else 逻辑阶梯进行判断\n    // 程序会从上到下依次检查每个条件\n    if (/* TODO 1：填写本分支条件 */) {\n        // 只有当第一个条件为真时，执行这里，然后整个结构结束\n        std::cout &lt;&lt; &quot;建议: 超速行驶，请减速！&quot; &lt;&lt; std::endl;\n    } \n    else if (/* TODO 2：填写本分支条件 */) {\n        // 如果第一个条件为假，程序才会来检查这个条件\n        // 此时我们已经知道 current_speed &lt;= 100，所以无需再写 &amp;&amp; current_speed &lt;= 100\n        std::cout &lt;&lt; &quot;建议: 高速巡航，请保持车距。&quot; &lt;&lt; std::endl;\n    } \n    else if (/* TODO 3：填写本分支条件 */) {\n        // 如果前两个条件都为假，才会检查这个条件\n        // 此时我们已经知道 current_speed &lt; 60\n        std::cout &lt;&lt; &quot;建议: 市区行驶，注意行人。&quot; &lt;&lt; std::endl;\n    } \n    else if (/* TODO 4：填写本分支条件 */) {\n        // 如果以上条件都为假\n        std::cout &lt;&lt; &quot;状态: 车辆已停止。&quot; &lt;&lt; std::endl;\n    } \n    else {\n        // 如果以上所有条件都不满足（即输入为负数），则执行最后的 else\n        std::cout &lt;&lt; &quot;错误: 车速输入无效。&quot; &lt;&lt; std::endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">120 → 超速行驶，请减速\n80 → 高速巡航，请保持车距\n15 → 市区行驶，注意行人\n0 → 车辆已停止\n-1 → 车速输入无效\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-da67bbda6d59.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>驾驶模式源码.png</code>（四个条件和本人标识）及 <code>驾驶模式五组运行.png</code>（120、80、15、0、-1各自唯一的输出）。</p>\n"
                },
                {
                  "id": "class-c-020-stage-2",
                  "number": 2,
                  "title": "校园区域内嵌降速",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 只在市区行驶分支内增加校园区域判断，保留原有速度区间。</p>\n<ol>\n<li>在个人副本中增加校园区域状态 <code>is_school_zone</code>，在“市区行驶”分支内部再用一个 <code>if</code>：处于校园区域且车速低于20时额外打印“拥堵路段，请减速”。</li>\n<li>用车速15、校园区域为真运行；再只把车速改为30运行。检查第一组出现额外提示，第二组仍是市区行驶但没有额外提示。恢复车速15作为最终副本。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">驾驶员[本人姓名]，车速15：市区行驶；拥堵路段，请减速\n驾驶员[本人姓名]，车速30：市区行驶；无额外拥堵提示\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-882752608fab.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>校园区域源码.png</code>（嵌套条件位于市区分支内）和 <code>校园区域对照.png</code>（15与30 km/h两组输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-021",
              "caseId": "c-021",
              "label": "案例 21",
              "title": "多媒体功能选择",
              "taskId": "t-p03-b02",
              "forms": [
                "复制后运行、改写并运行、测试与对照"
              ],
              "plan": "先核对各菜单编号及无效编号的输出，再按任务卡临时去掉break观察执行差异并恢复。将同一次输入下发生的各项操作记录完整，用对照结果解释分支入口和分支结束的作用。",
              "cardCaption": [
                "菜单编号与功能分派",
                "switch"
              ],
              "background": [
                {
                  "html": "<p>驾驶模式按区间判断，车载多媒体则由离散的菜单编号选择音乐、导航、电话等功能。本案例要让1—4各执行一项操作，输入无效编号时给出提示；还要观察少写一条 <code>break</code> 会怎样影响结果。</p>\n<p>对于这种“一个编号对应一个入口”的任务，怎样写分派比多层区间判断更清楚？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`switch`、`case`、`break` 与 `default`"
                }
              ],
              "stages": [
                {
                  "id": "class-c-021-stage-1",
                  "number": 1,
                  "title": "功能面板数字分派",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、改写并运行、测试与对照。</strong> 先运行原有菜单，再修改个人标识和测试分支穿透。</p>\n<ol>\n<li>复制下方完整案例代码，运行输入1、2、3、4、9，确认四个有效编号各执行一个功能，无效编号进入错误提示。</li>\n<li>让四个功能输出中的至少一个带本人姓名，例如“[姓名]正在为您播放音乐...”。再次输入1，确认本人标识出现。</li>\n<li>在临时副本中只去掉 <code>case 1</code> 末尾的 <code>break</code>，输入1观察是否继续执行编号2的功能；截图后恢复 <code>break</code>，再运行确认只输出音乐功能。在源码顶部用一句注释说明两次差别。</li>\n</ol>\n<h5>本阶段案例代码：车载多媒体菜单</h5>\n<pre><code class=\"language-cpp\">// 使用 switch-case 语句实现多媒体功能选择\n\n#include &lt;iostream&gt;\n\nint main() {\n    // 显示功能菜单\n    std::cout &lt;&lt; &quot;--- 车载多媒体系统 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;1. 播放音乐&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;2. 使用导航&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;3. 拨打电话&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;4. 切换到收音机&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;--------------------------&quot; &lt;&lt; std::endl;\n\n    // 定义变量并获取用户输入\n    int choice;\n    std::cout &lt;&lt; &quot;请输入您的选择 (1-4): &quot;;\n    std::cin &gt;&gt; choice;\n\n    // 使用 switch 语句进行功能分派\n    // switch 会检查 &#39;choice&#39; 变量的值\n    switch (choice) {\n        // 如果 choice 的值等于 1，程序会跳转到这里执行\n        case 1:\n            std::cout &lt;&lt; &quot;正在播放音乐...&quot; &lt;&lt; std::endl;\n            break; // 执行完当前分支后跳出 switch 结构\n\n        // 如果 choice 的值等于 2\n        case 2:\n            std::cout &lt;&lt; &quot;正在使用导航...&quot; &lt;&lt; std::endl;\n            break;\n\n        // 如果 choice 的值等于 3\n        case 3:\n            std::cout &lt;&lt; &quot;正在拨打电话...&quot; &lt;&lt; std::endl;\n            break;\n\n        // 如果 choice 的值等于 4\n        case 4:\n            std::cout &lt;&lt; &quot;已切换到收音机。&quot; &lt;&lt; std::endl;\n            break;\n\n        // 如果 choice 的值不匹配以上任何一个 case\n        default:\n            std::cout &lt;&lt; &quot;错误：无效的选项。&quot; &lt;&lt; std::endl;\n            break; // default 后的 break 虽然不是必需的，但保持一致性是好习惯\n    }\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">正常输入1：[本人姓名]正在为您播放音乐...\n临时删除 case 1 的 break 后输入1：音乐提示之后又出现导航提示\n恢复 break 后输入1：只出现音乐提示\n输入9：错误：无效的选项\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-64ee082803ae.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>多媒体源码.png</code>（完整 <code>switch</code>、本人标识及穿透观察注释）、<code>多媒体正常运行.png</code>（有效编号与无效编号的结果）和 <code>多媒体穿透对照.png</code>（输入1时删除／恢复 <code>break</code> 的两次输出）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p03-b03",
          "title": "驾驶状态监控",
          "kind": "基础任务 3",
          "cards": [
            {
              "id": "class-c-022",
              "caseId": "c-022",
              "label": "案例 22",
              "title": "电池充电模拟",
              "taskId": "t-p03-b03",
              "forms": [
                "挖空并补全",
                "改写并运行"
              ],
              "plan": "先运行从20%逐次增加到80%的充电过程，核对每轮更新与结束条件；再将起点改为已达目标的状态，对照不同循环写法的执行次数。重点检查正常起点能结束、边界起点不会产生非预期的重复更新。",
              "cardCaption": [
                "模拟充电的更新过程",
                "while 循环"
              ],
              "background": [
                {
                  "html": "<p>充电不是一次完成的动作：电池从20%出发，每轮增加5%，直到达到80%才结束。</p>\n<p>本案例让程序逐次报告电量，并检查初始电量已经达到目标时会发生什么。怎样让同一段更新语句按条件反复执行，又能在满足目标后停下？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`while` 条件与循环体"
                },
                {
                  "title": "`do–while` 的先执行后判断"
                }
              ],
              "stages": [
                {
                  "id": "class-c-022-stage-1",
                  "number": 1,
                  "title": "充电状态持续轮询",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 给定程序保留电量、目标和结束提示，结合本人动态初值补全循环条件、更新和逐次输出。</p>\n<ol>\n<li>复制下方练习代码，将初始电量 <code>battery_level</code> 改为 <strong><code>15.0 + 本人学号末一位</code></strong>（%），充电目标仍为 <code>80.0%</code>。在 <code>// TODO</code> 处让循环只在电量低于80%时执行；每轮固定增加 <code>10.0%</code>，再打印更新后的电量（逐次输出前加入“[学号]负责的车辆”）。</li>\n<li>先心算：从你的初始电量出发、每次加10.0%，最后一次打印的电量是恰好80.0%还是会略超80.0%？编译运行核对实际序列。</li>\n<li>将源码与运行结果左右同屏截图，并在源码上<strong>用箭头或红框标出使循环条件最终变为假的那条状态更新语句</strong>。</li>\n</ol>\n<h5>本阶段练习代码：电池充电</h5>\n<pre><code class=\"language-cpp\">// 使用 while 循环模拟电池充电过程\n\n#include &lt;iostream&gt;\n#include &lt;iomanip&gt; // 包含 std::fixed 和 std::setprecision\n\nint main() {\n    // 初始化电池电量（改为 15.0 + 本人学号末一位）\n    double battery_level = 20.0;\n    const double TARGET_LEVEL = 80.0;\n\n    std::cout &lt;&lt; &quot;--- 电池充电模拟 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;初始电量: &quot; &lt;&lt; battery_level &lt;&lt; &quot;%&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;充电目标: &quot; &lt;&lt; TARGET_LEVEL &lt;&lt; &quot;%&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;开始充电...&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;--------------------&quot; &lt;&lt; std::endl;\n\n    // 使用 while 循环\n    // 每次循环开始前，先检查括号内的条件是否成立\n    while (/* TODO 1：填写继续充电条件 */) {\n        // 在循环体内更新状态\n        // TODO 2：每轮增加10.0。\n\n        // 打印当前状态\n        // TODO 3：逐轮打印本人学号与当前电量，保留一位小数。\n    }\n\n    // 循环结束后的收尾工作\n    std::cout &lt;&lt; &quot;--------------------&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;已达到充电目标，充电完成。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">初始电量: [15.0+学号末一位]%\n[本人学号]负责的车辆，当前电量: [每次增加10.0%]%\n...\n[本人学号]负责的车辆，当前电量: [达到或首次跨过80.0%的值]%\n已达到充电目标，充电完成。\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-846ba62df23a.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>充电while源码与运行.png</code>（同屏显示个人初始电量、红框标注的更新语句，以及含本人学号的完整充电序列与完成提示）。</p>\n"
                },
                {
                  "id": "class-c-022-stage-2",
                  "number": 2,
                  "title": "满电状态兜底执行",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 将已完成的充电程序按下方骨架改为 <code>do–while</code>，检查初始电量已达目标时的执行情况。</p>\n<ol>\n<li>将已完成的充电程序另存为个人副本，把初始电量改为 <code>80.0 + 本人学号末一位</code>（已经处于满电或超目标状态）。</li>\n<li>按下方骨架将循环改为 <code>do–while</code>，补全两处 <code>// TODO</code>：在循环体中先打印“检查当前电量”，只有低于80%时才增加电量，最后在 <code>while (...)</code> 处填写继续条件（注意末尾分号）。</li>\n<li>编译运行，核对检查语句只出现一次、最终电量保持初始值不变；将源码与运行画面同屏截图，并在源码上<strong>用红框圈出 <code>do–while</code> 末尾的分号</strong>。</li>\n</ol>\n<h5>本阶段改写骨架：<code>do–while</code> 满电检查</h5>\n<pre><code class=\"language-cpp\">    do {\n        std::cout &lt;&lt; &quot;[自检] 正在检查当前电量: &quot; &lt;&lt; battery_level &lt;&lt; &quot;%&quot; &lt;&lt; std::endl;\n        // TODO 1：仅当电量低于 TARGET_LEVEL 时才执行充电累加与打印。\n    } while (/* TODO 2：填写继续充电条件 */);\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">do–while版：检查当前电量[80.0+学号末一位]%一次，不执行累加，直接显示充电完成\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-55f6a49b108d.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>充电do_while源码与运行.png</code>（同屏显示改写后的 <code>do–while</code> 循环、红框圈出的末尾分号，以及满电初值下只检查一次即完成的运行输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-023",
              "caseId": "c-023",
              "label": "案例 23",
              "title": "传感器矩阵打印",
              "taskId": "t-p03-b03",
              "forms": [
                "挖空并补全",
                "改写并运行"
              ],
              "plan": "先用一层循环控制4×4坐标与换行，再改写为行列双层循环，逐步调整为下三角坐标和乘法表。对照每次输出的行列数量、循环边界与乘积，检查从坐标排版到9×9乘法表的迁移是否正确。",
              "cardCaption": [
                "按行列打印网格",
                "嵌套 for"
              ],
              "background": [
                {
                  "html": "<p>车辆周围的传感器状态可以先用4行4列的坐标矩阵展示，每个位置都要显示 <code>(行,列)</code>。</p>\n<p>逐条写16个坐标难维护，本次实操先尝试用一层循环控制位置和换行，再把同一输出改写为按行、按列的循环。两种写法怎样对应一个二维网格？熟悉行列边界后，还会把相同循环结构迁移到下三角乘法表，检查输出内容与循环范围如何配合。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`for` 的初始化、条件与更新"
                },
                {
                  "title": "外层与内层循环的关系"
                }
              ],
              "stages": [
                {
                  "id": "class-c-023-stage-1",
                  "number": 1,
                  "title": "单层循环排版局限",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 给出行列变量与坐标输出，用单层循环完成位置更新和按行换行。</p>\n<ol>\n<li>复制下方代码，将原有横幅改成带本人姓名的传感器矩阵标题；保留原有坐标打印语句。</li>\n<li>在 <code>// TODO 1</code> 处补全 <code>for</code> 的继续条件；在 <code>// TODO 2</code> 处完成每输出一个坐标后的行列位置更新，并自行加入只在一行结束时执行的换行语句。</li>\n<li>全部补完后再编译运行，核对4行各有4个不同坐标；源码截图要显示唯一的 <code>for</code>、行列更新及换行控制。若程序持续输出，及时停止并检查更新逻辑。</li>\n</ol>\n<h5>本阶段练习代码：单循环传感器矩阵</h5>\n<pre><code class=\"language-cpp\">// 使用单层 for 循环尝试打印一个二维矩阵\n\n#include &lt;iostream&gt;\n#include &lt;iomanip&gt; // 包含 setw 用于设置字段宽度，美化输出\n\nint main() {\n    const int NUM_ROWS = 4;\n    const int NUM_COLS = 4;\n\n    std::cout &lt;&lt; &quot;--- 4x4 传感器矩阵坐标 ---&quot; &lt;&lt; std::endl;\n\n    int i = 0;\n    int j = 0;\n    // TODO 1：补全 for 括号中的继续条件。\n    for (; /* 待补条件 */; ) {\n        std::cout &lt;&lt; std::setw(7) &lt;&lt; &quot;(&quot; &lt;&lt; i &lt;&lt; &quot;,&quot; &lt;&lt; j &lt;&lt; &quot;)&quot;;\n        // TODO 2：完成位置更新，并只在一行结束时换行。\n    }\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">[本人姓名]的4×4传感器矩阵坐标\n(0,0) (0,1) (0,2) (0,3)\n(1,0) (1,1) (1,2) (1,3)\n(2,0) (2,1) (2,2) (2,3)\n(3,0) (3,1) (3,2) (3,3)\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>矩阵单循环源码.png</code>（本人标识、一层循环、行列更新与换行判断）和 <code>矩阵单循环运行.png</code>（本人标识与完整4×4坐标矩阵）。</p>\n"
                },
                {
                  "id": "class-c-023-stage-2",
                  "number": 2,
                  "title": "乘法表坐标动态映射",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 将单层循环改为双层循环，依次完成下三角坐标与乘法表。</p>\n<ol>\n<li>在同一个人副本中，用下方双层循环片段替换单层循环及手动行列更新，先核对两层循环仍能输出4×4坐标矩阵。</li>\n<li>将行号和列号改为1到9，再把内层条件改为 <code>j &lt;= i</code>。运行一次，确认坐标从第1行1项逐行增至第9行9项。</li>\n<li>将内层输出改成含行号、列号和乘积的算式，例如 <code>3×2=6</code>；把原矩阵标题改为“[姓名]输出的乘法表”。保留 <code>j &lt;= i</code> 与每行换行，运行核对末行末项为 <code>9×9=81</code>。</li>\n</ol>\n<h5>本阶段改写起点：双层循环片段</h5>\n<pre><code class=\"language-cpp\">for (int i = 0; i &lt; NUM_ROWS; ++i) {\n    for (int j = 0; j &lt; NUM_COLS; ++j) {\n        std::cout &lt;&lt; std::setw(7) &lt;&lt; &quot;(&quot; &lt;&lt; i &lt;&lt; &quot;,&quot; &lt;&lt; j &lt;&lt; &quot;)&quot;;\n    }\n    std::cout &lt;&lt; std::endl;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">[本人姓名]输出的乘法表：\n1×1=1\n2×1=2  2×2=4\n...\n9×1=9  ...  9×9=81\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-bf6f162b633f.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>乘法表源码.png</code>（双层循环、<code>j &lt;= i</code>、乘积计算与本人姓名）和 <code>乘法表运行.png</code>（从1×1到9×9的下三角乘法表）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-024",
              "caseId": "c-024",
              "label": "案例 24",
              "title": "数据流坏点剔除",
              "taskId": "t-p03-b03",
              "forms": [
                "独立写程序",
                "改写并运行、挖空并补全"
              ],
              "plan": "先依据个人规则在固定序列中设置略过编号与终止编号，核对实际保留的数据；再处理持续输入的读数，用0和-1分别测试坏点与结束行为。对照两类任务，说明跳过当前轮和结束整段接收的区别。",
              "cardCaption": [
                "连续读数的三种去向",
                "循环跳转"
              ],
              "background": [
                {
                  "html": "<p>传感器持续送来读数，遇到坏点时应跳过当前数据，收到结束标记时则应停止整段接收。</p>\n<p>正式处理键盘数据流前，本次实操先在1至12的固定序列中跳过本人坏点 <code>SKIP_NUM</code>、遇到本人终止编号 <code>STOP_NUM</code> 结束（这两个编号按下方个人规则计算），核对最终只输出哪些数。两种“不要继续执行”的要求为什么需要不同的循环控制语句？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "`break` 语句"
                },
                {
                  "title": "`continue` 语句"
                },
                {
                  "title": "`goto` 与跳转语句对比"
                },
                {
                  "title": "无限循环、键盘输入与分支顺序"
                }
              ],
              "stages": [
                {
                  "id": "class-c-024-stage-1",
                  "number": 1,
                  "title": "常规序列跳转拦截",
                  "leads": [],
                  "html": "<p><strong>任务形式：独立写程序。</strong> 从空白单文件出发，按本人专属跳点编写最短的跳转验证程序。</p>\n<ol>\n<li>新建单文件C++程序，包含输入输出头文件并写好 <code>main</code>。使用 <code>for</code> 让整数 <code>i</code> 从1依次增加到12。</li>\n<li>设本人坏点编号 <code>SKIP_NUM = 3 + (本人学号末一位 % 4)</code>（即 3～6 之间的一个数），终止编号 <code>STOP_NUM = 9 + (本人学号末一位 % 3)</code>（即 9～11 之间的一个数）。在循环体里先判断 <code>i == SKIP_NUM</code>，是则使用 <code>continue</code> 跳过本次打印；再判断 <code>i == STOP_NUM</code>，是则使用 <code>break</code> 结束循环；最后打印“工程师[姓名]正在处理第 i 个数据”。</li>\n<li>编译运行，核对输出序列中恰好少了 <code>SKIP_NUM</code>，且在 <code>STOP_NUM - 1</code> 处停下（<code>STOP_NUM</code> 本身及之后的数均不出现）。将源码与运行窗口同屏截图，并在源码上<strong>用红框分别标出 <code>continue</code> 与 <code>break</code> 所在行</strong>。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">工程师[本人姓名]正在处理第1个数据\n...（中间跳过 SKIP_NUM）\n工程师[本人姓名]正在处理第[STOP_NUM - 1]个数据\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-cee946717a48.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>跳转序列源码与运行.png</code>（同屏显示循环、红框标注的两条跳转语句、本人标识，以及跳过 <code>SKIP_NUM</code> 并在 <code>STOP_NUM</code> 前终止的运行结果）。</p>\n"
                },
                {
                  "id": "class-c-024-stage-2",
                  "number": 2,
                  "title": "坏点跳过与阻断退出",
                  "leads": [
                    {
                      "html": "<p>保留固定序列的过滤记录，再把处理对象改成持续输入的读数。用0和-1分别检验略过与结束行为，检查它们是否会进入正常数据输出。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：改写并运行、挖空并补全。</strong> 以已完成的个人程序为起点，保留头文件与 <code>main</code>；输入循环框架已给出，判断和动作输出由本人编写。</p>\n<ol>\n<li>打开上一阶段的个人程序，保留输入输出头文件、<code>main</code> 函数，以及已写好的两条判断和普通输出作为改写起点。用下方片段替换原来遍历1至12的循环，把旧判断与输出的思路移入三处 <code>// TODO</code>；不另建一份完整程序。</li>\n<li>将原先按固定数字跳转的判断改为按键盘读数跳转：输入 <code>-1</code> 时提示接收结束并用 <code>break</code> 跳出循环；输入 <code>0</code> 时输出“操作员[姓名]已忽略坏点”，再用 <code>continue</code> 进入下一轮；其余整数输出有效数据。结束标记的提示也要包含“操作员[姓名]已终止接收流”。</li>\n<li>编译运行，依次输入 <code>5</code>、<code>0</code>、<code>7</code>、<code>-1</code>。核对5与7被处理、0被跳过、-1结束输入，且跳出循环后仍能看到“数据流处理完成”。若0或-1之后还打印“处理有效数据”，检查判断与普通输出的先后位置。</li>\n<li>截取本人完成的三个分支和个人动作提示，再截取同一轮输入及输出。第一版固定序列的截图已在上一阶段提交，本阶段只交改写后的结果。</li>\n</ol>\n<h5>本阶段练习片段：读数输入循环</h5>\n<p>把以下片段放入已完成程序的 <code>main</code> 函数中，替换原来的固定序列循环。</p>\n<pre><code class=\"language-cpp\">    int current_reading;\n\n    std::cout &lt;&lt; &quot;--- 开始处理传感器数据流 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;请逐个输入传感器读数 (整数)，输入 -1 表示结束。&quot; &lt;&lt; std::endl;\n\n    for (;;) {\n        std::cout &lt;&lt; &quot;\\n请输入下一个读数: &quot;;\n        std::cin &gt;&gt; current_reading; // 从键盘获取一个整数\n\n        // TODO 1：输入 -1 时输出结束提示，并跳出循环。\n        // TODO 2：输入 0 时输出本人操作记录，并跳过本轮。\n        // TODO 3：输出其余读数的处理结果。\n    }\n\n    std::cout &lt;&lt; &quot;\\n--- 数据流处理完成 ---&quot; &lt;&lt; std::endl;\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">输入5 → 处理有效数据: 5\n输入0 → 操作员[本人姓名]已忽略坏点\n输入7 → 处理有效数据: 7\n输入-1 → 操作员[本人姓名]已终止接收流\n--- 数据流处理完成 ---\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-f2b4404331ae.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>数据流源码.png</code>（输入循环、两个跳转分支、有效数据输出及本人标识）和 <code>数据流运行.png</code>（输入5、0、7、-1及对应输出与完成提示）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p03-capstone",
          "title": "控制执行模块调试",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-c1",
              "caseId": "c-ext-c1",
              "label": "拓展案例 C1",
              "title": "死循环诊断",
              "taskId": "t-p03-capstone",
              "forms": [
                "改写并运行、观察与分析",
                "调试与修正、测试与对照"
              ],
              "plan": "先在Debug环境运行异常程序，用打印记录追踪循环变量，再用断点和单步核对更新过程。修正后检查规定轮数与结束提示，最后完成任务卡中的自驾游程序排错，保留定位依据、改动位置和正常结束记录。",
              "cardCaption": [
                "沿循环变量定位卡死",
                "调试对照"
              ],
              "background": [
                {
                  "html": "<p>车载程序中的循环若不能结束，后续控制逻辑也可能一直无法执行。</p>\n<p>本案例有一段本应运行10轮的程序，却始终看不到正常结束提示；先在Debug构建下观察，再打印循环变量，留下能说明异常变化的证据。程序表面卡住时，怎样看见循环内部发生了什么？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "可执行文件、Debug构建与打印诊断"
                },
                {
                  "title": "断点、单步执行与变量监视"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-c1-stage-1",
                  "number": 1,
                  "title": "打印定位死循环",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行、观察与分析。</strong> 在错误版循环中加入打印语句，用变量变化定位问题。</p>\n<ol>\n<li>复制下方代码并用Debug模式运行。看到开始提示后短暂观察；如果没有结束提示，使用IDE停止按钮或终端 <code>Ctrl+C</code> 停止。</li>\n<li>在循环体中加入打印当前变量 <code>i</code> 的语句，再运行并观察至少三次输出，及时停止。对照循环继续条件和更新方向，在源码中用一句注释写明导致无法退出的原因；本阶段先不修正循环。</li>\n<li>截取打印语句、循环条件与更新语句，并保存显示 <code>i</code> 连续变化的运行画面。</li>\n</ol>\n<h5>本阶段案例代码：死循环错误版</h5>\n<pre><code class=\"language-cpp\">// 一个包含死循环的程序\n\n#include &lt;iostream&gt;\n\nint main() {\n    std::cout &lt;&lt; &quot;程序开始，准备进入循环...&quot; &lt;&lt; std::endl;\n\n    // 本意是让循环执行10次\n    for (int i = 0; i &lt; 10; i--) {\n        // 循环体暂不输出\n    }\n\n    // 循环结束后打印提示\n    std::cout &lt;&lt; &quot;程序正常结束。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">当前 i 的值是: 0\n当前 i 的值是: -1\n当前 i 的值是: -2\n...\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-78a98690e15f.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>死循环打印源码.png</code>（循环三部分、打印语句及原因注释）和 <code>死循环变量输出.png</code>（至少三次 <code>i</code> 的输出）。</p>\n"
                },
                {
                  "id": "class-c-ext-c1-stage-2",
                  "number": 2,
                  "title": "断点定位并修正循环",
                  "leads": [
                    {
                      "html": "<p>把打印记录作为线索，在变量更新附近设置断点，逐步观察同一条语句。修正后需要确认程序只执行规定轮数，而不是仅暂时停止输出。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：调试与修正、测试与对照。</strong> 用IDE观察变量变化，再修正循环更新方向。</p>\n<ol>\n<li>打开已保存的打印诊断副本，在循环体或更新语句处设置断点；启动调试，单步执行至少两轮，在变量监视区查看 <code>i</code> 的变化。保存能看清断点和变量值的界面。</li>\n<li>修正导致死循环的更新语句，使变量从0走到9后退出。保持打印语句，在“程序正常结束”之前加入“[姓名]已成功修复死循环Bug并安全退出！”。</li>\n<li>重新运行，核对只显示0至9及本人成功提示，并在源码中保留修正后的循环。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">当前 i 的值是: 0\n...\n当前 i 的值是: 9\n[本人姓名]已成功修复死循环Bug并安全退出！\n程序正常结束。\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-cf651d18372c.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>死循环断点.png</code>（断点、变量监视与变化）、<code>死循环修正源码.png</code>（修正语句和本人提示）及 <code>死循环修正运行.png</code>（0至9、本人提示和正常结束）。</p>\n"
                },
                {
                  "id": "class-c-ext-c1-stage-3",
                  "number": 3,
                  "title": "自驾游程序排错",
                  "leads": [],
                  "html": "<p><strong>任务形式：调试与修正、测试与对照。</strong> 按现象出现的顺序逐个复现、解释并修复三处逻辑错误。</p>\n<ol>\n<li>将下方程序复制为独立的个人副本，把“模拟汽车自驾游”标题改成含本人姓名的标题。先不修改行驶逻辑，输入油量10升、计划距离25公里，第一次路况选平路（输入1）。记录实际行驶距离和结束提示，与“油量仍可继续行驶”的预期比较。</li>\n<li><strong>定位并修复第一次异常：</strong> 在一次平路行驶的路况处理前、处理后和下一轮判断前，用临时打印或IDE断点查看 <code>fuel</code>、<code>traveled</code>。选一张能证明异常的调试画面；只修改这一处，再用相同输入复测，确认程序继续请求下一段路况后停止本次运行。</li>\n<li><strong>定位并修复上坡异常：</strong> 保留第一处修正，重新输入油量10升、计划距离25公里，第一次路况选上坡（输入2）。比较“一次选择前进10公里”与实际里程；单步跟踪路况选择后的执行路径，选一张能证明问题的画面。只修改这一处，再用相同输入复测。</li>\n<li><strong>定位并修复终点异常：</strong> 保留前两处修正，重新输入油量10升、计划距离25公里，连续三次选择平路（输入1、1、1）。若到达或超过计划距离后仍请求下一段路况，在循环重新判断的位置查看 <code>traveled</code>、<code>total_distance</code> 和判断结果，选一张能证明问题的画面后停止程序。只修改这一处，再用相同输入复测，确认程序能结束并报告行程。</li>\n<li><strong>回归核验：</strong> 用油量10升、计划距离25公里、第一次选择下坡（输入3）核对不耗油；再用油量1升、计划距离20公里、第一次选择平路（输入1）核对耗尽警告与结束结果。最后自选一组不同的有效油量、距离和路况，检查程序仍可正常结束。这些核验不另交截图。</li>\n<li>分别用简短文字回答三处错误的现象、原因和修正理由，作为本阶段的一项答案提交。移除临时打印语句，保留最终能运行的个人源码；截取本人标题及三处修正，代码较长时可分多张。</li>\n</ol>\n<h5>本阶段待排错代码：自驾游程序</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    double fuel = 0.0;       // 汽车当前油量\n    int total_distance = 0;  // 计划总距离\n    int traveled = 0;        // 已行驶距离\n\n    cout &lt;&lt; &quot;=== 模拟汽车自驾游 ===&quot; &lt;&lt; endl;\n    cout &lt;&lt; &quot;请输入汽车的初始油量（升）: &quot;;\n    cin &gt;&gt; fuel;\n    cout &lt;&lt; &quot;请输入计划行驶的总距离（公里）: &quot;;\n    cin &gt;&gt; total_distance;\n\n    cout &lt;&lt; &quot;\\n出发！每次前进10公里...&quot; &lt;&lt; endl;\n\n    // 开始行驶循环\n    while (traveled != total_distance &amp;&amp; fuel &gt; 0) {\n        int road_type;\n        cout &lt;&lt; &quot;\\n当前已行驶: &quot; &lt;&lt; traveled &lt;&lt; &quot; 公里。剩余油量: &quot; &lt;&lt; fuel &lt;&lt; &quot; 升。&quot; &lt;&lt; endl;\n        cout &lt;&lt; &quot;请选择前方10公里的路况 (1: 平路-耗油1升, 2: 上坡-耗油2升, 3: 下坡-不耗油): &quot;;\n        cin &gt;&gt; road_type;\n\n        switch (road_type) {\n            case 1: // 平路\n                fuel -= 1;\n                traveled += 10;\n                break;\n            case 2: // 上坡\n                fuel -= 2;\n                traveled += 10;\n            case 3: // 下坡\n                traveled += 10;\n                break;\n            default:\n                cout &lt;&lt; &quot;路况输入错误，请重新选择！&quot; &lt;&lt; endl;\n                continue;\n        }\n\n        // 检查油量是否触底报警\n        if (fuel = 0) {\n            cout &lt;&lt; &quot;【警告】油表灯亮起，油量已耗尽！&quot; &lt;&lt; endl;\n        }\n    }\n\n    // 行程结束，输出结果\n    if (traveled &gt;= total_distance) {\n        cout &lt;&lt; &quot;\\n🎉 恭喜！成功抵达目的地！总共行驶了 &quot; &lt;&lt; traveled &lt;&lt; &quot; 公里。&quot; &lt;&lt; endl;\n    } else {\n        cout &lt;&lt; &quot;\\n❌ 很遗憾，汽车没油了，抛锚在 &quot; &lt;&lt; traveled &lt;&lt; &quot; 公里处。&quot; &lt;&lt; endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-a8fc80b85751.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> 三处Bug分析（分别说明现象、原因和修正理由）；<code>提前停驶_定位.png</code>、<code>上坡里程_定位.png</code>、<code>目标里程_定位.png</code>（每轮各一张，显示相应异常输出或调试观察）；<code>自驾游修正源码.png</code>（代码较长可分张，显示本人标题及三处修正）和 <code>自驾游最终运行.png</code>（显示本人标识、10升／25公里测试输入与修复后的行程结果）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-c2",
              "caseId": "c-ext-c2",
              "label": "拓展案例 C2",
              "title": "前提条件断言",
              "taskId": "t-p03-capstone",
              "forms": [
                "复制后运行、改写并运行、测试与对照"
              ],
              "plan": "分别使用非法压力与合法压力运行换算程序，记录断言触发的位置、提示及正常计算结果。将前提检查与后续换算分开核验，确认程序在不满足条件时停止，在满足条件时能够完成计算并正常结束。",
              "cardCaption": [
                "胎压换算前的检查",
                "断言"
              ],
              "background": [
                {
                  "html": "<p>打印语句能帮助追查已经发生的异常，轮胎压力换算却还需要在非法输入进入计算前守住前提。</p>\n<p>本案例把PSI转换成bar，分别用负值和正值运行：前者应被拦下，后者应得到换算结果。怎样在程序运行到转换语句前明确检查“压力必须为正”？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "断言与输入前提"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-c2-stage-1",
                  "number": 1,
                  "title": "断言输入对照",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、改写并运行、测试与对照。</strong> 用同一条断言分别检查违规值与合规值。</p>\n<ol>\n<li>复制下方代码，保持 <code>-5.0</code> 的测试值，用Debug模式运行；观察断言提示，以及换算结果和正常结束提示是否出现。保存违规运行画面。</li>\n<li>将测试值改为 <code>32.5</code>，在报告前加入“轮胎检测员[姓名]”。重新编译运行，核对换算结果约为2.23925 bar并正常结束。</li>\n<li>在个人源码顶部用两行注释说明两个输入分别在断言前后执行到哪里；最终保留能正常运行的 <code>32.5</code> 版本。</li>\n</ol>\n<h5>本阶段案例代码：轮胎压力断言</h5>\n<pre><code class=\"language-cpp\">// 使用 assert 检查输入前提条件\n\n#include &lt;iostream&gt;\n#include &lt;cassert&gt; // 提供 assert 宏\n\nint main() {\n    // 场景 1：使用合法的输入值\n    // double tire_pressure_psi = 32.5; // 一个正常的轮胎压力值\n\n    // 场景 2：使用非法的输入值\n    // 为了触发断言，使用一个非法的负数值\n    double tire_pressure_psi = -5.0;\n\n    std::cout &lt;&lt; &quot;--- 轮胎压力单位转换 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;输入的PSI值: &quot; &lt;&lt; tire_pressure_psi &lt;&lt; std::endl;\n\n    // 设置断言，检查输入值是否为正数\n    // assert() 在条件为真时继续执行，在条件为假时终止程序并输出诊断信息\n    assert(tire_pressure_psi &gt; 0);\n\n    // 仅在断言通过后执行压力转换\n    double pressure_in_bar = tire_pressure_psi * 0.0689;\n    std::cout &lt;&lt; &quot;转换后的压力为: &quot; &lt;&lt; pressure_in_bar &lt;&lt; &quot; bar&quot; &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;程序正常结束。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">输入-5.0 PSI：在换算前因断言失败而停止\n输入32.5 PSI：转换后的压力约为2.23925 bar，程序正常结束\n</code></pre>\n<p><img src=\"assets/classroom-effects/p03-43558dbca658.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>断言对照源码.png</code>（断言、32.5、本人标识及两行结论注释）、<code>断言违规运行.png</code>（-5.0触发断言）和 <code>断言合规运行.png</code>（本人标识、约2.23925 bar及正常结束）。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "project-04",
      "number": 4,
      "title": "环境感知开发",
      "groups": [
        {
          "id": "t-p04-intro",
          "title": "感知数据结构分析",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-d",
              "caseId": "c-ai-d",
              "label": "案例 D",
              "title": "AIGC数据结构优化",
              "taskId": "t-p04-intro",
              "forms": [
                "设计与建模、观察与分析"
              ],
              "plan": "提交车辆、行人共有数据及专属数据需求，核对AIGC给出的组织方式是否能区分对象类别。再以具体车辆和行人检查字段含义、空间复用与访问方式，记录方案中需要澄清或修正的地方，避免只凭结构名称判断设计合理。",
              "cardCaption": [
                "感知对象的字段设计",
                "共有与专属字段"
              ],
              "background": [
                {
                  "html": "<p>自动驾驶场景要同时保存车辆和行人的位置。车辆还要记录相对速度，行人则要记录横向移动速度；两类对象不会同时使用这两项专属数据。</p>\n<p>如果一律为它们保留全部字段，空间会被浪费，读取时也难判断哪项有效。先请AIGC提出组织方案，再借此区分基本、派生与自定义数据类型。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "基本、派生与自定义数据类型"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-d-stage-1",
                  "number": 1,
                  "title": "AIGC数据结构优化",
                  "leads": [],
                  "html": "<p><strong>任务形式：设计与建模、观察与分析。</strong> 用需求向AIGC索取结构方案，检查类型标签和共享数据是否对应。</p>\n<ol>\n<li>向AIGC发送下列提示词，要求给出结构示意、各字段的作用，并说明车辆与行人如何分别取用专属速度。不必要求生成可运行的完整程序。</li>\n</ol>\n<blockquote>\n<p>请为我设计一个优化的C++数据结构，包含车辆（相对速度）和行人（横向移动速度），它们有共同属性（位置），要求在内存使用上尽可能高效。请说明如何辨别当前对象的类型，以及如何避免为两种对象同时保留两份专属速度数据。</p>\n</blockquote>\n<ol start=\"2\">\n<li>核对回答是否包含位置、类型标记和专属速度；若AI把两种速度都作为独立常驻字段，追问如何让互斥的数据共享存储空间。观察AI改写后的结构，不必照抄其代码。</li>\n<li>截取本人提示词、首次方案和修改后的关键结构；用截图标出哪个字段表明对象类型，哪个部分保存专属数据。</li>\n</ol>\n<p><strong>本阶段提交：</strong> <code>交通对象数据结构.png</code>（提示词、方案与本人追问后的类型标记和共享数据，可分张截图）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p04-b01",
          "title": "传感器数据采集",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-025",
              "caseId": "c-025",
              "label": "案例 25",
              "title": "传感器指针校准",
              "taskId": "t-p04-b01",
              "forms": [
                "复制后运行、测试与对照",
                "扩充并运行"
              ],
              "plan": "先通过指针完成偏移量校准，对照原变量、指针中的地址和修改前后数值；再换用整数状态码程序完成间接更新。两组任务都要确认指针类型与目标一致，修改确实作用于原始数据。",
              "cardCaption": [
                "通过指针校准偏移量",
                "地址与解引用"
              ],
              "background": [
                {
                  "html": "<p>传感器测量值存在偏差时，校准程序要修改保存偏移量的原始变量。这个任务要求先找到该变量，再通过另一条访问路径完成修改。</p>\n<p>偏移量的地址、指针保存的地址与解引用后的数值，正好能帮助确认改动是否作用在同一处数据上。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "地址、指针与解引用"
                },
                {
                  "title": "指针类型与间接修改"
                }
              ],
              "stages": [
                {
                  "id": "class-c-025-stage-1",
                  "number": 1,
                  "title": "基础偏差校准执行",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 先运行完整校准程序，确认指针中的地址与变量地址一致。</p>\n<ol>\n<li>将下方代码复制为个人程序，把最后的校准完成提示改成“系统工程师[本人姓名]确认偏移量为……”；只改提示文字，不改指针赋值和解引用语句。</li>\n<li>编译运行，核对校准前为0、校准后为1.25；比较 <code>&amp;offset</code> 与 <code>p_offset</code> 打印的地址是否一致。地址数值每次运行可能不同。</li>\n<li>截取能看清变量、指针、解引用和本人提示的源码，以及同一次运行的前后数值与地址。</li>\n</ol>\n<h5>本阶段案例代码：传感器偏移量校准</h5>\n<pre><code class=\"language-cpp\">// 通过指针直接修改内存中的变量值，模拟传感器校准\n\n#include &lt;iostream&gt;\n\nint main() {\n    // 在内存中定义一个变量，代表传感器的原始偏移量\n    float offset = 0.0f;\n\n    // 打印初始状态\n    std::cout &lt;&lt; &quot;校准前：&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 变量 offset 的值: &quot; &lt;&lt; offset &lt;&lt; std::endl;\n    // 使用 &amp; 运算符获取 offset 变量在内存中的地址\n    std::cout &lt;&lt; &quot;  - 变量 offset 的内存地址: &quot; &lt;&lt; &amp;offset &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;----------------------------------------&quot; &lt;&lt; std::endl;\n\n    // 定义一个指针变量 p_offset\n    float* p_offset;\n\n    // 将 offset 的地址赋值给指针 p_offset\n    //    现在，p_offset 就&quot;指向&quot;了 offset\n    p_offset = &amp;offset;\n\n    std::cout &lt;&lt; &quot;指针已设置：&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 指针 p_offset 中存储的地址值: &quot; &lt;&lt; p_offset &lt;&lt; std::endl;\n    std::cout &lt;&lt; std::endl;\n\n    // 解引用指针并修改传感器偏移量\n    //    使用 * (解引用)运算符，访问 p_offset 指向的那块内存，并修改其内容\n    std::cout &lt;&lt; &quot;正在通过指针 *p_offset 进行校准...&quot; &lt;&lt; std::endl;\n    *p_offset = 1.25f;\n    std::cout &lt;&lt; &quot;校准完成！&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;----------------------------------------&quot; &lt;&lt; std::endl;\n\n    // 验证结果\n    //    再次打印原始变量 offset 的值，会发现它已经被成功修改\n    std::cout &lt;&lt; &quot;校准后：&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 变量 offset 的值: &quot; &lt;&lt; offset &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-a147cc96062d.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>偏移校准源码.png</code>（变量、指针、解引用与本人提示）和 <code>偏移校准运行.png</code>（校准前后数值及两处地址）。</p>\n"
                },
                {
                  "id": "class-c-025-stage-2",
                  "number": 2,
                  "title": "传感器状态间接修改",
                  "leads": [
                    {
                      "html": "<p>换用给定的整数状态码程序，通过指针更新原变量。核对指针类型、目标地址和更新前后的状态，确认修改确实发生在预期位置。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 在已能运行的校准程序后，按给定骨架补全整型状态码的指针间接更新。</p>\n<ol>\n<li>将下方骨架片段加入个人程序 <code>main</code> 的末尾（<code>return 0;</code> 之前），仅补全两处 <code>// TODO</code>：定义指向 <code>status</code> 的整型指针 <code>p_status</code>，再只通过解引用把 <code>status</code> 的值改为 <code>10 + 本人学号末一位</code>（不得直接写 <code>status = ...</code> 重新赋值）。</li>\n<li>编译运行，核对状态由 <code>0</code> 变为 <code>[10+学号末一位]</code>，同时核对 <code>p_status</code> 保存的地址与 <code>&amp;status</code> 一致。</li>\n<li>将新增源码与运行结果同屏截图，并在运行截图中<strong>用红线把相同的两处状态变量内存地址连起来</strong>。</li>\n</ol>\n<h5>本阶段扩充骨架：整型状态码指针更新</h5>\n<pre><code class=\"language-cpp\">    int status = 0;\n    // TODO 1：定义指向 status 的整型指针 p_status，并保存 status 的地址。\n\n    std::cout &lt;&lt; &quot;修改前 status: &quot; &lt;&lt; status &lt;&lt; &quot; | &amp;status: &quot; &lt;&lt; &amp;status\n              &lt;&lt; &quot; | p_status: &quot; &lt;&lt; p_status &lt;&lt; std::endl;\n\n    // TODO 2：只通过解引用 p_status，将状态修改为 10 + 本人学号末一位。\n\n    std::cout &lt;&lt; &quot;修改后 status: &quot; &lt;&lt; status &lt;&lt; std::endl;\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-960b5afd91a5.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>状态间接修改源码与运行.png</code>（同屏显示整型指针定义、解引用赋值，以及状态变化与红线连接的相同内存地址）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-026",
              "caseId": "c-026",
              "label": "案例 26",
              "title": "雷达点云遍历",
              "taskId": "t-p04-b01",
              "forms": [
                "改写并运行"
              ],
              "plan": "先保留五个距离值的原始顺序，再从末尾开始改写指针遍历。核对反向结果是否恰好包含同样的五个元素、首尾边界是否正确，并将访问起点、移动方向与终止位置对应起来。",
              "cardCaption": [
                "连续距离值的访问",
                "指针移动"
              ],
              "background": [
                {
                  "html": "<p>雷达一次扫描得到五个连续保存的距离值。已有程序按顺序输出它们；为了从最新测点向前回查，需要把起点放在末尾并反向遍历。</p>\n<p>先弄清数组首地址和指针偏移的关系，才能让扫描正好停在首元素。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "数组首地址与指针偏移"
                }
              ],
              "stages": [
                {
                  "id": "class-c-026-stage-1",
                  "number": 1,
                  "title": "点云数据逆向遍历",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 先复制正向扫描程序，再把扫描起点与方向改为从后向前。</p>\n<ol>\n<li>复制下方代码，将数组最后一项 <code>9.9f</code> 改为 <code>9.0f + 本人学号末一位 * 0.1f</code>（例如末位为5则写 <code>9.5f</code>），先运行一次确认正向输出。</li>\n<li>将指针起点 <code>p_dist</code> 改为指向数组最后一个元素 <code>&amp;dists[4]</code>；在循环中保持输出五次，除最后一次外，每次输出后让指针向低地址方向移动一个元素（例如在原循环中使用 <code>if (i &lt; 4) --p_dist;</code>），最后一次输出后不再递减，禁止形成数组首元素之前的指针。保留原有“点号、地址、距离”的输出字段，并把标题改为“雷达分析员[本人姓名]逆向扫描”。</li>\n<li>核对反向第一项为你修改后的末尾距离、最后一项为 <code>10.2</code>。将改写后的源码与运行窗口同屏截图，并在运行结果上<strong>观察相邻两个 <code>float</code> 地址相差几个字节，在源码截图中用红框圈出使指针向前移动一个元素的语句</strong>。</li>\n</ol>\n<h5>本阶段案例代码：雷达点云正向扫描</h5>\n<pre><code class=\"language-cpp\">// 使用指针算术运算遍历连续内存，模拟雷达点云处理\n\n#include &lt;iostream&gt;\n\nint main() {\n    // 模拟连续的内存缓冲区\n    //    这是在C++中获取栈上连续内存的标准方法\n    float dists[5] = {10.2f, 11.5f, 12.0f, 10.8f, 9.9f};\n\n    // 定义一个指针，并使其指向第一个数据点的地址\n    float* p_dist = &amp;dists[0];\n\n    std::cout &lt;&lt; &quot;--- 开始遍历雷达点云数据 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;起始地址: &quot; &lt;&lt; p_dist &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;---------------------------------&quot; &lt;&lt; std::endl;\n\n    // 使用 for 循环和指针算术运算来遍历这块&quot;内存&quot;\n    //    我们已知有5个数据点，所以循环5次\n    for (int i = 0; i &lt; 5; ++i) {\n        // 使用 * (解引用) 运算符获取指针当前指向的值\n        std::cout &lt;&lt; &quot;点 &quot; &lt;&lt; i + 1 &lt;&lt; &quot; | &quot;;\n        std::cout &lt;&lt; &quot;指针地址: &quot; &lt;&lt; p_dist &lt;&lt; &quot; | &quot;;\n        std::cout &lt;&lt; &quot;距离: &quot; &lt;&lt; *p_dist &lt;&lt; &quot; 米&quot; &lt;&lt; std::endl;\n\n        // 递增指针，使其指向下一个距离值\n        // 这会让指针 p_dist 在内存中向前移动 sizeof(float) 个字节，\n        // 从而精确地指向下一个float变量的位置\n        p_dist++;\n    }\n\n    std::cout &lt;&lt; &quot;--- 遍历完成 ---&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-558a210caaf7.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>点云逆向扫描源码与运行.png</code>（同屏显示末尾起点、红框标注的指针递减语句，以及本人标题与五项反向距离、地址输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-027",
              "caseId": "c-027",
              "label": "案例 27",
              "title": "VIN安全传递",
              "taskId": "t-p04-b01",
              "forms": [
                "复制后运行、测试与对照"
              ],
              "plan": "以同一份VIN对照传值、传指针和传引用的读取结果，再依据任务卡检查地址关系与只读限制。将能否修改、是否复制与读取内容分开判断，用实际运行或编译记录说明接口的安全边界。",
              "cardCaption": [
                "车辆识别码的传递",
                "传值与引用"
              ],
              "background": [
                {
                  "html": "<p>车辆识别码要交给多个处理单元核验，但这些单元只应读取，不能随意改写原件。</p>\n<p>传值、传指针和传引用都能取得内容，却在复制成本、地址关系和只读约束上不同。通过同一VIN的三种传递结果，判断哪种写法适合安全核验。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "值、const指针与const引用"
                }
              ],
              "stages": [
                {
                  "id": "class-c-027-stage-1",
                  "number": 1,
                  "title": "车辆参数安全传递",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 运行三种传递方式，对照对象地址与读取写法，再验证只读约束。</p>\n<ol>\n<li>复制下方程序，把VIN末尾的占位字符改成自己选择的四位数字；在输出开头增加“操作员[本人姓名]核对车辆识别码”。编译运行，分别找出原变量、副本、const指针和const引用显示的地址。</li>\n<li>对照运行结果：副本地址应不同；指针保存的地址、引用取地址应与原变量一致。把三处关键输出留在同一张运行截图中；地址的具体数字不作统一要求。</li>\n<li>临时取消 <code>const</code> 指针写入示例前的注释并尝试编译，截取包含试验语句与编译信息的画面；随后恢复注释并重新编译运行。引用写入示例可按同样方法核验一次。</li>\n<li>在提交的最终源码截图中保留三种传递写法和本人标记；在截图旁用简短文字指出哪一种写法兼顾不复制数据与只读访问。</li>\n</ol>\n<h5>本阶段案例代码：三种VIN传递方式</h5>\n<pre><code class=\"language-cpp\">// 对比三种方式传递 VIN 码，体会 const 引用的优势\n\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n\nint main() {\n    // 在内存中定义一个VIN码字符串\n    std::string vin = &quot;LFWC2MD98PTxxxxxx&quot;;\n\n    std::cout &lt;&lt; &quot;原始VIN码地址: &quot; &lt;&lt; &amp;vin &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;========================================&quot; &lt;&lt; std::endl;\n\n    // 方式 1：按值传递 (创建副本)\n    {\n        // 进入&quot;处理单元&quot;作用域\n        std::cout &lt;&lt; &quot;方式 1：按值传递&quot; &lt;&lt; std::endl;\n\n        // 模拟参数传递：创建一个全新的字符串 `vin_copy`，\n        // 并将 `vin` 的内容完整地复制过来\n        std::string vin_copy = vin; \n\n        std::cout &lt;&lt; &quot;  - 内部副本 vin_copy 的地址: &quot; &lt;&lt; &amp;vin_copy &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;  - 观察: 内部地址与原始地址不同，发生了数据拷贝。&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;  - 处理单元访问到的VIN: &quot; &lt;&lt; vin_copy &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;  - 缺点: 对于长字符串，每次拷贝都会消耗时间和内存。&quot; &lt;&lt; std::endl;\n    }\n    std::cout &lt;&lt; &quot;========================================&quot; &lt;&lt; std::endl;\n\n    // 方式 2：按 const 指针传递 (传递地址)\n    {\n        // 进入&quot;处理单元&quot;作用域\n        std::cout &lt;&lt; &quot;方式 2：按 const 指针传递&quot; &lt;&lt; std::endl;\n\n        // 模拟参数传递：创建一个指针 `p_vin`，\n        // 它存储了 `vin` 的内存地址。`const` 保证了不能通过指针修改原数据\n        const std::string* p_vin = &amp;vin;\n\n        std::cout &lt;&lt; &quot;  - 指针 p_vin 中存储的地址: &quot; &lt;&lt; p_vin &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;  - 观察: 指针存储的地址与原始地址相同，没有数据拷贝。&quot; &lt;&lt; std::endl;\n        // 访问时需要解引用 `*`\n        std::cout &lt;&lt; &quot;  - 处理单元访问到的VIN: &quot; &lt;&lt; *p_vin &lt;&lt; std::endl;\n        // *p_vin = &quot;tampered&quot;; // 编译错误！const指针保护了原始数据\n        std::cout &lt;&lt; &quot;  - 优点: 高效。缺点: 访问语法稍显繁琐(*)。&quot; &lt;&lt; std::endl;\n    }\n    std::cout &lt;&lt; &quot;========================================&quot; &lt;&lt; std::endl;\n\n    // 方式 3：按 const 引用传递 (起别名)\n    {\n        // 进入&quot;处理单元&quot;作用域\n        std::cout &lt;&lt; &quot;方式 3：按 const 引用传递&quot; &lt;&lt; std::endl;\n\n        // 模拟参数传递：创建一个引用 `ref_vin`，\n        // 它成为 `vin` 的一个只读别名\n        const std::string&amp; ref_vin = vin;\n\n        std::cout &lt;&lt; &quot;  - 引用 ref_vin 的地址: &quot; &lt;&lt; &amp;ref_vin &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;  - 观察: 引用地址与原始地址相同，没有数据拷贝。&quot; &lt;&lt; std::endl;\n        // 像使用普通变量一样直接访问\n        std::cout &lt;&lt; &quot;  - 处理单元访问到的VIN: &quot; &lt;&lt; ref_vin &lt;&lt; std::endl;\n        // ref_vin = &quot;tampered&quot;; // 编译错误！const引用保护了原始数据\n        std::cout &lt;&lt; &quot;  - 优点: 既高效(无拷贝)，又安全(const)，且语法简洁。&quot; &lt;&lt; std::endl;\n    }\n    std::cout &lt;&lt; &quot;========================================&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-083b3ab9e268.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>VIN三种传递源码.png</code>（三种声明及本人标记）、<code>VIN地址对照.png</code>（三种方式的地址与VIN内容）、<code>VIN只读试验.png</code>（一次const写入试验和编译信息），以及简短的方式选择结论。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-028",
              "caseId": "c-028",
              "label": "案例 28",
              "title": "行车路线动态分配",
              "taskId": "t-p04-b01",
              "forms": [
                "复制后运行",
                "扩充并运行、测试与对照"
              ],
              "plan": "先按输入数量建立动态路线并逐点保存、输出，再加入数量与访问边界检查。通过合法和边界输入核验空间大小、元素顺序及结束前的释放，避免只看最后一行输出就认定整条路线处理正确。",
              "cardCaption": [
                "运行时确定路线容量",
                "动态数组"
              ],
              "background": [
                {
                  "html": "<p>导航路线的途经点数在输入前未知，固定长度数组可能不足或浪费。</p>\n<p>程序需要在读入数量后建立恰好够用的路线空间，逐点填值、输出，再在结束前释放。由此引出动态数组的申请、访问边界与释放顺序。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "运行时容量与内存区域"
                },
                {
                  "title": "new[]、delete[]与悬挂指针"
                }
              ],
              "stages": [
                {
                  "id": "class-c-028-stage-1",
                  "number": 1,
                  "title": "路线内存动态分配",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行。</strong> 先用原版输入验证路线空间随途经点数建立，并找出关键语句。</p>\n<ol>\n<li>复制下方程序并运行，输入3，确认程序申请数组、填入三个模拟数据并显示释放提示；在源码中找出申请、填值、释放和置空四处语句。</li>\n</ol>\n<h5>本阶段案例代码：动态路线数组</h5>\n<pre><code class=\"language-cpp\">// 使用 new[] 和 delete[] 动态管理内存\n\n#include &lt;iostream&gt;\n\nint main() {\n    int num_waypoints = 0;\n\n    // 与用户交互，获取需要的内存大小\n    std::cout &lt;&lt; &quot;请输入本次路线规划需要的途经点数量: &quot;;\n    std::cin &gt;&gt; num_waypoints;\n\n    // 定义一个指针，准备接收动态分配内存的地址\n    //    初始化为 nullptr 是一个好习惯，表示它暂时不指向任何地方\n    int* route_points = nullptr;\n\n    // 使用 new[] 关键字在堆上动态分配一块连续的内存\n    //    这块内存的大小足以存放 num_waypoints 个整数\n    //    new[] 操作会返回这块内存的起始地址\n    route_points = new int[num_waypoints];\n\n    std::cout &lt;&lt; &quot;\\n----------------------------------------&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;内存分配成功！&quot; &lt;&lt; std::endl;\n    // 打印指针存储的地址，这个地址位于堆区\n    std::cout &lt;&lt; &quot;  - 路线数据的起始内存地址: &quot; &lt;&lt; route_points &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;----------------------------------------\\n&quot; &lt;&lt; std::endl;\n\n    // (可选) 模拟使用这块内存：用指针算术为其填充一些值\n    for (int i = 0; i &lt; num_waypoints; ++i) {\n        // *(route_points + i) 表示访问第 i 个整数的位置\n        *(route_points + i) = (i + 1) * 10;\n    }\n    std::cout &lt;&lt; &quot;已为 &quot; &lt;&lt; num_waypoints &lt;&lt; &quot; 个途经点填充了模拟数据。&quot; &lt;&lt; std::endl;\n\n    // 使用 delete[] 释放由 new[] 分配的数组\n    //    这会将之前 new[] 申请的整块内存归还给操作系统\n    delete[] route_points;\n\n    std::cout &lt;&lt; &quot;\\n路线内存已成功释放！&quot; &lt;&lt; std::endl;\n\n    // 养成好习惯：释放后，将指针重新指向 nullptr，防止其成为&quot;悬挂指针&quot;\n    route_points = nullptr;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-350b1078fbd2.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>路线原版运行.png</code>（输入3、内存分配与释放提示）；在源码截图中标出申请、填值、释放和置空语句。</p>\n"
                },
                {
                  "id": "class-c-028-stage-2",
                  "number": 2,
                  "title": "路线点输出与边界检查",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 在已经运行的路线程序中增加逐项输出，并处理不合理的途经点数量。</p>\n<ol>\n<li>在 <code>delete[]</code> 之前增加遍历输出，让三个途经点依次显示10、20、30；输出标题使用“领航员[本人姓名]的路线点”。重新运行，输入3，再输入5，核对输出项数随输入变化。</li>\n<li>给输入数量加基本检查：数量小于等于0时输出提示并结束本次运行，不申请数组；用0和3各测试一次。保留 <code>delete[]</code> 与释放后的置空语句，勿在释放后读取数组元素。</li>\n<li>截取最终源码中输入检查、动态分配、遍历、释放和置空的关键区域；分别截取有效输入与0输入的结果。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p04-e933f6978039.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>路线动态分配源码.png</code>（申请、遍历、释放及输入检查，可分张）、<code>路线三点运行.png</code>（本人标题和10、20、30）和 <code>路线零点运行.png</code>（无效数量提示）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p04-b02",
          "title": "传感器数据管理",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-029",
              "caseId": "c-029",
              "label": "案例 29",
              "title": "标定系数存储",
              "taskId": "t-p04-b02",
              "forms": [
                "复制后运行、扩充并运行",
                "仿写并运行"
              ],
              "plan": "先读取标定矩阵的指定行并用下标计算主对角线之和，与心算结果核对；再把九个含个人特征值的像素亮度从小到大排序。对照原始与重排数据，检查元素数量、大小顺序及个人特征值的位置。",
              "cardCaption": [
                "内参矩阵的存储次序",
                "一维数组"
              ],
              "background": [
                {
                  "html": "<p>摄像头标定要保存焦距、光学中心等九个系数，它们共同组成3×3矩阵。</p>\n<p>程序当前按行把九项排在一个数组中；要读取第三行或计算主对角线之和，就必须先确定二维位置在一维数组中的下标。同属图像处理的数据还包括像素亮度，后续会把九个亮度值重新排序，用另一种操作检验数组下标与元素访问。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "数组定义、下标与遍历"
                }
              ],
              "stages": [
                {
                  "id": "class-c-029-stage-1",
                  "number": 1,
                  "title": "标定矩阵迹运算提取",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、扩充并运行。</strong> 保留原版九个系数，结合本人动态主轴偏移量增加第三行和主对角线的读取。</p>\n<ol>\n<li>复制下方程序，将右下角最后一个元素 <code>1.0</code> 改为 <code>1.0 + 本人学号末一位</code>（如末位为3则改为 <code>4.0</code>），先运行核对焦距500.0、500.0和光学中心(320.0, 240.0)。</li>\n<li>在原有输出后补充读取第三行三个元素；再通过下标取出主对角线（第0行第0列、第1行第1列、第2行第2列）的三个元素相加计算矩阵的“迹”，输出“标定员[本人姓名]计算的矩阵迹”（不得直接写出相加后的常数，必须用 <code>camera_matrix[下标]</code> 参与加法）。</li>\n<li>先心算 <code>500.0 + 500.0 + (1.0 + 学号末一位)</code> 的结果，再编译运行核对；将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出主对角线三个元素的数组下标</strong>。</li>\n</ol>\n<h5>本阶段案例代码：摄像头标定系数</h5>\n<pre><code class=\"language-cpp\">// 使用一维数组存储和访问摄像头的3x3标定矩阵\n\n#include &lt;iostream&gt;\n#include &lt;iomanip&gt; // 用于格式化输出\n\nint main() {\n    // 定义一个const一维数组来存储固定的标定系数\n    //    const 确保了这些重要的参数在程序中不会被意外修改\n    //    数据按行优先顺序存放\n    const double camera_matrix[] = {\n        500.0, 0.0, 320.0,  // 第 0 行\n        0.0, 500.0, 240.0,  // 第 1 行\n        0.0, 0.0, 1.0       // 第 2 行（将末尾 1.0 改为 1.0 + 本人学号末一位）\n    };\n\n    // 通过下标访问数组元素，读取标定参数\n    //    - 焦距fx位于第0行第0列，对应数组下标 [0]\n    //    - 焦距fy位于第1行第1列，对应数组下标 [4] (3*1 + 1 = 4)\n    //    - 光学中心cx位于第0行第2列，对应数组下标 [2]\n    //    - 光学中心cy位于第1行第2列，对应数组下标 [5] (3*1 + 2 = 5)\n    double fx = camera_matrix[0];\n    double fy = camera_matrix[4];\n    double cx = camera_matrix[2];\n    double cy = camera_matrix[5];\n\n    // 打印提取出的参数，进行验证\n    std::cout &lt;&lt; &quot;--- 摄像头内部标定参数 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(1); // 设置输出格式\n    std::cout &lt;&lt; &quot;  - 焦距 (fx): &quot; &lt;&lt; fx &lt;&lt; &quot; pixels&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 焦距 (fy): &quot; &lt;&lt; fy &lt;&lt; &quot; pixels&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 光学中心 (cx, cy): (&quot; &lt;&lt; cx &lt;&lt; &quot;, &quot; &lt;&lt; cy &lt;&lt; &quot;)&quot; &lt;&lt; std::endl;\n\n    // TODO：输出第2行（第三行）的三个元素，并用三个主对角线元素下标相加计算矩阵的迹 trace。\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-1878796d44a7.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>标定矩阵读取与运行.png</code>（同屏显示九个系数、红框标注的三个主对角线下标，以及本人标记、第三行和对应矩阵迹的运行输出）。</p>\n"
                },
                {
                  "id": "class-c-029-stage-2",
                  "number": 2,
                  "title": "摄像头像素亮度重排",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 按给定骨架对含个人学号特征值的九个像素亮度完成从小到大排序。</p>\n<ol>\n<li>在同一日期目录新建个人程序，复制下方骨架代码，将数组最后一项 <code>100</code> 改为 <code>100 + 本人学号末两位</code>（0—255之间）；不得改动数组名 <code>pixels</code> 与其余八个初始值。</li>\n<li>补全下方冒泡比较交换循环中的两处 <code>// TODO</code>（或包含 <code>&lt;algorithm&gt;</code> 调用 <code>std::sort</code>），使九个亮度值按从小到大重排。</li>\n<li>编译运行，核对排序前后的元素个数相同、你的个人特征值出现在正确的大小位置上；将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出交换两个元素或调用排序的核心语句</strong>。</li>\n</ol>\n<h5>本阶段骨架代码：九像素亮度排序</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\nint main() {\n    int pixels[9] = {180, 45, 230, 12, 95, 250, 60, 140, 100}; // 将末尾 100 改为 100 + 本人学号末两位\n\n    std::cout &lt;&lt; &quot;排序前亮度: &quot;;\n    for (int i = 0; i &lt; 9; ++i) std::cout &lt;&lt; pixels[i] &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; std::endl;\n\n    // 双层循环从小到大排序\n    for (int i = 0; i &lt; 9 - 1; ++i) {\n        for (int j = 0; j &lt; 9 - 1 - i; ++j) {\n            if (/* TODO 1：判断前一项 pixels[j] 大于后一项 pixels[j + 1] */) {\n                // TODO 2：借助临时变量交换 pixels[j] 与 pixels[j + 1]。\n            }\n        }\n    }\n\n    std::cout &lt;&lt; &quot;工程师[本人姓名]的亮度排序: &quot;;\n    for (int i = 0; i &lt; 9; ++i) std::cout &lt;&lt; pixels[i] &lt;&lt; &quot; &quot;;\n    std::cout &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-020bd3037acf.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>像素排序源码与运行.png</code>（同屏显示含个人特征值的数组、红框标注的排序核心语句，以及本人标题与排序前后九项输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-030",
              "caseId": "c-030",
              "label": "案例 30",
              "title": "传感器网格定义",
              "taskId": "t-p04-b02",
              "forms": [
                "复制后运行、改写并运行",
                "改写并运行"
              ],
              "plan": "先按给定布局构建并打印特征网格，再把同一组状态映射为字符图案。对照数值与字符两种表示，逐行检查尺寸、下标和目标形状，确认变化发生在显示方式，而不是意外改动原始网格位置。",
              "cardCaption": [
                "红外阵列的激活分布",
                "二维数组"
              ],
              "background": [
                {
                  "html": "<p>红外传感器把目标区域划成4×4网格，每个位置记录一个状态。仅有一串数值不便判断目标形状，因此要按行列打印，再改成便于观察的字符图案。</p>\n<p>二维数组的行列下标和嵌套遍历就是完成这个任务的基础。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "二维数组与嵌套遍历"
                }
              ],
              "stages": [
                {
                  "id": "class-c-030-stage-1",
                  "number": 1,
                  "title": "特征图案网格构建",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、改写并运行。</strong> 沿用4×4数组和嵌套遍历，重新设计一个只含0、1的图案。</p>\n<ol>\n<li>复制下方程序并运行，确认每行四项、共四行；找到二维初始化列表和 <code>ir_grid[i][j]</code> 的输出位置。</li>\n<li>只改数组中的16个值，设计与原版不同的“X”形或边框；保留4×4尺寸及原有打印循环。标题改为“[本人姓名]的红外特征网格”。</li>\n<li>运行核对图案行列与自己设计的一致，截取数组初始化和完整四行输出。</li>\n</ol>\n<h5>本阶段案例代码：红外状态网格</h5>\n<pre><code class=\"language-cpp\">// 使用二维数组定义并打印一个固定的红外传感器状态网格\n\n#include &lt;iostream&gt;\n\nint main() {\n    // 定义一个const的4x4二维整型数组 ir_grid\n    //    const 确保这组模拟数据在程序中是只读的，不可修改\n    //    使用嵌套的花括号进行初始化，清晰地表示出二维结构\n    const int ir_grid[4][4] = {\n        {0, 1, 1, 0},\n        {0, 0, 1, 0},\n        {1, 1, 0, 0},\n        {0, 1, 0, 0}\n    };\n\n    std::cout &lt;&lt; &quot;--- 红外传感器激活状态图 ---&quot; &lt;&lt; std::endl;\n\n    // 使用嵌套的 for 循环来遍历二维数组\n    //    外层循环变量 i 控制行，从第0行到第3行\n    for (int i = 0; i &lt; 4; ++i) {\n        // 内层循环变量 j 控制列，从第0列到第3列\n        for (int j = 0; j &lt; 4; ++j) {\n            // 通过 ir_grid[i][j] 访问指定行和列的元素\n            std::cout &lt;&lt; ir_grid[i][j] &lt;&lt; &quot; &quot;;\n        }\n        // 在打印完一行的所有列之后，进行换行\n        std::cout &lt;&lt; std::endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-0998053f9893.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>红外图案源码.png</code>（4×4初始化与遍历）和 <code>红外图案运行.png</code>（本人标题及四行图案）。</p>\n"
                },
                {
                  "id": "class-c-030-stage-2",
                  "number": 2,
                  "title": "特征网格字符映射",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 在上一阶段个人程序上改变元素类型与图案符号，保持同一行列结构。</p>\n<ol>\n<li>将二维数组的元素类型改为 <code>char</code>，用 <code>*</code> 和 <code>-</code> 对应原来选定的两种状态；检查每个字符常量使用单引号。</li>\n<li>保持同一个X形或边框图案，复用嵌套循环输出四行；运行核对16个位置都按预期映射。</li>\n<li>截取最终字符数组、打印循环和含本人标题的完整字符图案。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p04-c82b24b7600a.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>字符网格源码.png</code>（字符数组及遍历）和 <code>字符网格运行.png</code>（本人标题及四行字符图案）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-031",
              "caseId": "c-031",
              "label": "案例 31",
              "title": "数组指针理解",
              "taskId": "t-p04-b02",
              "forms": [
                "复制后运行、测试与对照",
                "改写并运行",
                "仿写并运行",
                "测试与对照"
              ],
              "plan": "先记录网格相关地址与sizeof结果，再改变数组维度，观察类型与步长如何变化。随后用两种指针访问同一元素，并完成双指针转换的编译验证，将地址相同、类型相容和访问正确分别核对。",
              "cardCaption": [
                "同一网格的地址含义",
                "数组指针"
              ],
              "background": [
                {
                  "html": "<p>红外网格通过二维数组保存，交给其他处理模块时还需要确定应使用什么地址与类型。首行、首元素和整个数组的起始位置可能显示为相同数值，但它们所代表的对象不同，移动一步时跨过的存储空间也可能不同。</p>\n<p>本次提供可运行的网格程序，通过地址与sizeof输出、改变维度及两种指针访问进行对照。怎样用实际结果区分“地址看起来相同”和“指针可以相互替代”，又怎样检查类型不匹配带来的问题？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "数组地址、行大小与指针大小"
                },
                {
                  "title": "数组指针、指针数组与步长"
                }
              ],
              "stages": [
                {
                  "id": "class-c-031-stage-1",
                  "number": 1,
                  "title": "网格内存空间探测",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 先观察原版4×4网格的地址和大小，再比较两种加一操作。</p>\n<ol>\n<li>复制下方程序并运行，截取三个首地址、整个数组、一行、一个元素和指针自身大小的输出。地址数值以本机结果为准。</li>\n<li>在原程序末尾增加两条输出，分别显示 <code>ir_grid + 1</code> 与 <code>&amp;ir_grid + 1</code> 转成 <code>const void*</code> 后的地址。比较它们各自前进的字节数；输出标题加入“[本人姓名]的网格地址观察”。</li>\n<li>截取新增的地址输出语句和两种“加一”结果；用一句话说明一个指向下一行、另一个越过整个数组。</li>\n</ol>\n<h5>本阶段案例代码：数组地址与大小</h5>\n<pre><code class=\"language-cpp\">// 深入理解二维数组的地址与大小，辨析数组与指针的区别\n\n#include &lt;iostream&gt;\n\nint main() {\n    // 定义 4 × 4 红外传感器网格\n    const int ir_grid[4][4] = {\n        {0, 1, 1, 0},\n        {0, 0, 1, 0},\n        {1, 1, 0, 0},\n        {0, 1, 0, 0}\n    };\n\n    std::cout &lt;&lt; &quot;--- 1. 地址分析 ---&quot; &lt;&lt; std::endl;\n    // 数组名 ir_grid 在多数情况下会隐式转换为指向第一行的指针\n    std::cout &lt;&lt; &quot;数组名 (ir_grid):              \\t&quot; &lt;&lt; ir_grid &lt;&lt; std::endl;\n    // &amp;ir_grid[0] 是明确地取第一行的地址\n    std::cout &lt;&lt; &quot;第一行的地址 (&amp;ir_grid[0]):      \\t&quot; &lt;&lt; &amp;ir_grid[0] &lt;&lt; std::endl;\n    // &amp;ir_grid[0][0] 是明确地取第一个元素的地址\n    std::cout &lt;&lt; &quot;第一个元素的地址 (&amp;ir_grid[0][0]): \\t&quot; &lt;&lt; &amp;ir_grid[0][0] &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;观察: 三者的地址值完全相同！\\n&quot; &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;--- 2. 大小分析 (sizeof) ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;整个数组的大小 (sizeof(ir_grid)):   \\t&quot; &lt;&lt; sizeof(ir_grid) &lt;&lt; &quot; 字节&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;一行的实际大小 (sizeof(ir_grid[0])): \\t&quot; &lt;&lt; sizeof(ir_grid[0]) &lt;&lt; &quot; 字节&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;一个元素的大小 (sizeof(ir_grid[0][0])):\\t&quot; &lt;&lt; sizeof(ir_grid[0][0]) &lt;&lt; &quot; 字节&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;观察: 4 * 4 * 4 = 64, 4 * 4 = 16, 符合预期。\\n&quot; &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;--- 3. 指针分析 ---&quot; &lt;&lt; std::endl;\n    // 定义一个指针 p，让它指向数组的第一个元素\n    const int* p = &amp;ir_grid[0][0];\n    std::cout &lt;&lt; &quot;定义一个指针 p 指向数组首元素...&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;指针 p 自身的大小 (sizeof(p)):   \\t&quot; &lt;&lt; sizeof(p) &lt;&lt; &quot; 字节&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;观察: 指针的大小(例如8)与数组的大小(64)完全不同！\\n&quot; &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;结论：数组名可以&#39;扮演&#39;指针，但数组本身绝对不是指针！&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-0b154348a630.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>网格地址源码.png</code>（数组、大小及两种加一表达式）、<code>网格地址运行.png</code>（本人标题、地址与大小对照）和一句步长结论。</p>\n"
                },
                {
                  "id": "class-c-031-stage-2",
                  "number": 2,
                  "title": "二维数组大小改写",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 在已运行程序的个人副本中改成2×3双精度数组，再核对大小关系。</p>\n<ol>\n<li>把原网格改为 <code>double</code> 类型、2行3列，并填入六个便于辨认的数；将首元素指针同步改为 <code>const double*</code>，把原来写死“4×4”“64”“16”的说明文字更新为新网格的实际情况。</li>\n<li>运行打印整个数组、一行、一个元素及指针变量的 <code>sizeof</code>；检查前三项分别对应6个、3个、1个 <code>double</code> 的容量。指针自身大小以本机为准。</li>\n<li>截取新数组声明、全部大小输出语句和运行结果。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p04-fe0a12801d07.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>双精度网格源码.png</code>（2×3数组及大小表达式）和 <code>双精度网格运行.png</code>（数组、一行、元素及指针大小）。</p>\n"
                },
                {
                  "id": "class-c-031-stage-3",
                  "number": 3,
                  "title": "两种指针访问网格",
                  "leads": [
                    {
                      "html": "<p>保留网格地址与大小的观察记录，对照两种指针声明访问同一元素。结合一次编译试验，核对类型、移动步长与访问结果是否相互一致。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 沿用上次的4×4整数网格，按给定骨架分别建立行指针与保存四行首元素地址的指针数组。</p>\n<ol>\n<li>复制回4×4整数网格的个人程序，先在 <code>const int ir_grid[4][4]</code> 的初始化列表中，把 <code>ir_grid[2][3]</code> 对应元素（行下标2、列下标3，即第三行第四列）的初值改为 <code>10 + 本人学号末一位</code>。将下方骨架片段加入 <code>main</code> 末尾，仅补全两处 <code>// TODO</code>：声明指向“含4个整数的一行”的数组指针 <code>row_ptr</code> 并初始化为 <code>ir_grid</code>，再声明含4个元素的指针数组 <code>ptr_arr</code> 分别保存四行首元素地址。</li>\n<li>通过 <code>row_ptr[2][3]</code> 和 <code>ptr_arr[2][3]</code> 读取同一位置，打印“[本人姓名]的两种访问结果”，核对两值均为 <code>10 + 本人学号末一位</code>；再打印 <code>row_ptr</code> 与 <code>row_ptr + 1</code> 的地址，观察前进一整行（16字节）。</li>\n<li>将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出数组指针 <code>row_ptr</code> 声明中的圆括号 <code>(*row_ptr)</code></strong>。</li>\n</ol>\n<h5>本阶段骨架代码：数组指针与指针数组对照</h5>\n<pre><code class=\"language-cpp\">    // TODO 1：声明指向“4个const int组成的一行”的数组指针 row_ptr，并用 ir_grid 初始化。\n\n    // TODO 2：声明包含4个 const int* 元素的指针数组 ptr_arr，依次初始化为 ir_grid 的第0~3行。\n\n    std::cout &lt;&lt; &quot;[本人姓名]的两种访问结果: &quot;\n              &lt;&lt; row_ptr[2][3] &lt;&lt; &quot; | &quot; &lt;&lt; ptr_arr[2][3] &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;row_ptr: &quot; &lt;&lt; row_ptr &lt;&lt; &quot; -&gt; row_ptr + 1: &quot; &lt;&lt; (row_ptr + 1) &lt;&lt; std::endl;\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-a521ebe4e37a.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>两种指针声明与运行.png</code>（同屏显示红框标注的数组指针圆括号、指针数组声明，以及本人标题、相同的元素值和行步长输出）。</p>\n"
                },
                {
                  "id": "class-c-031-stage-4",
                  "number": 4,
                  "title": "网格双指针转换验证",
                  "leads": [],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 用一次临时编译检查二维数组名能否直接初始化双重指针。</p>\n<ol>\n<li>在个人副本中先把4×4网格的 <code>const</code> 去掉，再临时尝试用 <code>int** pp = ir_grid;</code>（使用新变量名 <code>pp</code>，避免与已有首元素指针 <code>p</code> 重名）声明双重指针；编译并截取该语句与编译报错同屏画面。</li>\n<li>将该临时语句注释掉，在旁边用一行注释说明二维数组名所指向的对象（一整行连续4个int）与 <code>int**</code> 所指向的对象（一个int*指针）有何不同。</li>\n</ol>\n<p><strong>本阶段提交：</strong> <code>二维数组指针试验.png</code>（同屏显示临时语句、一行类型差异注释及编译器报错信息）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-032",
              "caseId": "c-032",
              "label": "案例 32",
              "title": "C风格指令处理",
              "taskId": "t-p04-b02",
              "forms": [
                "复制后运行、测试与对照",
                "改写并运行"
              ],
              "plan": "先运行整条控制指令的比较程序，再改写指定指令并进行逐字符核对。使用匹配、不匹配等输入对照实际分支，结合字符数组、结束符与内容比较，确认程序判断的是文字内容而非两个存储地址。",
              "cardCaption": [
                "核对状态查询指令",
                "C 风格字符串"
              ],
              "background": [
                {
                  "html": "<p>传感器控制端会收到 <code>QUERY_STATUS</code> 等字符指令，程序需要把整条输入与约定指令比较，再决定是否执行状态查询。</p>\n<p>字符数组保存的是一串字符，而数组名参与比较时涉及地址；先弄清结束符和逐字符内容，才能判断两条指令是否真正相同。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "字符数组、结束符与strcmp"
                }
              ],
              "stages": [
                {
                  "id": "class-c-032-stage-1",
                  "number": 1,
                  "title": "基础控制指令对比",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 先用标准库比较两组输入，观察匹配与不匹配的分支。</p>\n<ol>\n<li>复制下方程序。把结果标题改为“校验员[本人姓名]的指令处理结果”，保留原有 <code>strcmp</code> 与判断逻辑。</li>\n<li>分别输入 <code>QUERY_STATUS</code> 与 <code>RESET</code> 运行，核对前者被识别、后者进入未知指令分支。截取比较语句与两次结果。</li>\n</ol>\n<h5>本阶段案例代码：C风格传感器指令</h5>\n<pre><code class=\"language-cpp\">// 处理C风格的字符串指令\n\n#include &lt;iostream&gt;\n#include &lt;cstring&gt; // 必须包含此头文件以使用 strcmp 等C风格字符串工具\n\nint main() {\n    // 定义一个字符数组来存储C风格字符串\n    //    大小设为50，确保有足够的空间存放指令和结尾的空字符&#39;\\0&#39;\n    char command[50];\n\n    // 提示并接收用户输入的指令\n    std::cout &lt;&lt; &quot;请输入传感器指令 (例如 QUERY_STATUS): &quot;;\n    // std::cin 会读取一个单词，并在存入 command 数组后自动添加 &#39;\\0&#39;\n    std::cin &gt;&gt; command;\n\n    // 比较指令字符串\n    //    我们不能直接用 command == &quot;QUERY_STATUS&quot; 来比较，\n    //    因为那比较的是内存地址，而不是字符串内容\n    //    必须使用 strcmp (string compare) 工具\n    //    - 如果两个字符串完全相同，strcmp 返回 0\n    //    - 如果第一个字符串字典序大于第二个，返回正数\n    //    - 如果第一个字符串字典序小于第二个，返回负数\n    int compare_result = strcmp(command, &quot;QUERY_STATUS&quot;);\n\n    std::cout &lt;&lt; &quot;\\n--- 指令处理结果 ---&quot; &lt;&lt; std::endl;\n    // 根据比较结果进行判断\n    if (compare_result == 0) {\n        std::cout &lt;&lt; &quot;状态查询指令 [QUERY_STATUS] 已被识别。&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;正在返回传感器状态...&quot; &lt;&lt; std::endl;\n    } else {\n        std::cout &lt;&lt; &quot;接收到未知指令: [&quot; &lt;&lt; command &lt;&lt; &quot;]&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;无操作被执行。&quot; &lt;&lt; std::endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-8aa89f47a268.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>指令比较源码.png</code>（输入、<code>strcmp</code> 和本人标题）、<code>指令匹配运行.png</code> 与 <code>未知指令运行.png</code>（两种输入结果）。</p>\n"
                },
                {
                  "id": "class-c-032-stage-2",
                  "number": 2,
                  "title": "控制指令逐字符比对",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 在上一阶段程序上按给定骨架手动比较字符，检验匹配和少一位两种输入。</p>\n<ol>\n<li>替换原程序中的 <code>strcmp</code> 调用，改用下方逐字符比较骨架，仅补全循环内的两处 <code>// TODO</code>：下标 <code>i</code> 处的字符不相等时立即判定不匹配并跳出循环；遇到结束符 <code>\\0</code> 时停止继续后移。</li>\n<li>保留原来的成功与失败提示，分别输入 <code>QUERY_STATUS</code> 和少一位的 <code>QUERY_STATU</code> 运行，确认少一位时绝不会被误判为成功。</li>\n<li>将源码与两次运行结果同屏截图，并在源码上<strong>用红框圈出检查字符串结束符 <code>&#39;\\0&#39;</code> 的判断条件</strong>。</li>\n</ol>\n<h5>本阶段改写骨架：手动逐字符比对</h5>\n<pre><code class=\"language-cpp\">    const char target[] = &quot;QUERY_STATUS&quot;;\n    bool is_same = true;\n    for (int i = 0; ; ++i) {\n        // TODO 1：若 command[i] 与 target[i] 不相等，将 is_same 设为 false 并 break。\n        // TODO 2：若已经到达结束符 &#39;\\0&#39;，说明前面全部相等且同时结束，直接 break。\n    }\n    int compare_result = is_same ? 0 : 1;\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>逐字符比较源码与运行.png</code>（同屏显示红框标注的结束符判断、循环比对语句，以及完整指令与少一位指令的运行对照）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-033",
              "caseId": "c-033",
              "label": "案例 33",
              "title": "传感器参数解析",
              "taskId": "t-p04-b02",
              "forms": [
                "复制后运行、扩充并运行"
              ],
              "plan": "先检查一行配置文字中动作、参数名和数值的提取，再在原文副本中逐字符把空格替换为下划线。分别保存原始文本、三段字段和清洗后整行结果，区分“取出字段”与“改变原文”，确认原解析功能仍然正确。",
              "cardCaption": [
                "拆解传感器设置命令",
                "std::string"
              ],
              "background": [
                {
                  "html": "<p>传感器除了接收整条查询指令，还会接收包含动作、参数名和数值的配置文字，例如设置雷达量程。只判断整行是否相同，无法取出后续计算需要的字段；文本中的空格与待替换内容也会影响记录的统一。</p>\n<p>本次处理一行给定的配置指令，既要定位并提取三项字段，也要按要求清洗和替换原文本。取出的数据与最终整行文字是否对应，怎样避免在清理文字时破坏原本需要保留的参数？</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "string对象与查找位置"
                },
                {
                  "title": "find、substr与字符遍历"
                }
              ],
              "stages": [
                {
                  "id": "class-c-033-stage-1",
                  "number": 1,
                  "title": "传感器参数清洗替换",
                  "leads": [
                    {
                      "html": "<p>配置文字中的空格既用于分隔字段，也可能影响统一记录。分别核对指令名、参数名和数值的提取结果，再清理原始文本，区分字段拆分与整行改写。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：复制后运行、扩充并运行。</strong> 保留原版的三段解析，在个人副本中增加空格替换结果。</p>\n<ol>\n<li>复制下方程序并运行，核对解析出的指令名、参数名和参数值；将输出标题加上“分析师[本人姓名]”。</li>\n<li>在原始指令的一个副本中逐字符遍历，把所有空格替换为下划线；不要用截取后拼接代替逐字符修改。输出清洗后的完整字符串，应为 <code>SET_PARAM_lidar_range_100</code>。</li>\n<li>截取原有 <code>find</code>、<code>substr</code> 和新增遍历修改语句，以及三段解析与清洗结果。</li>\n</ol>\n<h5>本阶段案例代码：传感器参数解析</h5>\n<pre><code class=\"language-cpp\">// 使用 std::string 类解析复杂的传感器参数指令\n\n#include &lt;iostream&gt;\n#include &lt;string&gt; // 必须包含此头文件以使用 std::string\n\nint main() {\n    // 定义一个 std::string 对象来存储完整的指令\n    std::string command = &quot;SET_PARAM lidar_range 100&quot;;\n    std::cout &lt;&lt; &quot;原始指令: \\&quot;&quot; &lt;&lt; command &lt;&lt; &quot;\\&quot;&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;----------------------------------------&quot; &lt;&lt; std::endl;\n\n    // 开始解析\n\n    // 查找第一个空格的位置\n    //    .find() 会返回找到的第一个字符的索引，如果找不到则返回一个特殊值\n    size_t pos1 = command.find(&#39; &#39;);\n\n    // 提取第一个部分（指令名）\n    //    .substr(起始索引, 长度) 用于截取子字符串\n    std::string command_name = command.substr(0, pos1);\n\n    // 查找第二个空格的位置\n    //    .find() 的第二个参数是查找的起始位置，我们从第一个空格之后开始找\n    size_t pos2 = command.find(&#39; &#39;, pos1 + 1);\n\n    // 提取第二个部分（参数名）\n    //    子字符串的起始位置是第一个空格之后 (pos1 + 1)\n    //    长度是第二个空格的位置减去第一个空格后的位置\n    std::string param_name = command.substr(pos1 + 1, pos2 - (pos1 + 1));\n\n    // 提取第三个部分（参数值）\n    //    .substr() 如果只给一个参数（起始索引），它会一直截取到字符串末尾\n    std::string param_value = command.substr(pos2 + 1);\n\n    // 打印解析结果\n    std::cout &lt;&lt; &quot;解析结果:&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 指令名: &quot; &lt;&lt; command_name &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 参数名: &quot; &lt;&lt; param_name &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 参数值: &quot; &lt;&lt; param_value &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-eae0a7b78a91.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>参数解析与清洗源码.png</code>（三段解析及逐字符替换）和 <code>参数解析运行.png</code>（本人标题、三段结果及清洗后字符串）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-034",
              "caseId": "c-034",
              "label": "案例 34",
              "title": "故障码列表管理",
              "taskId": "t-p04-b02",
              "forms": [
                "复制后运行、扩充并运行"
              ],
              "plan": "先运行添加、移除末项和查看列表的交互，再补齐清空功能。用一串连续操作观察容器内容与数量的变化，并核对空列表下的处理，保证菜单提示、实际数据和再次查看的结果相互一致。",
              "cardCaption": [
                "诊断列表的交互操作",
                "vector"
              ],
              "background": [
                {
                  "html": "<p>车辆诊断过程中，故障码会陆续出现，也可能被撤销；固定长度数组难以方便地表示这种变化。</p>\n<p>本案例要求交互式添加、移除末项、查看当前列表，并补上清空全部记录的操作。由此学习可增删容器及遍历结果的核对方法。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "vector的增删、清空与遍历"
                }
              ],
              "stages": [
                {
                  "id": "class-c-034-stage-1",
                  "number": 1,
                  "title": "故障码集合动态管理",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、扩充并运行。</strong> 先运行现有指令，再补上工单要求的清空指令。</p>\n<ol>\n<li>复制下方程序，把标题改为“诊断技师[本人姓名]的故障码列表”；先依次输入 <code>add 101</code>、<code>add 205</code>、<code>show</code>、<code>remove</code>、<code>show</code>、<code>quit</code>，核对原有四种指令正常工作。</li>\n<li>在显示帮助的文字中加入 <code>clear</code>，并在指令分支里实现清空整个列表的操作；清空后再次 <code>show</code>，应显示列表为空、总数0。保留原有 <code>remove</code> 仅移除末项的行为，区分两种操作。</li>\n<li>另起一次运行，依次输入 <code>add 101</code>、<code>add 205</code>、<code>clear</code>、<code>show</code>、<code>quit</code>；截取新增分支和完整输入输出。</li>\n</ol>\n<h5>本阶段案例代码：故障码动态列表</h5>\n<pre><code class=\"language-cpp\">// 使用 std::vector 管理动态的故障码列表\n\n#include &lt;iostream&gt;\n#include &lt;vector&gt;   // 必须包含此头文件以使用 std::vector\n#include &lt;string&gt;   // 包含此头文件以使用 std::string\n\nint main() {\n    // 定义一个 std::vector&lt;int&gt; 来存储故障码\n    //    它初始为空，大小为0\n    std::vector&lt;int&gt; fault_codes;\n    std::string user_command;\n\n    std::cout &lt;&lt; &quot;--- 车载诊断系统 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;可用指令: add &lt;故障码&gt;, remove, show, quit&quot; &lt;&lt; std::endl;\n\n    // 启动一个循环，持续接收用户指令\n    while (true) {\n        std::cout &lt;&lt; &quot;\\n&gt; &quot;;\n        std::cin &gt;&gt; user_command;\n\n        // 根据用户指令，执行相应操作\n        if (user_command == &quot;add&quot;) {\n            int code;\n            std::cin &gt;&gt; code; // 读取要添加的故障码\n            fault_codes.push_back(code); // 使用 .push_back() 在末尾添加元素\n            std::cout &lt;&lt; &quot;成功添加故障码: &quot; &lt;&lt; code &lt;&lt; std::endl;\n\n        } else if (user_command == &quot;remove&quot;) {\n            if (fault_codes.empty()) { // 使用 .empty() 检查是否为空\n                std::cout &lt;&lt; &quot;错误: 故障列表已空，无法移除。&quot; &lt;&lt; std::endl;\n            } else {\n                int last_code = fault_codes.back(); // .back() 可以获取最后一个元素\n                fault_codes.pop_back(); // 使用 .pop_back() 移除最后一个元素\n                std::cout &lt;&lt; &quot;成功移除故障码: &quot; &lt;&lt; last_code &lt;&lt; std::endl;\n            }\n\n        } else if (user_command == &quot;show&quot;) {\n            std::cout &lt;&lt; &quot;--- 当前故障码列表 ---&quot; &lt;&lt; std::endl;\n            if (fault_codes.empty()) {\n                std::cout &lt;&lt; &quot;[列表为空]&quot; &lt;&lt; std::endl;\n            } else {\n                // 使用 .size() 获取当前元素数量来控制循环\n                for (size_t i = 0; i &lt; fault_codes.size(); ++i) {\n                    // 使用下标 [] 访问元素\n                    std::cout &lt;&lt; &quot;  - &quot; &lt;&lt; fault_codes[i] &lt;&lt; std::endl;\n                }\n            }\n            std::cout &lt;&lt; &quot;总数: &quot; &lt;&lt; fault_codes.size() &lt;&lt; std::endl;\n\n        } else if (user_command == &quot;quit&quot;) {\n            std::cout &lt;&lt; &quot;正在关闭诊断系统...&quot; &lt;&lt; std::endl;\n            break; // 退出循环\n\n        } else {\n            std::cout &lt;&lt; &quot;未知指令，请重新输入。&quot; &lt;&lt; std::endl;\n        }\n    }\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-7b51c12d484f.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>故障码管理源码.png</code>（原有指令与新增清空分支）和 <code>故障码清空运行.png</code>（本人标题、加入两项、清空、查看总数0）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p04-b03",
          "title": "场景对象建模",
          "kind": "基础任务 3",
          "cards": [
            {
              "id": "class-c-035",
              "caseId": "c-035",
              "label": "案例 35",
              "title": "雷达目标定义",
              "taskId": "t-p04-b03",
              "forms": [
                "复制后运行、扩充并运行",
                "扩充并运行",
                "仿写并运行"
              ],
              "plan": "先为目标扩充角度等属性并检查输出，再建立第二个目标并使用聚合初始化。随后完成嵌套信息与指针访问，对照每个对象的成员归属，确认编号、位置及嵌套数据没有在初始化和读取时错配。",
              "cardCaption": [
                "一个雷达目标的字段",
                "结构体"
              ],
              "background": [
                {
                  "html": "<p>雷达扫描中的一个目标不是单个数字，而是一组相互关联的编号、距离与速度。后续还要记录角度、建立第二个目标，并把学生信息作为嵌套结构练习。</p>\n<p>把相关数据组织为一个整体，才能避免各数组下标错位，并为成员访问、聚合初始化和嵌套数据作准备。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "结构体与成员访问"
                },
                {
                  "title": "聚合初始化、嵌套结构与结构体指针"
                }
              ],
              "stages": [
                {
                  "id": "class-c-035-stage-1",
                  "number": 1,
                  "title": "雷达目标属性扩充",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、扩充并运行。</strong> 以原版雷达目标为起点，增加角度字段与输出。</p>\n<ol>\n<li>复制下方程序，运行核对目标编号101、距离50.5和速度20.2。</li>\n<li>为 <code>RadarTarget</code> 新增角度成员；给 <code>target1</code> 赋15.0度并打印。标题改为“[本人姓名]的雷达目标”，运行确认四项属性都有值。</li>\n<li>截取结构体、新成员赋值与输出，以及含角度的运行结果。</li>\n</ol>\n<h5>本阶段案例代码：雷达目标</h5>\n<pre><code class=\"language-cpp\">// 使用 struct 定义一个雷达目标，聚合不同类型的数据\n\n#include &lt;iostream&gt;\n#include &lt;string&gt; // 包含头文件以支持后续拓展\n#include &lt;iomanip&gt; // 包含头文件用于格式化输出\n\n// 定义结构体类型 RadarTarget\n//    它像一个&quot;蓝图&quot;, 描述了一个雷达目标应该包含哪些数据\n// struct 关键字用于声明结构体\nstruct RadarTarget {\n    int id;\n    float distance;\n    float speed;\n}; // 注意：结构体定义末尾必须有分号;\n\nint main() {\n    // 创建一个 RadarTarget 类型的变量\n    //    就像我们创建 int a; 一样，这里创建了一个名为 target1 的雷达目标变量\n    RadarTarget target1;\n\n    // 使用点运算符 . 访问并为其成员赋值\n    //    点运算符是我们进入结构体内部，操作其成员的&quot;钥匙&quot;\n    target1.id = 101;\n    target1.distance = 50.5f; // f 后缀表示这是一个 float 类型的字面量\n    target1.speed = 20.2f;\n\n    // 打印出所有成员的值，进行验证\n    std::cout &lt;&lt; &quot;--- 雷达目标 1 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - ID: &quot; &lt;&lt; target1.id &lt;&lt; std::endl;\n    // 使用 iomanip 来格式化输出，使其更美观\n    std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(1); \n    std::cout &lt;&lt; &quot;  - 距离: &quot; &lt;&lt; target1.distance &lt;&lt; &quot; 米&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  - 速度: &quot; &lt;&lt; target1.speed &lt;&lt; &quot; m/s&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>雷达目标扩充源码.png</code>（四个成员及角度赋值）和 <code>雷达目标扩充运行.png</code>（本人标题与四项属性）。</p>\n"
                },
                {
                  "id": "class-c-035-stage-2",
                  "number": 2,
                  "title": "目标数据聚合初始化",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 在已扩充的结构体上再创建第二个雷达目标。</p>\n<ol>\n<li>用一条花括号聚合初始化语句建立第二个目标 <code>target2</code>：编号设为 <code>200 + 本人学号末两位</code>、距离 <code>75.0f</code>、速度 <code>-5.0f</code>、角度 <code>15.0f</code>；不要逐项用点号赋值。</li>\n<li>打印第二个目标的四项属性，核对输出与花括号内的初始化顺序一致；将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出聚合初始化的花括号 <code>{...}</code></strong>。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p04-ae9a2a35a1f3.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>第二目标源码与运行.png</code>（同屏显示红框标注的聚合初始化语句及含本人专属编号的四项属性输出）。</p>\n"
                },
                {
                  "id": "class-c-035-stage-3",
                  "number": 3,
                  "title": "嵌套目标信息指针访问",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 按给定骨架完成嵌套结构体定义与指针箭头访问。</p>\n<ol>\n<li>新建短程序并复制下方骨架代码，仅补全两处 <code>// TODO</code>：在 <code>ClassRoom</code> 结构体中内嵌一个含30个 <code>Student</code> 元素的数组 <code>students[30]</code>；再通过结构体指针 <code>p_class</code> 的 <code>-&gt;</code> 运算符访问 <code>students[0]</code> 的姓名与学号成员。</li>\n<li>将 <code>students[0]</code> 初始化为本人真实学号与姓名，编译运行。</li>\n<li>将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出指针箭头运算符 <code>-&gt;</code> 与点运算符 <code>.</code> 组合使用的那一处表达式</strong>。</li>\n</ol>\n<h5>本阶段骨架代码：嵌套结构体与指针访问</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n\nstruct Student {\n    long long id;\n    std::string name;\n};\n\nstruct ClassRoom {\n    // TODO 1：定义可存放30名 Student 的数组成员 students。\n};\n\nint main() {\n    ClassRoom my_class;\n    my_class.students[0] = {/* 本人学号 */, &quot;/* 本人姓名 */&quot;};\n\n    ClassRoom* p_class = &amp;my_class;\n    // TODO 2：只通过指针 p_class（使用 -&gt;）读取并打印第0名学生的姓名与学号。\n\n    return 0;\n}\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>嵌套结构体源码与运行.png</code>（同屏显示两层结构体定义、红框标注的指针成员访问表达式及本人姓名学号输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-036",
              "caseId": "c-036",
              "label": "案例 36",
              "title": "交通参与者建模",
              "taskId": "t-p04-b03",
              "forms": [
                "复制后运行",
                "扩充并运行",
                "改写并运行"
              ],
              "plan": "先运行已有车辆、行人的分类输出，再加入没有专属速度的路锥记录，最后按要求简化类型名称。用不同类别逐项核对类型标记、有效数据和读取分支，确保新增类型不会误读其他类别的成员。",
              "cardCaption": [
                "用类型决定读取哪个字段",
                "枚举与联合体"
              ],
              "background": [
                {
                  "html": "<p>雷达目标已经能把一组属性放在一个结构体里。交通场景还包含车辆、行人等不同类别：它们都要有编号和类型，但专属速度字段并不一样。</p>\n<p>后续阶段需要让程序先辨明类别，再读取对应的数据。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "枚举标签与联合"
                },
                {
                  "title": "类型别名"
                }
              ],
              "stages": [
                {
                  "id": "class-c-036-stage-1",
                  "number": 1,
                  "title": "交通参与者基类构建",
                  "leads": [
                    {
                      "html": "<p>先运行给定示例，核对不同类别的读取分支；再加入没有专属速度的路锥，检查类型标记是否仍能指导正确输出。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：复制后运行。</strong> 复制完整示例，观察标签与联合字段的配合。</p>\n<ol>\n<li>复制下方代码并运行，找到 <code>ObjectType</code>、<code>ParticipantData</code> 和 <code>TrafficParticipant</code> 三处定义，核对车辆和行人各输出自己的速度。</li>\n<li>截取三处类型定义与两个对象的初始化、分支输出；运行截图要能看到两种参与者的编号与速度。</li>\n</ol>\n<h5>本阶段案例代码：交通参与者</h5>\n<pre><code class=\"language-cpp\">// 结合enum, union, struct 建模不同类型的交通参与者\n\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n\n// 使用 enum class 定义一个强类型的枚举 ObjectType\n//    它为不同的参与者类型提供了清晰、安全的名称\nenum class ObjectType {\n    VEHICLE,\n    PEDESTRIAN,\n    CYCLIST\n};\n\n// 使用 union 定义一个数据联合 ParticipantData\n//    它的所有成员共享同一块内存空间\nunion ParticipantData {\n    float speed;\n    float walking_speed;\n    float cycling_speed;\n};\n\n// 使用 struct 定义最终的交通参与者结构\n//    它将类型标签(type)和共享的数据(data_union)聚合在一起\nstruct TrafficParticipant {\n    int id;\n    ObjectType type;\n    ParticipantData data_union;\n};\n\nint main() {\n    // 创建并初始化一个车辆对象\n    TrafficParticipant vehicle;\n    vehicle.id = 101;\n    // 记录交通参与者的类型\n    vehicle.type = ObjectType::VEHICLE;\n    // 根据类型给 union 中对应的成员赋值\n    vehicle.data_union.speed = 88.5f;\n\n    // 创建并初始化一个行人对象\n    TrafficParticipant pedestrian;\n    pedestrian.id = 202;\n    pedestrian.type = ObjectType::PEDESTRIAN;\n    pedestrian.data_union.walking_speed = 1.2f;\n\n    // 打印信息进行验证\n    std::cout &lt;&lt; &quot;--- 交通参与者信息 ---&quot; &lt;&lt; std::endl;\n\n    // 打印车辆信息\n    std::cout &lt;&lt; &quot;对象ID: &quot; &lt;&lt; vehicle.id &lt;&lt; std::endl;\n    // 使用 switch (或者 if-else) 来根据类型解释 union 中的数据\n    if (vehicle.type == ObjectType::VEHICLE) {\n        std::cout &lt;&lt; &quot;  类型: 车辆&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;  行驶速度: &quot; &lt;&lt; vehicle.data_union.speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n    }\n\n    std::cout &lt;&lt; &quot;------------------------&quot; &lt;&lt; std::endl;\n\n    // 打印行人信息\n    std::cout &lt;&lt; &quot;对象ID: &quot; &lt;&lt; pedestrian.id &lt;&lt; std::endl;\n    if (pedestrian.type == ObjectType::PEDESTRIAN) {\n        std::cout &lt;&lt; &quot;  类型: 行人&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;  步行速度: &quot; &lt;&lt; pedestrian.data_union.walking_speed &lt;&lt; &quot; m/s&quot; &lt;&lt; std::endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>参与者类型源码.png</code>（枚举、联合、结构体与初始化）和 <code>参与者原版运行.png</code>（车辆与行人的编号、类型及速度）。</p>\n"
                },
                {
                  "id": "class-c-036-stage-2",
                  "number": 2,
                  "title": "路锥类型扩充实例化",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 在现有类型列表和主程序中增加路锥，联合保持原样。</p>\n<ol>\n<li>为类型枚举增加 <code>CONE</code>；在 <code>main</code> 中创建一个路锥对象，给出编号与正确的类型标记，勿为它读取车辆、行人的速度字段。</li>\n<li>输出“[本人姓名]在仿真中添加路锥”及编号；运行核对原有车辆、行人输出仍正常。</li>\n<li>截取新增枚举项、路锥初始化和三种对象的输出。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p04-ae6b94185237.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>路锥扩充源码.png</code>（类型项与对象初始化）和 <code>路锥扩充运行.png</code>（本人标记、路锥编号及原有对象）。</p>\n"
                },
                {
                  "id": "class-c-036-stage-3",
                  "number": 3,
                  "title": "参与者类型别名简化",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 给现有结构体定义别名，改用短名称声明对象。</p>\n<ol>\n<li>在结构体定义后添加 <code>using Participant = TrafficParticipant;</code>；把 <code>main</code> 中所有参与者对象声明改为别名，保留对象字段与输出逻辑。</li>\n<li>编译运行，确认车辆、行人、路锥的输出与上一阶段一致；截取别名、改写后的对象声明和运行结果。</li>\n</ol>\n<p><strong>本阶段提交：</strong> <code>参与者别名源码.png</code>（别名与对象声明）和 <code>参与者别名运行.png</code>（三种对象结果）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p04-b04",
          "title": "障碍物数据解析",
          "kind": "基础任务 4",
          "cards": [
            {
              "id": "class-c-037",
              "caseId": "c-037",
              "label": "案例 37",
              "title": "日志文件读取",
              "taskId": "t-p04-b04",
              "forms": [
                "搭建与构建、复制后运行",
                "仿写并运行"
              ],
              "plan": "先核对日志位置、打开状态与三条障碍物记录的解析，再完成循环累加练习。保留正常读取及路径错误时的反馈，将文件是否打开、记录是否读全和统计是否正确分开检查。",
              "cardCaption": [
                "解析一行障碍物日志",
                "输入文件流"
              ],
              "background": [
                {
                  "html": "<p>感知程序退出后，障碍物数据仍需留在日志里供之后核验。</p>\n<p>现在先从文本文件读取三条已有记录，取出类型、距离和速度，并统计数量；文件名或工作目录不对时，也要能判断为什么读不到。这个场景引出文件路径、打开状态和循环提取。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "文件流、打开状态与循环提取"
                }
              ],
              "stages": [
                {
                  "id": "class-c-037-stage-1",
                  "number": 1,
                  "title": "障碍物日志解析提取",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 把文本日志与读取程序放在同一工作目录，用三条数据核验解析。</p>\n<ol>\n<li>在本次日期目录建立日志读取子文件夹，新建纯文本文件 <code>obstacles.log</code>，按下方三行数据逐行录入并保存；确认扩展名不是 <code>.log.txt</code>。</li>\n<li>将下方代码复制为同一子文件夹里的 <code>main.cpp</code>。从该文件夹启动程序，或在IDE的运行配置中把工作目录设为该文件夹；先运行并核对读出三条障碍物。须把解析完成的提示改为包含“数据核验员[本人姓名]”和实际障碍物数量；数量由 <code>count</code> 变量输出，不写死为3。本阶段三条记录应显示“共找到3个障碍物”，后续改读两条记录时应自动显示2。</li>\n<li>临时把日志文件改名，运行一次观察无法打开文件的提示；恢复原名并再次运行成功。截取日志内容、打开检查和成功解析结果，不把故障试验留下作为最终版本。</li>\n</ol>\n<h5>本阶段输入文件：障碍物日志</h5>\n<pre><code class=\"language-text\">Vehicle 50.5 10.2\nPedestrian 20.1 -1.5\nVehicle 150.8 0.0\n</code></pre>\n<h5>本阶段案例代码：日志读取</h5>\n<pre><code class=\"language-cpp\">// 使用 ifstream 读取并解析障碍物日志文件\n\n#include &lt;iostream&gt;\n#include &lt;fstream&gt;  // 必须包含此头文件以使用文件流\n#include &lt;string&gt;   // 包含此头文件以使用 std::string\n#include &lt;iomanip&gt;  // 包含此头文件用于格式化输出\n\n#ifndef OBSTACLE_LOG_PATH\n#define OBSTACLE_LOG_PATH &quot;obstacles.log&quot;\n#endif\n\nint main() {\n    // 创建输入文件流并打开日志文件\n    // CMake 构建时会注入文件的绝对路径；未注入时使用相对路径\n    std::ifstream log_file(OBSTACLE_LOG_PATH);\n\n    // 检查文件是否成功打开\n    //    这是一个非常重要的好习惯，可以防止因文件不存在或无权限而导致的程序错误\n    if (!log_file.is_open()) {\n        std::cerr &lt;&lt; &quot;错误: 无法打开日志文件 &quot;\n                  &lt;&lt; OBSTACLE_LOG_PATH &lt;&lt; std::endl;\n        return 1; // 返回一个非零值，表示程序异常退出\n    }\n\n    std::cout &lt;&lt; &quot;日志文件打开成功，开始解析数据...&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;----------------------------------------&quot; &lt;&lt; std::endl;\n\n    // 准备用于存储从文件中读取的数据的变量\n    std::string type;\n    double distance;\n    double speed;\n    int count = 0;\n\n    // 使用 while 循环逐个数据项读取文件，直到文件末尾\n    //    (log_file &gt;&gt; type &gt;&gt; distance &gt;&gt; speed) 这个表达式本身会返回一个状态，\n    //    当成功读取所有三项数据时，状态为真，循环继续;\n    //    当到达文件末尾或读取失败时，状态为假，循环结束\n    while (log_file &gt;&gt; type &gt;&gt; distance &gt;&gt; speed) {\n        count++;\n        std::cout &lt;&lt; &quot;  [障碍物 &quot; &lt;&lt; count &lt;&lt; &quot;]&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;    类型: &quot; &lt;&lt; type &lt;&lt; std::endl;\n        std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(1); // 格式化输出\n        std::cout &lt;&lt; &quot;    距离: &quot; &lt;&lt; distance &lt;&lt; &quot; m&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;    速度: &quot; &lt;&lt; speed &lt;&lt; &quot; m/s&quot; &lt;&lt; std::endl;\n    }\n\n    std::cout &lt;&lt; &quot;----------------------------------------&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;文件解析完成，共找到 &quot; &lt;&lt; count &lt;&lt; &quot; 个障碍物。&quot; &lt;&lt; std::endl;\n\n    // 关闭文件\n    //    虽然 ifstream 对象在离开作用域时会自动关闭文件（RAII特性），\n    //    但显式调用 .close() 是一个清晰的好习惯\n    log_file.close();\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-bbba57ed3b66.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>障碍物日志内容.png</code>（三行数据及文件名）、<code>日志读取源码.png</code>（打开检查、循环提取与本人提示）和 <code>日志解析运行.png</code>（三条记录及总数3）。</p>\n"
                },
                {
                  "id": "class-c-037-stage-2",
                  "number": 2,
                  "title": "文件数据循环累加",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 按给定骨架读取含个人学号尾数的文本文件并求累加和。</p>\n<ol>\n<li>在独立子文件夹亲手新建纯文本文件 <code>numbers.txt</code>（确认扩展名不是 <code>.txt.txt</code>），逐行写入四个整数：<code>3</code>、<code>5</code>、<code>-2</code> 以及 <strong><code>10 + 本人学号末两位</code></strong>。先心算这四个数的总和。</li>\n<li>复制下方骨架代码为 <code>main.cpp</code>，仅补全两处 <code>// TODO</code>：检查文件是否打开成功，再用 <code>while</code> 循环逐一提取整数并累加到 <code>total</code>。</li>\n<li>编译运行，核对程序输出的“核算员[本人姓名]的文件总和”与手算值一致（应为 <code>16 + 本人学号末两位</code>）；将 <code>numbers.txt</code>、源码与运行结果同屏截图，并在源码上<strong>用红框圈出 <code>while</code> 括号内的文件流提取表达式</strong>。</li>\n</ol>\n<h5>本阶段骨架代码：数字文件求和</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;fstream&gt;\n\nint main() {\n    std::ifstream file(&quot;numbers.txt&quot;);\n    // TODO 1：若 file 未能成功打开，打印错误提示并返回 1。\n\n    int number = 0;\n    int total = 0;\n    // TODO 2：用 while 循环从 file 持续读取整数到 number，并累加进 total。\n\n    std::cout &lt;&lt; &quot;核算员[本人姓名]的文件总和: &quot; &lt;&lt; total &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-78924b0c73d9.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>文件求和核验.png</code>（同屏显示四行个人数据文件、红框标注的流提取循环及总和运行结果）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-038",
              "caseId": "c-038",
              "label": "案例 38",
              "title": "障碍物信息保存",
              "taskId": "t-p04-b04",
              "forms": [
                "复制后运行、测试与对照",
                "改写并运行、测试与对照"
              ],
              "plan": "先在同一工作目录两次启动，以两行增至三行的日志验证追加。随后另用新文件保存三字段数据，核对两次运行后由一行增至两行，再用读取程序验证两条记录；分别保留每次控制台与文件内容，形成写入、保存、读取的核验闭环。",
              "cardCaption": [
                "两次运行的日志变化",
                "追加写入"
              ],
              "background": [
                {
                  "html": "<p>障碍物日志不仅要能读取，也要记录新的检测结果，供之后运行继续核验。已有写入程序会把内容保存到磁盘，但再次运行是否覆盖旧记录、生成的字段能否被读取程序识别，都需要实际检查。</p>\n<p>本次先连续运行原版观察追加行为，再把记录改成类型、距离与速度的标准格式。最终要用文件内容和读取结果一起证明：新记录确实保存下来，原有记录的处理符合要求，写入与读取能够衔接。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "输出文件流、追加模式与数据格式"
                }
              ],
              "stages": [
                {
                  "id": "class-c-038-stage-1",
                  "number": 1,
                  "title": "障碍物数据追加写入",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 用两次独立启动核验追加写入：第一次保存两条，第二次再追加一条。</p>\n<ol>\n<li>在本次日期目录建立独立的日志写入子文件夹，将下方程序复制为 <code>main.cpp</code>。确认运行时的工作目录；首次验证前该目录不应有 <code>detection_log.txt</code>，已有日志先另存备份，不覆盖其他实验成果。</li>\n<li>在个人副本中，将原“记录已保存”提示改为“记录员[本人姓名]已保存记录”，替换方括号内容为本人姓名；保留追加模式、交互读取、逐行写入及关闭文件的主体代码。</li>\n<li>第一次运行依次输入 <code>Vehicle</code>、<code>45.8</code>、<code>Cone</code>、<code>10.2</code>、<code>quit</code>，每项输入后按 Enter。退出后打开 <code>detection_log.txt</code>，核对两行分别为Vehicle（45.8m）与Cone（10.2m），保留本次运行及文件内容。</li>\n<li>保留日志，在同一工作目录再次启动同一程序，依次输入 <code>Pedestrian</code>、<code>25.0</code>、<code>quit</code>，每项输入后按 Enter。退出后应有三行：原两行不变，Pedestrian（25m）作为第三行追加。<code>quit</code>只在类型位置输入，不写入文件；输入 <code>25.0</code> 按程序默认格式保存为 <code>25m</code>。</li>\n<li>对照两次退出后的文件检查数量、顺序及原记录保留情况，并截取 <code>std::ios::app</code>、个人提示、交互输入与写入语句。不能只以“记录已保存”的提示作为追加成功的证据。</li>\n</ol>\n<h5>本阶段案例代码：障碍物信息追加保存</h5>\n<pre><code class=\"language-cpp\">// 使用 ofstream 以追加模式将障碍物信息写入文件\n\n#include &lt;iostream&gt;\n#include &lt;fstream&gt;  // 必须包含此头文件以使用文件流\n#include &lt;string&gt;   // 包含此头文件以使用 std::string\n\nint main() {\n    // 定义一个 ofstream (output file stream) 对象\n    // 第二个参数 std::ios::app 使文件以追加模式打开\n    //    如果文件不存在，它会被创建;如果已存在，新内容将写入到文件末尾\n    std::ofstream log_file(&quot;detection_log.txt&quot;, std::ios::app);\n\n    // 检查文件是否成功打开以供写入\n    if (!log_file.is_open()) {\n        std::cerr &lt;&lt; &quot;错误: 无法打开或创建日志文件 detection_log.txt&quot; &lt;&lt; std::endl;\n        return 1; // 异常退出\n    }\n\n    std::cout &lt;&lt; &quot;--- 障碍物检测与记录系统 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;新的检测结果将被记录到 &#39;detection_log.txt&#39; 文件中。&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;请输入障碍物类型 (输入 &#39;quit&#39; 结束): &quot;;\n\n    // 准备用于接收用户输入的变量\n    std::string type;\n    double distance;\n\n    // 启动一个循环，持续接收用户输入并写入文件\n    while (std::cin &gt;&gt; type &amp;&amp; type != &quot;quit&quot;) {\n        std::cout &lt;&lt; &quot;请输入该障碍物的距离 (米): &quot;;\n        std::cin &gt;&gt; distance;\n\n        // 将格式化的数据写入文件\n        //    操作方式与 std::cout 完全一样！\n        log_file &lt;&lt; &quot;类型: &quot; &lt;&lt; type &lt;&lt; &quot;, 距离: &quot; &lt;&lt; distance &lt;&lt; &quot;m&quot; &lt;&lt; std::endl;\n\n        std::cout &lt;&lt; &quot;  -&gt; 记录已保存！&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;\\n请输入下一个障碍物类型 (输入 &#39;quit&#39; 结束): &quot;;\n    }\n\n    // 关闭文件，确保所有缓冲区中的数据都被写入磁盘\n    log_file.close();\n\n    std::cout &lt;&lt; &quot;\\n系统已退出。所有检测记录已保存到 detection_log.txt。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>两次运行的文本效果</h5>\n<p>以下 <code>[本人姓名]</code> 在个人程序中替换为实际姓名；输入与日志内容按给定数据核对。</p>\n<p><strong>第1次运行：控制台交互</strong></p>\n<pre><code class=\"language-text\">--- 障碍物检测与记录系统 ---\n新的检测结果将被记录到 &#39;detection_log.txt&#39; 文件中。\n请输入障碍物类型 (输入 &#39;quit&#39; 结束): Vehicle\n请输入该障碍物的距离 (米): 45.8\n  -&gt; 记录员[本人姓名]已保存记录\n\n请输入下一个障碍物类型 (输入 &#39;quit&#39; 结束): Cone\n请输入该障碍物的距离 (米): 10.2\n  -&gt; 记录员[本人姓名]已保存记录\n\n请输入下一个障碍物类型 (输入 &#39;quit&#39; 结束): quit\n\n系统已退出。所有检测记录已保存到 detection_log.txt。\n</code></pre>\n<p><strong>第1次退出后的 <code>detection_log.txt</code></strong></p>\n<pre><code class=\"language-text\">类型: Vehicle, 距离: 45.8m\n类型: Cone, 距离: 10.2m\n</code></pre>\n<p><strong>第2次运行：控制台交互</strong></p>\n<pre><code class=\"language-text\">--- 障碍物检测与记录系统 ---\n新的检测结果将被记录到 &#39;detection_log.txt&#39; 文件中。\n请输入障碍物类型 (输入 &#39;quit&#39; 结束): Pedestrian\n请输入该障碍物的距离 (米): 25.0\n  -&gt; 记录员[本人姓名]已保存记录\n\n请输入下一个障碍物类型 (输入 &#39;quit&#39; 结束): quit\n\n系统已退出。所有检测记录已保存到 detection_log.txt。\n</code></pre>\n<p><strong>第2次退出后的 <code>detection_log.txt</code></strong></p>\n<pre><code class=\"language-text\">类型: Vehicle, 距离: 45.8m\n类型: Cone, 距离: 10.2m\n类型: Pedestrian, 距离: 25m\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-2fa2c1b56c42.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>障碍物追加源码.png</code>（追加打开、写入与本人提示）、<code>障碍物追加记录.png</code>（第一次两行、第二次三行的对照）和 <code>障碍物追加运行.png</code>（两次启动、输入、本人提示与退出过程）。两次记录可同屏展示或分别截图，分图时在文件名后加1、2。</p>\n"
                },
                {
                  "id": "class-c-038-stage-2",
                  "number": 2,
                  "title": "标准化数据集生成",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行、测试与对照。</strong> 在原有追加写入程序上，把格式化说明文字改成可供三字段读取的纯数据。</p>\n<ol>\n<li>在上一阶段个人副本中增加速度输入；将每条记录改写为“类型 距离 速度”三个字段，以空格分隔，不写“类型：”“距离：”等说明文字。原版的追加模式和关闭文件流程保留。</li>\n<li>为标准化结果使用一个新的输出文件名，避免前一阶段带说明文字的旧记录混入。运行两次，分别写入 <code>Vehicle 50.5 10.2</code> 与 <code>Pedestrian 20.1 -1.5</code>，核对文件共有两行。</li>\n<li>将这个文件用于本次的读取程序，确认能解析两条完整记录；若文件名不同，调整读取程序的文件名或复制为它期待的文件名。保留上一阶段已加入的本人提示。</li>\n<li>截取新的三字段输入与写入语句、纯数据文件，以及读取程序的两条解析结果。</li>\n</ol>\n<h5>两次运行的文本效果</h5>\n<p>以下使用 <code>standard_obstacles.log</code> 作为新文件名示例；仍可按上述任务要求自行命名。按增加速度提示后的个人程序展示，<code>[本人姓名]</code>替换为实际姓名；文件只保存三字段数据，提示语不写入文件。</p>\n<p><strong>第1次运行：控制台交互</strong></p>\n<pre><code class=\"language-text\">--- 障碍物检测与记录系统 ---\n新的检测结果将被记录到 &#39;standard_obstacles.log&#39; 文件中。\n请输入障碍物类型 (输入 &#39;quit&#39; 结束): Vehicle\n请输入该障碍物的距离 (米): 50.5\n请输入该障碍物的速度 (m/s): 10.2\n  -&gt; 记录员[本人姓名]已保存记录\n\n请输入下一个障碍物类型 (输入 &#39;quit&#39; 结束): quit\n\n系统已退出。所有检测记录已保存到 standard_obstacles.log。\n</code></pre>\n<p><strong>第1次退出后的 <code>standard_obstacles.log</code></strong></p>\n<pre><code class=\"language-text\">Vehicle 50.5 10.2\n</code></pre>\n<p><strong>第2次运行：控制台交互</strong></p>\n<pre><code class=\"language-text\">--- 障碍物检测与记录系统 ---\n新的检测结果将被记录到 &#39;standard_obstacles.log&#39; 文件中。\n请输入障碍物类型 (输入 &#39;quit&#39; 结束): Pedestrian\n请输入该障碍物的距离 (米): 20.1\n请输入该障碍物的速度 (m/s): -1.5\n  -&gt; 记录员[本人姓名]已保存记录\n\n请输入下一个障碍物类型 (输入 &#39;quit&#39; 结束): quit\n\n系统已退出。所有检测记录已保存到 standard_obstacles.log。\n</code></pre>\n<p><strong>第2次退出后的 <code>standard_obstacles.log</code></strong></p>\n<pre><code class=\"language-text\">Vehicle 50.5 10.2\nPedestrian 20.1 -1.5\n</code></pre>\n<p><strong>第二次写入后，读取程序的输出</strong></p>\n<pre><code class=\"language-text\">日志文件打开成功，开始解析数据...\n----------------------------------------\n  [障碍物 1]\n    类型: Vehicle\n    距离: 50.5 m\n    速度: 10.2 m/s\n  [障碍物 2]\n    类型: Pedestrian\n    距离: 20.1 m\n    速度: -1.5 m/s\n----------------------------------------\n文件解析完成，共找到 2 个障碍物。\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-fcd16746caaa.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>标准数据写入源码.png</code>（三字段输入与纯数据写入）、<code>标准障碍物数据.png</code>（两行纯数据）和 <code>标准数据解析运行.png</code>（两条记录成功读取）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p04-capstone",
          "title": "感知融合模块设计",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-d1",
              "caseId": "c-ext-d1",
              "label": "拓展案例 D1",
              "title": "3D坐标变换",
              "taskId": "t-p04-capstone",
              "forms": [
                "搭建与构建、改写并运行"
              ],
              "plan": "先完成坐标变换工程并以给定基准点核验90度旋转，再换用个人输入检查结果是否相应变化。把原坐标、变换条件和新坐标一起记录，确认变化来自实际运算，并保留构建与核验依据。",
              "cardCaption": [
                "三维点的绕轴旋转",
                "Eigen"
              ],
              "background": [
                {
                  "html": "<p>感知设备测得的目标坐标常要转换到车辆使用的坐标系。这个拓展案例让点绕Z轴旋转，先用(1,0,0)核对90度变换，再换输入验证结果随点变化。</p>\n<p>向量、旋转矩阵和矩阵乘法为这个过程提供直接的数学表达。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "Eigen依赖、向量与旋转矩阵"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-d1-stage-1",
                  "number": 1,
                  "title": "3D坐标变换",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、改写并运行。</strong> 先让原版90度旋转可运行，再核验另一组输入。</p>\n<ol>\n<li>在本次日期目录建立坐标变换工程子文件夹，复制下方 <code>CMakeLists.txt</code> 和 <code>main.cpp</code>。在IDE中打开该工程并配置、构建；确认输出中确实生成可执行程序，没有因未找到Eigen而跳过目标。</li>\n<li>运行原版，核对点(1,0,0)绕Z轴旋转90度后，结果接近(0,1,0)。浮点计算出现极小的非零值可以视为0；截取原点、矩阵及旋转结果。</li>\n<li>在个人副本中把原始点改为(2,0,0)，再运行核对结果接近(0,2,0)；给输出标题增加“坐标核验员[本人姓名]”。保留矩阵构造与相乘的主体语句。</li>\n<li>截取构建配置、点和角度、矩阵乘法语句，以及本人标题与新结果。</li>\n</ol>\n<h5>本阶段构建配置：坐标变换</h5>\n<pre><code class=\"language-cmake\">cmake_minimum_required(VERSION 3.16)\nproject(simulation_app LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nfind_package(Eigen3 3.3 QUIET NO_MODULE)\n\nif(NOT Eigen3_FOUND)\n    message(STATUS &quot;Eigen3 unavailable: target skipped&quot;)\n    return()\nendif()\n\nadd_executable(simulation_app main.cpp)\ntarget_link_libraries(simulation_app PRIVATE Eigen3::Eigen)\n</code></pre>\n<h5>本阶段案例代码：三维坐标变换</h5>\n<pre><code class=\"language-cpp\">// 使用Eigen库进行3D坐标变换\n\n#include &lt;iostream&gt;\n#include &lt;cmath&gt; // 用于 M_PI (圆周率) 和三角函数\n\n// 引入 Eigen 的主头文件\n#include &lt;Eigen/Dense&gt;\n\nint main() {\n    // 定义一个三维点向量\n    //    Vector3d 是 Eigen::Matrix&lt;double, 3, 1&gt; 的别名\n    Eigen::Vector3d point(1.0, 0.0, 0.0);\n\n    // 定义旋转角度 (90度) 并转换为弧度\n    double angle_degrees = 90.0;\n    double angle_radians = angle_degrees * M_PI / 180.0;\n\n    // 创建绕Z轴的旋转矩阵\n    //    Matrix3d 是 Eigen::Matrix&lt;double, 3, 3&gt; 的别名\n    Eigen::Matrix3d rotation_matrix;\n    // 使用逗号初始化器，按行优先顺序填充矩阵\n    rotation_matrix &lt;&lt; cos(angle_radians), -sin(angle_radians), 0,\n                       sin(angle_radians),  cos(angle_radians), 0,\n                       0,                   0,                  1;\n\n    // 执行坐标变换：旋转后的点 = 旋转矩阵 * 原始点\n    Eigen::Vector3d rotated_point = rotation_matrix * point;\n\n    // 打印结果\n    std::cout &lt;&lt; &quot;--- 3D坐标变换 (绕Z轴旋转90度) ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;原始点坐标 P:\\n&quot; &lt;&lt; point &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;\\n旋转矩阵 Rz(90):\\n&quot; &lt;&lt; rotation_matrix &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;\\n旋转后点坐标 P&#39; = Rz * P:\\n&quot; &lt;&lt; rotated_point &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p04-e7d40f870410.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>坐标变换构建配置.png</code>（Eigen依赖与生成目标）、<code>坐标变换源码.png</code>（点、角度、矩阵乘法及本人标题）和 <code>坐标变换运行.png</code>（原版与改写后的关键结果，可分张）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-d2",
              "caseId": "c-ext-d2",
              "label": "拓展案例 D2",
              "title": "摄像头图像显示",
              "taskId": "t-p04-capstone",
              "forms": [
                "搭建与构建、改写并运行"
              ],
              "plan": "先将配套道路图放入正确位置，完成图像库链接并检查加载失败提示；再运行带个人标题的显示窗口，按键保存图像副本。核对原图、窗口内容与生成文件，确认显示和保存两条功能链都实际完成。",
              "cardCaption": [
                "从道路图片到显示窗口",
                "OpenCV"
              ],
              "background": [
                {
                  "html": "<p>坐标数据之外，感知系统还会处理道路图像。拓展案例从文件加载配套道路图，显示在窗口，并在按键后保存一份图像副本。</p>\n<p>要让这条链路运行，先认识图像矩阵、加载失败检查和窗口显示的关系。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "OpenCV依赖、图像矩阵与窗口"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-d2-stage-1",
                  "number": 1,
                  "title": "摄像头图像显示",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、改写并运行。</strong> 用配套道路图验证加载和显示，再保存一份图像副本。</p>\n<ol>\n<li>在本次日期目录建立图像显示工程子文件夹，复制下方 <code>CMakeLists.txt</code> 和 <code>main.cpp</code>，并从<a href=\"downloads/materials/c-ext-d2/road.jpg\">配套道路图</a>复制 <code>road.jpg</code> 到同一文件夹。确认三个文件名和扩展名准确。</li>\n<li>在IDE中配置、构建并运行，确认确实生成可执行程序，且窗口显示道路图像。将 <code>Camera View</code> 窗口标题改为含本人姓名的标题；关闭前截取可见的图像窗口。</li>\n<li>在图像窗口按 <code>s</code>，核对工程运行目录中生成 <code>saved_road.png</code>；截取保存成功的终端提示与新图像文件。再临时改错图片文件名运行一次，观察加载失败信息，随后恢复正确名称。</li>\n<li>截取OpenCV构建配置、图片读取与空图检查、窗口显示及按键保存的关键源码；截图应能对应本人窗口标题。</li>\n</ol>\n<h5>本阶段构建配置：图像显示</h5>\n<pre><code class=\"language-cmake\">cmake_minimum_required(VERSION 3.16)\nproject(simulation_app LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nfind_package(OpenCV QUIET COMPONENTS core imgcodecs highgui)\n\nif(NOT OpenCV_FOUND)\n    message(STATUS &quot;OpenCV unavailable: target skipped&quot;)\n    return()\nendif()\n\nadd_executable(simulation_app main.cpp)\ntarget_link_libraries(simulation_app PRIVATE ${OpenCV_LIBS})\ntarget_include_directories(simulation_app PRIVATE ${OpenCV_INCLUDE_DIRS})\ntarget_compile_definitions(simulation_app PRIVATE\n    ROAD_IMAGE_PATH=&quot;${CMAKE_CURRENT_SOURCE_DIR}/road.jpg&quot;)\n</code></pre>\n<h5>本阶段案例代码：道路图像显示</h5>\n<pre><code class=\"language-cpp\">// 使用OpenCV加载并显示摄像头图像\n\n// 包含 OpenCV 的主头文件\n//    这一个头文件通常就包含了大部分常用功能\n#include &lt;opencv2/opencv.hpp&gt;\n#include &lt;iostream&gt;\n\n#ifndef ROAD_IMAGE_PATH\n#define ROAD_IMAGE_PATH &quot;road.jpg&quot;\n#endif\n\nint main() {\n    // CMake 构建时会注入图片的绝对路径；未注入时使用相对路径\n    std::string image_path = ROAD_IMAGE_PATH;\n\n    // 使用 cv::imread 函数读取图像\n    //    它会自动解码图片文件，并将像素数据存入一个 cv::Mat 对象中\n    cv::Mat image = cv::imread(image_path);\n\n    // 检查图像是否加载成功\n    //    如果路径错误或文件损坏，cv::imread会返回一个空的Mat对象\n    if (image.empty()) {\n        std::cerr &lt;&lt; &quot;错误: 无法加载图像 &#39;&quot; &lt;&lt; image_path &lt;&lt; &quot;&#39;&quot; &lt;&lt; std::endl;\n        std::cerr &lt;&lt; &quot;请检查图片路径、文件格式和读取权限。&quot; &lt;&lt; std::endl;\n        return -1; // 异常退出\n    }\n\n    // 使用 cv::imshow 在一个窗口中显示图像\n    //    第一个参数 &quot;Camera View&quot; 是窗口的标题\n    //    第二个参数是要显示的 cv::Mat 对象\n    cv::imshow(&quot;Camera View&quot;, image);\n\n    // 等待用户按键，使窗口保持显示\n    //    cv::waitKey(0) 会让程序在此处暂停，无限期地等待键盘输入\n    //    cv::waitKey 使窗口保持显示；如果没有这一行，\n    //    程序会一闪而过，你根本看不到窗口\n    int key = cv::waitKey(0);\n\n    // (可选) 根据按键执行操作\n    if (key == &#39;s&#39; || key == &#39;S&#39;) {\n        cv::imwrite(&quot;saved_road.png&quot;, image);\n        std::cout &lt;&lt; &quot;图像已另存为 saved_road.png&quot; &lt;&lt; std::endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<p><img src=\"assets/classroom-effects/p04-7e5e490a0846.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>道路图构建配置.png</code>（OpenCV依赖、图片路径与生成目标）、<code>道路图源码.png</code>（读取、检查、显示、保存及本人标题）、<code>道路图窗口.png</code>（本人标题与图像）和 <code>道路图保存结果.png</code>（保存提示及生成的图片文件）。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "project-05",
      "number": 5,
      "title": "驾驶决策开发",
      "groups": [
        {
          "id": "t-p05-intro",
          "title": "驾驶决策功能拆分",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-e",
              "caseId": "c-ai-e",
              "label": "案例 E",
              "title": "AIGC核心功能实现",
              "taskId": "t-p05-intro",
              "forms": [
                "设计与建模、检索与核验"
              ],
              "plan": "提交目标速度的三段规则与完整提示词，用代表输入及50米、100米等边界核对生成函数。发现区间重叠、遗漏或数值不符时继续修订，并保留需求、代码与测试结果的对应记录，验证拆分后的函数能够独立检查。",
              "cardCaption": [
                "目标车速的边界测试",
                "50 m 与 100 m"
              ],
              "background": [
                {
                  "html": "<p>自适应巡航系统要根据当前车速与前车距离给出目标速度：距离充裕时加速，距离适中时保持，距离过近时减速。若把判断、计算和输出都堆在主程序里，后续很难单独核验边界。</p>\n<p>先让AIGC按三段规则生成目标速度函数，并用50米、100米等边界检查结果，借此引出面向过程的功能拆分。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "面向过程的功能拆分"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-e-stage-1",
                  "number": 1,
                  "title": "AIGC核心功能实现",
                  "leads": [],
                  "html": "<p><strong>任务形式：设计与建模、检索与核验。</strong> 用明确的输入、分段规则与测试值要求AIGC生成目标速度函数，再核对边界。</p>\n<ol>\n<li>向AIGC发送一条完整指令：请生成C++函数 <code>calculate_target_speed</code>，参数是当前车速 <code>current_speed</code>（km/h）与前车距离 <code>distance_to_front_car</code>（m）；前车距离大于100 m时目标速度为120 km/h，50—100 m（含两端）时保持当前车速，小于50 m时目标速度为当前车速的80%。要求它给函数和调用示例。</li>\n<li>把AI生成的函数与调用示例复制为个人程序并运行。用三组输入核对结果：<code>(80,150)</code>应得120、<code>(90,75)</code>应得90、<code>(100,40)</code>应得80；再测试距离恰好50与100时进入哪段。若AI把边界写错，提出具体修改要求并在个人程序中采用核验后的版本。</li>\n<li>截取本人指令、AI生成的函数、最终个人源码及五组运行结果；测试截图中应能看见50米和100米的边界结果。</li>\n</ol>\n<p><strong>本阶段提交：</strong> <code>目标速度提示与函数.png</code>（本人指令、生成的函数；如有边界错误，附修改要求，可分张）、<code>目标速度源码.png</code>（核验后函数与调用）和 <code>目标速度边界运行.png</code>（三组测试与50、100米边界结果）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p05-b01",
          "title": "自适应巡航模块实现",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-039",
              "caseId": "c-039",
              "label": "案例 39",
              "title": "刹车距离计算",
              "taskId": "t-p05-b01",
              "forms": [
                "复制后运行",
                "改写并运行",
                "仿写并运行",
                "重构与集成"
              ],
              "plan": "先核对固定减速度版本，再扩充减速度参数，比较同一车速在不同制动条件下的距离。随后增加动能计算并分离工程文件，核对声明、实现与调用，确保拆分后计算功能及运行结果仍与前面一致。",
              "cardCaption": [
                "把制动距离计算拆成函数",
                "声明与定义"
              ],
              "background": [
                {
                  "html": "<p>目标速度解决“应该跑多快”，遇到障碍时还要估算“停下来要走多远”。刹车距离由车速和减速度决定，主程序需要把车速交给计算函数，再接收以米为单位的结果。</p>\n<p>本案例先运行固定减速度的版本，后续阶段再让不同路况作为参数进入函数。同类计算随后还会扩展到动能，并拆成可联合构建的工程文件，检验功能扩充与文件组织是否影响原有结果。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "函数参数、返回值与调用"
                },
                {
                  "title": "函数声明、定义与分文件编译"
                }
              ],
              "stages": [
                {
                  "id": "class-c-039-stage-1",
                  "number": 1,
                  "title": "刹车距离原版运行",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行。</strong> 用单文件程序确认函数定义、实参传递和返回值接收的位置。</p>\n<ol>\n<li>复制下方程序并运行，找到 <code>calculate_braking_distance</code> 的形参、返回语句与 <code>main</code> 中的调用；确认输入60 km/h时返回约30.86 m。</li>\n<li>截取函数定义、调用语句和运行结果，为下一课时的参数改写保留个人副本。</li>\n</ol>\n<h5>本阶段案例代码：单文件刹车距离</h5>\n<pre><code class=\"language-cpp\">// 在单文件中定义并调用刹车距离计算函数\n\n#include &lt;iostream&gt;\n#include &lt;cmath&gt; // 为了使用 pow 函数\n\n// 函数定义\n// 功能： 计算刹车距离\n// 参数： speed_kmh - 车速 (km/h)\n// 返回： double - 刹车距离 (m)\ndouble calculate_braking_distance(double speed_kmh) {\n    // 定义一个常量表示固定减速度\n    const double DECELERATION = 4.5; // m/s^2\n\n    // 将速度从 km/h 转换为 m/s\n    double speed_mps = speed_kmh / 3.6;\n\n    // 应用物理公式计算距离\n    double distance = std::pow(speed_mps, 2) / (2 * DECELERATION);\n\n    // 返回计算结果\n    return distance;\n}\n\nint main() {\n    double current_speed = 60.0; // 假设当前车速为 60 km/h\n\n    // 调用函数并用一个变量接收返回值\n    double required_distance = calculate_braking_distance(current_speed);\n\n    std::cout &lt;&lt; &quot;在车速为 &quot; &lt;&lt; current_speed &lt;&lt; &quot; km/h 时， &quot;\n              &lt;&lt; &quot;最小刹车距离为： &quot; &lt;&lt; required_distance &lt;&lt; &quot; 米&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-bf90fa98faf3.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>刹车距离原版源码.png</code>（函数定义与调用）和 <code>刹车距离原版运行.png</code>（60 km/h与约30.86 m）。</p>\n"
                },
                {
                  "id": "class-c-039-stage-2",
                  "number": 2,
                  "title": "减速度参数动态引入",
                  "leads": [
                    {
                      "html": "<p>沿用能够运行的计算函数，加入由调用者提供的减速度。用同一车速对照不同制动条件，并同时核对函数声明、定义与调用参数。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 在上次的单文件个人副本中，把固定减速度改为调用者提供的参数。</p>\n<ol>\n<li>给刹车距离函数增加第二个参数 <code>double deceleration</code>，并用该参数替换函数内部的固定常量 <code>DECELERATION</code>；同步修改 <code>main</code> 中的调用。</li>\n<li>固定车速 <code>60.0</code> km/h，分别传入干燥路面 <code>4.5</code> 和紧急制动 <code>9.0</code>（m/s²）运行；核对前者约 <code>30.86</code> m、后者约 <code>15.43</code> m（减速度翻倍，刹车距离减半）。</li>\n<li>将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出函数头部新增的第二参数声明</strong>。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p05-e430f1daf168.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>减速度参数源码与运行.png</code>（同屏显示红框标注的双参数函数头、两次调用及4.5与9.0两组结果）。</p>\n"
                },
                {
                  "id": "class-c-039-stage-3",
                  "number": 3,
                  "title": "动能计算模块实现",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 按给定骨架完成动能函数的声明、定义和调用。</p>\n<ol>\n<li>在同一程序中加入下方骨架代码，补全两处 <code>// TODO</code>：在 <code>main</code> 上方声明 <code>calculate_kinetic_energy</code>，在 <code>main</code> 下方按公式 $E_k = 0.5 \\times m \\times v^2$ 实现函数体；并按下一步要求在 <code>main</code> 中添加调用及输出（不得改动参数名 <code>mass</code> 与 <code>velocity</code>）。</li>\n<li>在 <code>main</code> 中传入车辆质量 <code>1000.0</code> kg、本人测试速度 <code>10.0 + 本人学号末一位</code>（m/s），先手算 $500 \\times (10+\\text{末位})^2$ 的值，再运行输出“物理分析员[本人姓名]计算的动能”。</li>\n<li>将源码与运行窗口同屏截图，并在源码上<strong>用红框分别标出 <code>main</code> 上方的函数声明行与 <code>main</code> 下方的函数定义首行</strong>。</li>\n</ol>\n<h5>本阶段骨架代码：动能计算函数声明与定义</h5>\n<pre><code class=\"language-cpp\">// TODO 1：在 main 函数上方声明 double calculate_kinetic_energy(double mass, double velocity);\n\n// 在 main 函数内部补充调用：\n// double ke = calculate_kinetic_energy(1000.0, 10.0 + 本人学号末一位);\n\n// TODO 2：在 main 函数下方完成 calculate_kinetic_energy 的函数体定义（返回 0.5 * mass * velocity * velocity）。\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-4df7ae157c20.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>动能函数源码与运行.png</code>（同屏显示红框标注的声明与定义、调用语句，以及本人标题、手算一致的动能值和原有刹车距离结果）。</p>\n"
                },
                {
                  "id": "class-c-039-stage-4",
                  "number": 4,
                  "title": "计算模块工程分离",
                  "leads": [],
                  "html": "<p><strong>任务形式：重构与集成。</strong> 参考下方三文件结构，把个人副本中的两个计算函数迁到工具模块。</p>\n<ol>\n<li>在本次项目目录建立独立模块子文件夹，按下方结构新建 <code>main.cpp</code>、<code>utils.h</code>、<code>utils.cpp</code>。把个人副本中已完成的双参数刹车距离函数与动能函数声明放入 <code>utils.h</code>、函数定义放入 <code>utils.cpp</code>、调用放入 <code>main.cpp</code>。</li>\n<li>头文件保留包含卫士，<code>utils.cpp</code> 包含 <code>&quot;utils.h&quot;</code>；主程序只包含 <code>&quot;utils.h&quot;</code>，不再在 <code>main.cpp</code> 中保留两个计算函数的函数体。用 <code>g++ main.cpp utils.cpp -o simulation_app</code> 联合编译并运行。</li>\n<li>核对两项结果与分离前完全一致；将IDE/编辑器中的三文件视图与终端联合编译运行结果合并截取，并在截图中<strong>用红框圈出 <code>#ifndef UTILS_H</code> 包含卫士</strong>。</li>\n</ol>\n<h5>本阶段起点文件：主程序</h5>\n<pre><code class=\"language-cpp\">// 主程序，通过包含头文件来调用模块化后的函数\n\n#include &lt;iostream&gt;\n#include &quot;utils.h&quot; // 只需要包含头文件，就能知道函数的存在并调用它\n\nint main() {\n    double current_speed = 60.0;\n\n    double required_distance = calculate_braking_distance(current_speed);\n\n    std::cout &lt;&lt; &quot;在车速为 &quot; &lt;&lt; current_speed &lt;&lt; &quot; km/h 时， &quot;\n              &lt;&lt; &quot;最小刹车距离为： &quot; &lt;&lt; required_distance &lt;&lt; &quot; 米&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>本阶段起点文件：函数声明</h5>\n<pre><code class=\"language-cpp\">// 工具函数的头文件，只包含函数的&quot;声明&quot;或&quot;原型&quot;\n\n#ifndef UTILS_H\n#define UTILS_H\n\n// 声明一个计算刹车距离的函数\n// 告诉其他文件：有这样一个函数存在，它长什么样\ndouble calculate_braking_distance(double speed_kmh);\n\n#endif // UTILS_H\n</code></pre>\n<h5>本阶段起点文件：函数实现</h5>\n<pre><code class=\"language-cpp\">// 工具函数的源文件，包含函数的具体实现\n\n#include &quot;utils.h&quot;  // 包含自己的头文件，用于校验声明与实现是否一致\n#include &lt;cmath&gt;    // 包含实现所需的cmath库\n\n// 函数的完整定义\ndouble calculate_braking_distance(double speed_kmh) {\n    const double DECELERATION = 4.5;\n    double speed_mps = speed_kmh / 3.6;\n    double distance = std::pow(speed_mps, 2) / (2 * DECELERATION);\n    return distance;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-278fa80778d5.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>计算模块分离与运行.png</code>（同屏或分两张显示红框标注的 <code>utils.h</code> 包含卫士、<code>utils.cpp</code>、<code>main.cpp</code> 及终端联合编译命令与两项计算结果）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-040",
              "caseId": "c-040",
              "label": "案例 40",
              "title": "车辆轨迹预测",
              "taskId": "t-p05-b01",
              "forms": [
                "挖空并补全",
                "仿写并运行"
              ],
              "plan": "先用不同预测时长核验位置递归的终止条件与逐步更新，再完成数组求和的递归练习。将问题如何缩小、何时停止及最终结果放在一起检查，避免只核对一个正常输入而遗漏递归边界。",
              "cardCaption": [
                "逐秒推算车辆位置",
                "递归"
              ],
              "background": [
                {
                  "html": "<p>车辆轨迹预测要给出未来若干秒的位置。若每一步都遵循“根据当前速度前进一步，再预测剩余秒数”，就可以让同一个函数反复处理较小的问题；但必须有剩余秒数为0时的结束条件。</p>\n<p>本案例通过3秒和1秒结果检验递推与终止是否正确。随后再用数组求和练习检查相同的递归思路，区分每次处理的数据与停止递归的条件。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "函数调用栈、递推与终止条件"
                }
              ],
              "stages": [
                {
                  "id": "class-c-040-stage-1",
                  "number": 1,
                  "title": "车辆轨迹递归预测",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 在保留原版输入与输出的练习代码中完成递归的终止和递推。</p>\n<ol>\n<li>复制下方练习代码，在 <code>// TODO</code> 处补全剩余秒数为0时的返回、一步位移、下一秒位置与速度以及再次调用。每次递归使剩余秒数减少1，保留原有打印位置的语句。</li>\n<li>编译运行，核对调用显示3、2、1、0秒，最后位置为39 m；修改预测时长为1秒再核对结果11 m，最终保存3秒版本。</li>\n<li>截取终止条件、递推语句以及完整的调用顺序与最终位置。</li>\n</ol>\n<h5>本阶段练习代码：轨迹预测</h5>\n<pre><code class=\"language-cpp\">// 使用递归函数预测车辆的未来轨迹\n\n#include &lt;iostream&gt;\n\n// 函数声明 (可选，但良好的编程习惯)\ndouble predict_distance(double current_pos, double current_speed, double acceleration, int seconds_left);\n\nint main() {\n    double initial_position = 0.0;     // 初始位置 (m)\n    double initial_speed = 10.0;       // 初始速度 (m/s)\n    double constant_acceleration = 2.0; // 固定加速度 (m/s^2)\n    int prediction_time = 3;           // 预测未来3秒\n\n    std::cout &lt;&lt; &quot;--- 车辆轨迹预测 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;初始状态： 位置=&quot; &lt;&lt; initial_position &lt;&lt; &quot;m, 速度=&quot; &lt;&lt; initial_speed &lt;&lt; &quot;m/s&quot; &lt;&lt; std::endl;\n\n    // 调用递归函数\n    double final_position = predict_distance(initial_position, initial_speed, constant_acceleration, prediction_time);\n\n    std::cout &lt;&lt; &quot;\\n预测结果： &quot; &lt;&lt; prediction_time &lt;&lt; &quot;秒后， 车辆将到达位置 &quot; &lt;&lt; final_position &lt;&lt; &quot; 米&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n\n// 递归函数的定义\ndouble predict_distance(double current_pos, double current_speed, double acceleration, int seconds_left) {\n\n    std::cout &lt;&lt; &quot;正在计算剩余 &quot; &lt;&lt; seconds_left &lt;&lt; &quot; 秒... (当前位置： &quot; &lt;&lt; current_pos &lt;&lt; &quot;)&quot; &lt;&lt; std::endl;\n\n    // 终止条件 (Base Case): 当没有时间需要预测时，直接返回当前位置\n    if (seconds_left &lt;= 0) {\n        std::cout &lt;&lt; &quot;  -&gt; 命中终止条件，返回最终位置。&quot; &lt;&lt; std::endl;\n        // TODO 1：返回当前位置。\n    }\n\n    // 递推关系 (Recursive Step):\n\n    // a. 计算未来1秒内行驶的距离\n    //    公式：distance = v0*t + 0.5*a*t^2，且 t=1\n    // TODO 2：计算未来1秒的位移。\n\n    // b. 计算1秒后的新位置和新速度\n    // TODO 3：计算1秒后的新位置。\n    // TODO 4：计算1秒后的新速度。\n\n    // c. 调用自身，用新的状态去预测剩下的 (seconds_left - 1) 秒\n    // TODO 5：用新状态预测剩余秒数并返回结果。\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-bd683f179c10.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>轨迹递归源码.png</code>（终止、一步计算与递归调用）和 <code>轨迹递归运行.png</code>（3→0秒及39 m，另附1秒11 m结果）。</p>\n"
                },
                {
                  "id": "class-c-040-stage-2",
                  "number": 2,
                  "title": "数组数据递归求和",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 按给定骨架完成整数数组的递归求和与空数组边界核验。</p>\n<ol>\n<li>将下方骨架片段加入个人程序，仅补全 <code>sum_array</code> 中的两处 <code>// TODO</code>（不得使用 <code>for</code>/<code>while</code> 循环，必须通过 <code>arr + 1</code> 和 <code>size - 1</code> 递归调用自身）。</li>\n<li>在 <code>main</code> 中将测试数组 <code>data</code> 的最后一项改为 <code>10 + 本人学号末两位</code>（即 <code>{2, 4, 6, 10 + 学号末两位}</code>），先手算四项之和（应为 <code>22 + 学号末两位</code>），再运行输出“算法工程师[本人姓名]的递归求和结果”；同时核对长度为 <code>0</code> 时返回 <code>0</code>。</li>\n<li>将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出递归调用 <code>sum_array(arr + 1, size - 1)</code> 这一部分</strong>。</li>\n</ol>\n<h5>本阶段骨架代码：数组递归求和</h5>\n<pre><code class=\"language-cpp\">int sum_array(const int arr[], int size) {\n    if (size &lt;= 0) {\n        // TODO 1：长度为0或负数时返回 0。\n    }\n    // TODO 2：返回当前首元素 arr[0] 加上剩余部分 sum_array(arr + 1, size - 1) 的结果。\n}\n\n// 在 main 中补充测试：\n// int data[4] = {2, 4, 6, 10 + 本人学号末两位};\n// std::cout &lt;&lt; &quot;算法工程师[本人姓名]的递归求和结果: &quot; &lt;&lt; sum_array(data, 4) &lt;&lt; std::endl;\n// std::cout &lt;&lt; &quot;空数组求和结果: &quot; &lt;&lt; sum_array(data, 0) &lt;&lt; std::endl;\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-1411611a1d43.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>数组递归求和源码与运行.png</code>（同屏显示终止条件、红框标注的递推调用，以及本人标题、手算一致的四项和与空数组0）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-041",
              "caseId": "c-041",
              "label": "案例 41",
              "title": "数据归一化",
              "taskId": "t-p05-b01",
              "forms": [
                "复制后运行、测试与对照",
                "仿写并运行"
              ],
              "plan": "先对照调用前后的读数，确认引用参数能够更新调用者的数据，再补全异常读数的边界钳制。分别测试正常、过小和过大输入，核对处理后的值及原变量变化，检查两种函数操作的实际作用范围。",
              "cardCaption": [
                "在原变量上归一化",
                "引用传参"
              ],
              "background": [
                {
                  "html": "<p>不同传感器的读数范围不同，进入决策模块前要把读数换成统一的0—1范围。</p>\n<p>原版函数会直接把调用者的读数改成归一化结果；若只传副本，主程序仍会看到旧值。先观察引用传参的前后数值，再用同样方式处理越界读数。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "传值、引用与就地修改"
                }
              ],
              "stages": [
                {
                  "id": "class-c-041-stage-1",
                  "number": 1,
                  "title": "数据归一化引用传递",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 运行原版，观察同一个读数在调用前后的变化。</p>\n<ol>\n<li>复制下方程序，运行核对读数50.0在10.0—90.0范围内被归一化为0.5000。定位 <code>float&amp; value</code>、调用语句和调用后的原变量输出。</li>\n<li>将传感器读数改为90.0再运行，核对结果1.0000；恢复50.0版本。将源码与运行结果同屏截图，并在源码上<strong>用红框圈出函数形参列表中的引用符号 <code>&amp;</code></strong>。</li>\n</ol>\n<h5>本阶段案例代码：传感器读数归一化</h5>\n<pre><code class=\"language-cpp\">// 使用引用传参，就地修改变量以实现数据归一化\n\n#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\n\n// 函数定义\n// 功能： 对一个浮点数进行最小-最大规范化，缩放到[0, 1]区间\n// 参数：\n//   - value: 需要被归一化的数 (通过引用传递，会被直接修改)\n//   - min_value: 原始数据范围的最小值\n//   - max_value: 原始数据范围的最大值\nvoid normalize(float&amp; value, float min_value, float max_value) {\n    // 检查分母是否为零，避免除零错误\n    if (max_value - min_value == 0) {\n        value = 0; // 或者根据业务逻辑处理\n        return;\n    }\n\n    // 直接修改传入的 value 变量\n    value = (value - min_value) / (max_value - min_value);\n}\n\nint main() {\n    // 模拟一个雷达传感器读数，其有效范围是 10.0米 到 90.0米\n    const float LIDAR_MIN_RANGE = 10.0f;\n    const float LIDAR_MAX_RANGE = 90.0f;\n    float sensor_reading = 50.0f; // 当前的测量值\n\n    std::cout &lt;&lt; &quot;--- 传感器数据归一化 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(4); // 设置输出格式\n\n    std::cout &lt;&lt; &quot;调用 normalize 函数前， 原始读数： &quot; &lt;&lt; sensor_reading &lt;&lt; std::endl;\n\n    // 调用函数。因为是引用传参，函数将直接操作 sensor_reading 变量\n    normalize(sensor_reading, LIDAR_MIN_RANGE, LIDAR_MAX_RANGE);\n\n    std::cout &lt;&lt; &quot;调用 normalize 函数后， 归一化读数： &quot; &lt;&lt; sensor_reading &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-63260dedb197.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>归一化引用源码与运行.png</code>（同屏显示红框标注的引用形参及50.0→0.5000与90.0→1.0000的运行结果）。</p>\n"
                },
                {
                  "id": "class-c-041-stage-2",
                  "number": 2,
                  "title": "异常数据边界钳制",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 按给定骨架补全引用传参的边界钳制函数，处理超出正常范围的读数。</p>\n<ol>\n<li>将下方骨架片段加入个人程序，识别已给出的 <code>double&amp; value</code> 引用形参声明，仅补全函数内部两处边界截断逻辑（不得返回值，必须通过引用就地修改传入变量）。骨架中 <code>TODO 1</code> 所述的引用声明已给出，无需再次补写。</li>\n<li>设本人有效上界为 <code>100.0 + 本人学号末两位</code>（下界固定为 <code>0.0</code>）。在 <code>main</code> 中依次测试 <code>-5.0</code>、<code>25.0</code> 和 <code>200.0</code> 三个读数，打印“校准员[本人姓名]的异常读数检查”及每次调用前后的数值。</li>\n<li>核对三组结果依次为 <code>0.0</code>、<code>25.0</code> 和 <code>[100.0+本人学号末两位]</code>；将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出 <code>clamp</code> 第一个形参中的 <code>&amp;</code> 符号</strong>。</li>\n</ol>\n<h5>本阶段骨架代码：引用传参边界钳制</h5>\n<pre><code class=\"language-cpp\">// TODO 1：将第一个参数 value 声明为 double 引用，使其能直接修改实参\nvoid clamp(double&amp; value, double min_limit, double max_limit) {\n    // TODO 2：若 value 小于 min_limit，将其改为 min_limit；若大于 max_limit，将其改为 max_limit。\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-ee3288195bf2.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>异常值钳制源码与运行.png</code>（同屏显示红框标注的引用形参、两侧边界判断及三组测试前后值）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-042",
              "caseId": "c-042",
              "label": "案例 42",
              "title": "决策日志打印",
              "taskId": "t-p05-b01",
              "forms": [
                "复制后运行、改写并运行",
                "扩充并运行"
              ],
              "plan": "先改变默认日志级别，对照省略参数与显式指定参数的输出，再扩充多级默认参数调用。逐项记录每种调用实际采用的字段，检查默认值只在省略对应参数时生效，原有紧急日志仍能覆盖默认设置。",
              "cardCaption": [
                "两种方式调用决策日志",
                "默认实参"
              ],
              "background": [
                {
                  "html": "<p>驾驶决策程序要记录普通信息，也要记录紧急事件。大多数调用只提供日志文字，少数调用还指定优先级；若为常见情况设置默认值，就能保留简短调用，同时让紧急日志显式覆盖。</p>\n<p>本案例通过改变默认级别检验两类调用是否受影响。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "默认值的声明位置与调用方式"
                }
              ],
              "stages": [
                {
                  "id": "class-c-042-stage-1",
                  "number": 1,
                  "title": "默认优先级参数调整",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、改写并运行。</strong> 先观察省略参数与显式传参，再修改默认优先级。</p>\n<ol>\n<li>复制下方程序并运行，比较只传决策文字与传入优先级0的两条输出；定位默认值写在函数参数列表的哪一处。</li>\n<li>把默认优先级从1改为2，再运行。核对只传文字的日志前缀变为 <code>[DEBUG]</code>，显式传0的日志仍为 <code>[URGENT]</code>；截取参数声明和前后输出。</li>\n</ol>\n<h5>本阶段案例代码：决策日志</h5>\n<pre><code class=\"language-cpp\">// 使用默认实参，设计一个灵活的决策日志打印函数\n\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n\n// 函数声明与定义\n// 功能： 打印一条决策日志\n// 参数：\n//   - decision: 决策的具体内容\n//   - priority: 日志的优先级，默认值为1 (普通)\nvoid log_decision(const std::string&amp; decision, int priority = 1) {\n    std::cout &lt;&lt; &quot;决策日志： &quot;;\n\n    // 根据不同的优先级，添加不同的前缀\n    switch (priority) {\n        case 0:\n            std::cout &lt;&lt; &quot;[URGENT] &quot;;\n            break;\n        case 1:\n            std::cout &lt;&lt; &quot;[INFO] &quot;;\n            break;\n        default:\n            std::cout &lt;&lt; &quot;[DEBUG] &quot;;\n            break;\n    }\n\n    std::cout &lt;&lt; decision &lt;&lt; std::endl;\n}\n\nint main() {\n    std::cout &lt;&lt; &quot;--- 自动驾驶决策日志 ---&quot; &lt;&lt; std::endl;\n\n    // 调用方式 1：只提供第一个参数\n    //    此时，priority参数会自动使用其默认值 1\n    log_decision(&quot;前方畅通，保持当前速度巡航&quot;);\n\n    // 调用方式 2：提供所有参数\n    //    此时，我们传入的 0 会覆盖掉 priority 的默认值\n    log_decision(&quot;检测到前方行人，执行紧急制动！&quot;,  0);\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-032d4e434fb5.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>日志默认值源码.png</code>（默认值2及两种调用）和 <code>日志默认值运行.png</code>（修改前INFO与修改后DEBUG、URGENT的对照）。</p>\n"
                },
                {
                  "id": "class-c-042-stage-2",
                  "number": 2,
                  "title": "多级默认参数配置",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 在现有日志函数末尾增加类别参数，再用三种调用方式验证。</p>\n<ol>\n<li>在优先级参数右侧增加 <code>const std::string&amp; category = &quot;General&quot;</code>；函数输出同时包含类别、优先级和决策文字，保留原有优先级与前缀的对应关系。</li>\n<li>在 <code>main</code> 分别只传决策文字、传决策文字与优先级、三个参数全传。第三次调用使用本人姓名作日志类别，确认仅第三条显示本人姓名。</li>\n<li>编译运行，核对三条输出的类别与优先级分别来自默认值或调用实参；截取函数签名、输出语句与三次调用。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p05-36e58a2098cf.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>多级默认参数源码.png</code>（参数顺序、三次调用与输出）和 <code>多级默认参数运行.png</code>（三种类别、优先级及本人姓名）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-043",
              "caseId": "c-043",
              "label": "案例 43",
              "title": "速度限制获取",
              "taskId": "t-p05-b01",
              "forms": [
                "复制后运行、改写并运行",
                "重构与集成"
              ],
              "plan": "先核对限速查询成功和失败时的状态与输出参数，再用结构体组织查询结果。用相同输入比较两种接口中的限速字段及异常处理，确认封装结果没有丢失原本用于判断查询是否成功的信息。",
              "cardCaption": [
                "一次查询带回两项限速",
                "引用输出"
              ],
              "background": [
                {
                  "html": "<p>道路限速查询会得到最低与最高两个数值，也可能因数据缺失而失败。一个普通返回值不足以同时表达这三项信息。</p>\n<p>原版用返回状态配合两个引用输出参数；先验证成功与失败分支，再尝试把两项限速封装为一个结果对象。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "bool返回、引用输出与结构体返回"
                }
              ],
              "stages": [
                {
                  "id": "class-c-043-stage-1",
                  "number": 1,
                  "title": "限速查询异常处理",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、改写并运行。</strong> 先核对成功分支，再模拟查询失败。</p>\n<ol>\n<li>复制下方程序并运行，核对最低30、最高120；找到函数里决定查询成功的变量及 <code>main</code> 中的成功、失败分支。</li>\n<li>在个人副本中模拟查询失败；在失败分支输出两个仍为初值的变量，并显示“路况核验员[本人姓名]报告：未能获取限速信息”。</li>\n<li>截取成功与失败两次运行、失败分支及原值未变化的证据；最终保留能编译的程序。</li>\n</ol>\n<h5>本阶段案例代码：引用输出限速</h5>\n<pre><code class=\"language-cpp\">// 通过引用参数&quot;返回&quot;多个值\n\n#include &lt;iostream&gt;\n\n// 函数定义\n// 功能： 模拟获取当前路段的速度限制\n// 返回： bool - true表示成功获取，false表示失败\n// 参数：\n//   - min_speed_out: (输出参数) 用于接收最低限速的引用\n//   - max_speed_out: (输出参数) 用于接收最高限速的引用\nbool get_speed_limits(int&amp; min_speed_out, int&amp; max_speed_out) {\n    // 模拟从地图模块查询到的数据\n    const bool found_limits = true;\n\n    if (found_limits) {\n        // 通过引用，直接修改了 main 函数中传入的变量\n        min_speed_out = 30;\n        max_speed_out = 120;\n        return true; // 返回成功状态\n    } else {\n        // 如果查询失败，不修改输出参数，并返回失败状态\n        return false;\n    }\n}\n\nint main() {\n    // 在main函数中定义两个变量，用于接收函数的&quot;输出&quot;\n    int min_limit = 0;\n    int max_limit = 0;\n\n    std::cout &lt;&lt; &quot;--- 速度限制查询 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;调用函数前： min_limit = &quot; &lt;&lt; min_limit \n              &lt;&lt; &quot;, max_limit = &quot; &lt;&lt; max_limit &lt;&lt; std::endl;\n\n    // 调用函数，并将变量的引用传递进去\n    if (get_speed_limits(min_limit, max_limit)) {\n        std::cout &lt;&lt; &quot;成功获取到速度限制！&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;调用函数后： min_limit = &quot; &lt;&lt; min_limit \n                  &lt;&lt; &quot;, max_limit = &quot; &lt;&lt; max_limit &lt;&lt; std::endl;\n    } else {\n        std::cout &lt;&lt; &quot;未能获取到当前路段的速度限制。&quot; &lt;&lt; std::endl;\n    }\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-76db21790afe.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>限速查询源码.png</code>（返回状态及失败分支）和 <code>限速查询对照运行.png</code>（成功30/120与本人失败提示，可分张）。</p>\n"
                },
                {
                  "id": "class-c-043-stage-2",
                  "number": 2,
                  "title": "限速结果结构体封装",
                  "leads": [],
                  "html": "<p><strong>任务形式：重构与集成。</strong> 在成功版本的个人副本中，用结构体装载两项限速值。</p>\n<ol>\n<li>定义含 <code>min_speed</code>、<code>max_speed</code> 两个整型成员的 <code>SpeedLimitResult</code>；将查询函数改为返回该结构体，不再接收两个引用输出参数。</li>\n<li>在 <code>main</code> 用一个结果对象接收返回值并输出30和120；本阶段从成功查询版本改写，上一阶段的失败截图用于保留失败处理对照。</li>\n<li>运行核对两项限速值不变；截取结构体、函数返回、调用与运行结果。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p05-92f3653cfd6e.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>限速结构返回源码.png</code>（结构体、返回与调用）和 <code>限速结构返回运行.png</code>（最低30、最高120）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p05-b02",
          "title": "自适应巡航模块优化",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-044",
              "caseId": "c-044",
              "label": "案例 44",
              "title": "角度弧度转换",
              "taskId": "t-p05-b02",
              "forms": [
                "复制后运行、仿写并运行"
              ],
              "plan": "先运行角度转弧度的短函数，再仿写弧度转角度函数并接入主程序。使用给定角度与约1.57弧度进行双向核验，将公式、输入单位和显示结果对应起来，检查反向换算没有混淆单位。",
              "cardCaption": [
                "转向角的单位换算",
                "inline 函数"
              ],
              "background": [
                {
                  "html": "<p>感知模块和决策模块可能分别使用角度与弧度，同一个换算公式会被反复调用。</p>\n<p>原版把角度转弧度写成短函数；本案例在运行原版后，仿写反向换算并核对约1.57弧度接近90度，由此认识内联函数的写法与调用。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "内联函数与短计算"
                }
              ],
              "stages": [
                {
                  "id": "class-c-044-stage-1",
                  "number": 1,
                  "title": "逆向角度转换内联实现",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、仿写并运行。</strong> 保留原版角度转弧度函数，再添加反向换算。</p>\n<ol>\n<li>复制下方程序并运行，核对30、90、180度的弧度结果；找到 <code>PI</code>、<code>inline</code> 函数和三次调用。</li>\n<li>参照 <code>to_radians</code> 新写 <code>inline double to_degrees(double radians)</code>，用现有 <code>PI</code> 把弧度换成角度；在 <code>main</code> 传入约1.57弧度，输出“计算员[本人姓名]核对的角度”，结果应接近90度。</li>\n<li>截取两个函数、反向调用以及运行结果；原有角度转弧度输出仍应保留。</li>\n</ol>\n<h5>本阶段案例代码：角度转弧度</h5>\n<pre><code class=\"language-cpp\">// 使用内联函数高效地进行角度到弧度的转换\n\n#include &lt;iostream&gt;\n#include &lt;iomanip&gt; // 用于格式化输出\n\n// 定义一个高精度的PI常量\nconst double PI = 3.14159265358979323846;\n\n// 定义内联函数\n// inline 关键字建议编译器将函数体在调用处直接展开，以消除函数调用开销\n// 这对于像 to_radians 这样简短且需要被频繁调用的函数，能有效提升性能\ninline double to_radians(double degrees) {\n    return degrees * PI / 180.0;\n}\n\nint main() {\n    std::cout &lt;&lt; &quot;--- 角度-弧度转换器 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(6); // 设置输出格式\n\n    // 多次调用内联函数\n    double angle1 = 30.0;\n    double angle2 = 90.0;\n    double angle3 = 180.0;\n\n    double radians1 = to_radians(angle1);\n    double radians2 = to_radians(angle2);\n    double radians3 = to_radians(angle3);\n\n    // 打印结果\n    std::cout &lt;&lt; angle1 &lt;&lt; &quot; 度 = &quot; &lt;&lt; radians1 &lt;&lt; &quot; 弧度&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; angle2 &lt;&lt; &quot; 度 = &quot; &lt;&lt; radians2 &lt;&lt; &quot; 弧度&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; angle3 &lt;&lt; &quot; 度 = &quot; &lt;&lt; radians3 &lt;&lt; &quot; 弧度&quot; &lt;&lt; std::endl;\n\n    // 模拟在循环中频繁调用\n    double sum_of_radians = 0.0;\n    for(int i = 0; i &lt; 1000000; ++i) {\n        sum_of_radians += to_radians(1.0); // 在性能敏感的循环中调用\n    }\n    std::cout &lt;&lt; &quot;\\n模拟百万次调用完成。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-2e3e4c77ca12.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>双向角度转换源码.png</code>（两个内联函数与调用）和 <code>双向角度转换运行.png</code>（原有三组及本人反向换算结果）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-045",
              "caseId": "c-045",
              "label": "案例 45",
              "title": "内部函数封装",
              "taskId": "t-p05-b02",
              "forms": [
                "搭建与构建、复制后运行",
                "测试与对照",
                "调试与修正"
              ],
              "plan": "先完成三文件工程的公开接口调用，再尝试从主程序访问内部求和函数，分别观察编译和链接结果。随后按任务卡调整封装范围并重新验证，对照声明、定义与调用位置说明接口为何能够或不能被外部使用。",
              "cardCaption": [
                "数学模块的接口边界",
                "内部链接"
              ],
              "background": [
                {
                  "html": "<p>多文件计算模块既有供主程序调用的平均值接口，也有只服务于模块内部的求和函数。</p>\n<p>先让三文件程序正常构建，后续阶段再尝试从主程序调用内部函数，观察链接结果，理解“声明能看到”和“外部能链接”之间的关系。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "内部链接与公共接口"
                },
                {
                  "title": "声明可见性与链接阶段"
                }
              ],
              "stages": [
                {
                  "id": "class-c-045-stage-1",
                  "number": 1,
                  "title": "内部函数原版运行",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 建立三文件程序，先确认公开函数可被主程序调用。</p>\n<ol>\n<li>在独立子文件夹分别建立 <code>main.cpp</code>、<code>math_utils.h</code>、<code>math_utils.cpp</code>，复制下方对应代码；确认主程序包含头文件，三个文件在同一目录。</li>\n<li>用 <code>g++ main.cpp math_utils.cpp -o simulation_app</code> 编译运行，核对五个读数的平均值为10.6；截取三文件结构、编译命令与结果。</li>\n</ol>\n<h5>本阶段起点文件：主程序</h5>\n<pre><code class=\"language-cpp\">// 使用math_utils模块\n\n#include &lt;iostream&gt;\n#include &quot;math_utils.h&quot; // 包含模块的头文件\n\n// 尝试声明在另一个文件中定义的静态函数（这将导致链接失败）\n// extern double sum(const double arr[], int size);\n\nint main() {\n    double sensor_readings[] = {10.5, 11.0, 9.8, 10.2, 11.5};\n    int count = 5;\n\n    // 成功调用外部函数 average，因为它的声明在头文件中是公开的\n    double avg_reading = average(sensor_readings, count);\n    std::cout &lt;&lt; &quot;传感器的平均读数是： &quot; &lt;&lt; avg_reading &lt;&lt; std::endl;\n\n    // 如果取消上面 extern double sum(...) 的注释并尝试调用，就会在链接阶段报错\n    // double total = sum(sensor_readings, count); // Linker Error!\n\n    return 0;\n}\n</code></pre>\n<h5>本阶段起点文件：公共声明</h5>\n<pre><code class=\"language-cpp\">// 声明了本模块对外提供的公共函数接口\n\n#ifndef MATH_UTILS_H\n#define MATH_UTILS_H\n\n// 这是一个外部函数（默认），其声明对所有包含此头文件的文件都可见\n// 功能：计算一个double数组的平均值\ndouble average(const double arr[], int size);\n\n#endif // MATH_UTILS_H\n</code></pre>\n<h5>本阶段起点文件：模块实现</h5>\n<pre><code class=\"language-cpp\">// 实现了math_utils模块的功能\n\n#include &quot;math_utils.h&quot;\n\n// 定义一个静态函数 (内部链接)\n// static 关键字将 sum 函数的作用域限制在当前源文件\n//    其他.cpp文件即使声明了它，也无法在链接时找到它\nstatic double sum(const double arr[], int size) {\n    double total = 0.0;\n    for (int i = 0; i &lt; size; ++i) {\n        total += arr[i];\n    }\n    return total;\n}\n\n// 定义外部函数 (外部链接)\n//    这个函数是模块的公共接口\ndouble average(const double arr[], int size) {\n    if (size &lt;= 0) {\n        return 0.0;\n    }\n    // 在内部调用同文件下的静态辅助函数\n    return sum(arr, size) / size;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-b6a4da4a47c8.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>内部函数目录.png</code>（三个文件）、<code>内部函数原版源码.png</code>（公共声明、内部函数及调用，可分张）和 <code>平均读数运行.png</code>（平均值10.6）。</p>\n"
                },
                {
                  "id": "class-c-045-stage-2",
                  "number": 2,
                  "title": "内部链接属性验证",
                  "leads": [
                    {
                      "html": "<p>保留公开接口的正常运行记录，再尝试从主程序直接访问内部求和函数。分别记录编译与链接的结果，避免把声明通过误当成整个构建成功。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 在已能运行的三文件程序中临时调用内部求和函数。</p>\n<ol>\n<li>取消主程序中 <code>extern double sum(...)</code> 声明和 <code>sum(...)</code> 调用前的注释，保持模块实现中的 <code>static</code>；重新执行联合编译。</li>\n<li>观察包含 <code>sum</code> 的链接错误，暂不截图，直接进入下一阶段一并对照提交。</li>\n</ol>\n<p><strong>本阶段提交：</strong> 与下一阶段合并为一张对照图提交。</p>\n"
                },
                {
                  "id": "class-c-045-stage-3",
                  "number": 3,
                  "title": "函数封装域解除调用",
                  "leads": [],
                  "html": "<p><strong>任务形式：调试与修正。</strong> 让求和函数成为可由主程序调用的公共接口。</p>\n<ol>\n<li>去掉模块实现中 <code>sum</code> 定义前的 <code>static</code>，把函数声明放入 <code>math_utils.h</code>；主程序包含该头文件，删除临时写在主程序里的重复 <code>extern</code> 声明。</li>\n<li>重新联合编译并运行，核对五个读数总和53.0、平均值10.6；将 <code>math_utils.h</code>、<code>math_utils.cpp</code> 与终端（同时保留上一步的链接报错记录和本次修正后的成功输出）同屏截取，并在源码中<strong>用红框圈出被移入头文件的 <code>sum</code> 声明行</strong>。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p05-19e42a86f88d.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>内部链接对照与修正.png</code>（同屏显示红框标注的头文件声明、去掉 <code>static</code> 的实现，以及终端里修正前的链接报错与修正后的53.0/10.6输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-046",
              "caseId": "c-046",
              "label": "案例 46",
              "title": "决策动态回调",
              "taskId": "t-p05-b02",
              "forms": [
                "复制后运行、扩充并运行",
                "改写并运行"
              ],
              "plan": "先补充标准驾驶模式，核对模式选择与实际调用策略，再把速度输入和加速度返回值纳入统一回调接口。用不同模式、不同速度组合检查函数指针类型、调用参数与结果，确认共用入口仍能执行不同策略。",
              "cardCaption": [
                "驾驶模式选择油门策略",
                "函数指针"
              ],
              "background": [
                {
                  "html": "<p>车辆在经济、标准和运动模式下采用不同的油门策略，但主流程希望只保留一处执行入口。程序需要先根据模式选中策略，再通过同一条调用语句执行它。</p>\n<p>本案例先增加第三种模式，再把速度作为输入、加速度作为输出，检验回调接口是否统一。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "函数指针声明、赋值与调用"
                }
              ],
              "stages": [
                {
                  "id": "class-c-046-stage-1",
                  "number": 1,
                  "title": "标准驾驶模式扩充",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、扩充并运行。</strong> 保留经济与运动模式，增加标准驾驶模式。</p>\n<ol>\n<li>复制下方程序，先输入 <code>E</code>、<code>S</code> 运行，核对两种原有策略。</li>\n<li>新增无参数、无返回值的 <code>standard_throttle</code>，在模式选择中让 <code>D</code> 指向它；更新输入提示，运行核对 <code>D</code> 只执行标准模式。本阶段完成后直接在同一文件上继续阶段四的签名改写，最后统一截图。</li>\n</ol>\n<h5>本阶段案例代码：油门策略回调</h5>\n<pre><code class=\"language-cpp\">// 使用函数指针实现决策的动态回调\n\n#include &lt;iostream&gt;\n\n// 策略函数定义\n\n// 策略 1：经济模式下的油门控制\nvoid gentle_throttle() {\n    std::cout &lt;&lt; &quot;执行经济模式：平缓加速，优化燃油效率。&quot; &lt;&lt; std::endl;\n}\n\n// 策略 2：运动模式下的油门控制\nvoid aggressive_throttle() {\n    std::cout &lt;&lt; &quot;执行运动模式：急加速！提供最大动力响应。&quot; &lt;&lt; std::endl;\n}\n\nint main() {\n    // 定义一个函数指针\n    //    语法：返回类型 (*指针名)(参数列表)\n    //    这里的 throttle_strategy 是一个指针，它指向一个无参数、无返回值的函数\n    void (*throttle_strategy)();\n\n    char mode_selection;\n    std::cout &lt;&lt; &quot;--- 驾驶模式选择 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;请输入模式 (E - 经济模式， S - 运动模式): &quot;;\n    std::cin &gt;&gt; mode_selection;\n\n    // 根据用户输入，将函数指针指向不同的函数地址\n    //    函数名本身就代表了函数的地址\n    if (mode_selection == &#39;E&#39; || mode_selection == &#39;e&#39;) {\n        throttle_strategy = gentle_throttle;\n    } else if (mode_selection == &#39;S&#39; || mode_selection == &#39;s&#39;) {\n        throttle_strategy = aggressive_throttle;\n    } else {\n        std::cout &lt;&lt; &quot;无效模式，使用默认策略。&quot; &lt;&lt; std::endl;\n        throttle_strategy = gentle_throttle; // 默认指向经济模式\n    }\n\n    std::cout &lt;&lt; &quot;\\n--- 执行当前油门策略 ---&quot; &lt;&lt; std::endl;\n    // 通过函数指针进行回调\n    //    程序在这里并不知道具体执行的是哪个函数，只知道调用指针即可\n    throttle_strategy();\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-51ebda256473.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> 保留三模式分支结构，并入下一阶段的最终回调图中一并提交。</p>\n"
                },
                {
                  "id": "class-c-046-stage-2",
                  "number": 2,
                  "title": "动态速度回调注入",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 在三模式个人副本中按给定骨架统一策略签名，让回调接收速度并返回加速度。</p>\n<ol>\n<li>参照下方改写骨架，将三个策略函数（<code>gentle_throttle</code>、<code>standard_throttle</code>、<code>aggressive_throttle</code>）统一改为接收 <code>double current_speed</code>、返回 <code>double</code>：经济模式返回 <code>1.0</code>、标准模式返回 <code>2.0 + 本人学号末一位 * 0.1</code>、运动模式返回 <code>3.5</code>。保留各自的模式说明输出。</li>\n<li>补全 <code>main</code> 中的函数指针声明 <code>double (*throttle_strategy)(double);</code>，给定当前车速 <code>60.0</code>，通过该函数指针完成调用并输出“驾驶员[本人姓名]当前模式的加速度”。</li>\n<li>分别输入 <code>E</code>、<code>D</code>、<code>S</code> 运行，核对 <code>D</code> 模式下返回你本人的专属加速度；将源码与三次运行结果同屏截图，并在源码上<strong>用红框圈出函数指针声明行 <code>double (*throttle_strategy)(double);</code></strong>。</li>\n</ol>\n<h5>本阶段改写骨架：带参带返回值函数指针回调</h5>\n<pre><code class=\"language-cpp\">double standard_throttle(double current_speed) {\n    std::cout &lt;&lt; &quot;执行标准模式（当前车速 &quot; &lt;&lt; current_speed &lt;&lt; &quot; km/h）：均衡动力输出。&quot; &lt;&lt; std::endl;\n    return 2.0 + /* 本人学号末一位 */ * 0.1;\n}\n\n// 在 main 中将函数指针声明改写为：\n// double (*throttle_strategy)(double);\n// 调用方式改写为：\n// double acc = throttle_strategy(60.0);\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-d7fa0054248d.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>速度回调源码与运行.png</code>（同屏显示三个带参策略函数、红框标注的函数指针声明，以及本人标题与E、D、S三种模式的运行结果）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p05-b03",
          "title": "自适应巡航模块扩展",
          "kind": "基础任务 3",
          "cards": [
            {
              "id": "class-c-047",
              "caseId": "c-047",
              "label": "案例 47",
              "title": "日志函数重载",
              "taskId": "t-p05-b03",
              "forms": [
                "复制后运行、测试与对照",
                "扩充并运行"
              ],
              "plan": "先对照已有参数形式与实际输出，检查同名日志函数如何被选中，再补充浮点读数及字符相关调用。把每条调用的参数类型、命中的重载和显示格式并列核对，避免只凭函数名判断执行的是同一版本。",
              "cardCaption": [
                "同名日志处理不同参数",
                "函数重载"
              ],
              "background": [
                {
                  "html": "<p>驾驶决策日志可能是一条文字说明、一个错误码，或同时带设备状态的记录。调用处若都用同一个函数名，仍要能得到不同格式的输出。</p>\n<p>本案例先对照三组参数与实际日志，再增加浮点读数版本，观察编译器如何按参数选中函数。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "函数重载与匹配规则"
                }
              ],
              "stages": [
                {
                  "id": "class-c-047-stage-1",
                  "number": 1,
                  "title": "字符级日志重载匹配",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 先运行三个已有版本，逐一对应调用参数与输出类别。</p>\n<ol>\n<li>复制下方程序，运行核对字符串调用产生INFO、整数调用产生ERROR、字符串加整数调用产生STATUS。</li>\n<li>在 <code>main</code> 中另加一次 <code>log_event(501)</code>，确认仍进入错误码版本；截取三种函数定义、四次调用及运行结果。</li>\n</ol>\n<h5>本阶段案例代码：日志函数重载</h5>\n<pre><code class=\"language-cpp\">// 使用函数重载为日志系统提供统一接口\n\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n\n// 重载函数定义\n\n// 版本 1：接收一个字符串参数\n// 用于记录通用的文本信息\nvoid log_event(const std::string&amp; message) {\n    std::cout &lt;&lt; &quot;[INFO] Message: \\&quot;&quot; &lt;&lt; message &lt;&lt; &quot;\\&quot;&quot; &lt;&lt; std::endl;\n}\n\n// 版本 2：接收一个整型参数\n// 用于记录数字化的错误码\nvoid log_event(int error_code) {\n    std::cout &lt;&lt; &quot;[ERROR] Code: &quot; &lt;&lt; error_code &lt;&lt; std::endl;\n}\n\n// 版本 3：接收一个字符串和一个整型参数\n// 用于记录特定组件的状态\nvoid log_event(const std::string&amp; component, int status_code) {\n    std::cout &lt;&lt; &quot;[STATUS] Component: &quot; &lt;&lt; component \n              &lt;&lt; &quot;, Status: &quot; &lt;&lt; status_code &lt;&lt; std::endl;\n}\n\nint main() {\n    std::cout &lt;&lt; &quot;--- 自动驾驶日志系统 ---&quot; &lt;&lt; std::endl;\n\n    // 调用版本 1：传入一个字符串\n    log_event(&quot;系统初始化完成。&quot;);\n\n    // 调用版本 2：传入一个整数\n    log_event(404);\n\n    // 调用版本 3：传入一个字符串和一个整数\n    log_event(&quot;Lidar&quot;, 0); // 0 代表正常\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-29384f220905.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>日志重载原版源码.png</code>（三个函数与四次调用）和 <code>日志重载原版运行.png</code>（INFO、ERROR、STATUS及501）。</p>\n"
                },
                {
                  "id": "class-c-047-stage-2",
                  "number": 2,
                  "title": "浮点型数据日志重载",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 给同名函数增加浮点型版本，检验参数类型怎样决定匹配。</p>\n<ol>\n<li>新增 <code>void log_event(double sensor_value)</code>，输出传感器读数并标明单位；在函数输出中加入“记录员[本人姓名]”。保留原有三个重载，不把整数版本改成浮点版本。</li>\n<li>在 <code>main</code> 分别调用 <code>log_event(42.5)</code> 与 <code>log_event(404)</code>；核对前者进入新版本、后者仍进入整数错误码版本。</li>\n<li>截取四个函数签名及新旧两种调用结果，确保本人标识只出现在浮点日志中。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p05-94be3fe5d9b7.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>浮点日志重载源码.png</code>（新增函数与两次测试调用）和 <code>浮点日志运行.png</code>（本人标识、42.5读数及404错误码）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-048",
              "caseId": "c-048",
              "label": "案例 48",
              "title": "最小距离查找",
              "taskId": "t-p05-b03",
              "forms": [
                "复制后运行、测试与对照",
                "挖空并补全、扩充并运行"
              ],
              "plan": "先使用整数、单精度和双精度输入验证通用最小值模板，再为二维点补充依据到原点距离进行比较的专用规则。对照不同类型的输入与选择结果，说明相同调用形式下通用比较和特殊比较各按什么依据工作。",
              "cardCaption": [
                "用同一模板比较距离",
                "函数模板"
              ],
              "background": [
                {
                  "html": "<p>感知结果可能用整数、单精度或双精度表示距离，比较“哪一个更小”的步骤相同。若分别写三份函数，修改规则时容易不一致；模板可让同一比较流程适用于多种类型。</p>\n<p>二维点的“更近”要依据坐标到原点的距离，因此在数值模板验证后再加入专用规则。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "函数模板定义与实例化"
                },
                {
                  "title": "模板特例化"
                }
              ],
              "stages": [
                {
                  "id": "class-c-048-stage-1",
                  "number": 1,
                  "title": "泛型最小距离对比",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 用三种数值类型运行同一个函数模板。</p>\n<ol>\n<li>复制下方程序并运行，核对整数35、浮点42.5分别是较小距离；双精度部分结合输入值与模板比较表达式，确认内部选择的较小距离为 <code>88.12345</code>。原程序默认输出精度下，两项双精度输入及返回值均显示为 <code>88.1235</code>，屏幕结果不足以区分两个输入。找到模板声明与三次调用，不将屏幕上舍入后的数值误认为原始输入值。</li>\n<li>再加一组整数距离相等的测试，确认返回值仍为该距离；截取模板、四次调用和运行结果。</li>\n</ol>\n<h5>本阶段案例代码：最小距离模板</h5>\n<pre><code class=\"language-cpp\">// 使用函数模板实现通用的最小距离查找\n\n#include &lt;iostream&gt;\n\n// 定义函数模板\n//    template &lt;typename T&gt; 告诉编译器，这是一个模板，T是一个类型的占位符\n//    这个模板可以用于任何支持 &#39;&gt;&#39; 运算符的类型 T\ntemplate &lt;typename T&gt;\nT find_closest(T dist1, T dist2) {\n    // 对所有 T 类型采用相同的比较逻辑\n    return (dist1 &lt; dist2) ? dist1 : dist2;\n}\n\nint main() {\n    std::cout &lt;&lt; &quot;--- 通用最小距离查找器 ---&quot; &lt;&lt; std::endl;\n\n    // 使用整数距离实例化函数模板\n    int grid_dist1 = 50;\n    int grid_dist2 = 35;\n    // 调用时，编译器看到两个int参数，会自动推导 T 为 int，\n    // 并&quot;实例化&quot;出一个 int find_closest(int, int) 函数\n    int closest_grid_dist = find_closest(grid_dist1, grid_dist2);\n    std::cout &lt;&lt; &quot;整数距离 &quot; &lt;&lt; grid_dist1 &lt;&lt; &quot;m 和 &quot; &lt;&lt; grid_dist2 \n              &lt;&lt; &quot;m 中，较近的是： &quot; &lt;&lt; closest_grid_dist &lt;&lt; &quot;m&quot; &lt;&lt; std::endl;\n\n    // 使用浮点距离实例化函数模板\n    float radar_dist1 = 42.5f;\n    float radar_dist2 = 42.8f;\n    // 调用时，编译器看到两个float参数，会自动推导 T 为 float，\n    // 并实例化出一个 float find_closest(float, float) 函数\n    float closest_radar_dist = find_closest(radar_dist1, radar_dist2);\n    std::cout &lt;&lt; &quot;浮点数距离 &quot; &lt;&lt; radar_dist1 &lt;&lt; &quot;m 和 &quot; &lt;&lt; radar_dist2 \n              &lt;&lt; &quot;m 中，较近的是： &quot; &lt;&lt; closest_radar_dist &lt;&lt; &quot;m&quot; &lt;&lt; std::endl;\n\n    // 使用双精度距离实例化函数模板\n    double lidar_dist1 = 88.12345;\n    double lidar_dist2 = 88.12354;\n    // 调用时，编译器看到两个double参数，会自动推导 T 为 double，\n    // 并实例化出一个 double find_closest(double, double) 函数\n    double closest_lidar_dist = find_closest(lidar_dist1, lidar_dist2);\n    std::cout &lt;&lt; &quot;双精度距离 &quot; &lt;&lt; lidar_dist1 &lt;&lt; &quot;m 和 &quot; &lt;&lt; lidar_dist2 \n              &lt;&lt; &quot;m 中，较近的是： &quot; &lt;&lt; closest_lidar_dist &lt;&lt; &quot;m&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-22bf7fc2c064.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>距离模板源码.png</code>（模板及多类型调用）和 <code>距离模板运行.png</code>（三种类型与相等测试）。</p>\n"
                },
                {
                  "id": "class-c-048-stage-2",
                  "number": 2,
                  "title": "二维坐标计算特例化",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、扩充并运行。</strong> 在原模板后补入二维点的专用比较规则。</p>\n<ol>\n<li>在原模板与 <code>main</code> 之间加入下方结构体和特例化片段。完成两个 <code>// TODO</code>：分别计算两点到原点的平方距离，并返回较近的点；不必开平方。</li>\n<li>在 <code>main</code> 建立点(3,4)与(1,2)，调用同名函数，打印“测距员[本人姓名]选中的最近点”；应得到(1,2)。保留原有三种数值类型的输出。</li>\n<li>截取特例化、点坐标调用及所有类型的运行结果。</li>\n</ol>\n<h5>本阶段补全片段：二维点比较</h5>\n<pre><code class=\"language-cpp\">struct Point2D {\n    double x;\n    double y;\n};\n\ntemplate &lt;&gt;\nPoint2D find_closest&lt;Point2D&gt;(Point2D a, Point2D b) {\n    // TODO 1：计算两个点到原点的平方距离。\n    // TODO 2：返回平方距离较小的点。\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-934ed72cdcb2.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>二维点特例源码.png</code>（结构体、特例化与调用）和 <code>二维点特例运行.png</code>（本人标题、最近点及原有数值结果）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p05-capstone",
          "title": "规划决策模块设计",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-e1",
              "caseId": "c-ext-e1",
              "label": "拓展案例 E1",
              "title": "数学库静态编译",
              "taskId": "t-p05-capstone",
              "forms": [
                "搭建与构建、复制后运行",
                "改写并运行"
              ],
              "plan": "先将数学工具实现构建为静态库，核对公共头文件、库文件与主程序的链接关系，再改变主程序输入测试两项计算。记录生成文件、调用条件和数值结果，验证复用来自独立库，而不是把实现重新复制进主程序。",
              "cardCaption": [
                "从数学函数到可复用库",
                "静态链接"
              ],
              "background": [
                {
                  "html": "<p>刹车距离和角度换算会在多个仿真程序里重复使用。把两项实现做成独立静态库，主程序只通过公共头文件认识接口，由构建配置完成链接。</p>\n<p>本次实操先确认库确实生成，再改变主程序输入核对复用效果。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "头文件、静态库与链接目标"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-e1-stage-1",
                  "number": 1,
                  "title": "数学工具静态库构建",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 按三文件结构创建真正的静态库，再由主程序链接调用。</p>\n<ol>\n<li>在本次日期目录建立数学库工程子文件夹，在其中创建 <code>math_lib</code> 子文件夹；按下方文件名与内容分别建立 <code>CMakeLists.txt</code>、<code>main.cpp</code>、<code>math_lib/math_utils.h</code>、<code>math_lib/math_utils.cpp</code>。</li>\n<li>用IDE打开工程或在该目录执行CMake配置与构建；确认构建过程先生成数学工具静态库，再链接主程序。不要只把 <code>math_utils.cpp</code> 直接列入可执行程序的源文件。</li>\n<li>运行程序，核对车速100 km/h对应的刹车距离约85.73 m、45度对应弧度约0.785398；截取构建配置、库文件生成位置与运行结果。</li>\n</ol>\n<h5>本阶段构建配置：静态数学库</h5>\n<pre><code class=\"language-cmake\">cmake_minimum_required(VERSION 3.16)\nproject(simulation_app LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nadd_library(math_utils STATIC math_lib/math_utils.cpp)\ntarget_include_directories(math_utils PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})\n\nadd_executable(simulation_app main.cpp)\ntarget_link_libraries(simulation_app PRIVATE math_utils)\n</code></pre>\n<h5>本阶段案例代码：主程序</h5>\n<pre><code class=\"language-cpp\">// 一个独立的主程序，用于链接并使用我们创建的数学库\n\n#include &lt;iostream&gt;\n#include &quot;math_lib/math_utils.h&quot; // 包含库的头文件\n\nint main() {\n    double speed = 100.0; // 100 km/h\n    double angle = 45.0;  // 45 度\n\n    // 调用来自静态库的函数\n    double distance = calculate_braking_distance(speed);\n    double radians = to_radians(angle);\n\n    std::cout &lt;&lt; &quot;--- 数学库测试 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;车速 &quot; &lt;&lt; speed &lt;&lt; &quot; km/h 的刹车距离是： &quot; &lt;&lt; distance &lt;&lt; &quot; 米&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; angle &lt;&lt; &quot; 度对应的弧度是： &quot; &lt;&lt; radians &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>本阶段案例代码：库公共头文件</h5>\n<pre><code class=\"language-cpp\">// math_lib/math_utils.h\n\n// 数学工具库的公共头文件，提供函数声明\n\n#ifndef MATH_UTILS_H\n#define MATH_UTILS_H\n\n// 声明：计算刹车距离\ndouble calculate_braking_distance(double speed_kmh);\n\n// 声明：角度转弧度\ndouble to_radians(double degrees);\n\n#endif // MATH_UTILS_H\n</code></pre>\n<h5>本阶段案例代码：库实现</h5>\n<pre><code class=\"language-cpp\">// math_lib/math_utils.cpp\n\n// 数学工具库的函数实现\n\n#include &quot;math_utils.h&quot;\n#include &lt;cmath&gt;\n\nconst double PI = 3.1415926535;\n\ndouble calculate_braking_distance(double speed_kmh) {\n    const double DECELERATION = 4.5;\n    double speed_mps = speed_kmh / 3.6;\n    return std::pow(speed_mps, 2) / (2 * DECELERATION);\n}\n\ndouble to_radians(double degrees) {\n    return degrees * PI / 180.0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p05-45753f3dd758.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>数学库构建配置.png</code>（静态库、可执行程序与链接关系）、<code>数学库文件结构.png</code>（主程序及库的头文件、实现文件）、<code>数学库源码.png</code>（两个函数及调用，可分张）和 <code>数学库运行.png</code>（两项计算结果）。</p>\n"
                },
                {
                  "id": "class-c-ext-e1-stage-2",
                  "number": 2,
                  "title": "库函数输入核验",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 只改主程序的测试数据，核对静态库仍被正常调用。</p>\n<ol>\n<li>在个人主程序把速度改为80 km/h、角度改为90度；保留库的两个函数实现和构建配置。</li>\n<li>在结果前输出“计算核验员[本人姓名]的库函数测试”，重新构建运行；刹车距离约54.87 m，角度结果约1.570796弧度。默认输出精度下，角度结果可能显示为 <code>1.5708</code>，与上述近似值一致。</li>\n<li>截取改写后的输入与调用、本人标题和两项结果。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p05-cf4b9068c405.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>库函数新输入源码.png</code>（速度80、角度90与调用）和 <code>库函数新输入运行.png</code>（本人标题及两项结果）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-e2",
              "caseId": "c-ext-e2",
              "label": "拓展案例 E2",
              "title": "外部库链接使用",
              "taskId": "t-p05-capstone",
              "forms": [
                "搭建与构建、复制后运行",
                "改写并运行、测试与对照"
              ],
              "plan": "先接入配套inih源码和config.ini，核对工程链接、文件路径与配置读取结果；再只改配置值并重新运行。对照前后输出检查各字段是否随文件变化，保留原配置、修改项及运行证据，区分配置变更与源码变更。",
              "cardCaption": [
                "从 INI 文件加载仿真参数",
                "inih 第三方库"
              ],
              "background": [
                {
                  "html": "<p>最高速度、是否允许自动变道和仿真时长不必写死在源码里。</p>\n<p>外部配置库可从 <code>config.ini</code> 读出这些值；本次实操先建立能加载配置的工程，再只修改配置文件，检查运行结果是否随之变化，借此验证文件路径与第三方库的接入。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "第三方库目录、配置项与构建链接"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-e2-stage-1",
                  "number": 1,
                  "title": "外部配置库链接",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 保持外部库原有目录结构，亲手新建 <code>config.ini</code> 并读取三项初始数据。</p>\n<ol>\n<li>在本次日期目录建立配置读取工程子文件夹，按下方内容建立 <code>CMakeLists.txt</code>、<code>main.cpp</code>，并亲手新建纯文本配置文件 <code>config.ini</code>（确认扩展名不是 <code>.ini.txt</code>）。把<a href=\"downloads/packages/inih.zip\">配套外部库源码</a>复制到工程的 <code>external/inih/</code>，保留其中 <code>cpp/INIReader.h</code>、<code>cpp/INIReader.cpp</code>、<code>ini.h</code>、<code>ini.cpp</code> 的相对位置。</li>\n<li>用IDE打开工程或在目录中配置、构建CMake，确认读取器源码参与编译。运行并核对最高速度120.5 km/h、允许自动变道“是”、时长60秒；路径错误时先检查 <code>config.ini</code> 是否在工程根目录。</li>\n<li>将工程文件树、<code>CMakeLists.txt</code> 与运行结果合并同屏截取，并在 <code>CMakeLists.txt</code> 中<strong>用红框圈出参与编译的两个外部库 <code>.cpp</code> 文件路径</strong>。</li>\n</ol>\n<h5>本阶段构建配置：外部配置读取</h5>\n<pre><code class=\"language-cmake\">cmake_minimum_required(VERSION 3.16)\nproject(simulation_app LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nadd_executable(simulation_app\n    main.cpp\n    external/inih/cpp/INIReader.cpp\n    external/inih/ini.cpp\n)\ntarget_compile_definitions(simulation_app PRIVATE\n    CONFIG_FILE_PATH=&quot;${CMAKE_CURRENT_SOURCE_DIR}/config.ini&quot;)\n</code></pre>\n<h5>本阶段案例代码：配置读取主程序</h5>\n<pre><code class=\"language-cpp\">// 链接并使用 inih 库来读取配置文件\n\n#include &lt;iostream&gt;\n#include &quot;external/inih/cpp/INIReader.h&quot; // 包含第三方库的头文件\n\n#ifndef CONFIG_FILE_PATH\n#define CONFIG_FILE_PATH &quot;config.ini&quot;\n#endif\n\nint main() {\n    // 创建 INIReader 对象，并加载配置文件\n    INIReader reader(CONFIG_FILE_PATH);\n\n    // 检查文件是否加载成功\n    if (reader.ParseError() &lt; 0) {\n        std::cout &lt;&lt; &quot;无法加载 &#39;config.ini&#39;\\n&quot;;\n        return 1;\n    }\n\n    // 使用库提供的API读取配置项\n    //    GetReal(section, name, default_value)\n    double max_speed = reader.GetReal(&quot;DriverAssist&quot;, &quot;max_speed&quot;, 80.0);\n    //    GetBoolean(section, name, default_value)\n    bool lane_change = reader.GetBoolean(&quot;DriverAssist&quot;, &quot;lane_change_enabled&quot;, false);\n    //    GetInteger(section, name, default_value)\n    long duration = reader.GetInteger(&quot;Simulation&quot;, &quot;duration_s&quot;, 30);\n\n    // 打印读取到的配置\n    std::cout &lt;&lt; &quot;--- 仿真配置加载成功 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;最高速度： &quot; &lt;&lt; max_speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;允许自动变道： &quot; &lt;&lt; (lane_change ? &quot;是&quot; : &quot;否&quot;) &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;仿真时长： &quot; &lt;&lt; duration &lt;&lt; &quot; 秒&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>本阶段配置文件：仿真参数</h5>\n<pre><code class=\"language-ini\">; 车辆仿真配置文件\n[DriverAssist]\nmax_speed = 120.5      ; 最高巡航速度 (km/h)\nlane_change_enabled = true ; 是否允许自动变道\n\n[Simulation]\nduration_s = 60        ; 仿真总时长 (秒)\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>配置库构建与运行.png</code>（同屏显示工程文件树、红框标注的两个外部库源文件路径，以及120.5、是、60的初次运行结果）。</p>\n"
                },
                {
                  "id": "class-c-ext-e2-stage-2",
                  "number": 2,
                  "title": "配置值改写与复核",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行、测试与对照。</strong> 不重新修改C++源码，只修改 <code>config.ini</code> 中的个人参数，验证程序动态读取新值。</p>\n<ol>\n<li>在个人 <code>config.ini</code> 顶部注释写入 <code>; 配置管理员：[本人姓名]</code>，并把最高速度改为 <code>80.0 + 本人学号末一位</code>、自动变道改为 <code>false</code>、仿真时长改为 <code>30 + 本人学号末两位</code>；保留原有节名与键名，<strong>不重新改动 <code>main.cpp</code> 代码</strong>。</li>\n<li>直接再次运行可执行程序，核对输出依次为你本人的最高速度、“否”和本人仿真时长；若结果仍是旧值，检查程序读取的文件路径与当前编辑的 <code>config.ini</code> 是否一致。</li>\n<li>将修改后的 <code>config.ini</code> 编辑器画面与终端运行结果左右同屏截图，并在 <code>config.ini</code> 上<strong>用红框圈出修改后的三项键值对</strong>。</li>\n</ol>\n<p><img src=\"assets/classroom-effects/p05-7ad0fb2adb49.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>配置改写与运行.png</code>（同屏显示含本人注释与红框标注三项新值的 <code>config.ini</code>，以及无需改源码即生效的新运行输出）。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "project-06",
      "number": 6,
      "title": "车辆对象管理",
      "groups": [
        {
          "id": "t-p06-intro",
          "title": "车辆对象职责界定",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-f",
              "caseId": "c-ai-f",
              "label": "案例 F",
              "title": "AIGC错误逻辑纠正",
              "taskId": "t-p06-intro",
              "forms": [
                "手算与图解、调试与修正",
                "扩充并运行、调试与修正"
              ],
              "plan": "先手算车辆位移并与异常结果对照，再把源码和核验依据交给AIGC定位单位问题。修正后扩充刹车操作，用小于减速量的初速检验速度边界；两轮都保留问题、修改与测试，不能只接受AI给出的解释。",
              "cardCaption": [
                "车辆逻辑的两次排错",
                "位移与刹车"
              ],
              "background": [
                {
                  "html": "<p>车辆仿真需要同时保存位置和速度，并在时间推进时更新位置。现有程序已经把这些数据与行为放进 <code>Vehicle</code> 类，却让从0米出发、以36 km/h行驶10秒的车停在360米。</p>\n<p>这个结果与实际单位不符。先手算应行驶的距离，再借助AIGC定位并修正类中的计算，认识“对象状态与行为放在一起”之后仍需验证逻辑。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "面向对象设计"
                },
                {
                  "title": "成员方法与状态更新"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-f-stage-1",
                  "number": 1,
                  "title": "位置错误诊断",
                  "leads": [],
                  "html": "<p><strong>任务形式：手算与图解、调试与修正。</strong> 借助AIGC找出问题，在个人副本中完成修正，保留原版与修正版的运行证据。</p>\n<ol>\n<li>将下方代码复制到个人 <code>.cpp</code> 文件，运行并截取输出360米的画面。根据初始位置0米、速度36 km/h、时间10秒，手算预期距离，并找出 <code>update_position()</code> 中计算距离的语句。</li>\n<li>只复制错误版的 <code>Vehicle</code> 类及上述输入、实际值、预期值给AIGC，发送工单原指令：<strong>“我创建了一辆车，初始位置在0米，速度为36 km/h，行驶10秒。我预期距离是 10 m/s * 10 s = 100米。但程序输出的最终位置是360米。请帮我找出错误并解释原因。”</strong></li>\n<li>阅读AIGC指出的问题与修改建议，在个人副本中自行修改距离计算部分；保持 <code>Vehicle</code> 类、测试数据和原有输出方法的主体不变。不要只复制AI给出的运行结果，须实际编译运行自己的修正版。</li>\n<li>在源码顶部用两三行注释写明：AI指出的原语句、错误原因，以及你实际采用的修正方法。将运行报告标为“测试车[学号]的位置核验”，确认最终位置为100米并截图；若结果不符，继续检查并修正。将此版本保存为车辆位置程序的“距离修正版”。</li>\n</ol>\n<h5>本阶段案例代码：车辆位置待诊断版</h5>\n<p>先按原样运行，再在个人副本中完成修正。</p>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\nclass Vehicle {\npublic:\n    Vehicle(double initial_pos, double initial_speed)\n        : position_m_(initial_pos), speed_kmh_(initial_speed) {}\n\n    void update_position(double time_seconds) {\n        const double distance_traveled = speed_kmh_ * time_seconds;\n        position_m_ += distance_traveled;\n    }\n\n    void print_status() const {\n        std::cout &lt;&lt; &quot;当前位置: &quot; &lt;&lt; position_m_ &lt;&lt; &quot; 米, 当前速度: &quot;\n                  &lt;&lt; speed_kmh_ &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n    }\n\nprivate:\n    double position_m_;\n    double speed_kmh_;\n};\n\nint main() {\n    Vehicle my_car(0.0, 36.0);\n    my_car.update_position(10.0);\n    my_car.print_status();\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">初次运行：当前位置 360 米，当前速度 36 km/h\n修正运行：测试车[本人学号]的位置核验，当前位置 100 米\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>位置_距离源码.png</code>（修正后的距离计算与AIGC诊断注释）、<code>位置_初次运行.png</code>（360米）和 <code>位置_修正运行.png</code>（100米及测试车编号）。</p>\n"
                },
                {
                  "id": "class-c-ai-f-stage-2",
                  "number": 2,
                  "title": "刹车行为诊断",
                  "leads": [
                    {
                      "html": "<p>使用位移计算修正后的车辆类增加刹车操作。用小于减速量的初速检查速度边界，把不符合预期的运行结果作为新的AIGC诊断材料。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：扩充并运行、调试与修正。</strong> 在个人副本中加入 <code>brake()</code>，运行后根据观察结果决定怎样修改。</p>\n<ol>\n<li>把上一阶段完成的“距离修正版”另存为刹车练习文件。在 <code>Vehicle</code> 类的 <code>public</code> 区<strong>自行编写</strong>一个无参数 <code>brake()</code>：每调用一次，就把当前车速减10。</li>\n<li>在 <code>main</code> 原有100米测试之后，另外创建两辆初始位置均为0、初速分别为5和36的车。让每辆车各调用一次新写的 <code>brake()</code>，随后调用原有状态打印方法。运行并记录两辆车的实际速度，检查是否满足车速最低为0的要求。</li>\n<li>将<strong>自己刚写的 <code>brake()</code> 方法和两组实际运行结果</strong>交给AIGC，说明“每次刹车减速10，车速最低为0”，请它判断运行结果是否符合要求；如有问题，解释原因并提出修正建议。</li>\n<li>根据AI建议自行修改 <code>brake()</code>，重新运行：初速5应得到0，初速36应得到26，原距离测试仍应为100米。若任一结果不符，调整修复方案后重测。在源码顶部用一两行注释写下AI的边界处理建议和本人核验结论；两辆车的状态记录沿用“测试车[学号]”编号。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">距离测试：当前位置 100 米\n初速5 km/h，刹车后：0 km/h\n初速36 km/h，刹车后：26 km/h\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>位置_刹车源码.png</code>（刹车方法、两车调用和核验注释）及 <code>位置_刹车核验.png</code>（100米、刹车后0和26及测试车编号）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p06-b01",
          "title": "车辆对象设计",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-049",
              "caseId": "c-049",
              "label": "案例 49",
              "title": "车辆对象设计",
              "taskId": "t-p06-b01",
              "forms": [
                "挖空并补全、测试与对照",
                "扩充并运行"
              ],
              "plan": "先补全车辆类的加速、减速和读取方法，核对规定的速度变化，再尝试类外直接修改数据。随后增加油量状态及对应操作，检查外部调用与类内状态是否一致，以运行和编译结果确认对象的数据边界。",
              "cardCaption": [
                "把车辆数据交给对象管理",
                "类与对象"
              ],
              "background": [
                {
                  "html": "<p>车辆管理需要把速度等状态与加速、减速、读取操作组织到同一个对象中。给定Vehicle类保留了需要补全的方法，程序应得到60→65→55的速度变化；若直接从main改写速度，是否会绕过原本的操作约定？</p>\n<p>本次先完成车辆的基本行为并试探类外访问边界，再给同一车辆增加油量状态。新增属性与原有行为都要通过清晰接口管理，才能让显示结果与对象内部保存的状态保持一致。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "类与对象"
                }
              ],
              "stages": [
                {
                  "id": "class-c-049-stage-1",
                  "number": 1,
                  "title": "车辆类补全",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全、测试与对照。</strong> 练习代码保留初始化方法、数据字段和打印框架；加速、减速、读取速度及 <code>main</code> 中的调用留给学生完成。</p>\n<ol>\n<li>将下方练习代码复制到自己的 <code>.cpp</code> 文件。先找出四个操作方法、<code>speed</code> 与 <code>position</code> 两个数据字段，以及 <code>main</code> 创建和调用对象的位置。</li>\n<li>参照已经写好的 <code>set_initial_state()</code>，完成类内三个 <code>// TODO</code>：当速度小于120时加5；当前速度大于0时减5；返回当前速度。保持方法名、参数与数据字段不变。</li>\n<li>在 <code>main</code> 的两个 <code>// TODO</code> 处，分别补一次加速调用、两次减速调用。把输出标题写成“驾驶员[姓名]的车辆速度测试”，再依次打印初始60、加速后65、两次减速后55；若结果不符，检查三个方法是否操作同一个 <code>speed</code> 字段。</li>\n<li>在 <code>main</code> 中<strong>自行写一条语句</strong>，尝试通过对象名直接把 <code>speed</code> 设置为200；编译并截取本人所写语句与编译器结果。记录观察后撤销这条临时语句，再确认程序能够正常运行。</li>\n</ol>\n<h5>本阶段练习代码：车辆类</h5>\n<pre><code class=\"language-cpp\">// 从struct到class，设计第一个&quot;车辆&quot;类\n\n#include &lt;iostream&gt;\n\n// 我们要重构的 Vehicle 类\nclass Vehicle {\npublic:\n    // 公共成员函数 - 对象的&quot;行为&quot;\n\n    // 加速（行为）\n    void accelerate() {\n        // TODO 1：车速低于120时加速5。\n    }\n\n    // 减速（行为）\n    void brake() {\n        // TODO 2：参照加速方法，完成“当前速度大于0时减速5”。\n    }\n\n    // 获取当前速度（行为）\n    double get_speed() {\n        // TODO 3：返回当前速度。\n    }\n\n    // 设置车辆的初始状态（行为）\n    void set_initial_state(double initial_speed) {\n        speed = initial_speed;\n    }\n\nprivate:\n    // 数据成员 - 对象的&quot;属性&quot;\n    double speed;       // 车速 (km/h)\n    double position;    // 位置 (m)\n};\n\n// 程序入口使用 Vehicle 对象\nint main() {\n    // 创建一个 Vehicle 类的对象（实例），名为 my_car\n    Vehicle my_car;\n\n    // 通过公共接口（成员函数）来初始化和操作对象\n    my_car.set_initial_state(60.0);\n    std::cout &lt;&lt; &quot;初始车速: &quot; &lt;&lt; my_car.get_speed() &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n\n    // TODO 4：调用一次加速方法。\n    std::cout &lt;&lt; &quot;加速后车速: &quot; &lt;&lt; my_car.get_speed() &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n\n    // TODO 5：连续调用两次减速方法。\n    std::cout &lt;&lt; &quot;连续两次减速后车速: &quot; &lt;&lt; my_car.get_speed() &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">驾驶员[本人姓名]的车辆速度测试\n初始车速：60 km/h\n加速后车速：65 km/h\n连续两次减速后车速：55 km/h\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-0efa56df9a12.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>车辆类_补全源码.png</code>（五处TODO的补全代码）、<code>车辆类_基本运行.png</code>（驾驶员标识及60→65→55）和 <code>车辆类_访问尝试.png</code>（本人写的语句与编译结果）。</p>\n"
                },
                {
                  "id": "class-c-049-stage-2",
                  "number": 2,
                  "title": "新增油量状态",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 沿用已补全的 <code>Vehicle</code> 类，按给定骨架新增私有油量状态与受控加油接口。</p>\n<ol>\n<li>将下方骨架片段加入已完成的 <code>Vehicle</code> 类，仅补全 <code>refuel</code> 与 <code>get_fuel</code> 中的两处 <code>// TODO</code>（不得把 <code>fuel</code> 移到 <code>public</code> 区）。</li>\n<li>在 <code>main</code> 保留原有车速测试，随后依次调用 <code>my_car.refuel(20.0 + 本人学号末两位)</code> 和 <code>my_car.refuel(-5.0)</code>，每次调用后以“加油站操作员[姓名]”身份打印当前油量。</li>\n<li>运行检查：两次打印的油量均为 <code>20.0 + 本人学号末两位</code>（负数加油被拦截），原有车速结果仍为60→65→55。将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出拦截非正数加油量的条件判断</strong>。</li>\n</ol>\n<h5>本阶段扩充骨架：私有油量与受控加油方法</h5>\n<pre><code class=\"language-cpp\">// 在 public 区新增：\n    void refuel(double amount) {\n        // TODO 1：仅当 amount 大于 0 时，才将 amount 累加到私有成员 fuel。\n    }\n\n    double get_fuel() const {\n        // TODO 2：返回当前油量 fuel。\n    }\n\n// 在 private 区新增：\n    double fuel = 0.0; // 初始油量 (L)\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">加油站操作员[本人姓名]\nrefuel(20+学号末两位) 后油量：[20+学号末两位]\nrefuel(-5) 后油量：[20+学号末两位]\n原速度测试仍显示：60 → 65 → 55 km/h\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-82b6eaf42b12.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>车辆类_油量源码与运行.png</code>（同屏显示私有油量字段、红框标注的正数校验条件，以及操作员标识、车速55和两次相同的个人油量输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-050",
              "caseId": "c-050",
              "label": "案例 50",
              "title": "车辆启动熄火",
              "taskId": "t-p06-b01",
              "forms": [
                "挖空并补全",
                "扩充并运行"
              ],
              "plan": "先补全构造、启动与析构提示，按作用域前、内部和之后记录对象生命周期，再为车辆加入身份ID。对照多条提示判断何时创建、使用和销毁，确保新增身份始终对应同一车辆，而不是仅增加无关输出。",
              "cardCaption": [
                "车辆对象的生存过程",
                "构造与析构"
              ],
              "background": [
                {
                  "html": "<p>车辆对象要在创建时准备初始状态，在不再使用时结束其生命周期。原版把车放在局部花括号内并启动引擎，代码没有显式调用销毁操作，输出里却会出现销毁提示。</p>\n<p>先补全构造与析构中的关键语句，再按作用域前、作用域内、作用域后记录实际顺序，理解对象何时自动创建和销毁。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "构造与析构"
                }
              ],
              "stages": [
                {
                  "id": "class-c-050-stage-1",
                  "number": 1,
                  "title": "补全启停监控",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 保留现有成员方法和局部作用域测试。</p>\n<ol>\n<li>先阅读代码，找到对象创建、引擎启动、局部作用域结束和析构提示所在的位置；完成 TODO 前不要运行未初始化的练习版。</li>\n<li>在个人副本的构造函数中完成初始状态与创建提示，在析构函数中完成销毁提示；不要手动调用析构函数。</li>\n<li>运行并记录输出顺序，截图要包含作用域前、作用域内与作用域后的输出；在源码顶部用注释写下实际顺序，并说明析构提示为何在退出局部作用域时出现，且先于作用域后的主程序结束提示。</li>\n</ol>\n<h5>本阶段练习代码：构造、析构与局部作用域</h5>\n<pre><code class=\"language-cpp\">// 使用构造函数和析构函数管理车辆对象的生命周期\n\n#include &lt;iostream&gt;\n\nclass Vehicle {\npublic:\n    // 构造函数 (Constructor)\n    //    - 函数名与类名完全相同\n    //    - 没有返回类型\n    //    - 在对象创建时自动被调用\n    Vehicle() {\n        // TODO 1：把 speed 设为0.0，把 is_running 设为false。\n        // TODO 2：输出车辆创建、引擎熄火、速度0的提示。\n    }\n\n    // 析构函数 (Destructor)\n    //    - 函数名是波浪号(~)后跟类名\n    //    - 没有返回类型，也没有参数\n    //    - 在对象生命周期结束时（如离开作用域）自动被调用\n    ~Vehicle() {\n        // TODO 3：输出对象销毁的提示。\n    }\n\n    // 公共成员函数 - 对象的&quot;行为&quot;\n    void start_engine() {\n        is_running = true;\n        std::cout &lt;&lt; &quot;[行为]: 引擎已启动。&quot; &lt;&lt; std::endl;\n    }\n\n    void stop_engine() {\n        is_running = false;\n        std::cout &lt;&lt; &quot;[行为]: 引擎已熄火。&quot; &lt;&lt; std::endl;\n    }\n\n    // 获取当前速度\n    double get_speed() {\n        return speed;\n    }\n\n    // 获取运行状态\n    bool get_is_running() {\n        return is_running;\n    }\n\nprivate:\n    // 私有数据成员 - 对象的&quot;属性&quot;\n    double speed;\n    bool is_running;\n};\n\n// 程序入口观察对象的创建和销毁\nint main() {\n    std::cout &lt;&lt; &quot;--- main函数开始 ---&quot; &lt;&lt; std::endl;\n\n    { // 创建一个新的作用域来观察对象的生命周期\n        std::cout &lt;&lt; &quot;  -&gt; 进入新的作用域, 准备创建 my_car 对象...&quot; &lt;&lt; std::endl;\n\n        // 当这行代码执行时, Vehicle 的构造函数会自动被调用\n        Vehicle my_car; \n\n        // 验证一下初始状态\n        std::cout &lt;&lt; &quot;  -&gt; 验证初始状态: 车辆运行中? &quot; \n                  &lt;&lt; (my_car.get_is_running() ? &quot;是&quot; : &quot;否&quot;) &lt;&lt; std::endl;\n\n        my_car.start_engine(); // 启动引擎\n\n        std::cout &lt;&lt; &quot;  -&gt; 准备离开作用域...&quot; &lt;&lt; std::endl;\n    } // 当代码执行到这个右花括号, my_car 对象的生命周期结束, 析构函数会自动被调用\n\n    std::cout &lt;&lt; &quot;--- main函数结束 ---&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">创建提示 → 启动/熄火提示 → 局部作用域结束 → 销毁提示\n</code></pre>\n<p>核对说明：析构日志应在退出局部作用域时自动出现，并先于该作用域后的主程序结束提示。</p>\n<p><img src=\"assets/classroom-effects/p06-fcbe6ca86416.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>生命周期_基础源码.png</code>（构造、析构补全处及观察注释）和 <code>生命周期_基础运行.png</code>（作用域前、作用域内、作用域后的输出）。</p>\n"
                },
                {
                  "id": "class-c-050-stage-2",
                  "number": 2,
                  "title": "增加车辆身份ID",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 在启停程序上增加车辆ID，继续观察原有生命周期输出。</p>\n<ol>\n<li>为 <code>Vehicle</code> 增加字符串类型的车辆ID，让构造时能够指定ID；创建和销毁提示都应显示对应车辆的ID。保留原有速度、引擎状态和启停行为。</li>\n<li>在同一个局部作用域内依次创建两辆不同ID的车，ID中包含本人学号后四位；让第一辆车启动引擎，并把这组日志标为“车辆管理员[姓名]的启停记录”。</li>\n<li>运行并对照两车的创建、销毁顺序，判断离开作用域后哪辆先销毁。若原来的无参创建语句无法编译，检查它是否已与新构造方式匹配。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">车辆管理员[本人姓名]的启停记录\n创建[车辆ID-A] → 创建[车辆ID-B]\n销毁[车辆ID-B] → 销毁[车辆ID-A]\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-3d4d3df816c9.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>生命周期_ID源码.png</code>（车辆ID及创建、销毁日志代码）和 <code>生命周期_ID扩充.png</code>（两车不同ID和逆序销毁）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-051",
              "caseId": "c-051",
              "label": "案例 51",
              "title": "车辆对象克隆",
              "taskId": "t-p06-b01",
              "forms": [
                "挖空并补全",
                "扩充并运行、测试与对照"
              ],
              "plan": "先补齐VIN的独立存储与复制，核对原车、克隆车的内容及地址，再修改一方检查另一方。随后扩充车型属性的复制，用两类信息一起验证克隆完整性，同时观察对象结束时的资源释放。",
              "cardCaption": [
                "克隆车辆时复制 VIN",
                "深拷贝"
              ],
              "background": [
                {
                  "html": "<p>车辆管理系统需要从一辆原型车创建另一辆具有相同VIN的车，之后两辆车应能独立存在。</p>\n<p>原版VIN保存在动态字符数组中；如果只复制指针地址，改动或销毁其中一辆车会影响另一辆。先让克隆车拥有自己的VIN存储，再比较内容、地址和修改后的结果。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "拷贝构造"
                },
                {
                  "title": "拷贝赋值"
                }
              ],
              "stages": [
                {
                  "id": "class-c-051-stage-1",
                  "number": 1,
                  "title": "写出VIN深拷贝",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 完整练习代码把拷贝构造中的两条关键语句换成 <code>// TODO</code>；只补这两处，原有日志语句保留。</p>\n<ol>\n<li>在普通构造中圈出 <code>new char[... + 1]</code> 和 <code>strcpy</code>，明确字符结束符也需占一个位置。</li>\n<li>在拷贝构造中补全现有的两处 TODO：目标是新分配一块内存并复制 <code>other.vin</code> 的<strong>内容</strong>，不能直接写 <code>vin = other.vin;</code>；原有日志语句保留，未补完前不要运行克隆测试。</li>\n<li>在 <code>display()</code> 暂时同时打印 <code>vin</code> 内容和地址；地址用 <code>static_cast&lt;const void*&gt;(vin)</code> 输出，避免把 <code>char*</code> 当作字符串再次打印。</li>\n<li>在 <code>main</code> 用 <code>VIN-学号</code> 创建原型车并克隆，随后把原型车改为 <code>VIN-学号-MOD</code>；检查两车最初内容相同、地址不同，修改后克隆车仍保留旧 VIN。保存运行截图。</li>\n</ol>\n<h5>本阶段练习代码：VIN深拷贝与克隆验证</h5>\n<pre><code class=\"language-cpp\">// 通过实现拷贝构造函数来安全地克隆对象\n\n#include &lt;iostream&gt;\n#include &lt;cstring&gt; // 用于 strcpy 和 strlen\n\nclass Vehicle {\npublic:\n    // 普通构造函数\n    Vehicle(const char* id) {\n        std::cout &lt;&lt; &quot;[普通构造]: 正在创建车辆, ID: &quot; &lt;&lt; id &lt;&lt; std::endl;\n        // 为 vin 分配动态内存\n        vin = new char[strlen(id) + 1];\n        strcpy(vin, id);\n    }\n\n    // 拷贝构造函数 (Copy Constructor)\n    //    - 参数是同一个类的常引用 (const Vehicle&amp;)\n    Vehicle(const Vehicle&amp; other) {\n        std::cout &lt;&lt; &quot;[拷贝构造]: 正在克隆车辆, 源ID: &quot; &lt;&lt; other.vin &lt;&lt; std::endl;\n        // 实现深拷贝\n        // a. 为新对象的 vin 分配一块全新的内存\n        // TODO 1：按 other.vin 的长度另开字符数组，保留结束符空间。\n        // b. 将源对象 vin 的内容复制到这块新内存中\n        // TODO 2：把 other.vin 的内容复制到新数组。\n    }\n\n    // 析构函数\n    ~Vehicle() {\n        std::cout &lt;&lt; &quot;[析构函数]: 正在销毁车辆, ID: &quot; &lt;&lt; vin &lt;&lt; std::endl;\n        // 释放动态分配的内存\n        delete[] vin;\n    }\n\n    // 公共成员函数 - 用于修改和显示 vin\n    void set_vin(const char* new_id) {\n        delete[] vin; // 先释放旧内存\n        vin = new char[strlen(new_id) + 1];\n        strcpy(vin, new_id);\n    }\n\n    void display() const {\n        std::cout &lt;&lt; &quot;  -&gt; 当前车辆VIN: &quot; &lt;&lt; vin &lt;&lt; std::endl;\n    }\n\nprivate:\n    char* vin; // 车辆识别码 (动态分配内存)\n};\n\n// 程序入口展示对象克隆\nint main() {\n    // 创建一个原型车\n    std::cout &lt;&lt; &quot;--- 创建原型车 ---&quot; &lt;&lt; std::endl;\n    Vehicle prototype_car(&quot;VIN-PROTOTYPE-001&quot;);\n    prototype_car.display();\n\n    std::cout &lt;&lt; &quot;\\n--- 克隆新车 ---&quot; &lt;&lt; std::endl;\n    // 当使用一个已存在的对象来初始化一个新对象时，拷贝构造函数会被自动调用\n    Vehicle cloned_car = prototype_car; \n    cloned_car.display();\n\n    std::cout &lt;&lt; &quot;\\n--- 修改原型车的VIN ---&quot; &lt;&lt; std::endl;\n    prototype_car.set_vin(&quot;VIN-MODIFIED-999&quot;);\n    std::cout &lt;&lt; &quot;原型车修改后:&quot; &lt;&lt; std::endl;\n    prototype_car.display();\n\n    std::cout &lt;&lt; &quot;\\n--- 验证克隆车是否受影响 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;克隆车(未修改):&quot; &lt;&lt; std::endl;\n    cloned_car.display(); // 验证其 VIN 是否保持不变\n\n    std::cout &lt;&lt; &quot;\\n--- main函数结束, 对象将被销毁 ---&quot; &lt;&lt; std::endl;\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">原型车 VIN：VIN-[本人学号]，地址：[地址A]\n克隆车 VIN：VIN-[本人学号]，地址：[地址B]\n修改原型后：原型车 VIN 末尾带 MOD；克隆车 VIN 保持原值\n</code></pre>\n<p>核对说明：地址A与地址B不同；具体地址以本机为准。</p>\n<p><img src=\"assets/classroom-effects/p06-5be6a96ee1b7.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>克隆_VIN源码.png</code>（深拷贝两处补全代码及VIN内容、地址注释）和 <code>克隆_VIN对照.png</code>（两车VIN与地址对照）。</p>\n"
                },
                {
                  "id": "class-c-051-stage-2",
                  "number": 2,
                  "title": "车型属性也要克隆",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 保留VIN深拷贝主体，再增加能随克隆复制的车型属性。</p>\n<ol>\n<li>为车辆增加 <code>std::string</code> 类型的车型属性，初始车型为 <code>SEDAN</code>；让拷贝构造后的车辆也拥有相同车型，并在 <code>display()</code> 中显示。</li>\n<li>增加修改车型的功能。克隆后只把原型车改为 <code>SUV</code>，观察克隆车的车型是否保持 <code>SEDAN</code>。</li>\n<li>运行时核对两车车型、VIN地址与正常销毁的输出，保存截图。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">原型车车型：SUV；克隆车车型：SEDAN\n原型车与克隆车的 VIN 地址不同\n两辆车离开作用域时均正常销毁\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-90aedd7313b4.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>克隆_车型源码.png</code>（车型字段及拷贝代码）和 <code>克隆_车型对照.png</code>（原车SUV、克隆车SEDAN、VIN地址不同、正常析构）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p06-b02",
          "title": "功能重载优化",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-052",
              "caseId": "c-052",
              "label": "案例 52",
              "title": "核心数据封装",
              "taskId": "t-p06-b02",
              "forms": [
                "测试与对照",
                "扩充并运行、测试与对照"
              ],
              "plan": "先尝试任务卡给出的类外访问并保留编译反馈，再补出只读ID及受控状态读写接口。用合法和非法输入检查速度、温度等数据的变化，验证外部无法绕过接口破坏状态，内部行为仍能正常更新车辆。",
              "cardCaption": [
                "哪些车辆信息能从外部访问",
                "访问控制"
              ],
              "background": [
                {
                  "html": "<p>车辆状态包含ID、车速和引擎温度。若类外代码能直接把车速设为负数，或绕过加速行为任意改温度，状态就可能互相矛盾。</p>\n<p>本案例先试探现有访问边界，再设计只读ID、受控车速修改和由车辆行为更新的温度，让外部操作通过清楚的接口进行。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "访问说明符和接口边界"
                }
              ],
              "stages": [
                {
                  "id": "class-c-052-stage-1",
                  "number": 1,
                  "title": "编译器拦截",
                  "leads": [],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 先尝试访问现有成员，再恢复可运行版本。</p>\n<ol>\n<li>复制封装练习代码为个人副本，找到 <code>main</code> 中两条被注释的成员访问语句。</li>\n<li>分别尝试取消 <code>my_car.speed = 200.0;</code> 和 <code>my_car.update_engine_temp();</code> 的注释；每次只改一行，编译并保存编译器结果，然后恢复原状。</li>\n<li>运行原程序，观察引擎温度变化；在个人源码顶部用两行注释解释两次访问尝试的结果。</li>\n</ol>\n<h5>本阶段案例代码：封装练习：私有数据与内部辅助函数</h5>\n<pre><code class=\"language-cpp\">// 使用 public 和 private 封装车辆数据\n\n#include &lt;iostream&gt;\n\nclass Vehicle {\n// public 成员：类的公共接口，供外部代码与对象交互\npublic:\n    // 构造函数通常是 public 的，以便能创建对象\n    Vehicle(int vehicle_id) : id(vehicle_id), speed(0.0), engine_temperature(25.0) {\n        std::cout &lt;&lt; &quot;ID为 &quot; &lt;&lt; id &lt;&lt; &quot; 的车辆已创建。&quot; &lt;&lt; std::endl;\n    }\n\n    // 公共行为接口：加速\n    void accelerate() {\n        if (speed &lt; 120.0) {\n            speed += 10.0;\n            // 调用私有的辅助函数来更新内部状态\n            update_engine_temp(); \n        }\n        std::cout &lt;&lt; &quot;车辆正在加速... 当前速度: &quot; &lt;&lt; speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n    }\n\n    // 公共数据接口：安全地获取速度\n    double get_speed() const {\n        return speed;\n    }\n\n    // 公共数据接口：安全地获取引擎温度\n    double get_engine_temperature() const {\n        return engine_temperature;\n    }\n\n// private 成员：类的内部实现，只能由本类成员函数访问\nprivate:\n    // 私有核心数据\n    const int id;             // 车辆的唯一ID，const确保其不可变\n    double speed;             // 当前速度\n    double engine_temperature;// 引擎温度\n\n    // 私有辅助函数，属于内部实现细节\n    void update_engine_temp() {\n        engine_temperature += 5.0; // 每次加速，温度升高\n    }\n};\n\n// 程序入口通过 Vehicle 的公共接口展示封装\nint main() {\n    // 创建一个 Vehicle 对象，ID为 2024\n    Vehicle my_car(2024);\n\n    // 通过成员函数与对象交互\n    std::cout &lt;&lt; &quot;初始引擎温度: &quot; &lt;&lt; my_car.get_engine_temperature() &lt;&lt; &quot; C&quot; &lt;&lt; std::endl;\n    my_car.accelerate();\n    my_car.accelerate();\n    std::cout &lt;&lt; &quot;加速后引擎温度: &quot; &lt;&lt; my_car.get_engine_temperature() &lt;&lt; &quot; C&quot; &lt;&lt; std::endl;\n\n    // 课堂访问尝试：每次只取消其中一行的注释\n    // my_car.speed = 200.0;\n    // my_car.update_engine_temp();\n    // std::cout &lt;&lt; my_car.id;\n\n    std::cout &lt;&lt; &quot;\\n演示结束。以上被注释的代码如果取消注释，程序将无法通过编译。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">正常运行：初始引擎温度 25 C；两次加速后 35 C\n临时访问尝试：编译器分别指出私有数据/私有方法不可从类外访问\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-d693f69dbeda.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>封装_访问源码.png</code>（访问尝试后的说明注释）和 <code>封装_访问尝试.png</code>（本人尝试的代码行与编译器结果同屏可见）。</p>\n"
                },
                {
                  "id": "class-c-052-stage-2",
                  "number": 2,
                  "title": "写安全读写接口",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 在封装类上按给定骨架新增受控接口，使用三组输入核验状态变化。</p>\n<ol>\n<li>逐一检查三个私有数据：车辆ID为创建后不变的只读属性，车速可由公共方法受控修改，引擎温度仅由加速行为内部更新。将下方骨架片段加入 <code>Vehicle</code> 类的 <code>public</code> 区，仅补全 <code>get_id</code> 与 <code>set_speed</code> 中的两处 <code>// TODO</code>：仅接受 <code>0.0</code> 到 <code>120.0</code>（含边界）的车速；无效输入不改变原速度，并打印含本人姓名学号和被拒输入值的拦截提示。</li>\n<li>设本人合规测试车速为 <code>70.0 + 本人学号末两位</code>（若超过110则取 <code>70.0 + 本人学号末一位</code>）。在 <code>main</code> 中依次用该合规车速、<code>-10.0</code>、<code>130.0</code> 调用 <code>set_speed</code> 并打印每次结果；再调用原有 <code>accelerate()</code> 观察引擎温度随之变化。</li>\n<li>将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出判断车速处于 <code>0.0</code> 到 <code>120.0</code> 之间的复合条件表达式</strong>。</li>\n</ol>\n<h5>本阶段扩充骨架：只读ID与受控设速接口</h5>\n<pre><code class=\"language-cpp\">    int get_id() const {\n        // TODO 1：返回只读的车辆 id。\n    }\n\n    void set_speed(double new_speed) {\n        // TODO 2：若 new_speed 在 [0.0, 120.0] 范围内则更新 speed；否则保持原值并打印“[本人姓名/学号]拦截非法车速: new_speed”。\n    }\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">初次设速[本人合规值] → 车速[本人合规值]\n尝试设速-10 → 拦截，车速仍为[本人合规值]\n尝试设速130 → 拦截，车速仍为[本人合规值]\n</code></pre>\n<p>核对说明：提示应含本人姓名学号与被拒绝的输入值。</p>\n<p><img src=\"assets/classroom-effects/p06-8630c232ee89.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>封装_安全接口源码与运行.png</code>（同屏显示红框标注的车速范围校验、只读ID接口，以及三次设速结果、拦截提示与温度变化）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-053",
              "caseId": "c-053",
              "label": "案例 53",
              "title": "this指针链式操作",
              "taskId": "t-p06-b02",
              "forms": [
                "仿写并运行"
              ],
              "plan": "先运行已有速度和车道设置，再参照它们补充可连续调用的加速与换道方法。核对每个方法的返回对象以及整条调用链结束后的状态，确保所有操作都作用于当前车辆，没有意外创建另一份状态。",
              "cardCaption": [
                "连续设置同一辆车",
                "this 链式调用"
              ],
              "background": [
                {
                  "html": "<p>驾驶员连续设置速度、车道时，若每个方法都返回当前车辆，就可以把操作写成一条链。</p>\n<p>本案例先运行已有的速度和车道设置，再仿写加速与换道，检验连续调用是否始终作用于同一个对象。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "this与链式返回"
                }
              ],
              "stages": [
                {
                  "id": "class-c-053-stage-1",
                  "number": 1,
                  "title": "扩展链式行为",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 起始代码中的 <code>set_speed()</code>、<code>set_lane()</code> 都返回 <code>Vehicle&amp;</code>，按给定骨架补全加速与换道的链式方法。</p>\n<ol>\n<li>复制并运行下方链式调用代码，观察已有的 <code>set_speed</code>、<code>set_lane</code> 为何能连续调用。</li>\n<li>将下方骨架中的 <code>accelerate(double delta)</code> 与 <code>change_lane(int target_lane)</code> 加入 <code>Vehicle</code> 类，补全两处 <code>// TODO</code>，使它们同样支持链式调用。</li>\n<li>在 <code>main</code> 中以“驾驶员[姓名]的链式指令”为标题，使用指定调用 <code>my_car.set_speed(60.0).accelerate(10.0+学号末位).change_lane(3).display();</code>，其中 <code>学号末位</code> 代入本人学号的最后一位数字。给定初速为60 km/h、车速增量为10.0+学号末位（km/h）、目标车道为3；运行后记录并核对实际状态。</li>\n<li>将新增方法、指定调用与运行窗口同屏截图。</li>\n</ol>\n<h5>本阶段仿写骨架：链式加速与换道</h5>\n<pre><code class=\"language-cpp\">    Vehicle&amp; accelerate(double delta) {\n        // TODO 1：将当前对象的 speed 增加 delta，并返回当前对象自身的引用。\n    }\n\n    Vehicle&amp; change_lane(int target_lane) {\n        // TODO 2：将当前对象的 lane 改为 target_lane，并返回当前对象自身的引用。\n    }\n</code></pre>\n<h5>本阶段案例代码：链式调用练习：this与链式调用</h5>\n<pre><code class=\"language-cpp\">// 使用 this 指针实现链式调用\n\n#include &lt;iostream&gt;\n\nclass Vehicle {\npublic:\n    // 构造函数\n    Vehicle(int id) : vehicle_id(id), speed(0.0), lane(1) {}\n\n    // set_speed 函数\n    //    - 返回类型为 Vehicle&amp;，即对 Vehicle 对象的引用\n    Vehicle&amp; set_speed(double new_speed) {\n        this-&gt;speed = new_speed;\n        // &#39;this&#39; 是一个指向当前对象的指针\n        //    &#39;*this&#39; 就是当前对象本身\n        //    返回 *this 使得可以继续对该对象进行其他操作\n        return *this;\n    }\n\n    // set_lane 函数，同样返回 Vehicle&amp;\n    Vehicle&amp; set_lane(int new_lane) {\n        this-&gt;lane = new_lane;\n        return *this; // 返回当前对象的引用\n    }\n\n    // display 函数用于显示对象状态，它不需要参与链式调用，返回 void 即可\n    void display() const {\n        std::cout &lt;&lt; &quot;--- 车辆状态报告 ---&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;车辆 ID: &quot; &lt;&lt; vehicle_id &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;当前速度: &quot; &lt;&lt; speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;所在车道: &quot; &lt;&lt; lane &lt;&lt; std::endl;\n    }\n\nprivate:\n    int vehicle_id;\n    double speed;\n    int lane;\n};\n\n// 程序入口展示链式调用\nint main() {\n    // 创建一个 Vehicle 对象\n    Vehicle my_car(101);\n\n    std::cout &lt;&lt; &quot;使用链式调用配置车辆...&quot; &lt;&lt; std::endl;\n\n    // 链式调用 (Chained Method Calls)\n    //    my_car.set_speed(80.0) 执行后返回 my_car 自身的引用,\n    //    然后该引用继续调用 .set_lane(2)\n    my_car.set_speed(80.0).set_lane(2);\n\n    // 验证配置结果\n    my_car.display();\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">驾驶员[本人姓名]的链式指令\n本人输入：初速60 km/h，车速增量[10+本人学号末位] km/h，目标车道3\n实际车辆状态：[以本人程序运行输出为准]\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-dbe061160c62.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>链式调用_源码与运行.png</code>（同屏显示新增方法、指定调用，以及驾驶员标识与实际车辆状态）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-054",
              "caseId": "c-054",
              "label": "案例 54",
              "title": "常量成员引用",
              "taskId": "t-p06-b02",
              "forms": [
                "测试与对照",
                "扩充并运行"
              ],
              "plan": "先记录共享车辆计数，分别尝试修改只读VIN和删除成员方法的const，保留编译反馈并恢复。再加入全体车辆共用的最高限速，用两次加速核验封顶结果，同时确认原有计数演示仍为0、3、2。",
              "cardCaption": [
                "每辆车的身份与共享计数",
                "const 与 static"
              ],
              "background": [
                {
                  "html": "<p>每辆车都有自己的VIN，但“当前共有多少辆车”应是全体对象共享的数据。原版还创建了常量车辆对象：它能读取哪些信息，要看成员方法是否承诺不改对象。</p>\n<p>本次实操通过计数变化和两次编译尝试，区分每车数据、共享数据与只读操作。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "const与static"
                }
              ],
              "stages": [
                {
                  "id": "class-c-054-stage-1",
                  "number": 1,
                  "title": "核验计数与常量对象",
                  "leads": [],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 先观察静态计数和常量对象的编译结果，再恢复源码。</p>\n<ol>\n<li>复制并运行共享状态练习，记录程序开始、局部作用域内创建第三辆车、离开作用域后的车辆计数。</li>\n<li>在临时副本中把只读VIN移到 <code>public</code> 区，尝试在 <code>main</code> 中给已有对象的VIN重新赋值，保存编译器结果；随后把VIN恢复到 <code>private</code> 区。</li>\n<li>临时删掉 <code>display()</code> 函数声明末尾的 <code>const</code>，编译并保存结果；随后恢复并重新运行。在源码顶部用简短注释说明VIN的初始化位置、共享计数的定义位置，以及两次编译尝试各说明什么。</li>\n</ol>\n<h5>本阶段案例代码：共享状态练习：常量VIN与静态计数</h5>\n<pre><code class=\"language-cpp\">// 结合 const 和 static 成员管理车辆信息\n\n#include &lt;iostream&gt;\n\nclass Vehicle {\npublic:\n    // 构造函数\n    //    - const 成员 &#39;VIN&#39; 必须在成员初始化列表中进行初始化\n    Vehicle(int vin) : VIN(vin) {\n        vehicle_count++; // 每创建一个对象, 静态计数器加一\n        std::cout &lt;&lt; &quot;[构造] VIN: &quot; &lt;&lt; VIN &lt;&lt; &quot; 的车辆已创建。&quot;;\n        std::cout &lt;&lt; &quot;当前车辆总数: &quot; &lt;&lt; vehicle_count &lt;&lt; std::endl;\n    }\n\n    // 析构函数\n    ~Vehicle() {\n        vehicle_count--; // 每销毁一个对象, 静态计数器减一\n        std::cout &lt;&lt; &quot;[析构] VIN: &quot; &lt;&lt; VIN &lt;&lt; &quot; 的车辆已销毁。&quot;;\n        std::cout &lt;&lt; &quot;当前车辆总数: &quot; &lt;&lt; vehicle_count &lt;&lt; std::endl;\n    }\n\n    // 常量成员函数: 承诺不修改任何成员变量\n    void display() const {\n        std::cout &lt;&lt; &quot;  -&gt; 车辆信息 | VIN: &quot; &lt;&lt; VIN &lt;&lt; std::endl;\n    }\n\n    // 静态成员函数: 属于类, 不属于任何特定对象\n    //    它只能访问静态成员\n    static int get_vehicle_count() {\n        return vehicle_count;\n    }\n\nprivate:\n    // const 成员: 每个对象都有一份, 但初始化后不可更改\n    const int VIN; \n\n    // static 成员: 所有对象共享一份\n    static int vehicle_count; \n};\n\n// 静态数据成员必须在类定义的外部进行初始化\nint Vehicle::vehicle_count = 0;\n\n// 程序入口展示 const 和 static 成员的使用\nint main() {\n    std::cout &lt;&lt; &quot;程序开始时, 车辆总数: &quot; &lt;&lt; Vehicle::get_vehicle_count() &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;\\n--- 创建两辆车 ---&quot; &lt;&lt; std::endl;\n    Vehicle car1(101);\n    Vehicle car2(102);\n\n    std::cout &lt;&lt; &quot;\\n--- 进入一个新的作用域 ---&quot; &lt;&lt; std::endl;\n    {\n        const Vehicle car3_const(103); // 创建一个常量对象\n        std::cout &lt;&lt; &quot;在作用域内部, 车辆总数: &quot; &lt;&lt; Vehicle::get_vehicle_count() &lt;&lt; std::endl;\n\n        car3_const.display(); // OK: const 对象可以调用 const 成员函数\n        // car3_const.VIN = 104;\n    } // car3_const 在这里被销毁\n\n    std::cout &lt;&lt; &quot;\\n--- 离开作用域后 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;程序即将结束, 车辆总数: &quot; &lt;&lt; car1.get_vehicle_count() &lt;&lt; std::endl; // 也可以通过对象调用静态函数\n\n    return 0;\n} // car1 和 car2 在这里被销毁\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">程序开始：车辆总数0\n局部作用域内：车辆总数3\n离开局部作用域后：车辆总数2\n</code></pre>\n<p>核对说明：两次编译尝试另截编译器结果。</p>\n<p><img src=\"assets/classroom-effects/p06-6c3cc24bbb60.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>共享状态_观察源码.png</code>（计数与两次编译尝试的观察注释）、<code>共享计数_运行.png</code>（计数0、3、2）、<code>只读VIN_赋值尝试.png</code>（临时公开后修改只读成员的结果）和 <code>常量对象_编译尝试.png</code>（删除 <code>const</code> 后的本人修改处与编译器结果）。</p>\n"
                },
                {
                  "id": "class-c-054-stage-2",
                  "number": 2,
                  "title": "统一最高限速",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 保留VIN、构造析构和静态计数主体，按给定骨架补全共享最高限速与加速封顶逻辑。</p>\n<ol>\n<li>将下方骨架片段加入共享状态练习的 <code>Vehicle</code> 类，补全两处 <code>// TODO</code>：每辆车拥有各自的 <code>speed</code>（初值为0），全体车辆共享静态常量 <code>MAX_SPEED</code>（设为 <code>190.0 + 本人学号末一位 * 2.0</code>，例如末位为4则为 <code>198.0</code>）；加速方法在超过 <code>MAX_SPEED</code> 时截断为 <code>MAX_SPEED</code>。</li>\n<li>对 <code>car1</code> 依次调用 <code>accelerate(180.0)</code>、<code>accelerate(30.0)</code>，每次显示车速，并保留原有车辆计数演示。</li>\n<li>运行核对第一次加速后为 <code>180.0</code>、第二次加速后封顶为你本人的 <code>MAX_SPEED</code>，且车辆数仍为0、3、2；输出“安全监督员[姓名]”，将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出共享限速的 <code>static const</code> 声明</strong>。</li>\n</ol>\n<h5>本阶段扩充骨架：每车速度与共享最高限速</h5>\n<pre><code class=\"language-cpp\">// 在 public 区新增：\n    void accelerate(double delta) {\n        if (delta &gt; 0) {\n            speed += delta;\n            // TODO 1：若 speed 超过 MAX_SPEED，将其截断为 MAX_SPEED。\n        }\n    }\n    double get_speed() const { return speed; }\n\n// 在 private 区新增：\n    double speed = 0.0;\n    // TODO 2：声明静态常量 double MAX_SPEED（或在类外初始化为 190.0 + 本人学号末一位 * 2.0）。\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">安全监督员[本人姓名]\n加速180 → 180 km/h\n再加速30 → [190+学号末一位×2] km/h（封顶）\n</code></pre>\n<p>核对说明：原有计数仍为0、3、2。</p>\n<p><img src=\"assets/classroom-effects/p06-7a6555603f68.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>共享限速_源码与运行.png</code>（同屏显示红框标注的共享限速声明、加速截断代码，以及安全监督员标识、计数0/3/2和封顶车速输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-055",
              "caseId": "c-055",
              "label": "案例 55",
              "title": "诊断后门设置",
              "taskId": "t-p06-b02",
              "forms": [
                "测试与对照、扩充并运行"
              ],
              "plan": "先去掉、恢复函数授权，对照编译结果并补齐两类故障判断，再扩充为诊断工具类。使用状态不同的车辆核对故障读取、里程与保养操作，确认授权对象、访问范围和被操作的车辆都正确。",
              "cardCaption": [
                "诊断工具访问私有数据",
                "友元授权"
              ],
              "background": [
                {
                  "html": "<p>故障码属于车辆内部状态，普通类外代码不应随意读取；诊断工具却必须取得它，才能显示检修结果。原版只授权一个外部诊断函数。</p>\n<p>本次实操先去掉授权观察编译结果，再加入“有故障／无故障”两种分支，明确授权范围与实际用途。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "友元函数"
                },
                {
                  "title": "友元类"
                }
              ],
              "stages": [
                {
                  "id": "class-c-055-stage-1",
                  "number": 1,
                  "title": "函数授权与双分支诊断",
                  "leads": [],
                  "html": "<p><strong>任务形式：测试与对照、扩充并运行。</strong> 起始代码中的私有字段名是 <code>engine_fault_code_</code>，诊断函数名是 <code>run_vehicle_diagnostics</code>。</p>\n<ol>\n<li>将下方友元函数版代码复制为个人副本；先运行故障码404的原测试，确认输出包含故障码。</li>\n<li>暂时去掉类内的友元声明，保留诊断函数的其余代码，编译并保存结果；随后恢复原声明并重新运行。</li>\n<li>扩充诊断函数：故障码为0时显示“正常”，其他情况显示实际故障码。分别诊断故障码404和0的车辆，输出“外部检修工[姓名]”。</li>\n</ol>\n<h5>本阶段案例代码：友元函数版诊断工具</h5>\n<pre><code class=\"language-cpp\">// 使用 friend 函数访问私有成员\n\n#include &lt;iostream&gt;\n\nclass Vehicle {\npublic:\n    Vehicle(int fault_code) : engine_fault_code_(fault_code) {}\n\nprivate:\n    int engine_fault_code_;\n\n    // 声明外部函数 run_vehicle_diagnostics 是本类的友元\n    //    这给予了该函数访问 Vehicle 所有成员的权限\n    friend void run_vehicle_diagnostics(const Vehicle&amp; vehicle);\n};\n\n// 友元函数的定义（在类的外部）\n//    注意：这里没有 Vehicle:: 前缀，因为它是一个全局函数，不是成员函数\nvoid run_vehicle_diagnostics(const Vehicle&amp; vehicle) {\n    std::cout &lt;&lt; &quot;[诊断工具]: 正在通过友元函数访问...&quot; &lt;&lt; std::endl;\n    // 直接访问 Vehicle 的私有成员 engine_fault_code_\n    if (vehicle.engine_fault_code_ == 0) {\n        std::cout &lt;&lt; &quot;  -&gt; 诊断结果: 引擎状态正常。&quot; &lt;&lt; std::endl;\n    } else {\n        std::cout &lt;&lt; &quot;  -&gt; 检测到故障! 故障码: &quot; &lt;&lt; vehicle.engine_fault_code_ &lt;&lt; std::endl;\n    }\n}\n\nint main() {\n    Vehicle my_car(404); // 创建一辆带有故障码的汽车\n\n    // 调用全局的友元函数，对 my_car 对象进行诊断\n    run_vehicle_diagnostics(my_car);\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">外部检修工[本人姓名]\n故障码404 → 显示实际故障码\n故障码0 → 显示“正常”\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-4cb3900adf99.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>友元函数_源码.png</code>（双分支诊断代码）、<code>友元函数_授权尝试.png</code>（去掉声明后的编译结果）和 <code>友元函数_双分支.png</code>（外部检修工标识、故障码404与0）。</p>\n"
                },
                {
                  "id": "class-c-055-stage-2",
                  "number": 2,
                  "title": "诊断专员授权",
                  "leads": [
                    {
                      "html": "<p>把单项诊断扩充为工具类，分别核对故障读取、里程查看和保养重置。使用两辆状态不同的车辆，检查各项操作是否作用于正确对象。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：测试与对照、扩充并运行。</strong> 在友元类版本中验证授权范围，再扩充保养行为。</p>\n<ol>\n<li>复制下方友元类版代码。按源码顺序找 <code>class Vehicle;</code> 前向声明、<code>DiagnosticTool</code> 方法声明、<code>Vehicle</code> 完整定义、类外 <code>perform_full_scan</code> 实现。</li>\n<li>暂时去掉 <code>DiagnosticTool</code> 的友元授权，编译并观察结果；恢复授权后继续修改个人副本。</li>\n<li>让完整诊断同时处理“无故障”和“有故障”的车辆，并保留原有读取、重置里程的功能。</li>\n<li>使用故障码501、里程15000.5和故障码0、里程200的两辆车测试；两车诊断后的里程都应为0，第二辆应显示“无故障”。输出“诊断专员[姓名]”。</li>\n</ol>\n<h5>本阶段案例代码：友元类版诊断工具</h5>\n<pre><code class=\"language-cpp\">// 使用 friend 类访问私有成员\n\n#include &lt;iostream&gt;\n\n// 需要前向声明 Vehicle 类, 因为 DiagnosticTool 的成员函数参数会用到它\nclass Vehicle; \n\n// 诊断工具类\nclass DiagnosticTool {\npublic:\n    void perform_full_scan(Vehicle&amp; vehicle); // 成员函数声明\n};\n\n// 车辆类\nclass Vehicle {\npublic:\n    Vehicle(int fault_code, double initial_mileage) \n        : engine_fault_code_(fault_code), mileage_(initial_mileage) {}\n\n    void display() const {\n        std::cout &lt;&lt; &quot;  -&gt; 车辆当前状态 | 故障码: &quot; &lt;&lt; engine_fault_code_ \n                  &lt;&lt; &quot;, 里程: &quot; &lt;&lt; mileage_ &lt;&lt; &quot; km&quot; &lt;&lt; std::endl;\n    }\n\nprivate:\n    int engine_fault_code_;\n    double mileage_;\n\n    // 声明 DiagnosticTool 整个类是本类的友元\n    //    这意味着 DiagnosticTool 的所有成员函数都可以访问 Vehicle 的私有成员\n    friend class DiagnosticTool;\n};\n\n// DiagnosticTool 成员函数的实现\n// 必须在 Vehicle 类的完整定义之后\nvoid DiagnosticTool::perform_full_scan(Vehicle&amp; vehicle) {\n    std::cout &lt;&lt; &quot;[诊断工具]: 正在通过友元类进行深度扫描...&quot; &lt;&lt; std::endl;\n\n    // 直接访问 Vehicle 的私有成员\n    std::cout &lt;&lt; &quot;  -&gt; 读取到故障码: &quot; &lt;&lt; vehicle.engine_fault_code_ &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;  -&gt; 检测到里程数: &quot; &lt;&lt; vehicle.mileage_ &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;  -&gt; 正在执行保养操作: 重置里程数...&quot; &lt;&lt; std::endl;\n\n    // 甚至可以修改 Vehicle 的私有成员\n    vehicle.mileage_ = 0; \n}\n\nint main() {\n    Vehicle my_car(501, 15000.5);\n    DiagnosticTool technician_tool;\n\n    std::cout &lt;&lt; &quot;保养前:&quot; &lt;&lt; std::endl;\n    my_car.display();\n\n    // 使用诊断工具对车辆进行扫描和操作\n    technician_tool.perform_full_scan(my_car);\n\n    std::cout &lt;&lt; &quot;\\n保养后:&quot; &lt;&lt; std::endl;\n    my_car.display();\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">诊断专员[本人姓名]\n车辆A：故障码501，里程15000.5 → 诊断后里程0\n车辆B：故障码0，里程200 → 显示“无故障”，诊断后里程0\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-8d1efb1b4f20.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>友元类_源码.png</code>（授权与保养代码）、<code>友元类_授权尝试.png</code>（取消授权后的编译结果）和 <code>友元类_保养运行.png</code>（501与0两种故障码、两车里程归零）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-056",
              "caseId": "c-056",
              "label": "案例 56",
              "title": "车辆操作重载",
              "taskId": "t-p06-b02",
              "forms": [
                "仿写并运行",
                "扩充并运行、测试与对照"
              ],
              "plan": "先补出默认和指定量的刹车方法，与两种加速调用成对核验；再补齐减号运算并比较原车与结果车，最后对照前后缀自增。分别记录方法选择、对象状态与返回值，区分直接修改对象和生成结果对象。",
              "cardCaption": [
                "用不同调用形式操作车辆",
                "重载"
              ],
              "background": [
                {
                  "html": "<p>试车员有时只需默认加速5，有时要给出具体加速量。原版车辆类用同一个 <code>accelerate</code> 名称提供两种参数形式。</p>\n<p>本案例先核对两次调用实际选中的方法，再仿照它们补齐默认和指定量的刹车操作。随后还会为车辆增加加减与自增运算，用原车和结果对象的对照区分“改变当前状态”和“返回一份新旧状态”。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "成员函数重载"
                },
                {
                  "title": "运算符重载"
                }
              ],
              "stages": [
                {
                  "id": "class-c-056-stage-1",
                  "number": 1,
                  "title": "加速与刹车成对重载",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 以已有加速重载为参照，补齐默认和带参数的刹车操作。</p>\n<ol>\n<li>复制下方函数重载版代码并运行，核对 <code>accelerate()</code> 使0→5、<code>accelerate(20.0)</code> 使5→25；比较两个函数的参数列表。</li>\n<li>仿照已有的两种加速方法，新增“不带参数默认减速5”和“按指定数值减速”两种刹车方法；都更新同一辆车的速度。车速不能降到0以下，负的减速量不应使车辆加速。</li>\n<li>在原加速测试后，分别试一次默认刹车、减速10和减速100；每次显示状态，核对速度25→20→10→0，并输出“制动测试员[姓名]”。</li>\n</ol>\n<h5>本阶段案例代码：成员函数重载版车辆操作</h5>\n<pre><code class=\"language-cpp\">// 使用成员函数重载提供灵活接口\n\n#include &lt;iostream&gt;\n\nclass Vehicle {\npublic:\n    Vehicle(int id) : id_(id), speed_(0.0) {}\n\n    // 重载版本 1：无参数，默认加速\n    void accelerate() {\n        std::cout &lt;&lt; &quot;[调用 accelerate()]: 默认加速 5.0 km/h&quot; &lt;&lt; std::endl;\n        speed_ += 5.0;\n    }\n\n    // 重载版本 2：带一个 double 参数，指定量加速\n    void accelerate(double amount) {\n        std::cout &lt;&lt; &quot;[调用 accelerate(double)]: 指定加速 &quot; &lt;&lt; amount &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n        speed_ += amount;\n    }\n\n    void display() const {\n        std::cout &lt;&lt; &quot;  -&gt; 当前状态 | ID: &quot; &lt;&lt; id_ &lt;&lt; &quot;, 速度: &quot; &lt;&lt; speed_ &lt;&lt; &quot; km/h\\n&quot; &lt;&lt; std::endl;\n    }\n\nprivate:\n    int id_;\n    double speed_;\n};\n\nint main() {\n    Vehicle my_car(101);\n    my_car.display();\n\n    // 编译器根据有无参数，自动选择调用哪个版本的 accelerate\n    my_car.accelerate();       // 调用无参数版本\n    my_car.display();\n\n    my_car.accelerate(20.0);   // 调用带 double 参数版本\n    my_car.display();\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">制动测试员[本人姓名]\n两次加速：0 → 5 → 25 km/h\n默认刹车：25 → 20 km/h\n再减速10：20 → 10 km/h；再减速100：10 → 0 km/h\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-403b9e2d34f9.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>函数重载_源码.png</code>（新增的刹车重载和调用）及 <code>函数重载_运行.png</code>（25→20→10→0）。</p>\n"
                },
                {
                  "id": "class-c-056-stage-2",
                  "number": 2,
                  "title": "补写减号运算符",
                  "leads": [
                    {
                      "html": "<p>用给定的加号操作比较原车与结果车，再补出减号操作。需要分别保留两辆车的状态，确认得到新对象与直接修改原对象的区别。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 以加号运算符为参照补写减号，原车状态保持不变。</p>\n<ol>\n<li>复制下方运算符重载版代码，将 <code>my_car</code> 的初始速度改为 <code>60.0 + 本人学号末一位</code>，先运行原来的 <code>my_car + 20.0</code>，观察新对象与原车的速度。</li>\n<li>仿照已有的全局加号运算符 <code>operator+</code>，实现全局减号运算符 <code>Vehicle operator-(const Vehicle&amp; vehicle, double speed_decrease)</code>：由原车和减速量生成一辆新车，沿用原车ID，若相减后低于0则将新车速度设为0；原车状态保持不变。</li>\n<li>在 <code>main</code> 中分别测试 <code>my_car - 15.0</code> 和 <code>my_car - 100.0</code>，借助已有 <code>&lt;&lt;</code> 运算符显示原车与两辆新车。本阶段源码与结果直接保留到下一阶段自增测试后合并同屏提交。</li>\n</ol>\n<h5>本阶段案例代码：运算符重载版车辆操作</h5>\n<pre><code class=\"language-cpp\">// 使用运算符重载提供直观操作\n\n#include &lt;iostream&gt;\n\nclass Vehicle {\npublic:\n    Vehicle(int id, double speed = 0.0) : id_(id), speed_(speed) {}\n\n    // ... (这里可以保留无参数的 accelerate 函数)\n\n    double get_speed() const { return speed_; }\n    int get_id() const { return id_; }\n\nprivate:\n    int id_;\n    double speed_;\n\n    // 声明流插入运算符 &lt;&lt; 为友元函数\n    friend std::ostream&amp; operator&lt;&lt;(std::ostream&amp; os, const Vehicle&amp; vehicle);\n};\n\n// 重载 &lt;&lt; 运算符的实现（全局函数）\nstd::ostream&amp; operator&lt;&lt;(std::ostream&amp; os, const Vehicle&amp; vehicle) {\n    os &lt;&lt; &quot;  -&gt; 车辆状态 | ID: &quot; &lt;&lt; vehicle.id_ &lt;&lt; &quot;, 速度: &quot; &lt;&lt; vehicle.speed_ &lt;&lt; &quot; km/h&quot;;\n    return os;\n}\n\n// 重载 + 运算符的实现（全局函数）\n//    返回一个新的 Vehicle 对象，原对象不变\nVehicle operator+(const Vehicle&amp; vehicle, double speed_increase) {\n    Vehicle new_vehicle(vehicle.get_id(), vehicle.get_speed() + speed_increase);\n    return new_vehicle;\n}\n\nint main() {\n    Vehicle my_car(101, 60.0);\n\n    // 使用重载的 &lt;&lt; 运算符直接打印对象\n    std::cout &lt;&lt; &quot;初始状态: &quot; &lt;&lt; my_car &lt;&lt; std::endl;\n\n    // 使用重载的 + 运算符进行计算\n    Vehicle faster_car = my_car + 20.0;\n\n    std::cout &lt;&lt; &quot;加速后(新对象): &quot; &lt;&lt; faster_car &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;原对象状态(不变): &quot; &lt;&lt; my_car &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">原车：[60+学号末一位] km/h\n减15产生新车：[45+学号末一位] km/h；减100产生新车：0 km/h\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-2c2b4cc8de51.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> 并入下一阶段 <code>运算符_综合源码与运行.png</code> 一并提交。</p>\n"
                },
                {
                  "id": "class-c-056-stage-3",
                  "number": 3,
                  "title": "前后缀自增对照",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 按给定骨架补全前后缀 <code>++</code>，对比表达式返回值与原车状态。</p>\n<ol>\n<li>将下方骨架片段加入 <code>Vehicle</code> 类的 <code>public</code> 区，补全两处 <code>// TODO</code>：前缀 <code>++</code> 将车速加1并返回当前对象的引用；后缀 <code>++(int)</code> 先备份原车状态，再将车速加1，最后按值返回备份的旧状态。</li>\n<li>用两辆初速均为 <code>60.0 + 本人学号末一位</code>、编号含学号后四位的测试车分别执行 <code>++carA</code> 和 <code>carB++</code>。打印表达式返回状态与操作后原车状态：前缀两者均为 <code>[61+学号末一位]</code>，后缀返回 <code>[60+学号末一位]</code> 而原车变为 <code>[61+学号末一位]</code>；同时保留上一阶段的加减法输出。</li>\n<li>将源码与运行窗口同屏截图，并在源码上<strong>用红框圈出区分后缀自增重载的那个 <code>int</code> 占位参数</strong>。</li>\n</ol>\n<h5>本阶段扩充骨架：前缀与后缀自增运算符重载</h5>\n<pre><code class=\"language-cpp\">    // 前缀自增 ++car\n    Vehicle&amp; operator++() {\n        // TODO 1：将 speed_ 加 1.0，并返回当前对象自身的引用 (*this)。\n    }\n\n    // 后缀自增 car++（带 int 占位参数）\n    Vehicle operator++(int) {\n        // TODO 2：先保存当前对象的副本 Vehicle old = *this; 再将 speed_ 加 1.0，最后返回 old。\n    }\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">前缀测试：返回状态[61+学号末一位] km/h，原车[61+学号末一位] km/h\n后缀测试：返回旧状态[60+学号末一位] km/h，原车[61+学号末一位] km/h\n</code></pre>\n<p>核对说明：两辆测试车均带本人编号。</p>\n<p><img src=\"assets/classroom-effects/p06-9fa7c28aaa92.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>运算符_综合源码与运行.png</code>（同屏显示减号运算符、红框标注的后缀自增 <code>int</code> 占位参数，以及加减法与前后缀自增的完整对照输出）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p06-capstone",
          "title": "车辆对象模块设计",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-f1",
              "caseId": "c-ext-f1",
              "label": "拓展案例 F1",
              "title": "对象智能指针管理",
              "taskId": "t-p06-capstone",
              "forms": [
                "观察与分析",
                "改写并运行、测试与对照"
              ],
              "plan": "先比较原生、独占和共享三种指针写法的创建、复制与销毁日志，再按任务卡修正个人副本。将所有者变化、离开作用域及最终释放对应起来，核对对象何时仍被持有、何时真正销毁。",
              "cardCaption": [
                "谁负责释放车辆日志",
                "所有权管理"
              ],
              "background": [
                {
                  "html": "<p>车辆对象会记录运行日志，日志对象的生命周期应与拥有它的车辆相匹配。原生指针、独占指针和共享指针在离开作用域、复制或共享时表现不同。</p>\n<p>先运行三种写法，比较销毁日志，再改写一份个人副本验证所有权处理。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "独占与共享所有权"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-f1-stage-1",
                  "number": 1,
                  "title": "观察并核验释放",
                  "leads": [],
                  "html": "<p><strong>任务形式：观察与分析。</strong> 用原始程序对照三种指针管理方式的日志销毁时机。</p>\n<ol>\n<li>复制旁边的智能指针练习代码并阅读三段对象创建语句；运行后分别查找 Raw-A、Unique-D、Shared-S1 是否打印 <code>[Log DESTROYED]</code>：若出现，记录销毁时机；若未出现，说明原因。</li>\n<li>在个人源码顶部用注释记下各日志是否销毁，以及已销毁日志的实际销毁时机；找到 <code>RawPtrVehicle car_C = *car_B;</code>，说明浅拷贝后 <code>car_B</code>、<code>car_C</code> 保存的是不是同一日志地址。</li>\n<li>本阶段先观察原版行为；对象释放方式留到下一阶段修改。</li>\n</ol>\n<h5>本阶段案例代码：智能指针练习：三种指针的日志生命周期</h5>\n<pre><code class=\"language-cpp\">// 对比原生指针与智能指针进行动态内存管理\n\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;memory&gt; // 必须包含此头文件以使用智能指针\n\n// 车辆日志类，其对象的生命周期将被追踪\nclass VehicleLog {\npublic:\n    VehicleLog(const std::string&amp; id) : vehicle_id_(id) {\n        std::cout &lt;&lt; &quot;  [Log CREATED] for vehicle &quot; &lt;&lt; vehicle_id_ &lt;&lt; std::endl;\n    }\n    ~VehicleLog() {\n        std::cout &lt;&lt; &quot;  [Log DESTROYED] for vehicle &quot; &lt;&lt; vehicle_id_ &lt;&lt; std::endl;\n    }\nprivate:\n    std::string vehicle_id_;\n};\n\n// 对比 1：使用原生指针的车辆类\nclass RawPtrVehicle {\npublic:\n    RawPtrVehicle(const std::string&amp; id) : id_(id) {\n        log_ptr_ = new VehicleLog(id_);\n    }\nprivate:\n    std::string id_;\n    VehicleLog* log_ptr_;\n};\n\n// 对比 2：使用 unique_ptr 的车辆类\nclass UniquePtrVehicle {\npublic:\n    UniquePtrVehicle(const std::string&amp; id) : id_(id) {\n        log_ptr_ = std::make_unique&lt;VehicleLog&gt;(id_);\n    }\nprivate:\n    std::string id_;\n    std::unique_ptr&lt;VehicleLog&gt; log_ptr_;\n};\n\n// 对比 3：使用 shared_ptr 的车辆类\nclass SharedPtrVehicle {\npublic:\n    // 构造函数，创建一个新的日志\n    SharedPtrVehicle(const std::string&amp; id) : id_(id) {\n        log_ptr_ = std::make_shared&lt;VehicleLog&gt;(id_);\n    }\n    // 拷贝构造函数\n    SharedPtrVehicle(const SharedPtrVehicle&amp; other) : id_(other.id_ + &quot;-copy&quot;) {\n        this-&gt;log_ptr_ = other.log_ptr_;\n    }\nprivate:\n    std::string id_;\n    std::shared_ptr&lt;VehicleLog&gt; log_ptr_;\n};\n\nint main() {\n    std::cout &lt;&lt; &quot;--- 1. 原生指针的风险演示 ---&quot; &lt;&lt; std::endl;\n    {\n        RawPtrVehicle car_A(&quot;Raw-A&quot;);\n    }\n    std::cout &lt;&lt; &quot;  -&gt; car_A 作用域结束，日志并未销毁，发生内存泄漏。\\n&quot; &lt;&lt; std::endl;\n\n    RawPtrVehicle* car_B = new RawPtrVehicle(&quot;Raw-B&quot;);\n    RawPtrVehicle car_C = *car_B;\n    delete car_B;\n    std::cout &lt;&lt; &quot;  -&gt; car_B和car_C浅拷贝后，内存管理混乱，极易出错。\\n&quot; &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;--- 2. unique_ptr 的安全演示 ---&quot; &lt;&lt; std::endl;\n    {\n        UniquePtrVehicle car_D(&quot;Unique-D&quot;);\n    }\n    std::cout &lt;&lt; &quot;  -&gt; car_D 作用域结束，日志被自动销毁，无泄漏。\\n&quot; &lt;&lt; std::endl;\n    // UniquePtrVehicle car_E = car_D;\n\n    std::cout &lt;&lt; &quot;--- 3. shared_ptr 的安全共享演示 ---&quot; &lt;&lt; std::endl;\n    SharedPtrVehicle* s_car1 = nullptr;\n    {\n        s_car1 = new SharedPtrVehicle(&quot;Shared-S1&quot;);\n        SharedPtrVehicle s_car2 = *s_car1;\n\n        std::cout &lt;&lt; &quot;  -&gt; s_car1 和 s_car2 的作用域开始。&quot; &lt;&lt; std::endl;\n    }\n    std::cout &lt;&lt; &quot;  -&gt; s_car2 作用域结束，但日志因为还在被 s_car1 共享，所以依然存活。&quot; &lt;&lt; std::endl;\n\n    delete s_car1;\n    std::cout &lt;&lt; &quot;  -&gt; 当最后一个使用者s_car1被销毁后，日志才被安全释放。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">[Log CREATED] for vehicle Raw-A\n-&gt; car_A 作用域结束，日志并未销毁\n[Log CREATED] for vehicle Unique-D\n[Log DESTROYED] for vehicle Unique-D\n[Log CREATED] for vehicle Shared-S1\n-&gt; s_car2 作用域结束，日志依然存活\n[Log DESTROYED] for vehicle Shared-S1\n</code></pre>\n<p>核对说明：截图保留上述日志的先后关系，原程序还有其他提示行。</p>\n<p><img src=\"assets/classroom-effects/p06-efb6b5316425.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>指针_观察源码.png</code>（三种日志是否销毁、已销毁日志的销毁时机，以及浅拷贝观察注释）及 <code>指针_原版观察.png</code>（三种日志的运行输出）。</p>\n"
                },
                {
                  "id": "class-c-ext-f1-stage-2",
                  "number": 2,
                  "title": "修正一份个人副本",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行、测试与对照。</strong> 只改原生指针版本的所有权处理，再核验共享计数。</p>\n<ol>\n<li>参照同文件的 <code>UniquePtrVehicle</code>，让原生指针版本中的日志改由独占智能指针管理；保留原有的日志输出行为，不直接复制整个参考类。</li>\n<li>保留原有的车辆复制语句编译一次，保存编译器结果；再调整这条测试语句，使最终程序能够正常运行。</li>\n<li>给原生指针版本的车辆ID加入本人学号，运行观察离开作用域时的日志；再为共享指针版本增加查看拥有者数量的公共方法，对照共享前、共享后的计数。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">车辆ID：[含本人学号]\n独占版本：对象离开作用域后日志自动销毁\n共享版本：增加所有者后计数上升；所有者释放后计数下降\n</code></pre>\n<p>核对说明：实际计数按本人的创建与释放顺序核对。</p>\n<p><img src=\"assets/classroom-effects/p06-48fcb4778216.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>指针_修正源码.png</code>（原生指针版本的所有权修正与共享计数接口）、<code>指针_复制尝试.png</code>（本人测试语句与编译结果）和 <code>指针_释放与计数.png</code>（带学号的车辆ID、销毁日志和共享计数）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-f2",
              "caseId": "c-ext-f2",
              "label": "拓展案例 F2",
              "title": "数据点内存池设计",
              "taskId": "t-p06-capstone",
              "forms": [
                "扩充并运行、测试与对照",
                "测试与对照"
              ],
              "plan": "先用容量2的内存池检验分配耗尽，再归还节点并比较再次分配的地址，确认复用行为。最后在相同工作量和构建条件下计时，将容量、归还、复用的功能证据与性能数据分开记录，不用一次计时替代正确性检查。",
              "cardCaption": [
                "GPS 数据点的复用路径",
                "内存池"
              ],
              "background": [
                {
                  "html": "<p>定位模块会不断创建和释放GPS数据点，频繁申请小块内存可能带来额外开销。现有内存池预先准备一批节点并维护空闲链表。</p>\n<p>本次实操用容量2的小池观察耗尽、归还和地址复用，再在相同工作量下比较它与普通分配的计时结果。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "空闲链表与性能比较"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-f2-stage-1",
                  "number": 1,
                  "title": "池耗尽测试",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 使用容量为2的小池检查第三次申请的结果。</p>\n<ol>\n<li>复制内存池练习代码，观察内存池没有空闲节点时 <code>allocate()</code> 会给出什么结果。</li>\n<li>在原有性能测试前，增加容量为2的小池测试：连续申请三次，分别打印三次申请是否成功；不修改原来的大规模测试。</li>\n<li>运行核对前两次申请与第三次申请的区别。使用返回指针前先检查是否为空，并将这组输出标为“资源管理员[姓名]的容量2测试”。</li>\n</ol>\n<h5>本阶段案例代码：内存池练习：GPS内存池和性能比较</h5>\n<pre><code class=\"language-cpp\">// 设计并实现一个简单的对象内存池\n\n#include &lt;iostream&gt;\n#include &lt;vector&gt;\n#include &lt;chrono&gt; // 用于计时\n\n// 需要频繁创建和销毁的对象\nstruct GPSDataPoint {\n    double longitude;\n    double latitude;\n    long long timestamp;\n};\n\n// 为 GPSDataPoint 设计的内存池\nclass GPSDataPool {\npublic:\n    // 构造函数，指定池的大小\n    explicit GPSDataPool(size_t size) : pool_size_(size) {\n        // 一次性申请大块内存\n        pool_ = new GPSDataPoint[pool_size_];\n\n        // 将所有内存块串成一个空闲链表\n        // 这里用一种技巧：将下一个空闲块的地址存放在当前空闲块本身的空间里\n        for (size_t i = 0; i &lt; pool_size_ - 1; ++i) {\n            // reinterpret_cast 用于在指针类型间进行底层转换\n            *reinterpret_cast&lt;GPSDataPoint**&gt;(&amp;pool_[i]) = &amp;pool_[i + 1];\n        }\n        // 链表末尾指向 nullptr\n        *reinterpret_cast&lt;GPSDataPoint**&gt;(&amp;pool_[pool_size_ - 1]) = nullptr;\n\n        // free_list_ 指向第一个空闲块\n        free_list_ = &amp;pool_[0];\n    }\n\n    // 析构函数，释放整个池的内存\n    ~GPSDataPool() {\n        delete[] pool_;\n    }\n\n    // 分配一个对象\n    GPSDataPoint* allocate() {\n        if (free_list_ == nullptr) {\n            // 如果内存池耗尽，可以返回空指针或抛出异常\n            return nullptr; \n        }\n        // 从空闲链表头部取下一个节点\n        GPSDataPoint* head = free_list_;\n        free_list_ = *reinterpret_cast&lt;GPSDataPoint**&gt;(head);\n        return head;\n    }\n\n    // 回收一个对象\n    void deallocate(GPSDataPoint* ptr) {\n        if (ptr == nullptr) return;\n        // 将回收的节点作为新的头节点，插入到空闲链表头部\n        *reinterpret_cast&lt;GPSDataPoint**&gt;(ptr) = free_list_;\n        free_list_ = ptr;\n    }\n\nprivate:\n    GPSDataPoint* pool_;      // 指向内存池的起始地址\n    GPSDataPoint* free_list_; // 指向空闲链表的头部\n    size_t pool_size_;\n\n    // 禁止拷贝和赋值\n    GPSDataPool(const GPSDataPool&amp;) = delete;\n    GPSDataPool&amp; operator=(const GPSDataPool&amp;) = delete;\n};\n\nint main() {\n    const int ALLOCATIONS = 100000;\n    const int LOOPS = 100;\n\n    std::cout &lt;&lt; &quot;--- 性能对比测试 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;每次循环分配和释放 &quot; &lt;&lt; ALLOCATIONS &lt;&lt; &quot; 个对象, 共循环 &quot; &lt;&lt; LOOPS &lt;&lt; &quot; 次。\\n&quot; &lt;&lt; std::endl;\n\n    // 测试用例 A：使用 new / delete\n    auto start_time = std::chrono::high_resolution_clock::now();\n    for (int i = 0; i &lt; LOOPS; ++i) {\n        std::vector&lt;GPSDataPoint*&gt; ptrs;\n        ptrs.reserve(ALLOCATIONS);\n        for (int j = 0; j &lt; ALLOCATIONS; ++j) {\n            ptrs.push_back(new GPSDataPoint());\n        }\n        for (GPSDataPoint* ptr : ptrs) {\n            delete ptr;\n        }\n    }\n    auto end_time = std::chrono::high_resolution_clock::now();\n    auto duration_new_delete = std::chrono::duration_cast&lt;std::chrono::milliseconds&gt;(end_time - start_time).count();\n    std::cout &lt;&lt; &quot;方法 A (new/delete) 总耗时: &quot; &lt;&lt; duration_new_delete &lt;&lt; &quot; 毫秒&quot; &lt;&lt; std::endl;\n\n    // 测试用例 B：使用内存池\n    GPSDataPool pool(ALLOCATIONS); // 创建一个足够大的内存池\n    start_time = std::chrono::high_resolution_clock::now();\n    for (int i = 0; i &lt; LOOPS; ++i) {\n        std::vector&lt;GPSDataPoint*&gt; ptrs;\n        ptrs.reserve(ALLOCATIONS);\n        for (int j = 0; j &lt; ALLOCATIONS; ++j) {\n            ptrs.push_back(pool.allocate());\n        }\n        for (GPSDataPoint* ptr : ptrs) {\n            pool.deallocate(ptr);\n        }\n    }\n    end_time = std::chrono::high_resolution_clock::now();\n    auto duration_pool = std::chrono::duration_cast&lt;std::chrono::milliseconds&gt;(end_time - start_time).count();\n    std::cout &lt;&lt; &quot;方法 B (Memory Pool) 总耗时: &quot; &lt;&lt; duration_pool &lt;&lt; &quot; 毫秒&quot; &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;\\n性能提升倍数: &quot; &lt;&lt; static_cast&lt;double&gt;(duration_new_delete) / duration_pool &lt;&lt; &quot; 倍&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">资源管理员[本人姓名]的容量2测试\n第1次申请：成功\n第2次申请：成功\n第3次申请：失败／空指针\n</code></pre>\n<p><img src=\"assets/classroom-effects/p06-a526934b90d7.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>内存池_耗尽源码.png</code>（容量为2的小池测试）和 <code>内存池_耗尽观察.png</code>（资源管理员标识及三次申请结果）。</p>\n"
                },
                {
                  "id": "class-c-ext-f2-stage-2",
                  "number": 2,
                  "title": "归还与复用测试",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 在小池中先归还再申请，核对地址是否复用。</p>\n<ol>\n<li>在容量为2的小池中，归还第一次取得的节点，再申请一个节点；比较新旧地址，判断是否发生复用。</li>\n<li>释放测试中仍占用的各个节点，每个实际地址只归还一次；在源码顶部用一行注释说明归还和再次申请时空闲链表头的变化。</li>\n<li>运行核对池耗尽和地址复用两种结果，截图须能看出两次申请的地址比较。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">池已满时：第三次申请失败\n归还第1个节点后再次申请：成功\n新申请地址与被归还地址相同\n</code></pre>\n<p>核对说明：具体地址以本机为准。</p>\n<p><img src=\"assets/classroom-effects/p06-041fa1f89820.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>内存池_复用源码.png</code>（归还、再次申请与链表头变化注释）和 <code>内存池_地址复用.png</code>（耗尽与地址复用结果）。</p>\n"
                },
                {
                  "id": "class-c-ext-f2-stage-3",
                  "number": 3,
                  "title": "同条件计时",
                  "leads": [],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 两种分配方式使用相同工作量，比较运行耗时。</p>\n<ol>\n<li>保留原版 <code>ALLOCATIONS</code> 与 <code>LOOPS</code>，分别运行 <code>new/delete</code> 与 Memory Pool 两段计时；两段工作量必须相同。</li>\n<li>将计时报告标为“性能测试员[姓名]”，截取两组毫秒数和程序打印的倍数，截图包含构建模式；如果运行太慢，可同时降低两组相同的循环次数，并在源码注释中注明新数值。</li>\n<li>用一句话解释为什么不能只凭一次计时或预设“必然快若干倍”下结论。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">性能测试员[本人姓名]\nnew/delete：[本机实测] ms\nMemory Pool：[本机实测] ms\n倍数：[依据本次实测计算]\n</code></pre>\n<p>核对说明：两组工作量和构建模式一致。</p>\n<p><strong>本阶段提交：</strong> <code>内存池_计时源码.png</code>（同条件计时与局限说明注释）和 <code>内存池_性能对照.png</code>（性能测试员标识、两组耗时、倍数和构建模式）。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "project-07",
      "number": 7,
      "title": "感知融合优化",
      "groups": [
        {
          "id": "t-p07-intro",
          "title": "仿真对象关系抽象",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-g",
              "caseId": "c-ai-g",
              "label": "案例 G",
              "title": "AIGC冗余代码重构",
              "taskId": "t-p07-intro",
              "forms": [
                "观察与分析、设计与建模"
              ],
              "plan": "先从Lidar与Radar原代码标出公共操作和差异处理，再提交完整重构提示词。对照AI方案检查继承关系、公共逻辑与各自行为是否保留，保留前后代码及核验依据，避免为了消除重复而丢掉设备特性。",
              "cardCaption": [
                "重构前后行为对照",
                "Lidar 与 Radar"
              ],
              "background": [
                {
                  "html": "<p>感知模块同时管理Lidar和Radar。两类传感器都要初始化、重置和报告状态，处理数据的细节却不同；若每增加一种设备都复制整套代码，修改公共逻辑也要重复进行。</p>\n<p>先在原版中辨认共性与差异，再请AIGC提出基类和差异行为的重构方案，为后续继承与多态练习建立问题。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "面向对象特性与抽取共性"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-g-stage-1",
                  "number": 1,
                  "title": "AIGC重构对照",
                  "leads": [],
                  "html": "<p><strong>任务形式：观察与分析、设计与建模。</strong> 先读传感器分析片段形成自己的判断，再核对AIGC建议。</p>\n<ol>\n<li>读分析片段，分别列出 Lidar 与 Radar 重复的状态/方法各一项，以及它们不同的处理行为。</li>\n<li>将片段交给AIGC，明确要求：<strong>“请基于面向对象继承思想，提取公共属性设计一个Sensor基类，并通过虚函数机制重构上述传感器代码。保留Lidar与Radar各自的数据处理行为，并说明新增传感器时应改哪里。”</strong></li>\n<li>运行重构前程序，核对两种传感器各自的处理输出；再检查AI方案是否使用虚函数保留这些差异，找出一处合理点和一处需进一步核对的点。</li>\n<li>不把AI生成代码覆盖原程序；记录重复点、AI建议及本人核对结论。统一接口的代码练习安排在后续课时。</li>\n</ol>\n<h5>本阶段分析片段：传感器重构问题</h5>\n<p>本片段用于分析，不单独编译。</p>\n<pre><code class=\"language-cpp\">// 激光雷达传感器\n\nclass LidarSensor {\npublic:\n    void initialize() { /* ...复杂的初始化逻辑... */ }\n    void reset() { /* ...重置逻辑... */ }\n    std::string get_status() { return &quot;Lidar OK&quot;; }\n    void process_point_cloud() { /* ...处理点云数据... */ }\n};\n\n// 毫米波雷达传感器\nclass RadarSensor {\npublic:\n    void initialize() { /* ...与Lidar相似但不同的初始化逻辑... */ }\n    void reset() { /* ...与Lidar完全相同的重置逻辑... */ }\n    std::string get_status() { return &quot;Radar OK&quot;; }\n    void process_radar_echo() { /* ...处理雷达回波... */ }\n};\n</code></pre>\n<h5>本阶段案例代码：重构前的传感器程序</h5>\n<pre><code class=\"language-cpp\">// 重构前版本：两个独立类具有重复接口\n\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n\nclass LidarSensor {\npublic:\n    void initialize() { std::cout &lt;&lt; &quot;初始化Lidar传感器...&quot; &lt;&lt; std::endl; }\n    void reset() { std::cout &lt;&lt; &quot;重置Lidar传感器...&quot; &lt;&lt; std::endl; }\n    std::string get_status() const { return &quot;Lidar OK&quot;; }\n    void process_point_cloud() { std::cout &lt;&lt; &quot;处理激光点云数据...&quot; &lt;&lt; std::endl; }\n};\n\nclass RadarSensor {\npublic:\n    void initialize() { std::cout &lt;&lt; &quot;初始化Radar传感器...&quot; &lt;&lt; std::endl; }\n    void reset() { std::cout &lt;&lt; &quot;重置Radar传感器...&quot; &lt;&lt; std::endl; }\n    std::string get_status() const { return &quot;Radar OK&quot;; }\n    void process_radar_echo() { std::cout &lt;&lt; &quot;处理毫米波雷达回波...&quot; &lt;&lt; std::endl; }\n};\n\nint main() {\n    LidarSensor lidar;\n    RadarSensor radar;\n    lidar.initialize();\n    lidar.process_point_cloud();\n    radar.initialize();\n    radar.process_radar_echo();\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">初始化Lidar传感器...\n处理激光点云数据...\n初始化Radar传感器...\n处理毫米波雷达回波...\n</code></pre>\n<p>核对说明：AI重构后的统一接口仍须保留两种不同处理行为。</p>\n<p><strong>本阶段提交：</strong> <code>传感器_重构记录.png</code>（重构评审人标识、重复点、AI方案的一处合理点和一处待核对点）及 <code>传感器_原版运行.png</code>（两种传感器的处理输出）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p07-b01",
          "title": "障碍物体系构建",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-057",
              "caseId": "c-057",
              "label": "案例 57",
              "title": "障碍物基类构建",
              "taskId": "t-p07-b01",
              "forms": [
                "仿写并运行"
              ],
              "plan": "先核对已有车辆、行人类如何取得共同位置，再参照它们增加锥桶类型及高度。通过创建和输出不同对象检查公共接口是否复用、专属属性是否保留，确认新增类型能够加入同一障碍物模型。",
              "cardCaption": [
                "从障碍物派生具体对象",
                "单继承"
              ],
              "background": [
                {
                  "html": "<p>障碍物模型要同时表示车辆、行人和锥桶，它们共享位置，却各有速度、年龄或高度等专属信息。</p>\n<p>已有程序让车辆和行人从共同基类继承位置。本案例仿写锥桶，检查新类型能否复用位置接口，同时保留自己的高度。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "基类、派生类与构造"
                }
              ],
              "stages": [
                {
                  "id": "class-c-057-stage-1",
                  "number": 1,
                  "title": "新增锥桶障碍物",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 沿用障碍物基类和已有派生类结构，按给定骨架新增锥桶对象。</p>\n<ol>\n<li>阅读已有的车辆和行人障碍物，找出它们如何继承位置，以及各自保留的独有数据。</li>\n<li>基于下方骨架补全公有继承 <code>Obstacle</code> 的锥桶类 <code>ConeObstacle</code>：在构造函数初始化列表中调用基类构造并初始化高度 <code>height</code>，补全读取高度的方法 <code>get_height()</code>；位置仍沿用基类的数据与接口。</li>\n<li>在 <code>main</code> 创建位置 <code>(12, 2)</code>、高度为 <code>1.0 + 本人学号末一位 * 0.1</code> 的锥桶，输出其位置和高度；保留车辆、行人的原输出，加入“场景建设者[本人姓名]”。在同屏截图中用<strong>红框</strong>标出初始化列表中的 <code>: Obstacle(pos)</code>。</li>\n</ol>\n<h5>本阶段骨架代码：ConeObstacle派生类</h5>\n<pre><code class=\"language-cpp\">class ConeObstacle : public Obstacle {\npublic:\n    // TODO 1：通过初始化列表调用基类 Obstacle(pos) 并初始化 height\n    ConeObstacle(Point pos, double h) \n\n    double get_height() const {\n        // TODO 2：返回锥桶高度\n    }\n\nprivate:\n    double height;\n};\n</code></pre>\n<h5>本阶段案例代码：锥桶练习：Obstacle单继承</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\n// 用于表示二维坐标的简单结构体\nstruct Point {\n    double x = 0.0;\n    double y = 0.0;\n};\n\n// 障碍物基类，封装了所有障碍物的共同属性\nclass Obstacle {\npublic:\n    // 构造函数，用于初始化障碍物位置\n    Obstacle(Point pos) : position(pos) {}\n\n    // 公共接口，用于获取障碍物位置\n    Point get_position() const {\n        return position;\n    }\n\nprotected:\n    // 受保护的成员，可以被派生类访问\n    Point position;\n};\n\n// 车辆障碍物，继承自Obstacle\nclass VehicleObstacle : public Obstacle {\npublic:\n    // 派生类的构造函数，通过初始化列表调用基类的构造函数\n    VehicleObstacle(Point pos, double spd) : Obstacle(pos), speed(spd) {}\n\n    // 记录车辆速度\n    double speed;\n};\n\n// 行人障碍物，继承自Obstacle\nclass PedestrianObstacle : public Obstacle {\npublic:\n    // 派生类的构造函数\n    PedestrianObstacle(Point pos, int a) : Obstacle(pos), age(a) {}\n\n    // 记录行人年龄\n    int age;\n};\n\nint main() {\n    // 创建派生类对象\n    VehicleObstacle car({50.0, 1.0}, 60.0);\n    PedestrianObstacle person({25.0, 0.5}, 30);\n\n    // 验证派生类对象可以调用基类的公共方法\n    Point car_pos = car.get_position();\n    Point person_pos = person.get_position();\n\n    std::cout &lt;&lt; &quot;--- 障碍物信息 ---&quot; &lt;&lt; std::endl;\n\n    // 访问各自的成员，并打印信息\n    std::cout &lt;&lt; &quot;车辆障碍物: &quot;\n              &lt;&lt; &quot;位置 (&quot; &lt;&lt; car_pos.x &lt;&lt; &quot;, &quot; &lt;&lt; car_pos.y &lt;&lt; &quot;), &quot;\n              &lt;&lt; &quot;速度 &quot; &lt;&lt; car.speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n\n    std::cout &lt;&lt; &quot;行人障碍物: &quot;\n              &lt;&lt; &quot;位置 (&quot; &lt;&lt; person_pos.x &lt;&lt; &quot;, &quot; &lt;&lt; person_pos.y &lt;&lt; &quot;), &quot;\n              &lt;&lt; &quot;年龄 &quot; &lt;&lt; person.age &lt;&lt; &quot; 岁&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">场景建设者[本人姓名]\n原有车辆、行人障碍物仍能显示\n新增锥桶：位置(12, 2)，高度[1.0+学号末一位*0.1]\n</code></pre>\n<p><img src=\"assets/classroom-effects/p07-81d51f551587.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>锥桶_源码与运行.png</code>（锥桶类补全代码、红框标出基类构造调用，以及同屏的场景建设者标识、锥桶位置和个人高度）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-058",
              "caseId": "c-058",
              "label": "案例 58",
              "title": "障碍物属性保护",
              "taskId": "t-p07-b01",
              "forms": [
                "扩充并运行、测试与对照"
              ],
              "plan": "先尝试原有访问语句并记录编译结果，再从派生类提供公开的受控状态输出。对照派生类内部与主程序外部的访问差异，核对位置、编号及移动结果，说明能够继承不等于可以在任意位置直接改写。",
              "cardCaption": [
                "移动障碍物的访问边界",
                "保护继承"
              ],
              "background": [
                {
                  "html": "<p>移动障碍物要在派生类中读取继承来的位置和编号，才能完成移动与状态展示；外部主程序则不应直接改这些底层字段。</p>\n<p>先尝试现有访问语句，再通过派生类提供公开的受控输出，观察保护成员和保护继承形成的边界。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "受保护成员与保护继承"
                }
              ],
              "stages": [
                {
                  "id": "class-c-058-stage-1",
                  "number": 1,
                  "title": "公开受控信息",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 先观察受保护成员的访问结果，再设计受控读取方式。</p>\n<ol>\n<li>先尝试从 <code>main</code> 调用原代码中被注释的 <code>car.get_id()</code>，保存编译器结果，再恢复注释。</li>\n<li>为 <code>MovingObstacle</code> 增加公开的基本信息输出方法，让它显示继承来的ID和位置；不要把基类字段改为公开。</li>\n<li>用ID101、位置(50,1)的对象测试该方法，并保留原有两次移动操作，输出“安全审计员[姓名]”。在源码注释中解释两种访问方式的差别。</li>\n</ol>\n<h5>本阶段案例代码：受保护访问</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\n// 用于表示二维坐标的简单结构体\nstruct Point {\n    double x = 0.0;\n    double y = 0.0;\n};\n\n// 基类：提供所有障碍物的基础功能\nclass BaseObstacle {\npublic:\n    // 构造函数：初始化 ID 和位置\n    BaseObstacle(int id, Point pos) : unique_id(id), position(pos) {}\n\n    // 公共接口：获取对象的唯一 ID\n    int get_id() const {\n        return unique_id;\n    }\n\nprotected:\n    // 受保护的成员：派生类可以访问，但外部不行\n    Point position;\n    int unique_id;\n\n    // 受保护的方法：只允许派生类在内部调用，用于更新状态\n    void update_position(double dx, double dy) {\n        position.x += dx;\n        position.y += dy;\n    }\n};\n\n// 派生类：使用保护继承\n// 这意味着BaseObstacle的public和protected成员，\n// 在MovingObstacle内部都变成了protected\nclass MovingObstacle : protected BaseObstacle {\npublic:\n    // 派生类构造函数，调用基类构造函数\n    MovingObstacle(int id, Point pos, double spd) \n        : BaseObstacle(id, pos), speed(spd) {}\n\n    // 派生类提供的高级公共接口\n    void advance_one_step() {\n        // 在内部，它可以调用继承来的受保护方法\n        update_position(speed * 0.1, 0); // 模拟向前移动\n        std::cout &lt;&lt; &quot;障碍物 &quot; &lt;&lt; unique_id &lt;&lt; &quot; 前进了一步，新位置: (&quot; \n                  &lt;&lt; position.x &lt;&lt; &quot;, &quot; &lt;&lt; position.y &lt;&lt; &quot;)&quot; &lt;&lt; std::endl;\n    }\n\n    // 派生类可以选择性地将基类的某个接口重新暴露为public\n    int get_tracking_id() const {\n        // 在内部，它可以访问继承来的受保护成员和方法\n        return get_id(); \n    }\n\nprivate:\n    double speed;\n};\n\nint main() {\n    MovingObstacle car(101, {50.0, 1.0}, 60.0);\n\n    // 调用派生类自己定义的 public 方法 -&gt; 成功\n    std::cout &lt;&lt; &quot;--- 派生类接口测试 ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;通过派生类接口获取ID: &quot; &lt;&lt; car.get_tracking_id() &lt;&lt; std::endl;\n    car.advance_one_step();\n    car.advance_one_step();\n\n    // 课堂访问尝试\n    std::cout &lt;&lt; &quot;\\n--- 访问控制测试 ---&quot; &lt;&lt; std::endl;\n    // int id = car.get_id();\n    std::cout &lt;&lt; &quot;尝试直接调用 car.get_id() ... 编译失败！&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;这证明了&#39;protected&#39;继承成功地将基类的public接口隐藏了。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">安全审计员[本人姓名]\nMovingObstacle：ID 101，位置(50, 1)\n原有两次移动操作仍能显示位置变化\n</code></pre>\n<p><img src=\"assets/classroom-effects/p07-e488ab66888f.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>受保护_源码.png</code>（公共读取方法与测试调用）、<code>受保护_访问尝试.png</code>（本人尝试的代码行与编译结果）和 <code>受保护_运行.png</code>（安全审计员标识、ID和位置）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-059",
              "caseId": "c-059",
              "label": "案例 59",
              "title": "特殊车辆多继承",
              "taskId": "t-p07-b01",
              "forms": [
                "仿写并运行"
              ],
              "plan": "先运行救护车的行驶和警报功能，再仿写同时具备两类能力的警车。对同名状态方法使用明确限定，分别核对速度与警报的输出，检查两条继承路径的功能都能访问且不会混淆。",
              "cardCaption": [
                "救护车的两套能力",
                "多继承"
              ],
              "background": [
                {
                  "html": "<p>救护车既有行驶速度，也有警报装置状态，需要同时使用两类已有功能。</p>\n<p>两条继承路径都提供同名状态方法时，调用者必须说明要看哪一类状态。本案例先运行救护车，再仿写警车，验证多继承和同名消歧。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "多继承与同名消歧"
                }
              ],
              "stages": [
                {
                  "id": "class-c-059-stage-1",
                  "number": 1,
                  "title": "仿写双重特种车",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 以救护车的双继承写法为参照，按给定骨架新增警车。</p>\n<ol>\n<li>先运行救护车案例，找出它从哪两类继承，以及如何区分两类中同名的状态方法。</li>\n<li>基于下方骨架补全警车类 <code>PoliceCar</code>，使其同时具有车辆速度和信号装置状态，并在 <code>display_all_info()</code> 中通过作用域运算符分别调用两个基类的 <code>display_status()</code>。</li>\n<li>在 <code>main</code> 让警车速度为 <code>60.0 + 本人学号末一位</code> 并开启信号，显示两类状态；保留救护车演示，输出“调度指挥员[本人姓名]”。在同屏截图中用<strong>红框</strong>标出 <code>Vehicle::display_status()</code>。</li>\n</ol>\n<h5>本阶段骨架代码：PoliceCar多继承</h5>\n<pre><code class=\"language-cpp\">class PoliceCar : public Vehicle, public SignalingDevice {\npublic:\n    PoliceCar(double initial_speed, bool signal_status)\n        : Vehicle(initial_speed), SignalingDevice(signal_status) {}\n\n    void display_all_info() const {\n        std::cout &lt;&lt; &quot;--- 警车综合状态 ---&quot; &lt;&lt; std::endl;\n        // TODO：使用类名::消歧，依次调用 Vehicle 和 SignalingDevice 的 display_status()\n    }\n};\n</code></pre>\n<h5>本阶段案例代码：双重特种车练习：救护车多继承</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n\n// 基类 1：车辆\nclass Vehicle {\npublic:\n    Vehicle(double s) : speed(s) {}\n\n    void set_speed(double s) {\n        speed = s;\n        std::cout &lt;&lt; &quot;[Vehicle] 速度设置为: &quot; &lt;&lt; speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n    }\n\n    // 车辆的状态显示\n    void display_status() const {\n        std::cout &lt;&lt; &quot;  - 车辆状态: 当前速度 &quot; &lt;&lt; speed &lt;&lt; &quot; km/h&quot; &lt;&lt; std::endl;\n    }\n\nprotected:\n    double speed;\n};\n\n// 基类 2：信号装置\nclass SignalingDevice {\npublic:\n    SignalingDevice(bool on) : signal_on(on) {}\n\n    void turn_on() {\n        signal_on = true;\n        std::cout &lt;&lt; &quot;[Signal] 信号已开启。&quot; &lt;&lt; std::endl;\n    }\n\n    void turn_off() {\n        signal_on = false;\n        std::cout &lt;&lt; &quot;[Signal] 信号已关闭。&quot; &lt;&lt; std::endl;\n    }\n\n    // 信号装置的状态显示\n    void display_status() const {\n        std::cout &lt;&lt; &quot;  - 信号状态: &quot; &lt;&lt; (signal_on ? &quot;开启&quot; : &quot;关闭&quot;) &lt;&lt; std::endl;\n    }\n\nprotected:\n    bool signal_on;\n};\n\n// 派生类：救护车，同时继承 Vehicle 和 SignalingDevice\nclass Ambulance : public Vehicle, public SignalingDevice {\npublic:\n    // 构造函数需要分别调用两个基类的构造函数进行初始化\n    Ambulance(double initial_speed, bool signal_status)\n        : Vehicle(initial_speed), SignalingDevice(signal_status) {}\n\n    // 定义一个新方法来解决 display_status 的命名冲突\n    void display_all_info() const {\n        std::cout &lt;&lt; &quot;--- 救护车(ID: &quot; &lt;&lt; this &lt;&lt; &quot;) 综合状态 ---&quot; &lt;&lt; std::endl;\n        // 使用作用域解析运算符 :: 来明确指定调用哪个基类的成员函数\n        Vehicle::display_status();\n        SignalingDevice::display_status();\n    }\n};\n\nint main() {\n    // 创建一个多继承的派生类对象\n    Ambulance ambulance1(80.0, true);\n\n    // 验证它可以调用来自不同基类的功能\n    ambulance1.set_speed(90.5);\n    ambulance1.turn_off();\n\n    // 调用自己定义的、解决了二义性的方法\n    ambulance1.display_all_info();\n\n    // 课堂同名方法尝试\n    // ambulance1.display_status();\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">调度指挥员[本人姓名]\n原有救护车：显示车辆和信号装置状态\n新增警车：速度[60.0+学号末一位]，信号已开启\n</code></pre>\n<p><img src=\"assets/classroom-effects/p07-2b5d96409523.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>警车_源码与运行.png</code>（双重继承类补全代码、红框标出同名消歧调用，以及同屏的救护车和警车状态）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-060",
              "caseId": "c-060",
              "label": "案例 60",
              "title": "摩托车菱形继承",
              "taskId": "t-p07-b01",
              "forms": [
                "扩充并运行、测试与对照"
              ],
              "plan": "先记录摩托车的构造提示与ID读取，再结合两条继承路径检查顶层车辆对象的数量。对照虚继承声明和实际输出，说明唯一身份如何保留，以及构造过程中哪些对象被实际建立。",
              "cardCaption": [
                "摩托车共享同一个车辆基类",
                "虚基类"
              ],
              "background": [
                {
                  "html": "<p>摩托车既属于机动车，也属于两轮车，两条路径最终都通向顶层 <code>Vehicle</code>。若各带来一份车辆ID，同一辆摩托车就可能有两个身份。</p>\n<p>已有代码采用虚继承，本案例通过构造提示和ID读取核对顶层车辆是否只保留一份。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "虚基类"
                }
              ],
              "stages": [
                {
                  "id": "class-c-060-stage-1",
                  "number": 1,
                  "title": "验证唯一ID",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 在虚继承结构中核对唯一的顶层车辆ID。</p>\n<ol>\n<li>给顶层 <code>Vehicle</code> 增加显示自身ID的公共方法，并在现有摩托车对象上调用（将 <code>moto</code> 的初始 ID 设为 <code>100 + 本人学号末两位</code>）；不要在两个中间基类各保存一份ID。</li>\n<li>运行核对顶层构造提示出现的次数和摩托车ID，输出“架构师[本人姓名]”。</li>\n<li>在源码顶部用两行注释写出 <code>Motorcycle</code> 到顶层 <code>Vehicle</code> 的两条继承路径，并在同屏截图中用<strong>红框</strong>标出两个中间基类声明中的 <code>virtual</code> 关键字。</li>\n</ol>\n<h5>本阶段案例代码：摩托车虚基类</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n\n// 顶层基类：所有车辆的共同祖先\nclass Vehicle {\npublic:\n    Vehicle(int id) : vehicle_id(id) {\n        std::cout &lt;&lt; &quot;Vehicle::构造函数 (ID: &quot; &lt;&lt; vehicle_id &lt;&lt; &quot;)&quot; &lt;&lt; std::endl;\n    }\n    int vehicle_id;\n};\n\n// 中间派生类 1：机动车\n// 使用 virtual 关键字声明虚继承\nclass MotorVehicle : public virtual Vehicle {\npublic:\n    MotorVehicle(int id, int power) : Vehicle(id), engine_power(power) {}\n    int engine_power;\n};\n\n// 中间派生类 2：两轮车\n// 同样使用 virtual 关键字\nclass TwoWheeler : public virtual Vehicle {\npublic:\n    TwoWheeler(int id, std::string t) : Vehicle(id), type(t) {}\n    std::string type;\n};\n\n// 底层派生类：摩托车\n// 同时继承自两个中间类\nclass Motorcycle : public MotorVehicle, public TwoWheeler {\npublic:\n    // 关键点：最底层的派生类构造函数必须显式调用虚基类的构造函数\n    // 在创建Motorcycle对象时，MotorVehicle和TwoWheeler构造函数中\n    // 对Vehicle的构造调用会被忽略\n    Motorcycle(int id, int power, std::string t)\n        : Vehicle(id), MotorVehicle(id, power), TwoWheeler(id, t) {}\n\n    void display() {\n        std::cout &lt;&lt; &quot;\\n--- 摩托车信息 ---&quot; &lt;&lt; std::endl;\n        // 关键点：现在可以无歧义地直接访问 vehicle_id\n        std::cout &lt;&lt; &quot;车辆 ID: &quot; &lt;&lt; vehicle_id &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;引擎功率: &quot; &lt;&lt; engine_power &lt;&lt; &quot;cc&quot; &lt;&lt; std::endl;\n        std::cout &lt;&lt; &quot;车辆类型: &quot; &lt;&lt; type &lt;&lt; std::endl;\n    }\n};\n\nint main() {\n    std::cout &lt;&lt; &quot;创建 Motorcycle 对象...&quot; &lt;&lt; std::endl;\n    Motorcycle moto(101, 250, &quot;运动型摩托车&quot;);\n\n    moto.display();\n\n    // 直接访问，验证无二义性\n    std::cout &lt;&lt; &quot;\\n直接访问ID: &quot; &lt;&lt; moto.vehicle_id &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;验证成功：对顶层基类成员的访问是唯一的。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">架构师[本人姓名]\n顶层Vehicle构造提示只出现1次\n摩托车从顶层读取到唯一ID [100+学号末两位]\n</code></pre>\n<p><img src=\"assets/classroom-effects/p07-be34e8c13a35.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>虚基类_源码与运行.png</code>（顶层ID读取方法、红框标出 <code>virtual</code> 继承，以及同屏的架构师标识、顶层构造一次和个人唯一ID）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p07-b02",
          "title": "传感器代码复用",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-061",
              "caseId": "c-061",
              "label": "案例 61",
              "title": "通用接口设置",
              "taskId": "t-p07-b02",
              "forms": [
                "测试与对照",
                "仿写并运行"
              ],
              "plan": "先验证原有雷达、摄像头的统一处理与销毁流程，并尝试实例化抽象基类观察编译限制。再加入IMU派生类，通过相同接口遍历处理，核对各设备执行的行为及结束后的销毁记录。",
              "cardCaption": [
                "用统一接口处理多种传感器",
                "运行时多态"
              ],
              "background": [
                {
                  "html": "<p>仿真系统要在同一个循环里处理激光雷达和摄像头，后续还会加入IMU。若每加一种设备就改一串类型判断，主循环会越来越难维护。</p>\n<p>本案例让它们都接受 <code>process_data()</code> 指令，却执行各自的处理行为；同时观察抽象基类为何不能直接创建对象，以及统一销毁如何工作。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "虚函数动态调用"
                },
                {
                  "title": "虚析构"
                },
                {
                  "title": "纯虚函数与抽象类"
                }
              ],
              "stages": [
                {
                  "id": "class-c-061-stage-1",
                  "number": 1,
                  "title": "原接口验证",
                  "leads": [],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 用原接口程序验证抽象类不能直接实例化。</p>\n<ol>\n<li>复制传感器接口练习代码，临时取消 <code>Sensor s(0);</code> 的注释，编译并保存结果；随后恢复注释。</li>\n<li>运行原程序，观察 <code>LidarSensor</code>、<code>CameraSensor</code> 在同一 <code>Sensor*</code> 循环下的不同输出。</li>\n<li>找到基类的纯虚处理方法与虚析构方法；在源码顶部用注释说明刚才的编译器结果，以及主循环为何不需要判断传感器类型。</li>\n</ol>\n<h5>本阶段案例代码：传感器接口练习：Sensor抽象接口与统一循环</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;vector&gt;\n\n// 传感器基类\nclass Sensor {\npublic:\n    // 构造函数\n    Sensor(int id) : sensor_id(id) {}\n\n    // 析构函数通常在基类中声明为虚函数，以确保通过基类指针\n    // delete派生类对象时，能正确调用派生类的析构函数\n    virtual ~Sensor() {}\n\n    // 纯虚函数 (Pure Virtual Function)\n    // 语法是 &#39;= 0&#39;。它没有函数体，强制派生类必须实现它\n    // 定义了一个所有具体传感器都必须遵守的契约\n    virtual void process_data() = 0; \n\n    // 虚函数 (Virtual Function)\n    // 它有默认实现。派生类可以重写(override)它，也可以不重写\n    // 提供了一个可选的、可定制的功能\n    virtual std::string get_status() const {\n        return &quot;Status: OK&quot;;\n    }\n\n    // 普通成员函数\n    int get_id() const {\n        return sensor_id;\n    }\n\nprotected:\n    int sensor_id;\n};\n\n// 定义派生类 1：激光雷达\nclass LidarSensor : public Sensor {\npublic:\n    LidarSensor(int id) : Sensor(id) {}\n\n    // 实现基类的纯虚函数\n    void process_data() override {\n        std::cout &lt;&lt; &quot;Lidar Sensor (ID: &quot; &lt;&lt; sensor_id \n                  &lt;&lt; &quot;): Processing 3D point cloud data...&quot; &lt;&lt; std::endl;\n    }\n\n    // 此处未重写 get_status(), 因此将使用基类的默认版本\n};\n\n// 定义派生类 2：摄像头\nclass CameraSensor : public Sensor {\npublic:\n    CameraSensor(int id) : Sensor(id) {}\n\n    // 实现基类的纯虚函数\n    void process_data() override {\n        std::cout &lt;&lt; &quot;Camera Sensor (ID: &quot; &lt;&lt; sensor_id \n                  &lt;&lt; &quot;): Capturing and processing image frame...&quot; &lt;&lt; std::endl;\n    }\n\n    // 重写(override)基类的虚函数，提供一个定制化的版本\n    std::string get_status() const override {\n        return &quot;Status: Calibrated and OK&quot;;\n    }\n};\n\n// 程序入口展示多态调用\nint main() {\n    // 创建一个能存放各种传感器指针的容器\n    std::vector&lt;Sensor*&gt; sensor_suite;\n    sensor_suite.push_back(new LidarSensor(101));\n    sensor_suite.push_back(new CameraSensor(202));\n\n    std::cout &lt;&lt; &quot;--- Universal Sensor Processing Loop ---&quot; &lt;&lt; std::endl;\n    // 统一的接口调用\n    for (Sensor* sensor_ptr : sensor_suite) {\n        sensor_ptr-&gt;process_data(); // 动态绑定：运行时决定调用哪个版本\n        std::cout &lt;&lt; &quot;  &quot; &lt;&lt; sensor_ptr-&gt;get_status() &lt;&lt; std::endl; // 动态绑定\n    }\n\n    // 释放内存\n    for (Sensor* sensor_ptr : sensor_suite) {\n        delete sensor_ptr;\n    }\n    sensor_suite.clear();\n\n    // 课堂实例化尝试\n    // Sensor s(0);\n    std::cout &lt;&lt; &quot;\\n--- Abstract Class Test ---&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;尝试创建Sensor类的对象... 编译失败！&quot; &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;这证明了包含纯虚函数的类是抽象的，不能被实例化。&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">同一 Sensor* 循环：\nLidar Sensor (ID: 101): Processing 3D point cloud data...\nCamera Sensor (ID: 202): Capturing and processing image frame...\n</code></pre>\n<p>核对说明：直接创建Sensor对象的编译结果另截。</p>\n<p><strong>本阶段提交：</strong> <code>抽象接口_源码.png</code>（抽象类与编译结果说明注释）、<code>抽象接口_实例化尝试.png</code>（本人尝试的代码行与编译器结果）和 <code>抽象接口_统一运行.png</code>（同一基类指针循环中的Lidar、Camera不同处理输出）。</p>\n"
                },
                {
                  "id": "class-c-061-stage-2",
                  "number": 2,
                  "title": "新增IMU传感器",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 以Lidar和Camera为参照，按给定骨架加入IMU并接入统一处理循环。</p>\n<ol>\n<li>基于下方骨架补全 <code>IMUSensor</code> 子类（ID 设为 <code>300 + 本人学号末两位</code>），重写基类要求的纯虚函数 <code>process_data()</code>；输出应说明IMU正在读取加速度与陀螺仪。</li>\n<li>将 <code>new IMUSensor(300 + 本人学号末两位)</code> 加入原有 <code>sensor_suite</code> 集合，让同一处理循环调用三种传感器；保留原有释放流程，不另写一套专用循环。</li>\n<li>运行核对Lidar、Camera、IMU的处理顺序、个人ID和正常退出；输出“感知工程师[本人姓名]”。在同屏截图中用<strong>红框</strong>标出统一循环中的 <code>sensor_ptr-&gt;process_data();</code>。</li>\n</ol>\n<h5>本阶段骨架代码：IMUSensor派生类</h5>\n<pre><code class=\"language-cpp\">class IMUSensor : public Sensor {\npublic:\n    IMUSensor(int id) : Sensor(id) {}\n\n    // TODO：使用 override 重写 process_data()，打印 sensor_id 及读取加速度与陀螺仪提示\n};\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">感知工程师[本人姓名]\n统一循环依次处理：Lidar 101 → Camera 202 → IMU [300+学号末两位]\nIMU输出应提到加速度与陀螺仪\n</code></pre>\n<p><img src=\"assets/classroom-effects/p07-adcb5e94fc2f.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>传感器_IMU源码与运行.png</code>（IMUSensor子类补全代码、红框标出多态调用，以及同屏的感知工程师标识、个人ID和统一循环输出）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-062",
              "caseId": "c-062",
              "label": "案例 62",
              "title": "数据模板化缓存",
              "taskId": "t-p07-b02",
              "forms": [
                "挖空并补全",
                "仿写并运行"
              ],
              "plan": "先补齐固定容量缓存的循环覆盖逻辑，核对已有点云与图像数据的写入、覆盖和遍历顺序。再接入自定义IMU记录，用同样操作检验模板复用，确认新增类型后容量规则与旧数据覆盖行为保持一致。",
              "cardCaption": [
                "不同传感器共用缓存",
                "类模板"
              ],
              "background": [
                {
                  "html": "<p>激光雷达点云和摄像头图像的数据类型不同，缓存需求却相同：容量固定，满后覆盖旧数据并能遍历输出。</p>\n<p>若为每种数据各写一份缓存类，控制下标的逻辑容易分叉。本案例用一个类模板管理两种数据，再接入IMU类型核验通用性。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "类模板定义"
                },
                {
                  "title": "模板实例化"
                }
              ],
              "stages": [
                {
                  "id": "class-c-062-stage-1",
                  "number": 1,
                  "title": "补全循环覆盖逻辑",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 给定代码包含类模板、泛型数组和两组测试数据；补全循环覆盖逻辑后核验两种数据类型。</p>\n<ol>\n<li>复制下方缓存练习代码，找出容量为3的 Lidar、容量为2的 Image 及各自的测试数据。</li>\n<li>补全 <code>DataBuffer::add_data()</code> 中的两个 TODO：未满时追加，已满时覆盖当前下标并利用取模运算循环移动下标；保留其余结构。</li>\n<li>保持 Lidar 容量3、Image容量2及原来的4条、3条测试数据。补完后运行，核对1001被1004覆盖、95被97覆盖，并写出容器实际打印顺序。</li>\n<li>如果程序能编译但顺序不对，检查下标更新是否只放在“已满”分支以及 <code>% N</code> 是否漏掉；在同屏截图中用<strong>红框</strong>标出 <code>% N</code> 取模表达式。</li>\n</ol>\n<h5>本阶段练习代码：DataBuffer类模板</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;cstddef&gt;\n#include &lt;vector&gt;\n#include &lt;string&gt;\n\n// 定义两种传感器数据\nstruct LidarData {\n    int cloud_id;\n    int point_count;\n};\n\nstruct ImageData {\n    int frame_id;\n    std::string resolution;\n};\n\n// 为不同数据类型提供对应的显示方式\nvoid print_data(const LidarData&amp; data) {\n    std::cout &lt;&lt; &quot;  - Point Cloud ID: &quot; &lt;&lt; data.cloud_id\n              &lt;&lt; &quot;, Points: &quot; &lt;&lt; data.point_count &lt;&lt; std::endl;\n}\n\nvoid print_data(const ImageData&amp; data) {\n    std::cout &lt;&lt; &quot;  - Frame ID: &quot; &lt;&lt; data.frame_id\n              &lt;&lt; &quot;, Resolution: &quot; &lt;&lt; data.resolution &lt;&lt; std::endl;\n}\n\n// T 表示数据类型，N 表示固定容量\ntemplate &lt;typename T, std::size_t N&gt;\nclass DataBuffer {\npublic:\n    DataBuffer() : current_index(0) {\n        static_assert(N &gt; 0, &quot;缓冲区容量必须大于0&quot;);\n        buffer.reserve(N);\n    }\n\n    void add_data(const T&amp; data) {\n        if (buffer.size() &lt; N) {\n            // TODO 1：未满时把 data 追加到 buffer 末尾\n        } else {\n            // TODO 2：已满时用 data 覆盖 current_index 位置，并将 current_index 对 N 取模循环前移\n        }\n    }\n\n    void display_buffer(const std::string&amp; title) const {\n        std::cout &lt;&lt; &quot;--- &quot; &lt;&lt; title &lt;&lt; &quot; (Max Size: &quot; &lt;&lt; N\n                  &lt;&lt; &quot;) ---&quot; &lt;&lt; std::endl;\n        for (const T&amp; data : buffer) {\n            print_data(data);\n        }\n    }\n\nprivate:\n    std::vector&lt;T&gt; buffer;\n    std::size_t current_index;\n};\n\nint main() {\n    // 使用同一个类模板创建两种缓冲区\n    DataBuffer&lt;LidarData, 3&gt; lidar_buffer;\n    DataBuffer&lt;ImageData, 2&gt; image_buffer;\n\n    std::cout &lt;&lt; &quot;Populating buffers...&quot; &lt;&lt; std::endl;\n    // 添加4份激光雷达数据，最后一份会覆盖第一份\n    lidar_buffer.add_data({1001, 5000});\n    lidar_buffer.add_data({1002, 5100});\n    lidar_buffer.add_data({1003, 4950});\n    lidar_buffer.add_data({1004, 5050}); // 这将覆盖 ID 1001\n\n    // 添加3份图像数据，最后一份会覆盖第一份\n    image_buffer.add_data({95, &quot;1920x1080&quot;});\n    image_buffer.add_data({96, &quot;1920x1080&quot;});\n    image_buffer.add_data({97, &quot;1280x720&quot;});  // 这将覆盖 ID 95\n\n    std::cout &lt;&lt; &quot;\\nDisplaying buffer contents:&quot; &lt;&lt; std::endl;\n    lidar_buffer.display_buffer(&quot;Lidar Data Buffer&quot;);\n    image_buffer.display_buffer(&quot;Image Data Buffer&quot;);\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">Lidar最终ID顺序：1004、1002、1003\nImage最终帧ID顺序：97、96\n</code></pre>\n<p>核对说明：按照现有display_buffer()逐项遍历的顺序。</p>\n<p><img src=\"assets/classroom-effects/p07-0cec6b0ed636.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>缓存_覆盖源码与运行.png</code>（循环覆盖补全代码、红框标出 <code>% N</code>，以及同屏的Lidar/Image最终顺序）。</p>\n"
                },
                {
                  "id": "class-c-062-stage-2",
                  "number": 2,
                  "title": "接入自定义IMU数据",
                  "leads": [],
                  "html": "<p><strong>任务形式：仿写并运行。</strong> 在已完成的缓存类上按给定骨架加入IMU数据类型和输出。</p>\n<ol>\n<li>基于下方骨架补全包含滚转 <code>roll</code>、俯仰 <code>pitch</code>、偏航 <code>yaw</code> 三个角度的 <code>IMUData</code> 结构体及重载的 <code>print_data(const IMUData&amp; data)</code> 函数。</li>\n<li>用同一个缓存模板建立容量为5的 <code>DataBuffer&lt;IMUData, 5&gt;</code>，依次放入 <code>(1.0, 2.0, 3.0)</code> 与 <code>(4.0, 5.0, 10.0 + 本人学号末两位)</code> 两条数据并显示。</li>\n<li>保留原Lidar、Image测试，核对三类缓存都可打印，输出“通信维护员[本人姓名]”。</li>\n</ol>\n<h5>本阶段骨架代码：IMUData与打印重载</h5>\n<pre><code class=\"language-cpp\">struct IMUData {\n    double roll;\n    double pitch;\n    double yaw;\n};\n\nvoid print_data(const IMUData&amp; data) {\n    // TODO：输出 roll、pitch、yaw 三个姿态角\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">通信维护员[本人姓名]\nLidar、Image缓存仍可显示\nIMU缓存： (roll,pitch,yaw)=(1,2,3) 与 (4,5,[10+学号末两位])\n</code></pre>\n<p><img src=\"assets/classroom-effects/p07-f51495ee8cfb.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>缓存_IMU源码与运行.png</code>（IMUData与打印函数代码，以及同屏的通信维护员标识和两条位姿数据）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p07-capstone",
          "title": "感知融合模块重构",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-g1",
              "caseId": "c-ext-g1",
              "label": "拓展案例 G1",
              "title": "点云处理SIMD优化",
              "taskId": "t-p07-capstone",
              "forms": [
                "挖空并补全",
                "扩充并运行、测试与对照",
                "测试与对照"
              ],
              "plan": "先补全标量基线，并用非4倍数点数检查SIMD尾部处理，逐项核对结果一致性。正确后再以同一数据、工作量与构建条件计时，分别保留结果验证和耗时记录，不用更短耗时掩盖漏算或错算。",
              "cardCaption": [
                "点云平移的两种实现",
                "SIMD 对照"
              ],
              "background": [
                {
                  "html": "<p>一帧点云有50万个点，每个点都要加上相同的三维位移。逐点计算与SIMD批量处理都能得到结果，但优化只有在结果一致时才有意义。</p>\n<p>本次实操先补全标量基线、核验非4倍数点数的尾部，再在相同数据和构建条件下计时。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "标量与SIMD"
                },
                {
                  "title": "尾部数据与正确性"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-g1-stage-1",
                  "number": 1,
                  "title": "自己写标量版本",
                  "leads": [],
                  "html": "<p><strong>任务形式：挖空并补全。</strong> 先补标量位移计算，SIMD实现保持原样作为对照。</p>\n<ol>\n<li>复制下方点云练习代码，找到 <code>translate_points_scalar()</code> 中已挖空的一处 TODO（包含三个坐标的位移计算）；保留 <code>translate_points_simd()</code>，不要改 SIMD 内建函数。</li>\n<li>在这一处 TODO 中，按 <code>Point</code> 的三个坐标逐一补写位移计算。将结果校验标题写为“点云批次[学号后四位]”，并打印本次处理点数。</li>\n<li>保留主程序原来的50万点、位移参数和 <code>results_match</code> 比较，运行核对“结果校验: 一致”。若不一致，先检查是否漏了 z 坐标。</li>\n</ol>\n<h5>本阶段练习代码：点云标量与SIMD对照</h5>\n<pre><code class=\"language-cpp\">#include &lt;cmath&gt;\n#include &lt;chrono&gt;\n#include &lt;iostream&gt;\n#include &lt;vector&gt;\n\n#if defined(__aarch64__) || defined(__ARM_NEON) || defined(__ARM_NEON__)\n#include &lt;arm_neon.h&gt;\n#define USE_NEON\n#elif defined(__SSE__)\n#include &lt;immintrin.h&gt;\n#define USE_SSE\n#endif\n\n// 16字节结构与128位寄存器宽度一致\nstruct alignas(16) Point {\n    float x, y, z, padding;\n};\n\nvoid translate_points_scalar(std::vector&lt;Point&gt;&amp; points, float tx, float ty, float tz) {\n    for (Point&amp; point : points) {\n        // TODO：将当前点 point 的三个坐标分别加上位移 tx、ty、tz\n    }\n}\n\nvoid translate_points_simd(std::vector&lt;Point&gt;&amp; points, float tx, float ty, float tz) {\n#if defined(USE_NEON)\n    const float32x4_t offset_x = vdupq_n_f32(tx);\n    const float32x4_t offset_y = vdupq_n_f32(ty);\n    const float32x4_t offset_z = vdupq_n_f32(tz);\n    std::size_t index = 0;\n    for (; index + 3 &lt; points.size(); index += 4) {\n        // 交错加载得到4个x、4个y、4个z和4个padding\n        float32x4x4_t values = vld4q_f32(&amp;points[index].x);\n        values.val[0] = vaddq_f32(values.val[0], offset_x);\n        values.val[1] = vaddq_f32(values.val[1], offset_y);\n        values.val[2] = vaddq_f32(values.val[2], offset_z);\n        vst4q_f32(&amp;points[index].x, values);\n    }\n#elif defined(USE_SSE)\n    const __m128 offset_x = _mm_set1_ps(tx);\n    const __m128 offset_y = _mm_set1_ps(ty);\n    const __m128 offset_z = _mm_set1_ps(tz);\n    std::size_t index = 0;\n    for (; index + 3 &lt; points.size(); index += 4) {\n        __m128 point0 = _mm_load_ps(&amp;points[index].x);\n        __m128 point1 = _mm_load_ps(&amp;points[index + 1].x);\n        __m128 point2 = _mm_load_ps(&amp;points[index + 2].x);\n        __m128 point3 = _mm_load_ps(&amp;points[index + 3].x);\n        _MM_TRANSPOSE4_PS(point0, point1, point2, point3);\n        point0 = _mm_add_ps(point0, offset_x);\n        point1 = _mm_add_ps(point1, offset_y);\n        point2 = _mm_add_ps(point2, offset_z);\n        _MM_TRANSPOSE4_PS(point0, point1, point2, point3);\n        _mm_store_ps(&amp;points[index].x, point0);\n        _mm_store_ps(&amp;points[index + 1].x, point1);\n        _mm_store_ps(&amp;points[index + 2].x, point2);\n        _mm_store_ps(&amp;points[index + 3].x, point3);\n    }\n#else\n    std::size_t index = 0;\n#endif\n    // 处理不足4个的尾部元素，或在不支持内建函数的平台执行标量回退\n    for (; index &lt; points.size(); ++index) {\n        points[index].x += tx;\n        points[index].y += ty;\n        points[index].z += tz;\n    }\n}\n\nint main() {\n    const std::size_t point_count = 500000;\n    std::vector&lt;Point&gt; scalar_points(point_count);\n\n    for (std::size_t index = 0; index &lt; point_count; ++index) {\n        const float value = static_cast&lt;float&gt;(index) * 0.01f;\n        scalar_points[index] = {value, value * 2.0f, value * 3.0f, 0.0f};\n    }\n    std::vector&lt;Point&gt; simd_points = scalar_points;\n\n    auto start_scalar = std::chrono::high_resolution_clock::now();\n    translate_points_scalar(scalar_points, 1.5f, -2.5f, 3.0f);\n    auto end_scalar = std::chrono::high_resolution_clock::now();\n\n    auto start_simd = std::chrono::high_resolution_clock::now();\n    translate_points_simd(simd_points, 1.5f, -2.5f, 3.0f);\n    auto end_simd = std::chrono::high_resolution_clock::now();\n\n    bool results_match = true;\n    for (std::size_t index = 0; index &lt; point_count; ++index) {\n        if (std::fabs(scalar_points[index].x - simd_points[index].x) &gt; 0.0001f ||\n            std::fabs(scalar_points[index].y - simd_points[index].y) &gt; 0.0001f ||\n            std::fabs(scalar_points[index].z - simd_points[index].z) &gt; 0.0001f) {\n            results_match = false;\n            break;\n        }\n    }\n\n    const double scalar_ms = std::chrono::duration&lt;double, std::milli&gt;(\n        end_scalar - start_scalar).count();\n    const double simd_ms = std::chrono::duration&lt;double, std::milli&gt;(\n        end_simd - start_simd).count();\n    std::cout &lt;&lt; &quot;标量耗时: &quot; &lt;&lt; scalar_ms &lt;&lt; &quot; ms\\n&quot;\n              &lt;&lt; &quot;SIMD耗时: &quot; &lt;&lt; simd_ms &lt;&lt; &quot; ms\\n&quot;\n              &lt;&lt; &quot;结果校验: &quot; &lt;&lt; (results_match ? &quot;一致&quot; : &quot;不一致&quot;) &lt;&lt; std::endl;\n\n    return results_match ? 0 : 1;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">点云批次[本人学号后四位]\n处理点数：500000\n结果校验：一致\n</code></pre>\n<p>核对说明：耗时是本机实测值。</p>\n<p><img src=\"assets/classroom-effects/p07-0f506c505e86.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>点云_标量源码.png</code>（一处TODO中三个坐标位移计算的补全代码）和 <code>点云_标量基线.png</code>（点云批次号、50万点测试及“结果一致”）。</p>\n"
                },
                {
                  "id": "class-c-ext-g1-stage-2",
                  "number": 2,
                  "title": "核验尾部剩余点",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 把点数改为非4的倍数，核对尾部剩余点。</p>\n<ol>\n<li>将测试点数 <code>point_count</code> 改为 <code>500000 + (1 + (本人学号末一位 % 3))</code>（即 500001、500002 或 500003），保留原有位移参数和两种计算方式。</li>\n<li>增加对两份结果中最后一个点 <code>point_count - 1</code> 的检查：分别输出该点的三个坐标，判断标量与SIMD结果是否一致。</li>\n<li>运行核对整组结果和最后一点都一致；沿用“点云批次[本人学号后四位]”。在源码顶部用注释写出尾部循环处理的点序号，并在同屏截图中用<strong>红框</strong>标出 <code>translate_points_simd</code> 末尾处理不足4个元素的标量回退循环。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">点云批次[本人学号后四位]\n处理点数：[500000+1+(学号末一位%3)]\n最后一个点：标量坐标与SIMD坐标相同\n整组结果校验：一致\n</code></pre>\n<p><img src=\"assets/classroom-effects/p07-87c5dd51b1b9.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>点云_尾部源码与运行.png</code>（非4倍数点数、红框标出尾部回退循环，以及同屏的点云批次号、最后一点两种坐标和结果一致）。</p>\n"
                },
                {
                  "id": "class-c-ext-g1-stage-3",
                  "number": 3,
                  "title": "同条件计时",
                  "leads": [],
                  "html": "<p><strong>任务形式：测试与对照。</strong> 两种实现使用相同数据和参数，并重复计时。</p>\n<ol>\n<li>保持两种方法的点集、点数和位移参数完全相同，记录标量与SIMD的第一组耗时。</li>\n<li>再运行一次，记录第二组耗时与“结果校验”；在截图中标明构建模式和机器架构。</li>\n<li>若SIMD未更快，检查是否走平台回退分支；只报告实测结果，不写“必定快多少倍”。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">第1次：标量[实测] ms，SIMD[实测] ms，结果一致\n第2次：标量[实测] ms，SIMD[实测] ms，结果一致\n</code></pre>\n<p>核对说明：同时注明本机架构与构建模式。</p>\n<p><img src=\"assets/classroom-effects/p07-7bfcb3503478.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>点云_计时源码.png</code>（同条件重复计时代码）和 <code>点云_计时对照.png</code>（点云批次号、两次标量/SIMD耗时、构建模式和机器架构）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-g2",
              "caseId": "c-ext-g2",
              "label": "拓展案例 G2",
              "title": "数据采集多线程实现",
              "taskId": "t-p07-capstone",
              "forms": [
                "观察与分析",
                "扩充并运行"
              ],
              "plan": "先观察持续运行程序中数据生产与消费的对应，再按个人规则改为有限批次。核对所有批次都被处理、队列等待能够结束、两个线程正常退出，保留批次记录与结束提示，验证退出条件没有造成数据丢失。",
              "cardCaption": [
                "采集与处理线程的协作",
                "生产者与消费者"
              ],
              "background": [
                {
                  "html": "<p>感知流水线需要一边采集数据、一边处理已采集数据。原版用两个线程与共享队列持续运行，却不能自然结束；若只限制采集次数，处理线程可能一直等待。</p>\n<p>本案例先观察生产和消费的配对，再让按本人学号确定的全部批次数据处理后两个线程自行退出，理解互斥、条件等待与结束信号如何配合。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "队列与互斥"
                },
                {
                  "title": "条件等待与结束信号"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-g2-stage-1",
                  "number": 1,
                  "title": "观察原有双线程",
                  "leads": [],
                  "html": "<p><strong>任务形式：观察与分析。</strong> 先运行原有双线程，观察生产与消费的配对。</p>\n<ol>\n<li>复制双线程练习代码，先定位共享的 <code>data_buffer</code>、<code>mtx</code>、<code>cv</code>，以及生产者 <code>data_collector()</code>、消费者 <code>data_processor()</code>。</li>\n<li>运行约5秒，用IDE停止按钮或终端 <code>Ctrl+C</code> 停止，截取至少3组同编号的“生产→消费”输出。</li>\n<li>在个人源码顶部用注释说明为什么原代码的两个 <code>while (true)</code> 和 <code>join()</code> 不能自然结束；本阶段截图只是基线，最终还要交可自然退出版本。</li>\n</ol>\n<h5>本阶段案例代码：双线程练习：采集线程与处理线程</h5>\n<pre><code class=\"language-cpp\">#include &lt;iostream&gt;\n#include &lt;thread&gt;\n#include &lt;queue&gt;\n#include &lt;mutex&gt;\n#include &lt;condition_variable&gt;\n#include &lt;chrono&gt;\n\n// 定义共享资源\nstd::queue&lt;int&gt; data_buffer;\nstd::mutex mtx; // 互斥锁，用于保护 data_buffer\nstd::condition_variable cv; // 条件变量，用于线程间通信\n\n// 生产者线程函数：模拟传感器数据采集\nvoid data_collector() {\n    int data_point = 0;\n    while (true) {\n        // 模拟采集数据需要时间\n        std::this_thread::sleep_for(std::chrono::milliseconds(500));\n\n        // 使用 std::unique_lock 来管理互斥锁\n        std::unique_lock&lt;std::mutex&gt; lock(mtx);\n\n        data_buffer.push(data_point);\n        std::cout &lt;&lt; &quot;[采集器]:  生产了数据 -&gt; &quot; &lt;&lt; data_point &lt;&lt; std::endl;\n\n        data_point++;\n\n        // 锁必须在通知之前或之后释放，这里 unique_lock 会自动管理\n        // 通知一个正在等待的线程\n        cv.notify_one();\n    }\n}\n\n// 消费者线程函数：模拟数据处理\nvoid data_processor() {\n    while (true) {\n        std::unique_lock&lt;std::mutex&gt; lock(mtx);\n\n        // 条件变量的 wait 方法会：\n        // 检查 lambda 条件是否为 true\n        // 如果是 false，它会原子地解锁 mutex 并让线程休眠\n        // 当被 notify 唤醒时，它会重新锁住 mutex 并再次检查条件\n        cv.wait(lock, []{ return !data_buffer.empty(); });\n\n        int data = data_buffer.front();\n        data_buffer.pop();\n\n        // 解锁，让生产者可以继续生产\n        lock.unlock();\n\n        // 在锁之外处理数据，减少锁的占用时间\n        std::cout &lt;&lt; &quot;[处理器]:           消费了数据 &lt;- &quot; &lt;&lt; data &lt;&lt; std::endl;\n        // 模拟处理数据需要时间\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n}\n\nint main() {\n    // 创建并启动线程\n    std::thread collector_thread(data_collector);\n    std::thread processor_thread(data_processor);\n\n    std::cout &lt;&lt; &quot;主线程：已启动采集和处理线程...&quot; &lt;&lt; std::endl;\n\n    // 让线程运行一段时间\n    // 在真实应用中，主线程会有自己的任务，并通过某种机制决定何时结束子线程\n    collector_thread.join(); // 等待线程结束（在此例中是无限循环）\n    processor_thread.join();\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">[采集器]: 生产了数据 -&gt; 0\n[处理器]: 消费了数据 &lt;- 0\n[采集器]: 生产了数据 -&gt; 1\n[处理器]: 消费了数据 &lt;- 1\n</code></pre>\n<p>核对说明：实际交错顺序可能不同；原版需手动停止。</p>\n<p><img src=\"assets/classroom-effects/p07-ae6c5b2b41b6.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>双线程_观察源码.png</code>（不能自然结束的原因注释）和 <code>双线程_原版观察.png</code>（至少三组生产/消费）。</p>\n"
                },
                {
                  "id": "class-c-ext-g2-stage-2",
                  "number": 2,
                  "title": "改成有限采集并正常退出",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 原版是无限循环；只限制生产者次数仍会让消费者一直等待。基于下方改写骨架完成3处 <code>// TODO</code>，使采集与处理线程都能正常退出。</p>\n<ol>\n<li>在共享资源区新增 <code>bool is_done = false;</code>，将总采集次数 <code>TOTAL</code> 设为 <code>4 + (本人学号末一位 % 3)</code>（即 4、5 或 6 次）。</li>\n<li>按下方骨架修改 <code>data_collector()</code>：将无限循环改为采集 <code>TOTAL</code> 次（编号 <code>0</code> 到 <code>TOTAL - 1</code>）；循环结束后在锁保护下将 <code>is_done</code> 设为 <code>true</code> 并调用 <code>cv.notify_one()</code>。</li>\n<li>按下方骨架修改 <code>data_processor()</code>：将 <code>cv.wait</code> 的唤醒条件改为队列非空或 <code>is_done</code> 为真；唤醒后若队列已空且 <code>is_done</code> 为真则 <code>break</code> 退出循环。</li>\n<li>保留 <code>main</code> 中两个线程的 <code>join()</code>；在启动日志中注明“采集员[本人姓名]，批次[本人学号后四位]”，两个 <code>join()</code> 之后打印“主线程：采集与处理均已结束”。在同屏截图中用<strong>红框</strong>标出 <code>cv.wait</code> 的 lambda 条件表达式。</li>\n</ol>\n<h5>本阶段改写骨架：有限采集与优雅退出</h5>\n<pre><code class=\"language-cpp\">bool is_done = false; // 新增：采集完成标志\n\nvoid data_collector() {\n    const int TOTAL = 4 + (/* 本人学号末一位 */ % 3);\n    for (int data_point = 0; data_point &lt; TOTAL; ++data_point) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(500));\n        std::unique_lock&lt;std::mutex&gt; lock(mtx);\n        data_buffer.push(data_point);\n        std::cout &lt;&lt; &quot;[采集器]:  生产了数据 -&gt; &quot; &lt;&lt; data_point &lt;&lt; std::endl;\n        cv.notify_one();\n    }\n    // TODO 1：加锁将 is_done 设为 true，并调用 cv.notify_one() 唤醒消费者\n}\n\nvoid data_processor() {\n    while (true) {\n        std::unique_lock&lt;std::mutex&gt; lock(mtx);\n        // TODO 2：修改 wait 条件，当 !data_buffer.empty() 或 is_done 时唤醒\n        cv.wait(lock, []{ return /* 补全唤醒条件 */; });\n\n        // TODO 3：若 data_buffer 为空且 is_done 为 true，则 break 退出循环\n        int data = data_buffer.front();\n        data_buffer.pop();\n        lock.unlock();\n        std::cout &lt;&lt; &quot;[处理器]:           消费了数据 &lt;- &quot; &lt;&lt; data &lt;&lt; std::endl;\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">采集员[本人姓名]，批次[本人学号后四位]\n编号0—[TOTAL-1]：各采集一次、各处理一次\n主线程：采集与处理均已结束\n</code></pre>\n<p>核对说明：程序自行退出；相邻日志顺序可因调度而不同。</p>\n<p><img src=\"assets/classroom-effects/p07-ec802851f898.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>双线程_退出源码与运行.png</code>（采集完成标志与退出逻辑、红框标出 <code>cv.wait</code> 条件，以及同屏的采集员与批次、全部编号生产消费一次、主线程结束）。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "project-08",
      "number": 8,
      "title": "自动驾驶仿真系统实现",
      "groups": [
        {
          "id": "t-p08-intro",
          "title": "仿真系统模块统筹",
          "kind": "项目导入",
          "cards": [
            {
              "id": "class-c-ai-h",
              "caseId": "c-ai-h",
              "label": "案例 H",
              "title": "AIGC复杂系统架构",
              "taskId": "t-p08-intro",
              "forms": [
                "检索与核验、设计与建模"
              ],
              "plan": "结合车辆、地图、感知和显示需求提交完整架构提示词，核对模块职责、统一入口及调用方向。用一次仿真流程追查各模块如何协作，发现职责混杂或接口缺失时继续修订，保留架构图与逐项核验依据。",
              "cardCaption": [
                "仿真调用关系核验",
                "主控、感知与显示"
              ],
              "background": [
                {
                  "html": "<p>整套自动驾驶仿真系统需要同时组织车辆状态、障碍物、传感器、地图与数据显示。若主程序直接承担移动、环境查询、感知和绘制的全部细节，新增一个功能就可能牵动多处代码，已有模块也难以单独核验。</p>\n<p>本次将这些需求交给AIGC协助规划，再由自己检查谁统筹流程、谁提供环境、谁负责呈现。架构图不仅要列出模块名称，还应能说明一次仿真中各模块怎样协作，为后续系统集成提供可核对的职责与调用关系。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "系统职责与外观模式"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ai-h-stage-1",
                  "number": 1,
                  "title": "AIGC复杂系统架构",
                  "leads": [],
                  "html": "<p><strong>任务形式：检索与核验、设计与建模。</strong> 让AIGC提出结构，再由本人核对各模块职责和调用关系。</p>\n<ol>\n<li>新开一次AIGC对话，发送下列提示词。用需求说明各模块的作用即可，不必整理或上传以前写过的源码；要求AIGC先给类关系图和接口说明。</li>\n</ol>\n<blockquote>\n<p>请为一个命令行自动驾驶仿真系统设计架构。系统需要可移动的 <strong>Vehicle</strong>、记录道路与障碍物的 <strong>Map</strong>，以及提供环境信息的<strong>传感器模块</strong>。请设计负责统筹仿真流程的 <strong>SimulationSystem</strong> 和负责状态显示的 <strong>Renderer</strong>，列出各类职责、主要公开接口和调用方向，画出类关系图，并解释是否使用了外观模式。请依据这些需求设计，不假定我已提供各模块源码。</p>\n</blockquote>\n<ol start=\"2\">\n<li>检查AIGC结果：车辆是否通过地图接口查询障碍，主控是否只调用必要接口，渲染器是否只负责显示。若把地图查询、车辆移动和画面绘制混在同一个类中，向AIGC提出一条具体修改要求并保存修改后的图。</li>\n<li>另开一个对话，自行写一条“智能家居控制中心”的系统设计提示词，包含灯光、恒温器与安防摄像头，要求AIGC给出主控类和模块关系。比较两个场景中统一入口所起的作用。</li>\n</ol>\n<p><strong>本阶段提交：</strong> <code>自动驾驶架构提示与图.png</code>（本人提示词、修改要求及最终类关系图）、<code>智能家居架构.png</code>（本人新写的提示词和AI结构图），以及一句关于 <code>SimulationSystem</code> 应向外提供什么接口的判断。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p08-b01",
          "title": "自动驾驶仿真系统后端实现",
          "kind": "基础任务 1",
          "cards": [
            {
              "id": "class-c-063",
              "caseId": "c-063",
              "label": "案例 63",
              "title": "车辆地图系统集成",
              "taskId": "t-p08-b01",
              "forms": [
                "复制后运行",
                "改写并运行、测试与对照",
                "扩充并运行"
              ],
              "plan": "先运行车辆与地图的基础交互，再加入高密度路障并从同一起点向不同方向试走。随后扩充移动返回状态与遇障停止逻辑，对照坐标、边界、障碍和结束提示，确认车辆更新与导航停止依据同一组判断。",
              "cardCaption": [
                "车辆移动前查询地图",
                "模块协作"
              ],
              "background": [
                {
                  "html": "<p>车辆与地图各自能够工作，并不代表把它们放在一起就能可靠移动。本次先连接Vehicle与Map两个模块：车辆提出下一位置，地图判断该处能否进入，车辆再根据回答保持或更新自身坐标。</p>\n<p>给定示例先验证基础移动，随后会增加路障密度，并让导航在不能继续前进时停止。需要把当前位置、目标位置、地图边界与返回状态联系起来，检查一次实际移动是否遵守接口约定，遇障后的结束是否有明确依据。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "地图查询与车辆移动接口"
                },
                {
                  "title": "`grid[y][x]`、障碍字符与越界"
                },
                {
                  "title": "布尔返回值与循环停止"
                }
              ],
              "stages": [
                {
                  "id": "class-c-063-stage-1",
                  "number": 1,
                  "title": "车辆地图原版运行",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行。</strong> 用完整程序确认地图查询、移动与位置输出的基本协作。</p>\n<ol>\n<li>在本次日期目录下建立车辆地图子文件夹，将下方代码复制为 <code>main.cpp</code>。找到地图的 <code>is_obstacle</code>、车辆的 <code>move</code> 与主程序中的三次移动调用。</li>\n<li>编译运行，核对第一次向右成功，之后两次尝试向下均被同一障碍挡住，车辆位置保持不变。不要在本阶段改动地图和移动逻辑。</li>\n<li>截取能看清地图数据、查询接口、移动调用的源码画面，以及完整的三次移动结果。代码较长时源码可分张截取。</li>\n</ol>\n<h5>本阶段案例代码：车辆与地图</h5>\n<pre><code class=\"language-cpp\">// 模拟车辆与地图两个模块的简单集成与交互\n\n#include &lt;iostream&gt;\n#include &lt;vector&gt;\n#include &lt;string&gt;\n\n// 定义地图类 (模块A)\n// 负责存储环境信息，并提供查询接口\nclass Map {\nprivate:\n    // 使用 vector&lt;string&gt; 模拟一个二维地图\n    std::vector&lt;std::string&gt; grid;\n\npublic:\n    // 构造函数，初始化一个简单的地图\n    Map() {\n        grid = {\n            &quot;..........&quot;,\n            &quot;.#........&quot;,\n            &quot;..........&quot;,\n            &quot;......#...&quot;,\n            &quot;..........&quot;\n        };\n    }\n\n    // 公共接口：判断指定坐标是否有障碍物\n    // const 成员函数，保证不会修改地图状态\n    bool is_obstacle(int x, int y) const {\n        // 边界检查，防止越界\n        if (y &lt; 0 || y &gt;= grid.size() || x &lt; 0 || x &gt;= grid[0].size()) {\n            return true; // 越界视为障碍物\n        }\n        return grid[y][x] == &#39;#&#39;;\n    }\n\n    // 辅助函数：打印地图\n    void display() const {\n        for (const auto&amp; row : grid) {\n            std::cout &lt;&lt; row &lt;&lt; std::endl;\n        }\n    }\n};\n\n// 定义车辆类 (模块B)\n// 负责自身的移动逻辑，但依赖地图模块提供的信息\nclass Vehicle {\nprivate:\n    int x, y; // 车辆的坐标\n\npublic:\n    // 构造函数，设置初始位置\n    Vehicle(int start_x, int start_y) : x(start_x), y(start_y) {}\n\n    // 根据地图信息移动车辆\n    // 它接收一个对Map对象的const引用，表明它需要使用地图，但不会修改它\n    void move(char direction, const Map&amp; map) {\n        int target_x = x;\n        int target_y = y;\n\n        switch (direction) {\n            case &#39;W&#39;: target_y--; break; // 上\n            case &#39;S&#39;: target_y++; break; // 下\n            case &#39;A&#39;: target_x--; break; // 左\n            case &#39;D&#39;: target_x++; break; // 右\n        }\n\n        std::cout &lt;&lt; &quot;指令: 尝试移动到 (&quot; &lt;&lt; target_x &lt;&lt; &quot;, &quot; &lt;&lt; target_y &lt;&lt; &quot;)... &quot;;\n\n        // 调用地图接口检查目标位置\n        if (map.is_obstacle(target_x, target_y)) {\n            std::cout &lt;&lt; &quot;失败! 目标位置是障碍物。&quot; &lt;&lt; std::endl;\n        } else {\n            // 检查通过，才更新自身状态\n            x = target_x;\n            y = target_y;\n            std::cout &lt;&lt; &quot;成功! &quot; &lt;&lt; std::endl;\n        }\n    }\n\n    // 获取当前位置\n    void print_position() const {\n        std::cout &lt;&lt; &quot;车辆当前位置: (&quot; &lt;&lt; x &lt;&lt; &quot;, &quot; &lt;&lt; y &lt;&lt; &quot;)&quot; &lt;&lt; std::endl;\n    }\n};\n\n// main函数 (集成与测试)\nint main() {\n    Map world_map;      // 创建地图对象\n    Vehicle my_car(0, 0); // 创建车辆对象，初始位置(0,0)\n\n    std::cout &lt;&lt; &quot;--- 初始状态 ---&quot; &lt;&lt; std::endl;\n    world_map.display();\n    my_car.print_position();\n    std::cout &lt;&lt; &quot;------------------&quot; &lt;&lt; std::endl;\n\n    // 第 1 次移动：尝试向右移动 (目标是(1,0)，安全)\n    my_car.move(&#39;D&#39;, world_map);\n    my_car.print_position();\n    std::cout &lt;&lt; std::endl;\n\n    // 第 2 次移动：尝试向下移动 (目标是(1,1)，有障碍物)\n    my_car.move(&#39;S&#39;, world_map);\n    my_car.print_position(); // 位置应保持不变\n    std::cout &lt;&lt; std::endl;\n\n    // 第 3 次移动：再次向下移动 (在(1,1)再次尝试，仍然失败)\n    my_car.move(&#39;S&#39;, world_map);\n    my_car.print_position(); // 位置应保持不变\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p08-3ca8683fc58e.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>地图与移动源码.png</code>（地图、查询接口及主程序调用，可分张）和 <code>车辆地图原版运行.png</code>（向右成功、向下受阻及位置未变）。</p>\n"
                },
                {
                  "id": "class-c-063-stage-2",
                  "number": 2,
                  "title": "高密度路障地图",
                  "leads": [
                    {
                      "html": "<p>保留基础移动记录，增加障碍并从同一起点向四个方向试走。把边界、路障与移动结果一起记录，为后续核验导航停止条件提供依据。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：改写并运行、测试与对照。</strong> 修改地图行字符串，并对同一起点发出四个方向的指令。</p>\n<ol>\n<li>在个人程序的 <code>Map</code> 初始化中直接修改已有的五行地图字符串，用 <code>#</code> 表示障碍。至少新增四处障碍，其中第0行（最上面一行）的障碍固定在列坐标 <code>X_OBS = 2 + (本人学号末一位 % 3)</code>（即 <code>(2,0)</code>、<code>(3,0)</code> 或 <code>(4,0)</code>），其左侧列保持为空地 <code>.</code>，原有 <code>(1,1)</code> 障碍保留。核对五行长度仍相同。</li>\n<li>保留原版三次移动演示，另建一辆从 <code>(0,0)</code> 出发的测试车，依次尝试向上、向左、向右、向下移动，每次之后打印位置。按这组顺序，上、左应被边界拦截，右移应成功到 <code>(1,0)</code>，下移应被 <code>(1,1)</code> 的障碍拦截。</li>\n<li>在四向测试前打印“质检员[本人姓名]执行四向碰撞测试”。编译运行，检查失败时位置不变、成功时才更新，并核对新增障碍在地图中可见。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">质检员[本人姓名]执行四向碰撞测试\n从(0,0)向上、向左：受边界拦截\n向右：成功到(1,0)\n随后向下：被(1,1)障碍拦截，仍在(1,0)\n</code></pre>\n<p><img src=\"assets/classroom-effects/p08-63ce21dd75b2.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>四向碰撞源码与运行.png</code>（五行地图与新增障碍、四个方向的调用代码，以及同屏的本人标识与边界/障碍拦截结果）。</p>\n"
                },
                {
                  "id": "class-c-063-stage-3",
                  "number": 3,
                  "title": "遇障自动终止寻路",
                  "leads": [],
                  "html": "<p><strong>任务形式：扩充并运行。</strong> 在已完成的地图上按给定骨架让移动结果控制下一次试探。</p>\n<ol>\n<li>基于下方骨架将 <code>Vehicle::move</code> 的返回类型改为 <code>bool</code>：目标受阻时报告失败并返回 <code>false</code>，位置更新成功时返回 <code>true</code>。保留原有方向选择、地图查询和位置输出，勿把障碍判断搬到主程序。</li>\n<li>在主程序原有四向测试后另建一辆从 <code>(0,0)</code> 出发的导航车 <code>nav_car</code>。按下方骨架用 <code>while</code> 反复尝试向右移动，每次成功才增加步数；移动失败即停止，不把失败的一次计入成功步数。</li>\n<li>输出“导航规划员[本人姓名]：成功移动……步，遇障停止”，并打印最终坐标。由于第0行已在 <code>(X_OBS, 0)</code> 设障，核对从 <code>(0,0)</code> 出发向右成功移动 <code>X_OBS - 1</code> 步，最终停在 <code>(X_OBS - 1, 0)</code>。在同屏截图中用<strong>红框</strong>标出 <code>while (nav_car.move(&#39;D&#39;, world_map))</code> 循环条件。</li>\n</ol>\n<h5>本阶段扩充骨架：布尔返回值与自动寻路</h5>\n<pre><code class=\"language-cpp\">// 1. Vehicle 类中的 move 方法签名与返回\nbool move(char direction, const Map&amp; map) {\n    // ... 保留原有 target_x, target_y 计算 ...\n    if (map.is_obstacle(target_x, target_y)) {\n        std::cout &lt;&lt; &quot;移动失败：目标位置 (&quot; &lt;&lt; target_x &lt;&lt; &quot;, &quot; &lt;&lt; target_y &lt;&lt; &quot;) 有障碍物或超出边界！&quot; &lt;&lt; std::endl;\n        // TODO 1：移动受阻时返回对应的布尔值\n    } else {\n        x = target_x;\n        y = target_y;\n        std::cout &lt;&lt; &quot;成功移动到 (&quot; &lt;&lt; x &lt;&lt; &quot;, &quot; &lt;&lt; y &lt;&lt; &quot;).&quot; &lt;&lt; std::endl;\n        // TODO 2：移动成功时返回对应的布尔值\n    }\n}\n\n// 2. main 函数末尾的自动寻路计数\nVehicle nav_car(0, 0);\nint steps = 0;\nwhile (nav_car.move(&#39;D&#39;, world_map)) {\n    // TODO 3：累计成功移动步数\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">导航规划员[本人姓名]：成功移动[X_OBS-1]步，遇障停止\n车辆最终位置：([X_OBS-1],0)\n</code></pre>\n<p><img src=\"assets/classroom-effects/p08-2ae49386652f.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>寻路源码与运行.png</code>（<code>move</code> 的布尔返回、红框标出 <code>while</code> 寻路循环，以及同屏的本人标识、成功步数、遇障停止和最终坐标）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p08-b02",
          "title": "自动驾驶仿真系统前端实现",
          "kind": "基础任务 2",
          "cards": [
            {
              "id": "class-c-064",
              "caseId": "c-064",
              "label": "案例 64",
              "title": "命令行进度条刷新",
              "taskId": "t-p08-b02",
              "forms": [
                "复制后运行、测试与对照",
                "改写并运行",
                "扩充并运行、测试与对照"
              ],
              "plan": "先比较单行刷新与换行输出，再修改进度条宽度、填充字符和个人署名，核对0%到100%的完整显示。随后加入转盘动画，检查字符轮换、原行覆盖及结束画面，确保新增动画没有破坏原有进度反馈。",
              "cardCaption": [
                "让进度条在同一行增长",
                "CLI 刷新"
              ],
              "background": [
                {
                  "html": "<p>仿真系统加载地图或初始化传感器可能要等待一段时间。若每次进度变化都另起一行，终端会被重复信息占满；用户也不容易看出当前状态。</p>\n<p>本案例先运行单行刷新的进度条，对照换行效果，再修改宽度、填充字符与个人署名。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "回车符、缓冲区与 `std::flush`"
                },
                {
                  "title": "进度比例与显示宽度"
                },
                {
                  "title": "字符数组、取模与退格符"
                }
              ],
              "stages": [
                {
                  "id": "class-c-064-stage-1",
                  "number": 1,
                  "title": "原版进度条刷新",
                  "leads": [],
                  "html": "<p><strong>任务形式：复制后运行、测试与对照。</strong> 先观察原版单行刷新，再临时改变回车符比较显示方式。</p>\n<ol>\n<li>在本次日期目录新建进度条子文件夹，把下方完整代码复制为 <code>main.cpp</code>。在终端编译运行，观察从0%到100%的进度是否持续覆盖同一行，以及完成提示是否另起一行。</li>\n<li>找到 <code>\\r</code>、<code>std::flush</code>、进度位置计算和延时语句。临时把回车符改为换行符再运行，比较终端增加了多少行；保存对照画面后恢复回车符。</li>\n<li>截取关键源码及原版、换行对照的运行画面；动态画面可以在运行途中暂停截取。</li>\n</ol>\n<h5>本阶段案例代码：命令行进度条</h5>\n<pre><code class=\"language-cpp\">// 在命令行中实现一个动态更新的进度条\n\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;vector&gt;\n#include &lt;chrono&gt; // 用于延时\n#include &lt;thread&gt; // 用于延时\n\nint main() {\n    const int total_progress = 100;\n    const int bar_width = 50;\n\n    std::cout &lt;&lt; &quot;正在初始化系统，请稍候...&quot; &lt;&lt; std::endl;\n\n    // 使用 for 循环模拟从0到100的进度\n    for (int i = 0; i &lt;= total_progress; ++i) {\n        // 使用回车符 &#39;\\r&#39; 将光标移回当前行开头\n        //    它的作用是让光标回到当前行的行首，但不会换行\n        //    这样，下一次的 std::cout 输出就会覆盖掉本行的旧内容\n        std::cout &lt;&lt; &quot;\\r[&quot;;\n\n        // 算法设计：根据百分比计算进度条的长度\n        int pos = bar_width * i / total_progress;\n\n        // 打印已完成部分的进度条\n        for (int j = 0; j &lt; bar_width; ++j) {\n            if (j &lt; pos) {\n                std::cout &lt;&lt; &quot;=&quot;;\n            } else if (j == pos) {\n                std::cout &lt;&lt; &quot;&gt;&quot;;\n            } else {\n                std::cout &lt;&lt; &quot; &quot;;\n            }\n        }\n\n        // 打印百分比，并使用空格填充以覆盖之前的数字（例如 9% -&gt; 10%）\n        std::cout &lt;&lt; &quot;] &quot; &lt;&lt; i &lt;&lt; &quot;% &quot;;\n\n        // 刷新输出流\n        //    确保缓冲区的内容立即被打印到屏幕上\n        std::cout &lt;&lt; std::flush;\n\n        // 延时，让我们能用肉眼看到动画效果\n        std::this_thread::sleep_for(std::chrono::milliseconds(50));\n    }\n\n    // 循环结束后，打印一个换行符，将光标移到新的一行\n    std::cout &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;初始化完成！&quot; &lt;&lt; std::endl;\n\n    return 0;\n}\n</code></pre>\n<p><strong>本阶段提交：</strong> <code>进度条原版源码.png</code>（回车、位置计算、刷新及延时）、<code>单行刷新.png</code>（进度条在同一行的画面）和 <code>换行对照.png</code>（临时改成换行后的多行输出）。</p>\n"
                },
                {
                  "id": "class-c-064-stage-2",
                  "number": 2,
                  "title": "进度UI样式重构",
                  "leads": [],
                  "html": "<p><strong>任务形式：改写并运行。</strong> 在已运行的进度条上修改字符、宽度和署名。</p>\n<ol>\n<li>将进度条宽度参数 <code>bar_width</code> 从 50 改为 <code>26 + (本人学号末一位 % 5) * 2</code>（即 26、28、30、32 或 34）；已完成区域用 <code>#</code>，尖端指示符用 <code>&gt;&gt;</code>，未完成区域仍留空格。核对进度为0、约50和100时括号内的形态。</li>\n<li>在每次刷新的进度条前加入“[本人姓名]的加载进度”，使本人标识与百分比出现在同一刷新行。保持原有 <code>\\r</code>、百分比、<code>std::flush</code> 与结束换行。</li>\n<li>运行并截取一个能看见 <code>#</code>、<code>&gt;&gt;</code>、本人标识和百分比的中途画面，再截取100%和“初始化完成”的结果。若行尾残留旧字符，检查刷新行的空格覆盖是否足够。</li>\n</ol>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">[本人姓名]的加载进度: [####&gt;&gt;      ] 约50%\n最后显示100%及“初始化完成！”\n</code></pre>\n<p><img src=\"assets/classroom-effects/p08-55c4c2ba0b02.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>进度UI源码与瞬间.png</code>（个人 <code>bar_width</code>、字符替换代码及同屏中途刷新画面）和 <code>进度UI完成.png</code>（100%与完成提示）。</p>\n"
                },
                {
                  "id": "class-c-064-stage-3",
                  "number": 3,
                  "title": "光标悬停自转动画",
                  "leads": [
                    {
                      "html": "<p>以个人进度条为起点加入转盘。核对字符轮换、原行覆盖与百分比结束提示，确认新增动画没有破坏已有进度显示。</p>\n"
                    }
                  ],
                  "html": "<p><strong>任务形式：扩充并运行、测试与对照。</strong> 沿用上一课时完成的个性化进度条，按给定骨架增加旋转符号的选帧与刷新。</p>\n<ol>\n<li>基于下方骨架在进度循环前准备四个字符 <code>/</code>、<code>-</code>、<code>\\\\</code>、<code>|</code> 组成的字符数组 <code>spinner</code>。每次进度刷新时用循环索引 <code>i</code> 对 4 取模，依次选出一个符号；保持原有百分比和进度条显示。</li>\n<li>将所选符号放在百分比之后，随后输出退格符 <code>\\b</code> 并刷新输出流，让下一帧能覆盖该位置。不要每次都换行；进度结束后仍只输出一次换行与完成提示。</li>\n<li>运行观察转盘是否循环变化；如变化太快难以看清，可在个人副本中适当调大原有延时，再比较两次运行。截取显示本人进度条和某一帧转盘符号的画面。</li>\n<li>在源码与完成同屏截图中，用<strong>红框</strong>标出取模选帧 <code>spinner[i % 4]</code> 与退格符 <code>\\b</code>。重新运行到100%，确认扩充动画没有破坏原进度条。</li>\n</ol>\n<h5>本阶段扩充骨架：转盘选帧与退格刷新</h5>\n<pre><code class=\"language-cpp\">const char spinner[] = {&#39;/&#39;, &#39;-&#39;, &#39;\\\\&#39;, &#39;|&#39;};\n// 在 for (int i = 0; i &lt;= total_progress; ++i) 循环内打印完 &quot;] &quot; &lt;&lt; i &lt;&lt; &quot;% &quot; 之后：\n// TODO：输出 spinner 中用 i 对 4 取模选出的字符，紧接着输出 &quot;\\b&quot; 并 std::flush\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<pre><code class=\"language-text\">[本人姓名]的加载进度: [####&gt;&gt;      ] 约50% /\n下一帧同一位置换成 -、\\ 或 |\n</code></pre>\n<p><img src=\"assets/classroom-effects/p08-83fda6a054a0.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>自转动画瞬间.png</code>（本人进度条与一个旋转符号的运行瞬间）和 <code>自转动画源码与完成.png</code>（红框标出选帧与退格语句，以及同屏的100%完成提示）。</p>\n"
                }
              ]
            }
          ]
        },
        {
          "id": "t-p08-capstone",
          "title": "基于SFML库的自动驾驶仿真系统设计",
          "kind": "项目实战",
          "cards": [
            {
              "id": "class-c-ext-h1",
              "caseId": "c-ext-h1",
              "label": "拓展案例 H1",
              "title": "SFML静态场景绘制",
              "taskId": "t-p08-capstone",
              "forms": [
                "搭建与构建、复制后运行"
              ],
              "plan": "先完成SFML链接并把配套字体放在工程要求的位置，再运行事件处理、清屏、绘制和刷新的基本流程。修改个人窗口标题后，核对主车、障碍物、文字及关闭行为，结合资源路径排查加载失败。",
              "cardCaption": [
                "绘制第一帧交通场景",
                "SFML 图形窗口"
              ],
              "background": [
                {
                  "html": "<p>命令行界面已经能报告进度，却难以同时展示车辆、障碍物与空间位置。拓展案例先用一个静态图形窗口呈现绿色主车、红色障碍和状态文字。</p>\n<p>要让窗口持续显示并能关闭，程序必须处理事件、清屏、绘制和刷新；本次实操先建立并运行这条基本渲染流程。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "SFML依赖、窗口与渲染循环"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-h1-stage-1",
                  "number": 1,
                  "title": "库链接与视窗渲染",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、复制后运行。</strong> 用现有工程配置和完整案例代码运行静态场景，定位窗口、绘制与显示语句。</p>\n<ol>\n<li>在本次日期目录中新建静态场景工程子文件夹。复制下方 <code>CMakeLists.txt</code> 与 <code>main.cpp</code>，并从<a href=\"downloads/materials/c-ext-h1/SourceHanSansSC.otf\">配套素材</a>复制 <code>SourceHanSansSC.otf</code> 到同一文件夹。确认三个文件名和扩展名准确。</li>\n<li>使用已配置SFML 2.x的环境构建程序，确认生成可运行程序；如果提示未找到SFML，按实验环境的安装说明检查库配置。</li>\n<li>将窗口标题 <code>Simulation Scene</code> 改为含本人中文姓名的标题；中文字符串前加 <code>L</code>，例如使用 <code>L&quot;张三的仿真场景&quot;</code>。原有中文状态文字的字符串也要加 <code>L</code>。运行生成目标，核对800×600窗口、绿色主车、红色障碍物及左上角的中文状态文字。关闭窗口时程序应正常退出。</li>\n<li>截取构建配置与目标生成画面、源码中窗口和绘制关键语句，以及能看清本人窗口标题与静态场景的桌面画面。</li>\n</ol>\n<h5>本阶段构建配置：静态场景</h5>\n<pre><code class=\"language-cmake\">cmake_minimum_required(VERSION 3.16)\nproject(simulation_app LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nfind_package(SFML 2.5 QUIET COMPONENTS graphics window system)\n\nif(NOT SFML_FOUND)\n    message(STATUS &quot;SFML unavailable: target skipped&quot;)\n    return()\nendif()\n\nadd_executable(simulation_app main.cpp)\ntarget_link_libraries(simulation_app PRIVATE sfml-graphics sfml-window sfml-system)\ntarget_compile_definitions(simulation_app PRIVATE\n    FONT_FILE_PATH=&quot;${CMAKE_CURRENT_SOURCE_DIR}/SourceHanSansSC.otf&quot;)\n</code></pre>\n<h5>本阶段案例代码：静态道路与车辆</h5>\n<pre><code class=\"language-cpp\">// 使用 SFML 绘制静态道路、车辆与障碍物\n\n#include &lt;SFML/Graphics.hpp&gt;\n#include &lt;iostream&gt;\n#include &lt;string&gt;\n\n#ifndef FONT_FILE_PATH\n#define FONT_FILE_PATH &quot;SourceHanSansSC.otf&quot;\n#endif\n\nint main() {\n    // 创建仿真窗口\n    sf::RenderWindow window(sf::VideoMode(800, 600), &quot;Simulation Scene&quot;);\n\n    // 绿色圆形表示主车\n    sf::CircleShape ego_vehicle(30.f); // 半径为30像素\n    ego_vehicle.setFillColor(sf::Color::Green);\n    ego_vehicle.setPosition(100.f, 250.f); // 设置在窗口中的位置\n\n    // 红色矩形表示障碍物\n    sf::RectangleShape obstacle(sf::Vector2f(50.f, 50.f)); // 50x50像素的正方形\n    obstacle.setFillColor(sf::Color::Red);\n    obstacle.setPosition(500.f, 250.f);\n\n    // 加载字体并准备状态文本\n    sf::Font font;\n    if (!font.loadFromFile(FONT_FILE_PATH)) {\n        std::cerr &lt;&lt; &quot;Error: Could not load font &#39;&quot; &lt;&lt; FONT_FILE_PATH\n                  &lt;&lt; &quot;&#39;&quot; &lt;&lt; std::endl;\n        return -1;\n    }\n\n    sf::Text status_text;\n    status_text.setFont(font);\n    status_text.setString(&quot;速度: 50 km/h\\n模式: 自动驾驶&quot;);\n    status_text.setCharacterSize(24); // 字体大小\n    status_text.setFillColor(sf::Color::White);\n    status_text.setPosition(10.f, 10.f); // 左上角位置\n\n    // 事件处理与渲染循环\n    while (window.isOpen()) {\n        sf::Event event;\n        while (window.pollEvent(event)) {\n            if (event.type == sf::Event::Closed) {\n                window.close();\n            }\n        }\n\n        window.clear(sf::Color(50, 50, 50));\n\n        window.draw(ego_vehicle);\n        window.draw(obstacle);\n        window.draw(status_text);\n\n        window.display();\n    }\n\n    return 0;\n}\n</code></pre>\n<h5>目标运行效果（关键内容）</h5>\n<p><img src=\"assets/classroom-effects/p08-3dd3df2c15c6.png\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>静态场景_构建配置.png</code>（<code>CMakeLists.txt</code>、SFML依赖及生成目标）、<code>静态场景_源码.png</code>（本人标题、窗口、图形绘制与 <code>display</code>）和 <code>静态场景_窗口.png</code>（绿色车辆、红色障碍、状态文字及本人标题）。</p>\n"
                }
              ]
            },
            {
              "id": "class-c-ext-h2",
              "caseId": "c-ext-h2",
              "label": "拓展案例 H2",
              "title": "SFML转向灯动画实现",
              "taskId": "t-p08-capstone",
              "forms": [
                "搭建与构建、改写并运行"
              ],
              "plan": "先接入三区域车辆贴图并运行原有动画，再按任务卡保留正常与左灯帧、调整播放间隔。对照贴图区域、帧索引和时钟更新，检查灯亮灯灭的交替及窗口关闭，确认改动的是动画逻辑而不是替换整张效果图。",
              "cardCaption": [
                "从车辆贴图切换灯光帧",
                "SFML 帧动画"
              ],
              "background": [
                {
                  "html": "<p>静态场景已经能显示车辆，但转向灯需要让同一辆车随时间呈现不同状态。配套贴图包含正常、左灯亮和右灯亮三个区域，原版按四帧顺序播放。</p>\n<p>本次实操先观察原动画，再保留正常与左灯两帧并调整播放间隔，理解纹理区域、帧索引和时钟如何配合。</p>\n"
                }
              ],
              "lectures": [
                {
                  "title": "纹理区域、帧索引与时钟间隔"
                }
              ],
              "stages": [
                {
                  "id": "class-c-ext-h2-stage-1",
                  "number": 1,
                  "title": "帧率节流与雪碧图剪裁",
                  "leads": [],
                  "html": "<p><strong>任务形式：搭建与构建、改写并运行。</strong> 先运行完整的四帧动画，再限制为左转向灯并调整播放速度。</p>\n<ol>\n<li>在本次日期目录新建转向灯工程子文件夹，复制下方 <code>CMakeLists.txt</code> 与 <code>main.cpp</code>，并从<a href=\"downloads/materials/c-ext-h2/car_sprites.png\">配套素材</a>复制 <code>car_sprites.png</code> 到同一文件夹。先观察贴图的三块区域：正常、左灯亮、右灯亮；检查CMake生成了可执行目标，没有因找不到SFML而跳过。</li>\n<li>先运行原版，确认窗口中的车辆会在正常、左灯亮、正常、右灯亮四帧间循环。将窗口标题改为含本人中文姓名的标题，给中文字符串加上前缀 <code>L</code>，确保运行画面能与个人成果对应。</li>\n<li>在个人副本中把帧间隔从0.5秒改为0.1秒；再调整 <code>frames</code> 的区域列表与帧总数，使动画只在正常与左灯亮之间交替，不再显示右灯亮。保留原有时钟判断、<code>setTextureRect</code>、事件处理和绘制循环。</li>\n<li>运行观察左灯明暗交替和速度变化；分别截取灯灭、左灯亮的窗口画面。若不易捕捉0.1秒的画面，可先用较慢间隔完成两张截图，再恢复0.1秒并保存最终源码。</li>\n<li>截取本人最终源码中帧列表、帧总数、0.1秒间隔和纹理区域切换语句，核对关闭窗口后程序正常结束。</li>\n</ol>\n<h5>配套素材：车辆贴图与坐标标注</h5>\n<p><img src=\"downloads/materials/c-ext-h2/car_sprites.png\" alt=\"正常、左灯亮、右灯亮三帧车辆贴图\"></p>\n<p><img src=\"assets/classroom-effects/p08-534130833470.png\" alt=\"纹理切片与坐标标注\"></p>\n<h5>本阶段构建配置：转向灯动画</h5>\n<pre><code class=\"language-cmake\">cmake_minimum_required(VERSION 3.16)\nproject(simulation_app LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nfind_package(SFML 2.5 QUIET COMPONENTS graphics window system)\n\nif(NOT SFML_FOUND)\n    message(STATUS &quot;SFML unavailable: target skipped&quot;)\n    return()\nendif()\n\nadd_executable(simulation_app main.cpp)\ntarget_link_libraries(simulation_app PRIVATE sfml-graphics sfml-window sfml-system)\ntarget_compile_definitions(simulation_app PRIVATE\n    CAR_SPRITES_FILE_PATH=&quot;${CMAKE_CURRENT_SOURCE_DIR}/car_sprites.png&quot;)\n</code></pre>\n<h5>本阶段案例代码：车辆转向灯</h5>\n<pre><code class=\"language-cpp\">// 使用SFML的Sprite Sheet实现车辆转向灯动画\n\n#include &lt;SFML/Graphics.hpp&gt;\n#include &lt;iostream&gt;\n\n#ifndef CAR_SPRITES_FILE_PATH\n#define CAR_SPRITES_FILE_PATH &quot;car_sprites.png&quot;\n#endif\n\nint main() {\n    sf::RenderWindow window(sf::VideoMode(800, 600), &quot;Vehicle Animation&quot;);\n\n    // 加载包含全部动画帧的雪碧图\n    sf::Texture vehicle_texture;\n    if (!vehicle_texture.loadFromFile(CAR_SPRITES_FILE_PATH)) {\n        std::cerr &lt;&lt; &quot;Error: Could not load texture &#39;&quot;\n                  &lt;&lt; CAR_SPRITES_FILE_PATH &lt;&lt; &quot;&#39;&quot; &lt;&lt; std::endl;\n        return -1;\n    }\n\n    // 创建精灵并绑定纹理\n    sf::Sprite vehicle_sprite;\n    vehicle_sprite.setTexture(vehicle_texture);\n\n    // 定义每一帧在雪碧图中的矩形区域\n    // sf::IntRect(左上角x, 左上角y, 宽度, 高度)\n    sf::IntRect frames[] = {\n        sf::IntRect(0, 0, 100, 100),   // 帧 0：正常\n        sf::IntRect(100, 0, 100, 100), // 帧 1：左灯亮\n        sf::IntRect(0, 0, 100, 100),   // 帧 2：正常\n        sf::IntRect(200, 0, 100, 100)  // 帧 3：右灯亮\n    };\n    int current_frame = 0;\n    int total_frames = 4;\n\n    // 用时钟控制动画帧率\n    sf::Clock clock;\n    sf::Time frame_time = sf::seconds(0.5f); // 每0.5秒切换一帧\n\n    // 设置精灵的初始位置和显示的帧\n    vehicle_sprite.setPosition(350, 250);\n    vehicle_sprite.setTextureRect(frames[current_frame]);\n\n    // 事件处理与渲染循环\n    while (window.isOpen()) {\n        sf::Event event;\n        while (window.pollEvent(event)) {\n            if (event.type == sf::Event::Closed) {\n                window.close();\n            }\n        }\n\n        // 达到帧间隔后切换纹理区域\n        if (clock.getElapsedTime() &gt; frame_time) {\n            current_frame = (current_frame + 1) % total_frames;\n            vehicle_sprite.setTextureRect(frames[current_frame]);\n            clock.restart();\n        }\n\n        window.clear(sf::Color(50, 50, 50));\n        window.draw(vehicle_sprite);\n        window.display();\n    }\n\n    return 0;\n}\n</code></pre>\n<p><img src=\"assets/classroom-effects/p08-54419cf4d1f1.gif\" alt=\"运行效果\"></p>\n<p><strong>本阶段提交：</strong> <code>转向灯_构建配置.png</code>（SFML链接、贴图路径及生成目标）、<code>转向灯_源码.png</code>（本人标题、0.1秒、正常与左灯两帧及 <code>setTextureRect</code>）、<code>转向灯_灯灭.png</code> 和 <code>转向灯_左灯亮.png</code>（同一车辆的两种画面）。</p>\n"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "media": [
    {
      "key": "assets/classroom-effects/p01-01.gif",
      "source": "assets/classroom-effects/p01-01.gif",
      "url": "assets/classroom-effects/p01-01.gif"
    },
    {
      "key": "assets/classroom-effects/p01-02.gif",
      "source": "assets/classroom-effects/p01-02.gif",
      "url": "assets/classroom-effects/p01-02.gif"
    },
    {
      "key": "assets/classroom-effects/p01-03.gif",
      "source": "assets/classroom-effects/p01-03.gif",
      "url": "assets/classroom-effects/p01-03.gif"
    },
    {
      "key": "assets/classroom-effects/p01-04.gif",
      "source": "assets/classroom-effects/p01-04.gif",
      "url": "assets/classroom-effects/p01-04.gif"
    },
    {
      "key": "assets/classroom-effects/p01-05.gif",
      "source": "assets/classroom-effects/p01-05.gif",
      "url": "assets/classroom-effects/p01-05.gif"
    },
    {
      "key": "assets/classroom-effects/p01-06.gif",
      "source": "assets/classroom-effects/p01-06.gif",
      "url": "assets/classroom-effects/p01-06.gif"
    },
    {
      "key": "assets/classroom-effects/p01-07.png",
      "source": "assets/classroom-effects/p01-07.png",
      "url": "assets/classroom-effects/p01-07.png"
    },
    {
      "key": "assets/classroom-effects/p01-08.gif",
      "source": "assets/classroom-effects/p01-08.gif",
      "url": "assets/classroom-effects/p01-08.gif"
    },
    {
      "key": "assets/classroom-effects/p02-01.png",
      "source": "assets/classroom-effects/p02-01.png",
      "url": "assets/classroom-effects/p02-01.png"
    },
    {
      "key": "assets/classroom-effects/p02-02.gif",
      "source": "assets/classroom-effects/p02-02.gif",
      "url": "assets/classroom-effects/p02-02.gif"
    },
    {
      "key": "assets/classroom-effects/p02-03.gif",
      "source": "assets/classroom-effects/p02-03.gif",
      "url": "assets/classroom-effects/p02-03.gif"
    },
    {
      "key": "assets/classroom-effects/p02-04.png",
      "source": "assets/classroom-effects/p02-04.png",
      "url": "assets/classroom-effects/p02-04.png"
    },
    {
      "key": "assets/classroom-effects/p02-05.gif",
      "source": "assets/classroom-effects/p02-05.gif",
      "url": "assets/classroom-effects/p02-05.gif"
    },
    {
      "key": "assets/classroom-effects/p02-06.gif",
      "source": "assets/classroom-effects/p02-06.gif",
      "url": "assets/classroom-effects/p02-06.gif"
    },
    {
      "key": "assets/classroom-effects/p02-07.gif",
      "source": "assets/classroom-effects/p02-07.gif",
      "url": "assets/classroom-effects/p02-07.gif"
    },
    {
      "key": "assets/classroom-effects/p02-08.png",
      "source": "assets/classroom-effects/p02-08.png",
      "url": "assets/classroom-effects/p02-08.png"
    },
    {
      "key": "assets/classroom-effects/p02-09.gif",
      "source": "assets/classroom-effects/p02-09.gif",
      "url": "assets/classroom-effects/p02-09.gif"
    },
    {
      "key": "assets/classroom-effects/p02-10.png",
      "source": "assets/classroom-effects/p02-10.png",
      "url": "assets/classroom-effects/p02-10.png"
    },
    {
      "key": "assets/classroom-effects/p02-11.png",
      "source": "assets/classroom-effects/p02-11.png",
      "url": "assets/classroom-effects/p02-11.png"
    },
    {
      "key": "assets/classroom-effects/p02-12.png",
      "source": "assets/classroom-effects/p02-12.png",
      "url": "assets/classroom-effects/p02-12.png"
    },
    {
      "key": "assets/classroom-effects/p02-13.png",
      "source": "assets/classroom-effects/p02-13.png",
      "url": "assets/classroom-effects/p02-13.png"
    },
    {
      "key": "assets/classroom-effects/p02-14.png",
      "source": "assets/classroom-effects/p02-14.png",
      "url": "assets/classroom-effects/p02-14.png"
    },
    {
      "key": "assets/classroom-effects/p02-f5c12cff13b8.gif",
      "source": "assets/classroom-effects/p02-f5c12cff13b8.gif",
      "url": "assets/classroom-effects/p02-f5c12cff13b8.gif"
    },
    {
      "key": "assets/classroom-effects/p02-15.gif",
      "source": "assets/classroom-effects/p02-15.gif",
      "url": "assets/classroom-effects/p02-15.gif"
    },
    {
      "key": "assets/classroom-effects/p02-13633fbf98f5.gif",
      "source": "assets/classroom-effects/p02-13633fbf98f5.gif",
      "url": "assets/classroom-effects/p02-13633fbf98f5.gif"
    },
    {
      "key": "assets/classroom-effects/p02-16.gif",
      "source": "assets/classroom-effects/p02-16.gif",
      "url": "assets/classroom-effects/p02-16.gif"
    },
    {
      "key": "assets/classroom-effects/p03-017a06936570.gif",
      "source": "assets/classroom-effects/p03-017a06936570.gif",
      "url": "assets/classroom-effects/p03-017a06936570.gif"
    },
    {
      "key": "assets/classroom-effects/p03-28b64a28f686.png",
      "source": "assets/classroom-effects/p03-28b64a28f686.png",
      "url": "assets/classroom-effects/p03-28b64a28f686.png"
    },
    {
      "key": "assets/classroom-effects/p03-963845489c81.png",
      "source": "assets/classroom-effects/p03-963845489c81.png",
      "url": "assets/classroom-effects/p03-963845489c81.png"
    },
    {
      "key": "assets/classroom-effects/p03-8183f3a026bc.png",
      "source": "assets/classroom-effects/p03-8183f3a026bc.png",
      "url": "assets/classroom-effects/p03-8183f3a026bc.png"
    },
    {
      "key": "assets/classroom-effects/p03-d3347fcb53da.gif",
      "source": "assets/classroom-effects/p03-d3347fcb53da.gif",
      "url": "assets/classroom-effects/p03-d3347fcb53da.gif"
    },
    {
      "key": "assets/classroom-effects/p03-c57faf9f2fde.gif",
      "source": "assets/classroom-effects/p03-c57faf9f2fde.gif",
      "url": "assets/classroom-effects/p03-c57faf9f2fde.gif"
    },
    {
      "key": "assets/classroom-effects/p03-da67bbda6d59.gif",
      "source": "assets/classroom-effects/p03-da67bbda6d59.gif",
      "url": "assets/classroom-effects/p03-da67bbda6d59.gif"
    },
    {
      "key": "assets/classroom-effects/p03-882752608fab.gif",
      "source": "assets/classroom-effects/p03-882752608fab.gif",
      "url": "assets/classroom-effects/p03-882752608fab.gif"
    },
    {
      "key": "assets/classroom-effects/p03-64ee082803ae.gif",
      "source": "assets/classroom-effects/p03-64ee082803ae.gif",
      "url": "assets/classroom-effects/p03-64ee082803ae.gif"
    },
    {
      "key": "assets/classroom-effects/p03-846ba62df23a.gif",
      "source": "assets/classroom-effects/p03-846ba62df23a.gif",
      "url": "assets/classroom-effects/p03-846ba62df23a.gif"
    },
    {
      "key": "assets/classroom-effects/p03-55f6a49b108d.png",
      "source": "assets/classroom-effects/p03-55f6a49b108d.png",
      "url": "assets/classroom-effects/p03-55f6a49b108d.png"
    },
    {
      "key": "assets/classroom-effects/p03-bf6f162b633f.png",
      "source": "assets/classroom-effects/p03-bf6f162b633f.png",
      "url": "assets/classroom-effects/p03-bf6f162b633f.png"
    },
    {
      "key": "assets/classroom-effects/p03-cee946717a48.png",
      "source": "assets/classroom-effects/p03-cee946717a48.png",
      "url": "assets/classroom-effects/p03-cee946717a48.png"
    },
    {
      "key": "assets/classroom-effects/p03-f2b4404331ae.gif",
      "source": "assets/classroom-effects/p03-f2b4404331ae.gif",
      "url": "assets/classroom-effects/p03-f2b4404331ae.gif"
    },
    {
      "key": "assets/classroom-effects/p03-78a98690e15f.gif",
      "source": "assets/classroom-effects/p03-78a98690e15f.gif",
      "url": "assets/classroom-effects/p03-78a98690e15f.gif"
    },
    {
      "key": "assets/classroom-effects/p03-43558dbca658.gif",
      "source": "assets/classroom-effects/p03-43558dbca658.gif",
      "url": "assets/classroom-effects/p03-43558dbca658.gif"
    },
    {
      "key": "assets/classroom-effects/p03-cf651d18372c.png",
      "source": "assets/classroom-effects/p03-cf651d18372c.png",
      "url": "assets/classroom-effects/p03-cf651d18372c.png"
    },
    {
      "key": "assets/classroom-effects/p03-a8fc80b85751.gif",
      "source": "assets/classroom-effects/p03-a8fc80b85751.gif",
      "url": "assets/classroom-effects/p03-a8fc80b85751.gif"
    },
    {
      "key": "assets/classroom-effects/p04-a147cc96062d.png",
      "source": "assets/classroom-effects/p04-a147cc96062d.png",
      "url": "assets/classroom-effects/p04-a147cc96062d.png"
    },
    {
      "key": "assets/classroom-effects/p04-960b5afd91a5.png",
      "source": "assets/classroom-effects/p04-960b5afd91a5.png",
      "url": "assets/classroom-effects/p04-960b5afd91a5.png"
    },
    {
      "key": "assets/classroom-effects/p04-558a210caaf7.png",
      "source": "assets/classroom-effects/p04-558a210caaf7.png",
      "url": "assets/classroom-effects/p04-558a210caaf7.png"
    },
    {
      "key": "assets/classroom-effects/p04-083b3ab9e268.png",
      "source": "assets/classroom-effects/p04-083b3ab9e268.png",
      "url": "assets/classroom-effects/p04-083b3ab9e268.png"
    },
    {
      "key": "assets/classroom-effects/p04-350b1078fbd2.png",
      "source": "assets/classroom-effects/p04-350b1078fbd2.png",
      "url": "assets/classroom-effects/p04-350b1078fbd2.png"
    },
    {
      "key": "assets/classroom-effects/p04-e933f6978039.gif",
      "source": "assets/classroom-effects/p04-e933f6978039.gif",
      "url": "assets/classroom-effects/p04-e933f6978039.gif"
    },
    {
      "key": "assets/classroom-effects/p04-1878796d44a7.png",
      "source": "assets/classroom-effects/p04-1878796d44a7.png",
      "url": "assets/classroom-effects/p04-1878796d44a7.png"
    },
    {
      "key": "assets/classroom-effects/p04-020bd3037acf.png",
      "source": "assets/classroom-effects/p04-020bd3037acf.png",
      "url": "assets/classroom-effects/p04-020bd3037acf.png"
    },
    {
      "key": "assets/classroom-effects/p04-0998053f9893.png",
      "source": "assets/classroom-effects/p04-0998053f9893.png",
      "url": "assets/classroom-effects/p04-0998053f9893.png"
    },
    {
      "key": "assets/classroom-effects/p04-c82b24b7600a.png",
      "source": "assets/classroom-effects/p04-c82b24b7600a.png",
      "url": "assets/classroom-effects/p04-c82b24b7600a.png"
    },
    {
      "key": "assets/classroom-effects/p04-0b154348a630.png",
      "source": "assets/classroom-effects/p04-0b154348a630.png",
      "url": "assets/classroom-effects/p04-0b154348a630.png"
    },
    {
      "key": "assets/classroom-effects/p04-fe0a12801d07.png",
      "source": "assets/classroom-effects/p04-fe0a12801d07.png",
      "url": "assets/classroom-effects/p04-fe0a12801d07.png"
    },
    {
      "key": "assets/classroom-effects/p04-a521ebe4e37a.png",
      "source": "assets/classroom-effects/p04-a521ebe4e37a.png",
      "url": "assets/classroom-effects/p04-a521ebe4e37a.png"
    },
    {
      "key": "assets/classroom-effects/p04-8aa89f47a268.gif",
      "source": "assets/classroom-effects/p04-8aa89f47a268.gif",
      "url": "assets/classroom-effects/p04-8aa89f47a268.gif"
    },
    {
      "key": "assets/classroom-effects/p04-eae0a7b78a91.png",
      "source": "assets/classroom-effects/p04-eae0a7b78a91.png",
      "url": "assets/classroom-effects/p04-eae0a7b78a91.png"
    },
    {
      "key": "assets/classroom-effects/p04-7b51c12d484f.gif",
      "source": "assets/classroom-effects/p04-7b51c12d484f.gif",
      "url": "assets/classroom-effects/p04-7b51c12d484f.gif"
    },
    {
      "key": "assets/classroom-effects/p04-ae9a2a35a1f3.png",
      "source": "assets/classroom-effects/p04-ae9a2a35a1f3.png",
      "url": "assets/classroom-effects/p04-ae9a2a35a1f3.png"
    },
    {
      "key": "assets/classroom-effects/p04-ae6b94185237.gif",
      "source": "assets/classroom-effects/p04-ae6b94185237.gif",
      "url": "assets/classroom-effects/p04-ae6b94185237.gif"
    },
    {
      "key": "assets/classroom-effects/p04-bbba57ed3b66.png",
      "source": "assets/classroom-effects/p04-bbba57ed3b66.png",
      "url": "assets/classroom-effects/p04-bbba57ed3b66.png"
    },
    {
      "key": "assets/classroom-effects/p04-78924b0c73d9.png",
      "source": "assets/classroom-effects/p04-78924b0c73d9.png",
      "url": "assets/classroom-effects/p04-78924b0c73d9.png"
    },
    {
      "key": "assets/classroom-effects/p04-2fa2c1b56c42.gif",
      "source": "assets/classroom-effects/p04-2fa2c1b56c42.gif",
      "url": "assets/classroom-effects/p04-2fa2c1b56c42.gif"
    },
    {
      "key": "assets/classroom-effects/p04-fcd16746caaa.gif",
      "source": "assets/classroom-effects/p04-fcd16746caaa.gif",
      "url": "assets/classroom-effects/p04-fcd16746caaa.gif"
    },
    {
      "key": "assets/classroom-effects/p04-e7d40f870410.png",
      "source": "assets/classroom-effects/p04-e7d40f870410.png",
      "url": "assets/classroom-effects/p04-e7d40f870410.png"
    },
    {
      "key": "assets/classroom-effects/p04-7e5e490a0846.png",
      "source": "assets/classroom-effects/p04-7e5e490a0846.png",
      "url": "assets/classroom-effects/p04-7e5e490a0846.png"
    },
    {
      "key": "assets/classroom-effects/p05-bf90fa98faf3.png",
      "source": "assets/classroom-effects/p05-bf90fa98faf3.png",
      "url": "assets/classroom-effects/p05-bf90fa98faf3.png"
    },
    {
      "key": "assets/classroom-effects/p05-e430f1daf168.png",
      "source": "assets/classroom-effects/p05-e430f1daf168.png",
      "url": "assets/classroom-effects/p05-e430f1daf168.png"
    },
    {
      "key": "assets/classroom-effects/p05-4df7ae157c20.png",
      "source": "assets/classroom-effects/p05-4df7ae157c20.png",
      "url": "assets/classroom-effects/p05-4df7ae157c20.png"
    },
    {
      "key": "assets/classroom-effects/p05-278fa80778d5.png",
      "source": "assets/classroom-effects/p05-278fa80778d5.png",
      "url": "assets/classroom-effects/p05-278fa80778d5.png"
    },
    {
      "key": "assets/classroom-effects/p05-bd683f179c10.png",
      "source": "assets/classroom-effects/p05-bd683f179c10.png",
      "url": "assets/classroom-effects/p05-bd683f179c10.png"
    },
    {
      "key": "assets/classroom-effects/p05-1411611a1d43.png",
      "source": "assets/classroom-effects/p05-1411611a1d43.png",
      "url": "assets/classroom-effects/p05-1411611a1d43.png"
    },
    {
      "key": "assets/classroom-effects/p05-63260dedb197.png",
      "source": "assets/classroom-effects/p05-63260dedb197.png",
      "url": "assets/classroom-effects/p05-63260dedb197.png"
    },
    {
      "key": "assets/classroom-effects/p05-ee3288195bf2.png",
      "source": "assets/classroom-effects/p05-ee3288195bf2.png",
      "url": "assets/classroom-effects/p05-ee3288195bf2.png"
    },
    {
      "key": "assets/classroom-effects/p05-032d4e434fb5.png",
      "source": "assets/classroom-effects/p05-032d4e434fb5.png",
      "url": "assets/classroom-effects/p05-032d4e434fb5.png"
    },
    {
      "key": "assets/classroom-effects/p05-36e58a2098cf.png",
      "source": "assets/classroom-effects/p05-36e58a2098cf.png",
      "url": "assets/classroom-effects/p05-36e58a2098cf.png"
    },
    {
      "key": "assets/classroom-effects/p05-76db21790afe.png",
      "source": "assets/classroom-effects/p05-76db21790afe.png",
      "url": "assets/classroom-effects/p05-76db21790afe.png"
    },
    {
      "key": "assets/classroom-effects/p05-92f3653cfd6e.png",
      "source": "assets/classroom-effects/p05-92f3653cfd6e.png",
      "url": "assets/classroom-effects/p05-92f3653cfd6e.png"
    },
    {
      "key": "assets/classroom-effects/p05-2e3e4c77ca12.png",
      "source": "assets/classroom-effects/p05-2e3e4c77ca12.png",
      "url": "assets/classroom-effects/p05-2e3e4c77ca12.png"
    },
    {
      "key": "assets/classroom-effects/p05-b6a4da4a47c8.png",
      "source": "assets/classroom-effects/p05-b6a4da4a47c8.png",
      "url": "assets/classroom-effects/p05-b6a4da4a47c8.png"
    },
    {
      "key": "assets/classroom-effects/p05-19e42a86f88d.png",
      "source": "assets/classroom-effects/p05-19e42a86f88d.png",
      "url": "assets/classroom-effects/p05-19e42a86f88d.png"
    },
    {
      "key": "assets/classroom-effects/p05-51ebda256473.gif",
      "source": "assets/classroom-effects/p05-51ebda256473.gif",
      "url": "assets/classroom-effects/p05-51ebda256473.gif"
    },
    {
      "key": "assets/classroom-effects/p05-d7fa0054248d.gif",
      "source": "assets/classroom-effects/p05-d7fa0054248d.gif",
      "url": "assets/classroom-effects/p05-d7fa0054248d.gif"
    },
    {
      "key": "assets/classroom-effects/p05-29384f220905.png",
      "source": "assets/classroom-effects/p05-29384f220905.png",
      "url": "assets/classroom-effects/p05-29384f220905.png"
    },
    {
      "key": "assets/classroom-effects/p05-94be3fe5d9b7.png",
      "source": "assets/classroom-effects/p05-94be3fe5d9b7.png",
      "url": "assets/classroom-effects/p05-94be3fe5d9b7.png"
    },
    {
      "key": "assets/classroom-effects/p05-22bf7fc2c064.png",
      "source": "assets/classroom-effects/p05-22bf7fc2c064.png",
      "url": "assets/classroom-effects/p05-22bf7fc2c064.png"
    },
    {
      "key": "assets/classroom-effects/p05-934ed72cdcb2.png",
      "source": "assets/classroom-effects/p05-934ed72cdcb2.png",
      "url": "assets/classroom-effects/p05-934ed72cdcb2.png"
    },
    {
      "key": "assets/classroom-effects/p05-45753f3dd758.gif",
      "source": "assets/classroom-effects/p05-45753f3dd758.gif",
      "url": "assets/classroom-effects/p05-45753f3dd758.gif"
    },
    {
      "key": "assets/classroom-effects/p05-cf4b9068c405.png",
      "source": "assets/classroom-effects/p05-cf4b9068c405.png",
      "url": "assets/classroom-effects/p05-cf4b9068c405.png"
    },
    {
      "key": "assets/classroom-effects/p05-7ad0fb2adb49.gif",
      "source": "assets/classroom-effects/p05-7ad0fb2adb49.gif",
      "url": "assets/classroom-effects/p05-7ad0fb2adb49.gif"
    },
    {
      "key": "assets/classroom-effects/p06-0efa56df9a12.png",
      "source": "assets/classroom-effects/p06-0efa56df9a12.png",
      "url": "assets/classroom-effects/p06-0efa56df9a12.png"
    },
    {
      "key": "assets/classroom-effects/p06-82b6eaf42b12.png",
      "source": "assets/classroom-effects/p06-82b6eaf42b12.png",
      "url": "assets/classroom-effects/p06-82b6eaf42b12.png"
    },
    {
      "key": "assets/classroom-effects/p06-fcbe6ca86416.gif",
      "source": "assets/classroom-effects/p06-fcbe6ca86416.gif",
      "url": "assets/classroom-effects/p06-fcbe6ca86416.gif"
    },
    {
      "key": "assets/classroom-effects/p06-3d4d3df816c9.png",
      "source": "assets/classroom-effects/p06-3d4d3df816c9.png",
      "url": "assets/classroom-effects/p06-3d4d3df816c9.png"
    },
    {
      "key": "assets/classroom-effects/p06-5be6a96ee1b7.png",
      "source": "assets/classroom-effects/p06-5be6a96ee1b7.png",
      "url": "assets/classroom-effects/p06-5be6a96ee1b7.png"
    },
    {
      "key": "assets/classroom-effects/p06-90aedd7313b4.png",
      "source": "assets/classroom-effects/p06-90aedd7313b4.png",
      "url": "assets/classroom-effects/p06-90aedd7313b4.png"
    },
    {
      "key": "assets/classroom-effects/p06-d693f69dbeda.png",
      "source": "assets/classroom-effects/p06-d693f69dbeda.png",
      "url": "assets/classroom-effects/p06-d693f69dbeda.png"
    },
    {
      "key": "assets/classroom-effects/p06-8630c232ee89.png",
      "source": "assets/classroom-effects/p06-8630c232ee89.png",
      "url": "assets/classroom-effects/p06-8630c232ee89.png"
    },
    {
      "key": "assets/classroom-effects/p06-dbe061160c62.png",
      "source": "assets/classroom-effects/p06-dbe061160c62.png",
      "url": "assets/classroom-effects/p06-dbe061160c62.png"
    },
    {
      "key": "assets/classroom-effects/p06-6c3cc24bbb60.png",
      "source": "assets/classroom-effects/p06-6c3cc24bbb60.png",
      "url": "assets/classroom-effects/p06-6c3cc24bbb60.png"
    },
    {
      "key": "assets/classroom-effects/p06-7a6555603f68.png",
      "source": "assets/classroom-effects/p06-7a6555603f68.png",
      "url": "assets/classroom-effects/p06-7a6555603f68.png"
    },
    {
      "key": "assets/classroom-effects/p06-4cb3900adf99.png",
      "source": "assets/classroom-effects/p06-4cb3900adf99.png",
      "url": "assets/classroom-effects/p06-4cb3900adf99.png"
    },
    {
      "key": "assets/classroom-effects/p06-8d1efb1b4f20.png",
      "source": "assets/classroom-effects/p06-8d1efb1b4f20.png",
      "url": "assets/classroom-effects/p06-8d1efb1b4f20.png"
    },
    {
      "key": "assets/classroom-effects/p06-403b9e2d34f9.png",
      "source": "assets/classroom-effects/p06-403b9e2d34f9.png",
      "url": "assets/classroom-effects/p06-403b9e2d34f9.png"
    },
    {
      "key": "assets/classroom-effects/p06-2c2b4cc8de51.png",
      "source": "assets/classroom-effects/p06-2c2b4cc8de51.png",
      "url": "assets/classroom-effects/p06-2c2b4cc8de51.png"
    },
    {
      "key": "assets/classroom-effects/p06-9fa7c28aaa92.png",
      "source": "assets/classroom-effects/p06-9fa7c28aaa92.png",
      "url": "assets/classroom-effects/p06-9fa7c28aaa92.png"
    },
    {
      "key": "assets/classroom-effects/p06-efb6b5316425.png",
      "source": "assets/classroom-effects/p06-efb6b5316425.png",
      "url": "assets/classroom-effects/p06-efb6b5316425.png"
    },
    {
      "key": "assets/classroom-effects/p06-48fcb4778216.png",
      "source": "assets/classroom-effects/p06-48fcb4778216.png",
      "url": "assets/classroom-effects/p06-48fcb4778216.png"
    },
    {
      "key": "assets/classroom-effects/p06-a526934b90d7.png",
      "source": "assets/classroom-effects/p06-a526934b90d7.png",
      "url": "assets/classroom-effects/p06-a526934b90d7.png"
    },
    {
      "key": "assets/classroom-effects/p06-041fa1f89820.png",
      "source": "assets/classroom-effects/p06-041fa1f89820.png",
      "url": "assets/classroom-effects/p06-041fa1f89820.png"
    },
    {
      "key": "assets/classroom-effects/p07-81d51f551587.png",
      "source": "assets/classroom-effects/p07-81d51f551587.png",
      "url": "assets/classroom-effects/p07-81d51f551587.png"
    },
    {
      "key": "assets/classroom-effects/p07-e488ab66888f.png",
      "source": "assets/classroom-effects/p07-e488ab66888f.png",
      "url": "assets/classroom-effects/p07-e488ab66888f.png"
    },
    {
      "key": "assets/classroom-effects/p07-2b5d96409523.png",
      "source": "assets/classroom-effects/p07-2b5d96409523.png",
      "url": "assets/classroom-effects/p07-2b5d96409523.png"
    },
    {
      "key": "assets/classroom-effects/p07-be34e8c13a35.png",
      "source": "assets/classroom-effects/p07-be34e8c13a35.png",
      "url": "assets/classroom-effects/p07-be34e8c13a35.png"
    },
    {
      "key": "assets/classroom-effects/p07-adcb5e94fc2f.gif",
      "source": "assets/classroom-effects/p07-adcb5e94fc2f.gif",
      "url": "assets/classroom-effects/p07-adcb5e94fc2f.gif"
    },
    {
      "key": "assets/classroom-effects/p07-0cec6b0ed636.png",
      "source": "assets/classroom-effects/p07-0cec6b0ed636.png",
      "url": "assets/classroom-effects/p07-0cec6b0ed636.png"
    },
    {
      "key": "assets/classroom-effects/p07-f51495ee8cfb.png",
      "source": "assets/classroom-effects/p07-f51495ee8cfb.png",
      "url": "assets/classroom-effects/p07-f51495ee8cfb.png"
    },
    {
      "key": "assets/classroom-effects/p07-0f506c505e86.png",
      "source": "assets/classroom-effects/p07-0f506c505e86.png",
      "url": "assets/classroom-effects/p07-0f506c505e86.png"
    },
    {
      "key": "assets/classroom-effects/p07-87c5dd51b1b9.png",
      "source": "assets/classroom-effects/p07-87c5dd51b1b9.png",
      "url": "assets/classroom-effects/p07-87c5dd51b1b9.png"
    },
    {
      "key": "assets/classroom-effects/p07-7bfcb3503478.png",
      "source": "assets/classroom-effects/p07-7bfcb3503478.png",
      "url": "assets/classroom-effects/p07-7bfcb3503478.png"
    },
    {
      "key": "assets/classroom-effects/p07-ae6c5b2b41b6.gif",
      "source": "assets/classroom-effects/p07-ae6c5b2b41b6.gif",
      "url": "assets/classroom-effects/p07-ae6c5b2b41b6.gif"
    },
    {
      "key": "assets/classroom-effects/p07-ec802851f898.gif",
      "source": "assets/classroom-effects/p07-ec802851f898.gif",
      "url": "assets/classroom-effects/p07-ec802851f898.gif"
    },
    {
      "key": "assets/classroom-effects/p08-3ca8683fc58e.png",
      "source": "assets/classroom-effects/p08-3ca8683fc58e.png",
      "url": "assets/classroom-effects/p08-3ca8683fc58e.png"
    },
    {
      "key": "assets/classroom-effects/p08-63ce21dd75b2.png",
      "source": "assets/classroom-effects/p08-63ce21dd75b2.png",
      "url": "assets/classroom-effects/p08-63ce21dd75b2.png"
    },
    {
      "key": "assets/classroom-effects/p08-2ae49386652f.gif",
      "source": "assets/classroom-effects/p08-2ae49386652f.gif",
      "url": "assets/classroom-effects/p08-2ae49386652f.gif"
    },
    {
      "key": "assets/classroom-effects/p08-55c4c2ba0b02.gif",
      "source": "assets/classroom-effects/p08-55c4c2ba0b02.gif",
      "url": "assets/classroom-effects/p08-55c4c2ba0b02.gif"
    },
    {
      "key": "assets/classroom-effects/p08-83fda6a054a0.gif",
      "source": "assets/classroom-effects/p08-83fda6a054a0.gif",
      "url": "assets/classroom-effects/p08-83fda6a054a0.gif"
    },
    {
      "key": "assets/classroom-effects/p08-3dd3df2c15c6.png",
      "source": "assets/classroom-effects/p08-3dd3df2c15c6.png",
      "url": "assets/classroom-effects/p08-3dd3df2c15c6.png"
    },
    {
      "key": "assets/classroom-effects/p08-d411caa4e81c.png",
      "source": "assets/classroom-effects/p08-d411caa4e81c.png",
      "url": "assets/classroom-effects/p08-d411caa4e81c.png"
    },
    {
      "key": "assets/classroom-effects/p08-534130833470.png",
      "source": "assets/classroom-effects/p08-534130833470.png",
      "url": "assets/classroom-effects/p08-534130833470.png"
    },
    {
      "key": "assets/classroom-effects/p08-54419cf4d1f1.gif",
      "source": "assets/classroom-effects/p08-54419cf4d1f1.gif",
      "url": "assets/classroom-effects/p08-54419cf4d1f1.gif"
    }
  ],
  "materials": [
    {
      "key": "downloads/materials/c-ext-d2/road.jpg",
      "source": "downloads/materials/c-ext-d2/road.jpg",
      "url": "downloads/materials/c-ext-d2/road.jpg",
      "directory": false,
      "canonicalSource": "/Users/Gothic/Documents/CLionProjects/cpp_simulation/simulation_examples/eee_D2/road.jpg"
    },
    {
      "key": "downloads/packages/inih.zip",
      "source": "downloads/packages/inih.zip",
      "url": "downloads/packages/inih.zip",
      "directory": true,
      "archive": "downloads/packages/inih.zip"
    },
    {
      "key": "downloads/materials/c-ext-h1/SourceHanSansSC.otf",
      "source": "downloads/materials/c-ext-h1/SourceHanSansSC.otf",
      "url": "downloads/materials/c-ext-h1/SourceHanSansSC.otf",
      "directory": false,
      "canonicalSource": "/Users/Gothic/Documents/ChatGPT/C++备课/课堂任务卡_靶向精练版/素材/SourceHanSansSC.otf"
    },
    {
      "key": "downloads/materials/c-ext-h2/car_sprites.png",
      "source": "downloads/materials/c-ext-h2/car_sprites.png",
      "url": "downloads/materials/c-ext-h2/car_sprites.png",
      "directory": false,
      "canonicalSource": "/Users/Gothic/Documents/CLionProjects/cpp_simulation/simulation_examples/eee_H2/car_sprites.png"
    }
  ]
};
