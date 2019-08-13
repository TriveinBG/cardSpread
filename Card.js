import React from 'react'
import cardback from './images/cardback.png';
import cardData from './cardData';

function Card(props) {

    let styles = {
        // backgroundColor: "green",
        // position: "absolute",
        left: 20 + props.pos*30*props.id,
        transition: props.id/15 + "s linear",
        // height: 300,
        // width: 200,
        // border: "1px solid black",
        // borderRadius: "5%",
        // margin: 0,
        // padding: 0,
        // position: "absolute",
        backgroundImage: "url(" + cardback + ")",
        // backgroundSize: "200px 300px"
    }
    var className
        if (props.active){
            className = "draw";
            styles.transition = "0.1s";
        } else {
            className = "";
        }

    function onTransitionEnd(ev) {
        // console.log(cardData.length - 1)
        // console.log(props.id)
        if(props.id === cardData.length - 1) {
            props.onTransitionEnd(ev)
            console.log("yo")
        }
    }  

    function clickMe () {
        props.clickMe(props.id)
    }

    if (props.newId === props.id) {
        className = "oneCard"
        delete styles.transition
    } else if(props.newId !== null && props.newId !== props.id){
        styles = {display: "none"}
    }

    
    return (
            <div className={className + ' ' +"cardBack"} style={styles} onClick={clickMe}
             onTransitionEnd={onTransitionEnd} 
            ></div>
    )
}

export default Card