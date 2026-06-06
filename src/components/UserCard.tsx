import type { User } from '../types/user';

interface Props {
    user: User;
}

const UserCard = ({ user }: Props) => {
    return (
        <div 
            className="user-card"
            style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #f3f4f6',
                maxWidth: '400px',
                margin: '16px auto',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
        >

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{
                    width: '44px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#e0e7ff',
                    color: '#4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginRight: '12px',
                    textTransform: 'uppercase'
                }}>
                    {user.name.charAt(0)}
                </div>
                <div>
                    <h3 style={{ margin: '0', fontSize: '18px', color: '#111827', fontWeight: '600' }}>
                        {user.name}
                    </h3>
                    <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        ID: #{user.id}
                    </span>
                </div>
            </div>

            <hr style={{ border: '0', borderTop: '1px solid #f3f4f6', margin: '0 0 16px 0' }} />


            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
     
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg style={{ width: '18px', height: '18px', color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span style={{ fontSize: '14px', color: '#4b5563', wordBreak: 'break-all' }}>
                        {user.email}
                    </span>
                </div>


                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg style={{ width: '18px', height: '18px', color: '#9ca3af', marginTop: '2px', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.4' }}>
                        {user.address?.street || 'No Street'}, {user.address?.city || 'No City'}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default UserCard; 