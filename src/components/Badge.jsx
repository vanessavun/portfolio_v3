import React from 'react'

function Badge({badge}) {
    return (
        <li className="mx-1 p-1 bg-blue-800 text-white rounded-lg text-xs">
          {badge}
        </li>
      );
}

export default Badge