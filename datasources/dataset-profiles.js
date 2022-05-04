/**
 * 全局及页面的数据源变量定义文件
 */

export default {
  "$global": {
    "state": {
      "pic": {
        "name": "pic",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "/resources/2022-04/lowcode-345230"
      },
      "esjy": {
        "name": "esjy",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetList",
          "params": {}
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "dbdx_w3c513v"
      },
      "name": {
        "name": "name",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "数学"
      },
      "dd_id": {
        "name": "dd_id",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "sp_id": {
        "name": "sp_id",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "wd_sp": {
        "name": "wd_sp",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "openid": {
        "name": "openid",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "chat_sp": {
        "name": "chat_sp",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "mj_name": {
        "name": "mj_name",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "my_name": {
        "name": "my_name",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "游客"
      },
      "sh_name": {
        "name": "sh_name",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "游客"
      },
      "sp_name": {
        "name": "sp_name",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "数学"
      },
      "tabData": {
        "name": "tabData",
        "label": "导航栏",
        "varType": "state",
        "dataType": "object",
        "initMethod": {},
        "initialValue": [
          {
            "icon": "https://main.qcloudimg.com/raw/2b3241bdfd368ad29247057a97f7316c.png",
            "name": "index",
            "title": "首页",
            "activeIcon": "https://main.qcloudimg.com/raw/4a16667b1deea588d2688568493b19fc.png"
          },
          {
            "icon": "https://main.qcloudimg.com/raw/365c1988298cb9a92767797885418a51.png",
            "name": "serviceList",
            "title": "服务",
            "activeIcon": "https://main.qcloudimg.com/raw/a756ff557eedf70f78297269a6bc0cc8.png"
          },
          {
            "icon": "https://main.qcloudimg.com/raw/08d6f5c8d0540d1afcb6bf5eeed73dba.png",
            "name": "reservation",
            "title": "预约",
            "activeIcon": "https://main.qcloudimg.com/raw/2943d5c7274987f2827f832438c1847c.png"
          },
          {
            "icon": "https://main.qcloudimg.com/raw/35dfc620442ea1d739cab550298a10df.png",
            "name": "mine",
            "title": "我的",
            "activeIcon": "https://main.qcloudimg.com/raw/c4ab5a80d207c0fafd5d3dcaf18b70b1.png"
          }
        ]
      },
      "pageSize": {
        "name": "pageSize",
        "label": "单页数量",
        "varType": "state",
        "dataType": "number",
        "initMethod": {},
        "initialValue": 8
      },
      "sh_phone": {
        "name": "sh_phone",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "请填写手机号码"
      },
      "shopInfo": {
        "name": "shopInfo",
        "label": "店铺信息",
        "varType": "state",
        "dataType": "object",
        "initMethod": {},
        "initialValue": {
          "logo": "null",
          "name": "",
          "location": {
            "address": null
          },
          "workTime": [],
          "telphones": ""
        }
      },
      "sh_address": {
        "name": "sh_address",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "请填写收货地址"
      },
      "chat_sp_name": {
        "name": "chat_sp_name",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "windowHeight": {
        "name": "windowHeight",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "1200px"
      },
      "contentHeight": {
        "name": "contentHeight",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "1200px"
      }
    },
    "params": {}
  },
  "index": {
    "state": {
      "sp": {
        "name": "sp",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "test"
      },
      "category": {
        "name": "category",
        "varType": "state",
        "dataType": "array",
        "initMethod": {},
        "initialValue": []
      },
      "shopInfo": {
        "name": "shopInfo",
        "label": "店铺信息",
        "varType": "state",
        "dataType": "object",
        "initMethod": {},
        "initialValue": {}
      },
      "imageList": {
        "name": "imageList",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "https://main.qcloudimg.com/raw/aa3300b19fb3b03c9a4912780369158e.png"
      },
      "footerInfo": {
        "name": "footerInfo",
        "label": "底部菜单信息",
        "varType": "state",
        "dataType": "array",
        "initMethod": {},
        "initialValue": [
          {
            "logo": "https://main.qcloudimg.com/raw/6dbfcc53f65ab86dbc518017784b696b.png",
            "index": "",
            "title": "首页"
          },
          {
            "logo": "https://main.qcloudimg.com/raw/6dbfcc53f65ab86dbc518017784b696b.png",
            "index": "",
            "title": "服务"
          },
          {
            "logo": "https://main.qcloudimg.com/raw/6dbfcc53f65ab86dbc518017784b696b.png",
            "index": "",
            "title": "预约"
          },
          {
            "logo": "https://main.qcloudimg.com/raw/6dbfcc53f65ab86dbc518017784b696b.png",
            "index": "",
            "title": "我的"
          }
        ]
      },
      "inputValue": {
        "name": "inputValue",
        "label": "搜索框值",
        "varType": "state",
        "dataType": "string",
        "initMethod": {}
      },
      "testHotList": {
        "name": "testHotList",
        "label": "测试热门列表",
        "varType": "state",
        "dataType": "array",
        "initMethod": {},
        "initialValue": [
          "1",
          "2",
          "3",
          "4"
        ]
      },
      "employeeList": {
        "name": "employeeList",
        "label": "美容专员列表",
        "varType": "state",
        "dataType": "array",
        "initMethod": {},
        "initialValue": []
      },
      "businessHours": {
        "name": "businessHours",
        "label": "营业时间",
        "varType": "state",
        "dataType": "string",
        "initMethod": {}
      },
      "topServerList": {
        "name": "topServerList",
        "label": "热门服务",
        "varType": "state",
        "dataType": "array",
        "initMethod": {},
        "initialValue": []
      }
    },
    "pageName": "首页"
  },
  "mine": {
    "state": {
      "isOpen": {
        "name": "isOpen",
        "varType": "state",
        "dataType": "boolean",
        "initMethod": {},
        "initialValue": false
      },
      "userInfo": {
        "name": "userInfo",
        "label": "用户信息",
        "varType": "state",
        "dataType": "object",
        "initMethod": {},
        "initialValue": {}
      }
    },
    "pageName": "我的"
  },
  "u_xiao_xi": {
    "state": {
      "blank": {
        "name": "blank",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "-1"
      },
      "wedaListMeta": {
        "name": "wedaListMeta",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetRecords",
          "params": {
            "pageNo": (app, $page) => (1),
            "pageSize": (app, $page) => (5)
          }
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "weda_block_list"
      }
    },
    "params": {},
    "pageName": "消息"
  },
  "u_she_zhi": {
    "state": {
      "wedaListMeta": {
        "name": "wedaListMeta",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetRecords",
          "params": {
            "pageNo": (app, $page) => (1),
            "pageSize": (app, $page) => (5)
          }
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "weda_block_list"
      }
    },
    "params": {},
    "pageName": "设置"
  },
  "u_ding_dan_dong_tai": {
    "state": {
      "timeLineShow": {
        "name": "timeLineShow",
        "varType": "state",
        "dataType": "array",
        "initMethod": {},
        "initialValue": [
          {
            "_id": 5,
            "icon": "https://main.qcloudimg.com/raw/b3e6c13b81d2844571973efa44233ba6.png",
            "title": "已签收",
            "remark": "2011-11-15",
            "hightLight": false,
            "pointColor": "#C5C5C5",
            "description": "已签收，欢迎再次选购"
          },
          {
            "_id": 4,
            "icon": "https://main.qcloudimg.com/raw/b3e6c13b81d2844571973efa44233ba6.png",
            "title": "运输中",
            "remark": "2011-11-14",
            "hightLight": false,
            "pointColor": "#C5C5C5",
            "description": "快递小哥正在运送快件，请注意接听电话"
          },
          {
            "_id": 3,
            "icon": "https://main.qcloudimg.com/raw/b3e6c13b81d2844571973efa44233ba6.png",
            "title": "运输中",
            "remark": "2011-11-13",
            "hightLight": false,
            "pointColor": "#C5C5C5",
            "description": "快件已到达深圳中转站"
          },
          {
            "_id": 2,
            "icon": "https://main.qcloudimg.com/raw/b3e6c13b81d2844571973efa44233ba6.png",
            "title": "已发货",
            "remark": "2011-11-12",
            "hightLight": false,
            "pointColor": "#C5C5C5",
            "description": "商家已发货，物流承运商：顺丰速运"
          },
          {
            "_id": 1,
            "icon": "https://main.qcloudimg.com/raw/32ed1a4f7c5987f49ae8271c2dc38ed3.png",
            "title": "订单已付款",
            "remark": "2011-11-11",
            "hightLight": true,
            "pointColor": "#0052D9",
            "description": "订单已付款，支付方式：微信支付"
          }
        ]
      },
      "dataByDataSource": {
        "name": "dataByDataSource",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetList",
          "params": {}
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "wada_tline_2butkmd"
      }
    },
    "params": {},
    "pageName": "订单动态"
  },
  "u_wo_de_ding_dan": {
    "state": {
      "wedaListMeta": {
        "name": "wedaListMeta",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetRecords",
          "params": {
            "pageNo": (app, $page) => (1),
            "pageSize": (app, $page) => (5)
          }
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "weda_block_list"
      }
    },
    "params": {},
    "pageName": "我的订单"
  },
  "u_shang_pin_xiang_qin_1": {
    "state": {},
    "params": {},
    "pageName": "商品详情"
  },
  "u_wo_de_shang_pin": {
    "state": {
      "sjmc": {
        "name": "sjmc",
        "label": "商家名称",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": "韩世龙"
      },
      "wedaListMeta": {
        "name": "wedaListMeta",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetRecords",
          "params": {
            "pageNo": (app, $page) => (1),
            "pageSize": (app, $page) => (5)
          }
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "weda_block_list"
      }
    },
    "params": {},
    "pageName": "我的商品"
  },
  "u_wo_de_shang_jia_sha": {
    "state": {},
    "params": {},
    "pageName": "我的上架商品"
  },
  "u_sou_suo_jie_guo": {
    "state": {
      "find2": {
        "name": "find2",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      },
      "wedaListMeta": {
        "name": "wedaListMeta",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetRecords",
          "params": {
            "pageNo": (app, $page) => (1),
            "pageSize": (app, $page) => (5)
          }
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "weda_block_list"
      }
    },
    "params": {},
    "pageName": "搜索结果"
  },
  "wap382l886g": {
    "state": {},
    "params": {},
    "pageName": "我的订单详情"
  },
  "u_gou_mai_jie_mian": {
    "state": {
      "data": {
        "name": "data",
        "varType": "state",
        "dataType": "array",
        "initMethod": {},
        "initialValue": [
          {
            "label": "员工ID",
            "value": "103423"
          },
          {
            "label": "姓名",
            "value": "张三"
          },
          {
            "label": "性别",
            "value": "男"
          },
          {
            "label": "民族",
            "value": "汉"
          },
          {
            "label": "出生日期",
            "value": "2000/01/01"
          },
          {
            "label": "户口类型",
            "value": "城镇户口"
          },
          {
            "label": "政治面貌",
            "value": "中共党员"
          },
          {
            "label": "英文名",
            "value": "zhangsan"
          },
          {
            "label": "籍贯",
            "value": "北京"
          },
          {
            "label": "婚姻情况",
            "value": "未婚"
          },
          {
            "label": "身份证",
            "value": "110100200001011234"
          }
        ]
      }
    },
    "params": {},
    "pageName": "支付界面"
  },
  "u_ce_shi": {
    "state": {},
    "pageName": "测试"
  },
  "u_liao_tian": {
    "state": {
      "chat": {
        "name": "chat",
        "varType": "datasource",
        "dataType": "record-collection",
        "initMethod": {
          "name": "wedaGetList",
          "params": {}
        },
        "updateMethod": {
          "name": "",
          "params": {}
        },
        "dataSourceName": "ltsj_3696ere"
      },
      "input": {
        "name": "input",
        "varType": "state",
        "dataType": "string",
        "initMethod": {},
        "initialValue": ""
      }
    },
    "pageName": "聊天"
  },
  "u_deng_lu": {
    "state": {},
    "pageName": "登录"
  },
  "u_shou_huo_xin_xi": {
    "state": {},
    "params": {},
    "pageName": "收货信息"
  },
  "wa6ps5nbr5lg": {
    "state": {},
    "params": {},
    "pageName": "我的商品详情"
  }
}
