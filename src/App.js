import { useState } from "react";

import Index from "./Kino";




function App() {

  const [user, setUser] = useState("Hello World");

  return (
    
    <div className="bg-dark" style={{}}>

    <Index/>

    </div>
  );
}

export default App;
