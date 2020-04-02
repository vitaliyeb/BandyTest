import React, {Component} from 'react';

export default class TimeComponent extends Component{
    constructor(){
        super();
        this.state={
            pastTense: ''
        };
        this.timer;
        this.createConfigTime = (time) =>{
            const   newTime     = new Date().valueOf(),
                    difference  = newTime - time,
                    minute      = Math.ceil(difference/60000),
                    hour        = Math.ceil(difference/3600000),
                    day         = Math.ceil(difference/86400000);

            if (minute < 60) return {title: `${minute===1? 'минуту' : `${minute} минут`} назад`, nextUpdate: 30};
            if (hour < 24) return {title: `${hour===1 ? 'час': `${hour} часа`} назад`, nextUpdate: 1800};
            return {title: `${day===1 ? 'день' : `${day} дня`} назад`, nextUpdate: 43200};
        };
        this.nextUpdate = ({title, nextUpdate})=> {
            this.setState({pastTense: title});
            this.timer = setTimeout(()=>{this.setState(this.nextUpdate(this.createConfigTime(this.props.time)))}, nextUpdate)
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    componentDidMount() {
        let {time} = this.props;
        this.nextUpdate(this.createConfigTime(time));
    }

    render() {
        return(
            <p className='comment-other__time'>{this.state.pastTense}</p>
        )
    }
}