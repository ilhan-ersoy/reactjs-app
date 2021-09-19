import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('ilhan');
    const [isPending, setIsPending] = useState(false);
    const [visible, setVisible] = useState({display:'none'});
    let history = useHistory();
    const handleSubmit = () => {

        const blog = { title, body, author }


        setIsPending(true);
        setVisible({display:'block'});

        setTimeout(()=>{
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog),
            }).then( () => {
                console.log('new blog added');
                setIsPending(false);
                setVisible({display:'none'});
                history.push("/");
            })
        },1000);

    }

    return (
        <div className='create'>
            <h2>Create a new blog !</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value) }
                />
                <label>Blog Body:</label>
                <textarea
                    cols="30"
                    rows="10"
                    required
                    onChange={ (e)=> setBody(e.target.value) }
                    value={ body }
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="ilhan">ilhan</option>
                    <option value="ares">ares</option>
                    <option value="elif">elif</option>
                </select>


                <a href="#popup1" onClick={handleSubmit}>Add</a>


            </form>

            <div id="popup1" className="overlay" style={visible}>
                <div className="popup">
                    <a className="close" id='closeLink' href="#">&times;</a>
                    <div className="content">
                        <div>Inserting...</div>
                        <img style={{width:'100px'}} src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt=""/>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Create;
