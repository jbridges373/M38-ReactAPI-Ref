export const signUp = async (signObj, setter) => {
    try {
      let path = process.env.REACT_APP_REST_API; //grab url from .env file http://localhost:5001/
      if (signObj.email) {
        path += "user"; //add user to localhost path
      } else {
        path += "login"; //add login to localhost path
      }
      const res = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signObj),
      });
      const data = await res.json();
      setter(data.user.username);
      localStorage.setItem("myToken", data.token);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const fetchPhotos = async (setter) => {
    try {
      const res = await fetch(process.env.REACT_APP_LOREM_PICSUM);
      const data = await res.json();
      setter(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const tokenFetch = async (setter) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "GET",
        headers: { Authorization: localStorage.getItem("myToken") },
      });
      const data = await res.json();
      setter(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updateFetch = async (filterObj, updateObj, setter) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filterObj,
          updateObj,
        }),
      });
      const data = await res.json();
      if (data.msg !== "Successfully Updated") {
        throw new Error(data.msg);
      }
      if (updateObj.username) {
        setter(updateObj.username);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteFetch = async (setter) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "DELETE",
        headers: { Authorization: localStorage.getItem("myToken") },
      });
      const data = await res.json();
      if (data.msg !== "Successfully Deleted") {
        throw new Error(data.msg);
      } else {
        setter();
      }
    } catch (error) {
      console.log(error);
    }
  };