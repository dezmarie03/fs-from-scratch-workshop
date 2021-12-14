import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const Sidebar = () => {
  const { playlists } = usePlaylist();

  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX=".5rem" color="gray">
      <Box height="100%" paddingY="1rem">
        <Box width="120px" marginBottom="1rem" paddingX="1rem">
          <NextImage src="/trax_logo.svg" width={120} height={60} />
        </Box>
        <Box marginBottom="1rem">
          <List spacing={2}>
            {
              navMenu.map(menu => (
                <ListItem paddingX="1rem" key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon as={menu.icon} color="white" marginRight="1rem" />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))
            }
          </List>
        </Box>
        <Box marginBottom="1rem">
          <List spacing={2}>
            {musicMenu.map(item => (
              <ListItem paddingX="1rem" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={item.icon} color="white" marginRight="1rem" />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" marginTop="1rem" overflowY="auto">
          <List spacing={2}>
            {playlists.map(playlist => (
              <ListItem paddingX="1rem" key={playlist.id}>
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: '/playlist/[id]',
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>
                      {playlist.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
