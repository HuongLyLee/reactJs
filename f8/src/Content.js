import { useState } from "react";
import Content1 from './Content1'

function Content() {
    const [show, setShow] = useState(false)

    return (
        <div> 
            <button onClick={() => setShow(!show)}> Toggle </button>
            {show && <Content1 />}
        </div>
    )
}

export default Content;