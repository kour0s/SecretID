import { useNavigate } from "react-router-dom";

function generateRoomID() {
  return "ROOM-" + Math.random().toString(36).substring(2, 6).toUpperCase();
}

function Home() {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const roomID = generateRoomID();
    navigate(`/room/${roomID}`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center gap-6">
      <h1 className="text-3xl font-bold">Bienvenue sur SecretID</h1>
      <button
        className="bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800"
        onClick={handleCreateRoom}
      >
        Créer une salle
      </button>
    </div>
  );
}

export default Home;
