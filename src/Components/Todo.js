
export default class Todo {

	constructor(title, completed) {
		this.title = title;
		this.completed = completed || false;
	}

	isCompleted() {
		return this.completed;
	}
}
