import React, { useEffect, useMemo, useState } from 'react'

let renderCont = 0;
let userTypeChanged = 0;

export default function Part2() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');

  const userType = { underAge: age < 18, citizen: country === 'Brazil' } // Renders everytime. But it doesnt have expensive calculations.
  // const userType = useMemo(() => ({ underAge: age < 18, citizen: country === 'Brazil' }), [age, country]) // Renders only with dependecies.

  const addUserTypeChanged = () => { userTypeChanged++ };

  useEffect(() => addUserTypeChanged(), [userType])

  renderCont++;
  return (
    <>
      <p> Renderizado: {renderCont}</p>
      <p> userTypeChanged: {userTypeChanged}</p>
      <label htmlFor='name'>Name: </label>
      <input
        onChange={e => setName(e.target.value)}
        type='text'
        id='name'
        placeholder='Name'
      />
      <br />
      <label htmlFor='name'>Age: </label>
      <input
        onChange={e => setAge(parseInt(e.target.value))}
        type='number'
        id='age'
        placeholder='Age'
      />
      <br />
      <label htmlFor='name'>Country: </label>
      <select
        title="Country:"
        id="country"
        placeholder='Country'
        onChange={e => setCountry(e.target.value)}
      >
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="France">France</option>
        <option value="Brazil">Brazil</option>
        <option value="Canada">Canada</option>
      </select>
    </>
  )
}
