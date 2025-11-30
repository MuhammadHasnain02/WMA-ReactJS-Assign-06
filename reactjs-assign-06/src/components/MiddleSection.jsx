import { useState } from "react";
import { useFetch } from "../Hook/useFetch";

function MiddleSection() {

    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos");
    const { data , isLoading } = useFetch(url)
    
    if (isLoading) {
        return <h1>Loading....</h1>;
    }

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) return alert("Please fill all fields");

        addPost({ title, body });
        setTitle("");
        setBody("");
    };

    return (

        <section className="flex flex-col items-center">

            <div className="w-full max-w-3xl mx-auto my-8 p-8 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">Add New Post</h2>
                <form onSubmit={handleSubmit} className="space-y-5 text-white">

                <div>
                    <label className="block mb-2">Title</label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-white/50 bg-white/10 text-white p-3 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter post title"
                    />
                </div>

                <div>
                    <label className="block mb-2">Body</label>
                    <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full border border-white/50 bg-white/10 text-white p-3 rounded-xl placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter post body"
                    rows={4}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500/90 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                    Add Post
                </button>
                </form>
            </div>

        </section>

    )
}


export default MiddleSection



// import { useState } from 'react'
// import { useFetch } from './Hooks/useFetch';

// function App() {

//   const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos");
//   const { data , isLoading } = useFetch(url)
  
//   if (isLoading) {
//     return <h1>Loading....</h1>;
//   }

//   return (
//     <div className="max-w-lg p-4 mx-auto space-y-2">

//       <h1 className="text-3xl underline">Todos</h1>
//       <button
//         onClick={() =>
//           setUrl("https://jsonplaceholder.typicode.com/todos?completed=true")
//         }
//         className="border-2 p-1 bg-gray-300 cursor-pointer mr-2"
//       >
//         Completed
//       </button>
//       <button
//         onClick={() =>
//           setUrl("https://jsonplaceholder.typicode.com/todos?completed=false")
//         }
//         className="border-2 p-1 bg-gray-300 cursor-pointer"
//       >
//         Not Completed
//       </button>
//       {data.map((post) => (
//         <div key={post.id} className="   border-2 border-green-950">
//           <h1 className="text-xl">Title: {post.title}</h1>
//           <p>Completed: {post.completed ? "Completed" : "Not completed"}</p>
//         </div>
//       ))}

//     </div>
//   );
// }

// export default App