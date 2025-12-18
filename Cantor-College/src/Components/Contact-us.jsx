import Base from './base';
import sideImg from '../Images/Contact1.jpg';
import bannerImg from '../Images/Contact2.jpg';

const Contact = () => {
	return (
		<Base title="Contact Us" bgImage={bannerImg} sidebarImage={sideImg}>
			<h3>How to contact us:</h3>
            <p>
                Tel:(01321) 2340 235<br />
                Fax: (01321) 2340 236<br />
				Email: info@cantorcollege.ac.uk
            </p>
		</Base>
	);
};

export default Contact;
