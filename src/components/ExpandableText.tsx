import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 30;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        variant="ghost"
        fontWeight="bold"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Show less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
