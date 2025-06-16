export interface FrameworkOption {
  name: string;
  availableFor: string[]; // project types this framework is available for
}

export const Frameworks: FrameworkOption[] = [
  {
    name: "nestjs",
    availableFor: ["backend"],
  },
  {
    name: "react",
    availableFor: ["frontend", "ui-lib"],
  },
  {
    name: "playwright",
    availableFor: ["e2e"],
  },
  {
    name: "cypress",
    availableFor: ["e2e"],
  },
];

export const getAvailableFrameworks = (projectType: string): string[] => {
  return Frameworks.filter((framework) =>
    framework.availableFor.includes(projectType)
  ).map((framework) => framework.name);
};
