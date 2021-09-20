import { Flex, Box, Heading, Text, Wrap, WrapItem, Tag } from '@chakra-ui/react';

const Card = () => {
  return (
    <Flex p="6" flexDirection="column" bg="#fff" shadow="base" borderRadius="base">
      <Heading size="md" mb="4" color="cyan.800">Some Package</Heading>
      <Box color="gray.600">itaque dolore adipisci pariatur assumenda dolor, reiciendis iste doloremque nisi! Iste sequi nesciunt doloremque similique delectus! Voluptatibus, eum vitae?</Box>
      <Wrap mt="16" spacing="1">
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 1</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 2</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 3</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 4</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 5</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">asdfasdfasdfasdfadsf</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 5</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 5</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 5</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 5</Tag></WrapItem>
        <WrapItem><Tag fontSize="xs" bg="teal.500" color="#fff" borderRadius="base">tag 5</Tag></WrapItem>
      </Wrap>
    </Flex>
  );
};

export default Card;