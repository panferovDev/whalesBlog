import React from 'react';
import { motion } from 'framer-motion';

export default function CardItem({
  post, user, deletePostHandler, index,
}) {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <motion.div className="card border-primary mt-3 mb-3" variants={variants} initial="hidden" animate="visible" custom={index}>
      <div className="card-header">
        {post?.User?.name}
        {' '}
        пишет...
      </div>
      <div className="card-body text-primary">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button
          type="button"
          className={`btn btn-danger ${user?.id === post.user_id ? null : 'disabled'}`}
          onClick={() => deletePostHandler(post.id)}
        >
          &#x2715;

        </button>
      </div>
    </motion.div>
  );
}
