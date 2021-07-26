import {
    Input,
    List,
    ListItem,
    Box,
    IconButton,
    InputGroup,
    useColorMode,
    InputRightElement,
    Tooltip,
    InputLeftElement,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

const Item = ({ value, onClick, ...rest }) => (
    <ListItem px={4} py={1} onClick={onClick} {...rest}>
        {value}
        <Input hidden value={value} readOnly />
    </ListItem>
);

const ClearButton = ({ onClick }) => (
    <Tooltip label="Smazat" aria-label="Smazat">
        <IconButton
            onClick={onClick}
            icon={<VscChromeClose />}
            size="md"
            border="none"
            _hover={{ outline: "none", bg: "transparent" }}
            _focus={{ boxShadow: "none", bg: "transparent" }}
            _active={{ bg: "transparent" }}
        />
    </Tooltip>
);

function AutoComplete({ options = [], limit = 10 }) {
    const { colorMode } = useColorMode();
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [opened, setOpened] = useState(false);

    const filterOptions = (initialChars) => {
        if (!initialChars) return null;
        const filtered = options
            .filter(
                (o) =>
                    o.startsWith(initialChars.toLowerCase()) ||
                    o.startsWith(initialChars.toUpperCase()) ||
                    o.startsWith(
                        initialChars[0].toUpperCase() +
                            initialChars.slice(1).toLowerCase()
                    )
            )
            .slice(0, limit);
        return filtered.length ? filtered : null;
    };

    const isMatch = () => {
        return searchResult?.indexOf(searchValue) >= 0;
    };

    const handleOnFocus = () => {
        if (!opened && searchResult) setOpened(true);
    };

    const handleOnSelect = (e) => {
        let selectedValue = e.target.children[0].value;
        if (!selectedValue) return;
        // set value to selection
        setSearchValue(selectedValue);
        // close search list
        setOpened(false);
    };

    const handleClearButtonClick = () => {
        setSearchValue(""), setOpened(false);
    };

    const handleOnChange = (e) => {
        const inputValue = e.currentTarget.value;
        const options = filterOptions(inputValue);

        setSearchValue(inputValue);

        if (options) {
            setSearchResult(options);
            setOpened(true);
        } else {
            setSearchResult(null);
            setOpened(false);
        }
    };

    const showAutocompleteList = () => {
        if (!searchResult || !opened) return <></>;

        const items = searchResult.map((res, i) => (
            <Item
                key={res + i}
                value={res}
                onClick={handleOnSelect}
                tabIndex={-1}
                _hover={{
                    bg: colorMode === "light" ? "gray.200" : "blue.800",
                    cursor: "pointer",
                }}
            />
        ));

        return (
            <List
                position="absolute"
                w="100%"
                left="0"
                zIndex="dropdown"
                bg={colorMode === "dark" ? "secondary" : "primary"}
                borderBottomLeftRadius="md"
                borderBottomRightRadius="md"
                borderLeftWidth="medium"
                borderRightWidth="medium"
                borderBottomWidth="medium"
                borderColor={colorMode === "light" ? "secondary" : "primary"}
                tabIndex={-1}
            >
                {items}
            </List>
        );
    };

    return (
        <Box position="relative" onFocus={handleOnFocus}>
            <InputGroup>
                {searchValue !== "" && (
                    <InputLeftElement>
                        {isMatch() ? (
                            <CheckCircleIcon color="green.500" />
                        ) : (
                            <WarningIcon color="orange.500" />
                        )}
                    </InputLeftElement>
                )}
                <Input
                    type="text"
                    value={searchValue}
                    onChange={handleOnChange}
                    borderWidth="medium"
                    borderColor={
                        colorMode === "light" ? "secondary" : "primary"
                    }
                    borderBottomWidth={opened && "thin"}
                    borderBottomRadius={opened && "0"}
                />
                <InputRightElement>
                    <ClearButton onClick={handleClearButtonClick} />
                </InputRightElement>
            </InputGroup>
            {showAutocompleteList()}
        </Box>
    );
}

export default AutoComplete;
