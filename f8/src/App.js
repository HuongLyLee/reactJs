import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Binding from './Binding';
import Todo from './Todo';
import Content from './Content';
import Test from './Test';

function App() {
  const [info, setInfo] = useState({
      name: 'Nguyen Van A',
      age: 18,
      address: 'Ha Noi, VN'
  })

  const handleUpdate =() => {
      setInfo({
          ...info,
          bio: 'Doc than'
      })

      // setInfo( prev => ({
      //     ...prev,
      //     bio: 'yeu mau hong'
      // }))
  }

  useEffect(() => {
    console.log(info)
  },[info])

  return (
    <div className="App">
        <h1> {JSON.stringify(info)} </h1>
        <button onClick={handleUpdate}> Update </button>

        <Binding />

        <Todo />

        <Content />

        <Test />
        
    </div>
  );
}

export default App;




// Ví dụ khác : random 
// import { useState } from 'react';

// const gifts = [
//     'CPU i9',
//     'RAM 32GB RGB',
//     'RGB Keyboard',
// ]

// function Binding() {

//     const[gift, setGift] = useState(null)

//     const randomGift = () => {
//         const index = Math.floor(Math.random() * gifts.length)

//         setGift(gifts[index]);
//     }

//     return (
//         <div>
//             <h1> {gift || 'Chưa có phần thưởng'} </h1>
//             <button onClick={randomGift}> Lấy thưởng </button>
//         </div>
//     )
// }

// export default Binding;