import { useState } from 'react';

export interface UserFormData {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
}

interface Props {
    initialData?: UserFormData;
    onSubmit: (user: UserFormData) => void;
}

const UserForm = ({ initialData, onSubmit }: Props) => {
    const [name, setName] = useState(initialData?.name || '');
    const [email, setEmail] = useState(initialData?.email || '');
    const [street, setStreet] = useState(initialData?.address?.street || '');
    const [city, setCity] = useState(initialData?.address?.city || '');

    
    const brandPrimary = initialData ? '#8b5cf6' : '#ec4899'; // Purple for Edit, Pink for Create
    const brandGradient = initialData 
        ? 'linear-gradient(135deg, #a78bfa, #8b5cf6)' 
        : 'linear-gradient(135deg, #ec4899, #d946ef)';

    const containerStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        maxWidth: '100%',
        padding: '12px 0 0 0',
        backgroundColor: '#ffffff',
    };

    const fieldGroupStyle = {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '8px',
    };

    const labelStyle = {
        fontSize: '13px',
        fontWeight: '700',
        color: '#475569', 
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    };

    const inputStyle = {
        padding: '12px 16px',
        fontSize: '15px',
        borderRadius: '10px',
        border: '2px solid #e2e8f0', 
        backgroundColor: '#f8fafc',
        color: '#0f172a',
        outline: 'none',
        transition: 'all 0.2s ease',
    };


    const inputFocusStyle = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.style.borderColor = brandPrimary;
        e.target.style.backgroundColor = '#ffffff';
        e.target.style.boxShadow = `0 0 0 4px ${brandPrimary}20`; 
    };

    const inputBlurStyle = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.style.borderColor = '#e2e8f0';
        e.target.style.backgroundColor = '#f8fafc';
        e.target.style.boxShadow = 'none';
    };

    const buttonStyle = {
        width: '100%',
        padding: '14px',
        fontSize: '15px',
        fontWeight: '700',
        color: '#ffffff',
        background: brandGradient,
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        marginTop: '16px',
        boxShadow: `0 4px 12px ${brandPrimary}30`,
        transition: 'all 0.2s ease',
    };

    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        onSubmit({
            id: initialData?.id || Date.now(),
            name,
            email,  
            address: {
                street,
                city,
            },
        });
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit}>
                

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>
                        <span style={{ color: brandPrimary }}>✦</span> Full Name
                    </label>
                    <input 
                        type="text" 
                        placeholder="Ciroma Chukwuma Adekunle" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        onFocus={inputFocusStyle}
                        onBlur={inputBlurStyle}
                        style={inputStyle}
                        required
                    />
                </div>

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>
                        <span style={{ color: brandPrimary }}>✦</span> Email Address
                    </label>
                    <input 
                        type="email" 
                        placeholder="wazobia@example.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        onFocus={inputFocusStyle}
                        onBlur={inputBlurStyle}
                        style={inputStyle}
                        required
                    />
                </div>


                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '28px 0 20px 0' }}>
                    <h3 style={{ margin: 0, fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: '800', whiteSpace: 'nowrap' }}>
                        Region / Location Details
                    </h3>
                    <div style={{ height: '2px', backgroundColor: '#f1f5f9', width: '100%', borderRadius: '2px' }} />
                </div>

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>Street Address</label>
                    <input 
                        type="text" 
                        placeholder="#104, Iwofe Road" 
                        value={street} 
                        onChange={(e) => setStreet(e.target.value)} 
                        onFocus={inputFocusStyle}
                        onBlur={inputBlurStyle}
                        style={inputStyle}
                    />
                </div>

                <div style={fieldGroupStyle}>
                    <label style={labelStyle}>City / State</label>
                    <input 
                        type="text" 
                        placeholder="Port Harcourt, Rivers State" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        onFocus={inputFocusStyle}
                        onBlur={inputBlurStyle}
                        style={inputStyle}
                    />
                </div>


                <button 
                    type="submit" 
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                    {initialData ? 'Save Profile Changes' : 'Add User to Directory'}
                </button> 
            </form>
        </div>
    );
};

export default UserForm;