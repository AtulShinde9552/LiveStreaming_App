import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [roomId, setRoomId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleJoin = () => {
        if (roomId.trim() === "") {
            setErrorMessage("Please enter a room ID");
        } else {
            navigate(`/room/${roomId}`);
        }
    };

    return (
        <>
          <h1 className='Heading'>Live Streaming App</h1>
        <div className="container">
            <span className='subHeading'>Enter any random name into the input field, then convert it into a shareable Streaming link</span>
            <input
                className="input-field"
                type="text"
                placeholder='Enter Your RoomId'
                value={roomId}
                onChange={e => {
                    setRoomId(e.target.value);
                    setErrorMessage(""); 
                }}
            />
            <button className="button" onClick={handleJoin}>Join</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        </>
          
    );
};

export default Home;
