import React, {Component} from 'react'
import {ToDo} from "./ToDo";


class ToDoContainer extends Component {

  render() {type Props = {
    showSidebar: boolean | undefined;
    setShowSidebar: (showSidebar: any) => boolean | undefined | void;
  }

    return (
      <div>
        <ToDo />
      </div>
    )
  }
}


export default ToDoContainer;