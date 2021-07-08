import Grid from "./Grid";
import Card from "./Card";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import { Heading, Box, GridItem } from "@chakra-ui/react";
import content from "../../public/content/homepage/sluzby";
import links from "../../public/content/links";

const ServiceSection = ({ children, ...props }) => {
    return (
        <Box as="section" id="sluzby" px="5%" {...props}>
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
                                <CardTitle title={item.name} href={links.sluzby[item.hrefName].href} Image={item.img} />
                                <CardContent>{item.body}</CardContent>
                            </Card>
                        </GridItem>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ServiceSection;
