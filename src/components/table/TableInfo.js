import React from 'react';
import { Table } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

function TableInfo({ congressPersons, congressPersonType, onClick }) {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Party',
          dataIndex: 'party',
          key: 'party',
        },
      ];

    return (
        <div>
            <Title>List / { congressPersonType ? congressPersonType.charAt(0).toUpperCase() + congressPersonType.slice(1) : '' }</Title>
            {
                <Table
                  pagination={false} 
                  columns={columns} 
                  dataSource={congressPersons} 
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: (event) => { onClick(record) },
                    };
                  }}
                />
            }
        </div>
     );
}

export default TableInfo;