import { useEffect, useState } from "react";
import { Professional } from "@/entities/professional";
import { ApiService } from "@/services/ApiService";

export function useIndex() {
  const [listProfessionals, setListProfessionals] = useState<Professional[]>(
    []
  );

  useEffect(() => {
    ApiService.get("/professionals").then((response) =>
      setListProfessionals(response.data)
    );
  }, []);

  return { listProfessionals };
}
