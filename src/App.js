import { BrowserRouter, Route } from 'react-router-dom';
import index from './view/default/index'
import page1 from './view/page1/index'
import page2 from './view/page2/index'

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={index} />
      <Route path="/page1" component={page1} />
      <Route path="/page2" component={page2} />
    </BrowserRouter>
  );
}

export default App;
