import clsx from 'classnames';

export const Container = ({
  children,
  className,
  ...other
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx(
        'mx-auto max-w-[1304px] px-4 sm:px-6 lg:px-8 text-black flex flex-col',
        className,
      )}
      {...other}>
      {children}
    </div>
  );
};
