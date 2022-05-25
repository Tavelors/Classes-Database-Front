import axios from "axios";
const token = localStorage.getItem("alphstains-secret-user-token");
axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});
const otherURL = `http://localhost:5000/api`;
const originalURL = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getUser = async () => {
  const { data } = await axios.get(`${otherURL}/users/`);
  return data;
};
export const userLogin = async (email, password) => {
  const { data } = await originalURL.post("/users/login/", {
    email: email,
    password: password,
  });
  return data;
};

export const getStudents = async () => {
  const { data } = await axios.get(`${otherURL}/students/students`);
  return data;
};

export const postClass = async (firstName, lastName, student_id) => {
  console.log(student_id);
  console.log(firstName);
  console.log(lastName);
  const { data } = await axios.post(`${otherURL}/class/${student_id}`, {
    firstName: firstName,
    lastName: lastName,
  });
  return data;
};

export const getStudentById = async (student_id) => {
  const { data } = await axios.get(`${otherURL}/students/${student_id}`);
  return data;
};

export const getStudentClass = async (student_id) => {
  const { data } = await axios.get(
    `${otherURL}/class/studentclass/${student_id}`
  );

  return data;
};

export const getPaymentByStudent = async (student_id) => {
  const { data } = await axios.get(`${otherURL}/pay/student/${student_id}`);
  return data;
};

export const getAllPayments = async () => {
  const { data } = await axios.get(`${otherURL}/pay/payment/`);
  return data;
};

export const getTickets = async () => {
  const { data } = await axios.get(`${otherURL}/class/multipleclass/`);
  return data;
};

export const postStudent = async (firstName, lastName) => {
  const { data } = await axios.post(`${otherURL}/students/create/`, {
    firstName: firstName,
    lastName: lastName,
  });
  return data;
};

export const updatePresence = async (
  presenceBool,
  rescheduledBool,
  rescheduledPresenceBool,
  absenceBool,
  class_id
) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    presence: presenceBool,
    rescheduled: rescheduledBool,
    rescheduledPresence: rescheduledPresenceBool,
    absence: absenceBool,
  });
  return data;
};

export const deleteClass = async (class_id) => {
  const { data } = await axios.delete(`${otherURL}/class/delete/${class_id}`);
  return data;
};

export const updateDate = async (class_id, classDate) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    classDate: classDate,
  });

  return data;
};

export const AbsenceDatePick = async (class_id, AbsenceDate) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    AbsenceDate: AbsenceDate,
  });

  return data;
};

export const postAbsenceClass = async (firstName, lastName, student_id) => {
  console.log(student_id);
  console.log(firstName);
  console.log(lastName);
  const { data } = await axios.post(`${otherURL}/class/${student_id}`, {
    firstName: firstName,
    lastName: lastName,
    rescheduledPresence: true,
  });
  return data;
};

export const updateStudentBank = async (student_id, absenceNum) => {
  const { data } = await axios.put(
    `${otherURL}/students/update/${student_id}`,
    {
      bank: absenceNum,
    }
  );

  return data;
};

export const updateStudentPresence = async (student_id, presenceNum) => {
  const { data } = await axios.put(
    `${otherURL}/students/update/${student_id}`,
    {
      presence: presenceNum,
    }
  );

  return data;
};

export const updateStudentBankAndPresence = async (
  student_id,
  absenceNum,
  presenceNum
) => {
  const { data } = await axios.put(
    `${otherURL}/students/update/${student_id}`,
    {
      bank: absenceNum,
      presence: presenceNum,
    }
  );

  return data;
};
