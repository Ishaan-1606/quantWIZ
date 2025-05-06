import axios from "axios";
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(
    "/user/login",
    { email, password },
    { withCredentials: true }
  );
  if (res.status !== 200 && res.status !== 203) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (name:string,email: string, password: string) => {
  const res = await axios.post(
    "/user/signup",
    { name,email, password },
    { withCredentials: true }
  );
  if (res.status !== 201 && res.status !== 203) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  console.log(res.status);
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chat/new", { message });
  console.log(res.status);
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  const res = await axios.get("/chat/all-chats");
  console.log(res.status);
  if (res.status !== 200) {
    throw new Error("Unable to get chat");
  }
  const data = await res.data;
  return data;
};


export const deleteUserChats = async () => {
  const res = await axios.delete("/chat/delete");
  console.log(res.status);
  if (res.status !== 200) {
    throw new Error("Unable to delete chat");
  }
  const data = await res.data;
  return data;
};


export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  console.log(res.status);
  if (res.status !== 200) {
    throw new Error("Unable to logout");
  }
  const data = await res.data;
  return data;
};
