import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections || []);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error("Error fetching connections:", err);
    }
  };

  if (!connections) return;

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-3xl text-white">Connections</h1>

      {connections.map((connection, index) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded"
                src={photoUrl}
              ></img>
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>about</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
