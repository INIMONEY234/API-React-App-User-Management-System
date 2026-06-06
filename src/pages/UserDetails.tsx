import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks"; 

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const user = useAppSelector((state) =>
        state.user.users.find((u) => u.id === Number(id))
    );


    const colorThemes = [
        { primary: '#4f46e5', light: '#e0e7ff', gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)' }, // Indigo
        { primary: '#0ea5e9', light: '#e0f2fe', gradient: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }, // Sky Blue
        { primary: '#10b981', light: '#d1fae5', gradient: 'linear-gradient(135deg, #34d399, #10b981)' }, // Emerald
        { primary: '#f59e0b', light: '#fef3c7', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }, // Amber
        { primary: '#ec4899', light: '#fce7f3', gradient: 'linear-gradient(135deg, #f472b6, #ec4899)' }, // Pink
        { primary: '#8b5cf6', light: '#ede9fe', gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }, // Purple
    ];


    const themeIndex = user ? user.id % colorThemes.length : 0;
    const activeTheme = colorThemes[themeIndex];

    const pageContainerStyle = {
        backgroundColor: '#f1f5f9', 
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
    };

    const cardContainerStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '20px', 
        width: '100%',
        maxWidth: '480px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        border: '1px solid #e2e8f0',
        overflow: 'hidden',
    };

    const backLinkStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: activeTheme.primary, 
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '600',
        marginBottom: '16px',
        width: '100%',
        maxWidth: '480px',
        transition: 'transform 0.2s ease',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '18px 24px',
        borderBottom: '1px solid #f1f5f9',
    };

    const labelStyle = {
        fontSize: '14px',
        fontWeight: '600',
        color: '#64748b', 
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
    };

    const valueStyle = {
        fontSize: '15px',
        fontWeight: '500',
        color: '#0f172a', 
    };

    if (!user) {
        return (
            <div style={pageContainerStyle}>
                <div style={{ ...cardContainerStyle, padding: '20px', textAlign: 'center', marginTop: '20px' }}>
                    <svg style={{ width: '48px', height: '48px', color: '#ef4444', marginBottom: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#0f172a' }}>User Profile Not Found</h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#64748b' }}>The details you are looking for belong to a profile that doesn't exist.</p>
                    <Link to="/users" style={{ ...backLinkStyle, color: '#4f46e5', justifyContent: 'center', marginBottom: '0' }}>
                        Return to Directory
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={pageContainerStyle}>

            <Link 
                to="/users" 
                style={backLinkStyle}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'translateX(-4px)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
            >
                <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Directory
            </Link>


            <div style={cardContainerStyle}>
                

                <div style={{ height: '80px', background: activeTheme.gradient, position: 'relative' }} />


                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px', paddingBottom: '28px', borderBottom: '2px solid #f1f5f9' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: activeTheme.light,
                        color: activeTheme.primary,
                        border: '5px solid #ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '36px',
                        fontWeight: '800',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        textTransform: 'uppercase',
                        marginBottom: '14px'
                    }}>
                        {user.name.charAt(0)}
                    </div>
                    <h2 style={{ margin: '0 0 4px 0', fontSize: '24px', color: '#0f172a', fontWeight: '800' }}>
                        {user.name}
                    </h2>
                    <span style={{ 
                        fontSize: '12px', 
                        color: activeTheme.primary, 
                        backgroundColor: activeTheme.light, 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Active Account
                    </span>
                </div>


                <div style={{ backgroundColor: '#ffffff' }}>
                    <div style={rowStyle}>
                        <span style={labelStyle}>User ID</span>
                        <span style={{ ...valueStyle, fontFamily: 'monospace', color: activeTheme.primary, fontWeight: '700' }}>
                            #{user.id}
                        </span>
                    </div>

                    <div style={rowStyle}>
                        <span style={labelStyle}>Email</span>
                        <span style={{ ...valueStyle, fontWeight: '600' }}>{user.email}</span>
                    </div>

                    <div style={rowStyle}>
                        <span style={labelStyle}>Street</span>
                        <span style={valueStyle}>{user.address?.street || '—'}</span>
                    </div>

                    <div style={{ ...rowStyle, borderBottom: 'none' }}>
                        <span style={labelStyle}>City</span>
                        <span style={{ ...valueStyle, color: activeTheme.primary, fontWeight: '600' }}>
                            {user.address?.city || '—'}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserDetails;