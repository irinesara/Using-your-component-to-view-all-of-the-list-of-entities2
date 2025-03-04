import LikeButton from './likebutton';

export default function PostCard({ profileImage, username, content, isLiked, onToggleLike }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '16px', 
      borderRadius: '12px', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
      backgroundColor: '#fff', 
      width: '300px',
      transition: 'transform 0.2s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <img 
          src={profileImage} 
          alt={username} 
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '8px', border: '2px solid #4c9aff' }}
        />
        <h3 style={{ fontSize: '18px', margin: 0, color: '#333' }}>{username}</h3>
      </div>
      <p style={{ fontSize: '16px', margin: '8px 0', textAlign: 'center', color: '#555' }}>{content}</p>
      <LikeButton isLiked={isLiked} onToggle={onToggleLike} />
    </div>
  );
}