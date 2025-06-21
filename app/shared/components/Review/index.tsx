import { FC } from "react";
import Box from "../../ui/Box";


type Props = {
  text: string,
}

export const Review:FC<Props> = ({text}) => {
  const HtmlRenderer = (htmlText : string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlText }} />;
  };
  return(
    <Box>
      {HtmlRenderer(text)}
    </Box>
  );
}