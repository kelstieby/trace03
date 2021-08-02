import "./Box.css";

const Box = props => {
    return (
        <div>
            <button id={props.id} className={"box " + (props.blinking ? "box-blink" : "")} onClick={props.boxClicked}></button>
        </div>
    );
}

export default Box;