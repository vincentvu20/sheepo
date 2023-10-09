import React, {
  createRef,
  forwardRef,
  Fragment,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';

const EMPTY_JSX = <></>;
type ModalsPortal = {
  show: (children: React.ReactNode) => number;
  dismiss: () => void;
};
export const _modal = createRef<ModalsPortal>();

const ModalPortalBase = forwardRef((_, ref) => {
  const [content, setContent] = useState<React.ReactNode>(EMPTY_JSX);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onShow = useCallback((body: React.ReactNode) => {
    setContent(body);
    setTimeout(() => setIsVisible(true), 0);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
  };

  useImperativeHandle(ref, () => {
    return {
      show(body: React.ReactNode) {
        onShow(body);
      },
      dismiss() {
        dismiss();
      },
    };
  });

  return (
    <Transition.Root show={isVisible} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsVisible(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 opacity-40 bg-gray-800 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden bg-white rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6 min-w-[200px]">
                {content}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
});

export const ModalPortal = () => {
  return <ModalPortalBase ref={_modal} />;
};
