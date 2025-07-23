import { useState, useEffect } from "react"
import "./comment-section.scss"
import Button from "../button/Button"

const CommentSection = ({ movieId, movieTitle }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({ name: "", text: "" })
  const [editingId, setEditingId] = useState(null)
  const [editingComment, setEditingComment] = useState({ name: "", text: "" })

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${movieId}`)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [movieId])

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem(`comments_${movieId}`, JSON.stringify(comments))
  }, [comments, movieId])

  // Create new comment
  const handleAddComment = (e) => {
    e.preventDefault()
    if (newComment.name.trim() && newComment.text.trim()) {
      const comment = {
        id: Date.now(),
        name: newComment.name.trim(),
        text: newComment.text.trim(),
        timestamp: new Date().toISOString(),
        movieTitle: movieTitle,
      }
      setComments([comment, ...comments])
      setNewComment({ name: "", text: "" })
    }
  }

  // Delete comment
  const handleDeleteComment = (id) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter((comment) => comment.id !== id))
    }
  }

  // Start editing comment
  const handleEditStart = (comment) => {
    setEditingId(comment.id)
    setEditingComment({ name: comment.name, text: comment.text })
  }

  // Save edited comment
  const handleEditSave = (id) => {
    if (editingComment.name.trim() && editingComment.text.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === id
            ? { ...comment, name: editingComment.name.trim(), text: editingComment.text.trim(), edited: true }
            : comment,
        ),
      )
      setEditingId(null)
      setEditingComment({ name: "", text: "" })
    }
  }

  // Cancel editing
  const handleEditCancel = () => {
    setEditingId(null)
    setEditingComment({ name: "", text: "" })
  }

  // Format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="comment-section">
      <div className="comment-section__header">
        <h2>Comments ({comments.length})</h2>
      </div>

      {/* Add Comment Form */}
      <form className="comment-form" onSubmit={handleAddComment}>
        <div className="comment-form__inputs">
          <input
            type="text"
            placeholder="Your name"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            className="comment-form__name"
            maxLength={50}
            required
          />
          <textarea
            placeholder="Write your comment..."
            value={newComment.text}
            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            className="comment-form__text"
            rows={4}
            maxLength={500}
            required
          />
        </div>
        <div className="comment-form__actions">
          <Button type="submit" className="comment-form__submit">
            Post Comment
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="comments-list">
        {comments.length === 0 ? (
          <div className="comments-empty">
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-item__header">
                <div className="comment-item__user">
                  <div className="comment-item__avatar">{comment.name.charAt(0).toUpperCase()}</div>
                  <div className="comment-item__meta">
                    {editingId === comment.id ? (
                      <input
                        type="text"
                        value={editingComment.name}
                        onChange={(e) => setEditingComment({ ...editingComment, name: e.target.value })}
                        className="comment-edit__name"
                        maxLength={50}
                      />
                    ) : (
                      <h4 className="comment-item__name">{comment.name}</h4>
                    )}
                    <span className="comment-item__timestamp">
                      {formatTimestamp(comment.timestamp)}
                      {comment.edited && <span className="comment-item__edited"> (edited)</span>}
                    </span>
                  </div>
                </div>
                <div className="comment-item__actions">
                  {editingId === comment.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleEditSave(comment.id)}
                        className="comment-action comment-action--save"
                      >
                        <i className="bx bx-check"></i>
                      </button>
                      <button
                        type="button"
                        onClick={handleEditCancel}
                        className="comment-action comment-action--cancel"
                      >
                        <i className="bx bx-x"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => handleEditStart(comment)}
                        className="comment-action comment-action--edit"
                      >
                        <i className="bx bx-edit"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteComment(comment.id)}
                        className="comment-action comment-action--delete"
                      >
                        <i className="bx bx-trash"></i>
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="comment-item__content">
                {editingId === comment.id ? (
                  <textarea
                    value={editingComment.text}
                    onChange={(e) => setEditingComment({ ...editingComment, text: e.target.value })}
                    className="comment-edit__text"
                    rows={3}
                    maxLength={500}
                  />
                ) : (
                  <p className="comment-item__text">{comment.text}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default CommentSection
