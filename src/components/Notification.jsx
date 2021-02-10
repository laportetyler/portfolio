import React, { useEffect } from 'react'
import { Layer } from 'grommet'

const Notification = ({ onClose, duration, position, children }) => {

    const closeAfterTimeout = () => {
        if (duration) {
            setTimeout(() => {
                onClose();
            }, duration)
        }
    }

    useEffect(closeAfterTimeout, []);

    return (
        <Layer position={position || 'top'} margin="medium" plain={!!duration} responsive>
            {children}
        </Layer>
    )

}

export default Notification;