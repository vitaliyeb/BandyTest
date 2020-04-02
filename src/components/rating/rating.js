import React, {Component} from 'react';
import {connect} from "react-redux";
import { updateRating } from './../../actions/actions'
import './rating.styl'

class  Rating extends Component{
    render() {
        let {rating, id, updateRating} = this.props;
        return(
            <div className='rating'>
                <p className='rating__section' onClick={()=>updateRating(rating + 1, id) }>+</p>
                <p className='rating__section'>{ rating }</p>
                <p className='rating__section' onClick={()=>updateRating(rating + (-1), id)} >-</p>
            </div>
        )
    }
};

let mapDispatchToProps = { updateRating };

export default connect(null, mapDispatchToProps)(Rating);