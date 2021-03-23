import React,{useEffect, useState} from 'react';
import './App.css';

function App() {

  const [person, setPerson ] = useState([]);

  const Api = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    setPerson(users);
    
  }


  useEffect(() => {
      Api()
  }, [])

  return (
    <div>
      <h1>Personas - API</h1>
      <table>
        <tr className="tr">
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Web</th>
        </tr>
        {person.map((user) =>(
          <tr className="tr" key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
