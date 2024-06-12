import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="#fff1e5">
      {/* Header */}
      <Box as="header" bg="#fff1e5" color="black" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              Financial Times
            </Heading>
            <Flex>
              <Link href="#" mx={2} color="black">
                Home
              </Link>
              <Link href="#" mx={2} color="black">
                World
              </Link>
              <Link href="#" mx={2} color="black">
                Business
              </Link>
              <Link href="#" mx={2} color="black">
                Tech
              </Link>
              <Link href="#" mx={2} color="black">
                Markets
              </Link>
              <Link href="#" mx={2} color="black">
                Opinion
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="md" mb={4}>
              Top Stories
            </Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>
              World News
            </Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>
              Business News
            </Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="#fff1e5" color="black" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <Flex>
              <Link href="#" mx={2} color="black">
                About Us
              </Link>
              <Link href="#" mx={2} color="black">
                Contact
              </Link>
              <Link href="#" mx={2} color="black">
                Privacy Policy
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;