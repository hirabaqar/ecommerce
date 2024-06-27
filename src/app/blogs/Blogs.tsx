


let getPostsData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts",

        {
            cache: "no-store"
        })
}
// let data = await res.json();
// // return data;
// <h2>Posts</h2>
// {
//     postsData.map((post: any) => {
//         return (
//             <div key={post.id}>
//                 {post.title}
//             </div>
//         )
//     }
//     )
// }


// export { };

