import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Product from './tabs/Product'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Product', render: () => <Tab.Pane className='tab'><Product /></Tab.Pane> },
  { menuItem: 'Group', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Rule', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Properties', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
  { menuItem: 'Test Cases', render: () => <Tab.Pane>Tab 5 Content</Tab.Pane> },
  { menuItem: 'Logging', render: () => <Tab.Pane>Tab 6 Content</Tab.Pane> },
]

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  
  render(){
    return(
      <Tab panes={panes} />
    );
  }
}


// ========================================

ReactDOM.render(
  <div>
    <Test />
  </div>,
  document.getElementById('root')
);
