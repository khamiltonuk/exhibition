import React from 'react';
import Scene from './Scene';
import AnotherScene from './AnotherScene';
import OneMoreScene from './OneMoreScene';

import Layout from '../components/layout';

const EventPage = () => (
	<Layout>
		<h1>Event pages</h1>
		<img scr="../myimage" alt="" />
		<Scene />
		<AnotherScene />
		<OneMoreScene />
		<nav className="mainNav | visually-hidden">
			<ul>
				<li>
					<a href="#Watermelon">Watermelon</a>
				</li>
				<li>
					<a href="#Banana">Banana</a>
				</li>
				<li>
					<a href="#Banana">Strawberry</a>
				</li>
			</ul>
		</nav>
		<canvas id="stage" />
	</Layout>
);

export default EventPage;
