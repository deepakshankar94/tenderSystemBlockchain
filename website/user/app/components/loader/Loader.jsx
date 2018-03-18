import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './loader.sass';

@CSSModules(styles, { allowMultiple: true })
class Loader extends React.Component {
	render() {
		return (
			<div className="preloader-wrapper small active">
				<div className="spinner-layer spinner-green-only">
					<div className="circle-clipper left">
						<div className="circle" />
					</div>
					<div className="gap-patch">
						<div className="circle" />
					</div>
					<div className="circle-clipper right">
						<div className="circle" />
					</div>
				</div>
			</div>
		);
	}
}

export default Loader;
