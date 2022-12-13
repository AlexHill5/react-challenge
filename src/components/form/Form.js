import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import { Typography } from 'antd';
import './form.css'

const { Title } = Typography;

function FormInfo({ congressPerson }) {
  const [congressPersonInfo, updateCongressPersonInfo] = useState(null)

  useEffect(() => {
    updateCongressPersonInfo(congressPerson)
 }, [congressPerson])

    return (
      <div>
        <Title>Info</Title>

        { congressPersonInfo ? 
          <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
              <Input disabled={true} placeholder="First Name" value={congressPerson.name.split(' ')[0]}/>
              <Input disabled={true} style={{ marginTop: '10px'}} placeholder="Last Name" value={congressPerson.name.split(' ')[1]}/>
              <Input disabled={true} style={{ marginTop: '10px'}} placeholder="District" value={congressPersonInfo.district}/>
              <Input disabled={true} style={{ marginTop: '10px'}} placeholder="Phone" value={congressPersonInfo.phone}/>
              <Input disabled={true} style={{ marginTop: '10px'}} placeholder="Office" value={congressPersonInfo.office}/>
          </div>


        : 
        <div></div>
        }
      </div>

      );
}

export default FormInfo;