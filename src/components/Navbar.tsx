import {
  Flex,
  // Box,
  Text,
  Link,
  Button,
  DropdownMenu,
  // NavigationMenu
} from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <Flex gap="3" justify="between">
      <Text as="p">JOB NEST HUB</Text>
      <Flex gap="6" justify="between" align="center">
        <Link weight="medium" color="gray">Jobs</Link>
        <Button variant="soft">Login / Register</Button>
        <Button>For Employers</Button>
      </Flex>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button>
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Link weight="medium" color="gray">Jobs</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Button variant="soft">Login / Register</Button>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Button>For Employers</Button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  )
}

export default Navbar