import { Card, CardContent } from "./Card";

interface TestimonialItemProps {
  title: string;
  testify: string;
}

function TestimonialItem({ title, testify }: TestimonialItemProps) {
  return (
    <Card className="w-[60%] md:w-full shadow-sm border-0 bg-background transition-all duration-300 hover:scale-105 flex flex-col">
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-bold mb-3">
          {title[0]}
        </div>
        <h3 className="font-semibold text-brand mb-2">{title}</h3>
        <p className="text-muted text-base italic">"{testify}"</p>
      </CardContent>
    </Card>
  );
}

export default TestimonialItem;
