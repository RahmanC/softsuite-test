import { ConditionalProps } from "types";

const ConditionalRender = (props: ConditionalProps) => {
  if (!props.isVisible) return null;
  return props.children;
};

export default ConditionalRender;
