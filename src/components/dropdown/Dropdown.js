import { Select } from 'antd'
import './Dropdown.css'

function Dropdown({ options, label, onChange }) {
    return (
        <div style={{ height: '20px', display: 'flex', flexDirection: 'column', marginRight: '10px', justifyContent: 'start', alignItems: 'center'}}>
            <Select 
                style={ { width: "10rem" } }
                options={options}
                onChange={onChange}
                placeholder={label}
            />
        </div>
      );
}

export default Dropdown;