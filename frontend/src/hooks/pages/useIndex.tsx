import { useState } from "react";
import { Professional } from "@/entities/professional";

export function useIndex() {
  const [listProfessionals, setListProfessionals] = useState<Professional[]>([
    {
      id: 1,
      name: "Alexandre Rogério",
      description: "Tecnólogo em Sistemas para Internet",
      value_per_hour: 100,
      photo: "https://github.com/alexandrerogeriosn93.png",
    },
    {
      id: 2,
      name: "Django",
      description: "Tecnologia para o desenvolvimento backend",
      value_per_hour: 300,
      photo: "https://github.com/django.png",
    },
    {
      id: 3,
      name: "React",
      description: "Tecnologia para o desenvolvimento frontend",
      value_per_hour: 500,
      photo: "https://github.com/react.png",
    },
    {
      id: 4,
      name: "Python",
      description: "Linguagem de programação",
      value_per_hour: 120,
      photo: "https://github.com/python.png",
    },
  ]);

  return { listProfessionals };
}
