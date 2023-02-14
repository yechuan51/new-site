import { render } from "@testing-library/react";
import NavBarComp from "@/components/main_nav_bar/navBar";

it("render unchanged", () => {
  const { container } = render(
    <NavBarComp
      items={[
        { key: "item1", displayText: "Item 1", href: "/item1" },
        { key: "item2", displayText: "Item 2", href: "/item2" },
      ]}
    />
  );
  expect(container).toMatchSnapshot();
});