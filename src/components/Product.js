import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
	render() {
		return <div>
		<h1>{this.props.name}</h1>
		<h1>{this.props.producer}</h1>
		<h1>{this.props.color}</h1>
		<h1>{this.props.weight}</h1>
		</div>

	}
}

Product.defaultProps = {
	hasWatermark: false
}

let nums = [];
for (let i = 80; i <= 300; i++) {
	nums.push(i)
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: PropTypes.oneOf(nums).isRequired
}

export default Product; 