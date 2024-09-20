import SideNav from "./side-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-4 box-content grid grid-cols-[200px_1fr] gap-4">
      <SideNav />
      <div className="rounded-lg bg-background p-4">{children}</div>
    </div>
  );
}
