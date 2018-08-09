
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import data from './data.json'
import { Table, Icon, Divider, Select } from 'antd';

const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  render: text => (
    <span>
      Age {text}
      <br/>
    <Select
        mode="multiple"
        style={{ width: '80%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
      </span>
  )
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];



ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('container'));
          