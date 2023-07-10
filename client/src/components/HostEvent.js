import React, {useState} from 'react';

function HostEvent({updateFormData, submitItem}){

const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        
        <div class="container" id="host-event-container">
            {formSubmitted ? <h1 >Your event has been posted!</h1> 
            : 
            <form onSubmit={(event) => {
                submitItem(event)
                setFormSubmitted(formSubmitted => !formSubmitted)
            }} >
                <input onChange={updateFormData} class="form-control" type="text" name="Event Title" placeholder="Event Title" required />
                <input onChange={updateFormData} class="form-control" type="text" name="Event Date" placeholder="Event Date" required />
                <input onChange={updateFormData} class="form-control" type="text" name="Event Type" placeholder="Event Type" required />
                <input onChange={updateFormData} class="form-control" type="text" name="Event Location" placeholder="Event Location" required />
                <input onChange={updateFormData} class="form-control" type="text" name="Event Description" placeholder="Event Description" required />
                <input onChange={updateFormData} class="form-control" type="text" name="People Needed" placeholder="People Needed" required />
                
                <button class="btn btn-dark" type="submit">Post Event</button>
            </form>}
        </div>
    )

}

export default HostEvent;


                // <input type="text" name="size" placeholder="Size" required />
                // <input type="text" name="price" placeholder="Price" required />
                // <input type="text" name="condition" placeholder="Condition" required />