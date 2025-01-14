import React, { useState } from 'react';
import "../Admin/Admin.css"
function DescriptionForm({descriptionForm}) {
    const [description, setDescription] = useState(descriptionForm || "");
    const [enhancedDescription, setEnhancedDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/enhance-description', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description }),
            });

            const data = await response.json();
            setEnhancedDescription(data.enhancedDescription);
        } catch (error) {
            console.error('Error enhancing description:', error);
        }
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <label>Description(not previewed)</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter your description here..."
                    rows="5"
                    cols="50"
                />
                <br />
                <button type="submit">Enhance Description</button>
            </form>
            {enhancedDescription && (
                <div className="enhanced__description">
                    <h4>Enhanced Description:</h4>
                    <p className="font-size-14">{enhancedDescription}</p>
                </div>
            )}
        </div>
    );
}

export default DescriptionForm;
