interface NavigationProps {
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
}

function Navigation({ leftItem, rightItem }: NavigationProps) {
  return (
    <nav className="flex gap-16 items-center justify-between h-50 w-full">
      {leftItem || <div />}
      {rightItem || <div />}
    </nav>
  );
}

export default Navigation;
