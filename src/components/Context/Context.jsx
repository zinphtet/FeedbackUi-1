import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const myContext = createContext()
export const ContextProvider = ({children})=>{
   
    const [feedback,setFeedback] = useState([
        {
            id:1,
            rating :10,
            msg :'This is from context 1'
        }
    ])

    const handlerDelete = (id) => {
		const newFeedback = feedback.filter((fedb) => fedb.id !== id);
		setFeedback(newFeedback);
	};

    const feedbackHandler = ({ rating, msg }) => {
		setFeedback([{ id: uuidv4(), rating, msg }, ...feedback]);
	};

   

    return <myContext.Provider value={{
        feedback,
        handlerDelete,
        feedbackHandler ,
    }}>
         {children}
    </myContext.Provider>
}

export default myContext;