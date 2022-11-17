import React from 'react';
import './MovieList.css';
// import img from './Assets/media/avatar.jpg';

const MovieList = (props) => {

    return (<>
        <div className='container'>
            <div className='card'>
                <div className='imgDiv'>
                    <img width="100%" src={props.imgsrc} alt={props.imgalt} />
                </div>
                <div className='headingDiv'>
                    <h1>{`${props.ranking} - ${props.title} (${props.year})`}</h1>
                </div>
                <div className='amntDist'>
                  <h5>  distributor : {props.distributor} </h5>
                </div>
                <div className='amntDist'>
                    <h5> amount: {props.amount} </h5>
                </div>
            </div>
        </div>
    </>);
}

export default MovieList;