import { useState } from 'react';
import { toast } from 'react-toastify';
import { Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    occupation: '',
    location: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Custom styled toast
  const showToast = (msg, type = 'info') => {
    // Always use green for 'success', red for 'error', blue for info/other
    let bg = '#19d241ff';
    if (type === 'success') bg = '#388e3c';
    if (type === 'error') bg = '#d32f2f';
    toast(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: '#fff',
        background: bg,
        borderRadius: 6,
        padding: '12px 18px',
        minWidth: 220,
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        fontWeight: 500
      }}>
        {type === 'success' && <CheckCircle2 size={22} color="#fff" style={{ flexShrink: 0 }} />}
        {type === 'error' && <XCircle size={22} color="#fff" style={{ flexShrink: 0 }} />}
        <div>{msg}</div>
      </div>,
      {
        position: 'top-right',
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        autoClose: 3000,
        style: { background: 'transparent', boxShadow: 'none', padding: 0 },
        bodyStyle: { padding: 0, margin: 0 }
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // LOGIN
      try {
        const res = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            username: formData.email,
            password: formData.password,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Login failed");
        showToast("Login successful!", "success");
        // localStorage.setItem("token", data.access_token);
      } catch (err) {
        showToast(err.message, "error");
      }
    } else {
      // SIGNUP
      if (formData.password !== formData.confirmPassword) {
        showToast("Passwords do not match", "error");
        return;
      }
      try {
        const res = await fetch("http://localhost:8000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            age: Number(formData.age),
            password: formData.password,
            contact_number: formData.occupation, // occupation field used as contact number
            university_location: formData.location,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Signup failed");
        showToast("Signup successful! Please login.", "success");
        setIsLogin(true);
      } catch (err) {
        showToast(err.message, "error");
      }
    }
  };

  const WomenSilhouetteSVG = () => (
    <svg viewBox="0 0 400 300" style={{ width: '100%', height: '200px' }}>
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#822c87" />
          <stop offset="50%" stopColor="#ed6da6" />
          <stop offset="100%" stopColor="#f19fc5" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f19fc5" />
          <stop offset="100%" stopColor="#ed6da6" />
        </linearGradient>
      </defs>
      
      {/* Background circles */}
      <circle cx="100" cy="150" r="80" fill="#f19fc5" opacity="0.6" />
      <circle cx="300" cy="100" r="60" fill="#ed6da6" opacity="0.4" />
      
      {/* Woman silhouettes */}
      <g transform="translate(50, 80)">
        <path d="M50 40 C50 20, 70 10, 90 40 L90 60 C90 80, 80 90, 70 100 L70 180 L30 180 L30 100 C20 90, 10 80, 10 60 L10 40 Z" 
              fill="#822c87" opacity="0.9" />
      </g>
      
      <g transform="translate(150, 60)">
        <path d="M40 30 C40 15, 55 5, 75 30 L75 50 C75 70, 65 80, 55 90 L55 170 L25 170 L25 90 C15 80, 5 70, 5 50 L5 30 Z" 
              fill="#ed6da6" opacity="0.8" />
      </g>
      
      <g transform="translate(250, 90)">
        <path d="M45 35 C45 18, 62 8, 82 35 L82 55 C82 75, 72 85, 62 95 L62 175 L28 175 L28 95 C18 85, 8 75, 8 55 L8 35 Z" 
              fill="#f19fc5" opacity="0.7" />
      </g>
    </svg>
  );

  const HomeSVG = () => (
    <svg viewBox="0 0 200 200" style={{ width: '60px', height: '60px', marginBottom: '20px' }}>
      <defs>
        <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f19fc5" />
          <stop offset="100%" stopColor="#ed6da6" />
        </linearGradient>
      </defs>
      
      <path d="M100 20 L170 80 L170 170 L30 170 L30 80 Z" fill="#f19fc5" opacity="0.9" />
      <rect x="60" y="120" width="30" height="40" fill="#822c87" opacity="0.8" />
      <rect x="110" y="100" width="25" height="25" fill="#822c87" opacity="0.8" />
      <rect x="140" y="100" width="25" height="25" fill="#822c87" opacity="0.8" />
      <path d="M100 20 L170 80 L30 80 Z" fill="#822c87" />
    </svg>
  );

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
                 <div style={styles.brandSection}>
           {/* <HomeSVG /> */}
                         <img
      src="/src/assets/logo.png"
      alt="Logo"
      style={{ width: '80px', height: '80px', display: 'block', margin: '0 auto 10px auto' }}
    />
           <h1 style={styles.brandTitle}>Harmony Match</h1>
          <p style={styles.brandSubtitle}>Find Your Perfect Female Roommate</p>
        </div>
        
        <div style={styles.illustrationContainer}>
          <WomenSilhouetteSVG />
        </div>
        
        <div style={styles.features}>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🏠</div>
            <span>Safe & Verified Listings</span>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>👥</div>
            <span>Women-Only Community</span>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🔒</div>
            <span>Privacy Protected</span>
          </div>
        </div>
      </div>

      <div style={styles.rightPanel}>
        <div style={styles.authContainer}>
          <div style={styles.toggleContainer}>
            <button
              style={{
                ...styles.toggleButton,
                ...(isLogin ? styles.activeToggle : styles.inactiveToggle)
              }}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              style={{
                ...styles.toggleButton,
                ...(isLogin ? styles.inactiveToggle : styles.activeToggle)
              }}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>
              {isLogin ? 'Welcome Back!' : 'Join Our Community'}
            </h2>
            <p style={styles.formSubtitle}>
              {isLogin 
                ? 'Sign in to find your perfect roommate' 
                : 'Create your account to get started'}
            </p>

            <div style={styles.form}>
              {!isLogin && (
                <div style={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={styles.input}
                    required
                  />
                </div>
              )}

              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={styles.input}
                    required
                  />
                  <span
                    onClick={() => setShowPassword((v) => !v)}
                    style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#822c87' }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              </div>

              {!isLogin && (
                <>
                  <div style={styles.inputGroup}>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                      />
                      <span
                        onClick={() => setShowConfirmPassword((v) => !v)}
                        style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#822c87' }}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </span>
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.inputGroup}>
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                      />
                    </div>
                    <div style={styles.inputGroup}>
                      <input
                        type="text"
                        name="occupation"
                        placeholder="Occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      name="location"
                      placeholder="Preferred Location"
                      value={formData.location}
                      onChange={handleInputChange}
                      style={styles.input}
                      required
                    />
                  </div>
                </>
              )}

              {isLogin && (
                <div style={styles.forgotPassword}>
                  <a href="#" style={styles.forgotLink}>Forgot Password?</a>
                </div>
              )}

              <button type="button" onClick={handleSubmit} style={styles.submitButton}>
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>

            <p style={styles.termsText}>
              By {isLogin ? 'signing in' : 'signing up'}, you agree to our{' '}
              <a href="#" style={styles.link}>Terms of Service</a> and{' '}
              <a href="#" style={styles.link}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#822c87'
  },
  leftPanel: {
    flex: 1,
    backgroundColor: '#822c87',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // lift content up
    alignItems: 'center',
    padding: '40px',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '60px', // add extra top padding
  },
  brandSection: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  brandTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 10px 0',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  brandSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.9)',
    margin: 0,
    fontWeight: '300'
  },
  illustrationContainer: {
    marginBottom: '40px',
    maxWidth: '400px',
    width: '100%'
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start'
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '500'
  },
  featureIcon: {
    fontSize: '1.5rem',
    backgroundColor: '#f19fc5',
    color: '#822c87',
    padding: '10px',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start', // align content to top
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#f19fc5',
    height: '100vh',
    overflowY: 'auto',
  },
  authContainer: {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 20px 40px rgba(130, 44, 135, 0.15)',
    border: '2px solid #ed6da6',
  },
  toggleContainer: {
    display: 'flex',
    backgroundColor: '#f19fc5',
    borderRadius: '12px',
    padding: '6px',
    marginBottom: '30px',
    position: 'relative'
  },
  toggleButton: {
    flex: 1,
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 1
  },
  activeToggle: {
    backgroundColor: '#822c87',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(130, 44, 135, 0.3)'
  },
  inactiveToggle: {
    backgroundColor: 'transparent',
    color: '#822c87'
  },
  formContainer: {
    textAlign: 'center'
  },
  formTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#822c87',
    marginBottom: '8px'
  },
  formSubtitle: {
    color: '#718096',
    marginBottom: '30px',
    fontSize: '1rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '20px'
  },
  inputGroup: {
    flex: 1
  },
  row: {
    display: 'flex',
    gap: '15px'
  },
  input: {
    width: '100%',
    padding: '15px 20px',
    border: '2px solid #ed6da6',
    borderRadius: '12px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box'
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: '-10px'
  },
  forgotLink: {
    color: '#822c87',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  submitButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#822c87',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px'
  },
  divider: {
    position: 'relative',
    margin: '30px 0',
    textAlign: 'center'
  },
  dividerText: {
    background: 'white',
    padding: '0 20px',
    color: '#a0aec0',
    fontSize: '0.9rem'
  },
  googleButton: {
    width: '100%',
    padding: '14px',
    border: '2px solid #ed6da6',
    borderRadius: '12px',
    backgroundColor: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '20px'
  },
  googleIcon: {
    width: '20px',
    height: '20px',
    backgroundColor: '#822c87',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  termsText: {
    fontSize: '0.85rem',
    color: '#718096',
    lineHeight: '1.5',
    margin: 0
  },
  link: {
    color: '#822c87',
    textDecoration: 'none',
    fontWeight: '500'
  }
};

// Add hover effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  input:focus {
    border-color: #822c87 !important;
    box-shadow: 0 0 0 3px rgba(130, 44, 135, 0.1) !important;
  }
  
  button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 25px rgba(130, 44, 135, 0.2) !important;
  }
  
  .google-button:hover {
    border-color: #822c87 !important;
    background: #fafafa !important;
  }
  
  .submit-button:hover {
    background-color: #6d2373 !important;
  }
  
  a:hover {
    text-decoration: underline !important;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column !important;
    }
    
    .left-panel {
      min-height: 40vh !important;
      padding: 20px !important;
    }
    
    .right-panel {
      padding: 20px !important;
    }
    
    .auth-container {
      padding: 30px 20px !important;
    }
    
    .row {
      flex-direction: column !important;
      gap: 20px !important;
    }
    
    .brand-title {
      font-size: 2rem !important;
    }
    
    .features {
      flex-direction: row !important;
      flex-wrap: wrap !important;
      justify-content: center !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Login;