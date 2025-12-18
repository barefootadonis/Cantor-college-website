import { useState, useEffect } from 'react';
import Base from './base';
import sideImg from '../Images/DesignCourses1.jpg';
import bannerImg from '../Images/DesignCourses2.jpg';

const Design = () => {

	const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);


    useEffect(() => {
        fetch('/text-and-data/course-list.json')
            .then(response => response.json())
            .then(data => {
                const designCourses = data.filter(
                    course => course.CourseSubject === 'Art and design'
                );
                setCourseData(designCourses);
            });
    }, []);

	return (
		<Base title="Design Courses" bgImage={bannerImg} sidebarImage={sideImg}>
            {selectedCourse === null ? (

                <>
            <div>
                <p>The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.</p>
                <p>The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.</p>
                <p>You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.</p>
            </div>
        <div>
             <h3>Design Course List</h3>

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

export default Design;
