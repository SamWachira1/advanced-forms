import data from '../../../_assets/sample.json'
import { useState, useEffect } from 'react'


function SurveyOne() {

    let [selectedOptions, setSelectedOptions] = useState({});

    let [submitted, setSubmitted] = useState(false)
    let [validationErrors, setValidationErrors] = useState({})



    useEffect(() => {
        if (submitted) {
            const missingAnswers = {};
            const selectedOptionsValues = Object.values(selectedOptions);

            data.questions.forEach((question) => {
                if (question.optional !== true && !selectedOptionsValues.some(value => value === question.value)) {
                    missingAnswers[question.stem] = question.stem;
                }
            });

            setValidationErrors(missingAnswers);


        }


    }, [submitted, selectedOptions]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(validationErrors).length > 0) {
            // Display validation errors
            return alert(`The following errors were found:\n\n${Object.values(validationErrors).join('\n')}`);
        } else {
            // Submit the form data
            setSubmitted(true);
        }



    };

    const handleOptionsChange = (questionIndex, value) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionIndex]: value,
        }));
    };




    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>{data.instructions}</p>

            <form onSubmit={handleSubmit}>
                {data.questions.map((question, index) => (
                    <div key={index}>
                        <p>{question.stem}</p>
                        <ul>
                            {question.options && (
                                <ul style={{ listStyleType: 'none' }}>
                                    {question.options.map((option, optionsIndex) => (
                                        <li key={optionsIndex}>
                                            <label htmlFor={`question_${index}_${optionsIndex}`}>
                                                <input
                                                    type="radio"
                                                    id={`question_${index}_${optionsIndex}`}
                                                    onChange={() => handleOptionsChange(question.stem, option.value)}
                                                    value={option.value}
                                                    checked={selectedOptions[question.stem] === option.value}
                                                />
                                                {option.text}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {question.type === 'cr' && question.lines < 3 && (
                                <input
                                    type="text"
                                    id={`question_${index}`}
                                    onChange={(e) => handleOptionsChange(question.stem, e.target.value)}
                                    value={selectedOptions[question.stem] || ''}
                                />
                            )}

                            {question.type === 'cr' && question.lines >= 3 && (
                                <textarea
                                    id={`question_${index}`}
                                    onChange={(e) => handleOptionsChange(question.stem, e.target.value)}
                                    value={selectedOptions[question.stem] || ''}
                                />
                            )}
                        </ul>

                        {validationErrors[question.stem] && (
                            <div style={{ color: 'red' }}>
                                <p>Required</p>
                            </div>
                        )}


                       
                    </div>
                ))}
                {console.log(Object.keys(validationErrors).length)}
                {submitted && Object.keys(validationErrors).length === 0 &&(
                            <div>
                                <h1>Thank you for your submission!</h1>
                            </div>
                        )}


                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SurveyOne;
