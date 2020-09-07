import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  schema: {
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
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const templates = [
  {
    text: '模板1',
    name: 'something',
    schema: {
      title: '对象',
      description: '这是一个对象类型',
      type: 'object',
      properties: {
        inputName: {
          title: '简单输入框',
          type: 'string',
        },
        selectName: {
          title: '单选',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['早', '中', '晚'],
        },
        dateName: {
          title: '时间选择',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Generator defaultValue={defaultValue} templates={templates} />
    </div>
  );
};

export default Demo;
