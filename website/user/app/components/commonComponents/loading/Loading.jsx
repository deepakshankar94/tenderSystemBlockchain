/**
 * @author: dharmik
 * @since: Sat Mar 17 2018 16:23:28 GMT+0530 (IST)
 * @file: Loading.jsx
 *
 * @copyright: KNOLSKAPE Solutions Pvt Ltd
 **/

/**
 *
 * Loading component used during application initial data loading usually.
 *
 **/

import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import imageConsts from 'constants/images';
import { SkinModule } from 'react-skin';
import styles from './loading.sass';

@SkinModule
@CSSModules(styles, { allowMultiple: true })
class Loading extends React.Component {

	render() {
		const {
			getSkinHash
		} = this.props;

		return (
			<div styleName="loading-component">
				<div>
					<img src={imageConsts.get('IMG_LOADING')} alt={getSkinHash('label_loading')} />
				</div>
				<div>
					{getSkinHash('label_loading')}
				</div>
			</div>
		);
	}
}

Loading.propTypes = {
	getSkinHash: PropTypes.func
};
Loading.defaultProps = {};

export default Loading;
