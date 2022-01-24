export const SomeComponent = () => {
  return (
    <div
      css={(theme) => ({
        color: theme.colors.primary,
      })}
    >
      <div
        css={{
          color: "blue",
        }}
      >
        such emotion
      </div>
      much wow
    </div>
  );
};
