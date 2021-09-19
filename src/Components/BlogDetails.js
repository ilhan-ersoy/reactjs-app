import {Link, useParams} from "react-router-dom";
import useFetch from "./UseFetch";
import Direction from "./Direction";

const BlogDetails = () => {

    const { id } = useParams();

    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);

    return (
        <div className="blog-details">
            <div className='directions'>
                <Direction path='/' text='Come Back !'/>
                <Direction path='/create' text='Create a new Blog !'/>
            </div>
            {isPending && <div>Loading</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>

                </article>
            )}
        </div>
    )
}

export default BlogDetails;
