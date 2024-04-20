import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-5xl font-bold", poppin.className)}>Contact Me</h1>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Header;
