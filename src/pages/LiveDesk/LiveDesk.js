import React from 'react';

import './LiveDesk.scss';

const data = [
  {
    department: 'CODESTERS',
    email: 'comp.it.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/vyt-smqi-aut',
  },
  {
    department: 'ELECTROBUZZ',
    email: 'ec.ic.ee.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/ixr-mnrn-oca',
  },
  {
    department: 'CHEMSTROM',
    email: 'chemical.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/bjj-puzs-gjx',
  },
  {
    department: 'CIVILUSION',
    email: 'civil.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/tmy-absu-eyz',
  },
  {
    department: 'MECHNOVA',
    email: 'mechanical.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/qvg-hhsw-nio',
  },
  {
    department: 'ROBO-SAPIENS',
    email: 'robotics.lakshya2021@gmail.com',
  },
  {
    department: 'MINDSPARK',
    email: 'literary.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/gem-jbtv-nph',
  },
  {
    department: 'CARNIVAL-O-FUN',
    email: 'fun.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/cft-jepd-yyy',
  },
  {
    department: 'WORKSHOPS',
    email: 'workshop.lakshya2021@gmail.com',
    meet: 'https://meet.google.com/rho-pcin-jnu',
  },
];

function LiveDesk() {
  return (
    <div className="live">
      Live Desk
      <div className="live__heading">
        <h1>Live Desk</h1>
      </div>
      <table className="live__table">
        <thead>
          <th>Department</th>
          <th>G - Meet</th>
        </thead>

        <tbody>
          {data.map(
            (item, index) =>
              item.meet && (
                <tr>
                  <td data-label="Department">{item.department}</td>
                  <td data-label="G-Meet">
                    <a href={item.meet} className="live__table--join">
                      Join Meet
                    </a>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      {/* Info Desk */}
      <div className="live__heading">
        <h1>Info Desk</h1>
      </div>
      <table className="live__table">
        <thead>
          <th>Department</th>
          {/* <th>Name</th> */}
          <th>Email</th>
          {/* <th>G - Meet</th> */}
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr>
              <td data-label="Department">{item.department}</td>
              <td data-label="Email">{item.email}</td>
              {/* <td data-label="G-Meet">
                <a href={item.meet} className="live__table--join">
                  Join Meet
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* General desk part */}
      <div className="live__heading">
        <h1>General Desk</h1>
      </div>
      <table className="live__table">
        <thead>
          <th>Name</th>
          <th>Email</th>
        </thead>

        <tbody>
          <tr>
            <td data-label="Name">Parth</td>
            <td data-label="Email">parthpatni22@gmail.com</td>
          </tr>
          <tr>
            <td data-label="Name">Jainil</td>
            <td data-label="Email">jainilvora1234@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LiveDesk;
