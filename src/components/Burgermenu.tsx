import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';

const Burgermenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        //display={{ base: 'block', md: 'block' }}
      />
      <MenuList>
        <MenuItem icon={<AddIcon />} command='⌘T'>
          New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command='⌘O'>
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Burgermenu;
