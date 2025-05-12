import { heroMock } from "@/mocks/hero";
import { LandingPage } from "@/screens/LandingPage/LandingPage";
import { changeHead } from "@/utils/changeHead";

export const metadata = changeHead({
  title: "Samuel - Portfólio",
  description: heroMock.subtitle,
});

export default function Home() {
  return <LandingPage />;
}
