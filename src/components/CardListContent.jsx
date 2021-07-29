import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const CardContent = ({ children, ...props }) => {
    return (
        <List {...props} px={5}>
            {children.map((body, i) => (
                <ListItem key={i}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {body}
                </ListItem>
            ))}
        </List>
    );
};

export default CardContent;
