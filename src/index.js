
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
  dataIndex: 'user_name',
  key: 'user_name',
  render: text => <a href="javascript:;">{text}</a>,
},
{
  title: 'Email',
  dataIndex: 'user_username',
  key: 'user_username',
}, {
  title: 'Role',
  dataIndex: 'user_division',
  key: 'user_division',
  render: text => (
    <span>
      {text}
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
  title: 'Company',
  dataIndex: 'user_current_company',
  key: 'user_current_company',
  render: text => (
    <span>
      {text}
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
  title: 'Supervisor',
  key: 'supervisor',
  render: () => (
    <span>
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
          