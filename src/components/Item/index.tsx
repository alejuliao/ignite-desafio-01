import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Checkbox, Flex, Text } from '@chakra-ui/react';

export function Item() {
  return (
    <Flex bg="#262626" gap={4} align="center" p={5} borderRadius={8} mt={2}>
      <Checkbox
        cursor="pointer"
        borderWidth="1px"
        borderRadius="100%"
        boxShadow="100%"
        borderColor="blue"
        _checked={{
          bg: 'purple',
          color: 'white',
          borderColor: 'purpleDark',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        // px={1}
        // py={1}
      />
      <Text color="#F2F2F2">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Text>
      <Button
        bg="transparent"
        color="#808080"
        type="button"
        _hover={{ bg: 'gray.400', color: 'danger' }}
        transition="all 0.2s"
        onClick={() => {
          console.log('foi');
        }}
      >
        <DeleteIcon w={5} h={5} />
      </Button>
    </Flex>
  );
}
