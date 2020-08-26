import React from 'react';
import Jeremy from '../images/Jeremy.jpg';
import Henrik from '../images/Henrik.jpg';
import adrianna from '../images/adrianna.jpg';
import europeana from '../images/europeana.jpg';
import Mr from '../images/Mr.jpg';
import Steve from '../images/Steve.jpg';
import './artists.css';
import Layout from '../components/layout';
import Carousel from 'nuka-carousel';

function Artists() {
	return (
		<Layout>
			<ul className="artist">
				<li>
					<div className="txt-wrapper">
						<h2>Paula Elion, Jerusalem</h2>
						<a href="https://www.instagram.com/">instagram</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
						<p>
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="img-wrapper">
						
						<Carousel>
						<img src={Jeremy} alt="" />
							<img src={adrianna} alt="" />
							<img src={europeana} alt="" />
						</Carousel>
					</div>
					
				</li>
				<li>
					<div className="txt-wrapper">
						<h2>Bettina Semmer, Berlin</h2>
						<a href="https://www.instagram.com/">instagram</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="img-wrapper">
						
						<Carousel>
						<img src={Henrik} alt="" />
							<img src={adrianna} alt="" />
							<img src={europeana} alt="" />
						</Carousel>
					</div>
				</li>
				<li>
					<div className="txt-wrapper">
						<h2>Marc Jordi, Berlin</h2>
						<a href="https://www.instagram.com/">instagram</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="img-wrapper">
					<Carousel>
							<img src={Mr} alt="" />
							<img src={adrianna} alt="" />
							<img src={europeana} alt="" />
						</Carousel>
						
					</div>
				</li>
				<li>
					<div className="txt-wrapper">
						<h2>Lili &amp; Jesko, Berlin</h2>

						<a href="https://www.instagram.com/">instagram</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="img-wrapper">
						<Carousel>
							<img src={adrianna} alt="" />
							<img src={europeana} alt="" />
						</Carousel>
					</div>
				</li>
				<li>
					<div className="txt-wrapper">
						<a href="https://www.instagram.com/">instagram</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="img-wrapper">
						<img src={Steve} alt="" />
					</div>
				</li>
			</ul>
		</Layout>
	);
}

export default Artists;
