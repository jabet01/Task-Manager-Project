import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("❌ Email and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        setMessage(`❌ ${data.message || "Registration failed"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Network or server error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register Account</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    borderRadius: "12px",
    textAlign: "center",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "1rem",
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#2c2c2c",
    color: "#fff",
  },
  button: {
    padding: "0.8rem 1.2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#646cff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
