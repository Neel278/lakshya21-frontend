import React from 'react';

import './LiveDesk.scss';

const data = [
  {
    department: 'Comp/IT',
    name: 'Neel',
    email: 'Neel12345640@gmail.com',
    meet: 'https://meet.google.com/rao-otqu-aci',
  },
  {
    department: 'Computer',
    name: 'Kaushik Prajapati, Om Raval and Darshan',
    email: 'computer@gmail.com',
    meet: '/',
  },
  {
    department: 'Civil',
    name: 'Om',
    email: 'Om@gmail.com',
    meet: '/',
  },
  {
    department: 'Chemical',
    name: 'Patni Parth',
    email: 'chem_lakshyafest@gmail.com ',
    meet: '/',
  },
  {
    department: 'Chemical',
    name: 'Patni Parth',
    email: 'chem_lakshyafest@gmail.com ',
    meet: '/',
  },
  {
    department: 'Chemical',
    name: 'Patni Parth',
    email: 'chem_lakshyafest@gmail.com ',
    meet: '/',
  },
  {
    department: 'Chemical',
    name: 'Patni Parth',
    email: 'chem_lakshyafest@gmail.com ',
    meet: '/',
  },
  {
    department: 'Chemical',
    name: 'Patni Parth',
    email: 'chem_lakshyafest@gmail.com ',
    meet: '/',
  },
  {
    department: 'Comp/IT',
    name: 'Neel',
    email: 'Neel12345640@gmail.com',
    meet: 'https://meet.google.com/rao-otqu-aci',
  },
];

function LiveDesk() {
  return (
    <div className="live">
      <div className="live__heading">
        <h1>Live Desk</h1>
      </div>

      <table className="live__table">
        <thead>
          <th>Department</th>
          <th>Name</th>
          <th>Email</th>
          <th>G - Meet</th>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr>
              <td data-label="Department">{item.department}</td>
              <td data-label="Name">{item.name}</td>
              <td data-label="Email">{item.email}</td>
              <td data-label="G-Meet">
                <a href={item.meet} className="live__table--join">
                  Join Meet
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LiveDesk;
