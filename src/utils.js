export const generateImageSource = posterPath => {
  return {
    uri: `https://image.tmdb.org/t/p/original/${posterPath}`,
  };
};

export const resolveStyle = (tabletStyle, mobileStyle, breakpoint) => {
  return breakpoint === 'tablet' ? tabletStyle : mobileStyle;
};
