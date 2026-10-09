export function useMeta() {
  const title = "LAWN for External Agencies";
  const description =
    "Welcome to Hillsborough County's employee intranet, the LAWN. This site provides authorized external agency users with secure access to select County information and resources.";

  const { origin } = useRequestURL();

  const lawnLogo = `${origin}/logo.png`;
  const countyLogo = `${origin}/logo.png`;

  return {
    title,
    description,
    lawnLogo,
    countyLogo,
  };
}
