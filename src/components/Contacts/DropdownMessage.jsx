import {Component} from "react";

class DropdownMessage extends Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="DropdownMessage">
        <p> Contact ... has been already added </p>
        <button
          type="button"
          className="DropdownMessageToggle"
          onClick={this.toggle}
        >
          OK
        </button>
      </div>
    );
  }
}
export default DropdownMessage;