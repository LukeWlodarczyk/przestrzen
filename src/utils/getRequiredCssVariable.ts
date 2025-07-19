function getRequiredCssVariable(variableName: string) {
  const rootStyles = getComputedStyle(document.documentElement);
  const variable = rootStyles.getPropertyValue(variableName);

  if (!variable)
    throw new Error(`Missing required css variable: ${variableName}`);

  return variable;
}

export default getRequiredCssVariable;
