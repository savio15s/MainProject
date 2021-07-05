import React, { useState } from 'react';
import { messageService } from '../_services/MessageService';
import Debug from '../_utilities/Debug';

export default function Left() {

    const [data, setData] = useState({
        ts: new Date(),
        message: ''
    });

    const handleChange = (e) => {
        let { value, name } = e.target;
        setData(prev => {
            return {
                ...prev,
                [name]: value,
                ts: new Date()
            }
        })
    };

    const sendMessage = () => {
        messageService.sendMessage(data);
    }

    return (

        <div className="col-xs-4">
            <h1>Data from Left Component...</h1>
            <div className="input-group col-xs-4">
                <span className="input-group-text col-xs-4" id="addon-wrapping">@</span>
                <input name="message" 
                        type="text" 
                        value={data.message} 
                        onChange={handleChange} 
                        type="text" className="form-control input-sm" 
                        placeholder="Username" aria-label="Username" 
                        aria-describedby="addon-wrapping" />
            </div>

            <div>
                <button type="button" className="btn btn-success" onClick={sendMessage}>Send Message</button>
            </div>
        </div>
            
  );
}
