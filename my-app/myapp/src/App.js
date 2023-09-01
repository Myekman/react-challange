// import logo from './logo.svg';
import './App.css';
import RenderingLists from './RenderingLists';
import Content from './Content';
import Searchbar from './Searchbar';

function App() {
    return <div className="App">
      {/* <Searchbar /> */}
    {/* <RenderingLists /> */}
    <Content />
  </div>;
  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
