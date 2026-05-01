import {
  BriefcaseBusiness,
  Info,
  LaptopMinimal,
  MapPin,
  User,
} from "lucide-react";

export const NEO_FETCH_ART = `
 ___      ___
|\\  \\    /  /|
\\ \\  \\  /  / /
 \\ \\  \\/  / /
  \\ \\    / /
   \\ \\__/ /
    \\|__|/
`;

export const NEOFETCH_DATA = [
  {
    Icon: User,
    label: "name",
    value: "Vignesh G",
  },
  {
    Icon: BriefcaseBusiness,
    label: "role",
    value: "Full-Stack Developer",
  },
  {
    Icon: LaptopMinimal,
    label: "stack",
    value: "React · Next.js · Node",
  },
  {
    Icon: MapPin,
    label: "location",
    value: "Tamil Nadu, India",
  },
  {
    Icon: Info,
    label: "status",
    value: "Open to interesting work",
  },
];

export const PROMPT_COMPONENT = (
  <span className="mr-2 inline-block">
    <span className="text-chart-2">vicky</span>
    <span className="text-muted-foreground">@</span>
    <span className="text-chart-3">portfolio</span>
    <span className="text-muted-foreground">:</span>
    <span className="text-primary">~/portfolio</span>
    <span className="text-muted-foreground">$</span>
  </span>
);
