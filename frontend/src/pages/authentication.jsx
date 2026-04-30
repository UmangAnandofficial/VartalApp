import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const goldFieldStyles = {
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        '& fieldset': { borderColor: 'rgba(212, 175, 55, 0.3)' },
        '&:hover fieldset': { borderColor: 'rgba(212, 175, 55, 0.6)' },
        '&.Mui-focused fieldset': { borderColor: '#d4af37' },
    },
    '& .MuiInputLabel-root': { color: '#888' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' },
};

export default function Authentication() {

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();

    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {
            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }

    return (
        <div className="authPageContainer">
            <CssBaseline />

            {/* LEFT side — branding */}
            <div className="authLeft">
                <div className="authBrand">
                    <h1>वार्तालाप</h1>
                    <span className='navTagline'>Vartal<span style={{ color: '#d4af37' }}>App</span></span>
                </div>
                <div className="authQuote">
                    <p className="quoteOpen">"</p>
                    <h2>Where every conversation feels like home.</h2>
                    <p className="quoteSub">दूरियां मिटाएं, अपनों से जुड़ें।</p>
                </div>
                <div className="authFeatures">
                    <div className="featureItem">
                        <span className="featureDot"></span>
                        <p>HD video & crystal-clear audio</p>
                    </div>
                    <div className="featureItem">
                        <span className="featureDot"></span>
                        <p>End-to-end encrypted conversations</p>
                    </div>
                    <div className="featureItem">
                        <span className="featureDot"></span>
                        <p>Unlimited meetings, anytime</p>
                    </div>
                </div>
            </div>

            {/* RIGHT side — form */}
            <div className="authRight">
                <div className="authCard">
                    <div className="authHeader">
                        <span className="authBadge">✦ {formState === 0 ? "WELCOME BACK" : "JOIN VARTALAAP"}</span>
                        <h2>{formState === 0 ? "Sign in to your account" : "Create your account"}</h2>
                        <p>{formState === 0 ? "Enter your details to continue" : "Start your video calling journey"}</p>
                    </div>

                    <div className="authTabs">
                        <button
                            className={`authTab ${formState === 0 ? 'authTabActive' : ''}`}
                            onClick={() => setFormState(0)}
                        >
                            Sign In
                        </button>
                        <button
                            className={`authTab ${formState === 1 ? 'authTabActive' : ''}`}
                            onClick={() => setFormState(1)}
                        >
                            Sign Up
                        </button>
                    </div>

                    <Box component="form" noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {formState === 1 ?
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                                sx={goldFieldStyles}
                            /> : <></>}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={username}
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                            sx={goldFieldStyles}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={goldFieldStyles}
                        />

                        {error && <p className="authError">{error}</p>}

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={handleAuth}
                            className="authSubmitBtn"
                        >
                            {formState === 0 ? "Sign In →" : "Create Account →"}
                        </Button>
                    </Box>
                </div>
            </div>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
            />
        </div>
    );
}