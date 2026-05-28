// 1. Initialize states with empty strings instead of undefined
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    // 2. Updated click handler with proper validation and error tracking
    let handleAuth = async (e) => {
        // Safe check to prevent any default form reloads if triggered via Enter key
        if(e && e.preventDefault) e.preventDefault(); 
        
        setError(""); // Clear old errors on click
        console.log("Form tracking trigger -> FormState:", formState, { name, username, password });

        // Simple validation check before hitting the context
        if (!username || !password || (formState === 1 && !name)) {
            setError("All fields are required.");
            return;
        }

        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);
                console.log("Login success:", result);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log("Registration success:", result);
                setUsername("");
                setPassword("");
                setName("");
                setMessage(result || "Registration Successful!");
                setOpen(true);
                setFormState(0);
            }
        } catch (err) {
            console.error("Caught error in auth page:", err);
            
            // Safe parsing of backend errors so your frontend doesn't crash
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message || "Something went wrong. Is your backend server running?");
            }
        }
    }