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
  const [message, setMessage] = useState("");

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

  function validateData() {
    return name.length > 0 && email.length > 0;
  }

  function registerJob() {
    if (!professionalSelected) {
      setMessage("Profissional inválido.");
      return;
    }

    if (!validateData()) {
      setMessage("Preencha todos os campos.");
      return;
    }

    ApiService.post(`professional/${professionalSelected.id}/job`, {
      name,
      email,
    })
      .then(() => {
        setProfessionalSelected(null);
        setMessage("Cadastrado com sucesso.");
      })
      .catch((error) => {
        setMessage(error.response?.data.message);
      });
  }

  return {
    listProfessionals,
    name,
    setName,
    email,
    setEmail,
    professionalSelected,
    setProfessionalSelected,
    registerJob,
    message,
    setMessage,
  };
}
