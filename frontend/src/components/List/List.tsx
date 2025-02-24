import { Professional } from "@/entities/professional";
import {
  Description,
  EmptyList,
  Informations,
  ListItem,
  ListStyled,
  Name,
  Photo,
  Value,
} from "./List.style";

interface PropsList {
  professionals: Professional[];
}

export const List = (props: PropsList) => {
  return (
    <div>
      {props.professionals.length > 0 ? (
        <ListStyled>
          {props.professionals.map((professional) => (
            <ListItem key={professional.id}>
              <Photo src={professional.photo}></Photo>
              <Informations>
                <Name>{professional.name}</Name>
                <Value>
                  {professional.value_per_hour.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  por hora
                </Value>
                <Description>{professional.description}</Description>
              </Informations>
            </ListItem>
          ))}
        </ListStyled>
      ) : (
        <EmptyList>Não já profissionais cadastrados</EmptyList>
      )}
    </div>
  );
};
