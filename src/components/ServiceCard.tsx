import { Card, CardContent } from "../components/Card";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 flex flex-col items-center text-center">
        {Icon && <Icon className="w-10 h-10 text-brand mb-3" />}
        <h3 className="text-lg font-semibold mb-1 text-secondary">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
