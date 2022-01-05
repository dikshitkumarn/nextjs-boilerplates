import { ExtendedSidebarLayout } from "@/layouts";
export const SuperadminLayout: React.FC = (props) => {
  const { children } = props;
  // const headerLinks = {}
  // const sidebarLinks = {}

  return (
    <ExtendedSidebarLayout
    // headerLinks={headerLinks}
    // sidebarLinks={sidebarLinks}
    >
      {children}
    </ExtendedSidebarLayout>
  );
};