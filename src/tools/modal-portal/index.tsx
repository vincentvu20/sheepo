import React from 'react';
import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch, useAppSelector } from '@/hooks/common-hook';
import { dismissModal } from '@/redux/slices';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalPortalBase = () => {
  const { isVisible, content = <></> } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(dismissModal());
  };

  return (
    <Dialog
      open={isVisible}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description">
      <>{content}</>
    </Dialog>
  );
};

export const ModalPortal = () => {
  return <ModalPortalBase />;
};
