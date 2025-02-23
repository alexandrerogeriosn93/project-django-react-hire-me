import { HeaderContent, Logo } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContent>
      <div>
        <Logo src="/images/logo.svg" />
      </div>
      <p>Encontre o profissional para seu trabalho!</p>
    </HeaderContent>
  );
};
