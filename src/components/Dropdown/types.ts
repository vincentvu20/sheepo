export interface IDropdownProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string;
  renderLabel?: React.ReactNode;
  options: {
    label: string;
    action?: () => void;
    icon?: React.ReactNode;
  }[];
  containerClass?: string | undefined;
}
