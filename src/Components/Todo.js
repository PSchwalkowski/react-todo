import React, {Component} from 'react';

class Todo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: [
				this.createTodo('Make a cake', false),
				this.createTodo('Go for beer', false),
			]
		};

		this.handleCreateTodo = this.handleCreateTodo.bind(this);
		this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
		this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
	}

	/**
	 * pseudo model
	 *
	 * @param title
	 * @param completed
	 * @returns {{title: string, completed: boolean}}
	 */
	createTodo(title, completed) {
		return {
			title: title,
			completed: completed || false,
		}
	}

	listTodos() {
		const list = this.state.todos.map((todo, index) =>
			<tr key={index}>
				<td className={todo.completed? 'completed' : ''}>{todo.title}</td>
				<td><button name="complete" value={index} onClick={this.handleCompleteTodo}>V</button></td>
				<td><button name="remove" value={index} onClick={this.handleRemoveTodo}>X</button></td>
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
						<td><input type="text" name="title" placeholder="Buy new avr..." id="todo-title"/></td>
						<td></td>
						<td>
							<button type="submit" onClick={this.handleCreateTodo}>Create</button>
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

	handleCreateTodo() {
		const titleInput = document.getElementById('todo-title');

		if (!titleInput.value.length) {
			alert('Please provide todo title.');
			return;
		}

		const todos = this.state.todos;
		todos.push(
			this.createTodo(titleInput.value)
		);
		this.setState({
			todos: todos
		});

		titleInput.value = null;
	}

	handleCompleteTodo(event) {
		const button = event.target;

		const todos = this.state.todos.map((todo, index) => {
			if (button.value == index)
				todo.completed = !todo.completed;

			return todo;
		});

		this.setState({
			todos: todos
		});

		if (button.innerText === 'V')
			button.innerText = 'X';
		else
			button.innerText = 'V';
	}

	handleRemoveTodo(event) {
		const button = event.target;

		const todos = this.state.todos.filter((todo, index) => {
			if (button.value != index)
				return true;
		});

		this.setState({
			todos: todos
		});
	}
}

export default Todo;
