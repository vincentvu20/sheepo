import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { CloseIcon } from '..';

interface ModalProps {
  open: boolean;
  toggle: () => void;
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  footer?: ReactNode;
  headless?: boolean;
  position?: 'center' | 'start';
}
export default function FormModal({
  open,
  toggle,
  children,
  title,
  description,
  className,
  footer,
  headless,
  position = 'center',
}: ModalProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={toggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex min-h-full items-${position} justify-center p-4`}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                className={clsx(
                  'w-full overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-2xl',
                  className,
                )}>
                {!headless ? (
                  <>
                    <header className="px-6 flex justify-between items-center">
                      {title ? (
                        <Dialog.Title className="text-lg font-semibold text-gray-700 py-6 dark:text-gray-300">
                          {title}
                        </Dialog.Title>
                      ) : null}
                      <button onClick={toggle}>
                        <CloseIcon />
                      </button>
                    </header>
                    <hr className="border-gray-300 dark:border-gray-500" />
                  </>
                ) : null}
                <div className="mb-6 px-6">
                  {description ? (
                    <Dialog.Description className="text-sm text-gray-700 dark:text-gray-400">
                      {description}
                    </Dialog.Description>
                  ) : null}
                  {children}
                </div>
                {footer}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
