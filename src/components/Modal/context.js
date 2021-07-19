import React, { useContext } from 'react';

const ModalPortalContext = React.createContext(null);

export default ModalPortalContext;
export const useModalPortalContext = () => useContext(ModalPortalContext);
