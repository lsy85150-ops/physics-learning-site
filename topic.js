const navTemplate = [
  ["overview", "教学大纲总览"],
  ["gaokao", "广东高考考点"],
  ["core", "核心知识点"],
  ["visual", "图像与物理图景"],
  ["formula", "公式与模型"],
  ["extension", "拓展知识"],
  ["practice", "专题训练"],
  ["teach", "教学建议"],
];

const sourceLinks = [
  ["2021 广东高考物理真题公开页", "https://gaokao.eol.cn/shiti/wl/202111/t20211116_2175742.shtml"],
  ["2022 广东高考物理真题公开页", "https://gaokao.eol.cn/shiti/zhenti/202206/t20220613_2231384.shtml"],
  ["2023 广东高考物理试题评析", "https://news.southcn.com/node_c70482848e/6e8da43cb1.shtml"],
  ["2024 广东高考物理权威点评", "https://news.dayoo.com/guangdong/202406/08/139996_54676772.htm"],
  ["2025 广东高考考试制度说明", "https://gaokao.eol.cn/guang_dong/dongtai/202505/t20250528_2671478.shtml"],
];

const topicSeeds = {
  kinematics: {
    title: "直线运动",
    chapter: "运动与相互作用",
    phase: "高一主干",
    lead: "从位移、速度、加速度到图像和匀变速模型，构建直线运动的完整知识链。",
    core: "运动学的核心不是套公式，而是把物理过程转化为图像、方程和阶段关系。",
    gaokao:
      "广东卷常把直线运动放入交通、实验、图像或多过程情境中考查。近年命题更重视从图像中提取斜率、面积、交点和阶段信息，而不是直接给出“套公式”的短题。教学时要突出：读题找对象，读图找物理量，分段找条件。",
    gaokaoBullets: [
      "高考常把直线运动放在纸带实验、交通情境、追及相遇或分段运动中考查。",
      "近五年广东卷更强调图像读取、过程分段、定量计算和规范表达。",
      "直线运动常作为力学大题入口，不一定独立命名，但会以速度图像、位移图像和实验数据的形式出现。",
    ],
    coreTitles: ["位移与路程", "速度与加速度", "x-t 图像", "v-t 图像"],
    coreTexts: [
      "位移是从初位置到末位置的有向线段，路程是实际轨迹长度。高考常在追及、往返和图像题里考查这两个概念的区别。",
      "速度描述位置变化快慢，加速度描述速度变化快慢。判断加速度方向时，要看速度变化的方向，不要被“快慢”两个字带偏。",
      "x-t 图像反映位置随时间的变化。斜率表示速度，图像陡峭程度对应速度大小，曲线的方向变化对应速度变化。",
      "v-t 图像反映速度随时间的变化。斜率表示加速度，图像与时间轴围成的面积表示位移，这是广东卷里很高频的能力点。",
    ],
    formulas: [
      ["平均速度", "\\bar v = \\frac{\\Delta x}{\\Delta t}", "适用于一段过程，强调位移与时间的比值。"],
      ["加速度", "a = \\frac{v-v_0}{t}", "描述速度变化快慢，方向由速度变化量决定。"],
      ["速度公式", "v = v_0 + at", "匀变速直线运动中连接初速度、加速度和时间。"],
      ["位移公式", "x = v_0t + \\frac{1}{2}at^2", "适合已知时间的匀变速过程。"],
      ["速度位移关系", "v^2-v_0^2 = 2ax", "适合不显含时间的匀变速过程。"],
    ],
    graphHint:
      "上图左侧强调 x-t 图像的斜率表示速度；右侧强调 v-t 图像的面积表示位移。复习时要让学生能口头说出“哪个量看斜率、哪个量看面积、哪个量看交点”。",
    formulaNote: "公式不是独立背诵的对象，而是模型的表达式。要让学生知道每个公式对应的前提、方向和适用范围。",
    extensions: [
      ["追及与相遇", "追及问题本质上是两个物体在同一坐标系下的位置关系。关键不是“追上没有”，而是看速度差、初始距离和过程阶段。"],
      ["图像综合", "高考常把图像和文字叙述混在一起，要求学生先翻译题干，再把物理过程还原为图像变化，最后求解。"],
      ["实验读数", "直线运动常联系打点计时器、刻度尺和纸带数据处理。会测量、会取点、会计算平均速度，是实验题的落点。"],
      ["学科迁移", "直线运动不仅服务力学，也为电学、磁学中的“匀速、加速、阶段变化”提供了最基本的分析模板。"],
    ],
    practice: [
      "近五年关联考法：图像读取、纸带实验、交通情境、追及相遇和多阶段匀变速。广东卷常把直线运动作为综合题的入口，不一定独立出现为“直线运动”标题。",
      "原创改编训练1：某车由静止开始做匀加速直线运动，4 s 内位移为 32 m。求加速度和第 4 s 末速度，并说明所用公式的适用条件。",
      "原创改编训练2：给出一条 v-t 图像：0-2 s 速度从 0 增至 6 m/s，2-5 s 保持 6 m/s，5-7 s 减至 0。求总位移，并说明图像面积的物理意义。",
      "教材同类题：纸带实验中若测得连续相等时间间隔内位移依次增大，说明物体做匀加速直线运动，并可用逐差法求加速度。",
    ],
    trainings: [
      ["2021-2022", "图像与运动过程", "关联 x-t / v-t 图像、分段运动和纸带数据处理；适合作为基础选择题与实验题训练。"],
      ["2023-2024", "真实情境建模", "结合交通、实验或科技情境，要求先读题筛选量，再判断公式或图像意义。"],
      ["2025 备考", "限时信息提取", "训练长题干中快速标出对象、初末状态、时间段、速度变化和位移关系。"],
    ],
    teach: [
      "先讲概念，再讲图像，再讲公式，最后讲题型，不要一上来就刷题。",
      "每节课安排一个“学生口头讲题”环节，强制学生把思路说完整。",
      "把错题归为“概念错、图像错、模型错、计算错、表达错”五类。",
      "在高三复习阶段，用专题页替代碎片化笔记，形成可持续更新的知识库。",
    ],
    visual: "kinematics",
  },
  "forces-balance": {
    title: "力与平衡",
    chapter: "运动与相互作用",
    phase: "高一主干",
    lead: "围绕受力图、共点力平衡和临界条件，建立力学题的第一层分析能力。",
    core: "力学入门的关键是受力图。受力图完整，方程通常就清楚了一半。",
    points: ["重力、弹力、摩擦力的产生条件", "静摩擦力方向判断", "共点力平衡", "正交分解", "临界与极值条件"],
    warnings: ["多画不存在的力", "漏掉摩擦力或弹力", "把摩擦力方向固定理解为与运动方向相反"],
  },
  "newton-laws": {
    title: "牛顿运动定律",
    chapter: "运动与相互作用",
    phase: "高一主干",
    lead: "用合力决定加速度的思想解释运动变化，处理多物体、多过程问题。",
    core: "牛顿定律连接“受力原因”和“运动结果”，是力学综合题的发动机。",
    points: ["牛顿第二定律", "整体法与隔离法", "连接体模型", "斜面模型", "传送带与板块模型"],
    warnings: ["研究对象切换后方程仍沿用旧受力", "整体法和隔离法混用时变量不一致", "传送带题不分阶段"],
  },
  "curved-motion": {
    title: "曲线运动与天体",
    chapter: "运动与相互作用",
    phase: "高一主干",
    lead: "把曲线运动分解为可处理的方向关系，并理解圆周和天体运动模型。",
    core: "曲线运动的本质是方向不断变化；向心力不是新力，而是指向圆心的合力效果。",
    points: ["平抛运动分解", "圆周运动的周期、角速度、向心加速度", "向心力来源", "万有引力提供向心力", "卫星轨道关系"],
    warnings: ["把向心力当作额外受力", "平抛水平方向误列加速度", "天体题公式记住了但不知道适用对象"],
  },
  "work-power": {
    title: "功与功率",
    chapter: "能量与动量",
    phase: "高一综合",
    lead: "理解力在位移方向上的效果，掌握功率与速度、牵引力之间的关系。",
    core: "功描述能量转化，功率描述转化快慢。公式背后一定要有过程意识。",
    points: ["恒力功 W=Fs cosθ", "正功、负功、零功", "平均功率与瞬时功率", "P=Fv 的适用条件", "机车恒功率与恒牵引力启动"],
    warnings: ["把路程直接当位移方向", "忽略力和位移夹角", "机车启动不分阶段"],
  },
  "mechanical-energy": {
    title: "机械能",
    chapter: "能量与动量",
    phase: "高一综合",
    lead: "用动能定理、机械能守恒和功能关系解决多阶段运动。",
    core: "能量方法适合跨过程求速度和高度，但前提是清楚哪些力做功、哪些能量转化。",
    points: ["动能定理", "重力势能和弹性势能", "机械能守恒条件", "除重力弹力外其他力做功", "多过程能量衔接"],
    warnings: ["只看到光滑就直接守恒", "漏掉摩擦生热", "把某一段速度当全程结果"],
  },
  momentum: {
    title: "动量与碰撞",
    chapter: "能量与动量",
    phase: "高一综合",
    lead: "选定系统与正方向，利用动量守恒处理碰撞、爆炸与反冲。",
    core: "动量专题的第一步永远是选系统。系统选对，守恒条件才有意义。",
    points: ["冲量与动量变化", "动量守恒条件", "弹性碰撞与非弹性碰撞", "反冲模型", "动量与能量联立"],
    warnings: ["没有说明正方向", "系统内力外力分不清", "碰撞后速度方向默认不变"],
  },
  "integrated-mechanics": {
    title: "力学综合模型",
    chapter: "能量与动量",
    phase: "高一综合",
    lead: "把牛顿定律、能量、动量、圆周运动结合，解决高考压轴型力学问题。",
    core: "综合题的难点不在公式多，而在过程切分、模型识别和条件转译。",
    points: ["过程分段", "临界状态", "能量与动量联用", "圆周最高点最低点", "板块与弹簧综合"],
    warnings: ["从头算到尾没有阶段边界", "临界词语没有转化为数学条件", "多个对象变量混乱"],
  },
  "electric-field": {
    title: "电场",
    chapter: "电与磁",
    phase: "高二主干",
    lead: "理解电场强度、电势、电势差和带电粒子在电场中的运动。",
    core: "电场题要同时看力的方向和能量变化，场强解决力，电势解决能。",
    points: ["电场强度定义", "电场线与等势面", "电势、电势差、电势能", "匀强电场中带电粒子运动", "电容器"],
    warnings: ["电场线方向与受力方向混淆", "正负电荷电势能变化判断反了", "只会公式不会看图"],
  },
  circuits: {
    title: "恒定电流与电路实验",
    chapter: "电与磁",
    phase: "高二主干",
    lead: "掌握电路规律、仪器连接和电学实验的数据处理。",
    core: "电路学习要把“实际电路图”和“等效关系”对应起来，实验题尤其看连接和误差。",
    points: ["部分电路和闭合电路欧姆定律", "串并联规律", "电源电动势和内阻", "伏安法测电阻", "滑动变阻器接法"],
    warnings: ["电压表电流表内阻影响忽略不当", "滑动变阻器限流与分压接法混淆", "电路图和实物图对应不上"],
  },
  "magnetic-field": {
    title: "磁场",
    chapter: "电与磁",
    phase: "高二主干",
    lead: "判断磁场中电流和带电粒子的受力方向，分析圆周轨迹。",
    core: "磁场题最稳的路径是先定方向，再找几何，再列半径和周期关系。",
    points: ["磁感应强度", "安培力", "洛伦兹力", "带电粒子匀速圆周运动", "速度选择器和质谱仪思想"],
    warnings: ["左右手定则混用", "半径几何关系找错", "忽略洛伦兹力不做功"],
  },
  induction: {
    title: "电磁感应",
    chapter: "电与磁",
    phase: "高二主干",
    lead: "理解磁通量变化产生感应电动势，并用楞次定律判断方向。",
    core: "电磁感应是电磁学的综合场：方向、图像、能量、力学常常一起出现。",
    points: ["磁通量", "感应电流条件", "楞次定律", "法拉第电磁感应定律", "导体棒切割磁感线"],
    warnings: ["只问有无电流却不看回路是否闭合", "楞次定律方向判断跳步", "图像斜率和面积含义不清"],
  },
  "oscillation-wave": {
    title: "机械振动与机械波",
    chapter: "振动、波、光、热、近代",
    phase: "高二拓展",
    lead: "从振动图像和波形图中读取相位、传播方向和波速关系。",
    core: "波动题的关键是区分“某质点随时间振动”和“某时刻空间波形”。",
    points: ["简谐运动", "周期与频率", "波长、波速、频率关系", "波形图与振动图像", "干涉和衍射现象"],
    warnings: ["把波形图当作质点轨迹", "传播方向和质点振动方向判断混乱", "相位差理解不清"],
  },
  optics: {
    title: "光学",
    chapter: "振动、波、光、热、近代",
    phase: "高二拓展",
    lead: "用光路图解释折射、全反射、干涉和衍射现象。",
    core: "光学题要敢画图。现象解释比公式堆算更重要。",
    points: ["折射定律", "临界角与全反射", "双缝干涉", "薄膜干涉", "光的波粒二象性入口"],
    warnings: ["法线没画就判断角度", "入射角折射角对象混乱", "干涉条纹条件只背不理解"],
  },
  thermal: {
    title: "热学",
    chapter: "振动、波、光、热、近代",
    phase: "高二拓展",
    lead: "理解微观粒子运动与宏观状态量之间的关系，掌握气体图像判断。",
    core: "热学更多考理解和图像，抓住状态量、过程和能量守恒就能稳住。",
    points: ["分子动理论", "内能", "气体实验定律", "p-V、p-T、V-T 图像", "热力学第一定律"],
    warnings: ["温度与热量混同", "状态变化过程看错", "图像坐标轴没看清"],
  },
  "modern-physics": {
    title: "近代物理",
    chapter: "振动、波、光、热、近代",
    phase: "高二拓展",
    lead: "掌握光电效应、原子结构、核反应和半衰期等高频结论。",
    core: "近代物理题通常不难，但概念边界很严，最怕似是而非。",
    points: ["光电效应规律", "爱因斯坦光电方程", "玻尔原子模型", "核反应方程", "半衰期"],
    warnings: ["光强和频率影响混淆", "核反应质量数电荷数不守恒", "半衰期与初始质量无关这一点忘记"],
  },
  instruments: {
    title: "仪器与读数",
    chapter: "实验与表达",
    phase: "全程贯穿",
    lead: "掌握常用仪器的读数规则、量程选择和连接方法。",
    core: "实验题首先考你是否真的理解仪器功能，而不只是背过模板。",
    points: ["刻度尺估读", "游标卡尺和螺旋测微器", "打点计时器", "电压表电流表", "传感器与数字化实验"],
    warnings: ["有效数字位数错误", "量程选择不合理", "电表正负接线和内阻影响忽略"],
  },
  "data-processing": {
    title: "数据处理与图像",
    chapter: "实验与表达",
    phase: "全程贯穿",
    lead: "通过表格、图像、斜率和截距从实验数据中得到物理量。",
    core: "高考实验常把答案藏在图像里，斜率、截距、面积都可能是物理量。",
    points: ["数据表设计", "描点作图", "线性化处理", "斜率和截距意义", "有效数字与单位"],
    warnings: ["坐标轴物理量和单位漏写", "把曲线硬连成折线", "斜率单位不处理"],
  },
  "error-analysis": {
    title: "误差分析与改进",
    chapter: "实验与表达",
    phase: "全程贯穿",
    lead: "分析实验误差来源，提出合理改进方法。",
    core: "误差分析不是套话，要说清楚误差来自哪里、让结果偏大还是偏小。",
    points: ["系统误差", "偶然误差", "相对误差", "控制变量", "实验改进"],
    warnings: ["把错误当误差", "只写“多测几次取平均”但不解释", "偏大偏小判断没有依据"],
  },
  "answer-expression": {
    title: "规范表达",
    chapter: "实验与表达",
    phase: "全程贯穿",
    lead: "用清晰的步骤、符号和文字说明让阅卷人看懂思路。",
    core: "广东卷越来越重视推理论证。会做不等于会得满分，表达是最后一公里。",
    points: ["研究对象", "正方向和符号", "适用条件", "方程编号", "结果检验"],
    warnings: ["只列公式不说明对象", "符号前后不一致", "结果没有单位或方向"],
  },
};

const chapterExamNotes = {
  kinematics: {
    focus:
      "直线运动在广东高考里常作为力学主线的起点，重点看图像、纸带、追及与相遇、多阶段匀变速。设问常围绕“图像含义”“分段过程”“加速度计算”“位移判断”和“实验数据处理”展开。",
    bullets: [
      "图像题先看斜率、面积、交点、方向，再做计算。",
      "纸带实验常考加速度、速度和逐差法。",
      "追及相遇题要统一参考系，分阶段处理。",
      "多过程匀变速题要明确每一段的初末状态。",
    ],
  },
  "forces-balance": {
    focus:
      "力与平衡的命题重心是受力分析、平衡条件、摩擦力方向、临界条件与图像判断。广东卷常通过新情境考查学生是否能把“静止/匀速/临界”翻译成数学式。",
    bullets: [
      "先画受力图，再列平衡方程。",
      "摩擦力方向常是第一易错点。",
      "临界状态要转化为数学边界。",
      "斜面与连接体题常与牛顿定律联考。",
    ],
  },
  "newton-laws": {
    focus:
      "牛顿定律在广东卷中经常和斜面、传送带、连接体、临界与功能综合结合。考点不是单纯列 F=ma，而是系统、分方向、阶段化建模。",
    bullets: [
      "明确研究对象和系统边界。",
      "整体法与隔离法要灵活切换。",
      "传送带问题必须分段。",
      "临界状态常隐藏在文字条件里。",
    ],
  },
  "curved-motion": {
    focus:
      "曲线运动与天体部分通常结合平抛、圆周、万有引力、卫星和航天情境。命题很重视方向分解、向心力来源和圆周模型的条件判断。",
    bullets: [
      "平抛题固定拆成水平和竖直。",
      "圆周题先找圆心和半径。",
      "向心力不是新力，而是合力效果。",
      "天体题要明确轨道半径和中心天体。",
    ],
  },
  "work-power": {
    focus:
      "功与功率常和机车启动、传送、牵引、坡道和图像综合出现。广东卷喜欢把“过程速度变化”和“能量转化效率”放在一起考。",
    bullets: [
      "区分恒功率与恒牵引力。",
      "功率公式要看是否瞬时量。",
      "先判断正功负功，再处理能量变化。",
      "图像与功率问题常联动。",
    ],
  },
  "mechanical-energy": {
    focus:
      "机械能在广东卷中常和摩擦、弹簧、斜面、圆周与多过程综合题结合。重点在守恒条件、能量转化路径和分段表达。",
    bullets: [
      "先判断是否存在非保守力做功。",
      "机械能守恒要写出过程边界。",
      "动能定理适合跨过程速度求解。",
      "弹簧与重力势能转化常是压轴点。",
    ],
  },
  momentum: {
    focus:
      "动量专题命题重点是系统选择、正方向、碰撞、爆炸、反冲和动量能量联立。广东卷往往把动量放进较强综合背景下考查。",
    bullets: [
      "动量守恒前先选系统。",
      "碰撞题要先判断是否外力可忽略。",
      "速度正负号必须统一。",
      "与能量方程联立时要检查适用条件。",
    ],
  },
  "integrated-mechanics": {
    focus:
      "力学综合题通常把牛顿定律、能量、动量和圆周揉在一起。广东卷更看重过程建模、临界状态、图像辅助和规范表达。",
    bullets: [
      "分段分析每一阶段的主方法。",
      "先找模型，再写条件。",
      "复杂题不要一上来就硬算。",
      "最后检查单位、方向与边界条件。",
    ],
  },
  "electric-field": {
    focus:
      "电场常与带电粒子、图像、能量和电容器结合。广东卷喜欢考带电粒子在匀强电场和复合场中的轨迹与能量变化。",
    bullets: [
      "场强和电势要分清。",
      "电场力做功与电势差关系要熟。",
      "带电粒子常类比平抛。",
      "电容器题常与图像和能量联动。",
    ],
  },
  circuits: {
    focus:
      "恒定电流与实验是广东卷高频板块之一，重点包括电路分析、仪器连接、数据处理、误差分析和图像法求解。",
    bullets: [
      "先看电路图，再看实物图。",
      "电表内阻和滑变接法常考。",
      "图像斜率和截距常有物理意义。",
      "实验题要写清原理、步骤和误差。",
    ],
  },
  "magnetic-field": {
    focus:
      "磁场部分重在方向判断、洛伦兹力、安培力、圆周运动和速度选择器。广东卷常通过轨迹、图像和装置图来综合考查。",
    bullets: [
      "先定速度方向和磁场方向。",
      "左手定则与右手定则不要混。",
      "圆周半径和周期是常见结果。",
      "洛伦兹力不做功是重要性质。",
    ],
  },
  induction: {
    focus:
      "电磁感应在广东卷里常与图像、楞次定律、导体棒、滑轨、能量守恒和闭合回路结合，强调变化率和方向判断。",
    bullets: [
      "先判断磁通量是否变化。",
      "楞次定律要说清“阻碍变化”。",
      "导体棒题要兼顾受力与能量。",
      "图像题常考斜率和面积。",
    ],
  },
  "oscillation-wave": {
    focus:
      "振动与波侧重图像识别、波速关系、相位、干涉和传播方向。广东卷喜欢把波形图和振动图混着考。",
    bullets: [
      "先判断是波形图还是振动图。",
      "波速关系要牢记 v=λf。",
      "相位差是判断同相反相的关键。",
      "传播方向和振动方向要区分。",
    ],
  },
  optics: {
    focus:
      "光学常围绕折射、全反射、干涉和实验展开，重点是作图、临界角、条纹间距和光路分析。",
    bullets: [
      "先画法线和光路。",
      "临界角是全反射关键。",
      "干涉题强调条纹变化原因。",
      "光学实验常重视现象解释。",
    ],
  },
  thermal: {
    focus:
      "热学在广东卷中常以状态变化、图像判断和能量关系出现，尤其是气体实验、热力学第一定律和宏微观解释。",
    bullets: [
      "状态量和过程量要分清。",
      "p-V、p-T、V-T 图像都要会读。",
      "热力学第一定律要注意符号。",
      "定性题常考微观解释。"],
  },
  "modern-physics": {
    focus:
      "近代物理多为概念判断和基础计算，常见考点包括光电效应、原子核、半衰期和核反应方程。",
    bullets: [
      "光强、频率、能量的关系不能混。",
      "核方程先验质量数和电荷数守恒。",
      "半衰期题常出现图像或表格。",
      "结论判断要准，不要似是而非。",
    ],
  },
  instruments: {
    focus:
      "仪器与读数对应广东卷实验考查，常见为长度、电压、电流、时间、打点计时和读数估计。",
    bullets: [
      "量程、分度值、估读位要清楚。",
      "电表接线和量程选择常考。",
      "打点计时器与纸带实验是核心。",
      "读数要写单位且有效数字正确。",
    ],
  },
  "data-processing": {
    focus:
      "数据处理题经常要求学生根据表格或图像求参数、求斜率、读截距，广东卷非常看重把数学结果翻译成物理意义。",
    bullets: [
      "图像要写坐标轴名称和单位。",
      "斜率和截距常对应物理量。",
      "线性化思想很重要。",
      "表格数据要会组织。",
    ],
  },
  "error-analysis": {
    focus:
      "误差分析会考误差来源、偏大偏小判断和改进方案，属于广东卷实验题中的稳定得分项。",
    bullets: [
      "先区分系统误差与偶然误差。",
      "说明误差方向，不要空话。",
      "改进方案要对症。",
      "答案要结合实验原理。",
    ],
  },
  "answer-expression": {
    focus:
      "规范表达是广东卷高分层的重要门槛，常体现在过程书写、条件说明、方程组织和语言精确性上。",
    bullets: [
      "先对象后规律。",
      "方程前写条件。",
      "结果要有单位和方向。",
      "表达要能让阅卷人看懂。",
    ],
  },
};

const formulaBank = {
  kinematics: topicSeeds.kinematics.formulas,
  "forces-balance": [
    ["共点力平衡", "F<sub>合</sub> = 0", "研究对象处于静止或匀速直线运动状态。"],
    ["正交分解", "ΣF<sub>x</sub> = 0，ΣF<sub>y</sub> = 0", "适合多力平衡，先建坐标轴再分解。"],
    ["滑动摩擦力", "f = μN", "只适用于滑动摩擦力，方向与相对运动方向相反。"],
  ],
  "newton-laws": [
    ["牛顿第二定律", "F<sub>合</sub> = ma", "合外力决定加速度，方向相同。"],
    ["分方向列式", "ΣF<sub>x</sub> = ma<sub>x</sub>，ΣF<sub>y</sub> = ma<sub>y</sub>", "斜面、传送带、连接体常用。"],
    ["整体法", "F<sub>外</sub> = m<sub>总</sub>a", "系统内力不需要单独列入整体方程。"],
  ],
  "curved-motion": [
    ["平抛水平方向", "x = v<sub>0</sub>t", "水平方向不受力时做匀速直线运动。"],
    ["平抛竖直方向", "y = <span class=\"frac small\"><span>1</span><span>2</span></span>gt<sup>2</sup>", "竖直方向自由落体。"],
    ["向心力", "F<sub>向</sub> = m<span class=\"frac\"><span>v<sup>2</sup></span><span>r</span></span>", "向心力是合力效果，不是额外的新力。"],
    ["万有引力", "F = G<span class=\"frac\"><span>Mm</span><span>r<sup>2</sup></span></span>", "天体圆周运动常令万有引力提供向心力。"],
  ],
  "work-power": [
    ["恒力做功", "W = Fs cosθ", "力与位移夹角决定正功、负功或零功。"],
    ["平均功率", "P = <span class=\"frac\"><span>W</span><span>t</span></span>", "描述一段时间内做功快慢。"],
    ["瞬时功率", "P = Fv cosθ", "机车启动题常用 P = Fv。"],
  ],
  "mechanical-energy": [
    ["动能定理", "W<sub>合</sub> = ΔE<sub>k</sub>", "适合求速度变化，不必逐段求加速度。"],
    ["重力势能", "E<sub>p</sub> = mgh", "零势能面可自选，但前后一致。"],
    ["机械能守恒", "E<sub>k1</sub> + E<sub>p1</sub> = E<sub>k2</sub> + E<sub>p2</sub>", "只有重力或弹力做功时常用。"],
  ],
  momentum: [
    ["动量", "p = mv", "动量是矢量，列式前先规定正方向。"],
    ["冲量", "I = Ft", "恒力冲量等于力与作用时间乘积。"],
    ["动量守恒", "m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = m<sub>1</sub>v'<sub>1</sub> + m<sub>2</sub>v'<sub>2</sub>", "系统合外力为零或外力冲量可忽略时使用。"],
  ],
  "integrated-mechanics": [
    ["动力学主线", "F<sub>合</sub> = ma", "处理受力决定运动的阶段。"],
    ["能量主线", "W<sub>合</sub> = ΔE<sub>k</sub>", "处理跨过程速度、高度和位移。"],
    ["动量主线", "p<sub>前</sub> = p<sub>后</sub>", "碰撞、爆炸、反冲阶段常用。"],
  ],
  "electric-field": [
    ["电场强度", "E = <span class=\"frac\"><span>F</span><span>q</span></span>", "描述电场本身，方向为正电荷受力方向。"],
    ["电场力做功", "W = qU", "连接电势差与能量变化。"],
    ["匀强电场", "E = <span class=\"frac\"><span>U</span><span>d</span></span>", "平行板电容器中常用。"],
  ],
  circuits: [
    ["欧姆定律", "I = <span class=\"frac\"><span>U</span><span>R</span></span>", "适用于纯电阻元件。"],
    ["闭合电路欧姆定律", "I = <span class=\"frac\"><span>E</span><span>R+r</span></span>", "含电源内阻时使用。"],
    ["电功率", "P = UI = I<sup>2</sup>R = <span class=\"frac\"><span>U<sup>2</sup></span><span>R</span></span>", "根据已知量选择表达式。"],
  ],
  "magnetic-field": [
    ["安培力", "F = BIL", "导线与磁场垂直时取最大值。"],
    ["洛伦兹力", "F = qvB", "速度与磁场垂直时适用，洛伦兹力不做功。"],
    ["圆周半径", "r = <span class=\"frac\"><span>mv</span><span>qB</span></span>", "带电粒子在匀强磁场中做圆周运动。"],
  ],
  induction: [
    ["磁通量", "Φ = BS", "磁场与面积垂直时使用。"],
    ["法拉第定律", "E = n<span class=\"frac\"><span>ΔΦ</span><span>Δt</span></span>", "感应电动势大小由磁通量变化率决定。"],
    ["导体棒切割", "E = BLv", "B、L、v 两两垂直时适用。"],
  ],
  "oscillation-wave": [
    ["波速关系", "v = λf = <span class=\"frac\"><span>λ</span><span>T</span></span>", "机械波图像题最常用关系。"],
    ["周期频率", "f = <span class=\"frac\"><span>1</span><span>T</span></span>", "频率和周期互为倒数。"],
    ["相位差", "Δφ = 2π<span class=\"frac\"><span>Δx</span><span>λ</span></span>", "用于判断同相、反相或振动状态。"],
  ],
  optics: [
    ["折射定律", "n = <span class=\"frac\"><span>sin i</span><span>sin r</span></span>", "光从一种介质进入另一种介质时使用。"],
    ["临界角", "sin C = <span class=\"frac\"><span>1</span><span>n</span></span>", "从光密介质射向光疏介质才可能全反射。"],
    ["双缝干涉", "Δx = <span class=\"frac\"><span>L</span><span>d</span></span>λ", "条纹间距与波长成正比。"],
  ],
  thermal: [
    ["理想气体状态方程", "<span class=\"frac\"><span>pV</span><span>T</span></span> = C", "一定质量理想气体适用。"],
    ["热力学第一定律", "ΔU = Q + W", "注意 W 的符号约定：外界对气体做功为正。"],
    ["压强微观解释", "p 与分子平均动能和单位体积分子数有关", "常用于定性判断。"],
  ],
  "modern-physics": [
    ["光子能量", "E = hν", "频率决定单个光子能量。"],
    ["光电方程", "hν = W<sub>0</sub> + E<sub>k</sub>", "解释截止频率和最大初动能。"],
    ["半衰期", "N = N<sub>0</sub>(<span class=\"frac small\"><span>1</span><span>2</span></span>)<sup>t/T</sup>", "半衰期与初始质量无关。"],
  ],
  instruments: [
    ["读数原则", "测量值 = 准确值 + 估读值", "刻度类仪器通常需要估读。"],
    ["纸带速度", "v = <span class=\"frac\"><span>Δx</span><span>Δt</span></span>", "用相邻或相隔点位移求平均速度。"],
    ["纸带加速度", "a = <span class=\"frac\"><span>Δx</span><span>T<sup>2</sup></span></span>", "逐差法常用于匀变速纸带。"],
  ],
  "data-processing": [
    ["斜率", "k = <span class=\"frac\"><span>Δy</span><span>Δx</span></span>", "斜率常对应物理量。"],
    ["截距", "b = y-kx", "截距常对应初值或系统误差项。"],
    ["线性化", "把非线性关系转化为 y = kx + b", "便于用图像求参数。"],
  ],
  "error-analysis": [
    ["相对误差", "δ = <span class=\"frac\"><span>|测量值-真实值|</span><span>真实值</span></span>", "比较不同测量量误差大小。"],
    ["多次测量", "<span class=\"math-overline\">x</span> = <span class=\"frac\"><span>x<sub>1</sub>+x<sub>2</sub>+...+x<sub>n</sub></span><span>n</span></span>", "减小偶然误差。"],
    ["系统误差", "偏大或偏小具有方向性", "必须结合实验原理判断。"],
  ],
  "answer-expression": [
    ["对象", "明确研究对象", "如小球、滑块、系统、回路。"],
    ["条件", "说明适用条件", "如光滑、匀强、闭合回路、外力可忽略。"],
    ["规律", "列出依据方程", "必要时写出方向和符号约定。"],
  ],
};

for (const [id, formulas] of Object.entries(formulaBank)) {
  if (topicSeeds[id]) topicSeeds[id].formulas ||= formulas;
}

const chapterMethodMap = {
  "运动与相互作用": "对象受力、运动过程、图像信息与方程关系要放在同一张草图里处理。",
  "能量与动量": "先判断守恒条件，再选择功能关系、动量观点或两者联立，避免盲目套单一公式。",
  "电磁学主干": "先明确场、电路或磁场的研究对象，再把方向、符号、能量转化和图像斜率对应起来。",
  "选考与拓展": "重在概念辨析、图像读取和定性推理，计算量不大但容易因适用条件失分。",
  "实验与综合能力": "围绕原理、器材、操作、数据处理、误差分析和表达规范形成闭环。",
};

function pick(list, index, fallback) {
  return list[index] || fallback;
}

function buildCoreTexts(seed, points, warnings, examNote) {
  const chapterMethod = chapterMethodMap[seed.chapter] || "先还原物理过程，再选择合适模型，并用规范语言写清依据。";
  const focus = examNote.focus || seed.core || seed.lead;
  return [
    `教材主线：${pick(points, 0, seed.core || `${seed.title}的基本概念与适用范围`)}。教学中要让学生用自己的话说清“研究对象、物理量含义、成立条件”，再进入公式和题型。`,
    `规律关系：${pick(points, 1, `${seed.title}的关键物理量关系`)}。本专题不能只背结论，要追问每个量的方向、单位、正负号和适用边界，尤其要把易混概念放在同一道题中比较。`,
    `图像与实验：${pick(points, 2, `${seed.title}的典型图像、实验数据或过程条件`)}。广东卷近年常把知识点藏在图像、表格、装置图或真实任务中，课堂训练要固定加入“读图像、取斜率、看面积、找交点、判趋势”。`,
    `高考综合：${focus}${warnings.length ? ` 易错点集中在：${warnings.join("；")}。` : ""} 解题流程建议采用“审情境-定对象-列条件-选规律-验结果”，其中${chapterMethod}`,
  ];
}

function buildExtensions(seed, points, warnings, examNote) {
  const chapterMethod = chapterMethodMap[seed.chapter] || "把概念、模型、图像和表达连成一条线。";
  return [
    [
      "高考新情境",
      `把${seed.title}放进交通、航天、生活用电、实验探究、材料科技或体育运动等情境中。学生要从长题干中提取对象、初末状态、约束条件和目标量，避免被陌生背景干扰。`,
    ],
    [
      "跨模块串联",
      `${seed.title}可与${seed.chapter === "电磁学主干" ? "能量守恒、动量观点、图像分析和实验数据处理" : "力学模型、能量观点、电磁情境和实验评价"}串联。训练时可设计一问基础概念、一问模型计算、一问误差或开放表达。`,
    ],
    [
      "图像实验",
      `围绕${pick(points, 2, "图像、表格或装置")}设计课堂板书：图像轴含义、斜率或面积的物理意义、关键点对应的状态、数据处理方法。${chapterMethod}`,
    ],
    [
      "新定义入口",
      `近年高考常给出新定义、新装置或新图像，本质仍回到${seed.core || seed.title}。遇到新量时先写单位和定义式，再把它翻译成已学物理量；${warnings.length ? `重点提醒：${warnings.join("；")}。` : "注意不要把题目给出的新条件误当作教材外难点。"}`,
    ],
  ];
}

function buildPractice(seed, points, warnings, examNote) {
  return [
    `题型1：近五年关联考法梳理。围绕${seed.title}的${pick(points, 0, "核心概念")}设置选择或填空，要求学生写出判断依据，训练概念边界、单位、方向和适用条件。`,
    `题型2：原创改编计算题。以广东卷常见的真实情境或图像表格呈现${pick(points, 1, "关键规律")}，先问模型识别，再问定量计算，最后追问结果是否合理。`,
    `题型3：综合迁移题。把${seed.title}与${pick(points, 2, "实验、图像或综合过程")}结合，加入一处易错点${warnings.length ? `（如${warnings[0]}）` : ""}，训练学生按步骤表达而不是只写答案。`,
  ];
}

function buildTeach(seed, warnings, examNote) {
  return [
    `课堂导入用一个广东高考风格情境引出${seed.title}，先让学生圈出研究对象、已知条件和待求量，再进入概念讲解。`,
    "新课讲授按“教材原话-物理图像-公式条件-典型例题”四步推进，每一步都要求学生说清物理意义。",
    "练习分层安排：基础概念题、图像或实验题、综合迁移题各一组；讲评时按审题、建模、列式、计算、表达五类归因。",
    warnings.length
      ? `错题订正重点：${warnings.join("；")}。要求学生补写错误原因、正确模型和下一次识别信号。`
      : "错题订正重点放在概念边界、公式条件、图像意义和规范表达四类问题上。",
  ];
}

function buildTrainings(seed, examNote) {
  const bullets = examNote.bullets || [];
  return [
    [
      "2021-2022",
      `${seed.title}基础与实验关联`,
      `${bullets[0] || `围绕${seed.title}的教材概念和基础模型进行训练`}。建议改编为一道选择题或填空题，重点看学生是否能写出依据。`,
    ],
    [
      "2023-2024",
      `${seed.title}情境化与图像分析`,
      `${bullets[1] || "加入真实情境、图像或表格信息"}。课堂训练可要求学生先标注图像轴和关键点，再列方程。`,
    ],
    [
      "2025备考",
      `${seed.title}综合迁移与表达`,
      `${bullets[2] || "把本专题放入综合题的一个步骤中考查"}。本网页保留公开来源链接和原创改编训练，不直接搬运整卷原题。`,
    ],
  ];
}

const visualCaptionBank = {
  kinematics: "左图用 x-t 图像强调斜率表示速度，右图用 v-t 图像强调斜率表示加速度、面积表示位移。",
  "forces-balance": "图中同时呈现斜面受力图和力的分解关系，训练学生先画受力图再列平衡方程。",
  "newton-laws": "小车模型把合外力、加速度和 F-a 图像对应起来，突出牛顿第二定律的因果关系。",
  "curved-motion": "平抛轨迹和圆周模型并列展示，强调曲线运动要分解方向或寻找圆心半径。",
  "work-power": "用力与位移夹角图说明功的正负，用 P-v 图说明功率、牵引力和速度的关系。",
  "mechanical-energy": "用轨道和能量柱展示动能、势能之间的转化，突出机械能守恒的条件。",
  momentum: "碰撞前后状态图和冲量图像并列，强调系统、正方向和动量变化。",
  "integrated-mechanics": "用多阶段流程图把动力学、能量和动量三种方法放在同一解题框架中。",
  "electric-field": "平行板电场、场线和等势面共同呈现，帮助区分场强方向、受力方向和电势变化。",
  circuits: "电路图与 U-I 图像并列，突出电路等效、斜率截距和实验数据处理。",
  "magnetic-field": "带电粒子圆周轨迹和通电导线受力模型并列，强调方向判断和几何半径。",
  induction: "导体棒切割磁感线和磁通量变化图并列，突出感应电动势来自磁通量变化率。",
  "oscillation-wave": "弹簧振子、振动图像和波形图并列，训练区分时间图像与空间图像。",
  optics: "折射光路和双缝干涉条纹并列，强调法线、角度、光程差和条纹间距。",
  thermal: "分子模型与 p-V 图像并列，帮助学生把微观解释和宏观状态变化对应起来。",
  "modern-physics": "光电效应装置、能级跃迁和衰变曲线共同呈现，突出近代物理的图像化记忆。",
  instruments: "仪器读数、纸带和电表连接并列，突出实验题的读数、量程和数据来源。",
  "data-processing": "散点图、拟合线、斜率和截距一起呈现，强调数据处理不是机械连线。",
  "error-analysis": "随机误差与系统误差对比展示，要求学生说清误差来源、方向和改进方案。",
  "answer-expression": "用“对象-条件-规律-结论”的答题流程图规范综合题表达。",
};

function makeTopic(id, seed) {
  const points = seed.points || [];
  const warnings = seed.warnings || [];
  const examNote = chapterExamNotes[id] || {};
  const coreTexts = seed.coreTexts || buildCoreTexts(seed, points, warnings, examNote);
  const coreTitles = seed.coreTitles || ["概念边界", "规律关系", "模型图像", "综合应用"];
  const extensions = seed.extensions || buildExtensions(seed, points, warnings, examNote);
  const practice = seed.practice || buildPractice(seed, points, warnings, examNote);
  const teach = seed.teach || buildTeach(seed, warnings, examNote);
  const trainings = seed.trainings || buildTrainings(seed, examNote);

  return {
    title: seed.title,
    lead: seed.lead,
    nav: navTemplate,
    fields: {
      overview: `${seed.title}属于“${seed.chapter}”模块，是${seed.phase}阶段的重要内容。${seed.lead} 学习时要先抓核心概念，再整理典型模型，最后通过图像、实验或综合题完成迁移。`,
      gaokaoFocus:
        seed.gaokao ||
        examNote.focus ||
        `广东高考对${seed.title}的考查通常不会停留在单一概念，而是放在真实情境、图像表格、实验装置或多过程综合中。备考时要关注教材原理、模型边界、信息提取和规范表达。`,
      gaokaoBullets: (seed.gaokaoBullets || examNote.bullets || [
        `本专题在广东卷中常与真实情境、实验和图像结合。`,
        "考查重点通常是模型识别、过程分段和规范表达。",
        "如果没有独立命题，也常隐藏在综合题的一个步骤里。",
      ]).map((item) => `• ${item}`).join("<br>"),
      displacement: coreTexts[0],
      velocity: coreTexts[1],
      xt: coreTexts[2],
      vt: coreTexts[3],
      formulaBox: renderFormulaLines(seed.formulas || genericFormulaList(seed, points)),
      formulaNote: seed.formulaNote || `公式区保留“名称-标准形式-使用条件”三列，便于课堂直接修改。讲${seed.title}时要特别强调公式不是孤立记忆：先判断对象和条件，再代入物理量；需要方向或正负号时，先约定正方向。`,
      visualCaption:
        seed.graphHint ||
        visualCaptionBank[id] ||
        "本专题图像用于把教材图、过程图、装置图或高考情境图统一到物理模型中，建议把斜率、面积、方向和物理意义写清楚。",
      chase: extensions[0][1],
      graph: extensions[1][1],
      experiment: extensions[2][1],
      migration: extensions[3][1],
      practice1: practice[0],
      practice2: practice[1],
      practice3: practice[2],
      teach1: teach[0],
      teach2: teach[1],
      teach3: teach[2],
      teach4: teach[3],
    },
    headings: {
      core: coreTitles,
      extensions: extensions.map(([title]) => title),
    },
    visual: seed.visual || id,
    trainings,
  };
}

function genericFormulaList(seed, points) {
  const modelLines = [seed.core, ...points].filter(Boolean).slice(0, 5);
  return modelLines.map((line, index) => [`模型 ${index + 1}`, line, "可在编辑模式中改写为标准公式、条件和说明。"]);
}

function renderFormulaLines(lines) {
  return lines
    .map(
      ([name, math, desc]) => `
        <div class="formula-line">
          <span class="formula-name">${name}</span>
          <span class="formula-math">${formatMath(math)}</span>
          <span class="formula-desc">${desc}</span>
        </div>
      `
    )
    .join("");
}

function formatMath(text) {
  if (text.includes("<")) return text;
  return text
    .replaceAll("\\bar v", "<span class=\"math-overline\">v</span>")
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "<span class=\"frac\"><span>$1</span><span>$2</span></span>")
    .replaceAll("\\Delta", "Δ")
    .replaceAll("_0", "<sub>0</sub>")
    .replaceAll("^2", "<sup>2</sup>");
}

function renderTrainingCards(items) {
  return items
    .map(
      ([year, title, text]) => `
        <article class="training-card">
          <span>${year}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderVisual(type) {
  const visuals = {
    kinematics: `
      <svg viewBox="0 0 860 300" role="img" aria-label="直线运动 x-t 与 v-t 图像示意">
        <rect width="860" height="300" fill="#ffffff"></rect>
        <g transform="translate(48,36)">
          <text x="145" y="0" font-size="18" fill="#17324d" font-weight="700">x-t 图像：斜率表示速度</text>
          <line x1="34" y1="206" x2="314" y2="206" stroke="#17324d" stroke-width="2"></line>
          <line x1="34" y1="206" x2="34" y2="28" stroke="#17324d" stroke-width="2"></line>
          <polyline points="34,188 98,154 162,120 226,86 290,52" fill="none" stroke="#1f7a74" stroke-width="5" stroke-linecap="round"></polyline>
          <text x="304" y="228" font-size="15" fill="#5f6b7a">t</text>
          <text x="14" y="34" font-size="15" fill="#5f6b7a">x</text>
          <text x="96" y="174" font-size="14" fill="#1f7a74">斜率越大，速度越大</text>
        </g>
        <g transform="translate(470,36)">
          <text x="145" y="0" font-size="18" fill="#17324d" font-weight="700">v-t 图像：面积表示位移</text>
          <line x1="34" y1="206" x2="314" y2="206" stroke="#17324d" stroke-width="2"></line>
          <line x1="34" y1="206" x2="34" y2="28" stroke="#17324d" stroke-width="2"></line>
          <polygon points="34,206 34,166 122,118 226,118 290,206" fill="#fff8ea" stroke="#b7791f" stroke-width="2"></polygon>
          <polyline points="34,166 122,118 226,118 290,206" fill="none" stroke="#245e8a" stroke-width="5" stroke-linecap="round"></polyline>
          <text x="304" y="228" font-size="15" fill="#5f6b7a">t</text>
          <text x="14" y="34" font-size="15" fill="#5f6b7a">v</text>
          <text x="112" y="174" font-size="14" fill="#b7791f">面积 = 位移</text>
        </g>
      </svg>
    `,
    "forces-balance": `
      <svg viewBox="0 0 860 280" role="img" aria-label="力与平衡示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="32" width="352" height="216" rx="10" fill="#fbfdff" stroke="#c7ddeb"></rect>
        <polygon points="92,210 242,110 288,210" fill="#eef4fb" stroke="#9eb7cf" stroke-width="2"></polygon>
        <rect x="166" y="84" width="44" height="44" rx="6" fill="#fff8ea" stroke="#b7791f"></rect>
        <line x1="188" y1="106" x2="188" y2="52" stroke="#d94f45" stroke-width="4"></line>
        <polygon points="188,44 180,60 196,60" fill="#d94f45"></polygon>
        <line x1="188" y1="106" x2="248" y2="150" stroke="#245e8a" stroke-width="4"></line>
        <polygon points="256,156 239,153 248,142" fill="#245e8a"></polygon>
        <line x1="188" y1="106" x2="128" y2="150" stroke="#1f7a74" stroke-width="4"></line>
        <polygon points="120,156 137,142 128,153" fill="#1f7a74"></polygon>
        <text x="120" y="26" font-size="18" fill="#17324d" font-weight="700">斜面受力图</text>
        <text x="84" y="240" font-size="14" fill="#5f6b7a">重力</text>
        <text x="254" y="168" font-size="14" fill="#5f6b7a">弹力</text>
        <text x="78" y="158" font-size="14" fill="#5f6b7a">摩擦力</text>
        <rect x="458" y="32" width="362" height="216" rx="10" fill="#f9fcfb" stroke="#c7ddeb"></rect>
        <line x1="500" y1="210" x2="778" y2="210" stroke="#17324d" stroke-width="2"></line>
        <line x1="500" y1="210" x2="500" y2="46" stroke="#17324d" stroke-width="2"></line>
        <line x1="540" y1="170" x2="660" y2="118" stroke="#1f7a74" stroke-width="4"></line>
        <line x1="540" y1="170" x2="540" y2="94" stroke="#d94f45" stroke-width="4"></line>
        <line x1="540" y1="170" x2="662" y2="170" stroke="#b7791f" stroke-width="4"></line>
        <text x="544" y="28" font-size="18" fill="#17324d" font-weight="700">力的分解</text>
        <text x="668" y="122" font-size="14" fill="#5f6b7a">沿斜面</text>
        <text x="548" y="88" font-size="14" fill="#5f6b7a">法向</text>
        <text x="670" y="174" font-size="14" fill="#5f6b7a">重力分量</text>
      </svg>
    `,
    "newton-laws": `
      <svg viewBox="0 0 860 280" role="img" aria-label="牛顿第二定律示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="40" width="220" height="186" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <rect x="90" y="132" width="98" height="42" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="188" y1="153" x2="246" y2="153" stroke="#245e8a" stroke-width="4"></line>
        <polygon points="254,153 238,145 238,161" fill="#245e8a"></polygon>
        <text x="108" y="118" font-size="18" fill="#17324d" font-weight="700">受力 - 加速度</text>
        <text x="101" y="196" font-size="14" fill="#5f6b7a">合外力决定加速度</text>
        <rect x="302" y="40" width="220" height="186" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <line x1="334" y1="188" x2="490" y2="104" stroke="#1f7a74" stroke-width="5"></line>
        <circle cx="334" cy="188" r="8" fill="#1f7a74"></circle>
        <circle cx="490" cy="104" r="8" fill="#1f7a74"></circle>
        <text x="326" y="68" font-size="18" fill="#17324d" font-weight="700">F-a 图像</text>
        <text x="332" y="214" font-size="14" fill="#5f6b7a">斜率与质量相关</text>
        <rect x="568" y="40" width="256" height="186" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="602" y="72" font-size="18" fill="#17324d" font-weight="700">连接体</text>
        <rect x="610" y="114" width="58" height="36" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <rect x="696" y="114" width="58" height="36" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="668" y1="132" x2="696" y2="132" stroke="#d94f45" stroke-width="4"></line>
        <text x="604" y="170" font-size="14" fill="#5f6b7a">整体法与隔离法配合</text>
      </svg>
    `,
    "curved-motion": `
      <svg viewBox="0 0 860 280" role="img" aria-label="平抛与圆周运动示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="40" width="356" height="186" rx="10" fill="#fbfdff" stroke="#c7ddeb"></rect>
        <text x="84" y="70" font-size="18" fill="#17324d" font-weight="700">平抛分解</text>
        <circle cx="110" cy="110" r="10" fill="#1f7a74"></circle>
        <path d="M110 110 C150 124, 185 150, 220 194" fill="none" stroke="#245e8a" stroke-width="4"></path>
        <line x1="110" y1="110" x2="198" y2="110" stroke="#d94f45" stroke-width="4"></line>
        <line x1="110" y1="110" x2="110" y2="184" stroke="#b7791f" stroke-width="4"></line>
        <text x="204" y="114" font-size="13" fill="#5f6b7a">水平匀速</text>
        <text x="115" y="200" font-size="13" fill="#5f6b7a">竖直自由落体</text>
        <rect x="440" y="40" width="384" height="186" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="486" y="70" font-size="18" fill="#17324d" font-weight="700">圆周与天体</text>
        <circle cx="596" cy="132" r="50" fill="none" stroke="#9eb7cf" stroke-width="2"></circle>
        <circle cx="596" cy="132" r="12" fill="#1f7a74"></circle>
        <line x1="596" y1="132" x2="646" y2="132" stroke="#245e8a" stroke-width="4"></line>
        <circle cx="700" cy="98" r="20" fill="#fff8ea" stroke="#b7791f"></circle>
        <path d="M700 98 A104 104 0 0 0 652 136" fill="none" stroke="#245e8a" stroke-width="2" stroke-dasharray="5 5"></path>
        <text x="664" y="176" font-size="13" fill="#5f6b7a">向心力指向圆心</text>
      </svg>
    `,
    "work-power": `
      <svg viewBox="0 0 860 280" role="img" aria-label="功与功率示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="250" height="200" rx="10" fill="#fbfdff" stroke="#c7ddeb"></rect>
        <text x="70" y="66" font-size="18" fill="#17324d" font-weight="700">功：力与位移</text>
        <line x1="70" y1="170" x2="196" y2="170" stroke="#245e8a" stroke-width="4"></line>
        <line x1="70" y1="170" x2="150" y2="110" stroke="#d94f45" stroke-width="4"></line>
        <circle cx="196" cy="170" r="10" fill="#1f7a74"></circle>
        <text x="82" y="194" font-size="13" fill="#5f6b7a">夹角决定正负功</text>
        <rect x="318" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">P-v 关系</text>
        <polyline points="350,190 390,166 430,142 470,112 510,84" fill="none" stroke="#245e8a" stroke-width="4"></polyline>
        <line x1="346" y1="190" x2="512" y2="190" stroke="#17324d" stroke-width="2"></line>
        <line x1="346" y1="190" x2="346" y2="68" stroke="#17324d" stroke-width="2"></line>
        <text x="480" y="206" font-size="13" fill="#5f6b7a">v</text>
        <text x="328" y="78" font-size="13" fill="#5f6b7a">P</text>
        <rect x="566" y="36" width="258" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="598" y="66" font-size="18" fill="#17324d" font-weight="700">机车模型</text>
        <line x1="596" y1="186" x2="762" y2="186" stroke="#17324d" stroke-width="2"></line>
        <rect x="618" y="140" width="84" height="36" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <circle cx="636" cy="186" r="10" fill="#17324d"></circle>
        <circle cx="682" cy="186" r="10" fill="#17324d"></circle>
        <path d="M716 168 C740 150, 760 142, 778 132" fill="none" stroke="#1f7a74" stroke-width="4"></path>
        <text x="606" y="96" font-size="13" fill="#5f6b7a">恒功率 / 恒牵引力</text>
      </svg>
    `,
    "mechanical-energy": `
      <svg viewBox="0 0 860 280" role="img" aria-label="机械能守恒示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="352" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="74" y="66" font-size="18" fill="#17324d" font-weight="700">轨道与高度</text>
        <path d="M86 182 C146 124, 214 104, 300 86" fill="none" stroke="#245e8a" stroke-width="4"></path>
        <circle cx="98" cy="172" r="16" fill="#1f7a74"></circle>
        <circle cx="304" cy="84" r="16" fill="#b7791f"></circle>
        <line x1="304" y1="84" x2="304" y2="184" stroke="#d94f45" stroke-width="4"></line>
        <text x="312" y="136" font-size="13" fill="#5f6b7a">重力势能变化</text>
        <rect x="434" y="36" width="384" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="472" y="66" font-size="18" fill="#17324d" font-weight="700">能量柱</text>
        <rect x="500" y="92" width="70" height="96" fill="#1f7a74"></rect>
        <rect x="590" y="122" width="70" height="66" fill="#245e8a"></rect>
        <rect x="680" y="146" width="70" height="42" fill="#b7791f"></rect>
        <text x="494" y="208" font-size="13" fill="#5f6b7a">动能</text>
        <text x="586" y="208" font-size="13" fill="#5f6b7a">势能</text>
        <text x="672" y="208" font-size="13" fill="#5f6b7a">损失</text>
      </svg>
    `,
    momentum: `
      <svg viewBox="0 0 860 280" role="img" aria-label="动量与碰撞示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="256" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="70" y="66" font-size="18" fill="#17324d" font-weight="700">碰撞前后</text>
        <circle cx="108" cy="142" r="22" fill="#1f7a74"></circle>
        <circle cx="210" cy="142" r="22" fill="#b7791f"></circle>
        <line x1="130" y1="142" x2="186" y2="142" stroke="#245e8a" stroke-width="4"></line>
        <polygon points="194,142 178,134 178,150" fill="#245e8a"></polygon>
        <text x="86" y="180" font-size="13" fill="#5f6b7a">动量守恒</text>
        <rect x="320" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="354" y="66" font-size="18" fill="#17324d" font-weight="700">冲量图像</text>
        <rect x="346" y="112" width="160" height="56" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="346" y1="140" x2="506" y2="140" stroke="#245e8a" stroke-width="4"></line>
        <text x="366" y="132" font-size="13" fill="#5f6b7a">F-t 面积 = I</text>
        <rect x="572" y="36" width="252" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="606" y="66" font-size="18" fill="#17324d" font-weight="700">系统示意</text>
        <rect x="610" y="118" width="72" height="34" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <rect x="700" y="118" width="72" height="34" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="682" y1="135" x2="700" y2="135" stroke="#d94f45" stroke-width="4"></line>
        <text x="610" y="180" font-size="13" fill="#5f6b7a">正方向先定</text>
      </svg>
    `,
    "integrated-mechanics": `
      <svg viewBox="0 0 860 280" role="img" aria-label="力学综合模型示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="786" height="200" rx="10" fill="#fbfdff" stroke="#c7ddeb"></rect>
        <text x="74" y="66" font-size="18" fill="#17324d" font-weight="700">力学综合流程</text>
        <rect x="80" y="108" width="120" height="48" rx="8" fill="#edf5fb" stroke="#9eb7cf"></rect>
        <text x="110" y="138" font-size="14" fill="#17324d">受力分析</text>
        <rect x="236" y="108" width="120" height="48" rx="8" fill="#eef8f7" stroke="#9eb7cf"></rect>
        <text x="270" y="138" font-size="14" fill="#17324d">分段建模</text>
        <rect x="392" y="108" width="120" height="48" rx="8" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="426" y="138" font-size="14" fill="#17324d">能量</text>
        <rect x="548" y="108" width="120" height="48" rx="8" fill="#f6fbfa" stroke="#9eb7cf"></rect>
        <text x="582" y="138" font-size="14" fill="#17324d">动量</text>
        <rect x="704" y="108" width="84" height="48" rx="8" fill="#f9f3e8" stroke="#d9c08e"></rect>
        <text x="722" y="138" font-size="14" fill="#17324d">结论</text>
        <line x1="200" y1="132" x2="236" y2="132" stroke="#245e8a" stroke-width="4"></line>
        <line x1="356" y1="132" x2="392" y2="132" stroke="#245e8a" stroke-width="4"></line>
        <line x1="512" y1="132" x2="548" y2="132" stroke="#245e8a" stroke-width="4"></line>
        <line x1="668" y1="132" x2="704" y2="132" stroke="#245e8a" stroke-width="4"></line>
        <text x="88" y="182" font-size="13" fill="#5f6b7a">按阶段推进，不要一口气算到底</text>
      </svg>
    `,
    "electric-field": `
      <svg viewBox="0 0 860 280" role="img" aria-label="电场示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="250" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">平行板电场</text>
        <rect x="86" y="100" width="28" height="96" fill="#245e8a"></rect>
        <rect x="210" y="100" width="28" height="96" fill="#245e8a"></rect>
        <line x1="130" y1="118" x2="190" y2="118" stroke="#d94f45" stroke-width="3"></line>
        <line x1="130" y1="146" x2="190" y2="146" stroke="#d94f45" stroke-width="3"></line>
        <line x1="130" y1="174" x2="190" y2="174" stroke="#d94f45" stroke-width="3"></line>
        <text x="96" y="218" font-size="13" fill="#5f6b7a">场强方向统一</text>
        <rect x="318" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="350" y="66" font-size="18" fill="#17324d" font-weight="700">等势面</text>
        <circle cx="390" cy="146" r="18" fill="#1f7a74"></circle>
        <circle cx="448" cy="146" r="18" fill="#fff" stroke="#9eb7cf"></circle>
        <circle cx="506" cy="146" r="18" fill="#1f7a74"></circle>
        <text x="346" y="196" font-size="13" fill="#5f6b7a">电势高低与电势能变化</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="610" y="66" font-size="18" fill="#17324d" font-weight="700">粒子偏转</text>
        <path d="M620 168 C660 150, 702 126, 760 92" fill="none" stroke="#245e8a" stroke-width="4"></path>
        <circle cx="620" cy="168" r="10" fill="#b7791f"></circle>
        <text x="610" y="198" font-size="13" fill="#5f6b7a">类平抛模型</text>
      </svg>
    `,
    circuits: `
      <svg viewBox="0 0 860 280" role="img" aria-label="电路与实验示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="252" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">电路连接</text>
        <circle cx="94" cy="112" r="10" fill="#245e8a"></circle>
        <circle cx="202" cy="112" r="10" fill="#245e8a"></circle>
        <rect x="118" y="92" width="60" height="40" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="94" y1="112" x2="118" y2="112" stroke="#245e8a" stroke-width="4"></line>
        <line x1="178" y1="112" x2="202" y2="112" stroke="#245e8a" stroke-width="4"></line>
        <text x="84" y="178" font-size="13" fill="#5f6b7a">等效电路与实物图对应</text>
        <rect x="316" y="36" width="240" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">U-I 图像</text>
        <line x1="344" y1="194" x2="530" y2="194" stroke="#17324d" stroke-width="2"></line>
        <line x1="344" y1="194" x2="344" y2="78" stroke="#17324d" stroke-width="2"></line>
        <polyline points="344,188 398,156 452,124 506,92" fill="none" stroke="#245e8a" stroke-width="4"></polyline>
        <text x="522" y="210" font-size="13" fill="#5f6b7a">I</text>
        <text x="330" y="84" font-size="13" fill="#5f6b7a">U</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="610" y="66" font-size="18" fill="#17324d" font-weight="700">实验数据</text>
        <rect x="604" y="96" width="160" height="88" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="604" y1="132" x2="764" y2="132" stroke="#245e8a" stroke-width="2"></line>
        <line x1="606" y1="150" x2="760" y2="112" stroke="#1f7a74" stroke-width="3"></line>
      </svg>
    `,
    "magnetic-field": `
      <svg viewBox="0 0 860 280" role="img" aria-label="磁场与洛伦兹力示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="260" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">安培力</text>
        <rect x="86" y="110" width="120" height="34" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="146" y1="110" x2="146" y2="74" stroke="#d94f45" stroke-width="4"></line>
        <line x1="146" y1="144" x2="210" y2="144" stroke="#245e8a" stroke-width="4"></line>
        <text x="94" y="190" font-size="13" fill="#5f6b7a">方向用左手定则</text>
        <rect x="320" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">洛伦兹力</text>
        <circle cx="428" cy="132" r="18" fill="#1f7a74"></circle>
        <line x1="428" y1="132" x2="486" y2="132" stroke="#245e8a" stroke-width="4"></line>
        <line x1="428" y1="132" x2="428" y2="76" stroke="#d94f45" stroke-width="4"></line>
        <text x="344" y="196" font-size="13" fill="#5f6b7a">力垂直于速度和磁场</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="612" y="66" font-size="18" fill="#17324d" font-weight="700">圆周轨迹</text>
        <circle cx="700" cy="134" r="58" fill="none" stroke="#9eb7cf" stroke-width="2"></circle>
        <circle cx="700" cy="134" r="10" fill="#1f7a74"></circle>
        <path d="M700 134 L758 134" stroke="#245e8a" stroke-width="4"></path>
        <text x="610" y="198" font-size="13" fill="#5f6b7a">r = mv / (qB)</text>
      </svg>
    `,
    induction: `
      <svg viewBox="0 0 860 280" role="img" aria-label="电磁感应示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="252" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">磁通量变化</text>
        <rect x="92" y="98" width="140" height="90" fill="none" stroke="#9eb7cf" stroke-width="2"></rect>
        <line x1="130" y1="116" x2="130" y2="170" stroke="#245e8a" stroke-width="4"></line>
        <line x1="162" y1="116" x2="162" y2="170" stroke="#245e8a" stroke-width="4"></line>
        <line x1="194" y1="116" x2="194" y2="170" stroke="#245e8a" stroke-width="4"></line>
        <path d="M108 142 L220 142" stroke="#d94f45" stroke-width="4"></path>
        <text x="86" y="198" font-size="13" fill="#5f6b7a">磁通量是否变化</text>
        <rect x="320" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">导体棒切割</text>
        <line x1="350" y1="174" x2="484" y2="110" stroke="#245e8a" stroke-width="5"></line>
        <rect x="414" y="102" width="72" height="28" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="414" y1="116" x2="350" y2="116" stroke="#1f7a74" stroke-width="4"></line>
        <text x="344" y="196" font-size="13" fill="#5f6b7a">E = BLv</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="612" y="66" font-size="18" fill="#17324d" font-weight="700">能量转化</text>
        <circle cx="668" cy="140" r="20" fill="#1f7a74"></circle>
        <circle cx="744" cy="140" r="20" fill="#b7791f"></circle>
        <line x1="688" y1="140" x2="724" y2="140" stroke="#245e8a" stroke-width="4"></line>
        <text x="610" y="196" font-size="13" fill="#5f6b7a">机械能与电能相互转化</text>
      </svg>
    `,
    "oscillation-wave": `
      <svg viewBox="0 0 860 280" role="img" aria-label="机械振动与机械波示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="248" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">振动图像</text>
        <path d="M70 146 C100 104, 138 104, 168 146 C198 188, 236 188, 266 146" fill="none" stroke="#245e8a" stroke-width="4"></path>
        <line x1="70" y1="146" x2="266" y2="146" stroke="#17324d" stroke-width="2"></line>
        <text x="76" y="198" font-size="13" fill="#5f6b7a">位移-时间关系</text>
        <rect x="316" y="36" width="228" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">波形图</text>
        <path d="M348 144 C378 104, 416 104, 446 144 C476 184, 514 184, 544 144" fill="none" stroke="#1f7a74" stroke-width="4"></path>
        <line x1="348" y1="176" x2="544" y2="176" stroke="#17324d" stroke-width="2"></line>
        <text x="350" y="198" font-size="13" fill="#5f6b7a">某时刻空间分布</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="612" y="66" font-size="18" fill="#17324d" font-weight="700">相位与传播</text>
        <circle cx="660" cy="132" r="18" fill="#1f7a74"></circle>
        <circle cx="714" cy="132" r="18" fill="#fff" stroke="#9eb7cf"></circle>
        <circle cx="768" cy="132" r="18" fill="#1f7a74"></circle>
        <path d="M660 132 L768 132" stroke="#245e8a" stroke-width="4" stroke-dasharray="6 5"></path>
        <text x="608" y="196" font-size="13" fill="#5f6b7a">波长、频率、波速</text>
      </svg>
    `,
    optics: `
      <svg viewBox="0 0 860 280" role="img" aria-label="光学示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="248" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">折射光路</text>
        <line x1="92" y1="180" x2="210" y2="108" stroke="#245e8a" stroke-width="4"></line>
        <line x1="210" y1="108" x2="250" y2="160" stroke="#1f7a74" stroke-width="4"></line>
        <line x1="210" y1="108" x2="210" y2="200" stroke="#17324d" stroke-width="2"></line>
        <text x="214" y="144" font-size="13" fill="#5f6b7a">法线</text>
        <rect x="316" y="36" width="228" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">全反射</text>
        <path d="M344 184 L494 116" stroke="#245e8a" stroke-width="4"></path>
        <path d="M494 116 L530 84" stroke="#1f7a74" stroke-width="4"></path>
        <path d="M494 116 L530 150" stroke="#d94f45" stroke-width="4"></path>
        <text x="338" y="198" font-size="13" fill="#5f6b7a">临界角</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="612" y="66" font-size="18" fill="#17324d" font-weight="700">双缝干涉</text>
        <rect x="628" y="96" width="120" height="64" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="628" y1="128" x2="748" y2="128" stroke="#245e8a" stroke-width="2"></line>
        <line x1="644" y1="96" x2="644" y2="160" stroke="#1f7a74" stroke-width="2"></line>
        <line x1="664" y1="96" x2="664" y2="160" stroke="#1f7a74" stroke-width="2"></line>
        <line x1="684" y1="96" x2="684" y2="160" stroke="#1f7a74" stroke-width="2"></line>
        <text x="610" y="198" font-size="13" fill="#5f6b7a">条纹间距与波长</text>
      </svg>
    `,
    thermal: `
      <svg viewBox="0 0 860 280" role="img" aria-label="热学示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="260" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">分子模型</text>
        <circle cx="110" cy="140" r="20" fill="#245e8a"></circle>
        <circle cx="166" cy="106" r="14" fill="#1f7a74"></circle>
        <circle cx="206" cy="162" r="18" fill="#b7791f"></circle>
        <line x1="104" y1="140" x2="76" y2="114" stroke="#d94f45" stroke-width="3"></line>
        <line x1="166" y1="106" x2="194" y2="84" stroke="#d94f45" stroke-width="3"></line>
        <text x="72" y="198" font-size="13" fill="#5f6b7a">温度与分子运动</text>
        <rect x="320" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="354" y="66" font-size="18" fill="#17324d" font-weight="700">p-V 图像</text>
        <line x1="348" y1="194" x2="516" y2="194" stroke="#17324d" stroke-width="2"></line>
        <line x1="348" y1="194" x2="348" y2="78" stroke="#17324d" stroke-width="2"></line>
        <path d="M360 180 C390 158, 420 136, 452 118 C480 104, 502 94, 512 88" fill="none" stroke="#245e8a" stroke-width="4"></path>
        <text x="512" y="208" font-size="13" fill="#5f6b7a">V</text>
        <text x="334" y="84" font-size="13" fill="#5f6b7a">p</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="612" y="66" font-size="18" fill="#17324d" font-weight="700">热力学过程</text>
        <rect x="616" y="108" width="86" height="28" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <rect x="716" y="108" width="86" height="28" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <rect x="616" y="148" width="86" height="28" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <rect x="716" y="148" width="86" height="28" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <text x="606" y="198" font-size="13" fill="#5f6b7a">状态量与过程量分开看</text>
      </svg>
    `,
    "modern-physics": `
      <svg viewBox="0 0 860 280" role="img" aria-label="近代物理示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="252" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">光电效应</text>
        <rect x="92" y="100" width="140" height="88" fill="#fff" stroke="#9eb7cf"></rect>
        <circle cx="130" cy="144" r="10" fill="#b7791f"></circle>
        <circle cx="168" cy="132" r="10" fill="#1f7a74"></circle>
        <circle cx="206" cy="120" r="10" fill="#245e8a"></circle>
        <text x="88" y="198" font-size="13" fill="#5f6b7a">频率决定是否逸出</text>
        <rect x="320" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">能级跃迁</text>
        <line x1="360" y1="92" x2="500" y2="92" stroke="#245e8a" stroke-width="3"></line>
        <line x1="360" y1="134" x2="500" y2="134" stroke="#1f7a74" stroke-width="3"></line>
        <line x1="360" y1="176" x2="500" y2="176" stroke="#d94f45" stroke-width="3"></line>
        <line x1="436" y1="176" x2="436" y2="92" stroke="#b7791f" stroke-width="4"></line>
        <text x="344" y="196" font-size="13" fill="#5f6b7a">E = hν</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="612" y="66" font-size="18" fill="#17324d" font-weight="700">核衰变</text>
        <path d="M620 168 C660 156, 704 136, 748 104" fill="none" stroke="#245e8a" stroke-width="4"></path>
        <path d="M620 168 C660 170, 704 174, 748 176" fill="none" stroke="#1f7a74" stroke-width="4" stroke-dasharray="6 5"></path>
        <text x="610" y="198" font-size="13" fill="#5f6b7a">半衰期与指数衰减</text>
      </svg>
    `,
    instruments: `
      <svg viewBox="0 0 860 280" role="img" aria-label="仪器与读数示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="244" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">读数与量程</text>
        <rect x="84" y="100" width="138" height="64" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="110" y1="126" x2="196" y2="126" stroke="#245e8a" stroke-width="3"></line>
        <line x1="110" y1="142" x2="186" y2="142" stroke="#1f7a74" stroke-width="3"></line>
        <text x="82" y="198" font-size="13" fill="#5f6b7a">读数、量程、估读</text>
        <rect x="310" y="36" width="238" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="344" y="66" font-size="18" fill="#17324d" font-weight="700">打点计时器</text>
        <rect x="350" y="108" width="118" height="42" rx="6" fill="#fff" stroke="#9eb7cf"></rect>
        <circle cx="370" cy="150" r="6" fill="#245e8a"></circle>
        <circle cx="392" cy="150" r="6" fill="#245e8a"></circle>
        <circle cx="414" cy="150" r="6" fill="#245e8a"></circle>
        <circle cx="436" cy="150" r="6" fill="#245e8a"></circle>
        <text x="336" y="198" font-size="13" fill="#5f6b7a">纸带和数据点</text>
        <rect x="572" y="36" width="252" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="606" y="66" font-size="18" fill="#17324d" font-weight="700">电表连接</text>
        <circle cx="636" cy="130" r="22" fill="#fff" stroke="#9eb7cf"></circle>
        <circle cx="710" cy="130" r="22" fill="#fff" stroke="#9eb7cf"></circle>
        <line x1="658" y1="130" x2="688" y2="130" stroke="#245e8a" stroke-width="4"></line>
        <text x="610" y="198" font-size="13" fill="#5f6b7a">接线与读数规范</text>
      </svg>
    `,
    "data-processing": `
      <svg viewBox="0 0 860 280" role="img" aria-label="数据处理示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="252" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">散点图</text>
        <circle cx="96" cy="176" r="4" fill="#245e8a"></circle>
        <circle cx="132" cy="150" r="4" fill="#245e8a"></circle>
        <circle cx="166" cy="132" r="4" fill="#245e8a"></circle>
        <circle cx="208" cy="108" r="4" fill="#245e8a"></circle>
        <line x1="86" y1="194" x2="230" y2="86" stroke="#1f7a74" stroke-width="3"></line>
        <text x="82" y="198" font-size="13" fill="#5f6b7a">拟合而不是硬连</text>
        <rect x="318" y="36" width="220" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="352" y="66" font-size="18" fill="#17324d" font-weight="700">斜率截距</text>
        <line x1="344" y1="194" x2="506" y2="194" stroke="#17324d" stroke-width="2"></line>
        <line x1="344" y1="194" x2="344" y2="84" stroke="#17324d" stroke-width="2"></line>
        <line x1="352" y1="184" x2="500" y2="106" stroke="#245e8a" stroke-width="4"></line>
        <text x="336" y="84" font-size="13" fill="#5f6b7a">k、b 各对应什么</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="610" y="66" font-size="18" fill="#17324d" font-weight="700">线性化</text>
        <rect x="614" y="98" width="162" height="86" fill="#fff" stroke="#9eb7cf"></rect>
        <path d="M626 168 C670 144, 708 122, 764 104" fill="none" stroke="#1f7a74" stroke-width="4"></path>
        <text x="606" y="198" font-size="13" fill="#5f6b7a">把非线性关系变直线</text>
      </svg>
    `,
    "error-analysis": `
      <svg viewBox="0 0 860 280" role="img" aria-label="误差分析示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="248" height="200" rx="10" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="72" y="66" font-size="18" fill="#17324d" font-weight="700">系统误差</text>
        <rect x="88" y="98" width="138" height="78" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="100" y1="140" x2="214" y2="140" stroke="#245e8a" stroke-width="3"></line>
        <text x="82" y="198" font-size="13" fill="#5f6b7a">方向性偏差</text>
        <rect x="316" y="36" width="228" height="200" rx="10" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="350" y="66" font-size="18" fill="#17324d" font-weight="700">随机误差</text>
        <circle cx="358" cy="146" r="4" fill="#245e8a"></circle>
        <circle cx="386" cy="128" r="4" fill="#245e8a"></circle>
        <circle cx="412" cy="158" r="4" fill="#245e8a"></circle>
        <circle cx="448" cy="122" r="4" fill="#245e8a"></circle>
        <circle cx="478" cy="150" r="4" fill="#245e8a"></circle>
        <text x="342" y="198" font-size="13" fill="#5f6b7a">多次测量取平均</text>
        <rect x="576" y="36" width="248" height="200" rx="10" fill="#f6fbfa" stroke="#c7ddeb"></rect>
        <text x="610" y="66" font-size="18" fill="#17324d" font-weight="700">改进方案</text>
        <rect x="612" y="100" width="166" height="80" fill="#fff" stroke="#9eb7cf"></rect>
        <line x1="626" y1="144" x2="760" y2="112" stroke="#1f7a74" stroke-width="4"></line>
        <text x="606" y="198" font-size="13" fill="#5f6b7a">对应误差来源提出改进</text>
      </svg>
    `,
    "answer-expression": `
      <svg viewBox="0 0 860 280" role="img" aria-label="规范表达示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="36" y="36" width="786" height="200" rx="10" fill="#fbfdff" stroke="#c7ddeb"></rect>
        <text x="74" y="66" font-size="18" fill="#17324d" font-weight="700">答题四步</text>
        <rect x="84" y="108" width="132" height="56" rx="8" fill="#edf5fb" stroke="#9eb7cf"></rect>
        <text x="118" y="141" font-size="15" fill="#17324d">对象</text>
        <rect x="244" y="108" width="132" height="56" rx="8" fill="#eef8f7" stroke="#9eb7cf"></rect>
        <text x="278" y="141" font-size="15" fill="#17324d">条件</text>
        <rect x="404" y="108" width="132" height="56" rx="8" fill="#fff8ea" stroke="#d9c08e"></rect>
        <text x="438" y="141" font-size="15" fill="#17324d">规律</text>
        <rect x="564" y="108" width="132" height="56" rx="8" fill="#f6fbfa" stroke="#9eb7cf"></rect>
        <text x="598" y="141" font-size="15" fill="#17324d">结论</text>
        <line x1="216" y1="136" x2="244" y2="136" stroke="#245e8a" stroke-width="4"></line>
        <line x1="376" y1="136" x2="404" y2="136" stroke="#245e8a" stroke-width="4"></line>
        <line x1="536" y1="136" x2="564" y2="136" stroke="#245e8a" stroke-width="4"></line>
      </svg>
    `,
    generic: `
      <svg viewBox="0 0 860 280" role="img" aria-label="物理专题示意图">
        <rect width="860" height="280" fill="#ffffff"></rect>
        <rect x="42" y="42" width="776" height="196" rx="12" fill="#edf5fb" stroke="#c7ddeb"></rect>
        <text x="430" y="115" text-anchor="middle" font-size="26" fill="#17324d" font-weight="700">专题图像区</text>
        <text x="430" y="154" text-anchor="middle" font-size="18" fill="#5f6b7a">可在此处继续补充教材图、过程图、实验装置图或高考情境图</text>
      </svg>
    `,
  };

  return visuals[type] || visuals.generic;
}

const topics = Object.fromEntries(Object.entries(topicSeeds).map(([id, seed]) => [id, makeTopic(id, seed)]));
const defaultTopic = "kinematics";
const topicId = new URLSearchParams(location.search).get("topic") || defaultTopic;
const topic = topics[topicId] || topics[defaultTopic];
const storagePrefix = `physics-topic:${topicId}:`;
const editToggle = document.querySelector("#editToggle");
const topicNav = document.querySelector("#topicNav");
const backTop = document.querySelector("#backTop");
const topicTitle = document.querySelector("#topicTitle");
const topicLead = document.querySelector("#topicLead");
const editableBlocks = [...document.querySelectorAll(".editable")];
let editing = false;
let toastTimer;

topicTitle.textContent = topic.title;
topicLead.textContent = topic.lead;

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function renderStaticHeadings() {
  topic.headings.core.forEach((title, index) => setText(`#core${index + 1}Title`, title));
  topic.headings.extensions.forEach((title, index) => setText(`#ext${index + 1}Title`, title));
}

function renderNav() {
  topicNav.innerHTML = topic.nav
    .map(([id, label]) => `<a href="#${id}" data-target="${id}">${label}</a>`)
    .join("");
}

function fillFields() {
  for (const [key, value] of Object.entries(topic.fields)) {
    const node = document.querySelector(`[data-key="${key}"]`);
    if (!node) continue;
    const saved = localStorage.getItem(storagePrefix + key);
    if (key === "formulaBox") {
      node.innerHTML = saved ?? value;
      continue;
    }
    node.innerHTML = saved ?? String(value).replaceAll("\n", "<br>");
  }
}

function showToast(text) {
  let toast = document.querySelector(".edit-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "edit-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1200);
}

function setEditing(next) {
  editing = next;
  editToggle.classList.toggle("is-on", editing);
  editToggle.textContent = editing ? "退出编辑" : "编辑模式";
  editableBlocks.forEach((block) => {
    block.setAttribute("contenteditable", String(editing));
  });
  showToast(editing ? "编辑模式已开启" : "编辑内容已保存");
}

function bindEditing() {
  editToggle.addEventListener("click", () => setEditing(!editing));
  editableBlocks.forEach((block) => {
    block.addEventListener("input", () => {
      localStorage.setItem(storagePrefix + block.dataset.key, block.innerHTML);
    });
  });
}

function bindNavHighlight() {
  const links = [...topicNav.querySelectorAll("a")];

  function updateActive() {
    const current = topic.nav
      .map(([id]) => document.getElementById(id))
      .filter(Boolean)
      .reverse()
      .find((section) => section.getBoundingClientRect().top <= 140);

    links.forEach((link) => {
      link.classList.toggle("is-active", current && link.dataset.target === current.id);
    });
  }

  document.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
}

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderStaticHeadings();
const formulaNode = document.querySelector('[data-key="formulaBox"]');
if (formulaNode) {
  formulaNode.innerHTML = localStorage.getItem(storagePrefix + "formulaBox") ?? topic.formulaBoxHtml ?? renderFormulaLines(topic.formulas || []);
}
const sourceNode = document.querySelector("#sourceLinks");
if (sourceNode) {
  sourceNode.innerHTML = sourceLinks
    .map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");
}
const visualNode = document.querySelector("#visualFigure");
if (visualNode) {
  visualNode.innerHTML = renderVisual(topic.visual);
}
const trainingNode = document.querySelector("#trainingGrid");
if (trainingNode) {
  trainingNode.innerHTML = renderTrainingCards(topic.trainings);
}
renderNav();
fillFields();
bindEditing();
bindNavHighlight();
setEditing(false);
