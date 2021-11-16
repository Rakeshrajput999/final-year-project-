import React from 'react'
import Card from './Card'

const Gallary = () => {
    const arr=[1,2,3,4,5,6]
    return (
      <div className="sm:tw-grid sm:tw-grid-cols-3  sm:tw-gap-4 tw-flex tw-flex-col sm:tw-w-screen">
        {arr.map(() => {
          return <Card />;
        })}
      </div>
    );
}

export default Gallary
