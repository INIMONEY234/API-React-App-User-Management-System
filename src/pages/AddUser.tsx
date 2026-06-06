import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks'; 
import { addUser } from '../store/userSlice';
import UserForm from '../components/UserForm';
import type { UserFormData } from '../components/UserForm'; 
import type { User } from '../types/user';

const AddUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formData: UserFormData) => {
    try { 
      const newUserPayload: User = {
        id: formData.id,
        name: formData.name,
        email: formData.email,
        address: {
          street: formData.address.street,
          city: formData.address.city
        }
      };

      dispatch(addUser(newUserPayload));
      navigate('/users');
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  }; 

  const pageContainerStyle = {
    backgroundColor: '#f1f5f9', 
    minHeight: '100vh',
    padding: '14px 10px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  };

  const headerWrapperStyle = {
    width: '100%',
    maxWidth: '460px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const backLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#ec4899', 
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'transform 0.2s ease',
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
          <svg style={{ width: '10px', height: '10px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Directory
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
        
  
        <div style={{ 
          height: '10px', 
          background: 'linear-gradient(90deg, #ec4899, #a855f7, #6366f1)' 
        }} />

 
        <div style={{ padding: '20px 20px 8px 20px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px',
            backgroundColor: '#fce7f3', 
            padding: '4px 4px', 
            borderRadius: '12px',
            marginBottom: '6px'
          }}>
            <span style={{ width: '6px', height: '4px', backgroundColor: '#ec4899', borderRadius: '50%' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#db2777' }}>
              Onboarding User Information
            </span>
          </div>
          
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>
            Create User Profile
          </h2>
          <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
            Set up credentials and user details.
          </p>
        </div>


        <div style={{ padding: '12px 24px 28px 24px' }}>
          <UserForm onSubmit={handleSubmit} />
        </div>

      </div>
    </div>
  );
};

export default AddUser;