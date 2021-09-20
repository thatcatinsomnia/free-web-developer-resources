import { Grid } from "@chakra-ui/react";

import Card from '../Card/Card';

const Content = () => {
  return (
    <Grid maxW="8xl" width="100%" height="100%" flex="1" 
      templateColumns={{
        sm: "repeat(auto-fit, minmax(320px, 1fr))",
      }}
      justifyContent="center"
      gap="6"
    >
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Grid>
  )
};

export default Content;