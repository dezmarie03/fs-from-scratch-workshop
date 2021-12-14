import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Masthead = ({
  children,
  image,
  subtitle,
  title,
  description,
  roundImage
}) => {
  return (
    <Box height="100%" overflowY="auto" bg="black">
      <Flex bg="gray.900" padding="2rem" align="end" marginBottom="2rem">
        <Box padding="1rem">
          <Image boxSize={160} src={image} borderRadius={roundImage ? '100%' : '.25rem'} />
        </Box>
        <Box padding="1rem" lineHeight="1.2" color="white">
          <Text fontSize="sm" fontWeight={700} casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">
            {title}
          </Text>
          <Text fontSize="sm">
            {description}
          </Text>
        </Box>
      </Flex>
      <Box paddingY="2rem">
        {children}
      </Box>
    </Box>
  );
};

export default Masthead;
