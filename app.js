const chapters = [
  {
    id: "motion-force",
    title: "运动与相互作用",
    phase: "高一主干",
    theme: "从运动描述进入受力分析，建立高中物理最基础的建模语言。",
    items: [
      {
        id: "kinematics",
        title: "直线运动",
        tags: ["位移", "速度", "加速度", "图像"],
        summary: "用位置、速度、加速度描述物体运动，并通过 x-t、v-t 图像读出过程信息。",
        core: "运动学的核心不是套公式，而是把物理过程转化为图像、方程和阶段关系。",
        keyPoints: ["位移与路程的区别", "平均速度与瞬时速度", "加速度的方向和意义", "匀变速直线运动公式", "x-t、v-t 图像的斜率和面积"],
        warnings: ["把速度方向与加速度方向混同", "看到减速就误以为加速度一定为负", "图像题只读数值，不读斜率和面积"],
        actions: ["每题先画运动草图", "统一正方向后再列式", "用图像解释每个公式的来源"],
      },
      {
        id: "forces-balance",
        title: "力与平衡",
        tags: ["受力图", "摩擦力", "共点力", "临界"],
        summary: "识别重力、弹力、摩擦力等作用，利用平衡条件解决静态与临界问题。",
        core: "力学入门的关键是受力图。受力图完整，方程通常就清楚了一半。",
        keyPoints: ["重力、弹力、摩擦力的产生条件", "静摩擦力方向判断", "共点力平衡", "正交分解", "临界与极值条件"],
        warnings: ["多画不存在的力", "漏掉摩擦力或弹力", "把摩擦力方向固定理解为与运动方向相反"],
        actions: ["每道力学题必须先画研究对象", "用接触面判断弹力和摩擦力", "把临界条件写成一句话再列式"],
      },
      {
        id: "newton-laws",
        title: "牛顿运动定律",
        tags: ["F=ma", "连接体", "斜面", "传送带"],
        summary: "用合力决定加速度的思想解释运动变化，处理多物体、多过程问题。",
        core: "牛顿定律连接“受力原因”和“运动结果”，是力学综合题的发动机。",
        keyPoints: ["牛顿第二定律", "整体法与隔离法", "连接体模型", "斜面模型", "传送带与板块模型"],
        warnings: ["研究对象切换后方程仍沿用旧受力", "整体法和隔离法混用时变量不一致", "传送带题不分阶段"],
        actions: ["先判断系统是否同加速度", "复杂题先整体后隔离", "传送带题写出相对运动阶段"],
      },
      {
        id: "curved-motion",
        title: "曲线运动与天体",
        tags: ["平抛", "圆周", "向心力", "万有引力"],
        summary: "把曲线运动分解为可处理的方向关系，并理解圆周和天体运动模型。",
        core: "曲线运动的本质是方向不断变化；向心力不是新力，而是指向圆心的合力效果。",
        keyPoints: ["平抛运动分解", "圆周运动的周期、角速度、向心加速度", "向心力来源", "万有引力提供向心力", "卫星轨道关系"],
        warnings: ["把向心力当作额外受力", "平抛水平方向误列加速度", "天体题公式记住了但不知道适用对象"],
        actions: ["平抛题固定分水平和竖直方向", "圆周题先找圆心和半径", "天体题写清中心天体与环绕天体"],
      },
    ],
  },
  {
    id: "energy-momentum",
    title: "能量与动量",
    phase: "高一综合",
    theme: "用守恒观点处理多过程问题，减少对繁琐受力方程的依赖。",
    items: [
      {
        id: "work-power",
        title: "功与功率",
        tags: ["功", "功率", "机车启动"],
        summary: "理解力在位移方向上的效果，掌握功率与速度、牵引力之间的关系。",
        core: "功描述能量转化，功率描述转化快慢。公式背后一定要有过程意识。",
        keyPoints: ["恒力功 W=Fs cosθ", "正功、负功、零功", "平均功率与瞬时功率", "P=Fv 的适用条件", "机车恒功率与恒牵引力启动"],
        warnings: ["把路程直接当位移方向", "忽略力和位移夹角", "机车启动不分阶段"],
        actions: ["先判断每个力做功正负", "画出速度随时间变化趋势", "机车题列出牵引力、阻力、功率三者关系"],
      },
      {
        id: "mechanical-energy",
        title: "机械能",
        tags: ["动能", "势能", "守恒", "功能关系"],
        summary: "用动能定理、机械能守恒和功能关系解决多阶段运动。",
        core: "能量方法适合跨过程求速度和高度，但前提是清楚哪些力做功、哪些能量转化。",
        keyPoints: ["动能定理", "重力势能和弹性势能", "机械能守恒条件", "除重力弹力外其他力做功", "多过程能量衔接"],
        warnings: ["只看到光滑就直接守恒", "漏掉摩擦生热", "把某一段速度当全程结果"],
        actions: ["先写研究过程的起点和终点", "判断是否存在非保守力做功", "用能量柱或过程表整理量"],
      },
      {
        id: "momentum",
        title: "动量与碰撞",
        tags: ["冲量", "动量守恒", "碰撞"],
        summary: "选定系统与正方向，利用动量守恒处理碰撞、爆炸与反冲。",
        core: "动量专题的第一步永远是选系统。系统选对，守恒条件才有意义。",
        keyPoints: ["冲量与动量变化", "动量守恒条件", "弹性碰撞与非弹性碰撞", "反冲模型", "动量与能量联立"],
        warnings: ["没有说明正方向", "系统内力外力分不清", "碰撞后速度方向默认不变"],
        actions: ["写清系统和正方向", "碰撞前后分两行列式", "守恒方程和能量方程分开检查"],
      },
      {
        id: "integrated-mechanics",
        title: "力学综合模型",
        tags: ["多过程", "守恒", "圆周", "临界"],
        summary: "把牛顿定律、能量、动量、圆周运动结合，解决高考压轴型力学问题。",
        core: "综合题的难点不在公式多，而在过程切分、模型识别和条件转译。",
        keyPoints: ["过程分段", "临界状态", "能量与动量联用", "圆周最高点最低点", "板块与弹簧综合"],
        warnings: ["从头算到尾没有阶段边界", "临界词语没有转化为数学条件", "多个对象变量混乱"],
        actions: ["在题干旁标出阶段编号", "每阶段只选一种主方法", "最后检查临界条件是否满足"],
      },
    ],
  },
  {
    id: "electromagnetism",
    title: "电与磁",
    phase: "高二主干",
    theme: "从场的观点理解电磁现象，用方向、图像和能量串联电磁学。",
    items: [
      {
        id: "electric-field",
        title: "电场",
        tags: ["场强", "电势", "电容", "带电粒子"],
        summary: "理解电场强度、电势、电势差和带电粒子在电场中的运动。",
        core: "电场题要同时看力的方向和能量变化，场强解决力，电势解决能。",
        keyPoints: ["电场强度定义", "电场线与等势面", "电势、电势差、电势能", "匀强电场中带电粒子运动", "电容器"],
        warnings: ["电场线方向与受力方向混淆", "正负电荷电势能变化判断反了", "只会公式不会看图"],
        actions: ["先标电场方向和电荷正负", "用电势高低判断能量变化", "带电粒子题类比平抛处理"],
      },
      {
        id: "circuits",
        title: "恒定电流与电路实验",
        tags: ["欧姆定律", "闭合电路", "电表", "误差"],
        summary: "掌握电路规律、仪器连接和电学实验的数据处理。",
        core: "电路学习要把“实际电路图”和“等效关系”对应起来，实验题尤其看连接和误差。",
        keyPoints: ["部分电路和闭合电路欧姆定律", "串并联规律", "电源电动势和内阻", "伏安法测电阻", "滑动变阻器接法"],
        warnings: ["电压表电流表内阻影响忽略不当", "滑动变阻器限流与分压接法混淆", "电路图和实物图对应不上"],
        actions: ["先化简电路再计算", "实验题写清电表量程和接法", "用图像斜率/截距求物理量"],
      },
      {
        id: "magnetic-field",
        title: "磁场",
        tags: ["安培力", "洛伦兹力", "轨迹"],
        summary: "判断磁场中电流和带电粒子的受力方向，分析圆周轨迹。",
        core: "磁场题最稳的路径是先定方向，再找几何，再列半径和周期关系。",
        keyPoints: ["磁感应强度", "安培力", "洛伦兹力", "带电粒子匀速圆周运动", "速度选择器和质谱仪思想"],
        warnings: ["左右手定则混用", "半径几何关系找错", "忽略洛伦兹力不做功"],
        actions: ["在图上标清速度、电荷、磁场方向", "先画圆心和半径", "用 qvB=mv²/r 建主方程"],
      },
      {
        id: "induction",
        title: "电磁感应",
        tags: ["磁通量", "楞次定律", "法拉第定律", "图像"],
        summary: "理解磁通量变化产生感应电动势，并用楞次定律判断方向。",
        core: "电磁感应是电磁学的综合场：方向、图像、能量、力学常常一起出现。",
        keyPoints: ["磁通量", "感应电流条件", "楞次定律", "法拉第电磁感应定律", "导体棒切割磁感线"],
        warnings: ["只问有无电流却不看回路是否闭合", "楞次定律方向判断跳步", "图像斜率和面积含义不清"],
        actions: ["先判断磁通量是否变化", "用“阻碍变化”写出方向理由", "导体棒题同步分析受力和能量"],
      },
    ],
  },
  {
    id: "waves-modern",
    title: "振动、波、光、热、近代",
    phase: "高二拓展",
    theme: "用现象解释和图像判断补齐高考选择题、实验题和小计算的关键板块。",
    items: [
      {
        id: "oscillation-wave",
        title: "机械振动与机械波",
        tags: ["周期", "频率", "波速", "波形图"],
        summary: "从振动图像和波形图中读取相位、传播方向和波速关系。",
        core: "波动题的关键是区分“某质点随时间振动”和“某时刻空间波形”。",
        keyPoints: ["简谐运动", "周期与频率", "波长、波速、频率关系", "波形图与振动图像", "干涉和衍射现象"],
        warnings: ["把波形图当作质点轨迹", "传播方向和质点振动方向判断混乱", "相位差理解不清"],
        actions: ["先判断图像类型", "标出传播方向和特殊点", "用 v=λf 连接三个量"],
      },
      {
        id: "optics",
        title: "光学",
        tags: ["折射", "全反射", "干涉", "实验"],
        summary: "用光路图解释折射、全反射、干涉和衍射现象。",
        core: "光学题要敢画图。现象解释比公式堆算更重要。",
        keyPoints: ["折射定律", "临界角与全反射", "双缝干涉", "薄膜干涉", "光的波粒二象性入口"],
        warnings: ["法线没画就判断角度", "入射角折射角对象混乱", "干涉条纹条件只背不理解"],
        actions: ["每题先画法线和光路", "判断是否从光密到光疏", "实验题写清条纹变化原因"],
      },
      {
        id: "thermal",
        title: "热学",
        tags: ["分子动理论", "气体状态", "热力学"],
        summary: "理解微观粒子运动与宏观状态量之间的关系，掌握气体图像判断。",
        core: "热学更多考理解和图像，抓住状态量、过程和能量守恒就能稳住。",
        keyPoints: ["分子动理论", "内能", "气体实验定律", "p-V、p-T、V-T 图像", "热力学第一定律"],
        warnings: ["温度与热量混同", "状态变化过程看错", "图像坐标轴没看清"],
        actions: ["列出初末状态量", "判断等温、等压、等容过程", "用能量语言解释吸热放热"],
      },
      {
        id: "modern-physics",
        title: "近代物理",
        tags: ["光电效应", "原子核", "半衰期"],
        summary: "掌握光电效应、原子结构、核反应和半衰期等高频结论。",
        core: "近代物理题通常不难，但概念边界很严，最怕似是而非。",
        keyPoints: ["光电效应规律", "爱因斯坦光电方程", "玻尔原子模型", "核反应方程", "半衰期"],
        warnings: ["光强和频率影响混淆", "核反应质量数电荷数不守恒", "半衰期与初始质量无关这一点忘记"],
        actions: ["把常见结论做成判断表", "核反应先查质量数和电荷数", "光电效应用图像辅助记忆"],
      },
    ],
  },
  {
    id: "experiment-expression",
    title: "实验与表达",
    phase: "全程贯穿",
    theme: "把教材实验、数据处理、误差分析和答题表达变成稳定得分能力。",
    items: [
      {
        id: "instruments",
        title: "仪器与读数",
        tags: ["刻度尺", "打点计时器", "电表", "传感器"],
        summary: "掌握常用仪器的读数规则、量程选择和连接方法。",
        core: "实验题首先考你是否真的理解仪器功能，而不只是背过模板。",
        keyPoints: ["刻度尺估读", "游标卡尺和螺旋测微器", "打点计时器", "电压表电流表", "传感器与数字化实验"],
        warnings: ["有效数字位数错误", "量程选择不合理", "电表正负接线和内阻影响忽略"],
        actions: ["读数写单位", "先选量程再连接", "说明仪器在实验中的具体作用"],
      },
      {
        id: "data-processing",
        title: "数据处理与图像",
        tags: ["列表", "描点", "拟合", "斜率"],
        summary: "通过表格、图像、斜率和截距从实验数据中得到物理量。",
        core: "高考实验常把答案藏在图像里，斜率、截距、面积都可能是物理量。",
        keyPoints: ["数据表设计", "描点作图", "线性化处理", "斜率和截距意义", "有效数字与单位"],
        warnings: ["坐标轴物理量和单位漏写", "把曲线硬连成折线", "斜率单位不处理"],
        actions: ["先判断纵横轴含义", "用大范围点求斜率", "把数学结果翻译成物理量"],
      },
      {
        id: "error-analysis",
        title: "误差分析与改进",
        tags: ["系统误差", "偶然误差", "改进方案"],
        summary: "分析实验误差来源，提出合理改进方法。",
        core: "误差分析不是套话，要说清楚误差来自哪里、让结果偏大还是偏小。",
        keyPoints: ["系统误差", "偶然误差", "相对误差", "控制变量", "实验改进"],
        warnings: ["把错误当误差", "只写“多测几次取平均”但不解释", "偏大偏小判断没有依据"],
        actions: ["区分读数、器材、方法误差", "写出误差影响方向", "提出能对应误差来源的改进"],
      },
      {
        id: "answer-expression",
        title: "规范表达",
        tags: ["对象", "条件", "规律", "结论"],
        summary: "用清晰的步骤、符号和文字说明让阅卷人看懂思路。",
        core: "广东卷越来越重视推理论证。会做不等于会得满分，表达是最后一公里。",
        keyPoints: ["研究对象", "正方向和符号", "适用条件", "方程编号", "结果检验"],
        warnings: ["只列公式不说明对象", "符号前后不一致", "结果没有单位或方向"],
        actions: ["复杂题用“对象-条件-规律-结论”四句式", "每个新符号首次出现要定义", "最后检查单位、方向和数量级"],
      },
    ],
  },
];

const flow = [
  ["概念定锚", "说清物理量是什么意思，与哪些量容易混淆。"],
  ["规律建构", "把公式和适用条件绑在一起，不背裸公式。"],
  ["模型入库", "沉淀典型图、关键量、易错点和变式入口。"],
  ["实验支撑", "用教材实验理解测量、数据和误差。"],
  ["情境迁移", "把生活、科技、生产情境抽象成物理模型。"],
  ["反思闭环", "按概念、图像、建模、计算、表达分类订正。"],
];

const textbookAlignment = [
  {
    book: "必修 第一册",
    chapters: [
      {
        title: "第一章 运动的描述",
        lessons: [
          ["质点 参考系", "质点模型、参考系、坐标系、物体运动的抽象描述", "kinematics"],
          ["时间 位移", "时刻与时间间隔、位置、位移、路程、矢量和标量", "kinematics"],
          ["位置变化快慢的描述--速度", "平均速度、瞬时速度、速度方向、速度-时间图像入口", "kinematics"],
          ["速度变化快慢的描述--加速度", "加速度、速度变化量、加速度方向、图像斜率", "kinematics"],
        ],
      },
      {
        title: "第二章 匀变速直线运动的研究",
        lessons: [
          ["实验：探究小车速度随时间变化的规律", "打点计时器、纸带处理、速度计算、v-t 图像", "instruments"],
          ["匀变速直线运动的速度与时间的关系", "速度公式、初速度、末速度、加速度、图像表达", "kinematics"],
          ["匀变速直线运动的位移与时间的关系", "位移公式、平均速度法、面积法、过程分段", "kinematics"],
          ["自由落体运动", "重力加速度、自由落体规律、竖直方向匀变速模型", "kinematics"],
        ],
      },
      {
        title: "第三章 相互作用--力",
        lessons: [
          ["重力与弹力", "重力、重心、弹力、形变、胡克定律", "forces-balance"],
          ["摩擦力", "静摩擦、滑动摩擦、最大静摩擦、摩擦方向判断", "forces-balance"],
          ["牛顿第三定律", "作用力与反作用力、相互作用、受力对象区分", "newton-laws"],
          ["力的合成和分解", "平行四边形定则、正交分解、共点力合成", "forces-balance"],
          ["共点力的平衡", "平衡条件、受力分析、临界平衡、斜面模型", "forces-balance"],
        ],
      },
      {
        title: "第四章 运动和力的关系",
        lessons: [
          ["牛顿第一定律", "惯性、运动状态、力不是维持运动的原因", "newton-laws"],
          ["实验：探究加速度与力、质量的关系", "控制变量、图像处理、实验误差、F-a 与 a-1/m 图像", "data-processing"],
          ["牛顿第二定律", "合力、质量、加速度、单位制、动力学基本方程", "newton-laws"],
          ["力学单位制", "基本单位、导出单位、量纲和规范表达", "answer-expression"],
          ["牛顿运动定律的应用", "整体法、隔离法、连接体、斜面、传送带、多过程", "newton-laws"],
          ["超重和失重", "视重、加速度方向、电梯模型、竖直动力学", "newton-laws"],
        ],
      },
    ],
  },
  {
    book: "必修 第二册",
    chapters: [
      {
        title: "第五章 抛体运动",
        lessons: [
          ["曲线运动", "曲线运动速度方向、合力方向、运动轨迹条件", "curved-motion"],
          ["运动的合成与分解", "分运动、合运动、等时性、独立性、矢量分解", "curved-motion"],
          ["实验：探究平抛运动的特点", "平抛轨迹、水平匀速、竖直自由落体、数据处理", "curved-motion"],
          ["抛体运动的规律", "平抛位移、速度分解、飞行时间、射程与落点", "curved-motion"],
        ],
      },
      {
        title: "第六章 圆周运动",
        lessons: [
          ["圆周运动", "线速度、角速度、周期、转速、频率", "curved-motion"],
          ["向心力", "向心加速度、向心力来源、合力效果", "curved-motion"],
          ["向心加速度", "速度方向变化、a=v²/r、a=ω²r", "curved-motion"],
          ["生活中的圆周运动", "水平面转弯、竖直圆周、临界速度、离心现象", "curved-motion"],
        ],
      },
      {
        title: "第七章 万有引力与宇宙航行",
        lessons: [
          ["行星的运动", "开普勒定律、轨道、周期和半径关系", "curved-motion"],
          ["万有引力定律", "引力公式、适用条件、引力常量", "curved-motion"],
          ["万有引力理论的成就", "天体质量、密度、轨道参数、重力加速度", "curved-motion"],
          ["宇宙航行", "环绕速度、同步卫星、轨道变换、失重", "curved-motion"],
        ],
      },
      {
        title: "第八章 机械能守恒定律",
        lessons: [
          ["功与功率", "功、正功负功、平均功率、瞬时功率、机车启动", "work-power"],
          ["重力势能", "重力做功、势能零点、重力势能变化", "mechanical-energy"],
          ["动能和动能定理", "合外力做功、动能变化、过程选择", "mechanical-energy"],
          ["机械能守恒定律", "守恒条件、动能势能转化、多过程衔接", "mechanical-energy"],
          ["实验：验证机械能守恒定律", "纸带数据、速度计算、误差来源、图像验证", "instruments"],
        ],
      },
    ],
  },
  {
    book: "必修 第三册",
    chapters: [
      {
        title: "第九章 静电场及其应用",
        lessons: [
          ["电荷", "电荷量、元电荷、起电方式、电荷守恒", "electric-field"],
          ["库仑定律", "点电荷模型、库仑力、真空条件、矢量性", "electric-field"],
          ["电场 电场强度", "场强定义、电场线、点电荷电场、叠加思想", "electric-field"],
          ["静电的防止与利用", "静电平衡、尖端放电、静电屏蔽、静电应用", "electric-field"],
        ],
      },
      {
        title: "第十章 静电场中的能量",
        lessons: [
          ["电势能和电势", "电场力做功、电势能、电势、等势面", "electric-field"],
          ["电势差", "电势差、电场力做功与电势差关系、能量观点", "electric-field"],
          ["电势差与电场强度的关系", "匀强电场、E=U/d、方向与单位", "electric-field"],
          ["电容器的电容", "电容定义、平行板电容器、动态分析", "electric-field"],
          ["带电粒子在电场中的运动", "类平抛、加速、偏转、示波管模型", "electric-field"],
        ],
      },
      {
        title: "第十一章 电路及其应用",
        lessons: [
          ["电源和电流", "电流形成、电源、电流方向、电流强度", "circuits"],
          ["导体的电阻", "电阻定律、电阻率、温度影响、材料特性", "circuits"],
          ["实验：导体电阻率的测量", "伏安法、螺旋测微器、游标卡尺、误差分析", "instruments"],
          ["串联电路和并联电路", "串并联规律、电表改装、等效电阻", "circuits"],
          ["实验：练习使用多用电表", "欧姆挡、电压电流测量、机械调零和欧姆调零", "instruments"],
        ],
      },
      {
        title: "第十二章 电能 能量守恒定律",
        lessons: [
          ["电路中的能量转化", "电功、电功率、焦耳热、纯电阻和非纯电阻", "circuits"],
          ["闭合电路的欧姆定律", "电动势、内阻、路端电压、外电路特性", "circuits"],
          ["实验：电池电动势和内阻的测量", "U-I 图像、斜率截距、误差来源", "data-processing"],
          ["能源与可持续发展", "能量守恒、能量转化效率、能源利用与社会情境", "answer-expression"],
        ],
      },
      {
        title: "第十三章 电磁感应与电磁波初步",
        lessons: [
          ["磁场 磁感线", "磁场方向、磁感线、磁感应强度入口", "magnetic-field"],
          ["磁感应强度 磁通量", "B 的定义、磁通量、面积方向、变化判断", "magnetic-field"],
          ["电磁感应现象及应用", "感应电流条件、闭合回路、磁通量变化", "induction"],
          ["电磁波的发现及应用", "麦克斯韦思想、电磁波、信息传输", "induction"],
          ["能量量子化", "量子化思想、光子能量、近代物理入口", "modern-physics"],
        ],
      },
    ],
  },
  {
    book: "选择性必修 第一册",
    chapters: [
      {
        title: "第一章 动量守恒定律",
        lessons: [
          ["动量", "动量定义、冲量入口、状态量、矢量性", "momentum"],
          ["动量定理", "冲量、动量变化、过程量、F-t 图像", "momentum"],
          ["动量守恒定律", "系统、内力外力、守恒条件、正方向", "momentum"],
          ["实验：验证动量守恒定律", "碰撞实验、数据测量、误差与图像", "instruments"],
          ["弹性碰撞和非弹性碰撞", "动量守恒、机械能变化、碰撞模型", "momentum"],
          ["反冲现象 火箭", "反冲、爆炸、系统动量守恒、变质量思想入口", "momentum"],
        ],
      },
      {
        title: "第二章 机械振动",
        lessons: [
          ["简谐运动", "回复力、平衡位置、振幅、周期、图像", "oscillation-wave"],
          ["简谐运动的描述", "位移-时间图像、相位、周期频率", "oscillation-wave"],
          ["简谐运动的回复力和能量", "回复力、机械能转化、弹簧振子模型", "oscillation-wave"],
          ["单摆", "周期公式、等效模型、重力加速度测量", "oscillation-wave"],
          ["实验：用单摆测量重力加速度", "周期测量、摆长、误差分析、图像处理", "instruments"],
          ["受迫振动 共振", "固有频率、驱动力频率、共振条件和应用", "oscillation-wave"],
        ],
      },
      {
        title: "第三章 机械波",
        lessons: [
          ["波的形成", "机械波、介质、波源、横波与纵波", "oscillation-wave"],
          ["波的描述", "波长、频率、周期、波速、波形图", "oscillation-wave"],
          ["波的反射、折射和衍射", "波的传播现象、边界行为、明显衍射条件", "oscillation-wave"],
          ["波的干涉", "相干波源、加强减弱、干涉图样", "oscillation-wave"],
          ["多普勒效应", "频率变化、相对运动、生活应用", "oscillation-wave"],
        ],
      },
      {
        title: "第四章 光",
        lessons: [
          ["光的折射", "折射定律、折射率、光路可逆", "optics"],
          ["全反射", "临界角、光密到光疏、光纤应用", "optics"],
          ["光的干涉", "双缝干涉、条纹间距、相干条件", "optics"],
          ["实验：用双缝干涉测量光的波长", "条纹间距、装置调节、数据处理", "optics"],
          ["光的衍射", "明显衍射条件、单缝衍射、波动性证据", "optics"],
          ["光的偏振 激光", "偏振现象、横波特征、激光特点", "optics"],
        ],
      },
    ],
  },
  {
    book: "选择性必修 第二册",
    chapters: [
      {
        title: "第一章 安培力与洛伦兹力",
        lessons: [
          ["磁场对通电导线的作用力", "安培力大小、方向、左手定则、磁电式仪表", "magnetic-field"],
          ["磁场对运动电荷的作用力", "洛伦兹力、带电粒子偏转、不做功", "magnetic-field"],
          ["带电粒子在匀强磁场中的运动", "圆周半径、周期、轨迹几何、质谱仪思想", "magnetic-field"],
          ["质谱仪与回旋加速器", "速度选择、半径测量、周期特征、应用情境", "magnetic-field"],
        ],
      },
      {
        title: "第二章 电磁感应",
        lessons: [
          ["楞次定律", "感应电流方向、阻碍变化、右手定则", "induction"],
          ["法拉第电磁感应定律", "感应电动势、磁通量变化率、n 匝线圈", "induction"],
          ["涡流、电磁阻尼和电磁驱动", "涡流、能量转化、阻尼与驱动应用", "induction"],
          ["互感和自感", "自感电动势、互感、线圈电路暂态", "induction"],
        ],
      },
      {
        title: "第三章 交变电流",
        lessons: [
          ["交变电流", "正弦式交流、峰值、瞬时值、周期频率", "circuits"],
          ["交变电流的描述", "有效值、平均值、相位、图像表达", "circuits"],
          ["变压器", "理想变压器、电压电流关系、能量守恒", "circuits"],
          ["电能的输送", "输电损耗、高压输电、变压器应用", "circuits"],
        ],
      },
      {
        title: "第四章 电磁振荡与电磁波",
        lessons: [
          ["电磁振荡", "LC 振荡、电场能和磁场能转化", "induction"],
          ["电磁场与电磁波", "变化电场和磁场、电磁波产生", "induction"],
          ["无线电波的发射和接收", "调制、解调、天线、通信", "induction"],
          ["电磁波谱", "无线电波、红外线、可见光、紫外线、X 射线和 γ 射线", "modern-physics"],
        ],
      },
      {
        title: "第五章 传感器",
        lessons: [
          ["认识传感器", "敏感元件、转换元件、自动控制入口", "instruments"],
          ["常见传感器的工作原理及应用", "热敏、光敏、力敏、电磁传感器", "instruments"],
          ["利用传感器制作简单的自动控制装置", "电路设计、阈值控制、实验评价", "instruments"],
        ],
      },
    ],
  },
  {
    book: "选择性必修 第三册",
    chapters: [
      {
        title: "第一章 分子动理论",
        lessons: [
          ["分子动理论的基本内容", "物质微观模型、热运动、分子间作用力", "thermal"],
          ["实验：用油膜法估测油酸分子的大小", "单分子油膜、体积面积法、数量级估算", "instruments"],
          ["分子运动速率分布规律", "统计规律、温度与平均动能、速率分布图像", "thermal"],
          ["分子动能和分子势能", "内能、分子动能、分子势能、宏微观联系", "thermal"],
        ],
      },
      {
        title: "第二章 气体、固体和液体",
        lessons: [
          ["温度和温标", "热平衡、摄氏温标、热力学温标", "thermal"],
          ["气体的等温变化", "玻意耳定律、p-V 图像、实验探究", "thermal"],
          ["气体的等压变化和等容变化", "盖-吕萨克定律、查理定律、图像判断", "thermal"],
          ["固体", "晶体和非晶体、各向异性、微观结构", "thermal"],
          ["液体", "表面张力、浸润与不浸润、毛细现象", "thermal"],
        ],
      },
      {
        title: "第三章 热力学定律",
        lessons: [
          ["功、热和内能的改变", "做功、热传递、内能变化、过程判断", "thermal"],
          ["热力学第一定律", "ΔU、Q、W、符号约定、能量守恒", "thermal"],
          ["能量守恒定律", "能量转化、守恒观点、热机效率入口", "thermal"],
          ["热力学第二定律", "方向性、不可逆过程、熵的思想入口", "thermal"],
        ],
      },
      {
        title: "第四章 原子结构和波粒二象性",
        lessons: [
          ["普朗克黑体辐射理论", "能量量子化、黑体辐射、量子思想", "modern-physics"],
          ["光电效应", "截止频率、遏止电压、光强与频率影响", "modern-physics"],
          ["原子的核式结构模型", "α 粒子散射、核式结构、模型证据", "modern-physics"],
          ["氢原子光谱和玻尔的原子模型", "能级跃迁、光谱、玻尔理论", "modern-physics"],
          ["粒子的波动性和量子力学的建立", "德布罗意波、波粒二象性、量子理论入口", "modern-physics"],
        ],
      },
      {
        title: "第五章 原子核",
        lessons: [
          ["原子核的组成", "质子、中子、核素、同位素", "modern-physics"],
          ["放射性元素的衰变", "α 衰变、β 衰变、半衰期、衰变规律", "modern-physics"],
          ["核力与结合能", "质量亏损、结合能、比结合能", "modern-physics"],
          ["核裂变和核聚变", "链式反应、核反应方程、能源应用", "modern-physics"],
          ["粒子和宇宙", "基本粒子、宇宙演化、现代物理视野", "modern-physics"],
        ],
      },
    ],
  },
];

const textbookMeta = {
  "必修 第一册": {
    cover: "./assets/textbook-covers/必修 第一册.png",
    pdf: "./textbooks/必修 第一册.pdf",
    intro: "以运动学、力学基础为主，适合先建立直线运动和受力分析的底层框架。",
  },
  "必修 第二册": {
    cover: "./assets/textbook-covers/必修 第二册.png",
    pdf: "./textbooks/必修 第二册.pdf",
    intro: "围绕抛体、圆周、万有引力和机械能，形成“运动 - 力 - 能”一体化分析链。",
  },
  "必修 第三册": {
    cover: "./assets/textbook-covers/必修 第三册.png",
    pdf: "./textbooks/必修 第三册.pdf",
    intro: "从静电场到电磁感应，继续补齐电学与电磁学基础。",
  },
  "选择性必修 第一册": {
    cover: "./assets/textbook-covers/选择性必修 第一册.png",
    pdf: "./textbooks/选择性必修 第一册.pdf",
    intro: "以动量、振动、波动和光学为主，是高考综合性与图像性很强的板块。",
  },
  "选择性必修 第二册": {
    cover: "./assets/textbook-covers/选择性必修 第二册.png",
    pdf: "./textbooks/选择性必修 第二册.pdf",
    intro: "重点在电磁感应、交流电、传感器和电磁波应用。",
  },
  "选择性必修 第三册": {
    cover: "./assets/textbook-covers/选择性必修 第三册.png",
    pdf: "./textbooks/选择性必修 第三册.pdf",
    intro: "以分子动理论、气体、热力学定律和近代物理为主，注重概念边界和图像判断。",
  },
};

const topicFormulaGuide = {
  kinematics: "v̄ = Δx / Δt；a = Δv / t；v = v0 + at；x = v0 t + 1/2 at²；v² - v0² = 2ax",
  "forces-balance": "ΣF = 0；f = μN；先画受力图，再列平衡方程。",
  "newton-laws": "F = ma；ΣF_x = ma_x；ΣF_y = ma_y；整体法和隔离法配合使用。",
  "curved-motion": "v = rω；a_n = v² / r；F_n = mv² / r；GMm / r²。",
  "work-power": "W = Fs cosθ；P = W / t；P = Fv cosθ。",
  "mechanical-energy": "W合 = ΔE_k；E_p = mgh；E_k + E_p 守恒。",
  momentum: "p = mv；I = Ft；p前 = p后；碰撞与反冲常用。",
  "integrated-mechanics": "F = ma；W合 = ΔE_k；p前 = p后；按阶段切分模型。",
  "electric-field": "E = F / q；W = qU；匀强电场中 E = U / d。",
  circuits: "I = U / R；P = UI = I²R = U² / R；E = U + Ir。",
  "magnetic-field": "F = BIL；F = qvB；r = mv / (qB)。",
  induction: "Φ = BS；E = nΔΦ / Δt；E = BLv。",
  "oscillation-wave": "v = λf；f = 1 / T；Δφ = 2πΔx / λ。",
  optics: "n = sin i / sin r；sin C = 1 / n；Δx = Lλ / d。",
  thermal: "pV / T = C；ΔU = Q + W；状态量和过程量分开看。",
  "modern-physics": "E = hν；hν = W0 + Ek；N = N0(1/2)^(t/T)。",
  instruments: "v = Δx / Δt；a = Δx / T²；实验题先看器材和读数。",
  "data-processing": "k = Δy / Δx；b = y - kx；线性化是常见方法。",
  "error-analysis": "δ = |测量值 - 真实值| / 真实值；重点说清误差来源和方向。",
  "answer-expression": "本节以表达规范为主，重在对象、条件、规律、结论四步书写。",
};

const state = {
  activeId: chapters[0].items[0].id,
  query: "",
};

const els = {
  chapterNav: document.querySelector("#chapterNav"),
  knowledgeGrid: document.querySelector("#knowledgeGrid"),
  textbookMatrix: document.querySelector("#textbookMatrix"),
  flowTrack: document.querySelector("#flowTrack"),
  searchInput: document.querySelector("#searchInput"),
  backTop: document.querySelector("#backTop"),
  detailChapter: document.querySelector("#detailChapter"),
  detailTitle: document.querySelector("#detailTitle"),
  detailSummary: document.querySelector("#detailSummary"),
  detailCore: document.querySelector("#detailCore"),
  detailKeyPoints: document.querySelector("#detailKeyPoints"),
  detailWarnings: document.querySelector("#detailWarnings"),
  detailActions: document.querySelector("#detailActions"),
};

function allItems() {
  return chapters.flatMap((chapter) =>
    chapter.items.map((item) => ({
      ...item,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      phase: chapter.phase,
    }))
  );
}

function matchItem(item, query) {
  if (!query) return true;
  const bag = [
    item.title,
    item.summary,
    item.core,
    item.chapterTitle,
    item.phase,
    ...item.tags,
    ...item.keyPoints,
    ...item.warnings,
    ...item.actions,
  ].join(" ");
  return bag.toLowerCase().includes(query.toLowerCase());
}

function renderFlow() {
  els.flowTrack.innerHTML = flow
    .map(
      ([title, text], index) => `
        <article class="flow-step">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderTextbookMatrix() {
  if (!els.textbookMatrix) return;

  els.textbookMatrix.innerHTML = textbookAlignment
    .map(
      (book) => {
        const meta = textbookMeta[book.book] || {};
        const lessonCount = book.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
        return `
        <article class="book-card">
          <header class="book-card-head">
            <img src="${meta.cover}" alt="${book.book}封面" />
            <div class="book-head-copy">
              <span>人教版 PDF 与知识库</span>
              <h3>${book.book}</h3>
              <p>${meta.intro || "按教材章节整理知识点，作为课堂教学与复习查漏补缺的主轴。"}</p>
              <div class="book-actions">
                <a href="${meta.pdf}" target="_blank" rel="noreferrer">打开教材 PDF</a>
                <small>${book.chapters.length} 章 · ${lessonCount} 节</small>
              </div>
            </div>
          </header>
          <div class="book-chapters">
            ${book.chapters
              .map(
                (chapter) => `
                  <section class="textbook-chapter">
                    <h4>${chapter.title}</h4>
                    <div class="lesson-list">
                      ${chapter.lessons
                        .map(
                          ([lesson, points, topicId]) => `
                            <article class="lesson-card">
                              <div class="lesson-topline">
                                <h5>${lesson}</h5>
                                <a href="./topic.html?topic=${topicId}">${topicTitle(topicId)}</a>
                              </div>
                              <div class="lesson-knowledge">
                                <section>
                                  <b>教材核心</b>
                                  <p>${points}</p>
                                </section>
                                <section>
                                  <b>知识点展开</b>
                                  <ul>${lessonKnowledge(points, topicId).map((item) => `<li>${item}</li>`).join("")}</ul>
                                </section>
                                <section>
                                  <b>公式与模型</b>
                                  <p>${topicFormulaGuide[topicId] || "结合本节教材概念整理定义式、适用条件和图像意义。"}</p>
                                </section>
                                <section>
                                  <b>实验/图像</b>
                                  <p>${lessonExperiment(lesson, topicId)}</p>
                                </section>
                                <section>
                                  <b>易错与高考衔接</b>
                                  <p>${lessonExamLink(topicId)}</p>
                                </section>
                              </div>
                            </article>
                          `
                        )
                        .join("")}
                    </div>
                  </section>
                `
              )
              .join("")}
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function topicTitle(id) {
  return allItems().find((item) => item.id === id)?.title || "专题页";
}

function topicById(id) {
  return allItems().find((item) => item.id === id);
}

function lessonKnowledge(points, topicId) {
  const topic = topicById(topicId);
  const base = points
    .split("、")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
  const topicPoints = topic?.keyPoints?.slice(0, 3) || [];
  return [...new Set([...base, ...topicPoints])].slice(0, 6);
}

function lessonExperiment(lesson, topicId) {
  if (lesson.includes("实验")) {
    return "本节以教材实验为主，整理实验目的、器材、操作步骤、数据处理、误差来源和改进方法，课堂上建议保留原始数据表和图像分析。";
  }

  const map = {
    kinematics: "重点画 x-t、v-t 图像或运动过程草图，说明斜率、面积和交点的物理意义。",
    "forces-balance": "重点画受力图和力的分解图，标出接触面、弹力方向和摩擦力可能方向。",
    "newton-laws": "重点画受力图、加速度方向和过程分段表，实验内容可联系控制变量和 F-a 图像。",
    "curved-motion": "重点画轨迹、速度方向、分运动方向、圆心和半径，图像可联系平抛轨迹和圆周模型。",
    "work-power": "重点画力和位移方向，区分正功、负功、零功，并用图像或过程表表示能量转化。",
    "mechanical-energy": "重点用能量柱或起末状态表整理动能、势能和非保守力做功。",
    momentum: "重点用碰撞前后状态图、系统示意图和正方向约定表整理动量关系。",
    "electric-field": "重点画电场线、等势面和带电粒子运动轨迹，标出力与能量变化。",
    circuits: "重点画等效电路、实物连接图和 U-I 图像，关注斜率、截距和电表内阻。",
    "magnetic-field": "重点画磁场方向、速度方向、受力方向和圆周轨迹几何关系。",
    induction: "重点画磁通量变化过程、感应电流方向和能量转化链条，图像看变化率。",
    "oscillation-wave": "重点区分振动图像和波形图，标注周期、波长、传播方向和相位关系。",
    optics: "重点画法线、入射光、折射光、反射光和干涉条纹变化。",
    thermal: "重点画 p-V、p-T、V-T 图像和状态变化过程，区分状态量与过程量。",
    "modern-physics": "重点用图像和表格整理光电效应、能级跃迁、核反应守恒和半衰期规律。",
    instruments: "重点保留仪器图、读数图、数据表和误差分析表。",
    "data-processing": "重点建立表格、坐标轴、拟合直线、斜率截距和单位对应。",
    "error-analysis": "重点用误差来源表说明偏大偏小和改进方案。",
    "answer-expression": "重点用步骤模板呈现对象、条件、规律、方程和结论。",
  };
  return map[topicId] || "结合教材图像、装置图或过程草图，说明物理量之间的关系。";
}

function lessonExamLink(topicId) {
  const topic = topicById(topicId);
  const warnings = topic?.warnings?.slice(0, 2).join("；") || "概念边界、公式条件和规范表达";
  const actions = topic?.actions?.slice(0, 2).join("；") || "先审题再建模，最后检查单位和方向";
  return `广东高考常把本节放入情境、图像或实验中考查。易错点：${warnings}。训练建议：${actions}。`;
}

function renderNav() {
  const blocks = chapters
    .map((chapter) => {
      const matchedItems = chapter.items.filter((item) =>
        matchItem({ ...item, chapterTitle: chapter.title, phase: chapter.phase }, state.query)
      );

      if (!matchedItems.length) return "";

      const itemLinks = matchedItems
        .map(
          (item) => `
            <a class="nav-point nav-link ${item.id === state.activeId ? "is-active" : ""}" href="./topic.html?topic=${item.id}">
              ${item.title}
            </a>
          `
        )
        .join("");

      return `
        <section class="nav-section">
          <button class="nav-chapter" data-chapter="${chapter.id}" type="button">
            <span>${chapter.title}</span>
            <small>${chapter.phase}</small>
          </button>
          <div class="nav-points">${itemLinks}</div>
        </section>
      `;
    })
    .filter(Boolean);

  els.chapterNav.innerHTML = blocks.length
    ? blocks.join("")
    : '<p class="empty">没有找到匹配的知识点。</p>';
}

function renderGrid() {
  const blocks = chapters
    .map((chapter) => {
      const cards = chapter.items
        .filter((item) => matchItem({ ...item, chapterTitle: chapter.title, phase: chapter.phase }, state.query))
        .map(
          (item) => `
            <article id="card-${item.id}" class="knowledge-card link-card ${item.id === state.activeId ? "is-active" : ""}">
              <a class="card-link" href="./topic.html?topic=${item.id}">
                <span class="card-phase">${chapter.phase}</span>
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                <span class="tag-row">${item.tags.map((tag) => `<i>${tag}</i>`).join("")}</span>
                <span class="card-hint">进入专题页</span>
              </a>
            </article>
          `
        )
        .join("");

      if (!cards) return "";

      return `
        <section id="${chapter.id}" class="chapter-block">
          <div class="chapter-title">
            <span>${chapter.phase}</span>
            <h3>${chapter.title}</h3>
            <p>${chapter.theme}</p>
          </div>
          <div class="card-grid">${cards}</div>
        </section>
      `;
    })
    .filter(Boolean);

  els.knowledgeGrid.innerHTML = blocks.length
    ? blocks.join("")
    : '<p class="no-results">没有找到匹配的知识点，请换个关键词试试。</p>';
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function selectItem(id, shouldScroll = true) {
  const item = allItems().find((entry) => entry.id === id);
  if (!item) return;

  state.activeId = id;
  els.detailChapter.textContent = `${item.chapterTitle} · ${item.phase}`;
  els.detailTitle.textContent = item.title;
  els.detailSummary.textContent = item.summary;
  els.detailCore.textContent = item.core;
  renderList(els.detailKeyPoints, item.keyPoints);
  renderList(els.detailWarnings, item.warnings);
  renderList(els.detailActions, item.actions);

  renderNav();
  renderGrid();

  if (shouldScroll) {
    document.querySelector(".detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const pointButton = event.target.closest("[data-id]");
    if (pointButton) {
      selectItem(pointButton.dataset.id);
      return;
    }

    const chapterButton = event.target.closest("[data-chapter]");
    if (chapterButton) {
      const target = document.getElementById(chapterButton.dataset.chapter);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderNav();
    renderGrid();
  });

  els.backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

renderFlow();
renderTextbookMatrix();
renderNav();
renderGrid();
selectItem(state.activeId, false);
bindEvents();
