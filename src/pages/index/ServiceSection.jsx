import { Heading, Box, GridItem } from "@chakra-ui/react";

import Grid from "../../components/CardGrid";
import Card from "../../components/Card";
import CardImageTitle from "../../components/CardImageTitle";
import CardListContent from "../../components/CardListContent";

import content from "../../content/homepage/sluzby";
import links from "../../content/links";

const ServiceSection = ({ children, ...props }) => {
    return (
        <Box as="section" id={content.id} px="5%" {...props}>
            <Heading py={5} textAlign="center">
                {content.title}
            </Heading>
            <Grid>
                {content.sluzby.map((item, i) => {
                    return (
                        <GridItem
                            as="article"
                            id={item.name.toLocaleLowerCase()}
                            colStart={{
                                base: 2,
                                md: (i + 1) % 2 == 0 ? 4 : 2,
                            }}
                            key={i}
                        >
                            <Card key={i}>
                                <CardImageTitle
                                    title={item.name}
                                    href={links.sluzby[item.hrefName].href}
                                    spacing={8}
                                >
                                    {item.img}
                                </CardImageTitle>
                                <CardListContent>{item.body}</CardListContent>
                            </Card>
                        </GridItem>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ServiceSection;
