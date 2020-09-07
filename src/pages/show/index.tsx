import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// 使用 Ant Design 风格
import FormRender from 'form-render/lib/antd';
// 使用 Fusion Design 风格
// import FormRender from "form-render/lib/fusion";

const data = {
  schema: {
    type: 'object',
    properties: {
      inputDemo: {
        title: '长度',
        type: 'string',
        pattern: '^[A-Za-z0-9]+$',
        message: {
          pattern: '请输入正确格式',
        },
      },
      numberDemo: {
        title: '数字',
        description: '数字输入框',
        type: 'number',
        min: 10,
        max: 100,
        step: 10,
      },
      textareaDemo: {
        title: '输入框',
        type: 'string',
      },
      imgDemo: {
        title: '图片',
        type: 'string',
        format: 'image',
        default:
          'https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png',
      },
      uploadDemo: {
        title: '文件上传',
        type: 'string',
        default:
          'https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png',
      },
      disabledDemo: {
        title: '不可用',
        type: 'string',
        default: '我是一个被 disabled 的值',
      },
      enumDemo: {
        title: '枚举',
        type: 'string',
        enum: ['A', 'B'],
        enumNames: [
          '养成',
          "<span style='background-color: black;display: inline-block;vertical-align: text-top;width: 48px;height: 24px;margin-top:-2px;color:white; border: 1px solid #ddd;'>试试</span>",
        ],
      },
      dateDemo: {
        title: '时间',
        format: 'dateTime',
        type: 'string',
      },
      objDemo: {
        title: '单个对象',
        description: '这是一个对象类型',
        type: 'object',
        properties: {
          isLike: {
            title: '是否显示颜色选择',
            type: 'boolean',
            default: true,
          },
          background: {
            title: '颜色选择',
            description: '特殊面板',
            format: 'color',
            type: 'string',
          },
          wayToTravel: {
            title: '旅行方式',
            type: 'string',
            enum: ['self', 'group'],
            enumNames: ['自驾', '跟团'],
          },
          canDrive: {
            title: '是否拥有驾照',
            type: 'boolean',
            default: false,
          },
        },
        required: ['background'],
      },
      multiSelectDemo: {
        title: '多选组件',
        description: '多选功能',
        type: 'array',
        items: {
          type: 'string',
        },
        enum: ['A', 'B', 'C', 'D'],
        enumNames: ['杭州', '武汉', '湖州', '贵阳'],
      },
      custom: {
        properties: {
          payType: {
            title: '支付方式',
            description: '',
            type: 'array',
            items: {
              type: 'string',
            },
            enum: ['1', '5', '6'],
            enumNames: ['预付', '面付', '信用住'],
          },
        },
        type: 'object',
        required: ['payType'],
        title: '酒店行业限制',
        name: 'custom',
      },
      arrDemo: {
        title: '对象数组',
        description: '对象数组嵌套功能',
        type: 'array',
        minItems: 1,
        maxItems: 3,
        items: {
          type: 'object',
          properties: {
            num: {
              title: '数字参数',
              description: 'number类型',
              type: 'number',
            },
            name: {
              title: '字符名称',
              description: 'string类型',
              type: 'string',
              pattern: '^[A-Za-z0-9]+$',
            },
          },
        },
      },
    },
    required: ['textareaDemo', 'dateDemo', 'multiSelectDemo'],
  },
  uiSchema: {
    inputDemo: {
      'ui:className': 'input-with-px',
      'ui:options': {
        addonAfter: 'px',
      },
    },
    textareaDemo: {
      'ui:widget': 'textarea',
      'ui:button': {
        text: '测试',
        icon: '',
        callback: 'clg',
      },
    },
    disabledDemo: {
      'ui:disabled': true,
    },
    enumDemo: {
      'ui:width': '50%',
    },
    dateDemo: {
      'ui:widget': 'date',
      'ui:width': '50%',
    },
    uploadDemo: {
      'ui:widget': 'upload',
      'ui:action': 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    },
    objDemo: {
      background: {
        'ui:hidden': '{{rootValue.isLike === false}}',
        'ui:widget': 'color',
      },
      wayToTravel: {
        'ui:widget': 'radio',
      },
      canDrive: {
        'ui:hidden': "{{rootValue.wayToTravel !== 'self'}}",
      },
    },
    multiSelectDemo: {
      'ui:widget': 'multiSelect',
    },
    arrDemo: {
      'ui:options': {
        foldable: true,
        hideDelete: '{{rootValue.length === 1}}',
      },
      items: {
        name: {
          'ui:disabled': '{{rootValue.num === 3}}',
        },
      },
      'ui:extraButtons': [
        {
          text: '复制',
          icon: 'copy',
          callback: 'copyLast',
        },
      ],
    },
  },
  formData: {
    inputDemo: '750',
    numberDemo: '',
    textareaDemo: 'FormRender\nHello World!',
    imgDemo:
      'https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png',
    uploadDemo:
      'https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png',
    disabledDemo: '我是一个被 disabled 的值',
    enumDemo: 'A',
    dateDemo: '2018-11-22',
    objDemo: {
      isLike: true,
      background: '#ffff00',
      wayToTravel: 'self',
      canDrive: false,
    },
    multiSelectDemo: ['C', 'D'],
    custom: {
      payType: [],
    },
    arrDemo: [
      {
        num: 10,
        name: '表单渲染',
      },
      {
        num: '',
        name: '',
      },
    ],
  },
};
const schema = {
  type: 'object',
  properties: {
    checkbox_BZCqWy: {
      title: '是否选择',
      type: 'boolean',
    },
    checkbox_Ik65bK: {
      title: '是否选择',
      type: 'boolean',
      'ui:widget': 'switch',
    },
    date_hHfz0B: {
      title: '日期选择',
      type: 'string',
      format: 'date',
    },
    textarea_5CEvT8: {
      title: '编辑框',
      type: 'string',
      format: 'textarea',
    },
    number_BZPtcy: {
      title: '数字输入框',
      type: 'number',
    },
    checkbox_Q25lYa: {
      title: '是否选择',
      type: 'boolean',
      'ui:widget': 'switch',
    },
    radio_qzqamV: {
      title: '单选',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['早', '中', '晚'],
      'ui:widget': 'radio',
    },
    checkboxes_lD11OM: {
      title: '多选',
      description: '点击多选',
      type: 'array',
      items: {
        type: 'string',
      },
      enum: ['A', 'B', 'C', 'D'],
      enumNames: ['杭州', '武汉', '湖州', '贵阳'],
    },
    multiSelect_ablTzV: {
      title: '多选',
      description: '下拉多选',
      type: 'array',
      items: {
        type: 'string',
      },
      enum: ['A', 'B', 'C', 'D'],
      enumNames: ['杭州', '武汉', '湖州', '贵阳'],
      'ui:widget': 'multiSelect',
    },
    dateRange_J6ZNSX: {
      title: '日期范围',
      type: 'range',
      format: 'dateTime',
      'ui:options': {
        placeholder: ['开始时间', '结束时间'],
      },
    },
    image_v3fzVz: {
      title: '图片展示',
      type: 'string',
      format: 'image',
    },
    color_ftq2Ll: {
      title: '颜色选择',
      type: 'string',
      format: 'color',
    },
    slider_IMES5N: {
      title: '带滑动条',
      type: 'number',
      'ui:widget': 'slider',
    },
    object_2gpMZX: {
      title: '对象',
      type: 'object',
    },
  },
};

// const schema = {
//   type: 'object',
//   properties: {
//     string: {
//       title: '字符串',
//       type: 'string',
//       'ui:disabled': true,
//     },
//     select: {
//       title: '单选',
//       type: 'string',
//       enum: ['a', 'b', 'c'],
//       enumNames: ['早', '中', '晚'],
//       'ui:width': '50%', // uiSchema 合并到 schema 中（推荐写法，书写便捷）
//     },
//     select1: {
//       title: '单选1',
//       type: 'string',
//       enum: ['a', 'b', 'c'],
//       enumNames: ['早', '中', '晚'],
//       'ui:width': '50%', // uiSchema 合并到 schema 中（推荐写法，书写便捷）
//     },
//   },
// };

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);

  const onSubmit = () => {
    // valid 是校验判断的数组，valid 长度为 0 代表校验全部通过
    if (valid.length > 0) {
      alert(`校验未通过字段：${valid.toString()}`);
    } else {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <FormRender
        // schema={schema}
        // formData={formData}
        {...data}
        onChange={setData}
        onValidate={setValid}
        displayType="row" // 详细配置见下
      />
      <button onClick={onSubmit}>提交</button>
    </div>
  );
}

export default Demo;
