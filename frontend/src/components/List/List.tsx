import {
  Description,
  Informations,
  ListItem,
  ListStyled,
  Name,
  Photo,
  Value,
} from "./List.style";

export const List = () => {
  return (
    <ListStyled>
      <ListItem>
        <Photo src="https://github.com/alexandrerogeriosn93.png"></Photo>
        <Informations>
          <Name>Alexandre Rogério</Name>
          <Value>R$100.00 por hora</Value>
          <Description>Tecnólogo em Sistemas para Internet</Description>
        </Informations>
      </ListItem>
      <ListItem>
        <Photo src="https://github.com/django.png"></Photo>
        <Informations>
          <Name>Alexandre Rogério Silva Nunes</Name>
          <Value>R$120.00 por hora</Value>
          <Description>Tecnólogo em Sistemas para Internet</Description>
        </Informations>
      </ListItem>
    </ListStyled>
  );
};
