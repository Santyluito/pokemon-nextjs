import {
  Navbar as NavMain,
  useTheme,
  Text,
  Image,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     width: "100%",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     padding: "2px 20px",
    //     backgroundColor: theme?.colors.backgroundContrast.value,
    //   }}
    // >
    <NavMain isBordered variant="floating">
      <NavMain.Brand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt="icono de la app"
          width={70}
          height={70}
          css={{ paddingInlineEnd: 20 }}
        />
        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Text color="secondary" h2>
              P
            </Text>
            <Text color="warning" h3>
              okemon
            </Text>
          </Link>
        </NextLink>
      </NavMain.Brand>
      <NavMain.Content activeColor="warning" hideIn="xs">
        <NavMain>
          <NextLink href="/favorities" passHref legacyBehavior>
            <Link>
              <Text color="text">Favoritos</Text>
            </Link>
          </NextLink>
        </NavMain>
      </NavMain.Content>
    </NavMain>
    // </div>
  );
};
