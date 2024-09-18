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
    semester: "1st Semester",
    courseCode: "CSE-06131115",
    courseTitle: "Basic Electrical Engineering",
    date: "Sunday, September 29, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "1st Semester",
    courseCode: "MAT-05411101",
    courseTitle: "Calculus",
    date: "Tuesday, October 01, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "1st Semester",
    courseCode: "CSE-06131111",
    courseTitle: "Discrete Mathematics",
    date: "Thursday, October 03, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "1st Semester",
    courseCode: "CSE-06131113",
    courseTitle: "Structured Programming Language",
    date: "Sunday, October 06, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "1st Semester",
    courseCode: "SSW-03141101",
    courseTitle: "History of the Emergence of Bangladesh",
    date: "Tuesday, October 08, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "2nd Semester",
    courseCode: "CSE-06132113",
    courseTitle: "Electronic Devices and Circuits",
    date: "Thursday, September 26, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "413",
  },
  {
    semester: "2nd Semester",
    courseCode: "CSE-06131211",
    courseTitle: "Data Structures and Algorithms",
    date: "Sunday, September 29, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "413",
  },
  {
    semester: "2nd Semester",
    courseCode: "MAT-05411203",
    courseTitle: "Linear Algebra",
    date: "Tuesday, October 01, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "413",
  },
  {
    semester: "2nd Semester",
    courseCode: "ENG-02321201",
    courseTitle: "Advanced Functional English",
    date: "Thursday, October 03, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "413",
  },
  {
    semester: "2nd Semester",
    courseCode: "PHY-05331201",
    courseTitle: "Fundamentals of Physics",
    date: "Sunday, October 06, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501",
  },
  {
    semester: "2nd Semester",
    courseCode: "SSW-03141202",
    courseTitle: "Bangladesh Studies",
    date: "Monday, October 07, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501",
  },
  {
    semester: "3rd Semester",
    courseCode: "CSE-06132115",
    courseTitle: "Digital Logic Design",
    date: "Thursday, September 26, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "3rd Semester",
    courseCode: "CSE-06131213",
    courseTitle: "Algorithm Design and Analysis",
    date: "Monday, September 30, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "3rd Semester",
    courseCode: "STA-05422101",
    courseTitle: "Basic Statistics and Probability",
    date: "Wednesday, October 02, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "3rd Semester",
    courseCode: "CSE-06132111",
    courseTitle: "Object Oriented Programming Language",
    date: "Sunday, October 06, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "413",
  },
  {
    semester: "3rd Semester",
    courseCode: "BUS-04112101",
    courseTitle: "Principles of Accounting",
    date: "Tuesday, October 08, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "501",
  },
  {
    semester: "4th Semester",
    courseCode: "CSE-06132215",
    courseTitle: "Theory of Computation",
    date: "Thursday, September 26, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "413",
  },
  {
    semester: "4th Semester",
    courseCode: "CSE-06132211",
    courseTitle: "Introduction to Database Systems",
    date: "Sunday, September 29, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "413",
  },
  {
    semester: "4th Semester",
    courseCode: "CSE-06132213",
    courseTitle: "Operating System",
    date: "Tuesday, October 01, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "413",
  },
  {
    semester: "4th Semester",
    courseCode: "CSE-06132217",
    courseTitle: "Numerical Analysis",
    date: "Thursday, October 03, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "413",
  },
  {
    semester: "4th Semester",
    courseCode: "MAT-05412205",
    courseTitle: "Complex Variables, Laplace Transform and Fourier Series",
    date: "Monday, October 07, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "413",
  },
  {
    semester: "5th Semester",
    courseCode: "CSE-317",
    courseTitle: "Simulation and Modeling",
    date: "Sunday, September 29, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501",
  },
  {
    semester: "5th Semester",
    courseCode: "CSE-315",
    courseTitle: "Communication Engineering",
    date: "Tuesday, October 01, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501",
  },
  {
    semester: "5th Semester",
    courseCode: "CSE-325",
    courseTitle: "Computer Networking",
    date: "Thursday, October 03, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501",
  },
  {
    semester: "5th Semester",
    courseCode: "CSE-323",
    courseTitle: "Management Information Systems",
    date: "Monday, October 07, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501",
  },
  {
    semester: "5th Semester",
    courseCode: "CHE-101",
    courseTitle: "Fundamentals of Chemistry",
    date: "Wednesday, October 09, 2024",
    time: "12:00 PM - 1:30 PM",
    room: "501",
  },
  {
    semester: "6th Semester",
    courseCode: "CSE-413",
    courseTitle: "Web Engineering",
    date: "Thursday, September 26, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "413"
  },
  {
    semester: "6th Semester",
    courseCode: "CSE-317",
    courseTitle: "Simulation and Modeling",
    date: "Sunday, September 29, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501"
  },
  {
    semester: "6th Semester",
    courseCode: "CSE-331",
    courseTitle: "Operating System and System Programming",
    date: "Wednesday, October 02, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "501"
  },
  {
    semester: "6th Semester",
    courseCode: "CSE-455",
    courseTitle: "Machine Learning",
    date: "Sunday, October 06, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501"
  },
  {
    semester: "6th Semester",
    courseCode: "CSE-323",
    courseTitle: "Management Information Systems",
    date: "Monday, October 07, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501"
  },
  {
    semester: "6th Semester",
    courseCode: "MAT-201",
    courseTitle: "Numerical Methods",
    date: "Wednesday, October 09, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501"
  },
  {
    semester: "7th Semester",
    courseCode: "CSE-413",
    courseTitle: "Web Engineering",
    date: "Thursday, September 26, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "413"
  },
  {
    semester: "7th Semester",
    courseCode: "CSE-423",
    courseTitle: "Computer Graphics",
    date: "Monday, September 30, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501"
  },
  {
    semester: "7th Semester",
    courseCode: "CSE-331",
    courseTitle: "Operating System and System Programming",
    date: "Wednesday, October 02, 2024",
    time: "2:00 PM - 3:30 PM",
    room: "501"
  },
  {
    semester: "7th Semester",
    courseCode: "CSE-455",
    courseTitle: "Machine Learning",
    date: "Sunday, October 06, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501"
  },
  {
    semester: "7th Semester",
    courseCode: "CSE-425",
    courseTitle: "Cyber and Intellectual Property Law",
    date: "Tuesday, October 08, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501"
  },
  {
    semester: "8th & 9th Semester",
    courseCode: "CSE-423",
    courseTitle: "Computer Graphics",
    date: "Monday, September 30, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501"
  },
  {
    semester: "8th & 9th Semester",
    courseCode: "CSE-459",
    courseTitle: "Deep Learning",
    date: "Wednesday, October 02, 2024",
    time: "10:00 AM - 11:30 AM",
    room: "501"
  },
  {
    semester: "8th & 9th Semester",
    courseCode: "CSE-425",
    courseTitle: "Cyber and Intellectual Property Law",
    date: "Tuesday, October 08, 2024",
    time: "4:00 PM - 5:30 PM",
    room: "501"
  }
  // Add more exam data similarly
];
