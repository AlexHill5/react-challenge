import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function SubmitButton({ onClick, disabled }) {
    return ( 
        <div style={{ height: '20px', display: 'flex', flexDirection: 'column', marginRight: '10px', justifyContent: 'start', alignItems: 'center'}}>
            <Button 
                onClick={onClick} 
                type="primary" 
                icon={<SearchOutlined />}
                disabled={disabled}
            >
                Search
            </Button>
        </div>
     );
}

export default SubmitButton;