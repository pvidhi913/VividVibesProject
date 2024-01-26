
import './Home.css';
import ChildHome from './ChildHome'
import ImageOne from './ImageOne'
import ImageTwo from './ImageTwo'
import ImageThree from './ImageThree'
import TextBox from './TextBox'


function Home() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <ImageOne />
      <ChildHome></ChildHome>
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default Home;
