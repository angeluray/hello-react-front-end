import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingGreeting } from "../redux/greeting/greetingReducer";

function Greeting() {
  const dispatch = useDispatch();
  const GeneratorGreeting = useSelector((state) => state.greeting);

    useEffect(() => {
        dispatch(fetchingGreeting());
      }, [dispatch]);

    return (
    <div>{GeneratorGreeting.slice(0, 1).map((greeting) => (
        <h1 key={greeting.id}>{greeting.message}</h1>
    ))}
    </div>
    );
};

export default Greeting;