import { Flex, Stack, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex bg="#0D0D0D" h="200px" align="center" justify="center">
      <Text fontWeight="bold" fontSize={40} color="blue">
        to
      </Text>
      <Text fontWeight="bold" fontSize={40} color="purple">
        do
      </Text>
    </Flex>
  );
}
