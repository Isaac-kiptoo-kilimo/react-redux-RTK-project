import { useAddPostMutation } from "./PostsApis"; 

const CreatePost = () => {
  const [addPost,{error,isLoading}]=useAddPostMutation()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Please fill in both fields");
    } else {
        const newOne=addPost({post_title:e.target[0].value,post_content:e.target[1].value,author_id:1})
        e.target.reset();
    }
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="postTitle">
          Title:
          <input
            type="text"
            id="postTitle"
            name="postTitle"
          
          />
        </label>
        <label className="form-input" htmlFor="postContent">
          Content:
          <textarea id="postContent" name="postContent" />
        </label>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
