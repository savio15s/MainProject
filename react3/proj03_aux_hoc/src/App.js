import logo from './logo.svg';
import './App.css';
import MyAdd from './component/MyAdd';
import EnhancedLikes from './component/hoc/LikesComponent';
import EnhancedComments from './component/hoc/CommentsComponent';
import ProductsListWithSearch from './component/hoc2/ProductsListWithSearch';
import DataListWithSearch from './component/hoc2/DataListWithSearch';
import ProductsList from './component/hoc2/ProductsList';


function App() {

  const ProductsListWithSearch = DataListWithSearch(ProductsList);

  return (
    <div className="App">
      <header className="App-header">
        <ProductsListWithSearch/>
        <hr/>
        <MyAdd/>
        <hr/>
        <EnhancedLikes/>
        <hr/>
        <EnhancedComments/>
      </header>
    </div>
  );
}

export default App;
