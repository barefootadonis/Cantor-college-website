import Base from './base';
import sideImg from '../Images/FindUs1.jpeg';
import bannerImg from '../Images/FindUs2.jpeg';

const Find = () => {
	return (
		<Base title="How To Find Us" bgImage={bannerImg} sidebarImage={sideImg}>
			<h3>How to find us:</h3>
            <p>
                Cantor College<br />
                Main Street<br />
                Sheffield<br />
                SC4 2BB
            </p>
		</Base>
	);
};


export default Find;