import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Item } from '../Item';
export function ContentToDo() {
  return (
    <Flex direction="column" mt={10}>
      <Flex>
        <Box>
          <Text fontWeight="bold" color="blue">
            Tarefas criadas
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontWeight="bold" color="blue">
            Concluídas{' '}
          </Text>
        </Box>
      </Flex>
      <Item />
      <Item />
      <Item />
    </Flex>
  );
}
