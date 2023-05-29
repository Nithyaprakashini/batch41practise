
import './App.css';
import ViewAllCustomers from './components/ViewAllCustomers';
import ViewAllEmployee from './components/ViewAllEmployee';
import ViewAllItem from './components/ViewAllItem';
import ViewAllMall from './components/ViewAllMall';
import ViewAllShop from './components/ViewAllShop';
import ViewAllUser from './components/ViewAllUser';
function App() {
  return (
    <div className="App">
      <ViewAllCustomers/>
      <ViewAllEmployee/>
      <ViewAllItem/>
      <ViewAllMall/>
      <ViewAllShop/>
      <ViewAllUser/>
    </div>
  );
}

export default App;
