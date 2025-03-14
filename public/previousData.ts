export interface Exam {
  semester: string;
  courseCode: string;
  courseTitle: string;
  date: string;
  time: string;
  room: string;
}

export const exams: Exam[] = [
  {
    semester: "1st",
    courseCode: "CSE-06131111",
    courseTitle: "Discrete Mathematics",
    date: "Monday, December 23, 2024",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },
  {
    semester: "1st",
    courseCode: "CSE-06131115",
    courseTitle: "Basic Electrical Engineering",
    date: "Thursday, December 26, 2024",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },
  {
    semester: "1st",
    courseCode: "CSE-06131113",
    courseTitle: "Structured Programming Language",
    date: "Sunday, December 29, 2024",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },
  {
    semester: "1st",
    courseCode: "MAT-05411101",
    courseTitle: "Calculus",
    date: "Wednesday, January 01, 2025",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },
  {
    semester: "1st",
    courseCode: "SSW-03141011",
    courseTitle: "History of the Emergence of Bangladesh",
    date: "Monday, January 06, 2025",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },

  {
    semester: "2nd",
    courseCode: "CSE-06131213",
    courseTitle: "Electronic Devices and Circuits",
    date: "Sunday, December 22, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "413",
  },
  {
    semester: "2nd",
    courseCode: "CSE-06131211",
    courseTitle: "Data Structures and Algorithms",
    date: "Tuesday, December 24, 2024",
    time: "12:30 PM - 2:30 PM",
    room: "413",
  },
  {
    semester: "2nd",
    courseCode: "SSW-03141202",
    courseTitle: "Bangladesh Studies",
    date: "Monday, December 30, 2024",
    time: "12:30 PM - 2:30 PM",
    room: "413",
  },
  {
    semester: "2nd",
    courseCode: "MAT-05411203",
    courseTitle: "Linear Algebra",
    date: "Thursday, January 02, 2025",
    time: "3:00 PM - 5:00 PM",
    room: "413",
  },
  {
    semester: "2nd",
    courseCode: "ENG-02321201",
    courseTitle: "Advanced Functional English",
    date: "Sunday, January 05, 2025",
    time: "12:30 PM - 2:30 PM",
    room: "413",
  },
  {
    semester: "2nd",
    courseCode: "PHY-05331201",
    courseTitle: "Fundamentals of Physics",
    date: "Tuesday, January 07, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "413",
  },

  {
    semester: "3rd",
    courseCode: "CSE-06132115",
    courseTitle: "Digital Logic Design",
    date: "Sunday, December 22, 2024",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },
  {
    semester: "3rd",
    courseCode: "CSE-06132111",
    courseTitle: "Object Oriented Programming Language",
    date: "Thursday, December 26, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "3rd",
    courseCode: "CSE-06132113",
    courseTitle: "Algorithm Design and Analysis",
    date: "Monday, December 30, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "3rd",
    courseCode: "STA-05422101",
    courseTitle: "Basic Statistics and Probability",
    date: "Wednesday, January 01, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "3rd",
    courseCode: "BUS-04121101",
    courseTitle: "Principles of Accounting",
    date: "Sunday, January 05, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "413",
  },

  {
    semester: "4th",
    courseCode: "CSE-06132211",
    courseTitle: "Introduction to Database Systems",
    date: "Monday, December 23, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "4th",
    courseCode: "MAT-05412205",
    courseTitle: "Complex Variables, Laplace Transform and Fourier Series",
    date: "Thursday, December 26, 2024",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "4th",
    courseCode: "CSE-06132217",
    courseTitle: "Numerical Analysis",
    date: "Sunday, December 29, 2024",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "4th",
    courseCode: "CSE-06132213",
    courseTitle: "Operating System",
    date: "Wednesday, January 01, 2025",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "4th",
    courseCode: "CSE-06132215",
    courseTitle: "Theory of Computation",
    date: "Monday, January 06, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },

  {
    semester: "5th",
    courseCode: "CSE-325",
    courseTitle: "Computer Networking",
    date: "Monday, December 23, 2024",
    time: "3:00 PM - 5:00 PM",
    room: "413",
  },
  {
    semester: "5th",
    courseCode: "CSE-317",
    courseTitle: "Simulation and Modeling",
    date: "Sunday, December 29, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "5th",
    courseCode: "CSE-323",
    courseTitle: "Management Information Systems",
    date: "Thursday, January 02, 2025",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },
  {
    semester: "5th",
    courseCode: "CSE-315",
    courseTitle: "Communication Engineering",
    date: "Sunday, January 05, 2025",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "5th",
    courseCode: "CHE-101",
    courseTitle: "Fundamentals of Chemistry",
    date: "Tuesday, January 07, 2025",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },

  {
    semester: "6th",
    courseCode: "CSE-455",
    courseTitle: "Machine Learning",
    date: "Sunday, December 22, 2024",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "6th",
    courseCode: "CSE-317",
    courseTitle: "Simulation and Modeling",
    date: "Sunday, December 29, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "6th",
    courseCode: "MAT-201",
    courseTitle: "Numerical Methods",
    date: "Tuesday, December 31, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "6th",
    courseCode: "CSE-323",
    courseTitle: "Management Information Systems",
    date: "Thursday, January 02, 2025",
    time: "12:30 PM - 2:30 PM",
    room: "501",
  },
  {
    semester: "6th",
    courseCode: "CSE-331",
    courseTitle: "Operating System and System Programming",
    date: "Monday, January 06, 2025",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "6th",
    courseCode: "CSE-413",
    courseTitle: "Web Engineering",
    date: "Wednesday, January 08, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "413",
  },

  {
    semester: "7th",
    courseCode: "CSE-455",
    courseTitle: "Machine Learning",
    date: "Sunday, December 22, 2024",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "7th",
    courseCode: "CSE-425",
    courseTitle: "Cyber and Intellectual Property Law",
    date: "Tuesday, December 24, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "7th",
    courseCode: "CSE-423",
    courseTitle: "Computer Graphics",
    date: "Thursday, January 02, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "7th",
    courseCode: "CSE-331",
    courseTitle: "Operating System and System Programming",
    date: "Monday, January 06, 2025",
    time: "3:00 PM - 5:00 PM",
    room: "501",
  },
  {
    semester: "7th",
    courseCode: "CSE-413",
    courseTitle: "Web Engineering",
    date: "Wednesday, January 08, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "413",
  },

  {
    semester: "8th & 9th Semester",
    courseCode: "CSE-425",
    courseTitle: "Cyber and Intellectual Property Law",
    date: "Tuesday, December 24, 2024",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
  {
    semester: "8th & 9th Semester",
    courseCode: "CSE-459",
    courseTitle: "Deep Learning",
    date: "Monday, December 30, 2024",
    time: "3:00 PM - 5:00 PM",
    room: "413",
  },
  {
    semester: "8th & 9th Semester",
    courseCode: "CSE-423",
    courseTitle: "Computer Graphics",
    date: "Thursday, January 02, 2025",
    time: "10:00 AM - 12:00 PM",
    room: "501",
  },
];
