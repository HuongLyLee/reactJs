import { useState } from 'react';

// response from API 
const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'ReactJS'
    },
]

function Binding() {
    const [checked, setChecked] = useState([])

    console.log(checked)

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if(isChecked) {
                // Uncheck
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    const handleSubmit = () => {
        // Call API
        console.log({ ids: checked});
    }

    return (
        <div> 
            {courses?.map(course =>(
                <div key={course.id}>
                    <input type="checkbox" 
                        checked= {checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
                
                // <div key={course.id}>
                //     <input type="radio" 
                //         checked= {checked ===  course.id}
                //         onChange={ () => setChecked(course.id)}
                //     />
                //     {course.name}
                // </div>   
            ))}
            
            <button onClick ={handleSubmit}> Register </button>
        </div>
    )
}

export default Binding;
