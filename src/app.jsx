import {
  Button, Container, Field, TabBar, Link
} from 'amazeui-touch';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    //JSX here!
    return (
      <Container direction="column" id="pre-search-container">
       <Field
          // label="例如：输入“深圳中学”找到对口学校楼盘"
          containerClassName="jtx-search"
          placeholder="请输入学校关键字"
        />  


       <TabBar id="jtx-tabbar" amStyle="" >
         <TabBar.Item
           component={Link}
           icon="home"
           title="条目一"
          //  selected={router.isActive('/', true) }
          //  to="/"
           onlyActiveOnIndex
           />
         <TabBar.Item
           component={Link}
           icon="list"
           title="条目二"
           // badge="404"
           // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
          //  selected={router.isActive('/404', true) }
          //  to="/404"
           onlyActiveOnIndex
           />
         <TabBar.Item
           component={Link}
           icon="gear"
           title="条目三"
           // badge="404"
           // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
          //  selected={router.isActive('/about', true) }
          //  to="/about"
           onlyActiveOnIndex
           />
       </TabBar>

      </Container>
       
      
      // <Container direction="column" id="pre-search-container">  
        // <input type="text" placeholder="请输入学校关键字" class="field"></input>
      // </Container>
    )
  }
};



// // Pages
// import Index from './pages/Index';
// import Page from './pages/Page';

// // withRouter HoC
// // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
// const routes = (
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Index} />
//       <Route path=":page" component={Page} />
//     </Route>
//   </Router>
// );

// const app = document.createElement('div');
// document.body.appendChild(app);
ReactDOM.render(<App />, document.getElementById("app"));