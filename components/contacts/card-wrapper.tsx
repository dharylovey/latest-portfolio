
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/contacts/header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
  return (
  <Card className="w-[400px] shadow lg">
    <CardHeader>
        <Header label={headerLabel}/>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
  );
};

export default CardWrapper;
