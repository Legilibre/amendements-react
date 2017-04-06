import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import logo from './logo.svg';
import './App.css';

class AddItem extends React.Component {

	handleAdd(e) {

		var val = this._inputElement.value.trim();

		if (val !== ''){
			this.props.addItem(this._inputElement.value);
		}

		this._inputElement.value = "";

		e.preventDefault();
	}

	render() {

		return(
			<section>
				<form onSubmit={this.handleAdd.bind(this)}>
					<input	placeholder="enter task"
							ref={(a) => this._inputElement = a}>
					</input>
					<button type="submit">add</button>
				</form>
			</section>
		);
	}
}

class ListItem extends React.Component {

	handleClick (item, e) {

		this.props.removeItem(item);
	}

	handleChange (item, e) {

		this.props.toggleCheck(item);
	}

	render () {

		var items = this.props.items,
			listItems;

		if (items.length !== 0) {

			listItems = items.map(createTasks.bind(this));

			function createTasks(item) {

				return (

					<li key={item.key}>
						<label for={item.key}>
							<input 	type="checkbox"
									id={item.key}
									checked={item.checked}
									data-checked={item.checked}
									onChange={this.handleChange.bind(this,item)}/>
						<p>{item.text}</p>
						</label>
						<span onClick={this.handleClick.bind(this,item)}>x</span>
					</li>
				);
			}

		} else {

			listItems = <div>Aucune todo</div>
		}

		return(
			<section className="li">
				{listItems}
			</section>
		);
	}
}

class FilterItem extends React.Component {

	render() {

		return(<section>Filter</section>);
	}
}

class App extends React.Component {

	constructor(props) {

		super(props);

		var storedArray = JSON.parse(localStorage.getItem("todo")) || [];

		this.state = storedArray;

	}

	saveState(state) {

		this.setState(state);
		localStorage.setItem("todo", JSON.stringify(state));
	}

	getIndex(item) {

		var items = this.state.items;

		items.filter((i) => {

			if(i.key === item.key){

				return items.indexOf(item);
			}
		});
	}

	addItem(text){

		var items = this.state.items;

		items.push({
			text: text,
			key: Date.now(),
			checked: false
		});

		this.saveState({items: items});
	}

	removeItem (itemRemoved) {

		var items = this.state.items;

		items = items.filter(function(item){

			return item !== itemRemoved;
		});

		this.saveState({items: items});


	}

	toggleCheck (item) {

		var items = this.state.items,
			index = items.indexOf(item);

		console.log(index);
		items[index].checked = !items[index].checked;
		console.log(items);

		this.saveState({items: items});
	}

	render() {

		return (
			<section>
				<h1>Todo List</h1>
				<AddItem 	addItem={this.addItem.bind(this)}/>
				<ListItem 	items={this.state.items}
							removeItem={this.removeItem.bind(this)}
							toggleCheck={this.toggleCheck.bind(this)}
				/>
			</section>
		);

	}
}

ReactDOM.render(
	<div>
		<App />
	</div>
	,document.getElementById('root')
);
