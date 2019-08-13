import React from 'react';
import Card from './Card';
import cardData from './cardData';
import "./index.css";


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            position: 0,
            activeState: 0,
            drawing: 0,
            id: null
        }
    }
    
    handleChange = () => {
        if(this.state.id === null){
            this.setState ({
                    position: !this.state.position,
                    drawing: !this.state.drawing
                }
            );
    
            if(this.state.activeState) {
            this.setState ({
                activeState: 0,
                drawing: false
            })
        }
    }
    console.log(this.state.position) 
    console.log(this.state.activeState)
    console.log(this.state.drawing)
}

    // drawCard = () => {
    //     this.setState ({
    //         id: this.card.id
    //     })
    // }

    onTransition = (ev) => {
        console.log("state changed")
        if(ev.propertyName === "left" && this.state.drawing) {
            this.setState({
                activeState: 1,
            })
        }
    }

    clickMe = (e) => {
        console.log(e)
        if(this.state.activeState === 1){
            this.setState ({
                id: e
            })
        }
        console.log (this.state.id)
    }

    
    render() {    

        const cards = cardData.map((card) => {
            return (
                <Card key={card.key} id={card.key} cardEach={card} pos={this.state.position} 
                active={this.state.activeState} onTransitionEnd={this.onTransition}
                clickMe={this.clickMe} newId={this.state.id}/>
                )
                
            })
            
            return(
                <div className="container">
                    <button onClick={this.handleChange}>Click</button>
                    <h1>Hello</h1>
                        <div style={{position: "relative"}}>
                            {cards}
                        </div>
                </div>
        )
    }
}
export default App;