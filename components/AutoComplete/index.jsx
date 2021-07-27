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
import { useRef, useState } from "react";

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
    const [activeItem, setActiveItem] = useState(null);
    let autocompleteList = useRef(null);

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

    const isMatch = () => searchResult?.indexOf(searchValue) >= 0;

    const handleOnFocus = () => {
        if (!opened && searchResult) setOpened(true);
    };

    const handleOnSelect = (e) => {
        const selectedValue = e.target.children[0].value;
        if (!selectedValue) return;
        // set value to selection
        setSearchValue(selectedValue);
        // close search list
        setOpened(false);
        setActiveItem(null);
    };

    const handleClearButtonClick = (e) => {
        setSearchValue("");
        setOpened(false);
        setActiveItem(null);
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
            setActiveItem(null);
        }
    };

    const handleOnKeyUp = (e) => {
        if (!opened) return;
        const getActiveItemValue = () => {
            if (activeItem === null) return null;
            const list = autocompleteList.current.children;
            let item = Array.from(list).filter((item) =>
                item.classList.contains("active")
            );
            if (item.length === 0) return null;
            item = item[0];
            item.classList.remove("active");
            return item?.firstElementChild.value;
        };
        const activateItem = (direction) => {
            const list = autocompleteList.current.children;
            const size = list.length - 1;
            const current = activeItem ?? -1;
            let next = current + direction;

            // remove .active class from all
            Array.from(list).forEach((item) => item.classList.remove("active"));
            // decide which one to make active next
            if (next > size) {
                next = 0;
                list[next].classList.add("active");
            } else if (next < 0) {
                next = size;
                list[next].classList.add("active");
            } else {
                list[next].classList.add("active");
            }

            setActiveItem(next);
        };
        switch (e.keyCode) {
            // ARROW DOWN
            case 40:
                activateItem(1);
                break;
            // ARROW UP
            case 38:
                activateItem(-1);
                break;
            // ENTER
            case 13:
                setSearchValue(getActiveItemValue);
                setOpened(false);
                setActiveItem(null);
                break;
            default:
                break;
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
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
                _focus={{
                    bg: colorMode === "light" ? "gray.200" : "blue.800",
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
                ref={autocompleteList}
                sx={{
                    "& > li.active": {
                        bg: colorMode === "light" ? "gray.200" : "blue.800",
                    },
                }}
            >
                {items}
            </List>
        );
    };

    return (
        <Box
            as="form"
            position="relative"
            onSubmit={onSubmitHandler}
            onFocus={handleOnFocus}
        >
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
                    onKeyUp={handleOnKeyUp}
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
