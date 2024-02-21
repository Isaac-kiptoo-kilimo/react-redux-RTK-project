import React, { useState } from "react";
import { useUpdatePostMutation } from "./PostsApis";

const UpdatePost = ({ post, closeModal }) => {

  const [updatePost] = useUpdatePostMutation();

  const [title, setTitle] = useState(post ? post.post_title : '');
  const [content, setContent] = useState(post ? post.post_content : '');


  const handleUpdate = (e) => {
    e.preventDefault();
    updatePost({ post_title: title, post_content: content ,id:post.id});
    console.log("love it", { post_title: title, post_content: content }, "id");
    closeModal();
  };
  return (
    <section className="modal-card">
      <h2>Update Your Post</h2>
  
      <form className="form" onSubmit={handleUpdate}>
        <label className="form-input" htmlFor="updatePostTitle">
          Title:
          <input type="text"  value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="form-input" htmlFor="updatePostContent">
          Content:
          <textarea value={content}
            onChange={(e) => setContent(e.target.value)}/>
        </label>
        <button type="submit">Update Post</button>
      </form>
    </section>
  );
};

export default UpdatePost;
