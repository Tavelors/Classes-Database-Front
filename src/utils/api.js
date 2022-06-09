import axios from "axios";
const token = localStorage.getItem("alphstains-secret-user-token");
axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
});
const otherURL = `https://class-schedules-data.herokuapp.com/api`;
const originalURL = axios.create({
  baseURL: "https://class-schedules-data.herokuapp.com/api",
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

export const postClass = async (student_id, logNote) => {
  const { data } = await axios.post(`${otherURL}/class/${student_id}`, {
    logNote,
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
  class_id,
  logNote
) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    presence: presenceBool,
    rescheduled: rescheduledBool,
    rescheduledPresence: rescheduledPresenceBool,
    absence: absenceBool,
    logNote: logNote,
  });
  return data;
};

export const deleteClass = async (class_id, logNote) => {
  const { data } = await axios.delete(`${otherURL}/class/delete/${class_id}`, {
    logNote: logNote,
  });
  return data;
};

export const updateDate = async (class_id, classDate, logNote) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    classDate: classDate,
    logNote: logNote,
  });

  return data;
};

export const AbsenceDatePick = async (class_id, AbsenceDate, logNote) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    AbsenceDate: AbsenceDate,
    logNote: logNote,
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

export const updateStudentBankAndPresence = async (student_id, absenceNum) => {
  const { data } = await axios.put(
    `${otherURL}/students/update/${student_id}`,
    {
      bank: absenceNum,
    }
  );

  return data;
};

export const updateColor = async (colorChange, class_id) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    colorChange: colorChange,
  });
  return data;
};

export const getClassPayment = async (class_id) => {
  const { data } = await axios.get(`${otherURL}/pay/class/${class_id}`);
  return data;
};

export const updateLock = async (class_id, lockBool) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    lockButton: lockBool,
  });
  return data;
};

export const updatePaymentType = async (pay_id, lockBool, logNote) => {
  const { data } = await axios.put(`${otherURL}/pay/update/${pay_id}`, {
    lockButton: lockBool,
  });
  return data;
};

export const updatePaymentDate = async (pay_id, paymentDate) => {
  const { data } = await axios.put(`${otherURL}/pay/update/${pay_id}`, {
    dateChange: paymentDate,
  });
  return data;
};

export const updatePaymentPaid = async (pay_id, paidBool, logNote) => {
  const { data } = await axios.put(`${otherURL}/pay/update/${pay_id}`, {
    paid: paidBool,
    logNote: logNote,
  });
  return data;
};

export const updatePaymentConcluded = async (pay_id, concludedBool) => {
  const { data } = await axios.put(`${otherURL}/pay/update/${pay_id}`, {
    concluded: concludedBool,
  });
  return data;
};

export const putPaymentType = async (pay_id, paymentTypeBool) => {
  const { data } = await axios.put(`${otherURL}/pay/update/${pay_id}`, {
    paymentType: paymentTypeBool,
  });
  return data;
};

// export const putConcludedType = async (pay_id, concluded) => {
//   const { data } = await axios.put(`${otherURL}/pay/update/${pay_id}`, {
//     concluded: concluded,
//   });
//   return data;
// };

export const postNewPayment = async (student_id) => {
  const { data } = await axios.post(`${otherURL}/pay/create/${student_id}`);
  return data;
};

export const updateConcluded = async (student_id, concludedBool, logNote) => {
  const { data } = await axios.put(
    `${otherURL}/students/update/${student_id}`,
    {
      concluded: concludedBool,
      logNote: logNote,
    }
  );
  return data;
};

export const getLogs = async () => {
  const { data } = await axios.get(`${otherURL}/log/`);
  return data;
};

export const getTodays = async () => {
  const { data } = await axios.get(`${otherURL}/class/recent`);
  return data;
};

export const postTenClass = async (student_id) => {
  const { data } = await axios.post(`${otherURL}/class/ten/${student_id}`);
  return data;
};

export const getSortedStudents = async (query) => {
  console.log(query);
  const { data } = await axios.get(
    `${otherURL}/students/sortstudents/?sort_by=${query}`,
    {
      hi: "hi",
    }
  );
  return data;
};

export const postLog = async (logNote) => {
  const { data } = await axios.post(`${otherURL}/log/`, {
    logNote: logNote,
  });
  return data;
};

export const updateNotes = async (class_id, description, logNote) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    description: description,
    logNote: logNote,
  });
  return data;
};

export const getClassById = async (class_id) => {
  const { data } = await axios.get(`${otherURL}/class/singleclass/${class_id}`);
  return data;
};

export const deleteStudent = async (student_id) => {
  const { data } = await axios.delete(`${otherURL}/students/${student_id}`);
  return data;
};

export const deletePay = async (pay_id) => {
  const { data } = await axios.delete(`${otherURL}/pay/delete/${pay_id}`);
  return data;
};

export const removeAbsenceDate = async (class_id) => {
  const { data } = await axios.put(`${otherURL}/class/update/${class_id}`, {
    AbsenceDate: undefined,
  });
  return data;
};
