import "./Spinner.css";
import spinnerGif from "../../../Assets/Images/spinner.gif";

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
            <img src={spinnerGif} alt="spinner"/>
        </div>
    );
}

export default Spinner;
