var React = require("react");

// This exercise is a bit bigger than the previous ones.
// We will make a reactive grocery list.
//
// Task: Fill the `return` of `GroceryList` render method. It should return
//       a list of `GroceryListItem`. You need to display the groceries names
//       using `this.props` in `GroceryListItem`. We already prepared the variable
//       `groceriesComponents` inside `render` method containing a list of these items for you.

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [ { name: "Apples" } ]
    };
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.groceries.map((grocery, i) =>
            <GroceryListItem
              grocery={grocery}
              key={i}
            />
          )
        }
        </ul>
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.grocery.name}</li>
    );
  }
}

export default GroceryList;
