import React from 'react';
import Loader from "react-loader-spinner";

const Spinner = () => {
    return (
        <Loader
        type="Puff"
        color="#1890ff"
        height={100}
        width={100}
        timeout={1000} //3 secs
      />
    )
}

export default Spinner
