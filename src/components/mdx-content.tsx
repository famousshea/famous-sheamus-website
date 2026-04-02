import * as runtime from "react/jsx-runtime";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component />;
}
