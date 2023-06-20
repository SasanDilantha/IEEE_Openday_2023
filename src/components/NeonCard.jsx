import React from 'react'

const NeonCard = ({text}) => {
    return (
      <React.Fragment>
        <div className="flex items-center text-center rounded-md bg-purple-600 p-3 my-2 max-w-xl lg:p-8 text-white shadow-2xl shadow-purple-500/50 duration-300 ease-in hover:rotate-6 hover:bg-emerald-500 hover:shadow-emerald-500/50">
          {text}
        </div>
      </React.Fragment>
    );
}
 
export default NeonCard;