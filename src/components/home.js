import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import StepOne from './step-one'
import StepTwo from './step-two'
import StepThree from './step-three'
import StepFour from './step-four'

class HomeLayout extends React.Component {
  render(){
    return(
      <div className="container">
        <header>
          <nav>
            <NavLink to="/step-one" activeClassName="active">1</NavLink>
            <NavLink to="/step-two" activeClassName="active">2</NavLink>
            <NavLink to="/step-three" activeClassName="active">3</NavLink>
            <NavLink to="/step-four" activeClassName="active">4</NavLink>
          </nav>
        </header>
        <main>
          <Switch> 
            <Route exact path="/step-one" component={StepOne} />
            <Route path="/step-two" component={StepTwo} />
            <Route path="/step-three" component={StepThree} />
            <Route path="/step-four" component={StepFour} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default HomeLayout;