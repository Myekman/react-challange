import React from 'react'
import ImportedNames from './names';

export class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: ImportedNames,
        };
    }
    handleChange = (event) => {
        const TextInput = event.target.value
        console.log(TextInput);
        const filterNames = ImportedNames.filter(name => {
            return name.includes(TextInput);
        })
        this.setState ({
            names: filterNames
        })
    } 
  render() {
    return (
    <div>
        <h1>Search name:</h1>
        <p>matching names found: {this.state.names.length}</p>
        <form>
            <input
                onChange = {(event) => {this.handleChange(event)}}
                type="text" 
                placeholder="search name here..">
            </input>
            <button type="submit">search</button>
        </form>
        <div style = {{margin: 'auto'}}>
            {this.state.names.map(name => {
                return <p key ={name} >{name}</p>
            })}
        </div>
    </div>
    )
  }
}

export default Searchbar