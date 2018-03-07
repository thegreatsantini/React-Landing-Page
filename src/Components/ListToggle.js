import React, { Component } from "react";

class ToggleList extends Component {
    constructor() {
        super()
        this.state = {
            toggled: false
        }
    }

    render() {
        return (
            <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
        )
    }
}

export default ToggleList;