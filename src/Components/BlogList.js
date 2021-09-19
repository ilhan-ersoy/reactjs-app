import {Link} from "react-router-dom";


const BlogList = ({ blogs }) => {

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div  style={{cursor:'pointer'}} className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                    <div className='deleteBlog' >
                       X
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;