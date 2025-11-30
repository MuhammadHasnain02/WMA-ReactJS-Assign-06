import { useState } from "react";
import { useFetch } from "../Hook/useFetch";

function MiddleSection() {

    const [refreshKey, setRefreshKey] = useState(0);
    const refresh = () => setRefreshKey(prev => prev + 1);

    const { data: posts, isLoading } = useFetch("http://localhost:3000/posts" , refreshKey);

    const [title, setTitle] = useState("");
    const [views, setViews] = useState("");
    const [searchInp, setSearchInp] = useState("");
    const [editId, setEditId] = useState(null);

    // Filter posts for search
    const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(searchInp.toLowerCase())
    })

    // ADD / UPDATE Post
    const handleAddOrUpdate = async () => {
        if (!title || !views) return alert("Please fill all fields");

        if (editId) {

            await fetch(`http://localhost:3000/posts/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    views: Number(views)
                })

            });
            setEditId(null)
            
        }
        else {
            await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    views: Number(views)
                })
            });
        }

        setTitle("");
        setViews("");
        refresh();

    };

    // DELETE post
    const delPost = async (id) => {

        await fetch(`http://localhost:3000/posts/${id}` , { method: "DELETE"});
        refresh();

    }

    // EDIT post
    const editPost = async (post) => {

        setTitle(post.title)
        setViews(post.views)
        setEditId(post.id)
        refresh();

    }

    // Loading Handling
    if (isLoading) return <h1 className="text-gray-800 text-center mt-10">Loading...</h1>;

    return (

        <section className="flex flex-col items-center flex-grow justify-center">

            <div className="w-[90%] max-w-lg space-y-6 bg-white shadow-lg transition-all duration-300 rounded-2xl p-8 border border-gray-200">

                {/* Title */}
                <h2 className="text-[24px] font-bold text-center text-gray-800 tracking-wide">
                    
                    <i className="fa-solid fa-list-check"></i>{" "}
                    Your <span className="text-blue-600">Posts</span>

                </h2>

                {/* Search bar */}
                <div className="flex items-center gap-2">

                    <input
                        type="text"
                        placeholder="Search Posts..."
                        value={searchInp}
                        onChange={(e) => setSearchInp(e.target.value)}
                        className="text-[15px] font-medium w-full border border-gray-300 rounded-lg px-4 py-2.5 ring-1 ring-gray-300 ring-offset-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1.5 transition-all duration-500"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:cursor-pointer hover:scale-95">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                </div>

                {/* Posts list */}
                <ul className="space-y-3">

                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                        <li key={post.id} className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all hover:cursor-pointer">
                            <div>
                            <h3 className="text-gray-800 font-medium">{post.title}</h3>
                            <p className="text-gray-500 text-sm">{post.views} views</p>
                            </div>
                            <div className="space-x-2">
                            <button onClick={() => editPost(post)} className="text-[18px] text-blue-700 hover:cursor-pointer">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button onClick={() => delPost(post.id)} className="text-[18px] text-blue-700 hover:text-red-600 hover:cursor-pointer">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                            </div>
                        </li>
                        ))
                    ) : (
                        <li className="text-gray-500 text-center bg-gray-50 border border-gray-200 rounded-lg py-3">
                        No posts found...
                        </li>
                    )}

                </ul>

                {/* Add / Update Post */}
                <div>

                    <p className="text-gray-600 mb-2 text-sm">Add a new post...</p>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-[15px] font-medium w-full border border-gray-300 rounded-lg px-4 py-2.5 ring-1 ring-gray-300 ring-offset-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1.5 transition-all duration-500"
                        />
                        <input
                            type="number"
                            placeholder="Enter views"
                            value={views}
                            onChange={(e) => setViews(e.target.value)}
                            className="text-[15px] font-medium w-24 border border-gray-300 rounded-lg px-4 py-2.5 ring-1 ring-gray-300 ring-offset-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1.5 transition-all duration-500"
                        />
                        <button onClick={handleAddOrUpdate} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:cursor-pointer hover:scale-95">
                            {editId ? "Update" : "Add"}
                        </button>
                    </div>

                </div>

            </div>

        </section>

    );

}


export default MiddleSection