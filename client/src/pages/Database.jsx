import Auth from "../utils/auth";
import ProfileCard from "../components/Database/ProfileCard";
import Sidebar from "../components/UI/Sidebar";
import { useQuery } from "@apollo/client";
import { QUERY_DATABASEBYUSER } from "../utils/queries";

const containerStyle = {
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#fff",
};

export default function Database() {
  const { loggedIn } = Auth;
  if (!loggedIn()) {
    return <p>Please Log In</p>;
  }

  const { getProfile } = Auth;
  const user = getProfile();
  console.log(user.data._id);
  // "666643f1d7aba59e6bc4eedb"
  const { loading, error, data } = useQuery(QUERY_DATABASEBYUSER, {
    variables: {
      userId: user.data._id,
    },
  });
  console.log(data);
  if (data) {
    return (
      <div style={containerStyle}>
        <Sidebar database={data} />
        <ProfileCard />
      </div>
    );
  } else return <Sidebar database={data} />;
}
