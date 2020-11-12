import React from "react";
import "./css/App.scss";
import Navigation from "./components/Navigation";
import ToDosContainer from "./components/ToDosContainer";
import ToDonesContainer from "./components/ToDonesContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
//User interface (UI) unit (Component)

class App extends React.Component {
  state = {
    todoItems: [
      { id: 0, text: "Breakfast", done: false },
      { id: 1, text: "Start Lesson", done: false },
      { id: 2, text: "Live coding", done: false },
      { id: 3, text: "Lunch break", done: false },
      { id: 4, text: "Coding Practice", done: true },
      { id: 5, text: "Exercises", done: true },
      { id: 6, text: "Project", done: true },
    ],
  };

  addItem = (value) => {
    console.log(this, "this is from App");
    let item = { id: this.state.todoItems.length, text: value, done: false };
    let copystate = [...this.state.todoItems];
    copystate.push(item);
    this.setState({
      todoItems: copystate,
    });
    /*  this.setState({
        todoItems:[...this.state.todoItems, item]
      }) */
  };

  updateItem = (id) => {
    let updatedItems = this.state.todoItems.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });

    this.setState({
      todoItems: updatedItems,
    });
  };

  render() {
    let toDos = this.state.todoItems.filter((item) => !item.done);
    let toDones = this.state.todoItems.filter((item) => item.done);
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          {/*  <Route path="/" render={(props)=><div ><ToDosContainer
              {...props}
              toDos={toDos}
              addItem={this.addItem}
              updateItem={this.updateItem}
            />
            <ToDonesContainer 
            {...props}
            toDones={toDones} updateItem={this.updateItem} /></div>}/>
 */}
{/*  switch(condition){
    case 1:
    case 2:
    default:
 } */}
          <Switch>
            <Route exact path="/">
              <ToDosContainer
                toDos={toDos}
                addItem={this.addItem}
                updateItem={this.updateItem}
              />
              <ToDonesContainer
                toDones={toDones}
                updateItem={this.updateItem}
              />
            </Route>

            <Route path="/about" component={About} />
            <Route component={NotFound}/> {/* "Default Case" */}
         </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
