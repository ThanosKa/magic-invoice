import "@testing-library/jest-dom/vitest";

if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}

if (!Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
}

if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {};
}

vi.mock("next/navigation", () => {
  const push = vi.fn();
  const replace = vi.fn();
  return {
    useRouter: () => ({
      push,
      replace,
      prefetch: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
    }),
    usePathname: () => "/",
    useSearchParams: () => new URLSearchParams(),
    useParams: () => ({}),
    redirect: vi.fn(),
    notFound: vi.fn(),
  };
});

vi.mock("next/link", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: React.forwardRef(function Link(props, ref) {
      const { href, children, ...rest } = props;
      return React.createElement("a", { href, ref, ...rest }, children);
    }),
  };
});
