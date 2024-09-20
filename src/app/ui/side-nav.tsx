import Link from "next/link";
import Avatar from "./avatar";

export default function SideNav() {
  return (
    <aside className="h-screen max-w-72 rounded-lg bg-foreground p-4">
      <div className="flex flex-col">
        <div className="border-b-foregroundSecondary flex-1 border-b-2 pb-2">
          <Link href={"/"}>
            <Avatar />
          </Link>
        </div>
        <div className="flex-auto py-6">
          <ul>
            <SideNavItem text="Basic" />
          </ul>
        </div>
        <div className="flex-1"></div>
      </div>
    </aside>
  );
}

interface SideNavItemProps {
  text: string;
}

const SideNavItem: React.FC<SideNavItemProps> = ({ text }) => {
  return (
    <li className="border-foregroundSecondary hover:bg-foregroundSecondary group cursor-pointer rounded-lg border p-2 hover:shadow">
      <Link href={"/basic"}>
        <p className="text-foregroundSecondary group-hover:text-white">
          {text}
        </p>
      </Link>
    </li>
  );
};
