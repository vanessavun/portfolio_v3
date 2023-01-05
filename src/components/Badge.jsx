import React from 'react'

function Badge({badge}) {
    return (
        <li className="mx-1 px-1 bg-black text-white rounded-lg text-xs">
          {badge}
        </li>
      );
}

export default Badge