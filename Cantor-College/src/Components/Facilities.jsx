import Base from './base';
import sideImg from '../Images/Facilities1.jpg';
import bannerImg from '../Images/Facilities2.jpg';

const Facilities = () => {
	return (
		<Base title="Facilities" bgImage={bannerImg} sidebarImage={sideImg}>
			<h3>Our Facilities</h3>
            <p>
                The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.
            </p>
			<p>
				Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.
			</p>
			<div><h4>Facilities include:</h4>
				<ul>
					<li>Wi-Fi technology</li>
					<li>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
					<li>Specialist faculty facilities</li>
					<li>A double height lecture theatre at first and second floor level</li>
					<li>Dramatic three-storey glass open atrium</li>
					<li>Meeting rooms</li>
					<li>Office accommodation</li>
					<li>Specialist IT facilities</li>
					<li>Reception desk area</li>
					<li>Catering outlet</li>
					<li>Parking for disabled badge holders</li>
					<li>Cycle racks</li>
					<li>Gallery</li>
				</ul>
			</div>
		</Base>
	);
};

export default Facilities;
