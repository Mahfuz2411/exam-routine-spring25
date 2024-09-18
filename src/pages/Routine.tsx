import React, { useState } from 'react';
import { exams } from '../data';

const RoutinePage: React.FC = () => {
  // State for selected semester
  const [selectedSemester, setSelectedSemester] = useState<string>('');

  // Handler for semester selection
  const handleSemesterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(event.target.value);
  };

  // Filter exams based on selected semester
  const filteredExams = exams.filter(exam => exam.semester === selectedSemester);

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Exam Routine Fall-2024</h1>
        <p className='pb-6'>Created by <a href="https://github.com/Mahfuz2411" className='font-bold'>Mahfuz</a> with the help of <span className='font-bold'>Chatgpt</span></p>
        <div>
          <label htmlFor="semester" className="block text-lg mb-2">Select Semester:</label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={handleSemesterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">-- Select Semester --</option>
            <option value="1st Semester">1st Semester</option>
            <option value="2nd Semester">2nd Semester</option>
            <option value="3rd Semester">3rd Semester</option>
            <option value="4th Semester">4th Semester</option>
            <option value="5th Semester">5th Semester</option>
            <option value="6th Semester">6th Semester</option>
            <option value="7th Semester">7th Semester</option>
            <option value="8th & 9th Semester">8th & 9th Semester</option>
          </select>
        </div>
      </div>

      {/* Routine Table */}
      {selectedSemester ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Routine for {selectedSemester}</h2>
          {filteredExams.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Course Code</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Course Title</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Room</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredExams.map((exam, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exam.courseCode}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.courseTitle}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No exams found for the selected semester.</p>
          )}
        </>
      ) : (
        <p>Please select a semester to view exams.</p>
      )}
    </div>
  );
};

export default RoutinePage;
