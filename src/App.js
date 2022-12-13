import React from 'react';
import { Layout } from 'antd';
import Dropdown from './components/dropdown/Dropdown'
import './reset.css'
import { useState } from 'react';
import SubmitButton from './components/button/Button';
import axios from 'axios'
import TableInfo from './components/table/TableInfo'
import FormInfo from './components/form/Form';

const { Header, Content, } = Layout;
const App = () => {

  const [congressPersonType, updateCongressPersonType] = useState(null);
  const [state, updateState] = useState(null);
  const [congressPersons, updateCongressPersons] = useState([]);
  const [selectedCongressPerson, UpdateSelectedCongressPerson] = useState(null);


  const fetchCongressPersons = async () => {
    updateCongressPersons([]);
    selectCongressPerson(null);
    if(congressPersonType === 'representative') {
      const representatives = await axios.get(`http://localhost:3000/representatives/${state}`);
      console.log(representatives);
      updateCongressPersons(representatives.data.results);
    } else {
      const representatives = await axios.get(`http://localhost:3000/senators/${state}`);
      updateCongressPersons(representatives.data.results);
    }
  }

  const selectCongressPerson = (value) => {
    UpdateSelectedCongressPerson(null)
    UpdateSelectedCongressPerson(value)
  }

  return (
    <Layout>
      <Header
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '6rem', backgroundColor: 'white'}}
      >
        <Dropdown
          label={'Congress Person Type'}
          options={congressPersonTypes}
          onChange={updateCongressPersonType}
        />
        <Dropdown
          label={'State'}
          options={states}
          onChange={updateState}
        />
        <SubmitButton onClick={() => fetchCongressPersons()} disabled={congressPersonType && state ? false : true}/>
      </Header>
      <Content>
        <div
          className="site-layout-content"
          style={{
            padding: '0 50px 0 50px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{
            width: '45%',
            marginRight: '10px',
          }}>
            <TableInfo congressPersonType={congressPersonType} congressPersons={congressPersons} onClick={(value) => selectCongressPerson(value)} />
          </div>

          <div style={{
            width: '45%',
            marginLeft: '10px',
          }}>
            {selectedCongressPerson ? <FormInfo congressPerson={selectedCongressPerson} /> : <></>}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const congressPersonTypes = [
  {
      label: 'Representative',
      value: 'representative'
  },
  {
      label: 'Senator',
      value: 'senator'
  }
]

const states = [
  { value: 'AK', label: 'Alaska'},
  { value: 'TX', label: 'Texas'},
  { value: 'AL', label: 'Alabama'},
  { value: 'AR', label: 'Arkansas'},
  { value: 'AZ', label: 'Arizona'},
  { value: 'CA', label: 'California'},
  { value: 'CO', label: 'Colorado'},
  { value: 'CT', label: 'Connecticut'},
  { value: 'DC', label: 'DistrictofColumbia'},
  { value: 'DE', label: 'Delaware'},
  { value: 'FL', label: 'Florida'},
  { value: 'GA', label: 'Georgia'},
  { value: 'HI', label: 'Hawaii'},
  { value: 'IA', label: 'Iowa'},
  { value: 'ID', label: 'Idaho'},
  { value: 'IL', label: 'Illinois'},
  { value: 'IN', label: 'Indiana'},
  { value: 'KS', label: 'Kansas'},
  { value: 'KY', label: 'Kentucky'},
  { value: 'LA', label: 'Louisiana'},
  { value: 'MA', label: 'Massachusetts'},
  { value: 'MD', label: 'Maryland'},
  { value: 'ME', label: 'Maine'},
  { value: 'MI', label: 'Michigan'},
  { value: 'MN', label: 'Minnesota'},
  { value: 'MO', label: 'Missouri'},
  { value: 'MS', label: 'Mississippi'},
  { value: 'MT', label: 'Montana'},
  { value: 'NC', label: 'NorthCarolina'},
  { value: 'ND', label: 'NorthDakota'},
  { value: 'NE', label: 'Nebraska'},
  { value: 'NH', label: 'NewHampshire'},
  { value: 'NJ', label: 'NewJersey'},
  { value: 'NM', label: 'NewMexico'},
  { value: 'NV', label: 'Nevada'},
  { value: 'NY', label: 'NewYork'},
  { value: 'OH', label: 'Ohio'},
  { value: 'OK', label: 'Oklahoma'},
  { value: 'OR', label: 'Oregon'},
  { value: 'PA', label: 'Pennsylvania'},
  { value: 'RI', label: 'RhodeIsland'},
  { value: 'SC', label: 'SouthCarolina'},
  { value: 'SD', label: 'SouthDakota'},
  { value: 'TN', label: 'Tennessee'},
  { value: 'TX', label: 'Texas'},
  { value: 'UT', label: 'Utah'},
  { value: 'VA', label: 'Virginia'},
  { value: 'VT', label: 'Vermont'},
  { value: 'WA', label: 'Washington'},
  { value: 'WI', label: 'Wisconsin'},
  { value: 'WV', label: 'WestVirginia'},
  { value: 'WY', label: 'Wyoming'}
  ];
export default App;