import { Card, CardContent } from "./Card";
import React from "react";

interface SectionsCardsProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

function SectionsCards({ title, description, icon: Icon }: SectionsCardsProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 flex flex-col items-center text-center">
        {Icon && <Icon className="w-10 h-10 text-brand mb-3" />}
        <div className="min-h-15">
          <h3 className="text-lg font-semibold mb-1 text-secondary">{title}</h3>
        </div>
        <div className="min-h-15">
          <p className="text-sm text-muted">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default SectionsCards;
