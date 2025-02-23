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
        <Photo src="https://github.com/xandaosilva.png"></Photo>
        <Informations>
          <Name>Alexandre Rogério</Name>
          <Value>R$100.00 por hora</Value>
          <Description>Tecnólogo em Sistemas para Internet</Description>
        </Informations>
      </ListItem>
    </ListStyled>
  );
};
