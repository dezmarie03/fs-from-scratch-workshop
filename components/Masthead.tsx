import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Masthead = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="2rem" align="end" marginBottom="2rem">
        <Box padding="1rem">
          <Image boxSize={160} src={image} borderRadius={roundImage ? '100%' : '.25rem'} alt="" />
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
