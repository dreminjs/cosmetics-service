import clsx from "clsx";

interface IProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export const Overlay = ({ children, isVisible }: IProps) => {
  return (
    <div className={clsx("fixed inset-0 bg-black/50 ", !isVisible && "hidden")}>
      {children}
    </div>
  );
};
