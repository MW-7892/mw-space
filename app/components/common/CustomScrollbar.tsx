import { ReactNode } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function CustomScrollbar({ children }: { children: ReactNode }) {
  return (
    <SimpleBar
      className="h-[calc(100vh-theme(space.20))]"
      forceVisible="y"
      autoHide={false}
    >
      {children}
    </SimpleBar>
  );
}
