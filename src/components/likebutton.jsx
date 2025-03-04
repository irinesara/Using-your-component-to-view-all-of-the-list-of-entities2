import { useState } from 'react';

export default function LikeButton({ isLiked, onToggle }) {
  return (
    <button 
      onClick={onToggle}
      style={{ 
        padding: '8px 16px', 
        borderRadius: '8px', 
        backgroundColor: isLiked ? '#ff4c4c' : '#ccc', 
        color: '#fff', 
        border: 'none', 
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontWeight: 'bold'
      }}
    >
      {isLiked ? 'Liked ❤️' : 'Like 🤍'}
    </button>
  );
}