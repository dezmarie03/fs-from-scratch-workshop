import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import Masthead from "../components/Masthead";
import { useUser } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useUser();

  return (
    <Masthead
      color="gray"
      roundImage
      subtitle="Profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistCount} public playlists`}
      image="https://placekitten.com/200"
    >
      <Box color="white" paddingX="2rem">
        <Box marginBottom="1rem">
          <Text fontSize="2xl" fontWeight={700}>Top artists this month</Text>
          <Text fontSize="sm">Only visible to you</Text>
        </Box>
        <Flex>
          {
            artists.map(artist => (
              <Box paddingRight="1rem" width="20%" key={artist.id}>
                <Box bg="gray.900" borderRadius=".25rem" padding="1rem">
                  <Image
                    src="https://placekitten.com/300/300"
                    alt={`Headshot for ${artist.name}`}
                    borderRadius="100%"
                  />
                  <Box marginTop="1rem">
                    <Text fontSize="large">{artist.name}</Text>
                    <Text fontSize="sm">Artist</Text>
                  </Box>
                </Box>
              </Box>
            ))
          }
        </Flex>
      </Box>
    </Masthead>
  );
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  }
};

export default Home;
