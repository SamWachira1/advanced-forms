import { NavLink } from "react-router-dom"

function Home() {
    return (
    <div>
        <div >
         <h1>Survey Tool</h1>
         <h2>Home</h2>
       </div>
 
       <div>
         <button><NavLink to={'/sampleSurvey'}>Sample Survey</NavLink></button>
         <button><NavLink to={'/sensoryPreferences'}>Sensory Preferences</NavLink></button>
         <button>Report</button>
         <button>Home</button>
       </div>
 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum quos officia eum sunt quas quis consequuntur delectus dolorem ex, commodi modi ut doloremque dicta cumque itaque, enim nesciunt dolor!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt ut quos molestiae laborum doloribus ratione culpa quibusdam, sapiente minima officiis nostrum labore, ipsam hic saepe, fugit tempore nulla? Deserunt!
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem natus doloribus aperiam consectetur, nobis quasi error at quas eos nesciunt, unde quidem nemo perferendis soluta voluptate eum deserunt iure.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit, quos quam ducimus error, dolore assumenda culpa nisi dolores, voluptatibus laboriosam? Voluptatum dignissimos assumenda maiores, eaque officia nemo exercitationem aperiam.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolorem repellendus modi id quos aliquam debitis. Accusantium, explicabo. Fuga officiis voluptates ab exercitationem dolore ut explicabo! Minus ullam veritatis commodi.
       </p>
 
       <span>Copyright.............</span>

    </div>


    )
}

export default Home 
