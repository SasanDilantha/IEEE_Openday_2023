import React from 'react'

const Card = ({image , title , content , link}) => {
    return (
      <React.Fragment>
        <div className="flex flex-col rounded-xl bg-slate-600 max-w-xl overflow-hidden">
          <img src={image} alt="card"/>
          <h3 className="px-3 text-xl font-bold text-white">{title}</h3>
          <p className="px-3 text-md text-white italic mt-1">{content}</p>
          <a
            href={link}
            className="mb-2 me-3 w-32 self-end rounded-md bg-orange-600 px-3 py-1 text-center font-semibold text-white duration-300 ease-in hover:bg-teal-600"
          >
            See more...
          </a>
        </div>
      </React.Fragment>
    );
}
 
export default Card;