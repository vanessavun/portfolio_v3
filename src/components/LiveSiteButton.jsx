import React from 'react'

function LiveSiteButton({url, name}) {
    return (
        <button
          type="button"
          className={`text-indigo-100 font-medium text-sm px-4 bg-indigo-500 rounded-lg ${name && "mr-2"}`}
          onClick={(e) => {
            e.preventDefault();
            window.open(url, "_blank");
          }}
        >
          {name ? name : "See Live"}
        </button>
      );
}

export default LiveSiteButton