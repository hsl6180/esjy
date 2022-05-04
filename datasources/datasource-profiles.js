/**
 * 数据源摘要描述数组
 */
module.exports = [
  {
    "id": "data-22eNqthcs",
    "title": "聊天",
    "name": "cs_xvsguit",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-kind": "tcb",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "x-relatedType": "exist",
      "x-viewId": "view-2y2wdwuths",
      "required": [
        "nr",
        "fsf",
        "jsf"
      ],
      "properties": {
        "owner": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "9015ee8",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "owner"
        },
        "nr": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "b28a836",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 13,
          "title": "内容",
          "x-unique": false
        },
        "spmc": {
          "x-required": false,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "aff7abc",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 17,
          "title": "商品名称",
          "x-unique": false
        },
        "_departmentList": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "648903e",
          "format": "",
          "x-layoutShow": true,
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "x-unique": false,
          "default": "",
          "x-defaultSort": "asc",
          "name": "_departmentList",
          "items": {
            "type": "string"
          }
        },
        "spjg": {
          "x-required": false,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "bbb3129",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 19,
          "title": "商品价格",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "d140e51",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "828a2af",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "createBy"
        },
        "updateBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "93a079a",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "updateBy"
        },
        "fsf": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "78897b7",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 11,
          "title": "发送方",
          "x-unique": false
        },
        "spbs": {
          "x-required": false,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "9684d8e",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 9,
          "title": "商品标识",
          "x-unique": true
        },
        "_id": {
          "default": "",
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "4d3e714",
          "format": "",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "jsf": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "9eae7ff",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 15,
          "title": "接收方",
          "x-unique": false
        },
        "updatedAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "310ee63",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      }
    },
    "methods": []
  },
  {
    "id": "data-21ptg3hyi",
    "title": "我的订单",
    "name": "wddd_c1urxrm",
    "type": "database",
    "schema": {
      "x-primary-column": "spbs",
      "x-kind": "tcb",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "x-relatedType": "exist",
      "x-viewId": "view-2y1ykeaqxc",
      "required": [
        "mjmc",
        "spmc",
        "mj",
        "spjg",
        "spbs"
      ],
      "properties": {
        "mjmc": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "85942e3",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 33,
          "title": "买家名称",
          "x-unique": false
        },
        "owner": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "0a1dc7b",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "owner"
        },
        "createdAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "9f4e31d",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "626197c",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "createBy"
        },
        "updateBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "93a079a",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "updateBy"
        },
        "spmc": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "b396de9",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 35,
          "title": "商品名称",
          "x-unique": false
        },
        "_departmentList": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "a14c749",
          "format": "",
          "x-layoutShow": true,
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "x-unique": false,
          "default": "",
          "x-defaultSort": "asc",
          "name": "_departmentList",
          "items": {
            "type": "string"
          }
        },
        "spbs": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "a54abf1",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 37,
          "title": "商品标识",
          "x-unique": false
        },
        "_id": {
          "default": "",
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "5ff1ab8",
          "format": "",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "mj": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "bd17274",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 25,
          "title": "卖家",
          "x-unique": false
        },
        "spjg": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "ac269a0",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 29,
          "title": "商品价格",
          "x-unique": false
        },
        "updatedAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "b25bcaf",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      }
    },
    "methods": []
  },
  {
    "id": "data-210QSKQKc",
    "title": "getOpenid",
    "name": "getopenid_bj9dmxn",
    "type": "cloud-integration",
    "schema": {},
    "methods": [
      {
        "name": "getopenid",
        "type": "cloud-function"
      }
    ]
  },
  {
    "id": "data-210MBqAXf",
    "title": "用户信息",
    "name": "userinfo_921rlqd",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-kind": "tcb",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "x-relatedType": "exist",
      "x-viewId": "view-2wzl43aen4",
      "required": [],
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "02b8771",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "country": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "a7ed5aa",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 13,
          "title": "国家",
          "x-unique": false
        },
        "gender": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "6d584c9",
          "format": "",
          "description": "",
          "type": "number",
          "x-index": 15,
          "title": "性别",
          "x-unique": false
        },
        "avatarUrl": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "7820be9",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 9,
          "title": "头像",
          "x-unique": false
        },
        "city": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "6f2831f",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 11,
          "title": "城市",
          "x-unique": false
        },
        "nickName": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "91f5c05",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 19,
          "title": "昵称",
          "x-unique": false
        },
        "openid": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "ae6a2d9",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 23,
          "title": "openid",
          "x-unique": false
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "880f274",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "language": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "9d14079",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 17,
          "title": "语言",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "1ff817a",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "446b938",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "province": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "659b8c1",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 21,
          "title": "省",
          "x-unique": false
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "b57025b",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "1873f90",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      }
    },
    "methods": []
  },
  {
    "id": "data-20XPnu38V",
    "title": "聊天数据-舍弃",
    "name": "ltsj_3696ere",
    "type": "database",
    "schema": {
      "x-primary-column": "spbs",
      "x-kind": "tcb",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "x-relatedType": "exist",
      "x-viewId": "view-2y3fi4dkgg",
      "required": [
        "sender",
        "text",
        "jsf"
      ],
      "properties": {
        "owner": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "5307f18",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "owner"
        },
        "spmc": {
          "x-required": false,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "8a45f57",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 17,
          "title": "商品名称",
          "x-unique": true
        },
        "_departmentList": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "6fd741c",
          "format": "",
          "x-layoutShow": true,
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "x-unique": false,
          "default": "",
          "x-defaultSort": "asc",
          "name": "_departmentList",
          "items": {
            "type": "string"
          }
        },
        "spjg": {
          "x-required": false,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "9e7f713",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 17,
          "title": "商品价格",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "18fc0a9",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "8f4ab1f",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "createBy"
        },
        "sender": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "9dd8d62",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 9,
          "title": "发送方",
          "x-unique": false
        },
        "updateBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "93a079a",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "updateBy"
        },
        "text": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "b0ee1b7",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 9,
          "title": "文本",
          "x-unique": false
        },
        "spbs": {
          "x-keyPath": "",
          "x-sortable": false,
          "x-id": "be94b70",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "isEnum": false,
          "type": "string",
          "x-index": 19,
          "title": "商品标识",
          "x-unique": true,
          "x-required": false,
          "x-defaultSort": "asc",
          "name": "spbs"
        },
        "_id": {
          "default": "",
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "a263e99",
          "format": "",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "jsf": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "96b3f00",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 17,
          "title": "接收方",
          "x-unique": false
        },
        "updatedAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "7269746",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      }
    },
    "methods": []
  },
  {
    "id": "data-20HRSwB53",
    "title": "微搭基础表单模板数据",
    "name": "weda_form_vc48wno",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-kind": "tcb",
      "name": "basic_form_jtxixba",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "微搭基础表单模板数据",
      "x-relatedType": "exist",
      "x-viewId": "view-2wqgi7on8w",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "8138a93",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "storeType": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "a2664a2",
          "name": "storeType",
          "format": "",
          "x-index": 10,
          "title": "店铺类型",
          "type": "string",
          "x-unique": false
        },
        "servicePhone": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "89b15cd",
          "name": "servicePhone",
          "format": "",
          "x-index": 20,
          "title": "客服电话",
          "type": "number",
          "x-unique": false
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "17b0038",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "businessHours": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "804aeda",
          "name": "businessHours",
          "format": "date",
          "x-index": 16,
          "title": "营业时间",
          "type": "number",
          "x-unique": false
        },
        "mainBusiness": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "b6026ce",
          "name": "mainBusiness",
          "format": "",
          "x-index": 12,
          "title": "主营业务",
          "type": "string",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "f2117e0",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "ffa6a90",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "storeImages": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "9a9b796",
          "name": "storeImages",
          "format": "",
          "x-index": 26,
          "title": "店铺图标",
          "type": "string",
          "x-unique": false
        },
        "storeAddress": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "a69a313",
          "name": "storeAddress",
          "x-index": 14,
          "title": "店铺地址",
          "type": "array",
          "x-unique": false,
          "items": {
            "enumOptions": [],
            "format": "",
            "type": "string"
          }
        },
        "storeProfile": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "b8761ea",
          "name": "storeProfile",
          "format": "",
          "x-index": 22,
          "title": "店铺简介",
          "type": "string",
          "x-unique": false
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "storeName": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "726a438",
          "name": "storeName",
          "format": "",
          "x-index": 8,
          "title": "店铺名称",
          "type": "string",
          "x-unique": false
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "efb375a",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "e72ebf7",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": []
    },
    "methods": []
  },
  {
    "id": "data-20HB0Um1y",
    "title": "我的商品",
    "name": "wdsp_0uftxx6",
    "type": "database",
    "schema": {
      "x-primary-column": "wdsp",
      "x-kind": "tcb",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "x-relatedType": "exist",
      "x-viewId": "view-2xca7szlj4",
      "required": [
        "wdsp",
        "mj"
      ],
      "properties": {
        "mjmc": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "93952f2",
          "format": "",
          "name": "mjmc",
          "description": "",
          "isEnum": false,
          "type": "string",
          "x-index": 9,
          "title": "买家名称",
          "x-unique": false
        },
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "563c801",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "693faab",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "sptp": {
          "x-keyPath": "",
          "x-id": "7032b1b",
          "format": "x-image",
          "description": "",
          "isEnum": false,
          "type": "string",
          "x-index": 11,
          "title": "商品图片",
          "x-unique": false,
          "x-image-size": 10485760,
          "x-required": false,
          "name": "sptp",
          "x-image-support": [
            "image/png",
            "image/jpeg"
          ]
        },
        "spjg": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "735974f",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 13,
          "title": "商品价格",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "452e81f",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "6ca0d18",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "spms": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "61d6449",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 17,
          "title": "商品描述",
          "x-unique": true
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "f9726fe",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "wdsp": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "9c87aa1",
          "name": "wdsp",
          "format": "",
          "isEnum": false,
          "description": "",
          "x-index": 1,
          "title": "商品名称",
          "type": "string",
          "x-unique": true
        },
        "mj": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "a2a1fc3",
          "format": "",
          "description": "",
          "type": "string",
          "x-index": 15,
          "title": "卖家",
          "x-unique": true
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "983aacb",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      }
    },
    "methods": []
  },
  {
    "id": "data-20Eo9pesr",
    "title": "时间轴区块数据",
    "name": "wada_tline_2butkmd",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-kind": "tcb",
      "name": "timeline_dy4qppj",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "时间轴区块数据",
      "x-relatedType": "exist",
      "x-viewId": "view-2wol9rp380",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "1a54a0e",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "ad382fe",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "icon": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "9e9854c",
          "format": "",
          "x-index": 14,
          "title": "节点图标",
          "type": "string",
          "x-unique": false
        },
        "description": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "a0916d5",
          "format": "",
          "x-index": 8,
          "title": "节点描述",
          "type": "string",
          "x-unique": false
        },
        "remark": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "a87575d",
          "format": "",
          "x-index": 10,
          "title": "节点备注",
          "type": "string",
          "x-unique": false
        },
        "title": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "735202a",
          "format": "",
          "x-index": 12,
          "title": "节点标题",
          "type": "string",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "a2ef6ca",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "d2d1a75",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "06f135c",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "hightLight": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "b75737f",
          "format": "",
          "x-index": 16,
          "title": "高亮节点",
          "type": "boolean",
          "x-unique": false
        },
        "pointColor": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "60d75c2",
          "format": "",
          "x-index": 18,
          "title": "节点颜色",
          "type": "string",
          "x-unique": false
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "360a2ca",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": []
    },
    "methods": []
  },
  {
    "id": "data-20a5mtfGZ",
    "title": "用户数据",
    "name": "yhsj_vq6v42m",
    "type": "database",
    "schema": {
      "x-primary-column": "yhmc",
      "x-kind": "tcb",
      "name": "yhsj_vq6v42m",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "用户数据",
      "x-relatedType": "exist",
      "x-viewId": "view-2wqc0cxmds",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "4cea396",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "f02dd30",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "9d3862a",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "yhsp": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "ac4f35a",
          "format": "",
          "description": "",
          "type": "object",
          "x-index": 15,
          "title": "用户商品",
          "x-unique": false,
          "properties": {
            "spmc": {
              "x-required": false,
              "x-keyPath": "",
              "x-id": "baa58b3",
              "format": "",
              "name": "spmc",
              "description": "",
              "isEnum": false,
              "pId": "ac4f35a",
              "type": "string",
              "x-index": 13,
              "title": "商品名称",
              "x-unique": true
            },
            "sptp": {
              "x-keyPath": "",
              "x-id": "7d1e0d7",
              "format": "x-image",
              "description": "",
              "isEnum": false,
              "pId": "ac4f35a",
              "type": "string",
              "x-index": 13,
              "title": "商品图片",
              "x-unique": true,
              "x-image-size": 3145728,
              "x-required": false,
              "name": "sptp",
              "x-image-support": [
                "image/jpeg",
                "image/png"
              ]
            },
            "spjg": {
              "x-required": false,
              "x-keyPath": "",
              "x-id": "b4f57a2",
              "format": "",
              "name": "spjg",
              "description": "",
              "isEnum": false,
              "pId": "ac4f35a",
              "type": "string",
              "x-index": 13,
              "title": "商品价格",
              "x-unique": true
            }
          },
          "required": []
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "yhdd": {
          "x-keyPath": "",
          "x-id": "926b50e",
          "format": "",
          "description": "",
          "isEnum": false,
          "type": "object",
          "x-index": 13,
          "title": "用户订单",
          "x-unique": false,
          "required": [],
          "x-required": false,
          "name": "yhdd",
          "properties": {
            "ddtp": {
              "x-keyPath": "",
              "x-id": "66ad54e",
              "format": "x-image",
              "description": "",
              "isEnum": false,
              "pId": "926b50e",
              "type": "string",
              "x-index": 13,
              "title": "订单图片",
              "x-unique": true,
              "x-image-size": 3145728,
              "x-required": false,
              "name": "ddtp",
              "x-image-support": [
                "image/png",
                "image/jpeg"
              ]
            },
            "ddjg": {
              "x-required": false,
              "x-keyPath": "",
              "x-id": "8ec1b20",
              "format": "",
              "name": "ddjg",
              "description": "",
              "isEnum": false,
              "pId": "926b50e",
              "type": "string",
              "x-index": 13,
              "title": "订单价格",
              "x-unique": true
            },
            "ddmc": {
              "x-required": false,
              "x-keyPath": "",
              "x-id": "787dc73",
              "format": "",
              "name": "ddmc",
              "description": "",
              "isEnum": false,
              "pId": "926b50e",
              "type": "string",
              "x-index": 13,
              "title": "订单名称",
              "x-unique": true
            }
          }
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "9361f04",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "yhtx": {
          "x-image-size": 3145728,
          "x-required": false,
          "x-keyPath": "",
          "x-id": "9cfbdcf",
          "format": "x-image",
          "description": "",
          "x-image-support": [
            "image/jpeg",
            "image/png"
          ],
          "type": "string",
          "x-index": 9,
          "title": "用户头像",
          "x-unique": true
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "15fe24b",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "yhmc": {
          "x-required": true,
          "x-keyPath": "",
          "x-id": "bd70428",
          "format": "",
          "name": "yhmc",
          "description": "",
          "isEnum": false,
          "type": "string",
          "x-index": 11,
          "title": "用户名称",
          "x-unique": true
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "1530f3c",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": [
        "yhmc"
      ]
    },
    "methods": []
  },
  {
    "id": "data-208FrcMce",
    "title": "列表区块数据",
    "name": "weda_block_list",
    "type": "database",
    "schema": {
      "x-primary-column": "_id",
      "x-kind": "tcb",
      "name": "weda_block_list",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "列表区块数据",
      "x-relatedType": "exist",
      "x-viewId": "view-2wu2qt1nu8",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "e08b7e4",
          "name": "owner",
          "format": "father-son",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "c8b55ea",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "ccc9b07",
          "name": "createBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "father-son",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          }
        },
        "_departmentList": {
          "default": "",
          "x-system": true,
          "x-id": "dc1a55d",
          "format": "",
          "name": "_departmentList",
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "items": {
            "type": "string"
          },
          "x-unique": false
        },
        "name": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "79aab18",
          "format": "cnName",
          "x-index": 10,
          "title": "名称",
          "type": "string",
          "x-unique": false
        },
        "avator": {
          "x-image-size": 1048576,
          "x-required": false,
          "x-keyPath": "",
          "x-id": "740f6a4",
          "format": "x-image",
          "x-image-support": [
            "image/jpeg",
            "image/tif",
            "image/bmp",
            "image/png",
            "image/tiff"
          ],
          "x-index": 8,
          "title": "头像",
          "type": "string",
          "x-unique": false
        },
        "description": {
          "x-required": false,
          "x-keyPath": "",
          "x-id": "8eb476d",
          "format": "",
          "x-index": 12,
          "title": "说明信息",
          "type": "string",
          "x-unique": false
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "a5cb3ba",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "9690447",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": []
    },
    "methods": []
  },
  {
    "id": "data-206CxDckE",
    "title": "二手交易后端",
    "name": "dbdx_w3c513v",
    "type": "database",
    "schema": {
      "x-primary-column": "spmc",
      "x-kind": "tcb",
      "name": "dbdx_w3c513v",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "二手交易后端",
      "x-relatedType": "exist",
      "x-viewId": "view-2y3ha642q8",
      "properties": {
        "mjmc": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "7d59032",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 21,
          "title": "卖家名称",
          "x-unique": false
        },
        "owner": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "660a709",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "owner"
        },
        "createdAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "176b20b",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "4635acb",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "createBy"
        },
        "updateBy": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "93a079a",
          "format": "father-son",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false,
          "x-parent": {
            "fatherAction": "judge",
            "parentViewId": "view-2w6m1dw0i8",
            "type": "father-son",
            "parentDataSourceName": "sys_user"
          },
          "default": "",
          "x-defaultSort": "asc",
          "name": "updateBy"
        },
        "spmc": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "b7e0c86",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 11,
          "title": "商品名称",
          "x-unique": false
        },
        "spms": {
          "x-required": false,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "af1f1d5",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 23,
          "title": "商品描述",
          "x-unique": false
        },
        "_departmentList": {
          "x-system": true,
          "x-sortable": false,
          "x-id": "f122897",
          "format": "",
          "x-layoutShow": true,
          "title": "所属部门",
          "type": "array",
          "x-index": 7,
          "x-unique": false,
          "default": "",
          "x-defaultSort": "asc",
          "name": "_departmentList",
          "items": {
            "type": "string"
          }
        },
        "_id": {
          "default": "",
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "34c48a2",
          "format": "",
          "pattern": "",
          "x-layoutShow": true,
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "sptp": {
          "x-keyPath": "",
          "x-sortable": false,
          "x-id": "af87ff2",
          "format": "x-image",
          "description": "",
          "isEnum": false,
          "x-layoutShow": true,
          "type": "string",
          "x-index": 9,
          "title": "商品图片",
          "x-unique": false,
          "x-image-size": 10485760,
          "x-required": true,
          "x-defaultSort": "asc",
          "name": "sptp",
          "x-image-support": [
            "image/jpeg",
            "image/png"
          ]
        },
        "spjg": {
          "x-required": true,
          "x-keyPath": "",
          "x-defaultSort": "asc",
          "x-sortable": false,
          "x-id": "607dc97",
          "format": "",
          "description": "",
          "x-layoutShow": true,
          "type": "string",
          "x-index": 19,
          "title": "商品价格",
          "x-unique": false
        },
        "updatedAt": {
          "default": 0,
          "x-defaultSort": "asc",
          "x-system": true,
          "x-sortable": false,
          "x-id": "41a4d91",
          "format": "datetime",
          "x-layoutShow": true,
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      },
      "required": [
        "spmc",
        "sptp",
        "spjg",
        "mjmc"
      ]
    },
    "methods": []
  },
  {
    "id": "data-206AJgMZP",
    "title": "美业模板数据源",
    "name": "businessBeauty",
    "type": "cloud-integration",
    "schema": {},
    "methods": [
      {
        "name": "getShop",
        "type": "cloud-function"
      },
      {
        "name": "updateShop",
        "type": "cloud-function"
      },
      {
        "name": "checkUserExist",
        "type": "cloud-function"
      },
      {
        "name": "getUser",
        "type": "cloud-function"
      },
      {
        "name": "updateUser",
        "type": "cloud-function"
      },
      {
        "name": "addEmployee",
        "type": "cloud-function"
      },
      {
        "name": "fetchEmployeeList",
        "type": "cloud-function"
      },
      {
        "name": "updateEmployee",
        "type": "cloud-function"
      },
      {
        "name": "delEmployee",
        "type": "cloud-function"
      },
      {
        "name": "addServCategory",
        "type": "cloud-function"
      },
      {
        "name": "delServCategory",
        "type": "cloud-function"
      },
      {
        "name": "getAllServCategory",
        "type": "cloud-function"
      },
      {
        "name": "createServ",
        "type": "cloud-function"
      },
      {
        "name": "publishServe",
        "type": "cloud-function"
      },
      {
        "name": "getServ",
        "type": "cloud-function"
      },
      {
        "name": "updateServ",
        "type": "cloud-function"
      },
      {
        "name": "fetchServList",
        "type": "cloud-function"
      },
      {
        "name": "addReserve",
        "type": "cloud-function"
      },
      {
        "name": "operateReserve",
        "type": "cloud-function"
      },
      {
        "name": "fetchReserveList",
        "type": "cloud-function"
      },
      {
        "name": "delServ",
        "type": "cloud-function"
      },
      {
        "name": "getReservedInfo",
        "type": "cloud-function"
      },
      {
        "name": "fetchTopServList",
        "type": "cloud-function"
      },
      {
        "name": "getEmployee",
        "type": "cloud-function"
      },
      {
        "name": "updateReserve",
        "type": "cloud-function"
      }
    ]
  },
  {
    "id": "data-205ZtrTZ7",
    "title": "用户",
    "name": "sys_user",
    "type": "database",
    "childDataSourceNames": [
      "dbdx_w3c513v",
      "weda_block_list",
      "yhsj_vq6v42m",
      "wada_tline_2butkmd",
      "wdsp_0uftxx6",
      "weda_form_vc48wno",
      "ltsj_3696ere",
      "userinfo_921rlqd",
      "wddd_c1urxrm",
      "cs_xvsguit"
    ],
    "schema": {
      "x-primary-column": "name",
      "x-kind": "tcb",
      "name": "sys_user",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "预制用户",
      "x-relatedType": "exist",
      "x-viewId": "view-2w6m1dw0i8",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "034f71b",
          "name": "owner",
          "format": "",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false
        },
        "open_id": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "9b49ecc",
          "format": "",
          "x-index": 22,
          "title": "微信id",
          "type": "string",
          "x-unique": false
        },
        "source": {
          "x-required": true,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "cac7853",
          "format": "",
          "x-index": 38,
          "title": "用户来源",
          "type": "number",
          "x-unique": false
        },
        "type": {
          "x-required": true,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "7c5c6fb",
          "format": "",
          "x-index": 12,
          "title": "用户类型",
          "type": "number",
          "x-unique": false
        },
        "uuid": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "9753d6f",
          "format": "",
          "x-index": 20,
          "title": "uuid",
          "type": "string",
          "x-unique": false
        },
        "user_desc": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "9a55084",
          "format": "",
          "x-index": 24,
          "title": "用户描述",
          "type": "string",
          "x-unique": false
        },
        "wechat_user_id": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "b38707c",
          "format": "",
          "x-index": 40,
          "title": "企业微信用户id",
          "type": "string",
          "x-unique": false
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "41444a7",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "2f68de1",
          "name": "createBy",
          "format": "",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false
        },
        "env_id": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "64b4305",
          "format": "",
          "x-index": 28,
          "title": "env_id",
          "type": "string",
          "x-unique": false
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false
        },
        "project_id": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "78d9d5e",
          "format": "",
          "x-index": 30,
          "title": "项目id",
          "type": "number",
          "x-unique": false
        },
        "phone": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "860acca",
          "format": "",
          "x-index": 44,
          "title": "手机号",
          "type": "string",
          "x-unique": false
        },
        "nick_name": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "75d6703",
          "format": "",
          "x-index": 26,
          "title": "用户昵称",
          "type": "string",
          "x-unique": false
        },
        "name": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "807f2ae",
          "format": "",
          "x-index": 10,
          "title": "用户名称",
          "type": "string",
          "x-unique": false
        },
        "internal_user_type": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "a9e2769",
          "format": "",
          "x-index": 14,
          "title": "内部用户类型",
          "type": "number",
          "x-unique": false
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "a0c7822",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "uin": {
          "x-required": true,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "60dd113",
          "format": "",
          "x-index": 16,
          "title": "集团用户id",
          "type": "string",
          "x-unique": false
        },
        "corp_id": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "6d924b1",
          "format": "",
          "x-index": 36,
          "title": "企业id",
          "type": "string",
          "x-unique": false
        },
        "sub_uin": {
          "x-required": true,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "6938a05",
          "format": "",
          "x-index": 18,
          "title": "子用户id",
          "type": "string",
          "x-unique": false
        },
        "email": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "7e5fec6",
          "format": "",
          "x-index": 42,
          "title": "邮箱",
          "type": "string",
          "x-unique": false
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "6d6ba38",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        }
      }
    },
    "methods": []
  },
  {
    "id": "data-205Ztt3dG",
    "title": "部门",
    "name": "sys_department",
    "type": "database",
    "schema": {
      "x-primary-column": "departmentName",
      "x-kind": "tcb",
      "name": "sys_department",
      "x-defaultMethods": [
        "wedaCreate",
        "wedaUpdate",
        "wedaDelete",
        "wedaGetItem",
        "wedaGetRecords",
        "wedaGetList",
        "wedaBatchCreate",
        "wedaBatchUpdate",
        "wedaBatchDelete"
      ],
      "type": "object",
      "title": "部门-内置数据源",
      "x-relatedType": "exist",
      "x-viewId": "view-2w6m1e0ej4",
      "properties": {
        "owner": {
          "default": "",
          "x-system": true,
          "x-id": "54e8cdd",
          "name": "owner",
          "format": "",
          "pattern": "",
          "x-index": 4,
          "title": "所有人",
          "type": "string",
          "x-unique": false
        },
        "departmentName": {
          "x-required": true,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "aef4ad4",
          "format": "",
          "x-index": 10,
          "title": "部门名称",
          "type": "string",
          "x-unique": true
        },
        "createdAt": {
          "default": 0,
          "x-system": true,
          "x-id": "b9e752a",
          "format": "datetime",
          "x-index": 2,
          "type": "number",
          "title": "创建时间",
          "x-unique": false
        },
        "departmentOwnerList": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "681c532",
          "x-index": 14,
          "title": "部门负责人",
          "type": "array",
          "x-unique": false,
          "items": {
            "enumOptions": [],
            "format": "",
            "type": "string"
          }
        },
        "createBy": {
          "default": "",
          "x-system": true,
          "x-id": "948d854",
          "name": "createBy",
          "format": "",
          "pattern": "",
          "x-index": 5,
          "type": "string",
          "title": "创建人",
          "x-unique": false
        },
        "updateBy": {
          "default": "",
          "x-system": true,
          "x-id": "93a079a",
          "name": "updateBy",
          "format": "",
          "pattern": "",
          "x-index": 6,
          "type": "string",
          "title": "修改人",
          "x-unique": false
        },
        "departmentParentCode": {
          "x-required": false,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "958f9d4",
          "format": "",
          "x-index": 12,
          "title": "上级部门",
          "type": "string",
          "x-unique": false
        },
        "departmentCode": {
          "x-required": true,
          "x-keyPath": "",
          "x-system": true,
          "x-id": "905d2b9",
          "format": "",
          "x-index": 8,
          "title": "部门编码",
          "type": "string",
          "x-unique": true
        },
        "_id": {
          "default": "",
          "x-system": true,
          "x-id": "0447c3b",
          "format": "",
          "pattern": "",
          "x-index": 1,
          "type": "string",
          "title": "数据标识",
          "x-unique": true
        },
        "updatedAt": {
          "default": 0,
          "x-system": true,
          "x-id": "7ed50ad",
          "format": "datetime",
          "x-index": 3,
          "title": "更新时间",
          "type": "number",
          "x-unique": false
        },
        "depth": {
          "default": "",
          "x-id": "c98b663",
          "name": "depth",
          "format": "",
          "pattern": "",
          "x-index": 11,
          "title": "节点深度",
          "type": "number",
          "x-unique": false,
          "x-system": true,
          "x-required": false
        }
      }
    },
    "methods": []
  }
]
