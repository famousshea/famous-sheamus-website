import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import WatercolorImage from "./WatercolorImage";
import YouTube from "./YouTube";

const sharedComponents = {
  Image,
  WatercolorImage,
  YouTube,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  // This is optional (?), so existing pages passing only 'code' won't break
  components?: Record<string, React.ComponentType<any>>;
}

export function MDXContent({ code, components }: MDXProps) {
  const Component = useMDXComponent(code);
  // We inject the shared components so your MDX files can access them automatically
  return <Component components={{ ...sharedComponents, ...components }} />;
}