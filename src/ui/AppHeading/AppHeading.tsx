interface IAppHeading {
  headingLevel: "1" | "2" | "3" | "4" | "5" | "6";
  headingText: string;
}

export const AppHeading = ({ headingLevel, headingText }: IAppHeading) => {
  function renderAppHeading() {
    switch (headingLevel) {
      case "1":
        return <h1>{headingText}</h1>;
      case "2":
        return <h2>{headingText}</h2>;
      case "3":
        return <h3>{headingText}</h3>;
      case "4":
        return <h4>{headingText}</h4>;
      case "5":
        return <h5>{headingText}</h5>;
      case "6":
        return <h6>{headingText}</h6>;
    }
  }

  return renderAppHeading();
};
