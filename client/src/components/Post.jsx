import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useDeletePostMutation } from "../features/posts/PostsApis";
import UpdatePost from "../features/posts/UpdatePost";
import { createPortal } from "react-dom";
import '../App.css'


const updatePostEl = document.getElementById("edit-post");

const Post = ({ post }) => {
  const [deletePost] = useDeletePostMutation();
  const [editingPostId, setEditingPostId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const PickDeleteID = () => {
    console.log(post.id);
    deletePost(post.id);
  };

  const handleEdit = () => {
    console.log(post.id);
    setEditingPostId(post.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingPostId(null);
  };

  return (
    <article className="card" key={post._id}>
      <h3>{post.post_title}</h3>
      <p>{post.post_content.substring(0, 100)}</p>
      <p>Author: {post.author_id}</p>
      <div className="edit-delete">
        <FiEdit onClick={handleEdit} disabled={editingPostId !== null} />
        <MdDelete onClick={PickDeleteID} />
      </div>

      <div >
        {showModal &&
          createPortal(
            <UpdatePost post={post} closeModal={closeModal} />,
            updatePostEl
          )}
      </div>
    </article>
  );
};

export default Post;
