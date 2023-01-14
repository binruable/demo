export default {
  // page1部分
  page1: {
    titleEn: "Hello,I'm WangBinru", //英文标题
    title: '恰同学少年，风华正茂', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫王宾如，26岁，目前在紫光展锐（天津）做测试', // 幸会
    jiguan:'湖南衡阳',
    xingge: '开朗乐观', // 性格
    guanyuwo: '从小生活在南方小城市，2014年开始在北方求学，不知不觉在北方待了八个年头。' +
        '目前自己掌握一些测试技巧、积累了一些开发经验。希望可以和大家一起学习，共同进步！' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: '测试需求提取与分析',
    msg: ['业务需求','用户需求','功能需求']
  },{
    icon: 'icon-diannao', // 图标
    title: '测试设计', // 标题
    msg: ['测试方案', '测试用例',] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '测试用例执行与回归',
    msg: ['自动化测试', '冒烟测试']
  },  {
    icon: 'icon-shouji',
    title: 'Bug提交与管理',
    msg: ['提交有价值Bug']
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2014/9——2018/6', // 时间
      desc: { // 经历
        title: '天津理工大学（本科）',
        list: ['校宣传部成员', '爱好篮球', '本学院乒乓球比赛八强', '校三好学生', 'CET-4']
      }
    }, {
      date: '2018/9——2021/6',
      desc: {
        title: '天津理工大学（硕士）',
        list: ['"硕博杯"篮球比赛冠军', '全国计算机等级二级证书', '一等学业奖学金', '志愿者证书']
      }
    }, {
      date: '2021/6——至今',
      desc: {
        title: '紫光展锐（天津）有限公司',
        list: ['紫光展锐闪耀之星', '测试部优秀员工', '紫光展锐最佳新人奖']
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'HTML、CSS',
      text: '掌握'
    }, {
      title: 'JS、JQ',
      text: '了解'
    }, {
      title: 'Vue',
      text: '了解'
    }, {
      title: '算法',
      text: '了解'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'Python',
      value: '90%'
    }, {
      title: '测试方法',
      value: '90%'
    }, {
      title: 'Android',
      value: '80%'
    }, {
      title: 'Java',
      value: '80%'
    }, {
      title: 'sql',
      value: '80%'
    }]
  },
  // page5部分
  page5: [{
    title: '个人博客搭建',
    content: '日常学习记录',
    image: 'box1.png',
    href: 'https://binruable.github.io/Vue_Todo_List/'
  }, {
    title: '填充工具',
    content: 'Android联系人、短信、电话、邮箱填充工具',
    image: 'box3.jpg',
    href: 'http://binruable.github.io/src/img/fill_in.jpg'
  }, {
    title: '数据结构与算法',
    content: '日常算法练习（java与pythob）',
    image: 'box5.jpg',
    href: 'https://leetcode.cn/u/binru/'
  }, {
    title: '非接触式心率估计',
    content: '硕士期间研究课题',
    image: 'box2.png',
    href: 'https://github.com/binruable/residual-3dcnn-rPPG'
  }, {
    title: '轮播图',
    image: 'box4.png',
    href: "https://binruable.github.io/demo/"
  },{
    title: 'TodoList',
    image: 'img.png',
    href: "https://binruable.github.io/"
  }],
  // page6部分
  page6: {
    github: 'https://github.com/binruable',
    bili: 'https://space.bilibili.com/318953330/',
    email: '752685348@qq.com',
    zhihu: 'https://www.zhihu.com/people/wang-bin-ru-93',
    weixin: "<img style='width:120px' src='../src/img/wx.jpg' alt='加载失败'>",
    qq: "<img style='width:120px' src='../src/img/QQ.png' alt='加载失败'>"
  }
}
