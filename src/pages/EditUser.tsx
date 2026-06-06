import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateUser } from "../store/userSlice";
import UserForm from "../components/UserForm";
import type { UserFormData } from "../components/UserForm";
import type { User } from "../types/user";

const EditUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) =>
        state.user.users.find((u) => u.id === Number(id))
    ); 


    const colorThemes = [
        { primary: '#4f46e5', gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)' }, // Indigo
        { primary: '#0ea5e9', gradient: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }, // Sky Blue
        { primary: '#10b981', gradient: 'linear-gradient(135deg, #34d399, #10b981)' }, // Emerald
        { primary: '#f59e0b', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }, // Amber
        { primary: '#ec4899', gradient: 'linear-gradient(135deg, #f472b6, #ec4899)' }, // Pink
        { primary: '#8b5cf6', gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }, // Purple
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

    const headerWrapperStyle = {
        width: '100%',
        maxWidth: '460px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
    };

    const backLinkStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: activeTheme?.primary || '#4f46e5', 
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'transform 0.2s ease',
    };


    if (!user) {
        return (
            <div style={pageContainerStyle}>
                <div style={{ textAlign: 'center', marginTop: '60px', padding: '32px', maxWidth: '400px', backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                        <svg style={{ width: '28px', height: '28px', color: '#ef4444' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', color: '#0f172a', fontWeight: '800' }}>User Not Found</h3>
                    <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>The workspace profile requested for modification is missing or unindexed.</p>
                    <Link to="/users" style={{ ...backLinkStyle, color: '#4f46e5', justifyContent: 'center', width: '100%' }}>
                        Return to Directory
                    </Link>
                </div>
            </div>
        );
    }

    const initialFormData: UserFormData = {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: user.address?.street || '',
            city: user.address?.city || '',
        }
    };

    return (
        <div style={pageContainerStyle}>
         
            <div style={headerWrapperStyle}>
                <Link 
                    to="/users" 
                    style={backLinkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'translateX(-4px)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
                >
                    <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Cancel Editing
                </Link>
            </div>


            <div style={{ 
                width: '100%', 
                maxWidth: '460px', 
                backgroundColor: '#ffffff', 
                borderRadius: '20px', 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
                border: '1px solid #e2e8f0',
                overflow: 'hidden'
            }}>

                <div style={{ height: '8px', background: activeTheme.gradient }} />
                

                <div style={{ padding: '24px 24px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: activeTheme.primary }}>
                            Editing Record Profile
                        </span>
                        <h2 style={{ margin: '4px 0 0 0', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>
                            Modify Profile Information
                        </h2>
                    </div>
                    <div style={{ 
                        fontFamily: 'monospace', 
                        fontSize: '13px', 
                        fontWeight: '700', 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        color: activeTheme.primary, 
                        backgroundColor: `${activeTheme.primary}15` 
                    }}>
                        #{user.id}
                    </div>
                </div>

                
                <div style={{ padding: '8px 24px 24px 24px' }}>
                    <UserForm
                        initialData={initialFormData}
                        onSubmit={(updatedUser: UserFormData) => {
                            const updatedUserPayload: User = {
                                ...updatedUser,
                                id: Number(id)
                            };
                            dispatch(updateUser(updatedUserPayload));
                            navigate('/users');
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditUser;