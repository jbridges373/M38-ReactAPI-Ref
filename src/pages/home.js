import Navbar from "../components/navbar";

const Home = ({ user, setter }) => {
  return (
    <div>
      <Navbar user={user} setter={setter} />
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default Home;