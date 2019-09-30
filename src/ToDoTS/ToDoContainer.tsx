import React, {Component} from 'react'
import {ToDo} from "./ToDo";

interface Props {
	showSidebar: boolean;
	setShowSidebar: (showSidebar: any) => boolean | undefined | void;
}

class ToDoContainer extends Component<Props> {


	render() {

		return (
			<div>
				<ToDo showSidebar={this.props.showSidebar} setShowSidebar={this.props.setShowSidebar}/>
			</div>
		)
	}
}


export default ToDoContainer;