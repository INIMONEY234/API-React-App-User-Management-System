import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { fetchUsers, deleteUser } from '../store/userSlice'; 
import UserCard from '../components/UserCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const UserList: React.FC = () => {
    const dispatch = useAppDispatch(); 
    const { users, loading } = useAppSelector((state) => state.user); 

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsers());
        }
    }, [dispatch, users.length]); 

    const colors = [
        { primary: '#4f46e5', light: '#e0e7ff', gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)' }, 
        { primary: '#0ea5e9', light: '#e0f2fe', gradient: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }, 
        { primary: '#10b981', light: '#d1fae5', gradient: 'linear-gradient(135deg, #34d399, #10b981)' }, 
        { primary: '#f59e0b', light: '#fef3c7', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }, 
        { primary: '#ec4899', light: '#fce7f3', gradient: 'linear-gradient(135deg, #f472b6, #ec4899)' }, 
        { primary: '#8b5cf6', light: '#ede9fe', gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }, 
    ];

    const pageContainerStyle = {
        backgroundColor: '#f1f5f9', 
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    };

    const contentWrapperStyle = {
        maxWidth: '1440px', 
        margin: '0 auto',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '20px',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
        gap: '24px',
        width: '100%',
    };

    const actionButtonStyle = {
        padding: '8px 12px',
        fontSize: '13px',
        fontWeight: '600',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        backgroundColor: '#ffffff',
        color: '#475569',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    };

    if (loading) {
        return (
            <div style={pageContainerStyle}>
                <div style={contentWrapperStyle}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', flexDirection: 'column', gap: '16px' }}>
                        <svg style={{ width: '48px', height: '48px', color: '#4f46e5', animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none">
                            <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <h3 style={{ margin: 0, fontSize: '18px', color: '#334155', fontWeight: '600' }}>Loading Users Directory...</h3>
                    </div>
                </div>
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div style={pageContainerStyle}>
            <div style={contentWrapperStyle}>
                <div style={headerStyle}>
                    <div>
                        <h1 style={{ margin: '0 0 6px 0', padding: '10px', fontSize: '32px', color: '#0f172a', fontWeight: '800', background: 'linear-gradient(to right, #1e1b4b, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            User Management System
                        </h1>
                        <p style={{ margin: 0, fontSize: '14px', color: '#64748b', fontWeight: '500' }}>
                            Manage active system user accounts and profiles.
                        </p>
                    </div>
                    <Link to="/add-user" style={{ textDecoration: 'none' }}>
                        <button style={{
                            ...actionButtonStyle,
                            background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
                            color: '#ffffff',
                            borderColor: 'transparent',
                            padding: '12px 20px',
                            fontSize: '15px',
                            boxShadow: '0 4px 10px rgba(79, 70, 229, 0.25)'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12m6-6H6" />
                            </svg>
                            Add New User
                        </button>
                    </Link>
                </div>

                <div style={gridStyle} className="user-grid">
                    {users.map((user, index) => {
                        const colorPalette = colors[index % colors.length];

                        return (
                            <div 
                                key={user.id} 
                                style={{ 
                                    backgroundColor: '#ffffff', 
                                    borderRadius: '16px', 
                                    border: '1px solid #e2e8f0',
                                    padding: '0 0 16px 0',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ height: '6px', background: colorPalette.gradient }} />

                                <div style={{ padding: '8px' }}>
                                    <UserCard user={user} />
                                </div>

                                <div style={{ display: 'flex', gap: '8px', padding: '0 16px', marginTop: '4px' }}>
                                    <Link to={`/users/${user.id}`} style={{ textDecoration: 'none', flex: 1 }}>
                                        <button 
                                            style={actionButtonStyle}
                                            onMouseOver={(e) => { e.currentTarget.style.color = colorPalette.primary; e.currentTarget.style.borderColor = colorPalette.primary; }}
                                            onMouseOut={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                                        >
                                            Details
                                        </button> 
                                    </Link>

                                    <Link to={`/edit-user/${user.id}`} style={{ textDecoration: 'none', flex: 1 }}>
                                        <button 
                                            style={actionButtonStyle}
                                            onMouseOver={(e) => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderColor = '#2563eb'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                                        >
                                            Edit
                                        </button>
                                    </Link> 
                                
                                    <button
                                        onClick={() => {
                                            const confirmDelete = window.confirm("Are you sure you want to delete this user?");
                                            if (confirmDelete) {
                                                dispatch(deleteUser(user.id));
                                            }
                                        }}
                                        style={{
                                            ...actionButtonStyle,
                                            color: '#dc2626',
                                            borderColor: '#fca5a5',
                                            backgroundColor: '#fef2f2'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.backgroundColor = '#fee2e2';
                                            e.currentTarget.style.borderColor = '#ef4444';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.backgroundColor = '#fef2f2';
                                            e.currentTarget.style.borderColor = '#fca5a5';
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {!loading && users.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', marginTop: '24px' }}>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>No active user profiles available in directory.</p>
                    </div>
                )}
            </div>

            <style>{`
                @media (min-width: 1200px) {
                    .user-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default UserList;