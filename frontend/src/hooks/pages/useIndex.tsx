import { useEffect, useState } from "react";
import { Professional } from "@/entities/professional";
import { ApiService } from "@/services/ApiService";

export function useIndex() {
  const [listProfessionals, setListProfessionals] = useState<Professional[]>(
    []
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [professionalSelected, setProfessionalSelected] =
    useState<Professional | null>(null);

  useEffect(() => {
    ApiService.get("/professionals").then((response) =>
      setListProfessionals(response.data)
    );
  }, []);

  useEffect(() => {
    clearForm();
  }, [professionalSelected]);

  function clearForm() {
    setName("");
    setEmail("");
  }

  return {
    listProfessionals,
    name,
    setName,
    email,
    setEmail,
    professionalSelected,
    setProfessionalSelected,
  };
}
