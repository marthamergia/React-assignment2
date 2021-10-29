
    import { useState } from "react";

    function Main() {
    
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [message, setMessage] = useState("");
        //Diffrent methods
        //see the buttonHandler for usage.
        const [buttonClicked, setButtonClicked] = useState(false);
        const [validData, setValidData] = useState(false);
    
        function firstNameHandler(event) {
            setFirstName(event.target.value);
        }
    
        function lastNameHandler(event) {
            setLastName(event.target.value);
        }
    
        function buttonHandler(event) {
            setButtonClicked(true);
            setValidData(false);
            if (firstName && lastName) {
                setValidData(true);
            }
        }
    
        // function buttonHandler2(event) {
        //     if (firstName && lastName) {
        //         setMessage("First name:" + firstName + " Lastname: " + lastName)
        //     } else {
        //         setMessage("both first and last name are required please")
        //     }
        // }
    
        return (
        
            <div>
                {buttonClicked && validData && <div>Firstname: {firstName} Lastname: {lastName}</div>}
                {buttonClicked && !validData && <div>Please provide both first and last name</div>}
                <div>{message}</div>
                <form>
                    <label for="fname">First name:</label>
                    <input onKeyUp={firstNameHandler} type="text" id="fname" name="fname" />
                    <label for="lname">Last name:</label>
                    <input onKeyUp={lastNameHandler} type="text" id="lname" name="lname" />
                    <input onClick={buttonHandler} type="button" value="Submit" />
                </form>
    
                <p>Create a react app and create a functional component that has two text boxes: </p>
                <p> 1 for first name </p>
                <p> 1 for last name </p>
                <p> 1 for button </p>
    
                <p> When the button is clicked, it prints the first and last name on the top of the page. If none is provided, it shows an error message.
                    Once you do that, please put it on your git repo and share the link. </p>
    
            </div>
    
        );
    
    }
    
    export default Main;
 