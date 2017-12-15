import React, {Component} from 'react';

class Todo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: [
				this.createTodo('Make a cake', false),
				this.createTodo('Go for beer', true),
			]
		}
	}

	createTodo(title, completed) {
		return {
			title: title,
			completed: completed,
		}
	}

	listTodos() {
		const list = this.state.todos.map((todo, index) =>
			<tr key={index}>
				<td>{todo.title}</td>
				<td><input type="checkbox" name="completed" checked={todo.completed}/></td>
				<td><input type="checkbox" name="remove"/></td>
			</tr>
		);

		return (
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Completed</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>{list}</tbody>
				<tfoot>
					<tr>
						<td><input type="text" name="title" placeholder="Buy new avr..." /></td>
						<td></td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tfoot>
			</table>
		)
	}

	render() {
		return (
			<div className="todo-wrapper">
				<div className="card">
					<h4 className="card-title">Your todo's:</h4>

					{this.listTodos()}
				</div>
			</div>
		);
	}
}

export default Todo;
