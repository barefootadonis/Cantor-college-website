import { useState, useEffect } from 'react';
import Base from './base';
import sideImg from '../Images/ComputingCourses1.jpg';
import bannerImg from '../Images/ComputingCourses2.jpg';

const Computing = () => {
    const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);


    useEffect(() => {
        fetch('/text-and-data/course-list.json')
            .then(response => response.json())
            .then(data => {
                const computingCourses = data.filter(
                    course => course.CourseSubject === 'Computing'
                );
                setCourseData(computingCourses);
            });
    }, []);

    return (
        <Base title="Computing Courses" bgImage={bannerImg} sidebarImage={sideImg}>
            {selectedCourse === null ? (

                <>
            <div>
                <p>The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.</p>
                <p>The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.</p>
                <p>The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.</p>
            </div>
        <div>
             <h3>Computing Course List</h3>

            <table className="course-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Award</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {courseData.map((course, index) => (
                        <tr key={index}>
                            <td> <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCourse(course); }}> {course.CourseTitle}</a></td>
                            <td>{course.CourseType}</td>
                            <td>{course.CourseAwardName}</td>
                            <td>{course.CourseSummary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div></>
            ) : (

        <div>
                <>
                    <h2>{selectedCourse.CourseTitle}</h2>

                            <p><strong>Course Type:</strong> {selectedCourse.CourseType}</p>
                            <p><strong>Course Summary:</strong> {selectedCourse.CourseSummary}</p>
                            <p><strong>Award Name:</strong> {selectedCourse.CourseAwardName}</p>
                            <p><strong>UCAS Code:</strong> {selectedCourse.UcasCode}</p>
                            <p><strong>UCAS Points:</strong> {selectedCourse.UcasPoints}</p>
                            <p><strong>Year of Entry:</strong> {selectedCourse.YearOfEntry}</p>
                            <p><strong>Mode of Attendance:</strong> {selectedCourse.ModeOfAttendance}</p>
                            <p><strong>Study Length:</strong> {selectedCourse.StudyLength}</p>
                            <p><strong>Foundation Year:</strong> {selectedCourse.HasFoundationYear}</p>
                            <p><strong>Course Subject:</strong> {selectedCourse.CourseSubject}</p>
                            <p><strong>No Longer Recruiting:</strong> {selectedCourse.NoLongerRecruiting}</p>

                    <p>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedCourse(null);
                            }}
                        >
                            ← Back to course list
                        </a>
                    </p>
                </>
        </div>
            )}
        </Base>
    );
};

export default Computing;

