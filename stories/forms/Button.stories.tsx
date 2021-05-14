import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Button, ButtonProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Button,
  title: "Forms/Button",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "ghost", "link", "pill", "unstyled"],
      },
    },
    colorScheme: {
      control: {
        type: "select",
        options: ["primary", "error", "warning", "success", "info"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    spinnerPlacement: {
      control: {
        type: "radio",
        options: ["start", "end"],
      },
    },
  },
} as Meta

const UsageTemplate: Story<ButtonProps> = (args) => {
  const { t } = useTranslation()
  return <Button {...args}>{t("forms_button_text")}</Button>
}

export const Solid = UsageTemplate.bind({})
Solid.args = {
  colorScheme: "primary",
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: "",
  // rightIcon: <></>,
  size: "md",
  // spinner: <></>,
  spinnerPlacement: "start",
  variant: "solid",
} as ButtonProps
Solid.parameters = {
  docs: {
    source: {
      code: `
<Button>button</Button>
`,
    },
  },
}

export const Outline = UsageTemplate.bind({})
Outline.args = {
  colorScheme: "primary",
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: "",
  // rightIcon: <></>,
  size: "md",
  // spinner: <></>,
  spinnerPlacement: "start",
  variant: "outline",
} as ButtonProps
Outline.parameters = {
  docs: {
    source: {
      code: `
<Button variant="outline">button</Button>
`,
    },
  },
}

export const Ghost = UsageTemplate.bind({})
Ghost.args = {
  colorScheme: "primary",
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: "",
  // rightIcon: <></>,
  size: "md",
  // spinner: <></>,
  spinnerPlacement: "start",
  variant: "ghost",
} as ButtonProps
Ghost.parameters = {
  docs: {
    source: {
      code: `
<Button variant="ghost">button</Button>
`,
    },
  },
}

export const Link = UsageTemplate.bind({})
Link.args = {
  colorScheme: "primary",
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: "",
  // rightIcon: <></>,
  size: "md",
  // spinner: <></>,
  spinnerPlacement: "start",
  variant: "link",
} as ButtonProps
Link.parameters = {
  docs: {
    source: {
      code: `
<Button variant="link">button</Button>
`,
    },
  },
}

export const Pill = UsageTemplate.bind({})
Pill.args = {
  colorScheme: "primary",
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: "",
  // rightIcon: <></>,
  size: "xs",
  // spinner: <></>,
  spinnerPlacement: "start",
  variant: "pill",
} as ButtonProps
Pill.parameters = {
  docs: {
    source: {
      code: `
<Button variant="pill">button</Button>
`,
    },
  },
}

export const Unstyled = UsageTemplate.bind({})
Unstyled.args = {
  colorScheme: "primary",
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: "",
  // rightIcon: <></>,
  size: "md",
  // spinner: <></>,
  spinnerPlacement: "start",
  variant: "unstyled",
} as ButtonProps
Unstyled.parameters = {
  docs: {
    source: {
      code: `
<Button variant="unstyled">button</Button>
`,
    },
  },
}
