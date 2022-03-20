import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'

const name = require('@rstacruz/startup-name-generator')

//class base component
//inheritens
class App extends React.Component {

    state = {
        HeaderText: "Name It!",
        HeaderExpanded: true,
        SuggestedName: []
    }

    HandleInputChange = (InputText) => {
        this.setState({
            HeaderExpanded: !InputText,
            SuggestedName: InputText ? name(InputText) : []
        }) // InputText.length > 0 ? false : true
    }

    //for using html in js
    //using props
    render() {
        //console.log(name('cloud'))
        return (

            < div >
                <Header HeaderExpanded={this.state.HeaderExpanded} HeadTitle={this.state.HeaderText} />
                <SearchBox OnInputChange={this.HandleInputChange} />
                <ResultsContainer SuggestedName={this.state.SuggestedName} />
            </div >
        )
    }
}

/*
functional component
function App() {
    return <h1> This is an app component</h1>
}
*/

export default App