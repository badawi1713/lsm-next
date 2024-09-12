import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import React from "react";
import "../src/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      return <main className={inter.className}>{story()}</main>;
    },
  ],
};

export default preview;
